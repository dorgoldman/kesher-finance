import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבונים פיננסיים',
  description: 'מחשבונים פיננסיים חינמיים בעברית: משכנתא, הלוואות ושכר נטו. חשבו בדיוק מה תשלמו ומה תקבלו, בלי להירשם.',
  canonical: '/tools',
});

const calculators = [
  {
    title: 'מחשבון משכנתא',
    description: 'הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין מפורט.',
    href: '/tools/mortgage-calculator',
    glyph: '₪',
    badge: 'משכנתא',
  },
  {
    title: 'מחשבון מחזור משכנתא',
    description: 'השוו את המשכנתא הנוכחית להצעה חדשה — חיסכון חודשי, נקודת איזון והאם זה משתלם.',
    href: '/tools/mortgage-refinance-calculator',
    glyph: '↻',
    badge: 'משכנתא',
  },
  {
    title: 'מחשבון משכנתא לזוג צעיר',
    description: 'בדקו הון עצמי, הלוואת זכאות ויחס החזר להכנסה — כל מה שצריך לדירה ראשונה.',
    href: '/tools/young-couple-mortgage',
    glyph: '👫',
    badge: 'משכנתא',
  },
  {
    title: 'מחשבון הלוואה',
    description: 'חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל סוג הלוואה צרכנית.',
    href: '/tools/loan-calculator',
    glyph: '%',
    badge: 'הלוואה',
  },
  {
    title: 'מחשבון שכר נטו',
    description: 'חשבו שכר נטו לאחר מס הכנסה, ביטוח לאומי, בריאות ופנסיה — מדרגות 2026.',
    href: '/tools/salary-calculator',
    glyph: 'נ׳',
    badge: 'שכר נטו',
  },
];

export default function ToolsHub() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: 'מחשבונים' }]} />

      <h1 className="section-title mb-2">מחשבונים פיננסיים</h1>
      <p className="section-subtitle mb-10">
        כלים חינמיים בעברית לתכנון פיננסי חכם
      </p>

      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <a
            key={calc.href}
            href={calc.href}
            className="card-interactive group"
            style={{ padding: '30px' }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="tool-icon-chip">{calc.glyph}</div>
              <span className="badge-primary">{calc.badge}</span>
            </div>
            <h2 className="text-lg font-bold text-accent-900 mb-2">
              {calc.title}
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B675D' }}>
              {calc.description}
            </p>
            <span className="link-arrow">לחישוב ←</span>
          </a>
        ))}
      </div>
    </div>
  );
}
