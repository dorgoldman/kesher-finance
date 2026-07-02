# Maxit — Project CLAUDE.md

> Read this at the start of every session working on this project.

---

## What This Project Is

**Maxit (מקסיט)** is a Hebrew-language personal finance site at **getmaxit.co.il**.

It has two content types:
1. **Free calculators** — mortgage, loan, salary net-of-tax
2. **Guide articles** — long-form SEO content on mortgages, loans, interest rates

Revenue model: Google AdSense (publisher ID `ca-pub-4485608003839489`). Ads render only when `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` env var is set — otherwise `AdSlot` renders nothing.

Google Analytics: `G-5D8RS8626V`.
Google Search Console verification: `a2oR7FNyG2Bn8wvrR0MxQH24bH0KGd9uNbhU1XGLcbY`.

---

## Tech Stack

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 15.5.2 (App Router, pinned exact) | `output: 'export'` — fully static, no SSR. **Do not upgrade past 15.5.2** — `@cloudflare/next-on-pages` peer range caps at 15.5.2 and CF Pages `npm clean-install` fails the deploy. |
| Hosting | Cloudflare Pages | Deploy: `npm run pages:build && npm run pages:deploy` |
| Styling | Tailwind CSS v3 | Custom design tokens (see below) |
| Font | Heebo (Google Fonts) | Hebrew + Latin subsets |
| Language | TypeScript | Strict mode |
| Analytics | @next/third-parties | `<GoogleAnalytics>` in root layout |
| Ads | Google AdSense | `<AdSlot>` component, env-gated |

**Key commands:**
```
npm run dev          # local dev
npm run build        # Next.js static export → /out
npm run pages:build  # Cloudflare adapter (wraps next build)
npm run pages:deploy # Push /out to Cloudflare Pages
```

**Important:** `output: 'export'` means no server-side features. Everything must prerender at build time. No `useSearchParams` without a Suspense boundary. No dynamic routes without `generateStaticParams`.

---

## Repository

- **GitHub:** `dorgoldman/kesher-finance` (repo name stays; local folder was renamed to "Maxit Financials")
- **Branch:** `main` — pushing main = deploying to Cloudflare Pages
- **Local path:** `C:\Users\goldm\Desktop\Claude\Maxit Financials`

---

## Design Tokens (Tailwind)

| Token | Value | Use |
|---|---|---|
| `primary-600` | `#16a34a` | Buttons, links, accents |
| `primary-50/100` | light green | CTA backgrounds |
| `accent-900` | `#1c1917` | Headings |
| `accent-600` | `#57534e` | Body text |
| `accent-500` | `#78716c` | Secondary text |
| `surface` | `#fafaf9` | Page background |
| Font | `Heebo` | Always `font-heebo` class |
| Direction | `rtl` | Set on `<html dir="rtl">` |
| Border radius | `rounded-2xl` = 1rem | Cards, inputs |

**CSS utility classes (globals.css):**
- `.container-page` — `max-w-4xl` centered
- `.container-wide` — `max-w-6xl` centered
- `.card` — white rounded border shadow
- `.card-interactive` — card with hover lift
- `.btn-primary` / `.btn-secondary`
- `.input-field` — RTL-safe form input (44px min-height)
- `.badge-primary` — green category tag
- `.section-title` / `.section-subtitle`
- `.glass` — frosted glass (navbar)
- `.display-number` — tabular-nums for financial figures
- `.cc-input` / `.cc-label` — dark inputs inside gradient track cards

---

## Constants (`src/lib/constants.ts`)

```ts
SITE_NAME     = 'Maxit.מקסיט'
SITE_NAME_HE  = 'מקסיט'
SITE_NAME_EN  = 'Maxit'
SITE_URL      = 'https://getmaxit.co.il'   // canonical domain
SITE_LOCALE   = 'he_IL'
```

**Rule:** Always use `SITE_URL` for canonicals and JSON-LD `url` fields. Never hardcode `https://maxit.co.il` — that domain redirects but is not the canonical.

---

## Data Models (Component-Level)

No database. All data is computed client-side in calculator components.

### MortgageTrack (`MortgageCalculator.tsx`)
```ts
interface MortgageTrack {
  id: string
  type: 'fixed' | 'variable' | 'prime' | 'eligibility'
  label: string
  amount: number        // ILS principal for this track
  rate: number          // annual interest rate (%)
  years: number         // term
  // computed: monthly payment, total interest, amortization rows
}
```
Calculator supports 1–4 simultaneous tracks. Outputs: per-track monthly payment, total monthly payment, total interest paid, full amortization table.

### LoanCalculator inputs
```ts
principal: number    // ILS
annualRate: number   // %
years: number
// method: Shpitzer (equal payments) only
// outputs: monthly payment, total interest, amortization table
```

