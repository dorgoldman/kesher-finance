import { ReactNode } from 'react';

interface ComingSoonCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  /** 'hub' = tools hub layout (icon + category area), 'grid' = homepage grid layout */
  variant?: 'hub' | 'grid';
}

export default function ComingSoonCard({
  title,
  description,
  icon,
  variant = 'grid',
}: ComingSoonCardProps) {
  return (
    <div
      className="card relative opacity-60 cursor-not-allowed select-none pointer-events-none"
      aria-disabled="true"
      role="article"
      aria-label={`${title} — בקרוב`}
    >
      {/* "בקרוב" pill — top-right corner, green outline style */}
      <span
        className="absolute top-3 right-3 inline-flex items-center px-2.5 py-1 rounded-full
                   text-[11px] font-semibold border border-primary-500/70 text-primary-600
                   bg-primary-50/80 leading-none"
        aria-hidden="true"
      >
        בקרוב
      </span>

      {variant === 'hub' ? (
        /* ── Tools hub layout ── */
        <>
          <div className="flex items-start justify-between mb-4 pt-1">
            <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center text-accent-400">
              {icon}
            </div>
          </div>
          <h2 className="text-lg font-bold text-accent-900 mb-2">{title}</h2>
          <p className="text-accent-500 text-sm leading-relaxed">{description}</p>
        </>
      ) : (
        /* ── Homepage grid layout ── */
        <>
          <div
            className="w-11 h-11 bg-accent-100 rounded-xl flex items-center justify-center
                       text-accent-400 mb-4 mt-1"
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold text-accent-900 mb-2">{title}</h3>
          <p className="text-accent-500 text-sm leading-relaxed font-light">{description}</p>
          <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-accent-300">
            <span>בקרוב</span>
          </div>
        </>
      )}
    </div>
  );
}
