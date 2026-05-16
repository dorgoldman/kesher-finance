/**
 * TEMPLATE: Article/Guide page
 * Copy to src/app/guides/[slug]/page.tsx when you add real content.
 * Populate generateStaticParams() with your actual slugs.
 */
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';

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