### SalaryCalculator inputs (2026 Israeli tax constants)
```ts
grossSalary: number    // ILS/month
creditPoints: number   // default 2.25 (Israeli resident)
pensionRate: number    // % employee contribution (default 6%)
// Tax brackets: 10%/14%/20%/31%/35%/47%/50% (2026 amendment 288)
// NI rates: 0.4% low / 7.0% high (threshold: 60% of avg wage ₪13,600)
// Health: 3.1% low / 5.0% high
// outputs: income tax, NI, health, pension deduction, net salary
```
**Update the tax constants in `SalaryCalculator.tsx` every January** from official sources.

### AdSlot variants
```ts
'header'              // 728×90 desktop / 320×50 mobile — below page title
'sidebar'             // 300×250 desktop only — sticky aside
'post-results-mobile' // 320×50 mobile only — after calculator results
'bottom'              // 970×90 desktop / 320×50 mobile — page footer
'sticky-mobile'       // 320×50 fixed bottom, mobile only
```

---

## Screens & Routes

### `/` — Homepage
Hero calculator (mortgage), trust bar (bank name chips), tools grid (3 cards), guides section (6 featured article cards with "כל המדריכים" CTA). JSON-LD: WebSite.

### `/tools` — Tools Hub
Grid of 3 calculator cards + coming-soon cards.

### `/tools/mortgage-calculator` — Mortgage Calculator
`MortgageCalculator` client component. Multi-track tмiхil builder. Outputs: total monthly payment, per-track breakdown, full amortization table with toggle. JSON-LD: WebApplication + BreadcrumbList + FAQ.

### `/tools/loan-calculator` — Loan Calculator
`LoanCalculator` client component. Single-track Shpitzer. Outputs: monthly payment, total interest, amortization table. JSON-LD: WebApplication + BreadcrumbList + FAQ.

### `/tools/salary-calculator` — Salary Net Calculator
`SalaryCalculator` client component. 2026 Israeli tax brackets. Outputs: income tax, NI, health insurance, pension, net salary breakdown. JSON-LD: WebApplication + BreadcrumbList + FAQ.

### `/tools/mortgage-refinance-calculator` — Refinance Calculator
`RefinanceCalculator` client component. Compares current mortgage vs refinance offer incl. עמלת פירעון מוקדם. Outputs: monthly saving, net total saving, break-even point, verdict strip. Built July 2026 to capture the site's #1 GSC query (מחשבון מחזור משכנתא). JSON-LD: WebApplication + BreadcrumbList + FAQ. Cross-linked with the מחזור-משכנתא guide (its CalculatorCTA points here).

### `/guides` — Guides Hub
15-article grid, categorized (הלוואות / משכנתאות). No pagination yet.

### Guide articles — 15 total

**Loans (הלוואות) — Latin slugs:**
| Slug | Topic |
|---|---|
| `/guides/halvaot-madrich` | General loan guide |
| `/guides/halvaah-hutz-bankait` | Non-bank loans |
| `/guides/halvaah-miyedit` | Instant loans |
| `/guides/halvaah-lchol-matara` | Personal loans |
| `/guides/halvaah-lerechev` | Car loans |
| `/guides/halvaah-lmesoravim` | Loans for rejected applicants |
| `/guides/gmachim-p2p` | Interest-free loans, P2P |

**Loans (הלוואות) — Hebrew slugs:**
| Slug | Topic |
|---|---|
| `/guides/הלוואה-מקרן-השתלמות` | Study fund loans |
| `/guides/ריבית-אפקטיבית` | Effective interest rate |
| `/guides/בקשה-להלוואה` | Loan application process |

**Mortgages (משכנתאות) — Hebrew slugs:**
| Slug | Topic |
|---|---|
| `/guides/כמה-משכנתא-לפי-משכורת` | How much mortgage by salary |
| `/guides/ריבית-פריים` | Prime rate explained |
| `/guides/שפיצר-מול-קרן-שווה` | Shpitzer vs equal principal |
| `/guides/משכנתא-ראשונה` | First-time buyer guide |
| `/guides/מחזור-משכנתא` | Mortgage refinancing |

### `/about`, `/contact`, `/privacy`
Static pages, minimal content.

---

## Article Page Structure (mandatory pattern)

Every guide article must follow this structure exactly:

```
src/app/guides/[slug]/page.tsx  ← server component (NO 'use client')

1. export const metadata: Metadata = { title, description, alternates.canonical }
2. const CANONICAL = 'https://getmaxit.co.il/guides/[slug]'
3. const jsonLd = [ Article, BreadcrumbList, FAQPage ]  ← array of 3 schemas
4. const TOC = [{ id, label }, ...]  ← all H2s
5. JSON-LD scripts rendered at top of return
6. <Breadcrumbs> — ראשי > מדריכים > [article name]
7. <AdSlot variant="header"> — ABOVE article only
8. <MobileArticleTOC items={TOC}> — mobile dropdown
9. Two-column grid: article (1fr) + sidebar (280px)
10. Article: category badge → H1 → date → content → CTAs → קרא גם → disclaimer
11. Sidebar: sticky — <AdSlot variant="sidebar"> + TOC nav + CTA card
12. <AdSlot variant="bottom"> — BELOW article only
```

