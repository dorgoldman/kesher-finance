import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מדריכים פיננסיים',
  description: 'מדריכים מקצועיים בעברית על משכנתאות, הלוואות, חיסכון, השקעות וניהול כספים',
  canonical: '/guides',
});

const guides: { title: string; description: string; href: string; category: string }[] = [];

export default function GuidesHub() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: 'מדריכים' }]} />

      <h1 className="section-title mb-2">מדריכים פיננסיים</h1>
      <p className="section-subtitle mb-10">
        מדריכים מקיפים בעברית להבנת נושאים פיננסיים חשובים
      </p>

      <AdSlot variant="header" className="mb-10" />

      {guides.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {guides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-interactive group">
              <span className="badge-primary mb-3 inline-block">{guide.category}</span>
              <h2 className="text-lg font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors">
                {guide.title}
              </h2>
              <p className="text-accent-500 text-sm leading-relaxed">{guide.description}</p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="card text-center py-16">
          <p className="text-accent-400 text-lg mb-2">מדריכים חדשים יתווספו בקרוב</p>
          <p className="text-accent-300 text-sm">עקבו אחרינו לעדכונים</p>
        </div>
      )}
    </div>
  );
}
