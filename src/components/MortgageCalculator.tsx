'use client';

import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { hebrewLabels, type MortgageLabels } from '@/lib/i18n/mortgage-labels';
import { DonutChart, TrackBarChart } from './MortgageCharts';

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
type TrackType = 'fixed' | 'variable' | 'prime' | 'eligibility';

interface MortgageTrack {
  id: string;
  type: TrackType;
  label: string;
  amount: number;
  rate: number;
  years: number;
  primeBase?: number;
  primeSpread?: number;
}

interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

interface TrackResult {
  id: string;
  label: string;
  type: TrackType;
  monthlyPayment: number;
  totalCost: number;
  totalInterest: number;
  schedule: AmortizationRow[];
}

/* ─── Track config ───────────────────────────────────────────────────────── */
function getTrackTypes(labels: MortgageLabels): { value: TrackType; label: string; description: string }[] {
  return [
    { value: 'fixed',       label: labels.trackTypes.fixed.label,       description: labels.trackTypes.fixed.description },
    { value: 'variable',    label: labels.trackTypes.variable.label,    description: labels.trackTypes.variable.description },
    { value: 'prime',       label: labels.trackTypes.prime.label,       description: labels.trackTypes.prime.description },
    { value: 'eligibility', label: labels.trackTypes.eligibility.label, description: labels.trackTypes.eligibility.description },
  ];
}

/* Gradient backgrounds - credit card aesthetic per design spec */
const TRACK_GRADIENT: Record<TrackType, string> = {
  fixed:       'bg-gradient-to-br from-[#1a2f5e] to-[#0a1530]',
  variable:    'bg-gradient-to-br from-[#4a2200] to-[#1c0d00]',
  prime:       'bg-gradient-to-br from-[#2d1060] to-[#120528]',
  eligibility: 'bg-gradient-to-br from-[#063824] to-[#021710]',
};

/* Icon color per track */
const TRACK_ICON_COLOR: Record<TrackType, string> = {
  fixed:       'text-blue-300',
  variable:    'text-amber-300',
  prime:       'text-violet-300',
  eligibility: 'text-emerald-300',
};

/* Pill color (mix bar) */
const TRACK_PILL: Record<TrackType, string> = {
  fixed:       'bg-blue-500',
  variable:    'bg-amber-500',
  prime:       'bg-violet-500',
  eligibility: 'bg-emerald-500',
};

const TRACK_HEX: Record<TrackType, string> = {
  fixed:       '#3b82f6',
  variable:    '#f59e0b',
  prime:       '#8b5cf6',
  eligibility: '#10b981',
};

/* SVG icons - no emoji, per skill pre-delivery checklist */
function TrackIcon({ type, className }: { type: TrackType; className?: string }) {
  const cls = `w-4 h-4 ${TRACK_ICON_COLOR[type]} ${className ?? ''}`;
  if (type === 'fixed') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );
  if (type === 'variable') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
  if (type === 'prime') return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
  // eligibility - bank / institution icon
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
    </svg>
  );
}

/* ─── Helpers ────────────────────────────────────────────────────────────── */
let trackCounter = 1;

