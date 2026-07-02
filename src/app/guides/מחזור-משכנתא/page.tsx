import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/מחזור-משכנתא';

export const metadata: Metadata = {
  title: 'מחזור משכנתא 2026',
  description:
    'מחזור משכנתא יכול לחסוך לך עשרות אלפי שקלים. או לעלות לך ביוקר אם לא בדקת את עמלת הפירעון. המדריך המלא.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'מחזור משכנתא 2026 - מתי כדאי ומה עולה לך לדעת',
    description:
      'מחזור משכנתא יכול לחסוך לך עשרות אלפי שקלים. או לעלות לך ביוקר אם לא בדקת את עמלת הפירעון. המדריך המלא.',
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
      { '@type': 'ListItem', position: 3, name: 'מחזור משכנתא', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'כמה עולה מחזור משכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי בעמלות הפירעון המוקדם, שמשתנות לפי מסלול ואחוז מימון. עמלה תפעולית בסיסית עומדת על כ-60 שקל למסלול. עמלת ההיוון, שהיא הגדולה, נגבית רק כשהריבית הממוצעת בשוק נמוכה מהריבית שלך. מחזור חיצוני מוסיף עלויות שמאי ורישום של 2,000-4,000 שקל.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר למחזר רק חלק מהמשכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. אפשר לפרוע רק מסלולים מסוימים ולהשאיר את השאר. זה נפוץ כשמסלול אחד הוא בריבית גבוהה ואחרים תחרותיים.',
        },
      },
      {
        '@type': 'Question',
        name: 'מתי אסור לסמוך על יועץ הבנק לגבי מחזור?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תמיד. הבנקאי מייצג את הבנק, לא אותך. בקש הצעות ממספר בנקים ורק אז השווה.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם מחזור פוגע בדירוג האשראי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא באופן ישיר. לקיחת הלוואה חדשה כוללת בדיקת אשראי, אבל המחזור עצמו לא פוגע בדירוג בצורה משמעותית לרוב האנשים.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'mah-ze',       label: 'מה זה מחזור משכנתא?' },
  { id: 'matai',        label: 'מתי כדאי לבדוק?' },
  { id: 'mlkudet',      label: 'המלכודת שרוב האנשים לא מכירים' },
  { id: 'dugma',        label: 'דוגמה מספרית: שווה או לא?' },
  { id: 'pnimi-chitoni', label: 'מחזור פנימי מול חיצוני' },
  { id: 'taaut',        label: 'הטעות הנפוצה ביותר' },
  { id: 'eich-matkhalim', label: 'איך מתחילים?' },
  { id: 'mikuach',      label: 'להתמקח: ההצעה המתחרה כמנוף' },
  { id: 'faq',          label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function MachzorMashkantaPage() {

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
          { label: 'מחזור משכנתא' },
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
              משכנתאות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              מחזור משכנתא: מתי זה משתלם ומתי זה מלכודת
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
            כמה אתה משלם בריבית על המשכנתא שלך? לא בערך. בדיוק.
          </p>
          <p className={p}>
            אם אתה לא יודע, כנראה שאתה משלם יותר מדי. ואולי הגיע הזמן לבדוק מחזור.
          </p>

          {/* Section 1 */}
          <h2 id="mah-ze" className={h2}>מה זה בכלל מחזור משכנתא?</h2>
          <p className={p}>
            מחזור משכנתא זה פשוט: סוגרים את המשכנתא הקיימת ולוקחים חדשה במקומה, בתנאים
            טובים יותר.
          </p>
          <p className={p}>
            זה יכול להיות באותו בנק, זה נקרא מחזור פנימי. או בבנק אחר, זה מחזור חיצוני.
            ההבדל משמעותי, נגיע לזה.
          </p>
          <p className={p}>
            המטרה תמיד אותה דבר: לשלם פחות. פחות בחודש, פחות בסך הכל, או שניהם.
          </p>

          {/* Section 2 */}
          <h2 id="matai" className={h2}>מתי כדאי לבדוק?</h2>
          <p className={p}>
            ארבעה מצבים שבהם כדאי לבדוק מחזור:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הריבית בשוק ירדה.</span> אם
            לקחת משכנתא ב-2022-2023, כשהריביות היו בשיא, ייתכן שהיום תוכל לקבל תנאים
            טובים יותר. פער של 0.5% בריבית על מיליון שקל שווה כ-₪300 פחות בחודש.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">ההכנסה שלך השתנתה.</span>{' '}
            קיבלת העלאה? אפשר לקצר את תקופת המשכנתא ולחסוך עשרות אלפי שקלים בריבית.
            ירדה ההכנסה? אפשר להאריך את התקופה ולהקטין את ההחזר החודשי.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">אתה רוצה לאחד הלוואות.</span>{' '}
            יש לך כמה הלוואות יקרות? לפעמים אפשר לאחד אותן לתוך המשכנתא בריבית נמוכה
            יותר.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">עברו לפחות 5 שנים מאז לקחת.</span>{' '}
            ההנחות בעמלת הפירעון המוקדם גדלות עם הזמן. אחרי 5 שנים, חלק מהעמלות יורדות
            משמעותית.
          </p>

          {/* Section 3 */}
          <h2 id="mlkudet" className={h2}>המלכודת שרוב האנשים לא מכירים</h2>
          <p className={p}>
            עמלת הפירעון המוקדם. זה מה שיכול להפוך מחזור שנראה כדאי לעסקה גרועה.
          </p>
          <p className={p}>
            כשאתה מוחזר משכנתא, אתה בעצם פורע את הישנה לפני הזמן. הבנק מאבד ריבית
            עתידית ומפצה את עצמו בעמלה. בחלק מהמסלולים, העמלה יכולה להגיע לעשרות אלפי
            שקלים.
          </p>
          <p className={p}>
            הכלל הפרקטי שיועצים משתמשים בו: אם החיסכון החודשי קטן מ-₪500, כנראה שהמחזור
            לא שווה את העלויות. אם הוא גדול מ-₪500, שווה לחשב לעומק.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות אם המחזור כדאי לך?
              </p>
              <p className="text-accent-500 text-sm">
                השתמש במחשבון המשכנתא כדי להשוות תרחישים.
              </p>
            </div>
            <Link
              href="/tools/mortgage-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון משכנתא
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Section 3b: worked example */}
          <h2 id="dugma" className={h2}>דוגמה מספרית: כמה שווה מחזור ב-2026?</h2>
          <p className={p}>
            משכנתא של ₪900,000. נלקחה ב-2023 בריבית קבועה 5.5% ל-25 שנה. יתרה כיום: ₪870,000.
            23 שנים נותרו.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">תרחיש א׳, נשאר בתנאים הקיימים:</span>{' '}
            החזר חודשי: כ-₪5,540. סך ריבית שנותרת: כ-₪658,000.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">תרחיש ב׳, מחזור לריבית 4.6%:</span>{' '}
            החזר חודשי: כ-₪4,940. חיסכון חודשי: ₪600. עלות מחזור חיצוני: כ-₪8,000 (שמאי + רישום + תפעולית).
            נקודת איזון: 13 חודשים. לאחר מכן, כל חודש חוסך ₪600.
          </p>
          <p className={p}>
            לאורך 23 שנה, החיסכון הכולל (בניכוי עלות המחזור): כ-₪157,000.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">פרמטר</th>
                  <th className="px-4 py-2 text-right font-semibold">לפני מחזור</th>
                  <th className="px-4 py-2 text-right font-semibold">אחרי מחזור</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['ריבית', '5.5%', '4.6%'],
                  ['החזר חודשי', '₪5,540', '₪4,940'],
                  ['עלות מחזור', '-', '₪8,000'],
                  ['נקודת איזון', '-', '13 חודש'],
                  ['חיסכון כולל', '-', 'כ-₪157,000'],
                ].map(([param, before, after], i) => (
                  <tr key={param} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-accent-800">{param}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{before}</td>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-primary-700">{after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            הכלל הפרקטי: אם נקודת האיזון מתחת ל-24 חודשים ויש לך כוונה להישאר בדירה, כדאי לבדוק.
          </p>

          {/* Section 4 */}
          <h2 id="pnimi-chitoni" className={h2}>מחזור פנימי מול חיצוני: מה ההבדל?</h2>
          <p className={p}>
            <span className="font-semibold text-accent-800">מחזור פנימי:</span> נשאר באותו
            בנק. פחות בירוקרטיה, אין צורך בשמאי או נוטריון. אבל לבנק יש פחות מוטיבציה
            לתת לך את הריבית הטובה ביותר.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">מחזור חיצוני:</span> עובר לבנק
            אחר. יותר ניירת, תשלום לשמאי (כ-₪1,500-2,500), עלויות רישום. אבל התחרות
            עובדת לטובתך. כשבנק לאומי מתחרה על הלקוח של הפועלים, הריביות מתחילות לזוז.
          </p>
          <p className={p}>
            ברוב המקרים, מחזור חיצוני נותן תנאים טובים יותר. אבל צריך לחשב אם הפער
            בריבית מצדיק את עלויות המעבר.
          </p>

          {/* Section 5 */}
          <h2 id="taaut" className={h2}>הטעות הנפוצה ביותר</h2>
          <p className={p}>
            לסמוך על הבנקאי שלך שיגיד לך אם כדאי.
          </p>
          <p className={p}>
            הבנקאי עובד בשביל הבנק. אם הבנק מרוויח יותר אם אתה נשאר בתנאים הקיימים,
            הבנקאי יגיד לך שזה לא כדאי. זה לא בהכרח שקר, אבל זה גם לא ייעוץ אובייקטיבי.
          </p>
          <p className={p}>
            לפני שמתחילים בתהליך, כדאי לבדוק עצמאית. לבקש דוח יתרות מהבנק, להבין אילו
            מסלולים יש לך ומה עמלות הפירעון שלהם. רק אז לגשת לשיחה.
          </p>

          {/* Section 6 */}
          <h2 id="eich-matkhalim" className={h2}>איך מתחילים?</h2>
          <p className={p}>
            שלוש פעולות ראשונות:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">לבקש מהבנק דוח יתרות מפורט.</span>{' '}
            זה חינמי וחובה. הדוח מראה כל מסלול, הריבית שלו, יתרת הקרן, ועמלת הפירעון
            לכל מסלול בנפרד.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">לבדוק את ריביות השוק היום.</span>{' '}
            קבוצות פייסבוק של משכנתאות הן מקום טוב להבין מה אנשים מקבלים בפועל בבנקים
            השונים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">להשוות עם יועץ משכנתאות עצמאי, לא בנקאי.</span>{' '}
            יועץ עצמאי גובה כסף מראש, אבל לא מרוויח מהעסקה עצמה, כך שהאינטרס שלו זהה
            לשלך.
          </p>

          {/* Section: negotiation leverage */}
          <h2 id="mikuach" className={h2}>להתמקח: ההצעה המתחרה היא המנוף שלך</h2>
          <p className={p}>
            מחזור הוא הרגע שבו כוח המיקוח שלך הכי גבוה. הבנק החדש רוצה לקחת אותך
            מהמתחרה, והבנק הקיים לא רוצה לאבד אותך. אתה יושב באמצע, וזה בדיוק המקום
            לנצל.
          </p>
          <p className={p}>
            התרגיל פשוט: משיגים הצעה כתובה מבנק מתחרה, לאומי מול הפועלים, מזרחי טפחות
            מול דיסקונט, ומביאים אותה בחזרה לבנק שלך. ברוב המקרים הבנק הקיים ישפר את
            התנאים כדי להחזיק אותך, כי לאבד לקוח עולה לו יותר מלהוריד לך עשירית אחוז.
          </p>
          <p className={p}>
            אל תתרשם מהמשפט &quot;זאת הריבית שאנחנו יכולים לתת&quot;. כמעט תמיד יש עוד
            מרחב, בעיקר על המרווח במסלולים הצמודים והמשתנים. תבקש שיפור ספציפי, לא
            הנחה כללית, ותהיה מוכן לעבור בנק אם לא זזים. הנכונות האמיתית לעזוב היא מה
            שמזיז את הריבית.
          </p>
          <p className={p}>
            כל עשירית אחוז נחשבת. על יתרה של ₪870,000, הורדה של 0.4% היא בערך ₪600
            בחודש. זה ההבדל בין מחזור ששווה את הטרחה לבין מחזור שלא זז מהמקום.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון מחזור המשכנתא"
            calculatorUrl="/tools/mortgage-refinance-calculator"
            teaser="הזן את המשכנתא הנוכחית וההצעה החדשה - כולל עמלת פירעון מוקדם - ותראה אם המחזור באמת משתלם."
          />

          {/* Section 7: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה עולה מחזור משכנתא?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי בעמלות הפירעון המוקדם, שמשתנות לפי מסלול ואחוז מימון. עמלה תפעולית
                בסיסית עומדת על כ-₪60 למסלול. עמלת ההיוון, שהיא הגדולה, נגבית רק כשהריבית
                הממוצעת בשוק נמוכה מהריבית שלך. מחזור חיצוני מוסיף עלויות שמאי ורישום של
                ₪2,000-4,000.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם אפשר למחזר רק חלק מהמשכנתא?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. אפשר לפרוע רק מסלולים מסוימים ולהשאיר את השאר. זה נפוץ כשמסלול אחד
                הוא בריבית גבוהה ואחרים תחרותיים.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מתי אסור לסמוך על יועץ הבנק לגבי מחזור?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תמיד. הבנקאי מייצג את הבנק, לא אותך. בקש הצעות ממספר בנקים ורק אז השווה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם מחזור פוגע בדירוג האשראי?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לא באופן ישיר. לקיחת הלוואה חדשה כוללת בדיקת אשראי, אבל המחזור עצמו לא
                פוגע בדירוג בצורה משמעותית לרוב האנשים.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/ריבית-פריים" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                ריבית פריים: מה זה ואיך זה משפיע עליך
              </Link>
              <Link href="/guides/שפיצר-מול-קרן-שווה" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                לוח שפיצר מול קרן שווה: ההשוואה האמיתית
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.boi.org.il/monetary-policy/interest-rate-decisions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">ריבית בנק ישראל</a>{' '}·{' '}
            <a href="https://www.kolzchut.org.il/he/משכנתה" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">משכנתא, כל-זכות</a>
          </div>

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
                מחשבון משכנתא
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                הרכיבו תמהיל מסלולים וראו את ההחזר החודשי בזמן אמת.
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

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
