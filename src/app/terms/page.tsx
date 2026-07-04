import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/SEO';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const CANONICAL = `${SITE_URL}/terms`;

export const metadata: Metadata = {
  title: 'תנאי שימוש',
  description:
    'תנאי השימוש באתר מקסיט: מה השירות כולל, מגבלות האחריות, ודיוק המחשבונים.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'תנאי שימוש',
    description:
      'תנאי השימוש באתר מקסיט: מה השירות כולל, מגבלות האחריות, ודיוק המחשבונים.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'תנאי שימוש',
  description:
    'תנאי השימוש באתר מקסיט: מה השירות כולל, מגבלות האחריות, ודיוק המחשבונים.',
  url: CANONICAL,
  inLanguage: 'he',
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

const h2 = 'text-xl font-bold text-accent-900 mb-3 mt-10';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function TermsPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: 'תנאי שימוש' }]} />

      <div className="max-w-2xl">

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-3 tracking-tight">
            תנאי שימוש
          </h1>
          <p className="text-accent-400 text-sm">עדכון אחרון: יולי 2026</p>
        </header>

        <p className={p}>
          הגלישה באתר מקסיט ושימוש בכלים שבו מהווים הסכמה לתנאים הבאים. אם אינך
          מסכים לתנאי מהם, אנא הימנע משימוש באתר.
        </p>

        <h2 className={h2}>מהו השירות</h2>
        <p className={p}>
          מקסיט מספקת מחשבונים פיננסיים (משכנתא, הלוואה, שכר נטו) ומדריכים בעברית,
          חינם וללא צורך בהרשמה. האתר מופעל על ידי חברת MGH Ltd.
        </p>

        <h2 className={h2}>אין באמור ייעוץ פיננסי</h2>
        <p className={p}>
          כל תוצאה, חישוב או מספר שמוצג באתר הוא הערכה בלבד, המבוססת על הנתונים
          שהזנת ועל הנחות חישוב כלליות. אין בכך משום ייעוץ פיננסי, ייעוץ משכנתאות,
          ייעוץ מס או ייעוץ השקעות, ואיננו בעלי רישיון לייעוץ מסוג זה.
        </p>
        <p className={p}>
          לפני כל החלטה פיננסית, במיוחד לקיחת הלוואה או משכנתא, יש להיוועץ בבעל
          מקצוע מוסמך ולבדוק את התנאים המדויקים מול הבנק או הגוף המלווה.
        </p>

        <h2 className={h2}>דיוק המחשבונים</h2>
        <p className={p}>
          אנחנו משקיעים בדיוק החישובים ומעדכנים אותם מול מקורות רשמיים, אך איננו
          יכולים להתחייב שהתוצאה תואמת במדויק את ההצעה שתקבל מבנק או מגוף מימון.
          ריביות, עמלות ותנאים משתנים בין גופים ולאורך זמן.
        </p>

        <h2 className={h2}>קניין רוחני</h2>
        <p className={p}>
          כל הטקסטים, העיצוב והקוד באתר שייכים למקסיט ול-MGH Ltd, אלא אם צוין
          אחרת. אין להעתיק, לשכפל או לפרסם מחדש תוכן מהאתר ללא אישור מראש ובכתב.
        </p>

        <h2 className={h2}>קישורים חיצוניים</h2>
        <p className={p}>
          האתר עשוי לכלול קישורים לאתרים חיצוניים, בהם אתרי רשויות ממשלתיות
          ובנקים. איננו אחראים לתוכן או למדיניות הפרטיות של אתרים אלו.
        </p>

        <h2 className={h2}>שינויים בתנאים</h2>
        <p className={p}>
          אנחנו עשויים לעדכן את תנאי השימוש מעת לעת. המשך שימוש באתר לאחר עדכון
          מהווה הסכמה לתנאים המעודכנים. תאריך העדכון האחרון מופיע בראש עמוד זה.
        </p>

        <h2 className={h2}>דין וסמכות שיפוט</h2>
        <p className={p}>
          תנאים אלה כפופים לדין הישראלי, וכל מחלוקת הנוגעת להם תידון בבתי המשפט
          המוסמכים בישראל בלבד.
        </p>

        <h2 className={h2}>יצירת קשר</h2>
        <p className={p}>
          לשאלות בנושא תנאי השימוש:{' '}
          <a
            href="mailto:finance@mgh-ltd.com"
            className="text-primary-600 hover:text-primary-700 underline underline-offset-2
                       transition-colors duration-150"
          >
            finance@mgh-ltd.com
          </a>
        </p>

        <p className={p}>
          ראו גם את{' '}
          <Link href="/privacy" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
            מדיניות הפרטיות
          </Link>{' '}
          שלנו.
        </p>

      </div>
    </div>
  );
}
