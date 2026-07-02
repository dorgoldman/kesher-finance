import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/הלוואה-מקרן-השתלמות';

export const metadata: Metadata = {
  title: 'הלוואה מקרן השתלמות',
  description:
    'הלוואה מקרן השתלמות היא אחת הזולות בשוק. אבל יש כמה דברים שחייבים להבין לפני שלוחצים אישור. המדריך המלא.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'הלוואה מקרן השתלמות 2026 - ריבית, תנאים וכל מה שצריך לדעת',
    description:
      'הלוואה מקרן השתלמות היא אחת הזולות בשוק. אבל יש כמה דברים שחייבים להבין לפני שלוחצים אישור. המדריך המלא.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-17',
    dateModified: '2026-05-17',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: 'מקסיט. Maxit' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: 'https://getmaxit.co.il' },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: 'https://getmaxit.co.il/guides' },
      { '@type': 'ListItem', position: 3, name: 'הלוואה מקרן השתלמות', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה הריבית על הלוואה מקרן השתלמות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בדרך כלל בין פריים מינוס 0.75% לפריים פלוס 0.5%, תלוי בחברה ובתנאים שלך. בריבית פריים של 6.5% כיום, זה אומר ריבית אפקטיבית של כ-5.75% עד 7%.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לקחת הלוואה מקרן השתלמות לא נזילה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. אחרי שנה וחודש מההפקדה הראשונה, אפשר ללוות עד 50% מהיתרה. זה שימושי בדיוק כשאתה לא יכול למשוך בלי לשלם מס.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה קורה אם לא מחזירים את ההלוואה מקרן השתלמות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בית ההשקעות יכול לממש את הבטוחה, כלומר את כספי הקרן עצמה, כדי לכסות את החוב. לכן חשוב לוודא שההחזר החודשי ריאלי לתקציב שלך.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לפרוע מוקדם הלוואה מקרן השתלמות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ברוב הקרנות: כן, ללא קנסות. זה יתרון משמעותי לעומת הלוואות בנקאיות עם עמלת פירעון מוקדם.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'eich-oved',     label: 'איך זה עובד?' },
  { id: 'kamah-ilvot',   label: 'כמה אפשר ללוות?' },
  { id: 'limshoch-ilvot', label: 'למשוך או ללוות?' },
  { id: 'matai-mishiha', label: 'מתי כן כדאי לשקול משיכה?' },
  { id: 'hafrashat',     label: 'מה ההבדל בין החברות?' },
  { id: 'dugma',         label: 'דוגמה מספרית' },
  { id: 'lifni-hatemah', label: 'מה לבדוק לפני שחותמים?' },
  { id: 'taut',          label: 'טעויות נפוצות' },
  { id: 'faq',           label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function HalvaahMikrenHashtalmuutPage() {

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
          { label: 'הלוואה מקרן השתלמות' },
        ]}
      />

      {/* Ad slot - above article */}
      <AdSlot variant="header" className="mb-10" />

      <MobileArticleTOC items={TOC} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ARTICLE */}
        <article>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              הלוואה מקרן השתלמות: הכסף הזול שרוב האנשים שוכחים שיש להם
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
            יש לך כסף שנצבר שנים בקרן השתלמות. ואתה הולך לבנק לבקש הלוואה.
          </p>
          <p className={p}>
            זה לא טעות גדולה. אבל כנראה יש לך אופציה זולה יותר, ישירות דרך הקרן.
          </p>

          {/* Section 1 */}
          <h2 id="eich-oved" className={h2}>איך זה עובד?</h2>
          <p className={p}>
            הלוואה מקרן השתלמות היא הלוואה שמקבלים מבית ההשקעות שמנהל את הקרן שלך. הכסף
            שנצבר בקרן משמש כבטוחה. כי הסיכון של בית ההשקעות אפסי, הריבית שאתה מקבל נמוכה
            משמעותית מהבנק.
          </p>
          <p className={p}>
            הריבית בדרך כלל נעה בין פריים מינוס 0.75% לפריים פלוס כמה עשיריות. בריבית שוק
            של היום, זה הרבה יותר זול מהלוואה בנקאית רגילה.
          </p>
          <p className={p}>
            הכסף ממשיך להיות מושקע בשוק ההון גם בזמן שאתה מחזיר את ההלוואה. זה היתרון
            הגדול.
          </p>

          {/* Section 2 */}
          <h2 id="kamah-ilvot" className={h2}>כמה אפשר ללוות?</h2>
          <p className={p}>
            תלוי אם הכסף שלך נזיל או לא.
          </p>
          <p className={p}>
            קרן נזילה, כלומר עברו יותר מ-6 שנים מההפקדה הראשונה: אפשר ללוות עד 80% מהיתרה.
            קרן לא נזילה, כלומר עברה שנה וחודש אבל פחות מ-6 שנים: אפשר ללוות עד 50%.
          </p>
          <p className={p}>
            תקופת ההחזר נעה בין שנה לשבע שנים. אפשר לבחור שפיצר (החזר קבוע), גרייס (ריבית
            בלבד בהתחלה), או בלון (כל הקרן בסוף).
          </p>

          {/* Section 3 */}
          <h2 id="limshoch-ilvot" className={h2}>למשוך או ללוות?</h2>
          <p className={p}>
            זאת השאלה שישראלים שואלים הכי הרבה בפורומים. התשובה כמעט תמיד: לא למשוך.
          </p>
          <p className={p}>
            למה? כי משיכה מקרן לא נזילה מגיעה עם מס של 47% על הרווחים. זה הרבה כסף שנעלם.
            גם קרן נזילה, אחרי 6 שנים, כדאי לשמור. הפטור ממס רווחי הון של קרן השתלמות הוא
            הטבה שלא קיימת בשום מוצר אחר בישראל.
          </p>
          <p className={p}>
            לכן הלוגיקה פשוטה: לוקחים הלוואה בריבית נמוכה, משאירים את הקרן להמשיך לצמוח
            פטורה ממס.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לחשב כמה ההלוואה תעלה לך?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה מחשב ריבית, החזר חודשי ועלות כוללת.
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

          {/* Section 4 */}
          <h2 id="matai-mishiha" className={h2}>מתי כן כדאי לשקול משיכה?</h2>
          <p className={p}>
            יש מצב אחד שבו משיכה עשויה להיות הגיונית: כשיש לך הלוואה יקרה מאוד, מעל 7-8%
            ריבית, ואתה לא מצליח לעמוד בהחזר החודשי. אז לסגור את ההלוואה היקרה מכספי קרן
            נזילה יכול להיות נכון.
          </p>
          <p className={p}>
            אבל אם ריבית ההלוואה שלך נמוכה מ-6%, כמעט תמיד עדיף ללוות מהקרן ולא לפדות
            אותה.
          </p>

          {/* Section 5 */}
          <h2 id="hafrashat" className={h2}>מה ההבדל בין החברות?</h2>
          <p className={p}>
            כלל, מגדל, מנורה, הפניקס, מור, אלטשולר שחם, הלמן אלדובי. כולן מציעות הלוואות
            מקרנות השתלמות, אבל בתנאים שונים.
          </p>
          <p className={p}>
            ההבדלים העיקריים: רמת הריבית (פריים מינוס כמה?), תקופת ההחזר המקסימלית,
            ואחוז הלוואה אפשרי מהיתרה. כדאי לבקש הצעה מבית ההשקעות שלך ולהשוות לפחות
            עם עוד אחד.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">חברה</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית טיפוסית</th>
                  <th className="px-4 py-2 text-right font-semibold">מקסימום ללוות</th>
                  <th className="px-4 py-2 text-right font-semibold">תקופת החזר</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['כלל', 'פריים מינוס 0.5%', 'עד 80% (נזילה)', 'עד 7 שנים'],
                  ['מגדל', 'פריים מינוס 0.5%', 'עד 80% (נזילה)', 'עד 7 שנים'],
                  ['מנורה מבטחים', 'פריים', 'עד 80% (נזילה)', 'עד 7 שנים'],
                  ['הפניקס', 'פריים מינוס 0.5%', 'עד 80% (נזילה)', 'עד 7 שנים'],
                  ['מור / אלטשולר', 'פריים עד פריים פלוס', 'עד 70% (נזילה)', 'עד 5 שנים'],
                ].map(([co, rate, max, term], i) => (
                  <tr key={co} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{co}</td>
                    <td className="border border-accent-100 px-4 py-2 text-primary-700">{rate}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{max}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            הנתונים הם הערכה כללית, התנאים המדויקים משתנים לפי יתרה, סוג קרן וגיל החוסך.
            בקש הצעה רשמית מהחברה לפני כל החלטה.
          </p>

          {/* Section 5b: worked example */}
          <h2 id="dugma" className={h2}>דוגמה מספרית: כמה זה עולה בפועל?</h2>
          <p className={p}>
            נניח שיש לך קרן השתלמות נזילה עם יתרה של ₪200,000. אתה רוצה ללוות ₪80,000
            לשיפוץ דירה לתקופה של 4 שנים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">מקרן השתלמות (פריים מינוס 0.5%):</span>{' '}
            ריבית אפקטיבית כ-6%. החזר חודשי: כ-₪1,880. סך ריבית: כ-₪10,240.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הלוואה בנקאית לשיפוץ (פריים פלוס 2-3%):</span>{' '}
            ריבית אפקטיבית כ-9%. החזר חודשי: כ-₪1,990. סך ריבית: כ-₪15,520.
          </p>
          <p className={p}>
            ההפרש: כ-₪5,280 על אותה הלוואה. כשמוסיפים את זה לעובדה שהקרן ממשיכה להיות
            מושקעת ולצבור תשואה, היתרון הכולל גדול עוד יותר.
          </p>
          <p className={p}>
            כמובן שאם הקרן הפסידה 10% בשנה שהתחלת ללוות, התמונה מורכבת יותר. שום דבר
            בשוק ההון לא מובטח.
          </p>

          {/* Section 6 */}
          <h2 id="lifni-hatemah" className={h2}>מה לבדוק לפני שחותמים?</h2>
          <p className={p}>
            שלושה דברים שכדאי לברר:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">ניוד הקרן.</span> כל עוד יש
            הלוואה פעילה על הקרן, לא ניתן לנייד אותה לבית השקעות אחר. אם אתה שוקל לעבור
            חברה בעתיד, תחשוב על זה לפני.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">ירידות בשוק.</span> הקרן ממשיכה
            להיות מושקעת, אבל חלקה משועבד. ירידות חדות יכולות להפחית את ערך הבטוחה, ובמקרים
            קיצוניים בית ההשקעות יכול לדרוש הגדלת הבטוחה.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">תנאי פירעון ומשיכה.</span> יש
            חברות שמחייבות פירעון מלא של ההלוואה לפני שמאפשרות משיכה מהקרן. תוודא את
            התנאים מראש.
          </p>

          {/* Section 7: common mistakes */}
          <h2 id="taut" className={h2}>שלוש טעויות נפוצות</h2>
          <p className={p}>
            <span className="font-semibold text-accent-800">1. ללוות יותר מדי ביחס ליתרה.</span>{' '}
            הלוואה של 80% מהיתרה נראית אטרקטיבית, אבל אם השוק יירד 20% בשנה הבאה, ערך
            הבטוחה יתכווץ ובית ההשקעות עלול לדרוש כיסוי. כלל אצבע: אל תלווה יותר מ-50%
            מהיתרה אלא אם ההחזר ודאי ומהיר.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">2. לשכוח מניוד הקרן.</span>{' '}
            הלוואה פעילה נועלת את הקרן לבית ההשקעות הנוכחי. אם תרצה לנייד לחברה עם דמי
            ניהול נמוכים יותר, תצטרך לפרוע קודם. שווה לבדוק את דמי הניהול לפני שחותמים, לפעמים
            החיסכון בריבית פחות ממה שמפסידים על דמי ניהול גבוהים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">3. לקחת הלוואה לפני שהקרן נזילה.</span>{' '}
            ניתן ללוות גם מקרן לא נזילה (אחרי שנה וחודש), אבל הריבית גבוהה יותר ואחוז
            ההלוואה המותר נמוך יותר. אם אפשר להמתין עד 6 שנים, התנאים יהיו טובים בהרבה.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="כמה ייצא החזר חודשי על הסכום שאתה שוקל ללוות מהקרן שלך?"
          />

          {/* Section 8: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה הריבית על הלוואה מקרן השתלמות?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בדרך כלל בין פריים מינוס 0.75% לפריים פלוס 0.5%, תלוי בחברה ובתנאים שלך.
                בריבית פריים של 6.5% כיום, זה אומר ריבית אפקטיבית של כ-5.75% עד 7%.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם אפשר לקחת הלוואה מקרן השתלמות לא נזילה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. אחרי שנה וחודש מההפקדה הראשונה, אפשר ללוות עד 50% מהיתרה. זה שימושי
                בדיוק כשאתה לא יכול למשוך בלי לשלם מס.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה קורה אם לא מחזירים את ההלוואה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בית ההשקעות יכול לממש את הבטוחה, כלומר את כספי הקרן עצמה, כדי לכסות את
                החוב. לכן חשוב לוודא שההחזר החודשי ריאלי לתקציב שלך.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם אפשר לפרוע מוקדם?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                ברוב הקרנות: כן, ללא קנסות. זה יתרון משמעותי לעומת הלוואות בנקאיות עם
                עמלת פירעון מוקדם.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/halvaah-lmesoravim" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה למסורבים: מה האפשרויות האמיתיות
              </Link>
              <Link href="/guides/ריבית-אפקטיבית" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ריבית אפקטיבית: המספר שהבנק מעדיף שלא תסתכל עליו
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.kolzchut.org.il/he/קרן_השתלמות" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">קרן השתלמות, כל-זכות</a>{' '}·{' '}
            <a href="https://www.boi.org.il/monetary-policy/interest-rate-decisions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">ריבית בנק ישראל</a>
          </div>

          <RelatedGuides currentHref="/guides/הלוואה-מקרן-השתלמות" />

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

            {/* Calculator CTA card */}
            <div className="card bg-primary-50/60 border-primary-100">
              <p className="text-sm font-semibold text-accent-800 mb-2">
                מחשבון הלוואה
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                חשב החזר חודשי, סך ריבית ועלות כוללת של ההלוואה שלך.
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
