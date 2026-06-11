import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaah-miyedit`;

export const metadata: Metadata = {
  title: 'הלוואה מיידית',
  description:
    'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'הלוואה מיידית - מה באמת קורה מרגע הבקשה עד קבלת הכסף',
    description:
      'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואה מיידית - מה באמת קורה מרגע הבקשה עד קבלת הכסף',
    description:
      'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה מיידית: כמה זמן זה באמת לוקח ומה צריך להכין',
    description:
      'כמה זמן לוקחת הלוואה מיידית באמת? מה צריך להכין, מה יכול לעצור את האישור, ואיפה כדאי לפנות ב-2026.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-01-01',
    dateModified: '2026-05-16',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',           item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',        item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואה מיידית',  item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'האם אפשר לקבל הלוואה מיידית עם חוב קיים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי בסכום החוב הקיים ובגוף שפונים אליו. אם יחס ההחזר שלך (כל ההחזרים מול ההכנסה) עדיין מתחת ל-40%, סביר שתאושר. אם עברת את הסף - קשה יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן מרגע האישור עד שהכסף בחשבון?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'חברות אשראי: יום עסקים אחד. בנקים דיגיטליים: 2 עד 3 ימים. הבנק שלך: לפעמים ביום האישור, לפעמים יותר. P2P: יום עד שלושה ימים.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם הגשת בקשה פוגעת בדירוג האשראי שלי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'חלק מהגופים מבצעים בדיקת BDI שנרשמת. מספר בדיקות בפרק זמן קצר יכולות להשפיע מעט על הדירוג. עדיף להחליט על הגוף לפני שמגישים, ולא להגיש לחמישה גופים במקביל.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם ניתן לפרוע הלוואה מיידית לפני הזמן?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן, אצל רוב הגופים. רוב חברות האשראי גובות עמלת פירעון מוקדם של 1% עד 3%, יש כאלה שגובות סכום קבוע נמוך. בדוק לפני שחותם.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'step-1',       label: 'שלב 1: הגשת הבקשה' },
  { id: 'step-2',       label: 'שלב 2: האישור' },
  { id: 'hashvaah',     label: 'מהירות מול מחיר' },
  { id: 'ikuvim',       label: 'מה יכול לעכב את האישור' },
  { id: 'miyedi-lo-zol',label: '"מיידי" לא תמיד אומר זול' },
  { id: 'dugma',        label: 'כמה עולה הזמן שחסכת?' },
  { id: 'lehachin',     label: 'מה להכין לפני שמגישים' },
  { id: 'faq',          label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaahMiyeditPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואה מיידית' },
        ]}
      />

      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ══ ARTICLE ══════════════════════════════════════════════════════ */}
        <article>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              הלוואה מיידית: כמה זמן זה באמת לוקח ומה צריך להכין
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <Link href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</Link></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: מאי 2026</span>
            </div>
          </header>

          {/* ── Intro ── */}
          <p className={p}>
            כולם מבטיחים &quot;אישור תוך דקות&quot; ו&quot;כסף עד מחר&quot;.
            לפעמים זה נכון. לפעמים זה שיווק.
          </p>
          <p className={p}>
            האמת היא שהלוואה מיידית היא מושג יחסי. תלוי איפה מגישים, מה המצב
            הפיננסי שלך, ומה קורה אחרי שלחצת &quot;שלח&quot;. המדריך הזה מסביר
            מה באמת קורה.
          </p>

          {/* ── Section 1 ── */}
          <h2 id="step-1" className={h2}>שלב 1: הגשת הבקשה - כמה זמן?</h2>
          <p className={p}>
            הגשת בקשה אונליין לוקחת 5 עד 15 דקות. זה החלק המהיר. מה שמאט
            אנשים הוא איתור המסמכים.
          </p>
          <p className={p}>
            מה שתצטרך ברוב המקרים: תעודת זהות, תלוש משכורת אחרון (לפעמים
            שניים-שלושה), תדפיס חשבון בנק ל-3 חודשים אחרונים. גוף שדורש יותר
            מזה מוסיף זמן - גוף שדורש פחות כנראה בודק פחות, מה שלפעמים
            משמעותו ריבית גבוהה יותר.
          </p>

          {/* ── Section 2 ── */}
          <h2 id="step-2" className={h2}>שלב 2: האישור - כמה זמן באמת?</h2>
          <p className={p}>כאן נפרדות הדרכים בין הגופים השונים:</p>

          <p className={p}>
            <span className={strong}>חברות אשראי (כאל, מקס, ישראכרט)</span> -
            אישור עקרוני תוך דקות לרוב הלקוחות. הכסף מועבר תוך יום עסקים אחד
            מרגע החתימה הסופית. זה המסלול המהיר ביותר שקיים.
          </p>
          <p className={p}>
            <span className={strong}>בנקים דיגיטליים</span> - אישור תוך כמה שעות
            עד יום עסקים. הכסף מגיע תוך 2 עד 3 ימי עסקים. מהיר יותר מהבנק שלך,
            איטי יותר מחברת אשראי.
          </p>
          <p className={p}>
            <span className={strong}>הבנק שלך</span> - בין יום לשבוע, תלוי
            בהיסטוריה שלך איתם ובסכום. אם אתה לקוח ותיק עם היסטוריה נקייה,
            לפעמים זה יום עסקים אחד. אם לא, יותר.
          </p>
          <p className={p}>
            <span className={strong}>P2P (בלנדר, טריא)</span> - בין יום לשלושה
            ימים בממוצע. תלוי כמה מהר מלווים מממנים את ההלוואה שלך.
          </p>

          {/* ── Section 2b: speed vs cost table ── */}
          <h2 id="hashvaah" className={h2}>מהירות מול מחיר: ההשוואה הפרקטית</h2>
          <p className={p}>
            ככל שהכסף מגיע מהר יותר, הריבית גבוהה יותר. זה לא מקרה, זו מדיניות.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">גוף מלווה</th>
                  <th className="px-4 py-2 text-right font-semibold">זמן עד כסף</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית שנתית טיפוסית</th>
                  <th className="px-4 py-2 text-right font-semibold">הערה</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['כאל / מקס / ישראכרט', 'יום עסקים', '10%–15%', 'הכי מהיר'],
                  ['בנק דיגיטלי', '1–3 ימים', '7%–11%', 'מהיר, תחרותי'],
                  ['הבנק שלך', '1–7 ימים', '7%–10%', 'תלוי היסטוריה'],
                  ['P2P (טריא)', '1–3 ימים', '4%–17.5%', 'תלוי פרופיל אשראי'],
                  ['עוגן / גמ"ח', '2–4 שבועות', '0%', 'הזול ביותר, אם מגיע'],
                ].map(([lender, time, rate, note], i) => (
                  <tr key={lender} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{lender}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-700">{time}</td>
                    <td className="border border-accent-100 px-4 py-2 text-primary-700">{rate}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 3 ── */}
          <h2 id="ikuvim" className={h2}>מה יכול לעצור או לעכב את האישור</h2>
          <p className={p}>
            רוב העיכובים לא קורים בגלל שהגוף איטי. הם קורים בגלל אחד מהדברים
            האלה:
          </p>

          <p className={p}>
            <span className={strong}>מסמך חסר.</span>{' '}
            תלוש ישן מדי, תדפיס בנק חלקי, תעודת זהות לא ברורה בסריקה. תכין
            את הכל לפני שמגישים.
          </p>
          <p className={p}>
            <span className={strong}>חוסר התאמה בין ההכנסה לסכום המבוקש.</span>{' '}
            אם ביקשת ₪100,000 אבל ההכנסה שלך ₪8,000 נטו, הגוף יחזיר שאלות.
            תחשוב על יחס ההחזר לפני שמגישים.
          </p>
          <p className={p}>
            <span className={strong}>בעיה ב-BDI.</span>{' '}
            דירוג אשראי נמוך לא תמיד חוסם הלוואה, אבל הוא עשוי להוביל לשאלות
            נוספות, לאישור חלקי, או להצעה בריבית גבוהה יותר.
          </p>
          <p className={p}>
            <span className={strong}>צ&apos;קים חוזרים בשנתיים האחרונות.</span>{' '}
            זה מקשה משמעותית, בעיקר בבנקים. חברות חוץ בנקאיות מגמישות יותר,
            אבל גם הן בודקות.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לבדוק כמה ייצא החזר חודשי לפני שמגישים?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה עוזר לך להגיע עם סכום הגיוני.
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
          <h2 id="miyedi-lo-zol" className={h2}>&quot;מיידי&quot; לא תמיד אומר זול</h2>
          <p className={p}>זה הדבר שהכי חשוב להבין.</p>
          <p className={p}>
            מהירות עולה כסף. חברת אשראי שנותנת כסף תוך יום עסקים גובה ריבית
            גבוהה יותר מבנק שלוקח שבוע. זה לא בהכרח רע - אם אתה צריך את הכסף
            עכשיו, אתה משלם על המהירות, ולפעמים זה שווה.
          </p>
          <p className={p}>
            הבעיה מתחילה כשאנשים לוקחים הלוואה מיידית מתוך נוחות, לא מתוך
            צורך. אם אפשר לחכות יומיים-שלושה ולקבל ריבית של 8% במקום 13%,
            ההפרש על ₪50,000 לאורך 5 שנים הוא אלפי שקלים.
          </p>

          {/* ── Section 4b: cost of speed ── */}
          <h2 id="dugma" className={h2}>כמה עולה הזמן שחסכת?</h2>
          <p className={p}>
            הלוואה של ₪50,000 ל-3 שנים. ניקח שני תרחישים: חברת אשראי (מהירה) מול הבנק שלך (איטי יותר).
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">חברת אשראי, 13% ריבית:</span>{' '}
            החזר חודשי ₪1,686. סך ריבית לאורך 3 שנים: כ-₪10,696.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הבנק שלך, 8% ריבית:</span>{' '}
            החזר חודשי ₪1,567. סך ריבית: כ-₪6,412.
          </p>
          <p className={p}>
            ההפרש: כ-₪4,284 על אותה הלוואה. חיכית 5 ימים נוספים, חסכת ₪4,284. לפעמים
            שווה. לפעמים צריך את הכסף עכשיו ואין ברירה. חשוב לדעת מה ההחלטה עולה.
          </p>

          {/* ── Section 5 ── */}
          <h2 id="lehachin" className={h2}>מה להכין לפני שמגישים</h2>
          <p className={p}>רשימה קצרה שחוסכת עיכובים:</p>

          <ul className="mb-6 space-y-2 text-accent-600 leading-relaxed">
            {[
              'תעודת זהות ברורה (קדימה ואחורה)',
              'תלושי משכורת מ-3 החודשים האחרונים',
              'תדפיס חשבון בנק מ-3 חודשים אחרונים',
              'אישור משכורת ממעסיק אם נדרש',
              'לעצמאיים: אישור רואה חשבון או שומת מס אחרונה',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <p className={p}>
            גופים שונים דורשים מסמכים שונים. עדיף להכין את הכל מראש ולהגיש
            בשלמות, כי מסמך חסר יכול לדחות את האישור ביום שלם.
          </p>

          {/* ── Calculator CTA ── */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="בדוק כמה יהיה ההחזר החודשי לפני שמגישים, כדי לבקש סכום ריאלי."
          />

          {/* ── Section 6: FAQ ── */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם אפשר לקבל הלוואה מיידית עם חוב קיים?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי בסכום החוב הקיים ובגוף שפונים אליו. אם יחס ההחזר שלך (כל
                ההחזרים מול ההכנסה) עדיין מתחת ל-40%, סביר שתאושר. אם עברת את
                הסף - קשה יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                כמה זמן מרגע האישור עד שהכסף בחשבון?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                חברות אשראי: יום עסקים אחד. בנקים דיגיטליים: 2 עד 3 ימים.
                הבנק שלך: לפעמים ביום האישור, לפעמים יותר. P2P: יום עד שלושה ימים.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם הגשת בקשה פוגעת בדירוג האשראי שלי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                חלק מהגופים מבצעים בדיקת BDI שנרשמת. מספר בדיקות בפרק זמן קצר
                יכולות להשפיע מעט על הדירוג. עדיף להחליט על הגוף לפני שמגישים,
                ולא להגיש לחמישה גופים במקביל.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם ניתן לפרוע הלוואה מיידית לפני הזמן?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן, אצל רוב הגופים. רוב חברות האשראי גובות עמלת פירעון מוקדם
                של 1% עד 3%, יש כאלה שגובות סכום קבוע נמוך. בדוק לפני שחותם.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="mb-8 p-4 bg-accent-50 border border-accent-200 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-4 h-4 text-accent-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span className="text-xs font-semibold text-accent-500 uppercase tracking-wide">קראו גם</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Link
                href="/guides/halvaah-hutz-bankait"
                className="text-sm font-semibold text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                הלוואה חוץ בנקאית - המדריך המלא
              </Link>
              <span className="hidden sm:inline text-accent-300">|</span>
              <Link
                href="/guides/halvaot-madrich"
                className="text-sm font-semibold text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                הלוואות - איך בוחרים נכון
              </Link>
            </div>
          </div>

          {/* ── Disclaimer ── */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.boi.org.il/financial-markets/credit-data/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">מאגר נתוני אשראי, בנק ישראל</a>{' '}·{' '}
            <a href="https://www.gov.il/he/departments/capital_market_insurance_and_savings_authority" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">רשות שוק ההון, נותני אשראי</a>
          </div>

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

            <AdSlot variant="sidebar" />

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

            <div className="card bg-primary-50/60 border-primary-100">
              <p className="text-sm font-semibold text-accent-800 mb-2">מחשבון הלוואה</p>
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

      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
