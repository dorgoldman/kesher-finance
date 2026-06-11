import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/SEO';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const CANONICAL = `${SITE_URL}/about`;

export const metadata: Metadata = {
  title: 'אודות מקסיט',
  description:
    'מי עומד מאחורי מקסיט, איך אנחנו כותבים ובודקים את התוכן, ועל אילו מקורות רשמיים אנחנו מסתמכים. שקיפות מלאה על שיטת העבודה שלנו.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'אודות מקסיט',
    description:
      'מי עומד מאחורי מקסיט, איך אנחנו כותבים ובודקים את התוכן, ועל אילו מקורות רשמיים אנחנו מסתמכים.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'אודות מקסיט',
    description:
      'מי עומד מאחורי מקסיט, איך אנחנו כותבים ובודקים את התוכן, ועל אילו מקורות רשמיים אנחנו מסתמכים.',
    url: CANONICAL,
    inLanguage: 'he',
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      founder: { '@type': 'Person', name: 'דור גולדמן' },
      parentOrganization: { '@type': 'Organization', name: 'MGH Venture Studio' },
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'דור גולדמן',
    jobTitle: 'מייסד ועורך ראשי',
    worksFor: { '@type': 'Organization', name: SITE_NAME },
    url: CANONICAL,
  },
];

const h2 = 'text-xl font-bold text-accent-900 mb-3 mt-10';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function AboutPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: 'אודות' }]} />

      <div className="max-w-2xl">

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-3 tracking-tight">
            אודות מקסיט
          </h1>
          <p className="text-sm text-accent-400">עודכן לאחרונה: יוני 2026</p>
        </header>

        <p className={p}>
          רוב הישראלים מקבלים את ההחלטות הפיננסיות הגדולות בחייהם, משכנתא, הלוואה,
          מחזור, מול מישהו שמרוויח מההחלטה שלהם. מקסיט נבנתה כדי לתת לך את הצד השני:
          כלים ומדריכים בעברית שמסבירים את המספרים, בלי שאף אחד מנסה למכור לך משהו.
        </p>

        <h2 className={h2}>מה אנחנו עושים</h2>
        <p className={p}>
          אנחנו בונים מחשבונים פיננסיים מדויקים ומדריכים ברורים בעברית: מחשבון משכנתא
          רב-מסלולי, מחשבון הלוואה, ומחשבון שכר נטו לפי מדרגות המס של 2026. לצד הכלים,
          אנחנו כותבים מדריכים על הלוואות, ריביות, דירוג אשראי, תמהיל משכנתא וגמ&quot;חים.
          הכל חינמי, בלי הרשמה, ובשפה שאנשים מדברים, לא בשפה של חוזים.
        </p>

        <h2 className={h2}>מי כותב את התוכן</h2>
        <p className={p}>
          <span className={strong}>דור גולדמן</span> הוא המייסד והעורך הראשי של מקסיט.
          המדריכים נכתבים ונערכים על ידו, ומבוססים על מקורות רשמיים בלבד, פרסומי בנק
          ישראל, רשות שוק ההון, רשות המסים והמוסד לביטוח לאומי. מקסיט היא מיזם של{' '}
          <span className={strong}>MGH Venture Studio</span>, סטודיו לפיתוח ותפעול
          מוצרים דיגיטליים.
        </p>
        <p className={p}>
          חשוב שתדע: אנחנו לא יועצי משכנתאות, לא יועצי השקעות ולא יועצי מס, ואיננו בעלי
          רישיון לייעוץ פיננסי. התוכן כאן נועד להסביר ולהנגיש, לא להחליף ייעוץ אישי מבעל
          רישיון. אנחנו אומרים את זה בפירוש כי בתחום הזה שקיפות חשובה יותר מרושם.
        </p>

        <h2 className={h2}>איך אנחנו כותבים ובודקים, כללי המערכת שלנו</h2>
        <ul className="list-disc pr-5 space-y-2 text-accent-600 leading-relaxed mb-5">
          <li>
            <span className={strong}>מקורות רשמיים בלבד.</span> כל נתון מספרי, ריביות,
            מדרגות מס, יחסי החזר, תקרות מימון, מגיע מפרסום רשמי, ולא מהערכה.
          </li>
          <li>
            <span className={strong}>עדכון שוטף.</span> נתונים שמשתנים (ריבית בנק ישראל,
            מדרגות מס, מגבלות בנק ישראל) מתעדכנים כשהרגולטור מעדכן אותם. כל מאמר נושא
            תאריך עדכון.
          </li>
          <li>
            <span className={strong}>דוגמאות אמיתיות.</span> אנחנו מסבירים עם מספרים
            קונקרטיים בשקלים, לא עם הכללות. אם כתוב &quot;חיסכון של ₪126,000&quot;, יש
            מאחוריו חישוב.
          </li>
          <li>
            <span className={strong}>בלי ניגוד עניינים.</span> איננו מתווכי הלוואות
            ואיננו מקבלים עמלה על הפניה לבנק או לגוף מימון מסוים. ההכנסה של האתר היא
            מפרסום בלבד.
          </li>
          <li>
            <span className={strong}>תיקון טעויות.</span> מצאת אי-דיוק? כתוב לנו
            ונתקן. דף{' '}
            <Link href="/contact" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              צור קשר
            </Link>{' '}
            פתוח לכולם.
          </li>
        </ul>

        <h2 className={h2}>המקורות שעליהם אנחנו מסתמכים</h2>
        <p className={p}>
          אלה הגופים הרשמיים שמהם נשאבים הנתונים באתר. מומלץ לכל קורא להצליב מולם:
        </p>
        <ul className="list-disc pr-5 space-y-2 text-accent-600 leading-relaxed mb-5">
          <li>
            <a href="https://www.boi.org.il/" target="_blank" rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              בנק ישראל
            </a>, ריבית בנק ישראל, מגבלות מימון משכנתא, מאגר נתוני אשראי
          </li>
          <li>
            <a href="https://www.gov.il/he/departments/capital_market_insurance_and_savings_authority"
              target="_blank" rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              רשות שוק ההון, ביטוח וחיסכון
            </a>, רישוי ופיקוח על נותני אשראי חוץ-בנקאיים
          </li>
          <li>
            <a href="https://www.gov.il/he/departments/israel_tax_authority"
              target="_blank" rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              רשות המסים
            </a>, מדרגות מס הכנסה, נקודות זיכוי, מס רכישה
          </li>
          <li>
            <a href="https://www.btl.gov.il/" target="_blank" rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              המוסד לביטוח לאומי
            </a>, דמי ביטוח לאומי ומס בריאות
          </li>
          <li>
            <a href="https://www.kolzchut.org.il/" target="_blank" rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700">
              כל-זכות
            </a>, זכויות פיננסיות, סיוע בדיור והלוואות זכאות
          </li>
        </ul>

        <h2 className={h2}>העיקרון שלנו</h2>
        <p className={p}>
          המידע באתר הוא לצרכי לימוד והתמצאות בלבד. אנחנו לא יועצי השקעות, לא יועצי מס,
          ולא נותני שירותים פיננסיים. לפני כל החלטה פיננסית משמעותית, התייעץ עם בעל רישיון.
        </p>

        <div className="mt-10 p-5 bg-primary-50 border border-primary-100 rounded-2xl">
          <p className="text-sm font-semibold text-accent-800 mb-1">יש שאלה או תיקון?</p>
          <p className="text-sm text-accent-600 mb-3">נשמח לשמוע, אנחנו עונים תוך יום-יומיים.</p>
          <Link href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-600
                       hover:bg-primary-700 text-white text-sm font-semibold transition-colors duration-200">
            צור קשר
          </Link>
        </div>

      </div>
    </div>
  );
}
