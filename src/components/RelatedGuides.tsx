import { relatedGuides } from '@/lib/guides';

interface RelatedGuidesProps {
  /** href of the current article — excluded from the list */
  currentHref: string;
  /** how many related guides to show (default 5) */
  limit?: number;
}

/**
 * Server component. Renders a grid of related guides for the bottom of an
 * article. Pulls from the central registry (src/lib/guides.ts) so every
 * article links to several others — strengthens internal linking + crawl depth.
 */
export default function RelatedGuides({ currentHref, limit = 5 }: RelatedGuidesProps) {
  const items = relatedGuides(currentHref, limit);
  if (items.length === 0) return null;

  return (
    <section className="mt-12 pt-8 border-t border-accent-200" aria-labelledby="related-guides-heading">
      <h2 id="related-guides-heading" className="text-lg font-bold text-accent-900 mb-5">
        מדריכים נוספים שכדאי לקרוא
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((guide) => (
          <a
            key={guide.href}
            href={guide.href}
            className="group flex items-start gap-3 p-4 rounded-card border border-accent-200
                       hover:border-gold transition-all duration-300 cursor-pointer"
          >
            <span className="mt-0.5 shrink-0 w-8 h-8 rounded-lg bg-primary-50 text-primary-600
                             flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
            <span className="min-w-0">
              <span className="block text-sm font-bold text-accent-900 group-hover:text-primary-600 transition-colors duration-200">
                {guide.shortLabel}
              </span>
              <span className="block text-xs text-accent-400 mt-0.5">{guide.category}</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
