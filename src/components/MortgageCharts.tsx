'use client';

import { useMemo } from 'react';

interface DonutProps {
  principal: number;
  interest: number;
  locale: 'he' | 'ar';
}

function fmt(n: number): string {
  return n.toLocaleString('he-IL', { maximumFractionDigits: 0 });
}

const LABELS = {
  he: { principal: 'קרן', interest: 'ריבית', title: 'פילוח קרן מול ריבית', perTrack: 'החזר חודשי לפי מסלול' },
  ar: { principal: 'أصل', interest: 'فائدة', title: 'توزيع الأصل مقابل الفائدة', perTrack: 'القسط الشهري حسب المسار' },
};

export function DonutChart({ principal, interest, locale }: DonutProps) {
  const total = principal + interest;
  if (total <= 0) return null;

  const l = LABELS[locale];
  const pPct = (principal / total) * 100;
  const iPct = (interest / total) * 100;

  const r = 70;
  const circ = 2 * Math.PI * r;
  const pLen = (pPct / 100) * circ;
  const iLen = (iPct / 100) * circ;

  return (
    <div className="card p-6">
      <h3 className="font-bold text-accent-900 mb-4 text-sm">{l.title}</h3>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <svg viewBox="0 0 200 200" className="w-40 h-40 shrink-0" aria-hidden="true">
          <circle cx="100" cy="100" r={r} fill="none" stroke="#e5e7eb" strokeWidth="24" />
          <circle
            cx="100" cy="100" r={r}
            fill="none" stroke="#16a34a" strokeWidth="24"
            strokeDasharray={`${pLen} ${circ}`}
            strokeDashoffset={circ / 4}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <circle
            cx="100" cy="100" r={r}
            fill="none" stroke="#ef4444" strokeWidth="24"
            strokeDasharray={`${iLen} ${circ}`}
            strokeDashoffset={circ / 4 - pLen}
            strokeLinecap="round"
            className="transition-all duration-500"
          />
          <text x="100" y="92" textAnchor="middle" className="fill-accent-900 text-xl font-bold">
            ₪{fmt(total)}
          </text>
          <text x="100" y="114" textAnchor="middle" className="fill-accent-400 text-[11px]">
            {locale === 'he' ? 'עלות כוללת' : 'التكلفة الإجمالية'}
          </text>
        </svg>

        <div className="flex sm:flex-col gap-6 sm:gap-4">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-primary-600 shrink-0" />
            <div>
              <p className="text-xs text-accent-400">{l.principal}</p>
              <p className="font-bold text-accent-900 display-number">₪{fmt(principal)}</p>
              <p className="text-xs text-accent-400">{pPct.toFixed(0)}%</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 rounded-full bg-red-500 shrink-0" />
            <div>
              <p className="text-xs text-accent-400">{l.interest}</p>
              <p className="font-bold text-red-500 display-number">₪{fmt(interest)}</p>
              <p className="text-xs text-accent-400">{iPct.toFixed(0)}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TrackBar {
  label: string;
  monthly: number;
  color: string;
}

interface BarChartProps {
  tracks: TrackBar[];
  locale: 'he' | 'ar';
}

export function TrackBarChart({ tracks, locale }: BarChartProps) {
  if (tracks.length === 0) return null;

  const l = LABELS[locale];
  const max = Math.max(...tracks.map((t) => t.monthly));
  if (max <= 0) return null;

  return (
    <div className="card p-6">
      <h3 className="font-bold text-accent-900 mb-4 text-sm">{l.perTrack}</h3>
      <div className="space-y-3">
        {tracks.map((t, i) => {
          const pct = (t.monthly / max) * 100;
          return (
            <div key={i}>
              <div className="flex justify-between text-xs mb-1">
                <span className="text-accent-600 font-medium">{t.label}</span>
                <span className="text-accent-800 font-bold display-number">₪{fmt(t.monthly)}</span>
              </div>
              <div className="h-6 bg-accent-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, backgroundColor: t.color }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
