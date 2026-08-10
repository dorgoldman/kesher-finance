# Google Search Console — Maxit (getmaxit.co.il)

> Log of GSC issues found, fixes shipped, and what to check going forward.
> Update this file every time GSC state is reviewed — don't let findings live only in chat.

---

## Site facts

- Property: `https://getmaxit.co.il/`
- Verification: `a2oR7FNyG2Bn8wvrR0MxQH24bH0KGd9uNbhU1XGLcbY` (in `layout.tsx`)
- Sitemap: `https://getmaxit.co.il/sitemap.xml` (`src/app/sitemap.ts`)
- Domain age: live since ~May 2026 — still a "new domain" from Google's perspective as of Aug 2026
- Hosting: Cloudflare Pages — **cannot serve non-ASCII (Hebrew) file paths**, confirmed hard constraint (see root `CLAUDE.md`)

---

## 2026-08-08 — Root cause found: stale Hebrew canonicals from the ASCII slug migration

**Symptom (GSC → Indexing → Pages, checked 2026-08-08):**
- 34 indexed / 7 not indexed (4 reasons)
- `Not found (404)` — 2 pages
- `Page with redirect` — 1 page
- `Alternative page with proper canonical tag` — 1 page
- `Crawled – currently not indexed` — 3 pages (examples not yet drilled into)

**Root cause:** At some point the guide routes were migrated from Hebrew URL slugs to ASCII slugs (required — CF Pages 404s on non-ASCII paths). The migration moved the **folder names** but did not update the **canonical URL** hardcoded inside each page file. Result: 9 of 17 guide pages under `src/app/guides/` were live at their correct ASCII route (e.g. `/guides/mahzor-mashkanta`) but their own `<link rel="canonical">`, Open Graph `url`, and JSON-LD `url`/breadcrumb all declared a **different, dead Hebrew URL** (e.g. `/guides/מחזור-משכנתא`) that 404s on Cloudflare. This told Google "don't index me, index that other URL" — and that other URL doesn't exist.

This directly explains the GSC symptoms:
- `maslolei-mashkanta`'s canonical pointed at `/guides/מסלולי-משכנתא` → dead URL → contributed to the 404 count
- `mahzor-mashkanta`'s canonical pointed at `/guides/מחזור-משכנתא` → Google obeyed the canonical, deferred to the dead page, and reported the real page as "Alternative page with proper canonical tag" (i.e. refused to index the good page in favor of a broken one)
- Likely a contributor to some of the "Crawled – currently not indexed" pages too, since the self-referential signal was broken sitewide for these 9 pages

**Pages fixed** (canonical constant changed from Hebrew slug → matching ASCII slug):
1. `bakasha-lehalva`
2. `spitzer-keren-shva`
3. `kama-mashkanta-lpei-maskuret`
4. `rivit-prime`
5. `maslolei-mashkanta`
6. `mahzor-mashkanta`
7. `rivit-efektivit`
8. `mashkanta-rishona`
9. `halvaah-mekarhn-hashtalmut`

Verified clean: `src/lib/guides.ts` (the central registry used by Footer, RelatedGuides, and the guides hub) already used correct ASCII hrefs throughout — the bug was isolated to the per-page `CANONICAL` constants, not the internal linking.

**Second bug, same root cause, different surface:** The Arabic mortgage calculator (`/ar/tools/mortgage-calculator`) had both its `BreadcrumbList` JSON-LD **and its visible on-page breadcrumb UI** linking to `/ar` and `/ar/tools` — neither of which exists as a real route (only `/ar/tools/mortgage-calculator` itself exists; there's no Arabic homepage or Arabic tools hub yet). This is almost certainly what fed Google the phantom `/ar` URL that showed up as a 404. Fixed: both the JSON-LD breadcrumb and the visible breadcrumb link now point to the real Hebrew homepage (`SITE_URL`) and real Hebrew tools hub (`${SITE_URL}/tools`) instead of the fake Arabic-prefixed paths.

**Also fixed (separate task, same session):** the Arabic calculator page had zero internal links pointing to it anywhere on the site — it only existed via the sitemap, with no `hreflang` connecting it to the Hebrew version. Added `hreflang` alternates (`he-IL` ⇄ `ar`) on both calculator pages, a visible language-switch link on each, and a footer link to the Arabic calculator so every page on the site links to it. This should help Google understand the page is a real, connected part of the site rather than an orphan.

**Not yet resolved / needs another GSC pass:**
- `Page with redirect` (1 page): flagged URL was `https://getmaxit.co.il/guides/ריבית-אפקסטיבית` — note this is a **misspelling** (אפקסטיבית vs. correct אפקטיבית) of a Hebrew slug that never existed as a real route even before the ASCII migration. Likely a stale crawl artifact (an old bad link somewhere, or Google's own fuzzy match), not something in our current code. No internal reference to this exact misspelled string was found in the codebase. Low priority — should self-resolve as Google re-crawls, but worth checking again in a few weeks.
- `Crawled – currently not indexed` (3 pages): examples weren't pulled during this pass. **Next time in GSC: click into this row and note the actual URLs** — if any of the 3 turn out to still carry a bad canonical this fix missed, or if there's a different cause, it needs its own diagnosis.

---

## Standing rule going forward

**Never hardcode a page's own canonical URL as anything other than that page's real, live route.** If a slug changes (e.g. any future Hebrew → ASCII migration, or a rename), update the canonical, JSON-LD `url`, breadcrumb `item`, and Open Graph `url` in the same commit as the route change — search for the old slug across the whole `guides/` and `ar/` trees before considering a slug migration done:

```
grep -rn "getmaxit.co.il/guides/[old-slug-fragment]" src/
```

A page can be 100% live and correctly routed and still never get indexed if its own metadata points Google somewhere else that's broken. This bug shipped invisibly for weeks because the page itself rendered perfectly — only the canonical tag was wrong, and nothing about visiting the page in a browser would ever reveal that.

---

## How to check GSC yourself (recurring)

1. **Search Console → Indexing → Pages** — check the not-indexed count and reasons. Click each reason row to see affected URLs.
2. **For any "Not found (404)"**: check if that URL is referenced anywhere in the codebase (canonical, breadcrumb, sitemap, internal link) — a 404 from a page Google discovered via *our own* structured data or sitemap is a bug on our side, not just "Google hasn't found it yet."
3. **For any "Alternative page with proper canonical tag"**: this means Google found the page but is deferring to a *different* URL it thinks is canonical. Check that page's own canonical tag — if it points somewhere broken, that's the bug (see 2026-08-08 case above).
4. **Request Indexing** (URL Inspection tool, 10/day quota): prioritize any URL that was just fixed, so validation can start sooner rather than waiting for Google's natural re-crawl schedule.
5. Re-check this file's "Not yet resolved" section on each pass and update it.
