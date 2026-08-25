import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';
import { SITE_NAME, SITE_URL } from '@/lib/constants';

const BASE = SITE_URL;
const CANONICAL = `${BASE}/guides/mas-richisha-dira`;

export const metadata: Metadata = {
  title: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
  description: 'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
    description: 'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
    url: CANONICAL,
    siteName: SITE_NAME,
  },
};

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
    description: 'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-07-20',
    dateModified: '2026-08-14',
    author: { '@type': 'Person', name: 'דור גולדמן', url: `${BASE}/about` },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'מס רכישה דירה', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מתי משלמים את מס הרכישה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בעת סגירת העסקה, כשאתה נרשם כבעל הדירה. צריך להחזיק את הכסף בתמציא חשבון בנק מהיום שהחתמתם על ההסכם.',
        },
      },
      {
        '@type': 'Question',
        name: 'אם קניתי דירה שנייה, המס גבוה יותר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. עבור דירה שנייה, אין הטבה של 0% עד ₪1,978,745. המס מתחיל מ-5% מהשוויון הראשון. זה תמריץ ממשלתי לקנות דירה ראשונה בלבד.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם המס השתנה לאחרונה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. בשנות האחרונות שונו שיעורי מס הרכישה וסכומיה מספר פעמים. לפני שתתכננו קניה, בדקו עם עו״ד מומחה את הטבות הנוכחיות.',
        },
      },
      {
        '@type': 'Question',
        name: 'מי משלם את המס? הקונה או המוכר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הקונה משלם מס רכישה וכל העלויות הנלוות. המוכר משלם עמלת תיווך (בערך 2% לתיווכן). חריג: אם הסכמתם, המוכר יכול לתרום חלק מהעלויות לקונה. זה משא ומתן, לא חוק.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'mah-zeh', label: 'מה זה מס רכישה' },
  { id: 'madragot', label: 'מדרגות מס 2026' },
  { id: 'dugma', label: 'דוגמה חישוב' },
  { id: 'lo-meshalmim', label: 'מה לא משלמים' },
  { id: 'faq', label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-8 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const li = 'text-accent-600 leading-relaxed mb-2';

export default function MasRichishaDiraPage() {
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
          { label: 'מס רכישה דירה' },
        ]}
      />

      <AdSlot variant="header" className="mb-10" />

      <MobileArticleTOC items={TOC} />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
        <article>
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              מיסוי
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4">
              מס רכישה דירה 2026: חישוב ודוגמה מעשית
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן לאחרונה: 14 באוגוסט 2026</span>
            </div>
          </header>

          <div className="prose prose-sm max-w-none">
            <p className={p}>
              קיבלת הסכם עם המוכר, חתמת על ההסכם, והבנק מאשר את המשכנתא. עכשיו בא החלק שרוב הקונים שוכחים לתכנן: מס רכישה. זה סכום משפיע על התקציב הכללי שלך, והוא בדיוק חישוב מתמטי שאפשר לצפות מראש.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-3 text-accent-900">בקצרה:</h2>
              <ul className="list-disc list-inside space-y-2 text-accent-600">
                <li>דירה ראשונה עד ₪1,978,745 – 0% מס</li>
                <li>₪1,978,745–₪3,234,000 – 3.5% מס</li>
                <li>מעל ₪5,000,000 – 8%–10% מס לפי שוויון</li>
                <li>מדרגות קפואות עד ינואר 2028, ללא הצמדה</li>
                <li>דירה שנייה: לא זכאית להטבה של 0%, המס מתחיל מ-5%</li>
              </ul>
            </div>

            <h2 id="mah-zeh" className={h2}>מה זה מס רכישה דירה?</h2>

            <p className={p}>
              כשאתה קונה דירה בישראל, רשות המסים גובה ממך מס על העסקה. זה מס נפרד מרישום הקניין (שעולה כמה עשרות ₪) ונפרד מדמי עו״ד (בערך ₪2,000 למשפחה). המס תלוי בשוויון הדירה.
            </p>

            <p className="font-semibold text-accent-900 mb-4">
              כמה אתה משלם? המס תלוי בארבעה דברים:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li className={li}>שוויון הדירה (המחיר בהסכם הקנייה)</li>
              <li className={li}>אם היא דירה ראשונה שלך או שנייה</li>
              <li className={li}>מי יושב בה (בעל חזקה או משקיע)</li>
              <li className={li}>בשנת 2026 המדרגות קפואות עד ינואר 2028, ללא הצמדה</li>
            </ol>

            <h2 id="madragot" className={h2}>מדרגות מס רכישה 2026</h2>

            <p className="text-accent-600 mb-4">
              נכון ליולי 2026, זו מדרגת המס על דירה ראשונה (יחידה):
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="border border-primary-300 p-3 text-right">מחיר הדירה</th>
                    <th className="border border-primary-300 p-3 text-right">שיעור המס</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-accent-50">
                    <td className="border border-accent-200 p-3 text-right">עד ₪1,978,745</td>
                    <td className="border border-accent-200 p-3 text-right">0%</td>
                  </tr>
                  <tr>
                    <td className="border border-accent-200 p-3 text-right">₪1,978,745 עד ₪3,234,000</td>
                    <td className="border border-accent-200 p-3 text-right">3.5%</td>
                  </tr>
                  <tr className="bg-accent-50">
                    <td className="border border-accent-200 p-3 text-right">₪3,234,000 עד ₪5,000,000</td>
                    <td className="border border-accent-200 p-3 text-right">5%</td>
                  </tr>
                  <tr>
                    <td className="border border-accent-200 p-3 text-right">₪5,000,000 עד ₪8,000,000</td>
                    <td className="border border-accent-200 p-3 text-right">8%</td>
                  </tr>
                  <tr className="bg-accent-50">
                    <td className="border border-accent-200 p-3 text-right">מעל ₪8,000,000</td>
                    <td className="border border-accent-200 p-3 text-right">10%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-accent-600 mb-6">
              <span className="font-semibold text-accent-900">המדרגות הללו קפואות עד 1 בינואר 2028.</span> הממשלה הקפיאה אותן ללא הצמדה למדד. זה חוק, וזו ההשלכה: כשמחיר הדירות עלה, המס שלך עלה גם.
            </p>

            <h2 id="dugma" className={h2}>דוגמה של חישוב אמיתי</h2>

            <p className="font-semibold text-accent-900 mb-4">
              אתה קונה דירה ראשונה במחיר של ₪2,500,000.
            </p>

            <p className="text-accent-600 mb-4">לפי המדרגות:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className={li}>על הסכום הראשון (עד ₪1,978,745): 0%</li>
              <li className={li}>על הסכום השני (₪1,978,745 עד ₪2,500,000 = ₪521,255): 3.5%</li>
            </ul>

            <p className="font-semibold text-accent-900 mb-4">חישוב:</p>
            <div className="bg-accent-50 rounded-lg p-4 mb-6 text-accent-900 display-number font-mono text-sm">
              <div>₪1,978,745 × 0% = ₪0</div>
              <div>₪521,255 × 3.5% = ₪18,244</div>
            </div>

            <p className="text-accent-900 mb-6">
              <span className="font-semibold">סה״כ מס רכישה: ₪18,244</span>
            </p>

            <p className={p}>
              עם המס עצמו יש עוד עלויות: דמי רישום הקניין, דמי עו״ד (בערך ₪1,500 עד ₪2,500), וביטוח קניין. כל העלויות הנלוות הללו מסתכמות ל-2 או 3 אחוז נוסף ממחיר הדירה.
            </p>

            <CalculatorCTA
              calculatorName="מחשבון המשכנתא"
              calculatorUrl="/tools/mortgage-calculator"
              teaser="עבור משכנתא של ₪2,500,000, ל-20 שנה בריבית 5%, החזר חודשי: ₪16,499. עכשיו אתה יכול לתכנן את כל הוצאות הקניה ביחד."
            />

            <h2 id="lo-meshalmim" className={h2}>מה לא משלמים מס עליו?</h2>

            <ul className="list-disc list-inside space-y-4 mb-6">
              <li className={li}>
                <span className="font-semibold">דירה ראשונה עד ₪1,978,745</span> משלמת 0% מס.
              </li>
              <li className={li}>
                <span className="font-semibold">ריהוט ותחזוקה אם הם חלק מהסכום:</span> אפשר לחלק את המחיר בהסכם בין קרקע/בנייה ותוכן הדירה. זה יקטין את הבסיס לחישוב המס. בכל מקרה, רוב הקניות הן על מחיר קטגוריה אחת (הקרקע עם הבנייה הקיימת), כך שהחלוקה לא תמיד משנה בפועל.
              </li>
            </ul>

            <h2 id="faq" className={h2}>שאלות נפוצות</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">מתי משלמים את מס הרכישה?</h3>
                <p className={p}>
                  בעת סגירת העסקה, כשאתה נרשם כבעל הדירה. צריך להחזיק את הכסף בתמציא חשבון בנק מהיום שהחתמתם על ההסכם.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">אם קניתי דירה שנייה, המס גבוה יותר?</h3>
                <p className={p}>
                  כן. עבור דירה שנייה, אין הטבה של 0% עד ₪1,978,745. המס מתחיל מ-5% מהשוויון הראשון. זה תמריץ ממשלתי לקנות דירה ראשונה בלבד.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">האם המס השתנה לאחרונה?</h3>
                <p className={p}>
                  כן. בשנות האחרונות שונו שיעורי מס הרכישה וסכומיה מספר פעמים. לפני שתתכננו קניה, בדקו עם עו״ד מומחה את הטבות הנוכחיות.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">מי משלם את המס? הקונה או המוכר?</h3>
                <p className={p}>
                  הקונה משלם מס רכישה וכל העלויות הנלוות. המוכר משלם עמלת תיווך (בערך 2% לתיווכן). חריג: אם הסכמתם, המוכר יכול לתרום חלק מהעלויות לקונה. זה משא ומתן, לא חוק.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-accent-200">
              <h3 className="text-lg font-semibold text-accent-900 mb-4">קרא גם</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/guides/mashkanta-rishona" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                    משכנתא ראשונה: המדריך המלא
                  </a>
                </li>
                <li>
                  <a href="/guides/mahzor-mashkanta" className="text-primary-600 hover:text-primary-700 underline underline-offset-2">
                    מחזור משכנתא: כדאי בכלל?
                  </a>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-sm text-accent-500 italic">
              <p>
                <strong>אין באמור ייעוץ פיננסי.</strong> המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.
              </p>
              <p className="mt-2">
                <strong>דור גולדמן</strong>, Maxit.מקסיט
              </p>
            </div>
          </div>
        </article>

        <aside className="hidden lg:block">
          <AdSlot variant="sidebar" />
        </aside>
      </div>

      <AdSlot variant="bottom" className="mt-10" />
    </div>
  );
}
