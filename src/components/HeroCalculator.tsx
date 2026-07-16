'use client';

import { useState, useEffect, useRef } from 'react';

function useCountUp(target: number, duration = 350): number {
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

function formatNumber(v: number) {
  return Math.round(v).toLocaleString('he-IL');
}

function calcMonthly(amount: number, annualRate: number, years: number): number {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return amount / n;
  return (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

export default function HeroCalculator() {
  const [amount, setAmount] = useState(1500000);
  const [rate, setRate]   = useState(4.5);
  const [years, setYears] = useState(25);

  const monthly       = Math.round(calcMonthly(amount, rate, years));
  const totalPaid     = monthly * years * 12;
  const totalInterest = totalPaid - amount;

  const animatedMonthly = useCountUp(monthly);

  return (
    <div
      className="animate-fadeUp-delay"
      style={{
        background: '#FFFFFF',
        borderRadius: '24px',
        padding: '36px',
        border: '1px solid #EDEAE0',
        boxShadow: '0 30px 70px rgba(14,61,44,.14), 0 2px 8px rgba(14,61,44,.06), 0 0 0 1px rgba(201,164,76,.15)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <div style={{ fontSize: '13px', fontWeight: 600, color: '#8A867A', letterSpacing: '0.4px', marginBottom: '6px' }}>
        החזר חודשי משוער
      </div>

      <div className="flex items-baseline gap-2 mb-1.5">
        <span
          className="tabular-nums"
          style={{ fontSize: '56px', fontWeight: 800, color: '#0E3D2C', letterSpacing: '-1.5px' }}
        >
          {formatNumber(animatedMonthly)}
        </span>
        <span style={{ fontSize: '26px', fontWeight: 600, color: '#149A5B' }}>₪</span>
      </div>

      <div className="flex gap-5 text-[13px] mb-6" style={{ color: '#8A867A' }}>
        <span>סה״כ ריבית: <b style={{ color: '#55534A' }}>₪{formatNumber(totalInterest)}</b></span>
        <span>סה״כ תשלום: <b style={{ color: '#55534A' }}>₪{formatNumber(totalPaid)}</b></span>
      </div>

      <div className="flex flex-col gap-5 mb-7">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span style={{ fontWeight: 600 }}>סכום הלוואה</span>
            <span className="tabular-nums" style={{ fontWeight: 700, color: '#0E3D2C' }}>₪{formatNumber(amount)}</span>
          </div>
          <input
            type="range" min={200000} max={5000000} step={10000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full"
            aria-label="סכום הלוואה"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span style={{ fontWeight: 600 }}>תקופה</span>
            <span style={{ fontWeight: 700, color: '#0E3D2C' }}>{years} שנה</span>
          </div>
          <input
            type="range" min={5} max={30} step={1}
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full"
            aria-label="תקופת ההלוואה בשנים"
          />
        </div>
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span style={{ fontWeight: 600 }}>ריבית</span>
            <span style={{ fontWeight: 700, color: '#0E3D2C' }}>{rate.toFixed(1)}%</span>
          </div>
          <input
            type="range" min={1} max={10} step={0.1}
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
            aria-label="ריבית שנתית"
          />
        </div>
      </div>

      <a
        href="/tools/mortgage-calculator"
        className="block text-center text-white font-bold transition-all duration-250 cursor-pointer"
        style={{
          background: 'linear-gradient(90deg, #0E3D2C, #149A5B)',
          backgroundSize: '200% 100%',
          backgroundPosition: '0% 0%',
          padding: '16px',
          borderRadius: '14px',
          fontSize: '16px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundPosition = '100% 0%';
          e.currentTarget.style.boxShadow = '0 10px 24px rgba(20,154,91,.35)';
          e.currentTarget.style.transform = 'translateY(-1px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundPosition = '0% 0%';
          e.currentTarget.style.boxShadow = 'none';
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        לחישוב מלא עם תמהיל מסלולים ←
      </a>
    </div>
  );
}
