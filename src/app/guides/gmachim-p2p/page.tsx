import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME, OG_IMAGE } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* -- Canonical domain for this article -- */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/gmachim-p2p`;

export const metadata: Metadata = {
  title: 'גמ"חים ו-P2P: הלוואה ללא ריבית',
  description:
    'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים. גמ"חים, קרן עוגן, SparkIL ו-P2P, כל מה שצריך לדעת.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'גמ"חים, עוגן, ו-P2P: המדריך להלוואה ללא ריבית בישראל',
    description:
      'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים. גמ"חים, קרן עוגן, SparkIL ו-P2P, כל מה שצריך לדעת.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'גמ"חים, עוגן, ו-P2P: המדריך להלוואה ללא ריבית בישראל',
    description:
      'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים.',
  },
};

/* -- JSON-LD -- */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'גמ"חים, עוגן, ו-P2P: המדריך להלוואה ללא ריבית בישראל',
    description:
      'יש עולם שלם של הלוואות ללא ריבית בישראל שרוב האנשים לא מכירים. גמ"חים, קרן עוגן, SparkIL ו-P2P, כל מה שצריך לדעת.',
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
      { '@type': 'ListItem', position: 1, name: 'ראשי',          item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',       item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'גמ"חים ו-P2P',  item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'האם הלוואה מגמ"ח משפיעה על דירוג האשראי שלי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא. הלוואות מגמ"חים לא מדווחות למערכת נתוני האשראי של בנק ישראל. זה אחד היתרונות הגדולים שלהן, גם לאנשים עם BDI שלילי.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן לוקח לקבל הלוואה מעוגן?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בין שבועיים לחודש בדרך כלל. הגמ"חים הקהילתיים הקטנים יכולים לקחת יותר זמן. זה לא מסלול לצרכים דחופים.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם P2P בישראל עדיין כדאי ב-2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי בפלטפורמה. טריא ממשיכה לפעול. בלנדר הפסיקה אשראי חדש ב-P2P. שווה לבדוק את המצב העדכני של כל פלטפורמה לפני הגשת בקשה. P2P לא אוטומטית זול יותר מבנק, הריביות יכולות להיות גבוהות בהתאם לפרופיל שלך.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם SparkIL מתאים לעסק שלי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'SparkIL מיועדת לעסקים קטנים בפריפריה הגאוגרפית או הסוציו-אקונומית. אם העסק שלך ממוקם בפריפריה או משרת אוכלוסיות מוחלשות, שווה לבדוק זכאות. ניתן לפנות דרך ogen.org.',
        },
      },
    ],
  },
];

/* -- Table of contents entries -- */
const TOC = [
  { id: 'gmach-mah-ze',   label: 'גמ"ח הלוואות: מה זה' },
  { id: 'ogen',           label: 'קרן עוגן' },
  { id: 'hashvaah',       label: 'השוואת מסלולים' },
  { id: 'p2p',            label: 'P2P בישראל ב-2026' },
  { id: 'lemee-matim',    label: 'למי זה מתאים' },
  { id: 'matzo-gmach',    label: 'איך מוצאים גמ"ח' },
  { id: 'dugma',          label: 'דוגמה מספרית' },
  { id: 'faq',            label: 'שאלות נפוצות' },
];

/* -- Shared prose typography helpers -- */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function GmachimP2PPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'גמ"חים ו-P2P' },
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
              גמ&quot;חים, עוגן, ו-P2P: הלוואה ללא ריבית בישראל
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: מאי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            כאל גובה ממך 12% ריבית. הבנק גובה 9%. אבל יש מקומות שגובים 0%.
          </p>
          <p className={p}>
            רוב האנשים לא מכירים אותם. לא כי הם מסתירים, אלא כי לא מדברים על זה מספיק.
            המדריך הזה מכסה את כל העולם הזה, מה קיים, למי זה מתאים, ומה לא לצפות ממנו.
          </p>

          {/* Section 1 */}
          <h2 id="gmach-mah-ze" className={h2}>גמ&quot;ח הלוואות: מה זה בדיוק</h2>
          <p className={p}>
            גמ&quot;ח זה קיצור של גמילות חסדים. מוסד יהודי עתיק שבגרסתו המודרנית מתורגם
            לארגונים ועמותות שמלווים כסף ללא ריבית לאנשים שצריכים.
          </p>
          <p className={p}>
            בישראל פועלים כיום קרוב ל-2,000 ארגוני גמ&quot;ח הלוואות. חלקם קהילתיים וקטנים,
            חלקם מאורגנים ומקצועיים. הסכומים נעים בין ₪5,000 ל-₪50,000 בדרך כלל. הריבית: אפס.
          </p>
          <p className={p}>
            מה הם כן דורשים: ערב אחד או שניים. הוכחת הכנסה יציבה. לפעמים קשר לקהילה או
            המלצה. ותהליך שלוקח זמן, לעיתים כמה שבועות.
          </p>
          <p className={p}>
            זה לא פתרון לחירום של מחר. זה פתרון למי שיש לו זמן ויש לו יכולת החזר.
          </p>

          {/* Section 2 */}
          <h2 id="ogen" className={h2}>קרן עוגן: הגדולה בתחום</h2>
          <p className={p}>
            עוגן היא הארגון הגדול והמקצועי ביותר בתחום הלוואות ללא ריבית בישראל. פעילה
            כ-35 שנה, הלוותה עד כה מעל מיליארד שקל לעשרות אלפי משפחות.
          </p>
          <p className={p}>
            מה היא מציעה: הלוואות ליחידים ומשפחות עד ₪60,000. מסלולים מיוחדים לסטודנטים,
            למשרתי מילואים שנפגעו כלכלית, ולמי שנמצא בהוצאה לפועל. ריבית: אפס.
          </p>
          <p className={p}>
            לעסקים קטנים: דרך SparkIL, מיזם משותף עם הסוכנות היהודית, ניתן לקבל הלוואות
            עד ₪90,000 לעוסק מורשה, ועד ₪40,000 לעוסק פטור. ללא ריבית וללא עמלות. הכסף
            מגיע ממשקיעי אימפקט מהעולם היהודי שבוחרים לממן עסקים ישראלים בפריפריה.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לחשב כמה ייצא החזר חודשי על ההלוואה שאתה שוקל?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה עובד לכל סכום ותקופה.
              </p>
            </div>
            <a
              href="/tools/loan-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון הלוואה
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Section 2b: comparison table */}
          <h2 id="hashvaah" className={h2}>השוואה: גמ&quot;ח, P2P, ובנק, אותה הלוואה</h2>
          <p className={p}>
            הלוואה של ₪40,000 ל-3 שנים. ריבית שונה לחלוטין לפי מאיפה תביא אותה.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">מקור ההלוואה</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית שנתית</th>
                  <th className="px-4 py-2 text-right font-semibold">החזר חודשי</th>
                  <th className="px-4 py-2 text-right font-semibold">סך ריבית</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['גמ"ח / עוגן', '0%', '₪1,111', '₪0'],
                  ['P2P (טריא)', '7%', '₪1,235', 'כ-₪4,460'],
                  ['בנק', '9%', '₪1,272', 'כ-₪5,790'],
                  ['חברת אשראי', '13%', '₪1,349', 'כ-₪8,560'],
                ].map(([src, rate, monthly, total], i) => (
                  <tr key={src} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{src}</td>
                    <td className="border border-accent-100 px-4 py-2 text-primary-700">{rate}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-700">{monthly}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            הפרש של ₪8,560 על אותה הלוואה. אם יש לך את הזמן לחכות לגמ&quot;ח, זה שווה.
          </p>

          {/* Section 3 */}
          <h2 id="p2p" className={h2}>P2P בישראל: מה המצב ב-2026</h2>
          <p className={p}>
            הלוואות עמית לעמית (P2P) הן פלטפורמות שמחברות בין לווים למלווים פרטיים.
            בלי בנק באמצע.
          </p>
          <p className={p}>
            צריך לדעת את המצב הנוכחי בכנות: השוק הישראלי עבר כמה שנים קשות. טריא חוותה
            קשיים שגרמו למשקיעים להתקשות למשוך כספים. בלנדר הודיעה בתחילת 2026 שהפסיקה
            להעמיד אשראי חדש במסגרת P2P.
          </p>
          <p className={p}>
            מה שכן קיים ופועל: טריא ממשיכה לפעול ומציעה הלוואות עד ₪70,000 בריבית 4% עד
            17.5%. BTB מתמחה בהלוואות לעסקים בלבד, עד מיליון שקל. SparkIL פועלת בתחום
            הלוואות ללא ריבית לעסקים קטנים בפריפריה.
          </p>
          <p className={p}>
            P2P יכול להיות אופציה טובה, אבל חשוב לבדוק את מצב הפלטפורמה לפני הגשת בקשה.
            השוק הישראלי קטן יחסית.
          </p>

          {/* Section 4 */}
          <h2 id="lemee-matim" className={h2}>למי זה מתאים ולמי לא</h2>
          <p className={p}>
            <span className={strong}>מתאים לך אם:</span>{' '}
            יש לך זמן, יכולת החזר מוכחת, ואתה מחפש את הריבית הנמוכה ביותר שקיימת. אם
            הסכום שאתה צריך הוא עד ₪50,000 עד ₪60,000, גמ&quot;ח או עוגן הם הפתרון הזול
            ביותר שקיים בשוק.
          </p>
          <p className={p}>
            <span className={strong}>לא מתאים לך אם:</span>{' '}
            אתה צריך את הכסף תוך יומיים. או אם אתה צריך סכום גדול מ-₪100,000. או אם
            אין לך ערבים ואין לך הכנסה מוכחת.
          </p>
          <p className={p}>
            הכלל הפשוט: תמיד בדוק גמ&quot;ח ועוגן לפני שאתה פונה לבנק או לחברת אשראי.
            אם מגיע לך, חסכת הרבה כסף. אם לא, המשך הלאה.
          </p>

          {/* Section 5 */}
          <h2 id="matzo-gmach" className={h2}>איך מוצאים גמ&quot;ח באזור שלך</h2>
          <p className={p}>אין רשימה מרכזית אחת, אבל יש כמה דרכים:</p>
          <p className={p}>
            חיפוש בגוגל: &quot;גמ&quot;ח הלוואות&quot; ושם העיר שלך. פנייה לרב הקהילה או
            בית הכנסת המקומי. מוקד 118 מפנה לגמ&quot;חים באזורך. עובד סוציאלי ברשות
            המקומית. לעוגן ספציפית: האתר הרשמי ogen.org, או התקשרות ל-3309*.
          </p>

          {/* Section 5b: worked example */}
          <h2 id="dugma" className={h2}>דוגמה אמיתית: שיפוץ בית ₪30,000</h2>
          <p className={p}>
            עמית, עצמאי מבאר שבע, צריך ₪30,000 לשיפוץ. אין לו קרן השתלמות נזילה ואין נכס לשעבד.
          </p>
          <p className={p}>
            ניגש לבנק, מאשרים ₪20,000 בלבד בריבית 10%. ניגש לחברת אשראי, מאשרים ₪30,000 ב-14%.
            לשניהם ל-4 שנים.
          </p>
          <p className={p}>
            גילה שיש גמ&quot;ח עירוני בבאר שבע שמלווה עד ₪30,000. תהליך לקח שלושה שבועות.
            קיבל את הסכום המלא. ריבית: אפס. החזר חודשי: ₪625. לאורך 4 שנים, שילם בדיוק ₪30,000.
          </p>
          <p className={p}>
            אם היה לוקח מחברת האשראי: שילם ₪30,000 קרן ועוד כ-₪9,200 ריבית. שלושה שבועות של
            המתנה חסכו לו ₪9,200.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="לא בטוח כמה לבקש? בדוק כמה ייצא ההחזר החודשי."
          />

          {/* Section 6: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם הלוואה מגמ&quot;ח משפיעה על דירוג האשראי שלי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לא. הלוואות מגמ&quot;חים לא מדווחות למערכת נתוני האשראי של בנק ישראל. זה
                אחד היתרונות הגדולים שלהן, גם לאנשים עם BDI שלילי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                כמה זמן לוקח לקבל הלוואה מעוגן?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בין שבועיים לחודש בדרך כלל. הגמ&quot;חים הקהילתיים הקטנים יכולים לקחת
                יותר זמן. זה לא מסלול לצרכים דחופים.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם P2P בישראל עדיין כדאי ב-2026?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי בפלטפורמה. טריא ממשיכה לפעול. בלנדר הפסיקה אשראי חדש ב-P2P. שווה
                לבדוק את המצב העדכני של כל פלטפורמה לפני הגשת בקשה. P2P לא אוטומטית זול
                יותר מבנק, הריביות יכולות להיות גבוהות בהתאם לפרופיל שלך.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם SparkIL מתאים לעסק שלי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                SparkIL מיועדת לעסקים קטנים בפריפריה הגאוגרפית או הסוציו-אקונומית. אם
                העסק שלך ממוקם בפריפריה או משרת אוכלוסיות מוחלשות, שווה לבדוק זכאות.
                ניתן לפנות דרך ogen.org.
              </p>
            </div>
          </div>

          {/* Cross-links */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/guides/halvaah-hutz-bankait"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה חוץ בנקאית: המדריך המלא
              </a>
              <a
                href="/guides/halvaah-lmesoravim"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה למסורבים: מה האפשרויות
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.gov.il/he/departments/capital_market_insurance_and_savings_authority" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">רשות שוק ההון, פלטפורמות P2P</a>{' '}·{' '}
            <a href="https://www.kolzchut.org.il/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">כל-זכות, זכויות פיננסיות</a>
          </div>

          <RelatedGuides currentHref="/guides/gmachim-p2p" />

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
              <a
                href="/tools/loan-calculator"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5
                           bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                           rounded-xl transition-colors duration-200 cursor-pointer"
              >
                לחישוב
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </aside>

      </div>

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
