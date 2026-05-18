'use client';

import { useState } from 'react';

interface TOCItem {
  id: string;
  label: string;
}

export default function MobileArticleTOC({ items }: { items: TOCItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden mb-8">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border
                   border-accent-200 rounded-xl text-sm font-semibold text-accent-800
                   hover:border-primary-300 transition-colors duration-150 cursor-pointer"
        aria-expanded={open}
      >
        <span>תוכן עניינים</span>
        <svg
          className={`w-4 h-4 text-accent-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="mt-1 border border-accent-200 rounded-xl bg-white overflow-hidden">
          <nav aria-label="תוכן עניינים">
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm text-accent-600
                               hover:text-primary-600 hover:bg-primary-50 transition-colors duration-150"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-300 shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
