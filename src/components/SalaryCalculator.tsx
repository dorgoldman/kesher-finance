'use client';

import { useState, useMemo, useEffect, useRef } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// 2026 ISRAELI TAX CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
// To update each January, verify from official sources:
//   Income tax brackets : https://www.gov.il/he/departments/guides/tax_level
//   NI / Health rates   : https://www.btl.gov.il/Mediniyut/Actualia/Pages/contribution_rates.aspx
// ─────────────────────────────────────────────────────────────────────────────

/** Tax year these constants apply to */
const TAX_YEAR = 2026;

/**
 * Monthly progressive income tax brackets (מדרגות מס הכנסה חודשיות).
 * upTo  - upper limit of this bracket in ILS/month (Infinity = no cap)
 * rate  - marginal rate for income that falls in this bracket
 */
const INCOME_TAX_BRACKETS: ReadonlyArray<{ readonly upTo: number; readonly rate: number }> = [
  { upTo:  7_270,   rate: 0.10 }, // 10%
  { upTo: 10_420,   rate: 0.14 }, // 14%
  { upTo: 19_000,   rate: 0.20 }, // 20% - raised from ₪16,720 per amendment 288 (Jan 2026)
  { upTo: 25_100,   rate: 0.31 }, // 31% - raised from ₪23,150 per amendment 288 (Jan 2026)
  { upTo: 48_130,   rate: 0.35 }, // 35%
  { upTo: 61_990,   rate: 0.47 }, // 47%
  { upTo: Infinity, rate: 0.50 }, // 50%
];

/** Monthly value of one credit point - נקודת זיכוי (ILS/month) */
const CREDIT_POINT_VALUE = 242; // ILS - frozen for 2026 (was ₪249 pre-amendment)

/** Reference average wage used by NII for bracket thresholds (ILS/month) */
const NI_AVERAGE_WAGE = 13_600; // ILS/month

/** 60% of average wage - threshold between low and high NI/health rates (ILS/month) */
const NI_LOW_CEILING = Math.round(NI_AVERAGE_WAGE * 0.6); // ≈ 8,160 ILS

/** Maximum monthly income subject to NI contributions - 5× average wage (ILS/month) */
const NI_MAX_INCOME = NI_AVERAGE_WAGE * 5; // ≈ 68,000 ILS

/** Employee National Insurance rates (ביטוח לאומי עובד) */
const NI_RATE_LOW  = 0.004; // 0.4% on income up to NI_LOW_CEILING
const NI_RATE_HIGH = 0.070; // 7.0% on income between NI_LOW_CEILING and NI_MAX_INCOME

/** Health insurance rates (ביטוח בריאות) - collected alongside NI */
const HEALTH_RATE_LOW  = 0.031; // 3.1% on income up to NI_LOW_CEILING
const HEALTH_RATE_HIGH = 0.050; // 5.0% on income above NI_LOW_CEILING

/**
 * Maximum monthly salary base for pension contribution tax deduction (ILS/month).
 * Employee pension contributions on salary above this ceiling are not tax-deductible.
 */
const PENSION_DEDUCTION_CEILING = 36_000; // ILS/month - verify annually

// ─────────────────────────────────────────────────────────────────────────────

/* ─── Count-up animation hook ────────────────────────────────────────────── */
function useCountUp(target: number, duration = 400): number {
  const [display, setDisplay] = useState(target);
  const rafRef  = useRef<number | undefined>(undefined);
  const fromRef = useRef(target);

  useEffect(() => {
    if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);

    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      setDisplay(target);
      fromRef.current = target;
      return;
    }

    const from = fromRef.current;
    const diff = target - from;
    if (Math.abs(diff) < 1) return;

    const t0 = performance.now();

    const tick = (now: number) => {
      const p      = Math.min((now - t0) / duration, 1);
      const eased  = 1 - Math.pow(1 - p, 3);
      const cur    = from + diff * eased;
      fromRef.current = cur;
      setDisplay(cur);
      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        fromRef.current = target;
        setDisplay(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration]);

  return display;
}

