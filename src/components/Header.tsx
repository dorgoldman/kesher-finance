'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const NAV_LINKS = [
  { href: '/tools',  label: 'מחשבונים' },
  { href: '/guides', label: 'מדריכים'  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  return (
    <header className="glass sticky top-0 z-40 border-b border-accent-100">
      <div className="container-wide py-3.5 flex items-center justify-between">

        {/* RTL: first child → RIGHT side (reading start) - Logo + primary CTA */}
        <div className="flex items-center gap-3">
          <Logo />
          <Link
            href="/tools/mortgage-calculator"
            className="hidden md:inline-flex items-center gap-1.5 bg-primary-600 text-white
                       text-sm font-semibold px-4 py-2 rounded-xl
                       hover:bg-primary-700 active:bg-primary-800
                       transition-all duration-200 shadow-soft hover:shadow-elevated cursor-pointer"
          >
            מחשבון משכנתא
          </Link>
        </div>

        {/* RTL: last child → LEFT side - secondary nav or hamburger */}
        <div className="flex items-center">

          {/* Desktop secondary nav */}
          <nav className="hidden md:flex items-center gap-0.5" aria-label="ניווט ראשי">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium
                            transition-all duration-200 cursor-pointer
                            ${isActive(href)
                              ? 'text-primary-600 bg-primary-50'
                              : 'text-accent-600 hover:text-accent-900 hover:bg-accent-100'}`}
              >
                {label}
                {isActive(href) && (
                  <span
                    className="absolute bottom-0.5 inset-x-3 h-0.5 bg-primary-500 rounded-full"
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger - 48px touch target */}
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

      {/* Mobile slide-down menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-accent-100 bg-white shadow-elevated"
          role="navigation"
          aria-label="תפריט נייד"
        >
          <nav className="container-wide py-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`min-h-[48px] ps-4 pe-4 flex items-center rounded-xl font-medium
                            transition-colors cursor-pointer
                            ${isActive(href)
                              ? 'bg-primary-50 text-primary-700'
                              : 'text-accent-700 hover:bg-accent-50'}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className="h-px bg-accent-100 my-1" />
            <Link
              href="/tools/mortgage-calculator"
              className="min-h-[48px] ps-4 pe-4 flex items-center rounded-xl
                         bg-primary-50 text-primary-700 font-semibold
                         transition-colors cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              מחשבון משכנתא
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
