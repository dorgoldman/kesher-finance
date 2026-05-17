import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* ── Canonical domain for this article ── */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaah-hutz-bankait`;

export const metadata: Metadata = {
  title: 'הלוואה חוץ בנקאית - המדריך המלא לשנת 2026 | Maxit.מקסיט',
  description:
    'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא. מדריך ישיר בלי שטויות.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'הלוואה חוץ בנקאית - המדריך המלא לשנת 2026',
    description:
      'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא. מדריך ישיר בלי שטויות.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואה חוץ בנקאית - המדריך המלא לשנת 2026',
    description:
      'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא.',
  },
};

/* ── JSON-LD ── */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה חוץ בנקאית - המדריך המלא לשנת 2026',
    description:
      'כל מה שצריך לדעת על הלוואה חוץ בנקאית: מי נותן, כמה עולה, מתי כדאי ומתי לא.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-01-01',
    dateModified: '2026-05-16',
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',              item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',           item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואה חוץ בנקאית', item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה ההבדל בין הלוואה בנקאית לחוץ בנקאית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הבנק גובה בדרך כלל ריבית נמוכה יותר אבל התהליך ארוך יותר ודרישות הסף גבוהות יותר. הלוואה חוץ בנקאית מהירה יותר ונגישה יותר, אבל תשלם על הגמישות הזאת בריבית.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם הלוואה חוץ בנקאית פוגעת בדירוג האשראי שלי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן, אם לא תשלם. כל ברירת מחדל, בנקאית או חוץ בנקאית, מדווחת ללשכת האשראי. אבל עצם לקיחת ההלוואה לא פוגעת בדירוג.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה אפשר לקחת בהלוואה חוץ בנקאית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'חברות האשראי הגדולות מציעות עד ₪150,000 עד ₪200,000. גופי מימון פרטיים מסוימים מגיעים עד ₪500,000, לפעמים יותר, בכפוף לבדיקת זכאות.',
        },
      },
      {
        '@type': 'Question',
        name: 'איך יודעים שהחברה החוץ בנקאית אמינה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שלושה דברים: רישיון ממשרד האוצר, נוכחות ותיקה ברשת עם ביקורות אמיתיות, ושקיפות מלאה בתנאים לפני חתימה. אם הם לוחצים עליך לחתום מהר, זה סימן רע.',
        },
      },
    ],
  },
];

/* ── Table of contents entries ── */
const TOC = [
  { id: 'ma-ze',       label: 'מה זה "חוץ בנקאי"' },
  { id: 'matai',       label: 'מתי הגיוני לשקול' },
  { id: 'kama-oleh',   label: 'כמה זה באמת עולה' },
  { id: 'ma-livdok',   label: 'מה לבדוק לפני שחותמים' },
  { id: 'kaal-max',    label: 'כאל, מקס, ישראכרט' },
  { id: 'gmachim',     label: 'גמ"חים ועמותות' },
  { id: 'faq',         label: 'שאלות נפוצות' },
];

/* ── Shared prose typography helpers ── */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaahHutzBankaitPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואה חוץ בנקאית' },
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
              הלוואה חוץ בנקאית: המדריך המלא
            </h1>
            <p className="text-accent-400 text-sm">
              עודכן לאחרונה: מאי 2026 · קריאה: כ-5 דקות
            </p>
          </header>

          {/* ── Intro ── */}
          <p className={p}>
            קיבלת "לא" מהבנק. או שקיבלת "כן" אבל הריבית הייתה גבוהה ממה שציפית.
            בכל מקרה, עכשיו אתה מחפש אפשרויות.
          </p>
          <p className={p}>
            הלוואה חוץ בנקאית היא המקום שרוב האנשים מגיעים אליו בשלב הזה.
            היא לא פתרון קסם. אבל היא גם לא הסיכון שאנשים חושבים שהיא.
          </p>

          {/* ── Section 1 ── */}
          <h2 id="ma-ze" className={h2}>מה זה אומר &quot;חוץ בנקאי&quot;</h2>
          <p className={p}>
            הלוואה חוץ בנקאית פשוט אומרת שהמלווה שלך אינו בנק. זה יכול להיות
            כאל, מקס, ישראכרט, חברת ביטוח, קרן פנסיה, או גוף מימון פרטי עם
            רישיון ממשרד האוצר.
          </p>
          <p className={p}>
            ההבדל המשמעותי מול הבנק: ההלוואה לא נספרת באובליגו הבנקאי שלך.
            כלומר, היא לא פוגעת במסגרת האשראי בבנק הפועלים או בלאומי שיש לך.
            זה יתרון אמיתי למי שצריך גמישות פיננסית בשני המקומות בו-זמנית.
          </p>

          {/* ── Section 2 ── */}
          <h2 id="matai" className={h2}>מתי הגיוני לשקול הלוואה חוץ בנקאית</h2>
          <p className={p}>לא כל מצב מתאים לזה. אבל יש כמה מקרים שבהם זה הגיוני לגמרי:</p>

          <p className={p}>
            <span className={strong}>סרבו לך בבנק.</span>{' '}
            זה קורה. BDI שלילי, תקופה זמנית בלי הכנסה יציבה, עבר פיננסי שאינו
            מושלם. גופים חוץ בנקאיים בודקים קריטריונים שונים ולפעמים גמישים יותר.
          </p>
          <p className={p}>
            <span className={strong}>אתה צריך את הכסף מהר.</span>{' '}
            הלוואה בנקאית יכולה לקחת שבוע ויותר. חוץ בנקאי, לפעמים יום עסקים.
            לפני חתונה, לפני עסקת נדל&quot;ן, לסגירת חוב דחוף, הזמן חשוב.
          </p>
          <p className={p}>
            <span className={strong}>אתה לא רוצה לגעת במסגרת הבנקאית שלך.</span>{' '}
            מי שמנהל עסק ומחזיק מסגרת אשראי עסקית בבנק לא רוצה שהלוואה פרטית
            תיפגע בה. חוץ בנקאי מאפשר להפריד.
          </p>

          {/* ── Section 3 ── */}
          <h2 id="kama-oleh" className={h2}>כמה זה באמת עולה</h2>
          <p className={p}>כאן צריך להיות ישרים.</p>
          <p className={p}>
            ריבית על הלוואה חוץ בנקאית היא כמעט תמיד גבוהה יותר מבנקאית. הטווח
            הנפוץ בשוק הישראלי כיום הוא בין 7% ל-18% ריבית שנתית, תלוי בגוף
            המלווה, בסכום, ובפרופיל שלך. בנקים לרוב יציעו פריים פלוס 1.5% עד 4%,
            כלומר כרגע בסביבות 7.5% עד 10%.
          </p>
          <p className={p}>
            זה אומר שאם הצעת הבנק היא 8% ואתה מוצא גוף חוץ בנקאי שנותן 9.5%,
            ההפרש לא דרמטי. אבל אם ההצעה החוץ בנקאית היא 16%, זה כבר סיפור אחר
            לגמרי.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות כמה החזר חודשי יוצא בריביות שונות?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה שלנו מחשב את זה בשניות.
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

          {/* ── Section 4 ── */}
          <h2 id="ma-livdok" className={h2}>מה לבדוק לפני שחותמים</h2>
          <p className={p}>ארבעה דברים שחייבים לבדוק לפני שסוגרים הלוואה חוץ בנקאית:</p>

          <p className={p}>
            <span className={strong}>רישיון ממשרד האוצר.</span>{' '}
            כל גוף מימון לגיטימי חייב להיות מורשה. בדוק ברשימה הרשמית באתר רשות
            שוק ההון לפני שאתה מדבר עם מישהו.
          </p>
          <p className={p}>
            <span className={strong}>ריבית EFF, לא נומינלית.</span>{' '}
            תמיד תשאל על הריבית האפקטיבית השנתית. לא הנומינלית. לא &quot;X%
            לחודש&quot;. הריבית האפקטיבית מספרת לך מה אתה משלם באמת.
          </p>
          <p className={p}>
            <span className={strong}>עמלת פירעון מוקדם.</span>{' '}
            רוב החברות גובות 1% עד 3% אם תרצה לסגור מוקדם. אם אתה לוקח הלוואה
            קצרת טווח וצפוי לסגור אותה מוקדם, זה מחיר שצריך לחשב מראש.
          </p>
          <p className={p}>
            <span className={strong}>מה קורה אם תפגר.</span>{' '}
            ריבית הפיגורים יכולה להיות גבוהה משמעותית. קרא את הסעיף הזה בחוזה.
            לא תגיד שלא אמרנו.
          </p>

          {/* ── Section 5 ── */}
          <h2 id="kaal-max" className={h2}>כאל, מקס, ישראכרט: מה ההבדל בפועל</h2>
          <p className={p}>שלושת ענקיות האשראי הן הנפוצות ביותר בשוק החוץ בנקאי בישראל.</p>
          <p className={p}>
            כאל ומקס מציעות הלוואות ללקוחות כל הבנקים, לא רק ללקוחות הכרטיס
            שלהן. ישראכרט דורשת כרטיס ישראכרט פעיל. הריביות דומות בין השלוש,
            אם כי פעמים רבות כל חברה נותנת הנחה אם אתה כבר לקוח שלה.
          </p>
          <p className={p}>
            כלל אצבע: קבל הצעות משתיים לפחות, ואז תנהל משא ומתן. החברות יודעות
            שאתה משווה, ופעמים רבות ישפרו את ההצעה.
          </p>

          {/* ── Section 6 ── */}
          <h2 id="gmachim" className={h2}>אפשרות שרוב האנשים לא מכירים: גמ&quot;חים ועמותות</h2>
          <p className={p}>
            יש עולם שלם מחוץ לבנקים ומחוץ לחברות האשראי. בישראל רשומים קרוב
            ל-2,000 ארגוני גמ&quot;ח הלוואות, רובם קהילתיים, שנותנים הלוואות ללא
            ריבית בסכומים של ₪5,000 עד ₪40,000. זה לא מיועד לכולם, אבל אם אתה
            עומד בקריטריונים, אין מוצר זול יותר בשוק.
          </p>
          <p className={p}>
            עוגן היא הארגון הגדול בתחום, פעילה כ-35 שנה, ומעניקה הלוואות ללא
            ריבית למשקי בית. הלוואות עד ₪60,000 ליחידים ומשפחות, עם מסלולים
            מיוחדים לסטודנטים, למשרתי מילואים שנפגעו כלכלית, ולמי שנמצא
            בהוצאה לפועל. SparkIL היא פלטפורמת P2P ללא כוונת רווח שהוקמה על
            ידי הסוכנות היהודית ועוגן, ומאפשרת לקבל הלוואות זעירות ללא ריבית
            ליזמים בפריפריה.
          </p>
          <p className={p}>
            זה לא פתרון מהיר. תהליך האישור ארוך יותר, הסכומים מוגבלים, ויש
            קריטריונים ברורים. אבל אם יש לך זמן ואתה עומד בתנאים, זה המסלול
            הזול ביותר שקיים.
          </p>
          <p className="text-accent-400 text-sm leading-relaxed mb-5 italic">
            המדריך המלא לגמ&quot;חים, עוגן, ו-P2P בישראל יגיע בקרוב.
          </p>

          {/* ── Calculator CTA ── */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="הכנס את הריבית שקיבלת ותראה בדיוק כמה יוצא בסוף."
          />

          {/* ── Section 7: FAQ ── */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה ההבדל בין הלוואה בנקאית לחוץ בנקאית?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הבנק גובה בדרך כלל ריבית נמוכה יותר אבל התהליך ארוך יותר ודרישות
                הסף גבוהות יותר. הלוואה חוץ בנקאית מהירה יותר ונגישה יותר, אבל
                תשלם על הגמישות הזאת בריבית.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם הלוואה חוץ בנקאית פוגעת בדירוג האשראי שלי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן, אם לא תשלם. כל ברירת מחדל, בנקאית או חוץ בנקאית, מדווחת
                ללשכת האשראי. אבל עצם לקיחת ההלוואה לא פוגעת בדירוג.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה אפשר לקחת?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                חברות האשראי הגדולות מציעות עד ₪150,000 עד ₪200,000. גופי מימון
                פרטיים מסוימים מגיעים עד ₪500,000, לפעמים יותר, בכפוף לבדיקת
                זכאות.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                איך יודעים שהחברה אמינה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                שלושה דברים: רישיון ממשרד האוצר, נוכחות ותיקה ברשת עם ביקורות
                אמיתיות, ושקיפות מלאה בתנאים לפני חתימה. אם הם לוחצים עליך
                לחתום מהר, זה סימן רע.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/gmachim-p2p" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                גמ&quot;חים, עוגן, ו-P2P: הלוואה ללא ריבית בישראל
              </Link>
              <Link href="/guides/ריבית-אפקטיבית" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ריבית אפקטיבית: המספר שהבנק מעדיף שלא תסתכל עליו
              </Link>
            </div>
          </div>

          {/* ── Disclaimer ── */}
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
