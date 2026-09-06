import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME, OG_IMAGE } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* ── Canonical domain for this article ── */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaot-madrich`;

export const metadata: Metadata = {
  title: 'הלוואות: איך בוחרים נכון',
  description:
    'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'הלוואות - המדריך המלא לבחירה נכונה ב-2026',
    description:
      'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואות - המדריך המלא לבחירה נכונה ב-2026',
    description:
      'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
  },
};

/* ── JSON-LD ── */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואות - המדריך המלא לבחירה נכונה ב-2026',
    description:
      'לפני שלוקחים הלוואה - קראו את זה. מה לבדוק, מה לא לפספס, ואיך לא לשלם יותר ממה שצריך.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-01-01',
    dateModified: '2026-09-03',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',                      item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',                   item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואות - איך בוחרים נכון', item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה זה BDI ואיך הוא משפיע עליי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'BDI הוא דירוג האשראי האישי שלך, בטווח 300 עד 850. ציון מתחת ל-600 נחשב שלילי. הבנקים וחברות המימון בודקים אותו כחלק מהבקשה. ציון נמוך לא אומר שלא תקבל הלוואה, אבל כנראה תשלם עליה ריבית גבוהה יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן הבקשה להלוואה לוקחת?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי איפה. בנק דיגיטלי: 3 עד 7 ימי עסקים. חברת אשראי: 1 עד 3 ימים. פלטפורמת P2P: לפעמים למחרת. הלוואה עם בטוחה כמו נכס: 2 עד 4 שבועות.',
        },
      },
      {
        '@type': 'Question',
        name: 'אם הבנק סרב לי, מה זה אומר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'זה אומר שהאלגוריתם של הבנק לא אהב את הפרופיל שלך ברגע זה. לא בהכרח שאין לך פתרון. חברות חוץ בנקאיות עובדות עם קריטריונים שונים. אם גם הן סירבו לך - כנראה יש בעיה שצריך לטפל בה לפני שלוקחים הלוואה.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם לקיחת הלוואה פוגעת בדירוג האשראי שלי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'עצם לקיחת ההלוואה לא פוגעת. אם אתה עומד בתשלומים, זה אפילו יכול לשפר את הדירוג. הבעיה מתחילה כשמפגרים בתשלומים.',
        },
      },
    ],
  },
];

/* ── Table of contents ── */
const TOC = [
  { id: 'mah-hofech',    label: 'אילו הלוואות טובות?' },
  { id: 'ribbit-eff',    label: 'ריבית נומינלית vs אפקטיבית' },
  { id: 'kama-lehahzir', label: 'כמה אתה יכול להחזיר' },
  { id: 'sugei-halvaa',  label: 'סוגי ההלוואות' },
  { id: 'hashvaah',      label: 'השוואת מסלולים בטבלה' },
  { id: 'dugma',         label: 'דוגמה: אותו סכום, שלושה מחירים' },
  { id: 'lifnei-hatima', label: 'מה לבדוק לפני שחותמים' },
  { id: 'seker-shuk',    label: 'סקר שוק - איך עושים נכון' },
  { id: 'faq',           label: 'שאלות נפוצות' },
];

/* ── Shared prose typography helpers ── */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaotMadrichPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואות - איך בוחרים נכון' },
        ]}
      />

      {/* Ad slot - above article */}
      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ══ ARTICLE ══════════════════════════════════════════════════════ */}
        <article>

          {/* Article header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              הלוואות - איך בוחרים נכון ולא מתחרטים אחר כך
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: 3 בספטמבר 2026</span>
            </div>
          </header>

          {/* ── Intro ── */}
          <p className={p}>
            לפני שלוקחים הלוואה, רוב האנשים שואלים שאלה אחת: &quot;כמה אני יכול
            לקבל?&quot; זו השאלה הלא נכונה.
          </p>
          <p className={p}>
            השאלה הנכונה היא: &quot;כמה אני יכול להחזיר?&quot; ההבדל בין השתיים
            הוא לפעמים כמה שנים של לחץ כלכלי.
          </p>

          {/* ── Section 0: What makes a good loan ── */}
          <h2 id="mah-hofech" className={h2}>אילו הלוואות טובות?</h2>
          <p className={p}>
            הלוואות טובות הן אלה שהריבית האפקטיבית שלהן נמוכה, התנאים בהן קלים,
            ואתה יכול להחזיר אותן ללא לחץ פיננסי. הלוואות רעות הן כל אלה
            בהיפוך - ריבית גבוהה, עמלות נסתרות, וחודשים של מתח. ההבדל בין
            שתי הקטגוריות קובע אם זה כלי חכם או טעות.
          </p>

          {/* ── Section 1 ── */}
          <h2 id="ribbit-eff" className={h2}>
            ריבית נומינלית, ריבית אפקטיבית - למה זה משנה
          </h2>
          <p className={p}>
            כל מלווה בישראל חייב לגלות לך שני מספרים: הריבית הנומינלית והריבית
            האפקטיבית (EFF). בפרסומות תמיד תראה את הנומינלית - היא נמוכה יותר
            ונראית טוב יותר.
          </p>
          <p className={p}>
            הריבית האפקטיבית היא מה שאתה משלם באמת. היא כוללת את כל העמלות, את
            התדירות של ההצמדה, ואת כל מה שנסתר בין השורות. תמיד תבקש את ה-EFF
            לפני שמשווים בין הצעות.
          </p>
          <p className={p}>
            דוגמה: הלוואה של ₪50,000 ב-8% נומינלי יכולה לעלות יותר מהלוואה של
            9% נומינלי אחרת, אם לאחרונה יש עמלות נמוכות יותר ואין הצמדה. המספר
            הגדול על הדף לא תמיד מספר את הסיפור.
          </p>

          {/* ── Section 2 ── */}
          <h2 id="kama-lehahzir" className={h2}>
            כמה אתה יכול להחזיר - חישוב פשוט
          </h2>
          <p className={p}>
            יש כלל אצבע שהבנקים משתמשים בו: לא יותר מ-40% מההכנסה החודשית נטו
            מוקדש לכל ההחזרים ביחד. משכנתא, הלוואות, כרטיסי אשראי בתשלומים -
            הכל נספר.
          </p>
          <p className={p}>
            אם אתה מרוויח ₪12,000 נטו, ה-40% שלך הוא ₪4,800. אם כבר יש לך
            משכנתא של ₪3,500, נשאר לך ₪1,300 להחזרי הלוואה.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לבדוק מה ההחזר החודשי יוצא על הסכום שאתה שוקל?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה שלנו עושה את זה תוך שניות.
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

          {/* ── Section 3 ── */}
          <h2 id="sugei-halvaa" className={h2}>מה ההבדל בין כל סוגי ההלוואות</h2>
          <p className={p}>לא כל הלוואה נוצרה שווה. יש כמה קטגוריות שכדאי להכיר:</p>

          <p className={p}>
            <span className={strong}>הלוואה בנקאית רגילה</span> - הזולה ביותר בדרך
            כלל, אבל גם הכי קשה לקבל. דורשת היסטוריה פיננסית נקייה, הכנסה מוכחת,
            ולפעמים ביטחונות. זמן אישור: שבוע ויותר.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה חוץ בנקאית</span> - מהירה יותר, נגישה
            יותר, ריבית גבוהה יותר. כאל, מקס, ישראכרט - כל אלה. לא נספרת
            באובליגו הבנקאי שלך. מתאימה כשהבנק אמר לא, או כשאתה צריך את הכסף
            מהר.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה מקרן השתלמות או פנסיה</span> - האופציה
            הזולה ביותר שקיימת אם יש לך חיסכון. ריבית פריים מינוס עד אפס ריבית.
            רוב האנשים לא יודעים שיש להם את הזכות הזאת. בדוק עם הגוף המנהל שלך.
          </p>
          <p className={p}>
            <span className={strong}>הלוואה חברתית (P2P)</span> - פלטפורמות כמו
            בלנדר וטריא מחברות בין לווים למלווים פרטיים. לפעמים בתנאים תחרותיים,
            לפעמים לא. שווה לבדוק כחלק מסקר השוק שלך.
          </p>

          {/* ── Section 3b: lender comparison table ── */}
          <h2 id="hashvaah" className={h2}>השוואת מסלולי הלוואה, טבלה מהירה</h2>
          <p className={p}>
            לפני שבוחרים לאן לפנות, כדאי להבין את ההבדלים העיקריים בין המסלולים:
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">מסלול</th>
                  <th className="px-4 py-3 font-semibold text-right">ריבית אפקטיבית</th>
                  <th className="px-4 py-3 font-semibold text-right">קריטריוני כניסה</th>
                  <th className="px-4 py-3 font-semibold text-right">מהירות</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['קרן השתלמות / פנסיה', '0%-5%', 'צבירה קיימת', '3-7 ימים'],
                  ['הלוואה בנקאית', '7%-11%', 'היסטוריה נקייה + הכנסה', '5-10 ימים'],
                  ['בנק דיגיטלי (One Zero)', '7%-10%', 'דירוג אשראי בסיסי', '1-3 ימים'],
                  ['חברת אשראי (כאל, מקס)', '10%-18%', 'נמוכים יחסית', 'יום עסקים'],
                  ['P2P (בלנדר, טריא)', '8%-15%', 'בדיקת אשראי', '2-5 ימים'],
                  ['גמ"ח / עוגן', '0%', 'קריטריונים חברתיים', '1-4 שבועות'],
                ].map(([track, rate, criteria, speed], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}>
                    <td className="px-4 py-3 font-medium text-accent-800 border border-accent-100">{track}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{rate}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{criteria}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 3c: worked example ── */}
          <h2 id="dugma" className={h2}>דוגמה: אותו סכום, שלושה מחירים שונים לגמרי</h2>
          <p className={p}>
            ₪60,000 לשלוש שנים. שלושה אנשים, שלושה מסלולים שונים, כמה משלם כל אחד?
          </p>
          <p className={p}>
            <span className={strong}>רינת מחיפה</span>, יש לה קרן השתלמות עם ₪80,000
            צבירה. לקחה הלוואה כנגד הקרן ב-4.5% (פריים מינוס 1%). החזר חודשי: ₪1,787.
            סך ריבית לאורך 3 שנים: ₪4,332.
          </p>
          <p className={p}>
            <span className={strong}>מוטי מנתניה</span>, אין לו קרן, דירוג BDI 650.
            פנה לבנק הפועלים וקיבל 9.5% ל-3 שנים. החזר חודשי: ₪1,923. סך ריבית: ₪9,228.
          </p>
          <p className={p}>
            <span className={strong}>שרה מאשדוד</span>, BDI 530, אין קרן השתלמות.
            הבנק סרב. לקחה מכאל ב-16%. החזר חודשי: ₪2,109. סך ריבית: ₪15,924.
          </p>
          <p className={p}>
            אותם ₪60,000. הפרש בריבית בין רינת לשרה: ₪11,592. לכן כדאי לבדוק תחילה
            אם יש קרן השתלמות, ולפנות לבנק לפני שפונים לחברת אשראי.
          </p>

          {/* ── Section 4 ── */}
          <h2 id="lifnei-hatima" className={h2}>מה חייבים לבדוק לפני שחותמים</h2>
          <p className={p}>ארבעה דברים שאי אפשר לדלג עליהם:</p>

          <p className={p}>
            <span className={strong}>גרייס - הוא לא חינם.</span>{' '}
            חברות רבות מציעות &quot;דחיית תשלום ראשון עד 6 חודשים.&quot; נשמע
            נהדר. אבל הריבית ממשיכה לרוץ על כל הסכום בתקופה הזאת. על הלוואה של
            ₪100,000 ב-10% ריבית, 6 חודשי גרייס אומרים ₪5,000 נוספים לפני
            שהתחלת לשלם.
          </p>
          <p className={p}>
            <span className={strong}>פירעון מוקדם - כמה זה עולה?</span>{' '}
            אם אתה עשוי לסגור את ההלוואה לפני הזמן, בדוק את עמלת הפירעון המוקדם.
            רוב החברות גובות 1% עד 3% מהיתרה. זה כסף שצריך לחשב.
          </p>
          <p className={p}>
            <span className={strong}>ריבית הפיגורים - מה קורה אם תפגר?</span>{' '}
            הריבית הזאת יכולה להיות גבוהה משמעותית מריבית ההלוואה הרגילה. קרא
            את הסעיף הזה בחוזה לפני הכל.
          </p>
          <p className={p}>
            <span className={strong}>הגבול החוקי לריבית.</span>{' '}
            בישראל קיים חוק אשראי הוגן. הריבית המקסימלית המותרת היא 15% בתוספת
            ריבית בנק ישראל (3.25% נכון לספטמבר 2026, אחרי הורדת הריבית מ-1.9.2026).
            כרגע זה כ-18.25%. אם מישהו מציע לך יותר - הוא עובר על החוק.
          </p>

          {/* ── Section 5 ── */}
          <h2 id="seker-shuk" className={h2}>סקר שוק: איך עושים אותו נכון</h2>
          <p className={p}>אל תיקח את ההצעה הראשונה. אף פעם.</p>
          <p className={p}>
            פנה לפחות לשניים-שלושה גופים. קבל הצעה כתובה עם ה-EFF מכל אחד
            מהם. ואז חזור לאחד מהם ואמור שיש לך הצעה טובה יותר. לרוב הם ישפרו.
          </p>
          <p className={p}>
            זה עובד כי הם יודעים שאתה משווה. המשא ומתן הוא חלק לגיטימי מהתהליך.
          </p>
          <p className={p}>
            מה מתמקחים עליו: הריבית עצמה, עמלת פתיחת התיק, וריבית הפיגורים אם תאחר. אל
            תבקש &quot;הנחה&quot;, תבקש מספר. &quot;תוריד לי חצי אחוז ואני סוגר
            היום&quot;. ככל שאתה יותר ספציפי, יותר קשה לבנקאי להגיד לא. זו לא חוצפה, זו
            הדרך החכמה לנהל את הכסף שלך.
          </p>

          {/* ── Calculator CTA ── */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="חשב את ההחזר החודשי לפי הסכום, הריבית והתקופה שמתאימים לך."
          />

          {/* ── Section 6: FAQ ── */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה זה BDI ואיך הוא משפיע עליי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                BDI הוא דירוג האשראי האישי שלך, בטווח 300 עד 850. ציון מתחת
                ל-600 נחשב שלילי. הבנקים וחברות המימון בודקים אותו כחלק מהבקשה.
                ציון נמוך לא אומר שלא תקבל הלוואה, אבל כנראה תשלם עליה ריבית
                גבוהה יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                כמה זמן הבקשה לוקחת?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי איפה. בנק דיגיטלי: 3 עד 7 ימי עסקים. חברת אשראי: 1 עד 3
                ימים. פלטפורמת P2P: לפעמים למחרת. הלוואה עם בטוחה כמו נכס: 2
                עד 4 שבועות.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                אם הבנק סרב לי, מה זה אומר?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                זה אומר שהאלגוריתם של הבנק לא אהב את הפרופיל שלך ברגע זה. לא
                בהכרח שאין לך פתרון. חברות חוץ בנקאיות עובדות עם קריטריונים
                שונים. אם גם הן סירבו לך - כנראה יש בעיה שצריך לטפל בה לפני
                שלוקחים הלוואה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם לקיחת הלוואה פוגעת בדירוג האשראי שלי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                עצם לקיחת ההלוואה לא פוגעת. אם אתה עומד בתשלומים, זה אפילו
                יכול לשפר את הדירוג. הבעיה מתחילה כשמפגרים בתשלומים.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/guides/halvaah-hutz-bankait" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה חוץ בנקאית: המדריך המלא
              </a>
              <a href="/guides/בקשה-להלוואה" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                איך מגישים בקשה להלוואה
              </a>
              <a href="/guides/halvaah-lerechev" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה לרכב: בנק, יבואן, או ליסינג
              </a>
              <a href="/guides/halvaah-miyedit" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה מיידית: כמה זמן זה באמת לוקח
              </a>
            </div>
          </div>

          {/* ── Disclaimer ── */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.boi.org.il/financial-markets/credit-data/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">מאגר נתוני אשראי, בנק ישראל</a>{' '}·{' '}
            <a href="https://www.gov.il/he/departments/capital_market_insurance_and_savings_authority" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">רשות שוק ההון, נותני אשראי</a>
          </div>

          <RelatedGuides currentHref="/guides/halvaot-madrich" />

          <div className="border-t border-accent-100 pt-6">
            <p className="text-xs text-accent-400 leading-relaxed">
              <span className="font-semibold">אין באמור ייעוץ פיננסי.</span>{' '}
              המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ
              עם בעל רישיון.
            </p>
          </div>

        </article>

        {/* ══ SIDEBAR ══════════════════════════════════════════════════════ */}
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
