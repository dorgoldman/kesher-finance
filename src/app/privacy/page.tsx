import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';

const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/privacy`;

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description:
    'מדיניות הפרטיות של Maxit. מה אנחנו אוספים, למה, ואיך אנחנו מגנים על המידע שלך.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'מדיניות פרטיות',
    description:
      'מדיניות הפרטיות של Maxit. מה אנחנו אוספים, למה, ואיך אנחנו מגנים על המידע שלך.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'מדיניות פרטיות',
  description:
    'מדיניות הפרטיות של Maxit. מה אנחנו אוספים, למה, ואיך אנחנו מגנים על המידע שלך.',
  url: CANONICAL,
  inLanguage: 'he',
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

const h2 = 'text-xl font-bold text-accent-900 mb-3 mt-10';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function PrivacyPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: 'מדיניות פרטיות' }]} />

      <div className="max-w-2xl">

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-3 tracking-tight">
            מדיניות פרטיות
          </h1>
          <p className="text-accent-400 text-sm">עדכון אחרון: מאי 2026</p>
        </header>

        <h2 className={h2}>מה אנחנו אוספים</h2>
        <p className={p}>
          האתר משתמש ב-Google Analytics לצורך ניתוח תנועה אנונימי. המידע שנאסף כולל: סוג
          דפדפן, מכשיר, מדינה, ועמודים שנצפו. לא נאסף שום מידע מזהה אישי כמו שם, אימייל,
          או פרטי תשלום.
        </p>
        <p className={p}>
          האתר יציג בעתיד פרסומות באמצעות Google AdSense. שירות זה עשוי להשתמש בקובצי
          cookie כדי להציג פרסומות רלוונטיות על בסיס ביקורים קודמים באתר זה ובאתרים אחרים.
          ניתן לבטל שימוש זה דרך הגדרות Google.
        </p>

        <h2 className={h2}>קובצי Cookie</h2>
        <p className={p}>
          האתר משתמש בקובצי cookie לצורך ניתוח ביצועים ופרסום. המשך שימוש באתר מהווה
          הסכמה לשימוש זה.
        </p>

        <h2 className={h2}>שיתוף מידע</h2>
        <p className={p}>
          איננו מוכרים, סוחרים, או מעבירים לצדדים שלישיים מידע מזהה אישי. Google Analytics
          ו-Google AdSense הם שירותי צד שלישי עם מדיניות פרטיות משלהם.
        </p>

        <h2 className={h2}>קישורים חיצוניים</h2>
        <p className={p}>
          האתר עשוי לכלול קישורים לאתרים חיצוניים. איננו אחראים למדיניות הפרטיות של
          אתרים אלו.
        </p>

        <h2 className={h2}>יצירת קשר</h2>
        <p className={p}>
          לשאלות בנושא פרטיות:{' '}
          <a
            href="mailto:finance@mgh-ltd.com"
            className="text-primary-600 hover:text-primary-700 underline underline-offset-2
                       transition-colors duration-150"
          >
            finance@mgh-ltd.com
          </a>
        </p>

      </div>
    </div>
  );
}
