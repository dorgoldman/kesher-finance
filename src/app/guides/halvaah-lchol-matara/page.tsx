import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* -- Canonical domain for this article -- */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaah-lchol-matara`;

export const metadata: Metadata = {
  title: 'הלוואה לכל מטרה',
  description:
    'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר. המדריך המלא.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    description:
      'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר. המדריך המלא.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    description:
      'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר.',
  },
};

/* -- JSON-LD -- */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה לכל מטרה - מתי כדאי, מתי לא, וכמה זה עולה ב-2026',
    description:
      'הלוואה לכל מטרה היא הכלי הפיננסי הנפוץ ביותר בישראל. אבל היא יכולה להיות גם הטעות היקרה ביותר.',
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
      { '@type': 'ListItem', position: 1, name: 'ראשי',              item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',           item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואה לכל מטרה',   item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'האם חייבים לציין את מטרת ההלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא. הלוואה לכל מטרה לא מחייבת דיווח על השימוש. הגוף המלווה לא שואל ולא מגביל. חריג: הלוואה עם שעבוד נכס - שם יש תיעוד משפטי.',
        },
      },
      {
        '@type': 'Question',
        name: 'הלוואה לכל מטרה או הלוואה ייעודית - מה עדיף?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הלוואה ייעודית לרכב או לשיפוץ לפעמים מגיעה בריבית נמוכה יותר כי הגוף המלווה יודע למה הכסף מיועד ורואה בזה פחות סיכון. שווה לבדוק השוואה לפני שמחליטים.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה אפשר לקבל בהלוואה לכל מטרה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בנקים: עד ₪400,000 בדרך כלל. חברות אשראי: עד ₪150,000 עד ₪200,000. עם שעבוד נכס: יותר, בהתאם לשווי.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם כדאי לאחד כמה הלוואות קטנות לאחת גדולה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לפעמים כן, לפעמים לא. תלוי בריביות הקיימות מול הריבית שתקבל על ההלוואה החדשה. לפני שמאחדים - תחשב את העלות הכוללת של שתי האפשרויות, לא רק את ההחזר החודשי.',
        },
      },
    ],
  },
];

/* -- Table of contents entries -- */
const TOC = [
  { id: 'matai-ken',    label: 'מתי זו בחירה נכונה' },
  { id: 'matai-lo',     label: 'מתי זו טעות' },
  { id: 'kama-oleh',    label: 'כמה זה עולה ב-2026' },
  { id: 'gufim-table',  label: 'השוואת גופים מלווים' },
  { id: 'dugma',        label: 'דוגמה: חיסכון באיחוד' },
  { id: 'hidush-2026',  label: 'חידוש מיולי 2026' },
  { id: 'hashvaah',     label: 'איך משווים נכון' },
  { id: 'faq',          label: 'שאלות נפוצות' },
];

/* -- Shared prose typography helpers -- */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaahLcholMataraPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואה לכל מטרה' },
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
              הלוואה לכל מטרה: מתי כדאי, מתי לא, וכמה זה עולה
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
            42% ממשקי הבית בישראל נמצאים במינוס קבוע. רובם לא יודעים שהם כבר לוקחים הלוואה -
            רק בריבית גרועה יותר מכל מה שהיו יכולים לקבל.
          </p>
          <p className={p}>
            הלוואה לכל מטרה היא פשוט הלוואה שלא צריך להסביר לאף אחד למה אתה רוצה אותה.
            שיפוץ, חתונה, סגירת המינוס, ציוד לעסק, טיפולי פוריות - לא מדווחים, לא שואלים.
            הכסף מגיע לחשבון.
          </p>
          <p className={p}>
            זו הגמישות שלה. וזו גם הסכנה שלה.
          </p>

          {/* Section 1 */}
          <h2 id="matai-ken" className={h2}>מתי הלוואה לכל מטרה היא בחירה נכונה</h2>
          <p className={p}>יש מצבים שבהם הלוואה לכל מטרה היא כלי מצוין. לא כל הלוואה היא טעות.</p>

          <p className={p}>
            <span className={strong}>סגירת מינוס קבוע.</span>{' '}
            ריבית החריגה ממסגרת האשראי גבוהה משמעותית מריבית הלוואה רגילה. אם אתה נמצא במינוס
            של ₪5,000 חודש אחרי חודש, הלוואה שסוגרת אותו ומפרסת את ההחזר על 24 תשלומים בריבית
            נמוכה יותר - זו החלטה נכונה.
          </p>
          <p className={p}>
            <span className={strong}>הוצאה חד-פעמית גדולה.</span>{' '}
            חתונה, שיפוץ, רכב משומש, ניתוח שלא בקופה. הוצאות שאי אפשר לחסוך אליהן בזמן הקיים
            ושיש יכולת ריאלית להחזיר.
          </p>
          <p className={p}>
            <span className={strong}>גישור על פער תזרימי.</span>{' '}
            עצמאי שמחכה לתשלום גדול, עסק בין עסקאות, זוג שמוכר דירה ורוכש אחרת בו-זמנית.
            הלוואה לכל מטרה היא פתרון גישור לגיטימי.
          </p>
          <p className={p}>
            <span className={strong}>איחוד הלוואות.</span>{' '}
            יש לך שלוש הלוואות קטנות בריביות שונות? לפעמים הלוואה אחת גדולה בריבית נמוכה יותר
            חוסכת כסף משמעותי לאורך זמן.
          </p>

          {/* Section 2 */}
          <h2 id="matai-lo" className={h2}>מתי זו טעות</h2>
          <p className={p}>כאן רוב האנשים מתבלבלים.</p>

          <p className={p}>
            <span className={strong}>מימון שגרת חיים.</span>{' '}
            אם אתה לוקח הלוואה כדי לכסות הוצאות חודשיות שוטפות - מזון, שכר דירה, חשבונות -
            זה סימן שיש בעיה תזרימית עמוקה יותר שהלוואה לא תפתור. היא תדחה אותה.
          </p>
          <p className={p}>
            <span className={strong}>מותרות שאפשר לחכות להן.</span>{' '}
            חופשה ראשונה בחו&quot;ל, טלוויזיה חדשה, שיפוץ אסתטי. אלה לא דחוף. אם לוקחים עליהם
            הלוואה ב-12% ריבית, משלמים בסוף הרבה יותר ממה שהדבר שווה.
          </p>
          <p className={p}>
            <span className={strong}>כשיש אלטרנטיבה זולה יותר.</span>{' '}
            לפני שלוקחים הלוואה לכל מטרה, בדוק: יש לך קרן השתלמות? הלוואה מקרן השתלמות עולה
            פריים מינוס עד אפס ריבית. זו הזדמנות שרוב האנשים לא מנצלים.
          </p>

          {/* Section 3 */}
          <h2 id="kama-oleh" className={h2}>כמה זה עולה ב-2026</h2>
          <p className={p}>
            ריבית הלוואה לכל מטרה בישראל נעה כיום בין 7% ל-18% שנתית, תלוי בגוף המלווה
            ובפרופיל שלך.
          </p>
          <p className={p}>
            <span className={strong}>בנקים</span> - בדרך כלל פריים פלוס 1.5% עד 4%. כרגע 7% עד 9.5%.
            הזולים ביותר, אבל הקשה ביותר לקבל.
          </p>
          <p className={p}>
            <span className={strong}>חברות אשראי (כאל, מקס, ישראכרט)</span> - פריים פלוס 2.75% עד 12.65%.
            כרגע 8.25% עד 18.15%. מהירות, נגישות, אבל יקרות יותר.
          </p>
          <p className={p}>
            <span className={strong}>בנקים דיגיטליים</span> - מאוד תחרותיים לאחרונה. לפעמים הצעות
            טובות יותר מהבנק שלך, בתהליך מהיר יותר.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות כמה ייצא החזר חודשי לפי ריביות שונות?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה עושה את זה תוך שניות.
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

          {/* Section 3b: Lender comparison table */}
          <h2 id="gufim-table" className={h2}>השוואת גופים מלווים, הלוואה לכל מטרה ב-2026</h2>
          <p className={p}>
            לפני שמבקשים הצעה, שווה להבין מה כל גוף מציע ולמי הוא מתאים.
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">גוף מלווה</th>
                  <th className="px-4 py-3 font-semibold text-right">ריבית אפקטיבית (אומדן)</th>
                  <th className="px-4 py-3 font-semibold text-right">סכום מקסימלי</th>
                  <th className="px-4 py-3 font-semibold text-right">זמן אישור</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['בנק לאומי / הפועלים', '7%–10%', '₪400,000', '5–10 ימים'],
                  ['מזרחי טפחות / דיסקונט', '8%–11%', '₪350,000', '5–10 ימים'],
                  ['בנקים דיגיטליים (One Zero)', '7%–9.5%', '₪200,000', '1–3 ימים'],
                  ['כאל / מקס / ישראכרט', '10%–18%', '₪150,000–200,000', '1–2 ימים'],
                  ['קרן השתלמות (אם קיימת)', 'פריים–0.5% עד 0%', 'עד 80% מהצבירה', '3–7 ימים'],
                ].map(([lender, rate, max, time], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}>
                    <td className="px-4 py-3 font-medium text-accent-800 border border-accent-100">{lender}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{rate}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{max}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            שים לב: ריביות אלו הן אומדנים לפרופיל ממוצע. הריבית שתקבל תלויה בדירוג
            האשראי שלך, בהכנסה, ובמשא ומתן. לקוח ותיק של הבנק יקבל תמיד הצעה טובה
            יותר מלקוח חדש.
          </p>

          {/* Section 3c: Worked example */}
          <h2 id="dugma" className={h2}>דוגמה מספרית: כמה חוסכים באיחוד הלוואות</h2>
          <p className={p}>
            נועה מתל אביב הייתה עם שלוש הלוואות פעילות: הלוואת רכב ב-11% (₪900 בחודש),
            הלוואת כרטיס אשראי ב-16% (₪600 בחודש), ומינוס קבוע שעלה לה בפועל 18%
            (₪500 בחודש). בסך הכל ₪2,000 בחודש לשלוש הלוואות שונות.
          </p>
          <p className={p}>
            היא לקחה הלוואה לכל מטרה מבנק לאומי ב-9% לחמש שנים, ואיחדה את הכל לסכום
            של ₪60,000. ההחזר החודשי החדש: ₪1,245. חיסכון מיידי: ₪755 בחודש.
          </p>
          <p className={p}>
            לאורך חמש השנים חסכה נועה כ-₪12,300 בריבית בלבד, בהשוואה להמשך עם שלוש
            ההלוואות הישנות. לא הסכום הגדול בעולם, אבל ₪755 פנויים בכל חודש זה שינוי
            משמעותי בתזרים.
          </p>
          <p className={p}>
            הלקח: איחוד הלוואות משתלם כשהריבית על ההלוואה החדשה נמוכה משמעותית מהממוצע
            המשוקלל של ההלוואות הקיימות. כדאי לחשב לפני שפועלים.
          </p>

          {/* Section 4 */}
          <h2 id="hidush-2026" className={h2}>חידוש חשוב מיולי 2026</h2>
          <p className={p}>
            מיולי 2026 נכנס לתוקף שינוי של הפיקוח על הבנקים: כעת ניתן לקחת הלוואה לכל מטרה תוך
            משכון עד 70% מהבית, במקום 50% שהיה עד כה. ההגדלה מוגבלת לעד ₪200,000 נוספים מעל
            המגבלה הקודמת.
          </p>
          <p className={p}>
            זה רלוונטי לבעלי נכסים שצריכים סכום גדול ורוצים ריבית של משכנתא במקום ריבית של
            הלוואה רגילה. הריבית משמעותית נמוכה יותר - אבל הסיכון הוא שהבית משועבד. לא מתאים
            לכולם.
          </p>

          {/* Section 5 */}
          <h2 id="hashvaah" className={h2}>איך משווים נכון</h2>
          <p className={p}>אל תסתכל רק על הריבית החודשית. תסתכל על העלות הכוללת.</p>
          <p className={p}>
            הלוואה של ₪50,000 ב-9% לחמש שנים עולה בסך הכל כ-₪62,500. אותה הלוואה ב-14% עולה
            כ-₪70,000. הפרש של ₪7,500 בין שני מספרים שנראים לא כל כך שונים.
          </p>
          <p className={p}>
            שלושה דברים שחייבים לבדוק: ריבית EFF (לא נומינלית), עמלת פירעון מוקדם, וריבית
            פיגורים אם תפגר. הכל מפורט בחוזה. קרא אותו.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="לפני שמחליטים על הסכום, בדוק מה ייצא כהחזר חודשי."
          />

          {/* Section 6: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם חייבים לציין את מטרת ההלוואה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לא. הלוואה לכל מטרה לא מחייבת דיווח על השימוש. הגוף המלווה לא שואל ולא מגביל.
                חריג: הלוואה עם שעבוד נכס - שם יש תיעוד משפטי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                הלוואה לכל מטרה או הלוואה ייעודית - מה עדיף?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הלוואה ייעודית לרכב או לשיפוץ לפעמים מגיעה בריבית נמוכה יותר כי הגוף המלווה
                יודע למה הכסף מיועד ורואה בזה פחות סיכון. שווה לבדוק השוואה לפני שמחליטים.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה אפשר לקבל?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בנקים: עד ₪400,000 בדרך כלל. חברות אשראי: עד ₪150,000 עד ₪200,000. עם שעבוד
                נכס: יותר, בהתאם לשווי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם כדאי לאחד כמה הלוואות קטנות לאחת גדולה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לפעמים כן, לפעמים לא. תלוי בריביות הקיימות מול הריבית שתקבל על ההלוואה החדשה.
                לפני שמאחדים - תחשב את העלות הכוללת של שתי האפשרויות, לא רק את ההחזר החודשי.
              </p>
            </div>
          </div>

          {/* Cross-links */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guides/halvaot-madrich"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואות - איך בוחרים נכון
              </Link>
              <Link
                href="/guides/halvaah-hutz-bankait"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה חוץ בנקאית - המדריך המלא
              </Link>
              <Link
                href="/guides/הלוואה-מקרן-השתלמות"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה מקרן השתלמות: הכסף הזול שרוב האנשים שוכחים
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.boi.org.il/monetary-policy/interest-rate-decisions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">בנק ישראל, החלטות ריבית</a>{' '}·{' '}
            <a href="https://www.boi.org.il/financial-markets/credit-data/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">מאגר נתוני אשראי, בנק ישראל</a>
          </div>

          <RelatedGuides currentHref="/guides/halvaah-lchol-matara" />

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
