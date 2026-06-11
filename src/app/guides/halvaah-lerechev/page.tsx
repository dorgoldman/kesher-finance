import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* -- Canonical domain for this article -- */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/halvaah-lerechev`;

export const metadata: Metadata = {
  title: 'הלוואה לרכב: בנק, יבואן, ליסינג',
  description:
    'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים על אותו רכב.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'הלוואה לרכב: בנק, יבואן, או ליסינג? המדריך ב-2026',
    description:
      'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים על אותו רכב.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'הלוואה לרכב: בנק, יבואן, או ליסינג? המדריך ב-2026',
    description:
      'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים.',
  },
};

/* -- JSON-LD -- */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה לרכב: בנק, יבואן, או ליסינג? המדריך ב-2026',
    description:
      'לפני שחותמים על מימון הרכב, קראו את זה. ההבדל בין בנק ליבואן יכול לעלות לכם אלפי שקלים על אותו רכב.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-16',
    dateModified: '2026-05-16',
    author: { '@type': 'Organization', name: SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',          item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',       item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'הלוואה לרכב',   item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'הלוואה או ליסינג: מה עדיף?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי בצרכים. ליסינג תפעולי מתאים למי שאוהב להחליף רכב כל 2 עד 3 שנים ורוצה חבילה שכוללת ביטוח וטיפולים. הלוואה עדיפה אם רוצים להיות הבעלים ולהחזיק את הרכב לטווח ארוך. לטווח ארוך, הלוואה בדרך כלל זולה יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה הון עצמי צריך לרכישת רכב?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בדרך כלל 10% עד 20% ממחיר הרכב. יש גופים שמממנים 100%, אבל זה מייקר את ההלוואה ומעלה את ריבית הסיכון.',
        },
      },
      {
        '@type': 'Question',
        name: 'אפשר למכור רכב שיש עליו הלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן, אבל צריך לסגור את ההלוואה תחילה. בפועל, רוב המוכרים משתמשים בכסף מהמכירה לסגירת ההלוואה ומשלמים את ההפרש אם יש.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ריבית סבירה להלוואת רכב ב-2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לרכב חדש, 5% עד 8% היא טווח סביר. מתחת ל-5%, בדוק מה מסתתר בתנאים. מעל 10%, חפש אלטרנטיבה.',
        },
      },
    ],
  },
];

/* -- Table of contents entries -- */
const TOC = [
  { id: 'shalosh-options',  label: 'שלוש האפשרויות' },
  { id: 'hashvaah',         label: 'השוואת עלויות' },
  { id: 'balon',            label: 'הבלון: המלכודת הנפוצה' },
  { id: 'chashmal',         label: 'רכב חשמלי: מימון שונה?' },
  { id: 'yad-shniya',       label: 'הלוואה לרכב יד שנייה' },
  { id: 'shabad',           label: 'שעבוד רכב' },
  { id: 'taut',             label: 'טעויות נפוצות' },
  { id: 'faq',              label: 'שאלות נפוצות' },
];

/* -- Shared prose typography helpers -- */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function HalvaahLerechevPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'הלוואה לרכב' },
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
              הלוואה לרכב: בנק, יבואן, או ליסינג
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב על ידי צוות מקסיט</span>
              <span aria-hidden="true">·</span>
              <span>עודכן: מאי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            רכב ממוצע בישראל עולה היום בין ₪170,000 ל-₪200,000. לרוב האנשים זה אומר מימון.
            השאלה היא מאיפה.
          </p>
          <p className={p}>
            רוב הישראלים שקונים רכב חותמים על מימון של הסוכנות בלי לבדוק אלטרנטיבות.
            זו לעיתים קרובות הטעות היקרה ביותר בכל העסקה.
          </p>

          {/* Section 1 */}
          <h2 id="shalosh-options" className={h2}>שלוש האפשרויות: מה ההבדל בריבית</h2>
          <p className={p}>
            <span className={strong}>מימון יבואן וסוכנות</span> נראה על הנייר 4% עד 6% ריבית.
            אבל הריבית הנמוכה מגיעה לרוב עם מחיר רכב גבוה יותר, בלון גדול בסוף, או הגבלות
            על משא ומתן. כשחותמים על מימון בסוכנות, הסוכנות מרוויחה גם על הרכב וגם על המימון.
          </p>
          <p className={p}>
            <span className={strong}>בנק</span> נותן ריבית של 5% עד 9%, אבל שקופה יותר.
            הרכב לא בהכרח משועבד, ויש יותר גמישות במשא ומתן עם הסוכנות כשמגיעים עם כסף מוכן.
          </p>
          <p className={p}>
            <span className={strong}>חברות חוץ בנקאיות</span> עובדות עם ריבית של 8% עד 12%.
            פחות תחרותי לרכב, אבל רלוונטי למי שהבנק סרב לו.
          </p>
          <p className={p}>
            הכלל החשוב ביותר: קבל אישור עקרוני מהבנק לפני שנכנסים לסוכנות. ברגע שיש לך הצעה
            ביד, הסוכנות תתחרה עליך.
          </p>

          {/* Section 1b: comparison table */}
          <h2 id="hashvaah" className={h2}>השוואת עלויות: אותו רכב, שלושה מסלולי מימון</h2>
          <p className={p}>
            רכב חדש במחיר ₪180,000. הון עצמי ₪30,000. מימון ₪150,000 ל-5 שנים.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">מסלול מימון</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית שנתית</th>
                  <th className="px-4 py-2 text-right font-semibold">החזר חודשי</th>
                  <th className="px-4 py-2 text-right font-semibold">סך ריבית</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['מימון יבואן (עם בלון 25%)', '4.5%', '₪1,900', 'כ-₪14,000 + בלון ₪45,000'],
                  ['הלוואת בנק', '7%', '₪2,970', 'כ-₪28,200'],
                  ['חברה חוץ בנקאית', '11%', '₪3,260', 'כ-₪45,600'],
                ].map(([track, rate, monthly, total], i) => (
                  <tr key={track} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{track}</td>
                    <td className="border border-accent-100 px-4 py-2 text-primary-700">{rate}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-700">{monthly}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            מימון היבואן נראה הכי זול בחודש — אבל הבלון מסתתר בסוף. הלוואת בנק יקרה יותר בחודש,
            אבל אתה יודע בדיוק כמה שילמת בסיום. חברה חוץ בנקאית — רק כשאין ברירה.
          </p>

          {/* Section 2 */}
          <h2 id="balon" className={h2}>הבלון: המלכודת הנפוצה ביותר</h2>
          <p className={p}>
            &quot;החזר חודשי נמוך&quot; בדרך כלל מגיע עם תשלום בלון בסוף. 20% עד 30% ממחיר
            הרכב שנשאר לתשלום חד-פעמי בתום התקופה.
          </p>
          <p className={p}>
            על רכב של ₪180,000, בלון של 25% הוא ₪45,000. שלוש שנים מהיום.
          </p>
          <p className={p}>
            זה לא רע בהכרח. אם אתה יודע שתמכור את הרכב לפני הסוף, או שיהיה לך הכסף, זה עובד.
            הבעיה מתחילה כשחותמים על בלון בלי לתכנן מה עושים איתו. בסוף התקופה לוקחים הלוואה
            נוספת לכסות אותו.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות כמה יוצא החזר חודשי בלי בלון מול עם בלון?
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

          {/* Section 3 */}
          <h2 id="chashmal" className={h2}>רכב חשמלי: מימון שונה?</h2>
          <p className={p}>
            כרבע מהרכבים הנמכרים כיום בישראל הם חשמליים. המיסוי עליהם נמוך משמעותית, 45% מס
            רכישה לעומת 83% על רכבים רגילים, מה שמוריד את המחיר הסופי.
          </p>
          <p className={p}>
            יבואנים רבים מציעים ריביות סבסוד ייעודיות שלפעמים נמוכות מריביות הבנק. שווה לבדוק
            את תוכנית המימון של היבואן הספציפי לפני שמחליטים.
          </p>
          <p className={p}>
            נקודה אחת שכדאי לדעת: מימון רכב חשמלי כולל לפעמים גם התקנת עמדת טעינה ביתית,
            שאפשר לגלגל לתוך ההלוואה ולהימנע מהוצאה נפרדת.
          </p>

          {/* Section 4 */}
          <h2 id="yad-shniya" className={h2}>הלוואה לרכב יד שנייה</h2>
          <p className={p}>
            אפשרי, אבל בתנאים פחות טובים. ריבית גבוהה יותר, מימון עד 80% מהשווי בלבד,
            ולפעמים מגבלות גיל על הרכב.
          </p>
          <p className={p}>
            הסיבה פשוטה. הרכב הוא הבטוחה. רכב משומש שווה פחות ויורד בערכו מהר יותר, אז הגוף
            המממן לוקח סיכון גבוה יותר.
          </p>

          {/* Section 5 */}
          <h2 id="shabad" className={h2}>שעבוד רכב: מה זה אומר בפועל</h2>
          <p className={p}>
            כשלוקחים הלוואת רכב עם שעבוד, הגוף המממן רשום כבעלים עד לסיום ההחזרים. לא ניתן
            למכור את הרכב בלי לסגור את ההלוואה קודם.
          </p>
          <p className={p}>
            זה לא בעיה אם מתכננים להחזיק את הרכב. זה בעיה אם רוצים למכור לפני הסוף. צריך
            לפרוע את היתרה, לפעמים עם עמלת פירעון מוקדם.
          </p>
          <p className={p}>
            הלוואה לכל מטרה מהבנק ללא שעבוד ייעודי נותנת יותר גמישות, אבל בדרך כלל בריבית
            גבוהה יותר מהלוואת רכב ייעודית.
          </p>

          {/* Section 6: common mistakes */}
          <h2 id="taut" className={h2}>ארבע טעויות שעולות כסף</h2>
          <p className={p}>
            <span className={strong}>1. לחתום על מימון בסוכנות לפני שיש הצעת בנק.</span>{' '}
            ברגע שחתמת בסוכנות, אין לך כוח מיקוח. הגיע עם אישור עקרוני מבנק לאומי, בנק הפועלים
            או מזרחי טפחות — והסוכנות תתחרה עליך.
          </p>
          <p className={p}>
            <span className={strong}>2. לא לחשב את הבלון לתוך המחיר הכולל.</span>{' '}
            בלון של ₪45,000 לא "נעלם". הוא צץ בסוף התקופה. אם אין לך תכנית ברורה — מכירת הרכב,
            חיסכון ייעודי, מימון חוזר — זה יכול לסגור אותך.
          </p>
          <p className={p}>
            <span className={strong}>3. לא לבדוק עמלת פירעון מוקדם.</span>{' '}
            אם תרצה לשדרג רכב אחרי שנתיים, פירעון מוקדם יכול לעלות 1%-3% מהיתרה. שאל על זה
            לפני החתימה, לא אחריה.
          </p>
          <p className={p}>
            <span className={strong}>4. לבלבל בין ריבית נומינלית לאפקטיבית.</span>{' '}
            הסוכנות מציגה לרוב ריבית נומינלית. הריבית האפקטיבית, שמחשבת גם עמלות ותשלומים
            חד-פעמיים, תמיד גבוהה יותר. בקש את ה-APR (שיעור עלות אפקטיבי) לפני שמשווים.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="השווה מימון יבואן מול הלוואת בנק עם המספרים של הרכב שאתה רוצה לקנות."
          />

          {/* Section 7: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">הלוואה או ליסינג: מה עדיף?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי בצרכים. ליסינג תפעולי מתאים למי שאוהב להחליף רכב כל 2 עד 3 שנים ורוצה
                חבילה שכוללת ביטוח וטיפולים. הלוואה עדיפה אם רוצים להיות הבעלים ולהחזיק את
                הרכב לטווח ארוך. לטווח ארוך, הלוואה בדרך כלל זולה יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה הון עצמי צריך?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בדרך כלל 10% עד 20% ממחיר הרכב. יש גופים שמממנים 100%, אבל זה מייקר את ההלוואה
                ומעלה את ריבית הסיכון.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">אפשר למכור רכב שיש עליו הלוואה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן, אבל צריך לסגור את ההלוואה תחילה. בפועל, רוב המוכרים משתמשים בכסף מהמכירה
                לסגירת ההלוואה ומשלמים את ההפרש אם יש.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה ריבית סבירה להלוואת רכב ב-2026?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לרכב חדש, 5% עד 8% היא טווח סביר. מתחת ל-5%, בדוק מה מסתתר בתנאים. מעל 10%,
                חפש אלטרנטיבה.
              </p>
            </div>
          </div>

          {/* Cross-links */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guides/halvaah-lchol-matara"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה לכל מטרה
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