**Ad rule:** AdSlots only above and below the full article. Never inside the article body, never between paragraphs, never inside tables.

---

## SEO Rules

- **Meta title format:** `[Topic] | Maxit.מקסיט` (template set in layout.tsx)
- **Homepage** uses `title: { absolute: '...' }` to bypass template
- **Canonical:** always full URL with `https://getmaxit.co.il`
- **JSON-LD on every page:** minimum Article + BreadcrumbList. FAQ pages add FAQPage schema.
- **Sitemap:** `src/app/sitemap.ts` — add new articles manually
- **Disclaimer** at the end of every article, exact wording, no variation:
  > **אין באמור ייעוץ פיננסי.** המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.

---

## Writing Rules (articles)

All article content follows the **stop-slop** skill rules. Key Hebrew-specific rules:

**Forbidden phrases — never use:**
- בנוסף לכך / יתרה מכך / חשוב לציין / לסיכום / בסופו של דבר / כפי שניתן לראות / לאור האמור לעיל

**Structural rules:**
- Never open with a definition ("X הוא...")
- Vary paragraph length: mix 1-sentence, 3-sentence, 5-sentence paragraphs
- At least one single-sentence paragraph per article
- Address reader as אתה/את directly — not "אנשים" or "לווים"
- Name real Israeli institutions: בנק לאומי, בנק הפועלים, בנק טפחות, מזרחי טפחות, דיסקונט, כלל, מגדל, מנורה, הפניקס, מור, אלטשולר שחם, הלמן אלדובי
- Use ₪ for amounts — not "שקל" or "ש\"ח"
- Every article: one inline CTA to a calculator, "קרא גם" section with ≥2 cross-links

**Internal linking:** every article must link to ≥2 other articles. No orphan articles.

---

## Build Status

**Current state:** ✅ Clean build, all 22 routes prerender as static (`○`)

Article bundle size: ~886 B per Hebrew-slug article (server components, zero client JS).
Calculator pages: 3.7–6.4 kB (client components for interactivity).
Shared JS: ~99.9 kB.

**Known items to watch:**
- `apple-touch-icon.png` reference removed; apple icon now uses `favicon.svg` directly

**AdSense E-E-A-T (June 2026):** Articles carry a named author (דור גולדמן) byline linking to `/about`, JSON-LD `author` is `Person` (not Organization), and each has a "מקורות" line citing official authorities (Bank of Israel / Kol-Zchut / Capital Market Authority). `/about` has editorial standards + sources + Person schema. Do not introduce anonymous "צוות מקסיט" authorship again, and never claim licensed-advisor credentials.

---

## Components Reference

| Component | Type | Purpose |
|---|---|---|
| `Header` | client | Sticky glassmorphism navbar, hamburger mobile menu |
| `Footer` | server | 4-col grid, brand, links, legal disclaimer |
| `Logo` | server | Brand mark SVG |
| `Breadcrumbs` | server | Structured breadcrumb trail |
| `AdSlot` | client | AdSense wrapper (env-gated, renders nothing if no publisher ID) |
| `MobileArticleTOC` | client | Collapsible TOC dropdown for mobile |
| `MortgageCalculator` | client | Multi-track mortgage engine |
| `LoanCalculator` | client | Single-track Shpitzer loan engine |
| `SalaryCalculator` | client | 2026 Israeli tax net salary engine |
| `HeroCalculator` | client | Homepage mortgage calculator widget |
| `CalcMethodology` | server | Expandable methodology section on calculator pages |
| `ComingSoonCard` | server | Placeholder card for future tools |
| `SEO / JsonLd` | server | `generateSEOMetadata()` helper + `<JsonLd>` renderer |

**Templates:**
- `src/templates/article-page.tsx` — exports `CalculatorCTA` component (inline CTA block)
- `src/templates/tool-page.tsx` — calculator page shell

---

## Hard Rules

1. **Never use `'use client'` on guide article pages.** They must stay server components for static prerender. Extract any interactive element into its own `*Client.tsx` file.
2. **Never hardcode the domain.** Use `SITE_URL` from `src/lib/constants.ts`.
3. **Never put AdSlots inside article body.** Above and below the article wrapper only.
4. **Always update `sitemap.ts`** when adding a new article.
5. **Always add metadata** (`export const metadata`) to every page — no page without a title and description.
6. **Tax constants in `SalaryCalculator.tsx`** must be updated every January from official sources.
7. **Table styling:** `overflow-x-auto` wrapper, `bg-primary-600 text-white` header row, zebra striping with `bg-accent-50/60`.
8. **Never commit secrets.** The `.env.local` file holds AdSense publisher ID and any future env vars — never stage it.
