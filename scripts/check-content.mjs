#!/usr/bin/env node
// Mechanical content gate, added 2026-08-25 after MaxSeo's T23 bounced 4 times and
// T42 twice on defects the DoD already required checking for by hand — most
// recently a resubmit that fixed everything a reject named but skipped the
// dash-grep step entirely. This turns "remember to run the grep" into
// "the PR can't go green without it."
//
// Checks every guide article + the central registry for:
//   1. Long dashes (— or –) — CLAUDE.md: "No long dashes. Ever. Including numeric
//      ranges — use a plain hyphen."
//   2. Forbidden filler phrases — CLAUDE.md's Writing Rules list.
//
// Deliberately NOT a native-fluency check (wrong word choice, e.g. "בעד" used for
// "up to") — that needs a human/model read, not a grep, and stays a manual DoD step.

import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const LONG_DASHES = /[—–]/g;

const FORBIDDEN_PHRASES = [
  'בנוסף לכך',
  'יתרה מכך',
  'חשוב לציין',
  'לסיכום',
  'בסופו של דבר',
  'כפי שניתן לראות',
  'לאור האמור לעיל',
];

function listTargetFiles() {
  const out = execSync('git ls-files "src/app/guides/**/page.tsx" "src/lib/guides.ts"', {
    encoding: 'utf8',
  });
  return out.split('\n').filter(Boolean);
}

let failed = false;

for (const file of listTargetFiles()) {
  const content = readFileSync(file, 'utf8');

  const dashMatches = content.match(LONG_DASHES);
  if (dashMatches) {
    failed = true;
    console.error(`\n✗ ${file}: ${dashMatches.length} long-dash violation(s)`);
    content.split('\n').forEach((line, i) => {
      if (LONG_DASHES.test(line)) {
        console.error(`    ${i + 1}: ${line.trim()}`);
      }
      LONG_DASHES.lastIndex = 0; // reset stateful regex between .test() calls
    });
  }

  for (const phrase of FORBIDDEN_PHRASES) {
    if (content.includes(phrase)) {
      failed = true;
      console.error(`\n✗ ${file}: forbidden phrase "${phrase}"`);
    }
  }
}

if (failed) {
  console.error('\ncheck-content: FAILED — fix the violations above before this can merge.');
  process.exit(1);
}

console.log(`check-content: OK — ${listTargetFiles().length} file(s) clean.`);
