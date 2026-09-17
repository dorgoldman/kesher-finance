#!/usr/bin/env node
// Markdown-twin generator, added 2026-09-17 (T49, shared/ai-visibility.md's
// site-launch checklist: "Markdown twins for every guide"). Static-site
// replacement for Cloudflare's Pro-only "Markdown for Agents" HTML->MD
// content-negotiation toggle: since this site is `output: 'export'` with no
// server, we pre-publish a plain-markdown copy of every guide at build time
// instead of converting on request.
//
// Runs AFTER `next build` (see package.json's "build" script) against the
// static HTML already emitted to /out. It does not re-derive content from
// the TSX source — it reads the same rendered HTML a browser or crawler
// gets, so the twin can never drift from what actually shipped.
//
// Fails loudly (non-zero exit) if a guide the registry expects has no built
// HTML, or produces no article content — a silent skip here would ship a
// build that looks complete but is missing twins, exactly the "silence read
// as success" failure this agency's build learnings warn about.

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const SITE_URL = 'https://getmaxit.co.il';
const OUT_DIR = join(process.cwd(), 'out');
const GUIDES_DIR = join(OUT_DIR, 'guides');
const GUIDES_REGISTRY = join(process.cwd(), 'src', 'lib', 'guides.ts');

function fail(msg) {
  console.error(`generate-md-twins: FAILED — ${msg}`);
  process.exit(1);
}

if (!existsSync(GUIDES_DIR)) {
  fail(`${GUIDES_DIR} does not exist — run "next build" first.`);
}

// Cross-check against the registry so a guide with no built HTML is a loud
// failure, not a quietly-missing twin (same shape as check-content.mjs's gate).
function registrySlugs() {
  const src = readFileSync(GUIDES_REGISTRY, 'utf8');
  const hrefPattern = /href:\s*'\/guides\/([^']+)'/g;
  const slugs = [];
  let m;
  while ((m = hrefPattern.exec(src))) slugs.push(m[1]);
  return slugs;
}

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ',
};

function decodeEntities(str) {
  return str
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&(amp|lt|gt|quot|apos|nbsp);/g, (_, name) => ENTITIES[name]);
}

// Strips any remaining tags from a fragment, keeping only text — used for
// table-cell and link-label content where nested markup adds no value.
// Replaces with a space (not '') because adjacent sibling <span>s in this
// site's markup carry no whitespace between them in the built HTML (e.g. a
// related-guide card's title span directly followed by its category span) —
// deleting the tag outright would fuse the two into one word.
function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function resolveHref(href) {
  if (/^https?:\/\//.test(href) || href.startsWith('mailto:') || href.startsWith('#')) return href;
  if (href.startsWith('/')) return SITE_URL + href;
  return href;
}

function convertTable(tableHtml) {
  const rows = [...tableHtml.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/g)].map((m) => m[1]);
  if (rows.length === 0) return '';
  const lines = [];
  rows.forEach((row, i) => {
    const cells = [...row.matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map((m) =>
      stripTags(m[1]).replace(/\|/g, '\\|')
    );
    if (cells.length === 0) return;
    lines.push(`| ${cells.join(' | ')} |`);
    if (i === 0) lines.push(`| ${cells.map(() => '---').join(' | ')} |`);
  });
  return `\n${lines.join('\n')}\n\n`;
}

function htmlToMarkdown(articleHtml) {
  let html = articleHtml;

  // Strip non-content blocks entirely.
  html = html.replace(/<script[\s\S]*?<\/script>/g, '');
  html = html.replace(/<style[\s\S]*?<\/style>/g, '');
  html = html.replace(/<svg[\s\S]*?<\/svg>/g, '');
  html = html.replace(/<!--[\s\S]*?-->/g, '');

  // Tables first (before generic tag stripping mangles the structure).
  html = html.replace(/<table[^>]*>[\s\S]*?<\/table>/g, (m) => convertTable(m));

  // Links — resolve to absolute URLs so the twin reads standalone.
  html = html.replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, (_, href, label) => {
    const text = stripTags(label);
    if (!text) return '';
    return `[${text}](${resolveHref(href)})`;
  });

  // Headings.
  html = html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, (_, t) => `\n\n# ${stripTags(t)}\n\n`);
  html = html.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/g, (_, t) => `\n\n## ${stripTags(t)}\n\n`);
  html = html.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, t) => `\n\n### ${stripTags(t)}\n\n`);
  html = html.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_, t) => `\n\n#### ${stripTags(t)}\n\n`);

  // Emphasis.
  html = html.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/g, (_, __, t) => `**${stripTags(t)}**`);
  html = html.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/g, (_, __, t) => `_${stripTags(t)}_`);

  // List items (both ul/ol treated as bullets — order isn't load-bearing for
  // AI extraction, and this site's articles use divs/cards, not real
  // <ol>/<ul>, for anything where order matters).
  html = html.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, (_, t) => `\n- ${stripTags(t)}`);
  html = html.replace(/<\/?(ul|ol)[^>]*>/g, '\n');

  html = html.replace(/<br\s*\/?>/g, '\n');
  html = html.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, (_, t) => `\n\n${stripTags(t)}\n\n`);

  // Remaining block-level wrappers (header/div/section/aside/footer) are
  // layout-only here — unwrap them but keep a paragraph break so unrelated
  // chunks (badge, byline, cards) don't run into each other.
  html = html.replace(/<\/(header|div|section|footer)>/g, '\n\n');
  html = html.replace(/<[^>]+>/g, ' '); // any remaining opening/self-closing tags

  let md = decodeEntities(html);
  // Adjacent links with nothing between them in the source (a "related
  // guides" grid, a cross-links row) render as )[ with no gap — split them
  // onto their own lines rather than fusing into one unreadable run.
  md = md.replace(/\)\[/g, ')\n\n[');
  md = md.replace(/[ \t]{2,}/g, ' ');
  md = md.replace(/^[ \t]+/gm, '');
  md = md.replace(/[ \t]+\n/g, '\n');
  md = md.replace(/\n{3,}/g, '\n\n');
  return md.trim() + '\n';
}

