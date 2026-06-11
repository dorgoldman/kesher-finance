/**
 * TEMPLATE: Article/Guide page
 * Copy to src/app/guides/[slug]/page.tsx when you add real content.
 * Populate generateStaticParams() with your actual slugs.
 */
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';

/* ─────────────────────────────────────────────────────────────────────────────
 * CalculatorCTA
 * Inline trust block placed above the FAQ section on every guide article.
 *
 * Usage:
 *   import { CalculatorCTA } from '@/templates/article-page';
 *   <CalculatorCTA
 *     calculatorName="מחשבון ההלוואה"
 *     calculatorUrl="/tools/loan-calculator"
 *     teaser="בדוק כמה יהיה ההחזר החודשי לפני שמגישים."
 *   />
 * ───────────────────────────────────────────────────────────────────────────── */

interface CalculatorCTAProps {
  /** Hebrew display name of the calculator, e.g. "מחשבון ההלוואה" */
  calculatorName: string;
  /** Path, e.g. "/tools/loan-calculator" */
  calculatorUrl: string;
  /** One sentence, direct, no exclamation marks */
  teaser: string;
}

export function CalculatorCTA({ calculatorName, calculatorUrl, teaser }: CalculatorCTAProps) {
  return (
    <div className="my-8 rounded-2xl bg-primary-100 border border-primary-200 px-5 py-5">
      <p className="text-xs font-semibold text-primary-700 uppercase tracking-wide mb-2">
        נסה את המחשבון
      </p>
      <p className="text-base font-bold text-accent-900 mb-1">{calculatorName}</p>
      <p className="text-sm text-accent-600 leading-relaxed mb-4">{teaser}</p>
      <Link
        href={calculatorUrl}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary-700
                   hover:text-primary-900 transition-colors duration-150 cursor-pointer"
      >
        לחישוב
        <svg
          className="w-4 h-4 rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

export const dynamicParams = false;

export function generateStaticParams() {
  // Replace with real slugs, e.g.:
  // return [{ slug: 'מדריך-משכנתא' }, { slug: 'הלוואות-לעסקים' }]
  return [];
}

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: slug },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <article>
          <h1 className="text-3xl font-bold mb-4">[כותרת המדריך]</h1>
          <p className="text-gray-500 text-sm mb-6">עודכן לאחרונה: [תאריך]</p>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">[תוכן המדריך יתווסף כאן]</p>
          </div>

          <AdSlot variant="post-results-mobile" />

          <div className="prose prose-lg max-w-none mt-6">
            <h2 className="text-2xl font-bold mb-4">[כותרת משנה]</h2>
            <p className="text-gray-600">[המשך תוכן המדריך]</p>
          </div>
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <AdSlot variant="sidebar" />
            <div className="card">
              <h3 className="font-bold mb-3">תוכן עניינים</h3>
              <nav className="text-sm space-y-2">
                <p className="text-gray-400">[תוכן עניינים אוטומטי]</p>
              </nav>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
