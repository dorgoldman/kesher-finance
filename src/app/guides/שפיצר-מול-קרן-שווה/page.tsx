import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/שפיצר-מול-קרן-שווה';

export const metadata: Metadata = {
  title: 'שפיצר מול קרן שווה',
  description:
    'שפיצר או קרן שווה? רוב האנשים לא שואלים את השאלה הנכונה. כך תדעו מה מתאים לכם, עם מספרים אמיתיים.',
  alternates: { canonical: CANONICAL },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'לוח שפיצר מול קרן שווה 2026 - מה ההבדל ואיזה עדיף?',
    description:
      'שפיצר או קרן שווה? רוב האנשים לא שואלים את השאלה הנכונה. כך תדעו מה מתאים לכם, עם מספרים אמיתיים.',
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
      { '@type': 'ListItem', position: 1, name: 'ראשי',                        item: 'https://getmaxit.co.il' },
      { '@type': 'ListItem', position: 2, name: 'מדריכים',                     item: 'https://getmaxit.co.il/guides' },
      { '@type': 'ListItem', position: 3, name: 'לוח שפיצר מול קרן שווה',     item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה ההבדל בין שפיצר לקרן שווה במספרים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'על הלוואה של ₪1,000,000 ל-25 שנה בריבית 5%: בשפיצר ההחזר החודשי קבוע בכ-₪5,800 וסך הריבית הכוללת כ-₪750,000. בקרן שווה ההחזר מתחיל בכ-₪7,500 ויורד בהדרגה, וסך הריבית כ-₪625,000. אבל אם לוקחים שפיצר עם אותו החזר התחלתי של ₪7,500, התקופה מתקצרת והחיסכון גדל אף יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'לא כל הבנקים נותנים קרן שווה - למה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הבנקים לא מחויבים להציעה. לאומי ומזרחי-טפחות הם הנפוצים שמציעים. עם פחות תחרות על המוצר, כוח המיקוח שלך נמוך יותר גם בתנאי הריבית.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה עדיף לזוג צעיר עם הכנסה רגילה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שפיצר ברוב המקרים. ההחזר הקבוע והנמוך יותר בשנים הראשונות נותן נשימה בתקופה שבה ההוצאות גדולות - ריהוט, ילדים, שיפוצים. הגמישות שווה יותר מהחיסכון התיאורטי.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם כדאי לעשות פירעון מוקדם בשפיצר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בהחלט. בשפיצר, כל שקל שמפרעים מוקדם חוסך יותר ריבית עתידית ומקצר את ההלוואה בצורה משמעותית, כי יתרת הקרן עדיין גבוהה. פירעון מוקדם בשפיצר עשוי לחסוך יותר מאשר מעבר לקרן שווה.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'mah-ze',        label: 'מה זה לוח סילוקין?' },
  { id: 'shpitzer',      label: 'לוח שפיצר' },
  { id: 'keren-shava',   label: 'לוח קרן שווה' },
  { id: 'hashvaah',      label: 'טבלת השוואה מספרית' },
  { id: 'mah-zol',       label: 'מה זול יותר?' },
  { id: 'lemi-keren',    label: 'למי קרן שווה מתאימה?' },
  { id: 'bank-metzuyav', label: 'האם הבנק חייב להציע?' },
  { id: 'shilub',        label: 'אפשר לשלב את השניים?' },
  { id: 'faq',           label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function ShpitzerMolKerenShavaPage() {

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
          { label: 'לוח שפיצר מול קרן שווה' },
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
              לוח שפיצר מול קרן שווה: ההשוואה האמיתית
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
            שאלו עשרה אנשים איזה לוח סילוקין זול יותר. רובם יאמרו קרן שווה. רובם טועים,
            לפחות בשאלה.
          </p>
          <p className={p}>
            זאת לא שאלה של &quot;מה זול יותר&quot;. זאת שאלה של &quot;מה נכון לך, עכשיו,
            עם הכסף שיש לך&quot;.
          </p>

          {/* Section 1 */}
          <h2 id="mah-ze" className={h2}>רגע, מה זה בכלל לוח סילוקין?</h2>
          <p className={p}>
            לפני שמשווים, צריך להבין מה משווים. לוח סילוקין הוא פשוט התכנית שלפיה אתה
            מחזיר את ההלוואה. כל חודש אתה משלם קרן (את הכסף שלוות) וריבית (המחיר שהבנק
            גובה). הלוח קובע איך מחלקים את שניהם בכל חודש.
          </p>
          <p className={p}>
            שתי שיטות עיקריות קיימות בישראל: שפיצר וקרן שווה.
          </p>

          {/* Section 2 */}
          <h2 id="shpitzer" className={h2}>לוח שפיצר: ההחזר הקבוע</h2>
          <p className={p}>
            בשפיצר, אתה משלם אותו סכום בכל חודש לאורך כל חיי ההלוואה. נוח. צפוי. קל
            לתקצוב.
          </p>
          <p className={p}>
            הבעיה: בשנים הראשונות, רוב הכסף שאתה משלם הולך לריבית, לא לקרן. אם לקחת
            משכנתא של ₪1,000,000 ל-25 שנה, בשנה הראשונה אתה מוחזר בעיקר ריבית. הקרן
            יורדת לאט מאוד.
          </p>
          <p className={p}>
            זה לא רמאות. זו מתמטיקה. ולבנק זה כמובן מתאים יותר.
          </p>

          {/* Section 3 */}
          <h2 id="keren-shava" className={h2}>לוח קרן שווה: ההחזר היורד</h2>
          <p className={p}>
            בקרן שווה, מחלקים את הקרן במספר החודשים ומחזירים את אותו חלק קרן כל חודש.
            אבל הריבית יורדת כי יתרת הקרן קטנה.
          </p>
          <p className={p}>
            התוצאה: ההחזר הראשון הוא הגבוה ביותר. מכאן הוא יורד בהדרגה עד לסוף ההלוואה.
          </p>
          <p className={p}>
            דוגמה: ₪1,000,000 ל-25 שנה בריבית 5%. ההחזר הראשון בקרן שווה יהיה כ-₪7,500.
            אחרי 10 שנים הוא יירד לכ-₪5,800. בסוף ההלוואה, פחות מ-₪4,000.
          </p>

          {/* Section 3b: Side-by-side comparison table */}
          <h2 id="hashvaah" className={h2}>טבלת השוואה מספרית: ₪1,000,000, 25 שנה, ריבית 5%</h2>
          <p className={p}>
            כדי להבין את ההבדל, הכי טוב לראות מספרים על אותה הלוואה בדיוק:
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">פרמטר</th>
                  <th className="px-4 py-3 font-semibold text-right">לוח שפיצר</th>
                  <th className="px-4 py-3 font-semibold text-right">לוח קרן שווה</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['החזר חודשי ראשון', '₪5,846', '₪7,500'],
                  ['החזר חודשי אחרי 10 שנים', '₪5,846', '₪5,833'],
                  ['החזר חודשי אחרי 20 שנים', '₪5,846', '₪4,167'],
                  ['יתרת חוב אחרי 5 שנים', '₪879,000', '₪800,000'],
                  ['יתרת חוב אחרי 10 שנים', '₪737,000', '₪600,000'],
                  ['סך ריבית כוללת', '₪753,800', '₪627,100'],
                  ['הפרש ריבית', '-', 'חיסכון ₪126,700'],
                ].map(([param, shpitzer, keren], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}>
                    <td className="px-4 py-3 font-medium text-accent-800 border border-accent-100">{param}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{shpitzer}</td>
                    <td className="px-4 py-3 font-semibold text-primary-700 border border-accent-100">{keren}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            קרן שווה חוסכת ₪126,700 לאורך 25 שנה. אבל שימו לב ליתרת החוב אחרי 5 שנים:
            בקרן שווה היא ₪800,000, בשפיצר ₪879,000. זה ההבדל המשמעותי אם מוכרים
            את הדירה או מחזרים את המשכנתא.
          </p>

          {/* Section 4 */}
          <h2 id="mah-zol" className={h2}>אז מה זול יותר?</h2>
          <p className={p}>
            קרן שווה זולה יותר בסך הריבית הכוללת. על אותה הלוואה, תשלם פחות ריבית לאורך
            זמן. זה עובדה מתמטית.
          </p>
          <p className={p}>
            אבל כאן מגיע הטוויסט שרוב האתרים לא מסבירים.
          </p>
          <p className={p}>
            אם אתה יכול לעמוד בהחזר ההתחלתי הגבוה של קרן שווה, אתה יכול גם לקחת שפיצר
            לתקופה קצרה יותר עם אותו החזר חודשי. ותחסוך אפילו יותר.
          </p>
          <p className={p}>
            דוגמה מספרית: החזר התחלתי של קרן שווה הוא ₪8,800 לחודש. אם במקום זאת לוקחים
            שפיצר עם החזר של ₪8,800 לחודש, תקופת ההלוואה מתקצרת מ-25 שנה ל-19.5 שנה.
            סך הריבית הכוללת? נמוך יותר מאשר בקרן שווה.
          </p>
          <p className={p}>
            <span className={strong}>כלל האצבע:</span>{' '}
            אם אתה יכול לעמוד בהחזר גבוה, שפיצר קצר עדיף על קרן שווה ארוך.
          </p>

          {/* Section 5 */}
          <h2 id="lemi-keren" className={h2}>אז למי קרן שווה כן מתאימה?</h2>
          <p className={p}>
            יש מצבים שבהם קרן שווה היא הבחירה הנכונה.
          </p>
          <p className={p}>
            אם אתה יודע מראש שתמכור את הדירה או תסגור את ההלוואה תוך 5 עד 10 שנים, קרן
            שווה עדיפה בצורה משמעותית. למה? כי בשפיצר, ב-10 השנים הראשונות, שילמת בעיקר
            ריבית. יתרת הקרן שלך עדיין גבוהה. בקרן שווה הורדת קרן בקצב מהיר, ויתרת
            החוב נמוכה משמעותית.
          </p>
          <p className={p}>
            עוד מצב שמתאים: אם אתה לוקח מסלול צמוד מדד או פריים. שם הריבית יכולה לעלות.
            להוריד קרן מהר זה ביטוח.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות את המספרים שלך?
              </p>
              <p className="text-accent-500 text-sm">
                השווה שפיצר מול קרן שווה במחשבון המשכנתא, בחינם ותוך שניות.
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

          {/* Section 6 */}
          <h2 id="bank-metzuyav" className={h2}>האם הבנק חייב להציע קרן שווה?</h2>
          <p className={p}>
            לא. הבנקים לא מחויבים להציע קרן שווה. בפועל, רוב הבנקים בישראל עובדים רק עם
            שפיצר. בנק לאומי ומזרחי-טפחות הם הבנקים הנפוצים שמציעים קרן שווה, אבל גם
            אצלם זה לא מובטח בכל מסלול.
          </p>
          <p className={p}>
            אם פנית לבנק וסרב לתת לך קרן שווה, הוא לא עושה שום דבר לא חוקי.
          </p>

          {/* Section 7 */}
          <h2 id="shilub" className={h2}>האם אפשר לשלב את השניים?</h2>
          <p className={p}>
            כן. וזה לעיתים הפתרון החכם ביותר.
          </p>
          <p className={p}>
            אסטרטגיה שיועצים ממליצים עליה: מסלול קבועה בשפיצר, מסלול פריים או צמוד מדד
            בקרן שווה. הרעיון פשוט: בחלק הצמוד, אתה רוצה להוריד קרן מהר לפני שהמדד או
            הריבית יאכלו אותך. בחלק הקבוע, שפיצר נותן יציבות ויכול להתקצר בקלות.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון המשכנתא"
            calculatorUrl="/tools/mortgage-calculator"
            teaser="הכנס את נתוני המשכנתא שלך ובדוק כמה כל שיטה עולה בפועל."
          />

          {/* Section 8: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה ההבדל בין שפיצר לקרן שווה במספרים?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                על הלוואה של ₪1,000,000 ל-25 שנה בריבית 5%: בשפיצר ההחזר החודשי קבוע בכ-₪5,800
                וסך הריבית הכוללת כ-₪750,000. בקרן שווה ההחזר מתחיל בכ-₪7,500 ויורד בהדרגה,
                וסך הריבית כ-₪625,000. אבל אם לוקחים שפיצר עם אותו החזר התחלתי של ₪7,500,
                התקופה מתקצרת והחיסכון גדל אף יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                לא כל הבנקים נותנים קרן שווה - למה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הבנקים לא מחויבים להציעה. לאומי ומזרחי-טפחות הם הנפוצים שמציעים. עם פחות
                תחרות על המוצר, כוח המיקוח שלך נמוך יותר גם בתנאי הריבית.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה עדיף לזוג צעיר עם הכנסה רגילה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                שפיצר ברוב המקרים. ההחזר הקבוע והנמוך יותר בשנים הראשונות נותן נשימה
                בתקופה שבה ההוצאות גדולות: ריהוט, ילדים, שיפוצים. הגמישות שווה יותר
                מהחיסכון התיאורטי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם כדאי לעשות פירעון מוקדם בשפיצר?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בהחלט. בשפיצר, כל שקל שמפרעים מוקדם חוסך יותר ריבית עתידית ומקצר את
                ההלוואה בצורה משמעותית, כי יתרת הקרן עדיין גבוהה. פירעון מוקדם בשפיצר
                עשוי לחסוך יותר מאשר מעבר לקרן שווה.
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
              <Link href="/guides/מחזור-משכנתא" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                מחזור משכנתא: מתי זה משתלם ומתי זה מלכודת
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          {/* Sources */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.kolzchut.org.il/he/משכנתה" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">משכנתא, כל-זכות</a>{' '}·{' '}
            <a href="https://www.boi.org.il/monetary-policy/interest-rate-decisions/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">ריבית בנק ישראל</a>
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

            {/* Calculator CTA */}
            <div className="card bg-primary-50/60 border-primary-100">
              <p className="text-sm font-semibold text-accent-800 mb-2">
                מחשבון משכנתא
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                השווה שפיצר מול קרן שווה עם המספרים שלך, בחינם.
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
