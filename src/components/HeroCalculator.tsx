'use client';

import { useState, useEffect, useRef } from 'react';

/* ─── Smooth count-up hook ───────────────────────────────────────────────── */
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
      const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
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
function formatNumber(v: number) {
  return Math.round(v).toLocaleString('he-IL');
}

function formatCurrency(v: number) {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(v);
}

function calcMonthly(amount: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return amount / n;
  return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

/* ─── Component ──────────────────────────────────────────────────────────── */
export default function HeroCalculator() {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate]   = useState(4.5);
  const [years, setYears] = useState(25);

  const monthly       = Math.round(calcMonthly(amount, rate, years));
  const totalPaid     = monthly * years * 12;
  const totalInterest = totalPaid - amount;
  const principalPct  = (amount / totalPaid) * 100;

  const animatedMonthly = useCountUp(monthly);

  return (
    /* Glassmorphism card - skill: backdrop-blur 16px, rgba(255,255,255,0.06), 1px white/10 border */
    <div className="glass-card rounded-3xl p-6 sm:p-8 shadow-hero">

      {/* ── Monthly payment display ── */}
      <div className="text-center mb-6">
        <p className="text-white/35 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4">
          החזר חודשי משוער
        </p>

        {/* ₪ symbol styled smaller + lighter than the number - per design spec */}
        <div
          className="flex items-end justify-center gap-1 tabular-nums font-extrabold leading-none tracking-tight"
          style={{ direction: 'ltr' }}
        >
          <span
            className="text-white/35 font-light self-start"
            style={{ fontSize: 'clamp(20px, 3vw, 30px)', marginTop: '0.3em' }}
            aria-hidden="true"
          >
            ₪
          </span>
          <span
            className="text-white"
            style={{ fontSize: 'clamp(64px, 9vw, 96px)' }}
          >
            {formatNumber(animatedMonthly)}
          </span>
        </div>

        {/* Principal vs interest bar */}
        <div className="flex h-1.5 rounded-full overflow-hidden bg-white/8 mt-5 mb-2">
          <div
            className="bg-primary-500 transition-all duration-500"
            style={{ width: `${principalPct}%` }}
          />
          <div
            className="bg-red-500/50 transition-all duration-500"
            style={{ width: `${100 - principalPct}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] text-white/28">
          <span>קרן {formatCurrency(amount)}</span>
          <span>ריבית {formatCurrency(Math.round(totalInterest))}</span>
        </div>
      </div>

      {/* ── Sliders ── */}
      <div className="space-y-5 mb-6">

        {/* Loan amount */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-white/45 text-xs font-semibold">סכום הלוואה</label>
            <span className="text-white text-sm font-bold tabular-nums">{formatCurrency(amount)}</span>
          </div>
          <input
            type="range" min={200000} max={5000000} step={50000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full h-1.5 cursor-pointer"
            aria-label="סכום הלוואה"
          />
          <div className="flex justify-between text-[10px] text-white/20 mt-1">
            <span>₪200K</span>
            <span className="text-white/30 font-medium text-center flex-1 px-2">
              עד 75% משווי הנכס בד&quot;כ
            </span>
            <span>₪5M</span>
          </div>
        </div>

        {/* Years + Rate side by side */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-white/45 text-xs font-semibold">תקופה</label>
              <span className="text-white text-sm font-bold">{years} שנה</span>
            </div>
            <input
              type="range" min={5} max={30} step={1}
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              aria-label="תקופת ההלוואה בשנים"
            />
            <div className="flex justify-between text-[10px] text-white/20 mt-1">
              <span>5</span><span>30</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-white/45 text-xs font-semibold">ריבית</label>
              <span className="text-white text-sm font-bold">{rate.toFixed(1)}%</span>
            </div>
            <input
              type="range" min={1} max={10} step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-1.5 cursor-pointer"
              aria-label="ריבית שנתית"
            />
            <div className="flex justify-between text-[10px] text-white/20 mt-1">
              <span>1%</span><span>10%</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA - press-effect (active:scale-[0.97]) per skill micro-interaction rule ── */}
      <a
        href="/tools/mortgage-calculator"
        className="btn-primary press-effect w-full flex items-center justify-center gap-2 text-sm"
      >
        לחישוב מלא עם תמהיל מסלולים
        <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