/* ─── Types ──────────────────────────────────────────────────────────────── */
interface SalaryResult {
  netSalary:         number;
  incomeTax:         number;
  nationalInsurance: number;
  healthInsurance:   number;
  pensionAmount:     number;
  totalDeductions:   number;
  effectiveTaxRate:  number;  // income-tax-only effective rate
  totalDeductionRate: number; // all deductions / gross
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function fmt(v: number): string {
  return Math.round(v).toLocaleString('he-IL');
}

function fmtCurrency(v: number): string {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(v);
}

/* ─── Core calculation ───────────────────────────────────────────────────── */
function calcNetSalary(
  gross: number,
  creditPoints: number,
  pensionPct: number,
): SalaryResult {
  // 1. Pension employee contribution
  const pensionAmount = gross * (pensionPct / 100);

  // 2. Pension deduction from income-tax base
  //    Deductible up to pensionPct% of PENSION_DEDUCTION_CEILING
  const pensionDeductible = Math.min(
    pensionAmount,
    PENSION_DEDUCTION_CEILING * (pensionPct / 100),
  );

  // 3. Income tax on (gross − pension deduction)
  const taxableIncome = Math.max(0, gross - pensionDeductible);
  let rawTax = 0;
  let prev   = 0;
  for (const bracket of INCOME_TAX_BRACKETS) {
    const slice = Math.min(taxableIncome, bracket.upTo) - prev;
    if (slice <= 0) break;
    rawTax += slice * bracket.rate;
    prev    = bracket.upTo;
  }
  const incomeTax = Math.max(0, rawTax - creditPoints * CREDIT_POINT_VALUE);

  // 4. National Insurance - based on gross (pension does NOT reduce NI base)
  const niBase = Math.min(gross, NI_MAX_INCOME);
  const nationalInsurance =
    niBase <= NI_LOW_CEILING
      ? niBase * NI_RATE_LOW
      : NI_LOW_CEILING * NI_RATE_LOW + (niBase - NI_LOW_CEILING) * NI_RATE_HIGH;

  // 5. Health Insurance - same base as NI
  const healthInsurance =
    niBase <= NI_LOW_CEILING
      ? niBase * HEALTH_RATE_LOW
      : NI_LOW_CEILING * HEALTH_RATE_LOW + (niBase - NI_LOW_CEILING) * HEALTH_RATE_HIGH;

  // 6. Totals
  const totalDeductions   = incomeTax + nationalInsurance + healthInsurance + pensionAmount;
  const netSalary         = Math.max(0, gross - totalDeductions);
  const effectiveTaxRate  = gross > 0
    ? ((incomeTax + nationalInsurance + healthInsurance) / gross) * 100
    : 0;
  const totalDeductionRate = gross > 0 ? (totalDeductions / gross) * 100 : 0;

  return {
    netSalary,
    incomeTax,
    nationalInsurance,
    healthInsurance,
    pensionAmount,
    totalDeductions,
    effectiveTaxRate,
    totalDeductionRate,
  };
}

/* ─── Slider ─────────────────────────────────────────────────────────────── */
function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
  hint?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label className="text-sm font-semibold text-white/60">{label}</label>
        <span className="text-base font-bold text-white tabular-nums">{format(value)}</span>
      </div>
      <input
        type="range"
        dir="ltr"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #22c55e ${pct}%, rgba(255,255,255,0.12) ${pct}%)`,
        }}
        aria-label={label}
      />
      {hint && <p className="text-[10px] text-white/20 mt-1">{hint}</p>}
    </div>
  );
}

