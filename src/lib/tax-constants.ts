// ─────────────────────────────────────────────────────────────────────────────
// ISRAELI TAX CONSTANTS — THE SINGLE SOURCE OF TRUTH FOR THIS SITE
// ─────────────────────────────────────────────────────────────────────────────
//
// WHY THIS FILE EXISTS (created 2026-08-05)
// -----------------------------------------
// Every tax figure on this site — in calculators AND in guide prose — must come
// from here. Before this file, the numbers lived inside SalaryCalculator.tsx
// while guide articles hand-copied figures researched separately per article.
// That produced a steady stream of wrong numbers going live:
//
//   * The calculator's own UI hint said one credit point = ₪249 while its own
//     constant said 242, 328 lines apart in the same file. Readers saw ₪249.
//   * A guide draft computed a savings example from ₪16,150 as the old 20%
//     ceiling. The real pre-amendment figure is ₪16,720 (below). The published
//     headline was ~45% overstated, and the wrong threshold reached the
//     FAQPage structured data.
//   * The same bracket values were independently "researched" for each new
//     article, so each article was a fresh chance to get a different one wrong.
//
// THE RULES
// ---------
//  1. Never state a tax figure anywhere on this site that isn't exported here.
//  2. Need a figure that isn't here? Add it here WITH its official source and
//     effective date, in the same PR that uses it. Never inline it.
//  3. Never "verify" a figure by web search against what's in this file. This
//     file is the record; a search result is not. If you believe a value here
//     is wrong, that's a PR changing this file with a citation — not a
//     different number quoted in an article.
//  4. Historical values (PRE_AMENDMENT_288) exist so old-vs-new comparisons
//     have a sourced basis. Do not reconstruct "the old number" from memory.
//
// UPDATING EACH JANUARY — change this file, nothing else:
//   Income tax brackets : Israel Tax Authority (רשות המסים), "לוח עזר לחישוב מס
//                         הכנסה ממשכורת ושכר עבודה" — www.taxes.gov.il
//   NI / Health rates   : https://www.btl.gov.il/Mediniyut/Actualia/Pages/contribution_rates.aspx
// ─────────────────────────────────────────────────────────────────────────────

/** Tax year these constants apply to */
export const TAX_YEAR = 2026;

/**
 * Monthly progressive income tax brackets (מדרגות מס הכנסה חודשיות).
 * upTo - upper limit of this bracket in ILS/month (Infinity = no cap)
 * rate - marginal rate for income that falls in this bracket
 *
 * The official booklet models the top rate as 47% "on every additional shekel"
 * plus a separate 3% surtax (סעיף 121ב) on income above ₪60,130/month —
 * mathematically equivalent to a flat 50% bracket above that threshold, which
 * is how it's modeled here.
 *
 * Verified against the official booklet 2026-07-15 (T21): the 10%/14%/35% and
 * 47%-to-surtax thresholds had been wrong (stale pre-2026 figures). The
 * 20%/31% thresholds (Amendment 288, retroactive to 2026-01-01, finalized
 * 2026-03-30) were already correct and independently corroborated.
 */
export const INCOME_TAX_BRACKETS: ReadonlyArray<{ readonly upTo: number; readonly rate: number }> = [
  { upTo:  7_010,   rate: 0.10 }, // 10%
  { upTo: 10_060,   rate: 0.14 }, // 14%
  { upTo: 19_000,   rate: 0.20 }, // 20% - raised from ₪16,720 per Amendment 288 (Jan 2026)
  { upTo: 25_100,   rate: 0.31 }, // 31% - raised from ₪23,150 per Amendment 288 (Jan 2026)
  { upTo: 46_690,   rate: 0.35 }, // 35%
  { upTo: 60_130,   rate: 0.47 }, // 47%
  { upTo: Infinity, rate: 0.50 }, // 47% + 3% surtax (סעיף 121ב) above ₪60,130/month
];

/**
 * PRE-Amendment-288 bracket ceilings, for old-vs-new comparisons ONLY.
 *
 * These are the sourced historical values. An article comparing "before and
 * after Amendment 288" MUST use these rather than a remembered or re-searched
 * figure — getting this wrong is precisely what produced a ~45% overstated
 * savings headline in a 2026-08 draft.
 *
 * Note which brackets Amendment 288 actually moved: ONLY the 20% and 31%
 * ceilings changed. Every other threshold is unchanged, which means they
 * cancel out of any old-vs-new difference — if your comparison result doesn't
 * depend on the two figures below, your calculation is not measuring
 * Amendment 288.
 */
export const PRE_AMENDMENT_288 = {
  /** Old ceiling of the 20% bracket (ILS/month), pre-2026-01-01 */
  BRACKET_20_CEILING: 16_720,
  /** Old ceiling of the 31% bracket (ILS/month), pre-2026-01-01 */
  BRACKET_31_CEILING: 23_150,
  /** Monthly value of one credit point before the 2026 freeze (ILS/month) */
  CREDIT_POINT_VALUE: 249,
} as const;

/** Monthly value of one credit point - נקודת זיכוי (ILS/month) */
export const CREDIT_POINT_VALUE = 242; // frozen for 2026 (was ₪249 pre-amendment)

/** Base credit points by residency/sex, per Israel Tax Authority */
export const CREDIT_POINTS_BASE = {
  /** Israeli resident, male */
  MALE: 2.25,
  /** Israeli resident, female */
  FEMALE: 2.75,
} as const;

/** Reference average wage used by NII for bracket thresholds (ILS/month) */
export const NI_AVERAGE_WAGE = 13_600;

/** 60% of average wage - threshold between low and high NI/health rates (ILS/month) */
export const NI_LOW_CEILING = Math.round(NI_AVERAGE_WAGE * 0.6); // ≈ 8,160 ILS

/** Maximum monthly income subject to NI contributions - 5× average wage (ILS/month) */
export const NI_MAX_INCOME = NI_AVERAGE_WAGE * 5; // ≈ 68,000 ILS

/** Employee National Insurance rates (ביטוח לאומי עובד) */
export const NI_RATE_LOW = 0.004;  // 0.4% on income up to NI_LOW_CEILING
export const NI_RATE_HIGH = 0.070; // 7.0% between NI_LOW_CEILING and NI_MAX_INCOME

/** Health insurance rates (ביטוח בריאות) - collected alongside NI */
export const HEALTH_RATE_LOW = 0.031;  // 3.1% on income up to NI_LOW_CEILING
export const HEALTH_RATE_HIGH = 0.050; // 5.0% on income above NI_LOW_CEILING

/**
 * Maximum monthly salary base for pension contribution tax deduction (ILS/month).
 * Employee pension contributions on salary above this ceiling are not
 * tax-deductible. Verify annually.
 */
export const PENSION_DEDUCTION_CEILING = 36_000;

// ─────────────────────────────────────────────────────────────────────────────
// Formatting helpers — so a figure rendered in prose and the same figure
// rendered in a calculator can never drift apart in presentation either.
// ─────────────────────────────────────────────────────────────────────────────

/** Format an ILS amount the way this site writes it: ₪16,720 */
export const ils = (n: number): string => `₪${n.toLocaleString('en-US')}`;

/** Format a rate as a whole-number percentage: 0.31 → "31%" */
export const pct = (rate: number): string => `${Math.round(rate * 100)}%`;
