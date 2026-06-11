import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/משכנתא-ראשונה';

export const metadata: Metadata = {
  title: 'משכנתא ראשונה 2026',
  description:
    'לוקחים משכנתא לראשונה? הון עצמי, תמהיל, זכאות, ביטוח ואיך לא להיות "טרף קל" לבנק. כל מה שצריך לדעת.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'משכנתא ראשונה 2026 - המדריך המלא לזוגות ורוכשים',
    description:
      'לוקחים משכנתא לראשונה? כל מה שצריך לדעת: הון עצמי, תמהיל, זכאות, ביטוח ואיך לא להיות "טרף קל" לבנק.',
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
      { '@type': 'ListItem', position: 3, name: 'משכנתא ראשונה', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'כמה הון עצמי צריך לדירה ראשונה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לפחות 25% משווי הדירה לפי הנחיות בנק ישראל. לדירה של 2,000,000 שקל צריך לפחות 500,000 שקל הון עצמי. ככל שמביאים יותר הון עצמי, הריבית שמקבלים טובה יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לקחת משכנתא ראשונה בלי להיות נשואים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. זוגות ידועים בציבור ואף רווקים יכולים לקחת משכנתא. הבנק בודק יכולת החזר, לא מצב משפחתי. ביחד, עם הכנסות משותפות, קל יותר לקבל אישור לסכום גבוה.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן לוקח לקבל אישור עקרוני למשכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בדרך כלל שבועיים עד שלושה שבועות. מומלץ להוציא אישור עקרוני לפני שמתחילים לחפש דירה ברצינות, כדי לדעת בדיוק מה התקציב.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם יועץ משכנתא שווה את הכסף?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ברוב המקרים, כן. יועץ עצמאי יודע באילו ריביות לנהל משא ומתן ומכיר את ההבדלים בין הבנקים. עלות הייעוץ (כ-3,000-6,000 שקל) חוזרת בדרך כלל בחיסכון על הריביות.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'hon-atmi',        label: 'כמה הון עצמי צריך?' },
  { id: 'tmahil',          label: 'מה זה תמהיל משכנתא?' },
  { id: 'zkaot',           label: 'הלוואת זכאות' },
  { id: 'mehir-mishtaken', label: 'מחיר למשתכן' },
  { id: 'bituah',          label: 'ביטוח משכנתא' },
  { id: 'shlahim',         label: 'שלבי התהליך' },
  { id: 'tauyot',          label: 'שלוש טעויות נפוצות' },
  { id: 'dugma',           label: 'דוגמה: כמה צריך ביום החתימה' },
  { id: 'mikuach',         label: 'להתמקח על הריבית' },
  { id: 'faq',             label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function MashkantaRishonePage() {

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
          { label: 'משכנתא ראשונה' },
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
              משכנתא ראשונה: המדריך המלא
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
            חתמתם על חוזה רכישה. עכשיו צריך לסגור את המשכנתא.
          </p>
          <p className={p}>
            הבנק יושב מולכם עם שלל מסלולים, ריביות ומושגים. אתם לחוצים ומבולבלים. זה
            בדיוק המצב שבו עושים טעויות יקרות.
          </p>
          <p className={p}>
            המדריך הזה מכסה את כל השלבים: הון עצמי, תמהיל, זכאות, ביטוח, ואיפה הכסף
            האמיתי הולך לאיבוד.
          </p>

          {/* Section 1 */}
          <h2 id="hon-atmi" className={h2}>כמה הון עצמי צריך?</h2>
          <p className={p}>
            לדירה ראשונה: לפחות 25% משווי הדירה. הבנק מממן עד 75%.
          </p>
          <p className={p}>
            25% זה המינימום לקבלת ההלוואה. ככל שמביאים יותר הון עצמי, מקבלים ריבית
            טובה יותר. מי שמביא 40% ומעלה נכנס למדרגת ריבית נמוכה יותר. מי שמביא מעל
            55% מקבל את הריבית הנמוכה ביותר שהבנק מציע.
          </p>
          <p className={p}>
            שתי טעויות נפוצות שכדאי להכיר: הראשונה היא לשכוח שרכישת דירה כוללת הוצאות
            מעבר למחיר הדירה עצמה. שכר עורך דין, שמאי, מס רכישה, הובלה ושיפוץ יכולים
            להגיע ל-3-5% נוספים ממחיר הדירה. השנייה היא לתכנן הון עצמי בדיוק על הקצה,
            ואז לגלות שהוצאות הרכישה אכלו ממנו.
          </p>

          {/* Section 2 */}
          <h2 id="tmahil" className={h2}>מה זה תמהיל משכנתא?</h2>
          <p className={p}>
            המשכנתא לא צריכה להיות מסלול אחד. היא בנויה מכמה מסלולים יחד. זה נקרא
            תמהיל.
          </p>
          <p className={p}>
            בנק ישראל קבע שלא ניתן לשים יותר מ-66% מהמשכנתא בריבית משתנה. לפחות שליש
            חייב להיות בריבית קבועה. מעבר לזה, הבנק יציע "סלים אחידים" לצורך השוואה,
            אבל התמהיל הנכון עבורכם תלוי בתזרים שלכם, בתחזית הריבית ובכמה שנים אתם
            מתכננים להחזיק בנכס.
          </p>
          <p className={p}>
            כלל אצבע שעובד לרוב הזוגות: כ-33% קל"צ (ריבית קבועה לא צמודה), כ-33% פריים,
            וכ-33% בריבית משתנה צמודה. אין תמהיל אחד שמתאים לכולם.
          </p>

          {/* Section 3 */}
          <h2 id="zkaot" className={h2}>הלוואת זכאות: כסף זול שמגיע ממשרד השיכון</h2>
          <p className={p}>
            זוגות צעירים שעומדים בקריטריונים מסוימים זכאים להלוואה מסובסדת ממשרד הבינוי
            והשיכון. הריבית נמוכה יותר, ואין עמלת פירעון מוקדם.
          </p>
          <p className={p}>
            הזכאות נקבעת לפי ניקוד: שנות נישואין, מספר ילדים, אחים ואחיות, שירות צבאי.
            ככל שהניקוד גבוה יותר, גדל סכום ההלוואה.
          </p>
          <p className={p}>
            כדאי להוציא תעודת זכאות לפני שמתחילים לחפש דירה, לא אחרי שחותמים על חוזה.
            זה חינמי ולוקח כמה ימים. פונים לאחד מסניפי הבנק למשכנתאות.
          </p>
          <p className={p}>
            סכום הזכאות לרוב לא מספיק לרכישת הדירה כולה, ולוקחים משכנתא משלימה מהבנק
            לצד ההלוואה המסובסדת.
          </p>

          {/* Section 4 */}
          <h2 id="mehir-mishtaken" className={h2}>מחיר למשתכן: ההנחה שמגיעה עם סיבוך</h2>
          <p className={p}>
            תוכניות ממשלתיות שמאפשרות רכישת דירה במחיר נמוך מהשוק. מחיר למשתכן מציע
            הנחה של 20-25% ממחיר השוק. דירה בהנחה מציעה הנחה דומה באזורים שונים.
          </p>
          <p className={p}>
            יתרון שרבים לא מכירים: בבנק, המשכנתא מחושבת לפי שווי השוק של הדירה, לא לפי
            מחיר הרכישה המוזל. זה אומר שאפשר לקבל מימון גבוה יותר.
          </p>
          <p className={p}>
            החיסרון: מי שרוכש דירה במחיר למשתכן ומוכר תוך כמה שנים משלם מס שבח גבוה.
            ההפרש בין מחיר הרכישה לשוק הפתוח גדול, ומס השבח מחושב עליו. כדאי לחשב את
            זה לפני שמתחייבים.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצים לחשב את ההחזר החודשי?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון המשכנתא מחשב לפי תמהיל, ריבית ותקופה תוך שניות.
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

          {/* Section 5 */}
          <h2 id="bituah" className={h2}>ביטוח משכנתא: הטעות שעולה אלפים</h2>
          <p className={p}>
            הבנק ידרוש שני ביטוחים: ביטוח חיים וביטוח מבנה. שניהם חובה.
          </p>
          <p className={p}>
            הטעות הנפוצה: לקנות את הביטוח דרך הבנק. הבנק מציע ביטוח של חברות שיש להן
            הסכם איתו. אבל אתם לא חייבים לקחת את הביטוח מהבנק. אפשר לרכוש ביטוח חיים
            למשכנתא מכל חברת ביטוח מורשית ולהציג אותו לבנק כבטוחה.
          </p>
          <p className={p}>
            ההפרש בין ביטוח דרך הבנק לביטוח עצמאי יכול להגיע לכמה מאות שקלים בחודש.
            על פני 25 שנה, זה עשרות אלפי שקלים.
          </p>
          <p className={p}>
            לפני שחותמים על ביטוח, בקשו הצעות מכלל, מגדל, מנורה והפניקס. השוו. רק אז
            חזרו לבנק.
          </p>

          {/* Section 6 */}
          <h2 id="shlahim" className={h2}>שלבי התהליך בקצרה</h2>
          <p className={p}>
            <span className="font-semibold text-accent-800">אישור עקרוני.</span> לפני
            החתימה על חוזה רכישה, מוציאים אישור עקרוני מהבנק. זה מסמך שמראה למוכרים
            שהבנק מוכן לתת לכם משכנתא בסכום מסוים. לוקח שבועיים עד שלושה שבועות.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">משא ומתן עם כמה בנקים.</span>{' '}
            אחרי חתימת החוזה, פונים לפחות לשלושה בנקים. לאומי, הפועלים, מזרחי טפחות,
            דיסקונט. כל אחד נותן הצעה לפי אותו תמהיל שביקשתם. משווים בין ההצעות.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">שמאות.</span> הבנק הנבחר
            שולח שמאי לבדוק את הנכס ולאשר את שוויו.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">חתימה והעברת כספים.</span>{' '}
            חותמים על מסמכי המשכנתא ורק אז מועברים כספי המשכנתא למוכר.
          </p>

          {/* Section 7 */}
          <h2 id="tauyot" className={h2}>שלוש טעויות שזוגות צעירים עושים</h2>
          <p className={p}>
            <span className="font-semibold text-accent-800">לפנות לבנק אחד בלבד.</span>{' '}
            הבנק הראשון שפונים אליו יודע שאתם לחוצים. הוא לא תמיד ייתן את ההצעה הטובה
            ביותר. פנו תמיד לפחות לשלושה בנקים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">להתמקד רק בהחזר החודשי.</span>{' '}
            החזר חודשי נמוך לאורך 30 שנה עולה הרבה יותר מהחזר גבוה לאורך 20 שנה.
            תסתכלו על סך הריבית הכולל, לא רק על הסכום החודשי.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">לחתום על ביטוח הבנק מבלי
            להשוות.</span> ראו את הסעיף על ביטוח משכנתא. זה המקום שבו הרוב מפסיד
            הכי הרבה כסף מבלי לשים לב.
          </p>

          {/* Section: worked example, total costs */}
          <h2 id="dugma" className={h2}>דוגמה: כמה צריך להביא ביום חתימת המשכנתא</h2>
          <p className={p}>
            יובל ושירן מבאר שבע רכשו דירה ב-₪1,800,000. הנה הפירוט המלא של מה שהוצאו
            בתהליך:
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">הוצאה</th>
                  <th className="px-4 py-3 font-semibold text-right">סכום</th>
                  <th className="px-4 py-3 font-semibold text-right">הערות</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['הון עצמי (25%)', '₪450,000', 'מינימום לפי בנק ישראל'],
                  ['מס רכישה (דירה ראשונה)', '₪14,500', 'על הסכום שמעל פטור'],
                  ['שכר טרחת עו"ד', '₪12,000', 'עו"ד רוכש + רישום'],
                  ['שמאות', '₪2,500', 'מטעם הבנק'],
                  ['ביטוח מבנה + חיים (שנה ראשונה)', '₪4,200', 'אם לא קונים מחוץ לבנק'],
                  ['הובלה ושיפוץ קל', '₪15,000', 'אומדן ממוצע'],
                  ['סך הכל נדרש מחוץ למשכנתא', '₪498,200', ''],
                ].map(([item, amount, note], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}>
                    <td className="px-4 py-3 font-medium text-accent-800 border border-accent-100">{item}</td>
                    <td className="px-4 py-3 font-semibold text-primary-700 border border-accent-100">{amount}</td>
                    <td className="px-4 py-3 text-accent-500 border border-accent-100">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            כלומר, על דירה של ₪1,800,000 צריך בפועל כמעט ₪500,000 ביום החתימה, לא
            ₪450,000. יובל ושירן תכננו על ₪450,000 בלבד, וגילו את הפער כשבוע לפני
            החתימה. הם נאלצו לבקש הלוואה קטנה מהורים כדי לגשר.
          </p>
          <p className={p}>
            הכלל הפשוט: תכנן הון עצמי של 28%-30% ממחיר הדירה, לא 25% בלבד. ה-3-5%
            הנוספים הם ההוצאות הנלוות שרוב הזוגות לא מחשבים מראש.
          </p>

          {/* Section: negotiation */}
          <h2 id="mikuach" className={h2}>להתמקח על הריבית: הכסף הגדול ביותר שתחסוך</h2>
          <p className={p}>
            ההצעה הראשונה של הבנק היא אף פעם לא ההצעה הטובה ביותר שלו. היא נקודת הפתיחה
            למשא ומתן, גם אם הבנקאי מציג אותה כאילו היא סופית.
          </p>
          <p className={p}>
            הסדר נכון: קודם עושים שיעורי בית, אחר כך מתמקחים. בלי לדעת מה הריבית שאנשים
            מקבלים השבוע בבנק לאומי, בהפועלים, במזרחי טפחות ובדיסקונט, אין לך עוגן
            להתמקח סביבו. עם שלוש הצעות כתובות ביד, אתה מנהל את השיחה, לא הבנקאי.
          </p>
          <p className={p}>
            מה שבאמת ניתן להורדה הוא המרווח שהבנק מוסיף מעל עוגן הריבית בכל מסלול. גם
            עמלת פתיחת תיק, ביטוח המשכנתא, ולפעמים שכר השמאי, הכל פתוח לשיחה. תבקש
            במפורש. הכי גרוע שיגידו לא.
          </p>
          <p className={p}>
            המספרים מצדיקים את אי-הנוחות. הורדה של 0.3% בלבד על משכנתא של ₪1,000,000
            ל-25 שנה חוסכת כ-₪160 בחודש, קרוב ל-₪48,000 לאורך חיי ההלוואה. זו אחת
            ההחלטות המשתלמות שתעשה בכל התהליך.
          </p>
          <p className={p}>
            מי שלא נוח לו להתמקח מול הבנק שוכר יועץ משכנתאות עצמאי שעושה את זה בשבילו.
            היועץ מכיר את הריביות האמיתיות ויודע מתי הבנק עוד יכול לזוז, והעלות שלו
            כמעט תמיד חוזרת בחיסכון על הריבית.
          </p>
          <p className={p}>
            הטעות היחידה שאי אפשר לתקן כאן היא פשוט לא לבקש. רוב הזוגות חותמים על ההצעה
            הראשונה כי הם לחוצים ומותשים. הבנק סומך על זה. אל תיתן לו.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון המשכנתא"
            calculatorUrl="/tools/mortgage-calculator"
            teaser="הרכב תמהיל ותראה כמה יוצא החזר חודשי לפני שנפגשים עם הבנק."
          />

          {/* Section 8: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה הון עצמי צריך לדירה ראשונה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לפחות 25% משווי הדירה לפי הנחיות בנק ישראל. לדירה של ₪2,000,000 צריך
                לפחות ₪500,000 הון עצמי. ככל שמביאים יותר, הריבית שמקבלים טובה יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם אפשר לקחת משכנתא ראשונה בלי להיות נשואים?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. זוגות ידועים בציבור ואף רווקים יכולים לקחת משכנתא. הבנק בודק יכולת
                החזר, לא מצב משפחתי. ביחד, עם הכנסות משותפות, קל יותר לקבל אישור לסכום
                גבוה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה זמן לוקח לקבל אישור עקרוני למשכנתא?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בדרך כלל שבועיים עד שלושה שבועות. מומלץ להוציא אישור עקרוני לפני שמתחילים
                לחפש דירה ברצינות, כדי לדעת בדיוק מה התקציב שלכם.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם יועץ משכנתא שווה את הכסף?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                ברוב המקרים, כן. יועץ עצמאי יודע באילו ריביות לנהל משא ומתן ומכיר את
                ההבדלים בין הבנקים. עלות הייעוץ (כ-₪3,000-6,000) חוזרת בדרך כלל
                בחיסכון על הריביות.
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
            <a href="https://www.boi.org.il/financial-markets/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">בנק ישראל, מגבלות מימון משכנתא</a>{' '}·{' '}
            <a href="https://www.kolzchut.org.il/he/משכנתה" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">משכנתא והלוואת זכאות, כל-זכות</a>
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