function createTrack(type: TrackType, labels: MortgageLabels): MortgageTrack {
  const id = `track-${Date.now()}-${trackCounter++}`;
  const trackTypes = getTrackTypes(labels);
  const info = trackTypes.find((t) => t.value === type)!;
  const defaults: Record<TrackType, Partial<MortgageTrack>> = {
    fixed:       { rate: 4.5,  years: 20, amount: 400000 },
    variable:    { rate: 3.8,  years: 15, amount: 300000 },
    prime:       { rate: 0,    years: 25, amount: 200000, primeBase: 6.0, primeSpread: -0.5 },
    eligibility: { rate: 3.0,  years: 20, amount: 100000 },
  };
  return { id, type, label: info.label, ...defaults[type] } as MortgageTrack;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('he-IL', {
    style: 'currency',
    currency: 'ILS',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatNumber(v: number): string {
  return Math.round(v).toLocaleString('he-IL');
}

function formatPercent(value: number): string {
  return `${value.toFixed(2)}%`;
}

function calculateTrack(track: MortgageTrack): TrackResult {
  const effectiveRate =
    track.type === 'prime'
      ? (track.primeBase || 6.0) + (track.primeSpread || 0)
      : track.rate;

  const monthlyRate = effectiveRate / 100 / 12;
  const totalMonths = track.years * 12;

  let monthlyPayment: number;
  if (monthlyRate === 0) {
    monthlyPayment = track.amount / totalMonths;
  } else {
    monthlyPayment =
      (track.amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const schedule: AmortizationRow[] = [];
  let balance = track.amount;
  for (let i = 1; i <= totalMonths; i++) {
    const interest = balance * monthlyRate;
    const principal = monthlyPayment - interest;
    balance -= principal;
    schedule.push({ month: i, payment: monthlyPayment, principal, interest, balance: Math.max(0, balance) });
  }

  return {
    id: track.id,
    label: track.label,
    type: track.type,
    monthlyPayment,
    totalCost: monthlyPayment * totalMonths,
    totalInterest: monthlyPayment * totalMonths - track.amount,
    schedule,
  };
}

/* ─── Validators ─────────────────────────────────────────────────────────── */
type FieldErrors = {
  amount?: string;
  rate?: string;
  years?: string;
  primeBase?: string;
  primeSpread?: string;
};

function getValidators(labels: MortgageLabels): Record<string, (v: number) => string | undefined> {
  return {
    amount:      (v) => v < 100000 ? labels.errors.amountMin : v > 5000000 ? labels.errors.amountMax : undefined,
    rate:        (v) => v < 0.1    ? labels.errors.rateMin   : v > 15     ? labels.errors.rateMax    : undefined,
    years:       (v) => v < 1      ? labels.errors.yearsMin  : v > 30     ? labels.errors.yearsMax   : undefined,
    primeBase:   (v) => v < 0      ? labels.errors.primeBaseNeg : v > 15  ? labels.errors.primeBaseMax : undefined,
    primeSpread: (v) => v < -3     ? labels.errors.spreadMin : v > 3      ? labels.errors.spreadMax   : undefined,
  };
}

/* ═══════════════════════════════════════════════════════════════════════════
   TrackCard - credit card style, hover lift, per-track focus glow
═══════════════════════════════════════════════════════════════════════════ */
function TrackCard({
  track, result, onUpdate, onRemove, canRemove, labels,
}: {
  track: MortgageTrack;
  result: TrackResult;
  onUpdate: (id: string, updates: Partial<MortgageTrack>) => void;
  onRemove: (id: string) => void;
  canRemove: boolean;
  labels: MortgageLabels;
}) {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [primeExpanded, setPrimeExpanded] = useState(false);
  const validators = getValidators(labels);

  const handleBlur   = (field: string, value: number) => {
    const error = validators[field]?.(value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };
  const handleChange = (field: string, updates: Partial<MortgageTrack>) => {
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    onUpdate(track.id, updates);
  };

  const effectiveRate = (track.primeBase || 6) + (track.primeSpread || 0);
  const hints = labels.hints[track.type];

  return (
    /*
      data-track: drives the per-track CSS focus ring color (globals.css).
      group + hover:-translate-y-0.5: hover lift micro-interaction per spec.
      Transition: 200ms smooth per skill guideline.
    */
    <div
      data-track={track.type}
      className={`${TRACK_GRADIENT[track.type]} rounded-2xl p-5 shadow-card-depth relative flex flex-col
                  group transition-transform duration-200 hover:-translate-y-0.5`}
    >

      {/* ── Header ── */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <TrackIcon type={track.type} />
          <span className="text-white/90 text-sm font-semibold">{track.label}</span>
        </div>
        {canRemove && (
          <button
            onClick={() => onRemove(track.id)}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-white/30
                       hover:text-red-300 transition-all duration-150 cursor-pointer
                       press-effect"
            aria-label={labels.trackCard.removeTrack}
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>

      {/* ── Inputs ── */}
      <div className={`grid grid-cols-1 gap-3 mb-4 ${track.type === 'prime' ? 'sm:grid-cols-2' : 'sm:grid-cols-[2fr_1fr_1fr]'}`}>

        {/* 1. Amount */}
        <div>
          <label className="cc-label">{labels.inputs.amount}</label>
          <input
            type="number" dir="ltr"
            value={track.amount}
            onChange={(e) => handleChange('amount', { amount: Number(e.target.value) })}
            onBlur={(e)   => handleBlur('amount', Number(e.target.value))}
            min={100000} max={5000000} step={10000}
            className={`cc-input${errors.amount ? ' border-red-400/60' : ''}`}
          />
          {/* NerdWallet-style inline hint */}
          {!errors.amount && (
            <p className="text-[10px] text-white/20 mt-1">{hints.amount}</p>
          )}
          {errors.amount && (
            <p className="cc-error">
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"/>
              </svg>
              {errors.amount}
            </p>
          )}
        </div>

        {/* 2. Years */}
        <div>
          <label className="cc-label">{labels.inputs.years}</label>
          <input
            type="number" dir="ltr"
            value={track.years}
            onChange={(e) => handleChange('years', { years: Number(e.target.value) })}
            onBlur={(e)   => handleBlur('years', Number(e.target.value))}
            min={1} max={30}
            className={`cc-input${errors.years ? ' border-red-400/60' : ''}`}
          />
          {!errors.years && (
            <p className="text-[10px] text-white/20 mt-1">{hints.years}</p>
          )}
          {errors.years && (
            <p className="cc-error">
              <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"/>
              </svg>
              {errors.years}
            </p>
          )}
        </div>

        {/* 3. Rate - or prime section */}
        {track.type === 'prime' ? (
          <div className="col-span-full">
            {primeExpanded ? (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-violet-300">{labels.inputs.primeDetailsTitle}</span>
                    <span
                      className="inline-flex items-center justify-center w-4 h-4 rounded-full
                                 bg-white/10 text-white/50 cursor-help text-[9px] font-bold select-none"
                      title={labels.inputs.primeTooltip}
                      aria-label={labels.inputs.primeDetailsTitle}
                    >
                      ?
                    </span>
                  </div>
                  <button
                    onClick={() => setPrimeExpanded(false)}
                    className="text-xs font-medium text-white/40 hover:text-white/70
                               flex items-center gap-1 cursor-pointer transition-colors duration-150 press-effect"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                    {labels.inputs.hidePrimeDetails}
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="cc-label">{labels.inputs.primeRate}</label>
                    <input
                      type="number" dir="ltr"
                      value={track.primeBase}
                      onChange={(e) => handleChange('primeBase', { primeBase: Number(e.target.value) })}
                      onBlur={(e)   => handleBlur('primeBase', Number(e.target.value))}
                      min={0} max={15} step={0.25}
                      className={`cc-input${errors.primeBase ? ' border-red-400/60' : ''}`}
                    />
                    {!errors.primeBase && <p className="text-[10px] text-white/20 mt-1">{labels.hints.prime.rate}</p>}
                    {errors.primeBase && <p className="cc-error">{errors.primeBase}</p>}
                  </div>
                  <div>
                    <label className="cc-label">{labels.inputs.primeSpread}</label>
                    <input
                      type="number" dir="ltr"
                      value={track.primeSpread}
                      onChange={(e) => handleChange('primeSpread', { primeSpread: Number(e.target.value) })}
                      onBlur={(e)   => handleBlur('primeSpread', Number(e.target.value))}
                      min={-3} max={3} step={0.1}
                      className={`cc-input${errors.primeSpread ? ' border-red-400/60' : ''}`}
                    />
                    <p className="text-[11px] text-violet-300/70 mt-1 font-medium">
                      {labels.inputs.effectiveRate}: {formatPercent(effectiveRate)}
                    </p>
                    {errors.primeSpread && <p className="cc-error">{errors.primeSpread}</p>}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-white/35 mb-0.5">{labels.inputs.effectiveRate}</p>
                  <p className="text-base font-bold text-violet-300">{formatPercent(effectiveRate)}</p>
                </div>
                <button
                  onClick={() => setPrimeExpanded(true)}
                  className="text-xs font-medium text-white/40 hover:text-white/70
                             flex items-center gap-1.5 cursor-pointer transition-colors duration-150 press-effect"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  {labels.inputs.showPrimeDetails}
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <label className="cc-label">{labels.inputs.annualRate}</label>
            <input
              type="number" dir="ltr"
              value={track.rate}
              onChange={(e) => handleChange('rate', { rate: Number(e.target.value) })}
              onBlur={(e)   => handleBlur('rate', Number(e.target.value))}
              min={0.1} max={15} step={0.1}
              className={`cc-input${errors.rate ? ' border-red-400/60' : ''}`}
            />
            {!errors.rate && (
              <p className="text-[10px] text-white/20 mt-1">{hints.rate}</p>
            )}
            {errors.rate && (
              <p className="cc-error">
                <svg className="w-3 h-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M12 3a9 9 0 100 18 9 9 0 000-18z"/>
                </svg>
                {errors.rate}
              </p>
            )}
          </div>
        )}
      </div>

      {/* ── Payment - pinned to card bottom ── */}
      <div className="mt-auto flex items-end justify-between pt-4 border-t border-white/10">
        <div>
          <p className="text-[11px] text-white/30 mb-1">{labels.results.monthlyPayment}</p>
          <p className="display-number text-white text-xl">{formatCurrency(result.monthlyPayment)}</p>
        </div>
        <div className="text-left">
          <p className="text-[11px] text-white/30 mb-1">{labels.results.totalInterest}</p>
          <p className="text-sm font-semibold text-red-400/80">{formatCurrency(result.totalInterest)}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   MixBar
═══════════════════════════════════════════════════════════════════════════ */
function MixBar({ tracks, results, labels }: { tracks: MortgageTrack[]; results: TrackResult[]; labels: MortgageLabels }) {
  const totalAmount = tracks.reduce((s, t) => s + t.amount, 0);
  if (totalAmount === 0) return null;

  return (
    <div className="card mb-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-accent-600">{labels.mixBar.title}</h3>
        <span className="text-sm font-medium text-accent-500">{formatCurrency(totalAmount)}</span>
      </div>
      <div className="flex h-2.5 rounded-full overflow-hidden bg-accent-100 mb-3">
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`${TRACK_PILL[track.type]} transition-all duration-300`}
            style={{ width: `${(track.amount / totalAmount) * 100}%` }}
            title={`${track.label}: ${((track.amount / totalAmount) * 100).toFixed(0)}%`}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-3">
        {tracks.map((track) => (
          <div key={track.id} className="flex items-center gap-1.5 text-xs text-accent-500">
            <div className={`w-2 h-2 rounded-full ${TRACK_PILL[track.type]}`} />
            <span>{track.label}</span>
            <span className="text-accent-400">({((track.amount / tracks.reduce((s, t) => s + t.amount, 0)) * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
   AmortizationTable
═══════════════════════════════════════════════════════════════════════════ */
function AmortizationTable({ rows, showMonthly, labels }: { rows: AmortizationRow[]; showMonthly: boolean; labels: MortgageLabels }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-accent-200">
          {[showMonthly ? labels.table.month : labels.table.year, labels.table.payment, labels.table.principal, labels.table.interest, labels.table.balance].map((h) => (
            <th key={h} className="py-3 px-3 text-right font-semibold text-accent-400 text-xs uppercase tracking-wide">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.month} className="border-b border-accent-100/60 hover:bg-accent-50/50 transition-colors duration-150">
            <td className="py-2.5 px-3 font-medium text-accent-700">{showMonthly ? row.month : row.month / 12}</td>
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
export default function MortgageCalculator({ labels = hebrewLabels }: { labels?: MortgageLabels } = {}) {
  const [tracks, setTracks] = useState<MortgageTrack[]>([
    createTrack('fixed', labels),
    createTrack('prime', labels),
  ]);
  const [addMenuOpen,    setAddMenuOpen]    = useState(false);
  const [tableExpanded,  setTableExpanded]  = useState(false);
  const [showMonthly,    setShowMonthly]    = useState(false);
  const [showTableModal, setShowTableModal] = useState(false);

  const updateTrack = useCallback((id: string, updates: Partial<MortgageTrack>) => {
    setTracks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
  }, []);

  const removeTrack = useCallback((id: string) => {
    setTracks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addTrack = useCallback((type: TrackType) => {
    setTracks((prev) => [...prev, createTrack(type, labels)]);
    setAddMenuOpen(false);
  }, [labels]);

  const results = useMemo(() => tracks.map(calculateTrack), [tracks]);

  const totalMonthly  = results.reduce((s, r) => s + r.monthlyPayment, 0);
  const totalCost     = results.reduce((s, r) => s + r.totalCost, 0);
  const totalInterest = results.reduce((s, r) => s + r.totalInterest, 0);
  const totalLoan     = tracks.reduce((s, t) => s + t.amount, 0);

  const roundedMonthly  = Math.round(totalMonthly);
  const animatedMonthly = useCountUp(roundedMonthly);

  const maxMonths = Math.max(...tracks.map((t) => t.years * 12));

  const combinedSchedule = useMemo(() => {
    const rows: AmortizationRow[] = [];
    for (let m = 1; m <= maxMonths; m++) {
      let payment = 0, principal = 0, interest = 0, balance = 0;
      for (const result of results) {
        const row = result.schedule[m - 1];
        if (row) { payment += row.payment; principal += row.principal; interest += row.interest; balance += row.balance; }
      }
      rows.push({ month: m, payment, principal, interest, balance });
    }
    return rows;
  }, [results, maxMonths]);

  const annualRows  = useMemo(() => combinedSchedule.filter((r) => r.month % 12 === 0), [combinedSchedule]);
  const tableRows   = showMonthly ? combinedSchedule : annualRows;
  const previewRows = annualRows.slice(0, 2);

  return (
    <>
      <MixBar tracks={tracks} results={results} labels={labels} />

      {/* ── Track cards grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 items-stretch">
        {tracks.map((track) => {
          const result = results.find((r) => r.id === track.id)!;
          return (
            <TrackCard
              key={track.id}
              track={track}
              result={result}
              onUpdate={updateTrack}
              onRemove={removeTrack}
              canRemove={tracks.length > 1}
              labels={labels}
            />
          );
        })}

        {/* Add track - press-effect per spec */}
        <button
          onClick={() => setAddMenuOpen(!addMenuOpen)}
          className="rounded-2xl bg-primary-600 hover:bg-primary-700 active:bg-primary-800
                     flex flex-col items-center justify-center gap-3 text-white
                     transition-all duration-200 cursor-pointer min-h-[200px]
                     shadow-soft hover:shadow-elevated press-effect"
        >
          <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
          <span className="font-semibold text-sm">{labels.addTrack.button}</span>
        </button>
      </div>

      {/* Add track menu */}
      {addMenuOpen && (
        <div className="card mb-6">
          <h3 className="text-sm font-semibold text-accent-600 mb-3">{labels.addTrack.selectTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {getTrackTypes(labels).map((tt) => (
              <button
                key={tt.value}
                onClick={() => addTrack(tt.value)}
                className="p-3 rounded-xl border border-accent-200 hover:border-primary-300 hover:bg-primary-50
                           transition-all duration-150 text-right cursor-pointer press-effect"
              >
                <div className="flex items-center gap-2 mb-1">
                  <div className={`w-2 h-2 rounded-full ${TRACK_PILL[tt.value]}`} />
                  <span className="text-sm font-semibold text-accent-800">{tt.label}</span>
                </div>
                <p className="text-xs text-accent-400 font-light">{tt.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Results hero - dark, Revolut-style ── */}
      <div className="bg-[#0F1117] rounded-2xl p-8 mb-4 shadow-hero">
        <p className="text-white/30 text-[11px] font-semibold uppercase tracking-[0.18em] mb-4 text-center">
          {labels.results.monthlyTotal}
        </p>

        {/* Split ₪ symbol - smaller + lighter than the number */}
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
          <span
            className="text-white"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)' }}
          >
            {formatNumber(animatedMonthly)}
          </span>
        </div>

        <p className="text-white/25 text-sm text-center">
          {labels.results.tracksAndLoan(tracks.length, formatCurrency(totalLoan))}
        </p>
      </div>

      {/* ── Secondary stats ──
          Mobile: full-width horizontal rows (label + value) so 7-digit
          shekel figures never overflow. sm+: centered 3-column cards. */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">{labels.results.totalCost}</p>
          <p className="text-lg sm:text-xl font-bold text-accent-900 tabular-nums text-left sm:text-center">{formatCurrency(totalCost)}</p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">{labels.results.totalInterestLabel}</p>
          <p className="text-lg sm:text-xl font-bold text-red-500 tabular-nums text-left sm:text-center">{formatCurrency(totalInterest)}</p>
        </div>
        <div className="card p-4 sm:p-6 flex items-center justify-between gap-3 sm:block sm:text-center">
          <p className="text-xs font-medium text-accent-400 sm:mb-1 shrink-0">{labels.results.interestPercent}</p>
          <p className="text-lg sm:text-xl font-bold text-accent-700 tabular-nums text-left sm:text-center">
            {totalLoan > 0 ? ((totalInterest / totalLoan) * 100).toFixed(0) : '0'}%
          </p>
        </div>
      </div>

      {/* ── Charts ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
        <DonutChart principal={totalLoan} interest={totalInterest} locale={labels.locale} />
        <TrackBarChart
          tracks={tracks.map((t, i) => ({
            label: t.label,
            monthly: results[i].monthlyPayment,
            color: TRACK_HEX[t.type],
          }))}
          locale={labels.locale}
        />
      </div>

      {/* ── Amortization table ── */}
      <div className="card">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-lg font-bold text-accent-900">{labels.table.title}</h2>
          {tableExpanded && (
            <button
              onClick={() => setShowMonthly(!showMonthly)}
              className="text-sm text-accent-500 hover:text-accent-700 font-medium transition-colors duration-150 cursor-pointer"
            >
              {showMonthly ? labels.table.annual : labels.table.monthly}
            </button>
          )}
        </div>

        {/* Mobile: modal trigger */}
        <button
          className="sm:hidden w-full btn-secondary press-effect flex items-center justify-center gap-2"
          onClick={() => setShowTableModal(true)}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
          </svg>
          {labels.table.openTable}
        </button>

        {/* Desktop: inline table */}
        <div className="hidden sm:block">
          <div className="overflow-x-auto -mx-6 px-6">
            <AmortizationTable rows={tableExpanded ? tableRows : previewRows} showMonthly={showMonthly} labels={labels} />
          </div>
          {annualRows.length > 2 && (
            <div className="mt-4 pt-3 border-t border-accent-100 flex justify-center">
              <button
                onClick={() => setTableExpanded(!tableExpanded)}
                className="text-sm font-medium text-primary-600 hover:text-primary-700
                           flex items-center gap-1.5 transition-colors duration-150 cursor-pointer press-effect"
              >
                {tableExpanded ? (
                  <>
                    {labels.table.showLess}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </>
                ) : (
                  <>
                    {labels.table.showFull(annualRows.length)}
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
              <h3 className="font-bold text-accent-900">{labels.table.title}</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowMonthly(!showMonthly)}
                  className="text-xs font-medium text-accent-500 hover:text-accent-700 transition-colors duration-150
                             cursor-pointer px-2 py-1 rounded-lg border border-accent-200 hover:border-accent-300 press-effect"
                >
                  {showMonthly ? labels.table.annual : labels.table.monthly}
                </button>
                <button
                  onClick={() => setShowTableModal(false)}
                  className="p-1.5 rounded-lg hover:bg-accent-100 text-accent-400 hover:text-accent-600
                             transition-colors duration-150 cursor-pointer press-effect"
                  aria-label={labels.table.close}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-auto flex-1 px-4 pb-4">
              <AmortizationTable rows={tableRows} showMonthly={showMonthly} labels={labels} />
            </div>
          </div>
        </div>
      )}

      {/* ── Sticky mobile bottom bar - live monthly payment ── */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#0F1117]/95 backdrop-blur-sm
                      border-t border-white/10 px-5 py-3 flex items-center justify-between">
        <div>
          <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.12em]">{labels.mobileBar.monthlyPayment}</p>
          <div className="flex items-end gap-0.5 tabular-nums" style={{ direction: 'ltr' }}>
            <span className="text-white/30 font-light text-xs self-end mb-0.5" aria-hidden="true">₪</span>
            <span className="display-number text-white text-xl leading-tight">{formatNumber(roundedMonthly)}</span>
          </div>
        </div>
        <div className="text-left">
          <p className="text-white/25 text-[10px]">{labels.mobileBar.tracks(tracks.length)}</p>
          <p className="text-white/45 text-xs font-medium">{formatCurrency(totalLoan)}</p>
        </div>
      </div>

      {/* Spacer behind sticky bar */}
      <div className="h-16 sm:hidden" aria-hidden="true" />
    </>
  );
}
