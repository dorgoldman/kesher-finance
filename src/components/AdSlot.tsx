'use client';

/*
  AdSlot — Google AdSense placement wrapper.

  Renders NOTHING (returns null) when NEXT_PUBLIC_ADSENSE_PUBLISHER_ID is
  absent or empty, so no div, no wrapper, no placeholder reaches the DOM.

  When the env var is present the full ad unit is rendered at the
  appropriate size for each variant.

  Variants:
    header           — 728×90 desktop / 320×50 mobile (inline, below page title)
    sidebar          — 300×250 desktop only (inline aside)
    post-results-mobile — 320×50 mobile only (inline, after calculator results)
    bottom           — 970×90 desktop / 320×50 mobile (inline, page footer)
    sticky-mobile    — 320×50 fixed bottom bar, mobile only (z-40)
*/

export type AdVariant =
  | 'header'
  | 'sidebar'
  | 'post-results-mobile'
  | 'bottom'
  | 'sticky-mobile';

interface AdSlotProps {
  variant: AdVariant;
  className?: string;
}

export default function AdSlot({ variant, className = '' }: AdSlotProps) {
  // ── Guard: no publisher ID → render nothing at all ──────────────────────
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID;
  if (!publisherId || publisherId.trim() === '') return null;

  // ── header: 728×90 desktop / 320×50 mobile ──────────────────────────────
  if (variant === 'header') {
    return (
      <div
        className={`w-full flex items-center justify-center rounded-2xl
                    bg-accent-50 border border-dashed border-accent-200
                    text-accent-300 text-xs font-medium ${className}`}
        style={{ height: '90px' }}
        data-ad-variant="header"
        aria-label="פרסומת"
      >
        <span className="hidden sm:block">728×90</span>
        <span className="sm:hidden">320×50</span>
      </div>
    );
  }

  // ── sidebar: 300×250 desktop only ────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div
        className={`hidden lg:flex items-center justify-center rounded-2xl
                    bg-accent-50 border border-dashed border-accent-200
                    text-accent-300 text-xs font-medium ${className}`}
        style={{ width: '300px', height: '250px' }}
        data-ad-variant="sidebar"
        aria-label="פרסומת"
      >
        300×250
      </div>
    );
  }

  // ── bottom: 970×90 desktop / 320×50 mobile ──────────────────────────────
  if (variant === 'bottom') {
    return (
      <div
        className={`w-full flex items-center justify-center rounded-2xl
                    bg-accent-50 border border-dashed border-accent-200
                    text-accent-300 text-xs font-medium ${className}`}
        style={{ height: '90px' }}
        data-ad-variant="bottom"
        aria-label="פרסומת"
      >
        <span className="hidden sm:block">970×90</span>
        <span className="sm:hidden">320×50</span>
      </div>
    );
  }

  // ── sticky-mobile: 320×50 fixed bottom bar, mobile only ─────────────────
  if (variant === 'sticky-mobile') {
    return (
      <div
        className={`fixed bottom-0 inset-x-0 z-40 sm:hidden
                    flex items-center justify-center
                    bg-white border-t border-accent-200
                    text-accent-300 text-xs font-medium ${className}`}
        style={{ height: '50px' }}
        data-ad-variant="sticky-mobile"
        aria-label="פרסומת"
      >
        320×50
      </div>
    );
  }

  // ── post-results-mobile: 320×50 inline, mobile only (default) ───────────
  return (
    <div
      className={`sm:hidden w-full flex items-center justify-center rounded-xl
                  bg-accent-50 border border-dashed border-accent-200
                  text-accent-300 text-xs font-medium ${className}`}
      style={{ height: '50px' }}
      data-ad-variant="post-results-mobile"
      aria-label="פרסומת"
    >
      320×50
    </div>
  );
}
