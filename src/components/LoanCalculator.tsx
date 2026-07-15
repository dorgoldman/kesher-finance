'use client';

import { useState, useMemo, useEffect, useRef } from 'react';

/* ─── Count-up animation hook ────────────────────────────────────────────── */
function useCountUp(target: number, duration = 400): number {
  const [display, setDisplay] = useState(target);
  const rafRef = useRef<number | undefined>(undefined);
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
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = from + diff * eased;
      fromRef.current = current;
      setDisplay(current);
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
interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface LoanResult {
  monthlyPayment: number;
  totalRepayment: number;
  totalInterest: number;
  interestPct: number;
  schedule: AmortizationRow[];
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */
function formatNumber(v: number): string {
  return Math.round(v).toLocaleString('he-IL');
}

function formatCurrency(v: number): string {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(v);
}

/* ─── Spitzer (equal-payment) amortization ───────────────────────────────── */
function calcSpitzer(amount: number, annualRate: number, years: number): LoanResult {
  const months = years * 12;
  const r = annualRate / 100 / 12;

  let monthlyPayment: number;
  if (r === 0) {
    monthlyPayment = amount / months;
  } else {
    monthlyPayment =
      (amount * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);
  }

  const totalRepayment = monthlyPayment * months;
  const totalInterest = totalRepayment - amount;
  const interestPct = amount > 0 ? (totalInterest / amount) * 100 : 0;

  const schedule: AmortizationRow[] = [];
  let balance = amount;
  for (let i = 1; i <= months; i++) {
    const interest = balance * r;
    const principal = monthlyPayment - interest;
    balance -= principal;
    schedule.push({
      month: i,
      payment: monthlyPayment,
      principal,
      interest,
      balance: Math.max(0, balance),
    });
  }

  return { monthlyPayment, totalRepayment, totalInterest, interestPct, schedule };
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

/* ─── Amortization table ─────────────────────────────────────────────────── */
function AmortizationTable({ rows }: { rows: AmortizationRow[] }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-accent-200">
          {['חודש', 'תשלום', 'קרן', 'ריבית', 'יתרה'].map((h) => (
            <th
              key={h}
              className="py-3 px-3 text-right font-semibold text-accent-400 text-xs uppercase tracking-wide"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr
            key={row.month}
            className="border-b border-accent-100/60 hover:bg-accent-50/50 transition-colors duration-150"
          >
            <td className="py-2.5 px-3 font-medium text-accent-700">{row.month}</td>
            <td className="py-2.5 px-3 text-accent-600">{formatCurrency(row.payment)}</td>
            <td className="py-2.5 px-3 text-accent-600">{formatCurrency(row.principal)}</td>
            <td className="py-2.5 px-3 text-accent-600">{formatCurrency(row.interest)}</td>
            <td className="py-2.5 px-3 font-medium text-accent-700">{formatCurrency(row.balance)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   Main export
═══════════════════════════════════════════════════════════════════════════ */
export default function LoanCalculator() {
  const [amount, setAmount] = useState(50000);
  const [years, setYears]   = useState(5);
  const [rate, setRate]     = useState(8);
  const [tableExpanded, setTableExpanded]   = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);

  const result  = useMemo(() => calcSpitzer(amount, rate, years), [amount, rate, years]);
  const rounded = Math.round(result.monthlyPayment);
  const animated = useCountUp(rounded);

  /* Show first 6 rows in collapsed view */
  const previewRows = result.schedule.slice(0, 6);
  const tableRows   = tableExpanded ? result.schedule : previewRows;

  return (
    <>
      {/* ── Input card - navy gradient, matching mortgage track style ── */}
      <div className="bg-gradient-to-br from-[#1a2f5e] to-[#0a1530] rounded-2xl p-6 mb-6 shadow-card-depth">

        {/* Card header */}
        <div className="flex items-center gap-2.5 mb-6">
          <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white/80 text-sm font-semibold">פרטי ההלוואה</span>
          <span className="mr-auto inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold
                           bg-blue-500/15 border border-blue-400/20 text-blue-300">
            שיטת שפיצר
          </span>
        </div>

        {/* Sliders */}
        <div className="space-y-6">
          <Slider
            label="סכום הלוואה"
            value={amount}
            min={1000}
            max={500000}
            step={1000}
            onChange={setAmount}
            format={(v) => `₪${formatNumber(v)}`}
            hint="₪1,000 – ₪500,000"
          />
          <Slider
            label="תקופה"
            value={years}
            min={1}
            max={10}
            step={1}
            onChange={setYears}
            format={(v) => `${v} שנים`}
            hint="1 – 10 שנים"
          />
          <Slider
            label="ריבית שנתית"
            value={rate}
            min={1}
            max={30}
            step={0.1}
            onChange={setRate}
            format={(v) => `${v.toFixed(1)}%`}
            hint="1% – 30% שנתי"
          />
        </div>

        {/* Quick-read summary inside card */}
        <div className="mt-6 pt-5 border-t border-white/8 grid grid-cols-2 gap-3">
          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-[10px] text-white/30 mb-1 uppercase tracking-wide">סה&quot;כ להחזיר</p>
            <p className="text-sm font-bold text-white tabular-nums">{formatCurrency(result.totalRepayment)}</p>
          </div>
          <div className="bg-white/5 rounded-xl px-4 py-3">
            <p className="text-[10px] text-white/30 mb-1 uppercase tracking-wide">סה&quot;כ ריבית</p>
            <p className="text-sm font-bold text-red-300/90 tabular-nums">{formatCurrency(result.totalInterest)}</p>
          </div>
        </div>
      </div>

      {/* ── Results hero ── */}
      <div
        className="rounded-card p-8 mb-4"
        style={{
          background: '#FFFFFF',
          border: '1px solid #EDEAE0',
          boxShadow: '0 30px 70px rgba(14,61,44,.14), 0 2px 8px rgba(14,61,44,.06), 0 0 0 1px rgba(201,164,76,.15)',
        }}
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 text-center" style={{ color: '#8A867A' }}>
          החזר חודשי
        </p>

        <div
          className="flex items-end justify-center gap-1 tabular-nums font-extrabold leading-none tracking-tight mb-3"
          style={{ direction: 'ltr' }}
        >
          <span
            className="font-light self-start"
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '0.3em', color: '#149A5B' }}
            aria-hidden="true"
          >
            ₪
          </span>
          <span
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', color: '#0E3D2C' }}
          >
            {formatNumber(animated)}
          </span>
        </div>

        <p className="text-sm text-center" style={{ color: '#8A867A' }}>
          {years} {years === 1 ? 'שנה' : 'שנים'} · {rate.toFixed(1)}% ריבית שנתית · ₪{formatNumber(amount)} קרן
        </p>
      </div>

      {/* ── Secondary stats ──
          Mobile: full-width horizontal rows so long shekel figures never
          overflow. sm+: centered 3-column cards. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">סה&quot;כ להחזיר</p>
          <p className="text-lg font-bold text-accent-900 tabular-nums text-left sm:text-center">{formatCurrency(result.totalRepayment)}</p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">סה&quot;כ ריבית</p>
          <p className="text-lg font-bold text-red-500 tabular-nums text-left sm:text-center">{formatCurrency(result.totalInterest)}</p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">% ריבית מהקרן</p>
          <p className="text-lg font-bold text-accent-700 tabular-nums text-left sm:text-center">{result.interestPct.toFixed(0)}%</p>
        </div>
      </div>

      {/* ── Amortization table ── */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-accent-900">לוח סילוקין</h2>
          <span className="text-xs text-accent-400 font-medium">
            {result.schedule.length} תשלומים
          </span>
        </div>

        {/* Mobile: modal trigger */}
        <button
          className="sm:hidden w-full btn-secondary press-effect flex items-center justify-center gap-2"
          onClick={() => setShowTableModal(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 10h18M3 6h18M3 14h18M3 18h18" />
          </svg>
          פתח לוח סילוקין
        </button>

        {/* Desktop: inline table */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto -mx-6 px-6">
            <AmortizationTable rows={tableRows} />
          </div>
          {result.schedule.length > 6 && (
            <div className="mt-4 pt-3 border-t border-accent-100 flex justify-center">
              <button
                onClick={() => setTableExpanded(!tableExpanded)}
                className="text-sm font-medium text-primary-600 hover:text-primary-700
                           flex items-center gap-1.5 transition-colors duration-150 cursor-pointer press-effect"
              >
                {tableExpanded ? (
                  <>
                    הצג פחות
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    הצג לוח מלא ({result.schedule.length} חודשים)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile table modal */}
      {showTableModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 sm:hidden flex items-end"
          onClick={() => setShowTableModal(false)}
        >
          <div
            className="bg-white rounded-t-2xl w-full max-h-[85vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-accent-100 flex items-center justify-between shrink-0">
              <h3 className="font-bold text-accent-900">לוח סילוקין</h3>
              <button
                onClick={() => setShowTableModal(false)}
                className="p-1.5 rounded-lg hover:bg-accent-100 text-accent-400 hover:text-accent-600
                           transition-colors duration-150 cursor-pointer press-effect"
                aria-label="סגור"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-auto flex-1 px-4 pb-4">
              <AmortizationTable rows={result.schedule} />
            </div>
          </div>
        </div>
      )}

      {/* ── Sticky mobile bottom bar ── */}
      <div
        className="fixed bottom-0 inset-x-0 z-30 sm:hidden backdrop-blur-sm
                   border-t px-5 py-3 flex items-center justify-between"
        style={{ background: 'rgba(255,255,255,0.95)', borderColor: '#E5E1D6' }}
      >
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em]" style={{ color: '#8A867A' }}>החזר חודשי</p>
          <div className="flex items-end gap-0.5 tabular-nums" style={{ direction: 'ltr' }}>
            <span className="font-light text-xs self-end mb-0.5" style={{ color: '#149A5B' }} aria-hidden="true">₪</span>
            <span className="display-number text-xl leading-tight" style={{ color: '#0E3D2C' }}>{formatNumber(rounded)}</span>
          </div>
        </div>
        <div className="text-left">
          <p className="text-[10px]" style={{ color: '#8A867A' }}>סה&quot;כ ריבית</p>
          <p className="text-xs font-medium" style={{ color: '#55534A' }}>{formatCurrency(result.totalInterest)}</p>
        </div>
      </div>

      {/* Spacer behind sticky bar */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
