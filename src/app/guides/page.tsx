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

const guides: { title: string; description: string; href: string; category: string }[] = [
  {
    title: 'הלוואות - המדריך המלא לבחירה נכונה',
    description: 'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
    href: '/guides/halvaot-madrich',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה חוץ בנקאית - המדריך המלא',
    description: 'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא. מדריך ישיר בלי שטויות.',
    href: '/guides/halvaah-hutz-bankait',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה מיידית - מה באמת קורה מרגע הבקשה עד קבלת הכסף',
    description: 'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
    href: '/guides/halvaah-miyedit',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    description: 'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר. המדריך המלא.',
    href: '/guides/halvaah-lchol-matara',
    category: 'הלוואות',
  },
];

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
