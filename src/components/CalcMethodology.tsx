'use client';

import { useState } from 'react';

interface Props {
  formula: string;
  assumptions: string[];
  source: string;
  lastUpdated?: string;
}

export default function CalcMethodology({
  formula,
  assumptions,
  source,
  lastUpdated = 'מאי 2026',
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 border border-accent-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-5 py-4 bg-white
                   hover:bg-accent-50 transition-colors duration-150 cursor-pointer text-right"
        aria-expanded={open}
      >
        <span className="font-semibold text-accent-800 text-sm">איך חישבנו?</span>
        <svg
          className={`w-4 h-4 text-accent-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="px-5 pb-5 pt-4 bg-white border-t border-accent-100 space-y-4">

          {/* Formula */}
          <div>
            <p className="text-xs font-semibold text-accent-500 uppercase tracking-wide mb-1">
              נוסחה
            </p>
            <p className="text-sm text-accent-700 leading-relaxed">{formula}</p>
          </div>

          {/* Assumptions */}
          <div>
            <p className="text-xs font-semibold text-accent-500 uppercase tracking-wide mb-1">
              הנחות חישוב
            </p>
            <ul className="space-y-1">
              {assumptions.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-accent-600">
                  <span className="w-1 h-1 rounded-full bg-accent-300 shrink-0 mt-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: source + timestamp */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-accent-100">
            <p className="text-xs text-accent-400">{source}</p>
            <p className="text-xs text-accent-400">עודכן לאחרונה: {lastUpdated}</p>
          </div>

        </div>
      )}
    </div>
  );
}
