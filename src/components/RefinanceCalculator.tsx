'use client';

import { useState, useMemo, useEffect, useRef } from 'react';

/* ─── Count-up animation hook (shared pattern with LoanCalculator) ───────── */
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

/* Spitzer monthly payment */
function monthlyPayment(amount: number, annualRate: number, years: number): number {
  const months = years * 12;
  const r = annualRate / 100 / 12;
  if (months <= 0) return 0;
  if (r === 0) return amount / months;
  return (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}

/* ─── Slider (dark-card style, matches LoanCalculator) ───────────────────── */
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

/* ═══════════════════════════════════════════════════════════════════════════
   Main export — מחשבון מחזור משכנתא
   Compares the current mortgage against a refinance offer:
   monthly saving, break-even point on refinance costs, net total saving.
═══════════════════════════════════════════════════════════════════════════ */
export default function RefinanceCalculator() {
  /* Current mortgage */
  const [balance, setBalance]   = useState(900_000);
  const [curRate, setCurRate]   = useState(5.2);
  const [remYears, setRemYears] = useState(20);

  /* New offer */
  const [newRate, setNewRate]   = useState(4.3);
  const [newYears, setNewYears] = useState(20);
  const [costs, setCosts]       = useState(12_000);

  const result = useMemo(() => {
    const curMonthly = monthlyPayment(balance, curRate, remYears);
    const newMonthly = monthlyPayment(balance, newRate, newYears);
    const monthlySaving = curMonthly - newMonthly;

    const totalCurrent = curMonthly * remYears * 12;
    const totalNew = newMonthly * newYears * 12 + costs;
    const netSaving = totalCurrent - totalNew;

    /* Months until the refinance costs are covered by the monthly saving */
    const breakEvenMonths = monthlySaving > 0 ? Math.ceil(costs / monthlySaving) : null;

    return { curMonthly, newMonthly, monthlySaving, totalCurrent, totalNew, netSaving, breakEvenMonths };
  }, [balance, curRate, remYears, newRate, newYears, costs]);

  const roundedSaving = Math.round(result.monthlySaving);
  const animated = useCountUp(Math.abs(roundedSaving));
  const savingPositive = roundedSaving >= 0;
  const netPositive = result.netSaving >= 0;

  return (
    <>
      {/* ── Input card 1: current mortgage - navy gradient ── */}
      <div className="bg-gradient-to-br from-[#1a2f5e] to-[#0a1530] rounded-2xl p-6 mb-4 shadow-card-depth">
        <div className="flex items-center gap-2.5 mb-6">
          <svg className="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-white/80 text-sm font-semibold">המשכנתא הנוכחית שלך</span>
        </div>

        <div className="space-y-6">
          <Slider
            label="יתרת המשכנתא"
            value={balance}
            min={100_000}
            max={3_000_000}
            step={10_000}
            onChange={setBalance}
            format={(v) => `₪${formatNumber(v)}`}
            hint="₪100,000 – ₪3,000,000"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Slider
              label="ריבית נוכחית (ממוצעת)"
              value={curRate}
              min={1}
              max={9}
              step={0.1}
              onChange={setCurRate}
              format={(v) => `${v.toFixed(1)}%`}
            />
            <Slider
              label="שנים שנותרו"
              value={remYears}
              min={1}
              max={30}
              step={1}
              onChange={setRemYears}
              format={(v) => `${v} שנים`}
            />
          </div>
        </div>
      </div>

      {/* ── Input card 2: new offer - deep green gradient ── */}
      <div className="bg-gradient-to-br from-[#14532d] to-[#052e16] rounded-2xl p-6 mb-6 shadow-card-depth">
        <div className="flex items-center gap-2.5 mb-6">
          <svg className="w-4 h-4 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span className="text-white/80 text-sm font-semibold">הצעת המחזור החדשה</span>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Slider
              label="ריבית חדשה (ממוצעת)"
              value={newRate}
              min={1}
              max={9}
              step={0.1}
              onChange={setNewRate}
              format={(v) => `${v.toFixed(1)}%`}
            />
            <Slider
              label="תקופה חדשה"
              value={newYears}
              min={1}
              max={30}
              step={1}
              onChange={setNewYears}
              format={(v) => `${v} שנים`}
            />
          </div>
          <Slider
            label="עלויות מחזור (עמלת פירעון מוקדם + שמאי + פתיחת תיק)"
            value={costs}
            min={0}
            max={80_000}
            step={500}
            onChange={setCosts}
            format={(v) => `₪${formatNumber(v)}`}
            hint="₪0 – ₪80,000 · בדוק את דוח יתרות לסילוק מהבנק שלך"
          />
        </div>
      </div>

      {/* ── Results hero - dark ── */}
      <div className="bg-[#0F1117] rounded-2xl p-8 mb-4 shadow-hero">
        <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 text-center">
          {savingPositive ? 'חיסכון בהחזר החודשי' : 'תוספת להחזר החודשי'}
        </p>

        <div
          className="flex items-end justify-center gap-1 tabular-nums font-extrabold leading-none tracking-tight mb-3"
          style={{ direction: 'ltr' }}
        >
          <span
            className={`${savingPositive ? 'text-white/30' : 'text-red-400/50'} font-light self-start`}
            style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', marginTop: '0.3em' }}
            aria-hidden="true"
          >
            ₪
          </span>
          <span
            className={savingPositive ? 'text-white' : 'text-red-400'}
            style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
          >
            {formatNumber(animated)}
          </span>
        </div>

        <p className="text-white/25 text-sm text-center">
          החזר נוכחי {formatCurrency(result.curMonthly)} ← החזר חדש {formatCurrency(result.newMonthly)}
        </p>
      </div>

      {/* ── Secondary stats — mobile-safe rows / desktop 3-col cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">חיסכון כולל (אחרי עלויות)</p>
          <p className={`text-lg font-bold tabular-nums text-left sm:text-center ${netPositive ? 'text-primary-700' : 'text-red-500'}`}>
            {formatCurrency(result.netSaving)}
          </p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">נקודת איזון</p>
          <p className="text-lg font-bold text-accent-900 tabular-nums text-left sm:text-center">
            {result.breakEvenMonths === null
              ? '—'
              : result.breakEvenMonths <= 12
                ? `${result.breakEvenMonths} חודשים`
                : `${(result.breakEvenMonths / 12).toFixed(1)} שנים`}
          </p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">עלות כוללת: נוכחי מול חדש</p>
          <p className="text-sm sm:text-base font-bold text-accent-700 tabular-nums text-left sm:text-center">
            {formatCurrency(result.totalCurrent)} ← {formatCurrency(result.totalNew)}
          </p>
        </div>
      </div>

      {/* ── Honest verdict strip ── */}
      <div
        className={`rounded-2xl border p-4 mb-8 text-sm leading-relaxed ${
          netPositive
            ? 'bg-primary-50 border-primary-100 text-accent-700'
            : 'bg-red-50 border-red-100 text-red-700'
        }`}
        role="status"
      >
        {netPositive ? (
          <>
            <span className="font-bold">המחזור משתלם על הנייר.</span>{' '}
            אחרי כיסוי עלויות המחזור תישאר עם חיסכון של {formatCurrency(result.netSaving)} לאורך התקופה
            {result.breakEvenMonths !== null && result.breakEvenMonths > 0 && (
              <>, והעלויות מתכסות תוך {result.breakEvenMonths <= 12 ? `${result.breakEvenMonths} חודשים` : `כ-${(result.breakEvenMonths / 12).toFixed(1)} שנים`}</>
            )}
            . שים לב: אם ההצעה החדשה מאריכה את התקופה, ההחזר החודשי יורד אבל אתה משלם ריבית על יותר שנים.
          </>
        ) : (
          <>
            <span className="font-bold">בתנאים האלה המחזור לא משתלם.</span>{' '}
            העלות הכוללת של המסלול החדש (כולל עלויות המחזור) גבוהה מהמסלול הנוכחי
            ב-{formatCurrency(Math.abs(result.netSaving))}. נסה ריבית נמוכה יותר, תקופה קצרה יותר,
            או בקש מהבנק הפחתה בעמלת הפירעון המוקדם.
          </>
        )}
      </div>

      {/* ── Sticky mobile bottom bar ── */}
      <div
        className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#0F1117]/95 backdrop-blur-sm
                   border-t border-white/10 px-5 py-3 flex items-center justify-between"
      >
        <div>
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.12em]">
            {savingPositive ? 'חיסכון חודשי' : 'תוספת חודשית'}
          </p>
          <div className="flex items-end gap-0.5 tabular-nums" style={{ direction: 'ltr' }}>
            <span className="text-white/30 font-light text-xs self-end mb-0.5" aria-hidden="true">₪</span>
            <span className={`display-number text-xl leading-tight ${savingPositive ? 'text-white' : 'text-red-400'}`}>
              {formatNumber(Math.abs(roundedSaving))}
            </span>
          </div>
        </div>
        <div className="text-left">
          <p className="text-white/25 text-[10px]">חיסכון כולל</p>
          <p className={`text-xs font-medium ${netPositive ? 'text-white/45' : 'text-red-400/70'}`}>
            {formatCurrency(result.netSaving)}
          </p>
        </div>
      </div>

      {/* Spacer behind sticky bar */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
