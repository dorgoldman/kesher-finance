import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* -- Canonical domain for this article -- */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/מסלולי-משכנתא`;

export const metadata: Metadata = {
  title: 'מסלולי משכנתא 2026: המדריך המלא לתמהיל',
  description:
    'קבועה, משתנה, פריים או זכאות? כל מסלולי המשכנתא בישראל מוסברים עם דוגמה מספרית לכמה תמהיל נכון שווה, ומה החוק מחייב לגבי הרכב המסלולים.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'מסלולי משכנתא: המדריך המלא לתמהיל הנכון',
    description:
      'קבועה, משתנה, פריים או זכאות? כל מסלולי המשכנתא בישראל מוסברים עם דוגמה מספרית לכמה תמהיל נכון שווה, ומה החוק מחייב לגבי הרכב המסלולים.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מסלולי משכנתא 2026: המדריך המלא לתמהיל',
    description:
      'קבועה, משתנה, פריים או זכאות? כל מסלולי המשכנתא בישראל מוסברים עם דוגמה מספרית.',
  },
};

/* -- JSON-LD -- */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'מסלולי משכנתא: המדריך המלא לתמהיל הנכון',
    description:
      'קבועה, משתנה, פריים או זכאות? כל מסלולי המשכנתא בישראל מוסברים עם דוגמה מספרית לכמה תמהיל נכון שווה, ומה החוק מחייב לגבי הרכב המסלולים.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
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
      { '@type': 'ListItem', position: 3, name: 'מסלולי משכנתא',  item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'כמה מסלולים כדאי לי לקחת, שניים? ארבעה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'אין מספר קסם. יש מגבלה אחת בחוק: לפחות שליש מהסכום חייב להיות במסלול שאינו משתנה. מעבר לזה, גם תמהיל של שני מסלולים בלבד, למשל שליש קבוע ושני שליש פריים, חוקי לגמרי.',
        },
      },
      {
        '@type': 'Question',
        name: 'כולם אומרים לי לקחת פריים כי הוא הכי זול. זה נכון?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'זול עכשיו, כן. פריים נותן בדרך כלל את ההחזר הנמוך ביותר בהתחלה. אבל "זול" ו"בטוח" הם שני דברים שונים, והזול ביותר לאורך זמן תלוי בכיוון שהריבית תיקח, ואף אחד לא יודע את זה מראש.',
        },
      },
      {
        '@type': 'Question',
        name: 'כבר לקחתי משכנתא בתמהיל לא טוב. יש מה לעשות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן, זה בדיוק מה שנקרא מחזור משכנתא, פנימי או חיצוני. יש לזה עלויות, אבל כשהפער בריביות משמעותי זה יכול להיות משתלם. הפירוט המלא נמצא במדריך על מחזור משכנתא.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ההבדל בין מסלול לבין שפיצר? זה לא אותו דבר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא. המסלול קובע איך הריבית מתנהגת, קבועה, משתנה או פריים. שפיצר וקרן שווה הן שיטות החזר, שקובעות איך מחלקים את התשלום החודשי בין קרן לריבית. אפשר לשלב כל מסלול עם כל שיטה.',
        },
      },
      {
        '@type': 'Question',
        name: 'אז אולי הכי פשוט לשים הכל במסלול אחד ולגמור עם זה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'זה בדיוק ההפך ממה שכדאי. פיזור בין מסלולים מפזר גם את הסיכון, בדיוק כמו תיק השקעות. משכנתא שכולה בפריים או כולה בקבועה מוותרת על היתרון הזה, וברוב המקרים גם לא חוקית.',
        },
      },
    ],
  },
];

/* -- Table of contents entries -- */
const TOC = [
  { id: 'mah-ze-maslul',       label: 'מה זה בעצם מסלולי משכנתא' },
  { id: 'kvua-lo-tzmudit',     label: 'ריבית קבועה לא צמודה' },
  { id: 'mishtenet-5shanim',   label: 'ריבית משתנה כל 5 שנים' },
  { id: 'praim',               label: 'פריים' },
  { id: 'zachut',              label: 'זכאות' },
  { id: 'mah-chok-mechaye',    label: 'מה החוק מחייב' },
  { id: 'dugma-spcifit',       label: 'דוגמה מספרית' },
  { id: 'lechot-tamlul',       label: 'איך לבחור תמהיל' },
  { id: 'tauyot-nfutzot',      label: 'שלוש טעויות נפוצות' },
  { id: 'faq',                 label: 'שאלות נפוצות' },
];

/* -- Shared prose typography helpers -- */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function MasloleyMashkantaPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'מסלולי משכנתא' },
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
              משכנתאות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              מסלולי משכנתא: המדריך המלא לתמהיל הנכון
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: 11 ביולי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            ₪79,000. זה בערך ההפרש, על פני חיי הלוואה, בין משכנתא שכולה בריבית קבועה לבין תמהיל מסלולי משכנתא מחושב, על אותה קרן בדיוק ובלי לוותר על יציבות.
          </p>
          <p className={p}>
            בבנק לאומי, הפועלים או מזרחי טפחות תקבלו טופס עם שלושה או ארבעה מסלולים, כל אחד עם ריבית משלו, ומצפים שתחליטו תוך פגישה אחת. רוב האנשים בוחרים לפי הריבית הכי נמוכה שרואים באותו רגע. זו לא שאלה של ריבית נמוכה. זו שאלה של הרכב נכון.
          </p>

          {/* Section 1 */}
          <h2 id="mah-ze-maslul" className={h2}>מה זה בעצם מסלולי משכנתא, ולמה יש בכלל כמה</h2>
          <p className={p}>
            משכנתא ישראלית כמעט אף פעם לא הלוואה אחת. היא בנויה מכמה "מסלולים", כל אחד עם שיטת ריבית שונה, ואתה בוחר איך לחלק את הסכום הכולל ביניהם. זה נקרא תמהיל.
          </p>
          <p className={p}>
            הסיבה שהבנקים בכלל מציעים כמה מסלולים היא ניהול סיכון, גם שלך וגם שלהם. ריבית קבועה נותנת ודאות אבל עולה יותר מראש. ריבית משתנה זולה יותר בהתחלה אבל חושפת אותך לתנודות בשוק. לאומי, הפועלים, מזרחי טפחות, דיסקונט וטפחות, כל הבנקים הגדולים מציעים בעיקר ארבעה סוגי מסלולים, וכל אחד מהם מתאים למשהו אחר.
          </p>

          {/* Section 2 */}
          <h2 id="kvua-lo-tzmudit" className={h2}>ריבית קבועה לא צמודה</h2>
          <p className={p}>
            זה המסלול הכי פשוט להבין. הריבית נקבעת ביום החתימה ולא זזה עד הסוף, גם אם בנק ישראל יעלה או יוריד ריבית עשר פעמים בדרך. ההחזר החודשי קבוע מהיום הראשון עד היום האחרון.
          </p>
          <p className={p}>
            היתרון הוא ודאות מוחלטת. אתה יודע בדיוק כמה תשלם בעוד עשר שנים. המחיר של הוודאות הזו הוא ריבית פתיחה גבוהה יותר מכל מסלול אחר, כי הבנק לוקח על עצמו את כל הסיכון שהריבית בשוק תעלה. יש גם מסלול קבועה צמודה למדד, פחות נפוץ היום, שבו הריבית קבועה אבל הקרן צמודה למדד המחירים לצרכן, כך שההחזר עולה עם האינפלציה גם בלי שינוי ריבית.
          </p>

          {/* Section 3 */}
          <h2 id="mishtenet-5shanim" className={h2}>ריבית משתנה כל 5 שנים</h2>
          <p className={p}>
            כאן הריבית קבועה לתקופה, בדרך כלל חמש שנים, ואז מתעדכנת מחדש לפי התנאים בשוק באותו רגע. אחרי העדכון היא שוב קבועה לחמש השנים הבאות.
          </p>
          <p className={p}>
            זה פשרה. פתיחה זולה יותר מקבועה טהורה, אבל בלי החשיפה היומיומית של מסלול פריים. רוב המסלולים האלה צמודים למדד, כך שגם בין עדכוני הריבית ההחזר יכול לזוז עם האינפלציה. מי שמתכנן למחזר או למכור תוך פחות מחמש שנים בדרך כלל לא מרוויח הרבה מהמסלול הזה, כי הוא לא מגיע לנקודת העדכון בכלל.
          </p>

          {/* Section 4 */}
          <h2 id="praim" className={h2}>פריים</h2>
          <p className={p}>
            מסלול פריים צמוד לריבית הפריים, שנקבעת על ידי בנק ישראל ומתעדכנת בכל שינוי ריבית שהוועדה המוניטרית מכריזה עליו. נכון ליולי 2026 ריבית בנק ישראל עומדת על 3.5% וריבית הפריים על 5% (ריבית בנק ישראל ועוד 1.5% קבוע).
          </p>
          <p className={p}>
            זה בדרך כלל המסלול הזול ביותר בטווח הקצר, וגם היחיד שאפשר לפרוע מוקדם בלי קנס משמעותי. המחיר הוא חשיפה מלאה לכל שינוי ריבית. מי שהיה עם משכנתא בפריים בין 2021 ל-2023 ראה את ההחזר שלו קופץ בעשרות אחוזים תוך שנה וחצי, בלי שום שינוי בגובה ההלוואה. הפירוט המלא של התקופה הזו, כולל דוגמה מספרית, נמצא במדריך על <a href="/guides/ריבית-פריים" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">ריבית פריים</a>.
          </p>

          {/* Section 5 */}
          <h2 id="zachut" className={h2}>זכאות</h2>
          <p className={p}>
            זה מסלול נפרד לגמרי, לא תלוי בבנק אלא במשרד הבינוי והשיכון. הוא מיועד בעיקר לזוגות צעירים, יחידים מעל גיל 30, משפחות חד הוריות, עולים חדשים, חיילים משוחררים ואנשים עם מוגבלות שרוכשים דירה ראשונה.
          </p>
          <p className={p}>
            הריבית קבועה וצמודה למדד, ומוגבלת ל-3% או ל-0.5% מתחת לריבית הממוצעת בשוק, הנמוך מביניהם. בתקופה הנוכחית, כשריבית השוק על משכנתאות רגילות גבוהה משמעותית מ-3%, הפער הזה שווה כסף אמיתי לאורך שנות ההחזר. יתרון נוסף: אין עמלת פירעון מוקדם על החלק הזה, כך שאפשר לסגור אותו בכל שלב בלי עלות. הסכום מוגבל לפי ניקוד זכאות אישי, לא לפי גובה המשכנתא הכולל, ומחייב תעודת זכאות מהבנק.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון המשכנתא"
            calculatorUrl="/tools/mortgage-calculator"
            teaser="רוצה לבנות תמהיל ולראות איך כל מסלול משפיע על ההחזר החודשי?"
          />

          {/* Section 6 */}
          <h2 id="mah-chok-mechaye" className={h2}>מה החוק מחייב</h2>
          <p className={p}>
            זה לא רק עניין של טעם אישי. הוראת ניהול בנקאי תקין 329 של בנק ישראל קובעת שהחלק המשתנה במשכנתא, כלומר פריים ומשתנה כל 5 שנים ביחד, לא יכול לעלות על שני שלישים מסך ההלוואה. לפחות שליש חייב להיות במסלול שאינו משתנה, בדרך כלל קבועה.
          </p>
          <p className={p}>
            זה לא מגבלה שרירותית. אחרי הזינוק בריבית בין 2021 ל-2023, שבו לווה בפריים ראו את ההחזר שלהם עולה בעשרות אחוזים תוך חודשים, הרגולטור החליט שאף בנק לא יאפשר תמהיל שחושף משפחה שלמה לתנודות שוק בבת אחת.
          </p>

          {/* Section 7 */}
          <h2 id="dugma-spcifit" className={h2}>דוגמה מספרית: מה תמהיל שונה עושה להחזר</h2>
          <p className={p}>
            בואו ניקח משכנתא של ₪1,000,000 ל-25 שנה ונשווה שלוש אפשרויות, בריביות טיפוסיות לדוגמה בלבד.
          </p>

          <div className="bg-accent-50 border border-accent-100 rounded-2xl p-6 my-6 space-y-3">
            <p className="text-accent-700">
              <span className={strong}>מסלול קבועה לא צמודה בלבד</span>, בריבית 4.9%: החזר חודשי של כ-<span className="font-mono">₪5,790</span>.
            </p>
            <p className="text-accent-700">
              <span className={strong}>מסלול פריים בלבד</span>, פריים מינוס 0.5% (כלומר 4.5% נכון להיום): החזר חודשי של כ-<span className="font-mono">₪5,560</span>. המסלול הזה לבדו גם לא חוקי מעל שני שלישים מהמשכנתא, וגם מסוכן.
            </p>
            <p className="text-accent-700">
              <span className={strong}>תמהיל של שליש קבועה, שליש פריים ושליש משתנה כל 5 שנים</span> בריבית פתיחה 3.9%: החזר חודשי של כ-<span className="font-mono">₪5,524</span>.
            </p>
          </div>

          <p className={p}>
            התמהיל המשולב יוצא זול יותר מהקבועה הטהורה, כ-₪264 בחודש, שזה כ-₪79,000 על פני 300 חודשים. במקביל, שני שלישים מהתמהיל חשופים לשינויי ריבית ולא כולו, בניגוד לתרחיש שבו הכל בפריים.
          </p>

          {/* Section 8 */}
          <h2 id="lechot-tamlul" className={h2}>איך לבחור תמהיל לפי המצב שלך</h2>
          <p className={p}>
            אין תשובה אחת נכונה, זה תלוי במה שקורה בחיים שלך בעשור הקרוב.
          </p>
          <p className={p}>
            מי שמתכנן למכור או למחזר תוך חמש עד שבע שנים, למשל זוג צעיר בדירה ראשונה שכבר יודע שיעבור לדירה גדולה יותר, ירוויח מלשים חלק גדול יחסית בפריים או במשתנה כל 5 שנים, כי סביר שלא יגיע לתקופה הארוכה שבה החשיפה מזיקה. מי שקונה דירה למגורים לטווח ארוך, בלי כוונה למכור, בדרך כלל ירוויח מלהטות את התמהיל לכיוון קבועה, גם במחיר ריבית פתיחה גבוהה יותר, כי הוודאות שווה יותר ככל שהאופק ארוך יותר. מי שעומד בקריטריונים למסלול זכאות צריך לממש אותו קודם לכל דבר אחר, זו ריבית שאין לה תחליף בשוק החופשי.
          </p>
          <p className={p}>
            חישוב כמה משכנתא אפשר לקחת מלכתחילה, לפי המשכורת שלך, מוסבר בפירוט <a href="/guides/כמה-משכנתא-לפי-משכורת" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">במדריך הזה</a>. מי שכבר סוגר משכנתא לדירה ראשונה יכול לקרוא את <a href="/guides/משכנתא-ראשונה" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">המדריך המלא לתהליך</a>.
          </p>

          {/* Section 9 */}
          <h2 id="tauyot-nfutzot" className={h2}>שלוש טעויות נפוצות בבחירת מסלולים</h2>
          <p className={p}>
            <span className={strong}>לשים הכל בפריים כי הוא הכי זול עכשיו.</span> זה בדיוק מה שקרה למי שלקח משכנתא ב-2020 ולא הבין את הסיכון. הריבית הזולה של היום היא לא הבטחה לעוד עשרים שנה.
          </p>
          <p className={p}>
            <span className={strong}>להתעלם ממסלול זכאות מתוך הנחה שהוא "לא רלוונטי אליי".</span> קריטריוני הזכאות רחבים יותר ממה שרוב האנשים חושבים, כולל יחידים מעל גיל 30 שרוכשים דירה ראשונה, לא רק זוגות צעירים.
          </p>
          <p className={p}>
            <span className={strong}>לבחור תמהיל לפי מה שהחבר עשה.</span> תמהיל שמתאים למישהו שמתכנן למכור בעוד שלוש שנים לא מתאים למישהו שקונה בית לכל החיים, גם אם שני הם קונים בדיוק את אותה דירה באותו מחיר.
          </p>

          {/* Section 10 */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-accent-800 mb-2">כמה מסלולים כדאי לי לקחת, שניים? ארבעה?</h3>
              <p className={p}>
                אין מספר קסם. יש מגבלה אחת בחוק: לפחות שליש מהסכום חייב להיות במסלול שאינו משתנה. מעבר לזה, גם תמהיל של שני מסלולים בלבד, למשל שליש קבוע ושני שליש פריים, חוקי לגמרי.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-800 mb-2">כולם אומרים לי לקחת פריים כי הוא הכי זול. זה נכון?</h3>
              <p className={p}>
                זול עכשיו, כן. פריים נותן בדרך כלל את ההחזר הנמוך ביותר בהתחלה. אבל "זול" ו"בטוח" הם שני דברים שונים, והזול ביותר לאורך זמן תלוי בכיוון שהריבית תיקח, ואף אחד לא יודע את זה מראש.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-800 mb-2">כבר לקחתי משכנתא בתמהיל לא טוב. יש מה לעשות?</h3>
              <p className={p}>
                כן, זה בדיוק מה שנקרא מחזור משכנתא, פנימי או חיצוני. יש לזה עלויות, אבל כשהפער בריביות משמעותי זה יכול להיות משתלם. הפירוט המלא נמצא ב<a href="/guides/מחזור-משכנתא" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">מדריך על מחזור משכנתא</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-800 mb-2">מה ההבדל בין מסלול לבין שפיצר? זה לא אותו דבר?</h3>
              <p className={p}>
                לא. המסלול קובע איך הריבית מתנהגת, קבועה, משתנה או פריים. שפיצר וקרן שווה הן שיטות החזר, שקובעות איך מחלקים את התשלום החודשי בין קרן לריבית. אפשר לשלב כל מסלול עם כל שיטה. הסבר מלא <a href="/guides/שפיצר-מול-קרן-שווה" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">במדריך שפיצר מול קרן שווה</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-accent-800 mb-2">אז אולי הכי פשוט לשים הכל במסלול אחד ולגמור עם זה?</h3>
              <p className={p}>
                זה בדיוק ההפך ממה שכדאי. פיזור בין מסלולים מפזר גם את הסיכון, בדיוק כמו תיק השקעות. משכנתא שכולה בפריים או כולה בקבועה מוותרת על היתרון הזה, וברוב המקרים גם לא חוקית.
              </p>
            </div>
          </div>

          {/* Related guides */}
          <div className="mt-12 pt-8 border-t border-accent-100">
            <h3 className="text-lg font-bold text-accent-900 mb-4">קרא גם</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/guides/ריבית-פריים" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                  ריבית פריים: מה זה ואיך זה משפיע עליך
                </a>
              </li>
              <li>
                <a href="/guides/מחזור-משכנתא" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                  מחזור משכנתא: מתי זה משתלם ומתי זה מלכודת
                </a>
              </li>
              <li>
                <a href="/guides/שפיצר-מול-קרן-שווה" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                  לוח שפיצר מול קרן שווה: ההשוואה האמיתית
                </a>
              </li>
              <li>
                <a href="/guides/משכנתא-ראשונה" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                  המדריך המלא למשכנתא ראשונה
                </a>
              </li>
              <li>
                <a href="/guides/כמה-משכנתא-לפי-משכורת" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                  כמה משכנתא אפשר לקחת לפי המשכורת שלך
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-accent-100 text-sm text-accent-500">
            <p><strong>אין באמור ייעוץ פיננסי.</strong> המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.</p>
          </div>

        </article>

        {/* SIDEBAR */}
        <aside className="hidden lg:flex flex-col gap-6">
          <AdSlot variant="sidebar" />
        </aside>

      </div>

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />
    </div>
  );
}