/* ─── Breakdown bar ──────────────────────────────────────────────────────── */
function BreakdownBar({
  gross,
  result,
}: {
  gross: number;
  result: SalaryResult;
}) {
  if (gross === 0) return null;
  const segments = [
    { label: 'שכר נטו',      value: result.netSalary,         color: 'bg-primary-500' },
    { label: 'מס הכנסה',     value: result.incomeTax,         color: 'bg-blue-500' },
    { label: 'ביטוח לאומי',  value: result.nationalInsurance,  color: 'bg-amber-500' },
    { label: 'ביטוח בריאות', value: result.healthInsurance,    color: 'bg-violet-500' },
    { label: 'פנסיה',         value: result.pensionAmount,      color: 'bg-emerald-500' },
  ];
  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-accent-600">פירוט ברוטו → נטו</h3>
        <span className="text-sm font-medium text-accent-500">{fmtCurrency(gross)} ברוטו</span>
      </div>
      {/* Stacked bar */}
      <div className="flex h-3 rounded-full overflow-hidden bg-accent-100 mb-3">
        {segments.map((seg) => (
          <div
            key={seg.label}
            className={`${seg.color} transition-all duration-300`}
            style={{ width: `${(seg.value / gross) * 100}%` }}
            title={`${seg.label}: ${((seg.value / gross) * 100).toFixed(1)}%`}
          />
        ))}
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1.5">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-1.5 text-xs text-accent-500">
            <div className={`w-2 h-2 rounded-full ${seg.color} shrink-0`} />
            <span>{seg.label}</span>
            <span className="text-accent-400 tabular-nums">
              ({((seg.value / gross) * 100).toFixed(0)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Stat card ──────────────────────────────────────────────────────────── */
function StatCard({
  label,
  value,
  color = 'text-accent-900',
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="card text-center">
      <p className="text-xs font-medium text-accent-400 mb-1.5 leading-snug">{label}</p>
      <p className={`text-lg font-bold tabular-nums leading-tight ${color}`}>{value}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main export
═══════════════════════════════════════════════════════════════════════════ */
export default function SalaryCalculator() {
  const [gross,        setGross]        = useState(12_000);
  const [creditPoints, setCreditPoints] = useState(2.25);
  const [pensionPct,   setPensionPct]   = useState(6);

  const result  = useMemo(
    () => calcNetSalary(gross, creditPoints, pensionPct),
    [gross, creditPoints, pensionPct],
  );

  const roundedNet = Math.round(result.netSalary);
  const animated   = useCountUp(roundedNet);

  return (
    <>
      {/* ── Input card - navy gradient ── */}
      <div className="bg-gradient-to-br from-[#1a2f5e] to-[#0a1530] rounded-2xl p-6 mb-6 shadow-card-depth">

        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-6">
          <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          <span className="text-white/80 text-sm font-semibold">פרטי השכר</span>
          <span className="mr-auto inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold
                           bg-blue-500/15 border border-blue-400/20 text-blue-300">
            מדרגות {TAX_YEAR}
          </span>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          <Slider
            label="שכר ברוטו חודשי"
            value={gross}
            min={4_000}
            max={100_000}
            step={500}
            onChange={setGross}
            format={(v) => `₪${fmt(v)}`}
            hint="₪4,000 – ₪100,000 לחודש"
          />
          <Slider
            label="נקודות זיכוי"
            value={creditPoints}
            min={1}
            max={10}
            step={0.25}
            onChange={setCreditPoints}
            format={(v) => `${v} נקודות`}
            hint="תושב זכר: 2.25 · תושבת נקבה: 2.75 · כל נקודה = ₪249/חודש"
          />
          <Slider
            label="פנסיה עובד"
            value={pensionPct}
            min={0}
            max={7}
            step={0.5}
            onChange={setPensionPct}
            format={(v) => `${v}%`}
            hint="0% – 7% מהשכר · ברירת מחדל: 6% (מינימום חוקי)"
          />
        </div>

        {/* Quick mini-summary inside card */}
        <div className="mt-6 pt-5 border-t border-white/8 grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-[10px] text-white/30 mb-1 uppercase tracking-wide">מס שולי</p>
            <p className="text-sm font-bold text-white">
              {INCOME_TAX_BRACKETS.find((b) => gross <= b.upTo)
                ? `${(INCOME_TAX_BRACKETS.find((b) => gross <= b.upTo)!.rate * 100).toFixed(0)}%`
                : '50%'}
            </p>
          </div>
          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-[10px] text-white/30 mb-1 uppercase tracking-wide">שיעור מס אפקטיבי</p>
            <p className="text-sm font-bold text-white">{result.effectiveTaxRate.toFixed(1)}%</p>
          </div>
        </div>
      </div>

      {/* ── Results hero - dark #0F1117 ── */}
      <div className="bg-[#0F1117] rounded-2xl p-8 mb-4 shadow-hero">
        <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 text-center">
          שכר נטו לחודש
        </p>

        {/* Split ₪ symbol */}
        <div
          className="flex items-end justify-center gap-1 tabular-nums font-extrabold leading-none tracking-tight mb-3"
          style={{ direction: 'ltr' }}
        >
          <span
            className="text-white/30 font-light self-start"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '0.3em' }}
            aria-hidden="true"
          >
            ₪
          </span>
          <span className="text-white" style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}>
            {fmt(animated)}
          </span>
        </div>

        <p className="text-white/25 text-sm text-center">
          ברוטו {fmtCurrency(gross)} · ניכויים {result.totalDeductionRate.toFixed(0)}%
        </p>
      </div>

      {/* ── Breakdown bar ── */}
      <BreakdownBar gross={gross} result={result} />

      {/* ── 6 stat cards - 3 per row on desktop ── */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <StatCard
          label="מס הכנסה"
          value={fmtCurrency(result.incomeTax)}
          color="text-blue-600"
        />
        <StatCard
          label="ביטוח לאומי"
          value={fmtCurrency(result.nationalInsurance)}
          color="text-amber-600"
        />
        <StatCard
          label="ביטוח בריאות"
          value={fmtCurrency(result.healthInsurance)}
          color="text-violet-600"
        />
        <StatCard
          label="פנסיה (עובד)"
          value={fmtCurrency(result.pensionAmount)}
          color="text-emerald-600"
        />
        <StatCard
          label="סה&quot;כ ניכויים"
          value={fmtCurrency(result.totalDeductions)}
          color="text-red-500"
        />
        <StatCard
          label="שיעור מס אפקטיבי"
          value={`${result.effectiveTaxRate.toFixed(1)}%`}
          color="text-accent-700"
        />
      </div>

      {/* ── Sticky mobile bottom bar ── */}
      <div
        className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#0F1117]/95 backdrop-blur-sm
                   border-t border-white/10 px-5 py-3 flex items-center justify-between"
      >
        <div>
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.12em]">שכר נטו</p>
          <div className="flex items-end gap-0.5 tabular-nums" style={{ direction: 'ltr' }}>
            <span className="text-white/30 font-light text-xs self-end mb-0.5" aria-hidden="true">₪</span>
            <span className="display-number text-white text-xl leading-tight">{fmt(roundedNet)}</span>
          </div>
        </div>
        <div className="text-left">
          <p className="text-white/25 text-[10px]">ניכויים</p>
          <p className="text-white/45 text-xs font-medium">{fmtCurrency(result.totalDeductions)}</p>
        </div>
      </div>

      {/* Spacer behind sticky bar */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
