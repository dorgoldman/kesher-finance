import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME, OG_IMAGE } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/mashkanta-lzug-tzair`;

export const metadata: Metadata = {
  title: 'משכנתא לזוג צעיר - מדריך לתעודת זכאות ודיור זול',
  description: 'הלוואת זכאות מעניקה ריבית מסובסדת למשכנתא. תנאי זכאות, מסלולים, ודוגמה מעשית מול משכנתא רגילה.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'משכנתא לזוג צעיר: הלוואת זכאות ודיור פחות יקר',
    description: 'הלוואת זכאות מעניקה ריבית מסובסדת למשכנתא. תנאי זכאות, מסלולים, ודוגמה מעשית.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'משכנתא לזוג צעיר: הלוואת זכאות ודיור זול',
    description: 'הלוואת זכאות מעניקה ריבית מסובסדת למשכנתא. תנאי זכאות, מסלולים, ודוגמה מעשית.',
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'משכנתא לזוג צעיר: הלוואת זכאות ודיור פחות יקר',
    description: 'הלוואת זכאות מעניקה ריבית מסובסדת למשכנתא. תנאי זכאות, מסלולים, ודוגמה מעשית.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-08-15',
    dateModified: '2026-08-15',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'משכנתא לזוג צעיר', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'האם אפשר לעבור ממשכנתא רגילה לזכאות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא ישירות. זכאות מנופקת בעת קנייה. אתה לא יכול "להחליף" משכנתא קיימת לזכאות: צריך למכור ולקנות דירה חדשה, או למחזר ולהתחיל הלוואה חדשה, מה שנדיר.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם זכאות משפיעה על מס?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא. זכאות לא תוריד את הזקיפה שלך למס או את נקודות הזיכוי שלך. היא רק הנחה על ריבית.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה קורה אם אני מוכר את הדירה לפני 20 שנים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בדרך כלל, אתה רק משלם את היתרה כמו בכל משכנתא. אבל בדוק עם הבנק: יש בנקים שיש להם קנסות ספציפיים למשכנתא עם זכאות אם אתה מוכר מהר מדי.',
        },
      },
    ],
  },
];

export default function Page() {
  return (
    <div className="w-full">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'ראשי', href: '/' },
          { label: 'מדריכים', href: '/guides' },
          { label: 'משכנתא לזוג צעיר', href: CANONICAL },
        ]}
      />

      <AdSlot variant="header" />

      <div className="container-page py-8 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-8">
        <article className="prose prose-invert prose-rtl max-w-none">
          <div className="mb-6">
            <span className="badge-primary">משכנתאות</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight mb-4">משכנתא לזוג צעיר</h1>
          <p className="text-accent-500 mb-8">הלוואת זכאות ודיור פחות יקר</p>

          <p className="text-lg leading-relaxed mb-6">
            הפגישה בבנק נגמרה, ויש בידך שני מסלולים: משכנתא רגילה או משכנתא לזוג צעיר עם "תעודת זכאות" ממשרד הבינוי. המסלול השני מגיע בריבית מסובסדת (זולה יותר). אבל הוא לא מתאים לכולם, והוא לא תמיד המסלול הכי משתלם. הנה הפרטים.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">בקצרה: המספרים עכשיו</h2>
          <ul className="list-disc list-inside space-y-2 mb-6 text-accent-600">
            <li>תעודת זכאות מורידה את ריבית המשכנתא <strong>ב-0.5% לפחות</strong></li>
            <li>הריבית המקסימלית שתשלם בהלוואה מסובסדת היא <strong>3%</strong>, גם אם ריבית פריים של בנק ישראל היא גבוהה יותר</li>
            <li>תנאי זכאות: זוג בו שני בני הזוג מעל 35 שנים, או יחיד/ה עד גיל 45 שלא הייתה לו/ה דירה קודמת (נכון ל-2026)</li>
            <li>בתכניות מסוימות צריך "ניקוד" של לפחות 599 נקודות (תעודת זכאות מהבנק)</li>
            <li>בדוגמה מעשית להלן, ההפרש בין משכנתא רגילה למסובסדת מגיע ל-<strong>₪274,560 על 20 שנה</strong>: תלוי בריבית הפריים הנוכחית</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">מה זו תעודת זכאות?</h2>
          <p className="text-accent-600 mb-4">
            הממשלה הישראלית מסבסדת חלק מהמשכנתאות: כלומר היא לוקחת על עצמה חלק מהריבית כדי להפוך דיור לזול יותר לצעירים ולזוגות צעירים. התעודה היא הזיהוי שלך כקונה דירה שזכאי להנחה הזו.
          </p>
          <p className="text-accent-600 mb-6">
            הזכאות לא אוטומטית. היא תלויה בגיל, בהעדר רכוש קודם, בתנאים מסוימים, ובקבלה מהבנק. זה בדיוק כמו ציון אשראי למסלולי משכנתא רגילה.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">מי זכאי למשכנתא לזוג צעיר?</h2>
          <p className="text-accent-600 mb-4">תנאי הזכאות (נכון ל-2026):</p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm text-right">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right">שם התנאי</th>
                  <th className="px-4 py-2 text-right">מה זה אומר</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-accent-50/60 border-b">
                  <td className="px-4 py-2">גיל</td>
                  <td className="px-4 py-2">זוג שבו שני בני הזוג מעל 35, או יחיד/ה עד גיל 45 שלא הייתה לו/ה דירה בבעלות קודם לכן</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">ניקוד זכאות</td>
                  <td className="px-4 py-2">ציון 599 ויותר בתעודת זכאות, שמנפיק הבנק</td>
                </tr>
                <tr className="bg-accent-50/60 border-b">
                  <td className="px-4 py-2">דירה ראשונה</td>
                  <td className="px-4 py-2">מחסן או חניה בבעלות אינם פוסלים אותך; דירה ראשונה בלבד (לא רכישת דירה נוספת)</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2">מחיר מקסימלי</td>
                  <td className="px-4 py-2">התנאים שונים בין מחוזות, אבל תקרה של כ-₪2,000,000-2,500,000 בממוצע</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-accent-600 mb-6">
            הבנק בודק את הנקודות שלך בדומה לנקודות משכנתא רגילה: הכנסה, יחס החזר/הכנסה, היסטוריית אשראי. אם יש לך ניקוד גבוה למשכנתא רגילה, בדרך כלל יש לך גם ניקוד גבוה לזכאות.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">מה ההבדל: הלוואת זכאות מול משכנתא רגילה?</h2>
          <p className="text-accent-600 mb-6">
            כאן הנקודה הגדולה. משכנתא רגילה: הבנק מחליט על הריבית, וזה תלוי בפריים. הלוואת זכאות: הממשלה קובעת "ריבית דיור" משלה, שנמוכה מהפריים. ההבדל הוא לטובתך.
          </p>

          <div className="bg-accent-50/40 rounded-xl p-6 mb-6">
            <p className="font-bold mb-4">דוגמה מעשית:</p>
            <p className="text-sm mb-4">נניח משכנתא של ₪600,000 על 20 שנה.</p>

            <p className="font-bold text-sm mb-2">תרחיש 1: משכנתא בריבית משתנה (פריים + מרווח)</p>
            <ul className="text-sm space-y-1 mb-4 text-accent-600">
              <li>ריבית הפריים כיום היא 5.0%</li>
              <li>מרווח שהבנק לוקח: 1.5%</li>
              <li>סה"כ: 6.5%</li>
              <li>החזר חודשי: <strong>₪4,470</strong></li>
              <li>סה"כ תשלום על 20 שנה: <strong>₪1,072,800</strong></li>
            </ul>

            <p className="font-bold text-sm mb-2">תרחיש 2: הלוואת זכאות</p>
            <ul className="text-sm space-y-1 text-accent-600">
              <li>ריבית דיור הממשלה (כיום): 3%</li>
              <li>החזר חודשי: <strong>₪3,326</strong></li>
              <li>סה"כ תשלום על 20 שנה: <strong>₪798,240</strong></li>
              <li><strong>ההפרש: ₪1,144/חודש, ₪274,560 על כל תקופת ההלוואה</strong></li>
            </ul>

            <p className="text-xs text-accent-500 mt-4 italic">
              חישוב זה משתמש בנוסחת הריבית המורכבת הסטנדרטית לחישוב תשלומי משכנתא (amortization formula). השיעורים 5.0% וריבית דיור 3% נכונים ליולי 2026 לפי בנק ישראל.
            </p>
          </div>

          <p className="text-accent-600 mb-6">
            זו הסיבה שעולות שיחות על תעודות זכאות: החיסכון הוא ממשי מאוד.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">האם הלוואת זכאות זהה בכל בנק?</h2>
          <p className="text-accent-600 mb-4">
            לא בדיוק. כל בנק יכול להוסיף "מרווח" משלו גם על הלוואת זכאות (עמלה לא תלויה בריבית בנק ישראל). אחד הבנקים יכול לתת זכאות בריבית 3% טהור (כלומר ריבית דיור בלבד), ובנק אחר יוסיף 0.3% מרווח. זה עדיין יותר זול מהחלופה הרגילה, אבל זה שונה מבנק לבנק.
          </p>
          <p className="text-accent-600 mb-6">
            בדוק עם חמישה בנקים לפחות, כי ההבדל במרווח יכול להיות <strong>₪100+ בחודש</strong>.
          </p>

          <CalculatorCTA
            calculatorName="מחשבון משכנתא לזוג צעיר"
            calculatorUrl="/tools/young-couple-mortgage"
            teaser="השווה בין משכנתא רגילה, קבועה, ותעודת זכאות. כל פעם שתשנה סכום או תקופה המחשבון יתעדכן."
          />

          <h2 className="text-2xl font-bold mt-8 mb-4">יש מגבלות?</h2>
          <p className="text-accent-600 mb-4">כמו כל מסלול משכנתא, יש מגבלות:</p>
          <ul className="list-disc list-inside space-y-3 mb-6 text-accent-600">
            <li><strong>הריבית המקסימלית היא 3%.</strong> אם ריבית פריים תעלה מעל לזה, אתה מוגן. אבל אם הריבית תרד מאוד, ייתכן שמשכנתא רגילה בריבית קבועה תהיה זולה יותר.</li>
            <li><strong>לא כל בנק מנפק תעודות זכאות לכל אחד.</strong> אם הניקוד שלך נמוך מ-599, לא תקבל.</li>
            <li><strong>משכנתא עם זכאות לעיתים קרובות בעלת תנאים קשיחים: גובה מינימלי של הלוואה (למשל ₪400,000).</strong></li>
          </ul>
          <p className="text-accent-600 mb-6">
            עדיין, אם אתה זכאי: זה כמעט תמיד משתלם.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">שאלות שחוזרות על עצמן</h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold mb-2">האם אפשר לעבור ממשכנתא רגילה לזכאות?</p>
              <p className="text-accent-600">
                לא ישירות. זכאות מנופקת בעת קנייה. אתה לא יכול "להחליף" משכנתא קיימת לזכאות: צריך למכור ולקנות דירה חדשה, או למחזר ולהתחיל הלוואה חדשה, מה שנדיר.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">האם זכאות משפיעה על מס?</p>
              <p className="text-accent-600">
                לא. זכאות לא תוריד את הזקיפה שלך למס או את נקודות הזיכוי שלך. היא רק הנחה על ריבית.
              </p>
            </div>
            <div>
              <p className="font-bold mb-2">מה קורה אם אני מוכר את הדירה לפני 20 שנים?</p>
              <p className="text-accent-600">
                בדרך כלל, אתה רק משלם את היתרה כמו בכל משכנתא. אבל בדוק עם הבנק: יש בנקים שיש להם קנסות ספציפיים למשכנתא עם זכאות אם אתה מוכר מהר מדי.
              </p>
            </div>
          </div>

          <div className="my-8 py-6 border-t border-b border-accent-200">
            <p className="text-sm text-accent-500">
              <strong>אין באמור ייעוץ פיננסי.</strong> המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.
            </p>
          </div>

          <RelatedGuides
            currentHref="/guides/mashkanta-lzug-tzair"
          />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-6 space-y-6">
            <AdSlot variant="sidebar" />
          </div>
        </aside>
      </div>

      <AdSlot variant="bottom" />
    </div>
  );
}
