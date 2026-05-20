import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/כמה-משכנתא-לפי-משכורת';

export const metadata: Metadata = {
  title: 'כמה משכנתא אפשר לקחת לפי משכורת? חישוב מלא 2026',
  description:
    'הבנק מאשר משכנתא לפי ההכנסה שלך, לא לפי מה שאתה רוצה. כך מחשבים כמה תקבל — עם טבלאות מספרים אמיתיות לשנת 2026.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'כמה משכנתא אפשר לקחת לפי משכורת? חישוב מלא 2026',
    description:
      'הבנק מאשר משכנתא לפי ההכנסה שלך, לא לפי מה שאתה רוצה. כך מחשבים כמה תקבל — עם טבלאות מספרים אמיתיות לשנת 2026.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    author: { '@type': 'Organization', name: 'מקסיט.Maxit' },
    publisher: { '@type': 'Organization', name: 'מקסיט.Maxit' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: 'https://getmaxit.co.il' },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: 'https://getmaxit.co.il/guides' },
      { '@type': 'ListItem', position: 3, name: 'כמה משכנתא לפי משכורת', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'כמה משכנתא אפשר לקבל עם שכר של ₪15,000 נטו?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'עם שכר נטו של ₪15,000 ללא הלוואות קיימות, תקרת ההחזר היא כ-₪6,000 בחודש. משכנתא של ₪1,020,000 ל-25 שנה בריבית 5.5% יוצאת לכ-₪6,100 בחודש — זה בערך הגבול. הדירה המקסימלית תהיה בסביבות ₪1,350,000.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לקחת משכנתא גדולה יותר עם הורים כערבים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הבנק יכול להתחשב בהכנסה של קרוב משפחה מדרגה ראשונה — עד מחצית מהכנסתם הפנויה. זה מרחיב את הבסיס לחישוב אבל לא מכפיל אותו.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם שכר שאינו קבוע (עמלות, בונוסים) נספר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בחלקו. שכר בסיס יציב נספר במלואו. עמלות נספרות לרוב ב-50%-70% מהממוצע השנתי. בונוסים חד-פעמיים לרוב לא נספרים כלל.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ההבדל בין 30 שנה ל-20 שנה מבחינת גובה המשכנתא שמקבלים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תקופה ארוכה יותר מורידה את ההחזר החודשי, כך שאותה תקרת החזר מאפשרת לקחת משכנתא גבוהה יותר. על ₪6,000 החזר חודשי ל-30 שנה ניתן לקחת כ-₪1,130,000. על אותו החזר ל-20 שנה — כ-₪870,000 בלבד.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'hafnaah-penuyah', label: 'מה זה "הכנסה פנויה" בעיני הבנק?' },
  { id: 'tavlah',          label: 'טבלת משכנתא לפי משכורת 2026' },
  { id: 'mechir-dirah',    label: 'מהמשכנתא למחיר הדירה' },
  { id: 'halvaot-kayamot', label: 'מה קורה כשיש הלוואות קיימות?' },
  { id: 'gvul-40',         label: 'האם 40% הוא גבול קשיח?' },
  { id: 'zug-yachid',      label: 'זוג מול יחיד' },
  { id: 'ribit-meshane',   label: 'כשהריבית משתנה' },
  { id: 'faq',             label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function KamaMashnektaPage() {
  return (
    <div className="container-page py-10">
      {jsonLd.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'כמה משכנתא לפי משכורת' },
        ]}
      />

      {/* Ad slot — above article */}
      <AdSlot variant="header" className="mb-10" />

      <MobileArticleTOC items={TOC} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ARTICLE */}
        <article>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              משכנתאות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              כמה משכנתא אפשר לקחת לפי משכורת?
            </h1>
            <p className="text-accent-400 text-sm">
              עודכן לאחרונה: מאי 2026 · קריאה: כ-5 דקות
            </p>
          </header>

          {/* Intro */}
          <p className={p}>
            הבנק לא מסתכל על הדירה שאתה רוצה. הוא מסתכל על המשכורת שלך.
          </p>
          <p className={p}>
            כלל אצבע אחד קובע כמעט הכל: ההחזר החודשי על המשכנתא לא יעלה על 40% מההכנסה
            הפנויה שלך. מעבר לזה, הבנק לרוב לא יאשר.
          </p>

          {/* Section 1 */}
          <h2 id="hafnaah-penuyah" className={h2}>מה זה &quot;הכנסה פנויה&quot; בעיני הבנק?</h2>
          <p className={p}>
            לא כל שקל שנכנס לחשבון נחשב. הבנק מחשב כך:
          </p>
          <p className={p}>
            שכר נטו (לאחר מס, ביטוח לאומי, פנסיה) פחות הוצאות קבועות קיימות: הלוואות
            פעילות, החזרי ליסינג, דמי מזונות. מה שנשאר הוא ההכנסה הפנויה. 40% ממנה הוא
            תקרת ההחזר שהבנק יאשר.
          </p>
          <p className={p}>
            דוגמה: שכר נטו ₪15,000, הלוואה קיימת ₪1,000 בחודש. הכנסה פנויה: ₪14,000.
            תקרת ההחזר: ₪5,600.
          </p>

          {/* Inline CTA — salary calculator */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לדעת מה השכר נטו שלך בדיוק?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון שכר נטו של מקסיט מחשב את זה תוך שניות.
              </p>
            </div>
            <Link
              href="/tools/salary-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון שכר נטו
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Section 2 */}
          <h2 id="tavlah" className={h2}>טבלת משכנתא לפי משכורת — 2026</h2>
          <p className={p}>
            המספרים מבוססים על ריבית ממוצעת של 5.5%, תקופה של 25 שנה, תמהיל סטנדרטי.
            אלה אומדנים — הבנק יחשב לפי הנתונים האישיים שלך.
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">שכר נטו משותף</th>
                  <th className="px-4 py-3 font-semibold text-right">החזר מקסימלי (40%)</th>
                  <th className="px-4 py-3 font-semibold text-right">משכנתא מקסימלית (אומדן)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['₪10,000', '₪4,000',  '₪680,000'],
                  ['₪15,000', '₪6,000',  '₪1,020,000'],
                  ['₪20,000', '₪8,000',  '₪1,360,000'],
                  ['₪25,000', '₪10,000', '₪1,700,000'],
                  ['₪30,000', '₪12,000', '₪2,040,000'],
                ].map(([salary, payment, mortgage], idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}
                  >
                    <td className="px-4 py-3 font-medium text-accent-800">{salary}</td>
                    <td className="px-4 py-3 text-accent-600">{payment}</td>
                    <td className="px-4 py-3 font-semibold text-primary-700">{mortgage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className={p}>
            זה ה&quot;כמה&quot;. עכשיו השאלה האמיתית: כמה דירה אפשר לקנות?
          </p>

          {/* Section 3 */}
          <h2 id="mechir-dirah" className={h2}>מהמשכנתא למחיר הדירה — החישוב האמיתי</h2>
          <p className={p}>
            משכנתא היא עד 75% ממחיר הדירה לדירה ראשונה. אז אם הבנק מאשר לך ₪1,020,000
            — מחיר הדירה המקסימלי הוא בערך ₪1,360,000 (₪1,020,000 חלקי 0.75).
          </p>
          <p className={p}>
            וכאן מגיעה ההפתעה שאנשים לא מחשבים: הון עצמי לא מכסה רק את ה-25%. יש הוצאות
            נלוות שמגיעות ל-3-5% נוספים — שכר עורך דין, מס רכישה, שמאי, הובלה. על דירה
            של ₪1,360,000 זה עוד ₪40,000-68,000 שצריך מחוץ למשכנתא.
          </p>
          <p className={p}>
            בגדול: צריך הון עצמי של כ-30% ממחיר הדירה כדי לכסות את ה-25% פלוס ההוצאות.
          </p>

          {/* Section 4 */}
          <h2 id="halvaot-kayamot" className={h2}>מה קורה כשיש הלוואות קיימות?</h2>
          <p className={p}>
            הלוואה קיימת גורעת מהיכולת שלך לקבל משכנתא, שקל לשקל.
          </p>
          <p className={p}>
            אם יש לך הלוואת רכב של ₪2,000 בחודש, הבנק מפחית אותה מההכנסה הפנויה לפני
            שמחשב את תקרת ההחזר. על שכר נטו של ₪20,000 עם הלוואה של ₪2,000, ההכנסה
            הפנויה ירדה ל-₪18,000 ותקרת ההחזר ל-₪7,200 במקום ₪8,000.
          </p>
          <p className={p}>
            זה יכול להפחית את המשכנתא שתקבל ב-₪140,000 ויותר.
          </p>
          <p className={p}>
            לכן יועצים רבים ממליצים לסגור הלוואות קיימות לפני שמגישים בקשה למשכנתא, אם
            הדבר אפשרי. קרא עוד על{' '}
            <Link href="/guides/משכנתא-ראשונה"
              className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
              משכנתא ראשונה
            </Link>
            {' '}— המדריך המלא.
          </p>

          {/* Section 5 */}
          <h2 id="gvul-40" className={h2}>האם 40% הוא גבול קשיח?</h2>
          <p className={p}>
            לא תמיד. הבנק יכול לאשר עד 50% במקרים מסוימים — בעיקר כשיש הון עצמי גבוה
            במיוחד, רמת סיכון נמוכה של הנכס, ונתוני אשראי חזקים. אבל 40% הוא הנורמה
            ו-50% הוא יוצא דופן.
          </p>
          <p className={p}>
            מעבר לכך, גם אם הבנק יאשר יותר, לא בטוח שכדאי לקחת. משכנתא של 50% מהשכר
            פוגעת ביכולת לחסוך, לגדול, ולהתמודד עם הפתעות.
          </p>

          {/* Inline CTA — mortgage calculator */}
          <CalculatorCTA
            calculatorName="מחשבון המשכנתא"
            calculatorUrl="/tools/mortgage-calculator"
            teaser="שנה את ההכנסה וסכום ההלוואה — וראה מיד מה ההחזר החודשי שלך."
          />

          {/* Section 6 */}
          <h2 id="zug-yachid" className={h2}>זוג מול יחיד — ההבדל המשמעותי</h2>
          <p className={p}>
            זוג מחשב את ההכנסה המשותפת. שתי משכורות נטו מסתכמות. זה יתרון ענק.
          </p>
          <p className={p}>
            יחיד עם שכר של ₪12,000 נטו יכול לקבל משכנתא של בערך ₪815,000. אותה משפחה
            עם שתי משכורות של ₪12,000 כל אחת — ₪24,000 נטו יחד — יכולה לקבל ₪1,630,000.
            כמעט פי שתיים.
          </p>
          <p className={p}>
            הבנקים מחמירים יותר עם לווים יחידים כי אין גיבוי אם ההכנסה נפגעת. לווה יחיד
            לרוב יקבל תקרת החזר של 30% ולא 40%.
          </p>

          {/* Section 7 */}
          <h2 id="ribit-meshane" className={h2}>מה קורה לאחר שהריבית משתנה?</h2>
          <p className={p}>
            אם לקחת משכנתא עם מסלול פריים, ההחזר שלך ישתנה עם שינויי{' '}
            <Link href="/guides/ריבית-פריים"
              className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
              ריבית הפריים
            </Link>
            . הבנק לוקח זה בחשבון ובודק שתוכל לעמוד גם אם הריבית תעלה.
          </p>
          <p className={p}>
            ואם כבר יש לך משכנתא ואתה מרגיש שההחזר גבוה מדי ביחס להכנסה, כדאי לבדוק{' '}
            <Link href="/guides/מחזור-משכנתא"
              className="text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
              מחזור משכנתא
            </Link>
            {' '}— שינוי תנאי ההלוואה כדי להתאים להכנסה הנוכחית.
          </p>

          {/* Section 8: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                כמה משכנתא אפשר לקבל עם שכר של ₪15,000 נטו?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                עם שכר נטו של ₪15,000 ללא הלוואות קיימות, תקרת ההחזר היא כ-₪6,000 בחודש.
                משכנתא של ₪1,020,000 ל-25 שנה בריבית 5.5% יוצאת לכ-₪6,100 בחודש — זה
                בערך הגבול. הדירה המקסימלית תהיה בסביבות ₪1,350,000.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם אפשר לקחת משכנתא גדולה יותר עם הורים כערבים?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הבנק יכול להתחשב בהכנסה של קרוב משפחה מדרגה ראשונה — עד מחצית מהכנסתם
                הפנויה. זה מרחיב את הבסיס לחישוב אבל לא מכפיל אותו.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם שכר שאינו קבוע (עמלות, בונוסים) נספר?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בחלקו. שכר בסיס יציב נספר במלואו. עמלות נספרות לרוב ב-50%-70% מהממוצע
                השנתי. בונוסים חד-פעמיים לרוב לא נספרים כלל.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה ההבדל בין 30 שנה ל-20 שנה מבחינת גובה המשכנתא שמקבלים?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תקופה ארוכה יותר מורידה את ההחזר החודשי, כך שאותה תקרת החזר מאפשרת לקחת
                משכנתא גבוהה יותר. על ₪6,000 החזר חודשי ל-30 שנה ניתן לקחת כ-₪1,130,000.
                על אותו החזר ל-20 שנה — כ-₪870,000 בלבד.
              </p>
            </div>
          </div>

          {/* קרא גם */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קרא גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/guides/משכנתא-ראשונה"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                משכנתא ראשונה — המדריך המלא לזוגות ורוכשים
              </Link>
              <Link
                href="/guides/מחזור-משכנתא"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                מחזור משכנתא: מתי זה משתלם ומתי זה מלכודת
              </Link>
              <Link
                href="/guides/שפיצר-מול-קרן-שווה"
                className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                לוח שפיצר מול קרן שווה: ההשוואה האמיתית
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

            {/* Sidebar CTA */}
            <div className="card bg-primary-50/60 border-primary-100">
              <p className="text-sm font-semibold text-accent-800 mb-2">
                מחשבון משכנתא
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                הכניסו את ההכנסה שלכם וראו את המשכנתא המקסימלית בזמן אמת.
              </p>
              <Link
                href="/tools/mortgage-calculator"
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

      {/* Ad slot — below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
