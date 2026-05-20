import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';

const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/about`;

export const metadata: Metadata = {
  title: 'אודות מקסיט',
  description:
    'מקסיט היא פלטפורמת מחשבונים ומדריכים פיננסיים בעברית. מחשבוני משכנתא, הלוואה ושכר נטו — חינמי, בלי הרשמה.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'אודות מקסיט',
    description:
      'מקסיט.Maxit היא פלטפורמת כלים ומדריכים פיננסיים בעברית. מחשבונים מדויקים, מדריכים ברורים, בלי שטויות.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'אודות מקסיט.Maxit',
  description:
    'מקסיט.Maxit היא פלטפורמת כלים ומדריכים פיננסיים בעברית. מחשבונים מדויקים, מדריכים ברורים, בלי שטויות.',
  url: CANONICAL,
  inLanguage: 'he',
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

const h2 = 'text-xl font-bold text-accent-900 mb-3 mt-10';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function AboutPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: 'אודות' }]} />

      <div className="max-w-2xl">

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-3 tracking-tight">
            אודות מקסיט.Maxit
          </h1>
        </header>

        <p className={p}>
          מקסיט.Maxit היא פלטפורמת כלים ומדריכים פיננסיים בעברית, שנבנתה עבור כל מי שרוצה
          להבין את הכסף שלו בלי לסמוך על מישהו שמוכר לו משהו.
        </p>

        <h2 className={h2}>מה אנחנו עושים</h2>
        <p className={p}>
          אנחנו בונים מחשבונים פיננסיים מדויקים ומדריכים ברורים בעברית. מחשבון משכנתא,
          מחשבון הלוואה, מחשבון שכר נטו. מדריכים על הלוואות, ריביות, BDI, גמ&quot;חים, ועוד.
          כל הכלים חינמיים. כל התוכן כתוב בשפה שאנשים מדברים, לא בשפה של חוזים.
        </p>

        <h2 className={h2}>מי עומד מאחורינו</h2>
        <p className={p}>
          מקסיט.Maxit היא מיזם של MGH Venture Studio, סטודיו לפיתוח ותפעול עסקים המתמחה
          בבניית מוצרים דיגיטליים עם בהירות פיננסית וביצוע מעשי. MGH בונה, מאמת ומפתח
          מיזמים עם דגש על כלים שאנשים באמת משתמשים בהם.
        </p>

        <h2 className={h2}>העיקרון שלנו</h2>
        <p className={p}>
          המידע באתר הוא לצרכי לימוד והתמצאות בלבד. אנחנו לא יועצי השקעות, לא יועצי מס,
          ולא נותני שירותים פיננסיים. לפני כל החלטה פיננסית משמעותית, התייעץ עם בעל רישיון.
        </p>

      </div>
    </div>
  );
}
