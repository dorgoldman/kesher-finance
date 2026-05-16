/**
 * TEMPLATE: Tool/Calculator page
 * Copy to src/app/tools/[slug]/page.tsx when you add real calculators.
 * Populate generateStaticParams() with your actual slugs.
 */
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';

export const dynamicParams = false;

export function generateStaticParams() {
  // Replace with real slugs, e.g.:
  // return [{ slug: 'loan-calculator' }, { slug: 'savings-calculator' }]
  return [];
}

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: slug },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-6">[כותרת המחשבון]</h1>

          <div className="card mb-6">
            <p className="text-gray-500 text-center py-12">תוכן המחשבון יתווסף כאן</p>
          </div>

          <AdSlot variant="post-results-mobile" />

          <section className="mt-8 prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mb-4">איך להשתמש במחשבון</h2>
            <p className="text-gray-600">[הסבר על השימוש במחשבון יתווסף כאן]</p>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdSlot variant="sidebar" />
          </div>
        </aside>
      </div>
    </div>
  );
}
