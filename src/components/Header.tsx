'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/tools',  label: 'מחשבונים' },
  { href: '/guides', label: 'מדריכים'  },
  { href: '/about',  label: 'אודות'    },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="glass sticky top-0 z-40">
      <div className="container-wide py-4 flex items-center justify-between">

        <div className="flex items-center gap-10">
          <Logo />
          <nav className="hidden md:flex items-center gap-7" aria-label="ניווט ראשי">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`text-[15px] font-medium transition-colors duration-200 cursor-pointer
                            ${isActive(href)
                              ? 'text-primary-500'
                              : 'text-accent-900 hover:text-primary-500'}`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <a
            href="/tools/mortgage-calculator"
            className="hidden md:inline-flex items-center px-6 py-2.5 text-[15px] font-semibold
                       text-accent-50 transition-all duration-250 cursor-pointer"
            style={{
              background: '#0E3D2C',
              borderRadius: '999px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#149A5B';
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(20,154,91,.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#0E3D2C';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            מחשבון משכנתא
          </a>

          <button
            className="md:hidden min-h-[48px] min-w-[48px] flex items-center justify-center
                       rounded-xl hover:bg-accent-100 text-accent-600
                       transition-colors duration-200 cursor-pointer"
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-accent-300 bg-white shadow-elevated"
          role="navigation"
          aria-label="תפריט נייד"
        >
          <nav className="container-wide py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`min-h-[48px] ps-4 pe-4 flex items-center rounded-xl font-medium
                            transition-colors cursor-pointer
                            ${isActive(href)
                              ? 'bg-primary-50 text-primary-900'
                              : 'text-accent-900 hover:bg-accent-50'}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <div className="h-px bg-accent-200 my-1" />
            <a
              href="/tools/mortgage-calculator"
              className="min-h-[48px] ps-4 pe-4 flex items-center rounded-xl
                         bg-primary-50 text-primary-900 font-semibold
                         transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              מחשבון משכנתא
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
