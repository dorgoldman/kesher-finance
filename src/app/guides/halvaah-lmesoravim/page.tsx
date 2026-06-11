import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* -- Canonical domain for this article -- */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaah-lmesoravim`;

export const metadata: Metadata = {
  title: 'הלוואה למסורבים',
  description:
    'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי, כולל טיפ אחד שרוב האנשים מפספסים.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'הלוואה למסורבים: מה האפשרויות האמיתיות ב-2026',
    description:
      'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי, כולל טיפ אחד שרוב האנשים מפספסים.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואה למסורבים: מה האפשרויות האמיתיות ב-2026',
    description:
      'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי.',
  },
};

/* -- JSON-LD -- */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה למסורבים: מה האפשרויות האמיתיות ב-2026',
    description:
      'הבנק סרב לך? זה לא סוף הדרך. המדריך המלא לאפשרויות מימון עם BDI שלילי, כולל טיפ אחד שרוב האנשים מפספסים.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',            item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',         item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואה למסורבים', item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה זה BDI ואיך הוא נקבע?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BDI הוא דירוג האשראי האישי שלך, בטווח 300 עד 850, שמבוסס על נתוני מערכת האשראי של בנק ישראל. הוא משקף את היסטוריית התשלומים שלך, צ\'קים חוזרים, חריגות ממסגרת, ועוד. ציון מתחת ל-600 נחשב שלילי.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לקבל הלוואה עם חשבון מוגבל?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'קשה יותר, אבל לא בלתי אפשרי. גופים חוץ בנקאיים לא כפופים לאותן הגבלות כמו הבנקים. הריבית תהיה גבוהה. אם יש לך קרן השתלמות או פנסיה, זו האפשרות הטובה ביותר גם עם חשבון מוגבל.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן לוקח לשפר דירוג אשראי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שיפור של 50 עד 100 נקודות אפשרי תוך שנה של התנהלות תקינה. תשלומים בזמן, הורדת יתרות חוב, ובדיקת הדוח לטעויות. אין קיצורי דרך.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם ניתן לתקן מידע שגוי ב-BDI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. אם גילית שגיאה בדוח האשראי שלך, פנה ללשכת האשראי עם מסמכים מאמתים. תיקון מידע שגוי יכול לשפר את הדירוג מהר יחסית.',
        },
      },
    ],
  },
];

/* -- Table of contents entries -- */
const TOC = [
  { id: 'bdi-check',     label: 'בדוק אם ה-BDI שלך נכון' },
  { id: 'bdi-table',     label: 'טווחי דירוג אשראי' },
  { id: 'chisachon',     label: 'הלוואה מהחיסכון שלך' },
  { id: 'hutz-bankait',  label: 'אפשרויות חוץ בנקאיות' },
  { id: 'lo-laasot',     label: 'מה לא לעשות' },
  { id: 'shippur-bdi',   label: 'איך משפרים BDI' },
  { id: 'dugma',         label: 'דוגמה: מהסירוב לאישור' },
  { id: 'faq',           label: 'שאלות נפוצות' },
];

/* -- Shared prose typography helpers -- */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaahLmesoravimPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואה למסורבים' },
        ]}
      />

      {/* Ad slot - above article */}
      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ARTICLE */}
        <article>

          {/* Article header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              הלוואה למסורבים: מה האפשרויות האמיתיות
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <Link href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</Link></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: מאי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            הבנק אמר לא. זה מרגיש כמו דלת שנסגרת. אבל זו לא הדלת האחרונה.
          </p>
          <p className={p}>
            קבלת סירוב אומרת שהאלגוריתם של הבנק לא אהב את הפרופיל שלך ברגע הזה.
            לא בהכרח שאין לך פתרון. ולא בהכרח שהנתונים שהוא ראה בכלל מדויקים.
          </p>

          {/* Section 0b: BDI score table */}
          <h2 id="bdi-table" className={h2}>טווחי דירוג אשראי: מה כל ציון אומר בפועל</h2>
          <p className={p}>
            בנק ישראל מפרסם דוח אשראי לכל אזרח. הדירוג נע בין 300 ל-850, הנה מה שכל טווח אומר כשניגשים לבנק:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">דירוג BDI</th>
                  <th className="px-4 py-2 text-right font-semibold">סיווג</th>
                  <th className="px-4 py-2 text-right font-semibold">מה זה אומר מול הבנק</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['750–850', 'מצוין', 'ריבית נמוכה, אישור מהיר, סכומים גבוהים'],
                  ['680–749', 'טוב', 'אישור ברוב הבנקים, ריבית ממוצעת'],
                  ['600–679', 'בינוני', 'בנקים מסוימים מאשרים, ריבית גבוהה יותר'],
                  ['500–599', 'חלש', 'סירוב בבנקים, אפשרי בחוץ בנקאיות'],
                  ['300–499', 'שלילי', 'סירוב ברוב הגופים, הלוואה מחיסכון או גמ"ח'],
                ].map(([range, label, meaning], i) => (
                  <tr key={range} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-primary-700">{range}</td>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{label}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            מקור:{' '}
            <a
              href="https://www.boi.org.il/financial-markets/credit-data/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700"
            >
              מערכת נתוני האשראי, בנק ישראל
            </a>
            .
          </p>

          {/* Section 1 */}
          <h2 id="bdi-check" className={h2}>קודם כל: בדוק אם ה-BDI שלך נכון</h2>
          <p className={p}>
            לפני שעוברים לאפשרויות אחרות, צריך לדעת דבר אחד. נתוני האשראי שלך יכולים
            להיות שגויים.
          </p>
          <p className={p}>
            זה קורה יותר ממה שחושבים. צ&apos;ק שחזר ואחר כך כובד אבל המידע השלילי נשאר.
            ערבות ישנה שנשכחת. טעות בדיווח של הבנק. כל אחד מאלה יכול להוריד את הדירוג
            שלך בלי שידעת.
          </p>
          <p className={p}>
            איך בודקים: נכנסים לאתר בנק ישראל ומבקשים דוח אשראי. זה בחינם פעם בשנה.
            אם מצאת טעות, פונים ללשכת האשראי לתיקון. שיפור עקבי של 50 עד 100 נקודות
            בדירוג אפשרי תוך שנה של התנהלות תקינה.
          </p>

          {/* Section 2 */}
          <h2 id="chisachon" className={h2}>הטיפ שרוב האנשים מפספסים: הלוואה מהחיסכון שלך</h2>
          <p className={p}>
            אם יש לך קרן השתלמות או פנסיה, יש לך הלוואה זמינה בריבית שלא תמצא בשום
            מקום אחר.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה מקרן השתלמות:</span>{' '}
            ריבית פריים מינוס 0.5%, כרגע סביב 5%. ללא בדיקת BDI. ללא ערבים. ללא
            בירוקרטיה ארוכה. הקרן היא הבטוחה.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה מקרן פנסיה:</span>{' '}
            ריבית 1% עד 5%. עד 28% משווי הקרן. גם כאן, BDI לא רלוונטי.
          </p>
          <p className={p}>
            זו האפשרות הזולה ביותר שקיימת, גם למי שהבנק סרב לו. רוב האנשים לא יודעים
            שיש להם גישה אליה. בדוק מול הגוף המנהל שלך לפני שפונה לכל מקום אחר.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לחשב כמה ייצא החזר חודשי?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה עובד לכל סוג הלוואה.
              </p>
            </div>
            <Link
              href="/tools/loan-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון הלוואה
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Section 3 */}
          <h2 id="hutz-bankait" className={h2}>אפשרויות חוץ בנקאיות עם BDI שלילי</h2>
          <p className={p}>אם אין לך חיסכון לנצל, יש עדיין כמה דרכים.</p>
          <p className={p}>
            <span className={strong}>חברות אשראי וחוץ בנקאיות.</span>{' '}
            כאל, מקס וישראכרט לפעמים מאשרות גם כשהבנק סירב. הן בודקות את ההכנסה
            הנוכחית יותר מהעבר. הריבית גבוהה יותר, 10% עד 18%, אבל זו אפשרות ריאלית.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה כנגד נכס.</span>{' '}
            אם יש לך דירה, ניתן לשעבד אותה להלוואה. הריבית נמוכה משמעותית כי הסיכון
            של המלווה נמוך. אבל הסיכון שלך גבוה: אי עמידה בתשלומים עלולה לסכן את הנכס.
          </p>
          <p className={p}>
            <span className={strong}>גמ&quot;חים ועוגן.</span>{' '}
            לא בודקים BDI בכלל. ריבית אפס. הסכומים מוגבלים, בדרך כלל עד ₪40,000 עד
            ₪60,000, והתהליך לוקח זמן. אבל אם עומדים בקריטריונים, זה הפתרון הטוב
            ביותר שקיים.
          </p>

          {/* Section 4 */}
          <h2 id="lo-laasot" className={h2}>מה לא לעשות</h2>
          <p className={p}>שתי מלכודות נפוצות שמחמירות את המצב.</p>
          <p className={p}>
            <span className={strong}>להגיש לחמישה גופים במקביל.</span>{' '}
            כל בדיקת BDI נרשמת. ריבוי בדיקות בפרק זמן קצר מורידות את הדירוג עוד יותר.
            החליטו על גוף אחד או שניים ופנו אליהם.
          </p>
          <p className={p}>
            <span className={strong}>לקבל הלוואה ממלווה לא רשום.</span>{' '}
            כל גוף שנותן הלוואות בישראל חייב להיות בעל רישיון ממשרד האוצר. אם אין
            רישיון, אל תחתמו. בדוק ברשות שוק ההון לפני כל פנייה.
          </p>

          {/* Section 5 */}
          <h2 id="shippur-bdi" className={h2}>איך משפרים BDI לטווח הארוך</h2>
          <p className={p}>
            קבלת הלוואה עכשיו היא הפתרון לטווח הקצר. שיפור ה-BDI הוא הפתרון לטווח הארוך.
          </p>
          <p className={p}>
            ארבעה דברים שעובדים: עמידה בכל תשלום בזמן, אפילו תשלומים קטנים. מסגרת
            אשראי גבוהה עם שימוש נמוך. הלוואה אחת גדולה במקום כמה קטנות. ובדיקת
            הדוח שנתית לאיתור טעויות.
          </p>
          <p className={p}>
            תוצאה ריאלית: שיפור של 50 עד 100 נקודות בדירוג תוך שנה של התנהלות תקינה.
            זה מספיק כדי לעבור מסירוב לאישור בבנקים רבים.
          </p>

          {/* Section 5b: worked example */}
          <h2 id="dugma" className={h2}>דוגמה: מהסירוב לאישור תוך 14 חודשים</h2>
          <p className={p}>
            ענת, שכירה מחיפה. דירוג BDI 530 בגלל צ&apos;ק שחזר לפני שלוש שנים. הבנק סירב.
          </p>
          <p className={p}>
            שלב ראשון: ביקשה דוח אשראי, גילתה שהצ&apos;ק החוזר עדיין מופיע אבל כובד בסוף,
            מה שלא עודכן. תיקנה את המידע עם הבנק. הדירוג עלה ל-575.
          </p>
          <p className={p}>
            שלב שני: לקחה הלוואה קטנה מגמ&quot;ח ₪8,000, החזירה אותה בזמן לאורך 12 חודשים.
            כל תשלום בזמן נרשם ועדכן את הדירוג. אחרי שנה: דירוג 640.
          </p>
          <p className={p}>
            שלב שלישי: חזרה לבנק לאומי עם דירוג 640 ואישור שכר מעודכן. קיבלה ₪40,000
            בריבית 8.5%. 14 חודשים אחרי הסירוב הראשון.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="גם אם קיבלת ריבית גבוהה, בדוק כמה זה מסתכם לאורך כל התקופה."
          />

          {/* Section 6: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה זה BDI ואיך הוא נקבע?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                BDI הוא דירוג האשראי האישי שלך, בטווח 300 עד 850, שמבוסס על נתוני מערכת
                האשראי של בנק ישראל. הוא משקף את היסטוריית התשלומים שלך, צ&apos;קים חוזרים,
                חריגות ממסגרת, ועוד. ציון מתחת ל-600 נחשב שלילי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם אפשר לקבל הלוואה עם חשבון מוגבל?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                קשה יותר, אבל לא בלתי אפשרי. גופים חוץ בנקאיים לא כפופים לאותן הגבלות
                כמו הבנקים. הריבית תהיה גבוהה. אם יש לך קרן השתלמות או פנסיה, זו האפשרות
                הטובה ביותר גם עם חשבון מוגבל.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                כמה זמן לוקח לשפר דירוג אשראי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                שיפור של 50 עד 100 נקודות אפשרי תוך שנה של התנהלות תקינה. תשלומים בזמן,
                הורדת יתרות חוב, ובדיקת הדוח לטעויות. אין קיצורי דרך.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם ניתן לתקן מידע שגוי ב-BDI?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. אם גילית שגיאה בדוח האשראי שלך, פנה ללשכת האשראי עם מסמכים מאמתים.
                תיקון מידע שגוי יכול לשפר את הדירוג מהר יחסית.
              </p>
            </div>
          </div>

          {/* Cross-links */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guides/halvaah-hutz-bankait"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה חוץ בנקאית: המדריך המלא
              </Link>
              <Link
                href="/guides/halvaot-madrich"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואות: איך בוחרים נכון
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-accent-100 pt-6">
            <p className="text-xs text-accent-400 leading-relaxed">
              <span className="font-semibold">אין באמור ייעוץ פיננסי.</span>{' '}
              המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.
            </p>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            {/* Sidebar ad */}
            <AdSlot variant="sidebar" />

            {/* Table of contents */}
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-4 text-sm uppercase tracking-wide">
                תוכן עניינים
              </h3>
              <nav aria-label="תוכן עניינים">
                <ul className="space-y-1.5">
                  {TOC.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-sm text-accent-500 hover:text-primary-600
                                   transition-colors duration-150 py-0.5 group"
                      >
                        <span className="w-1 h-1 rounded-full bg-accent-300
                                         group-hover:bg-primary-500 transition-colors duration-150 shrink-0" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Calculator CTA card */}
            <div className="card bg-primary-50/60 border-primary-100">
              <p className="text-sm font-semibold text-accent-800 mb-2">
                מחשבון הלוואה
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                חשבו החזר חודשי וסך ריבית לפי סכום, תקופה וריבית שבחרתם.
              </p>
              <Link
                href="/tools/loan-calculator"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5
                           bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                           rounded-xl transition-colors duration-200 cursor-pointer"
              >
                לחישוב
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </aside>

      </div>

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