function extractArticle(pageHtml) {
  const m = pageHtml.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  return m ? m[1] : null;
}

function extractArticleMeta(pageHtml) {
  const scripts = [...pageHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const [, json] of scripts) {
    try {
      const data = JSON.parse(json);
      if (data['@type'] === 'Article') return data;
    } catch {
      // malformed/partial JSON-LD — skip, front-matter falls back below
    }
  }
  return null;
}

const expectedSlugs = registrySlugs();
const builtFiles = readdirSync(GUIDES_DIR).filter((f) => f.endsWith('.html'));
const builtSlugs = new Set(builtFiles.map((f) => f.replace(/\.html$/, '')));

const missing = expectedSlugs.filter((s) => !builtSlugs.has(s));
if (missing.length > 0) {
  fail(`registry lists ${missing.length} guide(s) with no built HTML: ${missing.join(', ')}`);
}

let written = 0;
for (const file of builtFiles) {
  const slug = file.replace(/\.html$/, '');
  const pageHtml = readFileSync(join(GUIDES_DIR, file), 'utf8');
  const articleHtml = extractArticle(pageHtml);
  if (!articleHtml) fail(`${file}: no <article> element found in built HTML.`);

  const meta = extractArticleMeta(pageHtml);
  const body = htmlToMarkdown(articleHtml);
  if (body.length < 200) fail(`${file}: converted markdown is suspiciously short (${body.length} chars) — check the <article> extraction.`);

  const canonical = `${SITE_URL}/guides/${slug}`;
  const frontMatter = [
    '---',
    `title: ${JSON.stringify(meta?.headline ?? slug)}`,
    `source: ${canonical}`,
    meta?.datePublished ? `datePublished: ${meta.datePublished}` : null,
    meta?.dateModified ? `dateModified: ${meta.dateModified}` : null,
    `author: ${JSON.stringify(meta?.author?.name ?? 'דור גולדמן')}`,
    '---',
    '',
    '',
  ].filter((line, i, arr) => line !== null).join('\n');

  writeFileSync(join(GUIDES_DIR, `${slug}.md`), frontMatter + body, 'utf8');
  written++;
}

console.log(`generate-md-twins: OK — ${written} markdown twin(s) written to out/guides/*.md`);
