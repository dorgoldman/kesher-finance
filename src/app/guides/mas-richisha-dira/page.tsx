import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME, OG_IMAGE } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* ── Canonical domain for this article ── */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/mas-richisha-dira`;

export const metadata: Metadata = {
  title: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
  description:
    'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
    description:
      'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
    description:
      'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
  },
};

/* ── JSON-LD ── */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'מס רכישה דירה 2026. חישוב ודוגמה מעשית',
    description:
      'מס רכישה דירה 2026: כמה תשלם על קניית דירה ראשונה. חישוב מדרגות, דוגמה עם מספרים אמיתיים, תשובות לשאלות נפוצות.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-07-20',
    dateModified: '2026-08-12',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'מס רכישה דירה', item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מתי משלמים את מס הרכישה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בעת סגירת העסקה בעיר, כשאתה נרשם כבעל הדירה. צריך להחזיק את הכסף בכספיים מימי קביעת ההסכם.',
        },
      },
      {
        '@type': 'Question',
        name: 'אם קניתי דירה שנייה, המס גבוה יותר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. עבור דירה שנייה, אין הטבה של 0% עד ₪1,978,745. המס מתחיל מ-5% מהשוויון הראשון. זה תמריץ ממשלתי להיות קופץ.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם המס השתנה לאחרונה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. בשנות האחרונות הזרימו מס רכישה כמה פעמים בשיעורים ובסכומים מדורגים. לפני שתתכננו קניה, בדקו עם עו״ד מומחה את הטבות הנוכחיות.',
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

export default function MasRichishaDiraArticle() {
  return (
    <>
      <JsonLd data={jsonLd} />
      <div className="container-page py-10">
        <Breadcrumbs
          items={[
            { label: 'ראשי', href: '/' },
            { label: 'מדריכים', href: '/guides' },
            { label: 'מס רכישה דירה' },
          ]}
        />
      </div>
      <article className="flex gap-8 container-page my-10 flex-col lg:flex-row">
        <div className="flex-1">
          <AdSlot variant="header" />

          <div className="mb-8">
            <span className="badge-primary">מיסוי</span>
          </div>

          <h1 className="text-4xl font-bold mb-4 text-accent-900">מס רכישה דירה 2026: חישוב ודוגמה מעשית</h1>

          <div className="text-sm text-accent-500 mb-8">
            עודכן לאחרונה: 12 בספטמבר 2026
          </div>

          <div className="prose prose-sm max-w-none">
            <p>
              קיבלת הסכם עם המוכר, חתמת בעיר, והבנק מאשר את המשכנתא. עכשיו בא החלק שרוב הקוברים שוכחים לתכנן: מס רכישה. זה סכום משפיע על התקציב הכללי שלך, והוא בדיוק חישוב מתמטי שאפשר לצפות מראש.
            </p>

            <div className="bg-primary-50 border border-primary-200 rounded-2xl p-6 mb-8">
              <h2 className="text-xl font-bold mb-3 text-accent-900">בקצרה:</h2>
              <ul className="list-disc list-inside space-y-2 text-accent-600">
                <li>דירה ראשונה עד ₪1,978,745 – 0% מס</li>
                <li>₪1,978,745–₪3,234,000 – 3.5% מס</li>
                <li>מעל ₪5,000,000 – 8%–10% מס לפי שוויון</li>
                <li>מדרגות קפוצות עד ינואר 2028, ללא הצמדה</li>
                <li>דירה שנייה: לא זכאית להטבה של 0%, המס מתחיל מ-5%</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-accent-900">מה זה מס רכישה דירה?</h2>

            <p>
              כשאתה קונה דירה בישראל, רשות המסים גובה ממך מס על העסקה. זה מס נפרד מרישום הקניין (שעולה כמה עשרות ₪) ונפרד מדמי עו״ד (בערך ₪2,000 למשפחה). המס תלוי בשוויון הדירה.
            </p>

            <p className="font-semibold text-accent-900">
              כמה אתה משלם? המס תלוי בארבעה דברים:
            </p>
            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>שוויון הדירה (המחיר בהסכם הקנייה)</li>
              <li>אם היא דירה ראשונה שלך או שנייה</li>
              <li>מי יושב בה (בעל חזקה או משקיע)</li>
              <li>בשנת 2026 המדרגות קפוצות עד ינואר 2028, ללא הצמדה</li>
            </ol>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-accent-900">מדרגות מס רכישה 2026</h2>

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
              <span className="font-semibold text-accent-900">המדרגות הללו קפוצות עד 1 בינואר 2028.</span> הממשלה קיפאה אותן ללא הצמדה למדד. זה חוק, וזו ההשלכה: כשמחיר הדירות עלה, המס שלך עלה גם.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-accent-900">דוגמה של חישוב אמיתי</h2>

            <p className="font-semibold text-accent-900 mb-4">
              אתה קונה דירה ראשונה במחיר של ₪2,500,000.
            </p>

            <p className="text-accent-600 mb-4">לפי המדרגות:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>על הסכום הראשון (עד ₪1,978,745): 0%</li>
              <li>על הסכום השני (₪1,978,745 עד ₪2,500,000 = ₪521,255): 3.5%</li>
            </ul>

            <p className="font-semibold text-accent-900 mb-4">חישוב:</p>
            <div className="bg-accent-50 rounded-lg p-4 mb-6 text-accent-900 display-number">
              <div>₪1,978,745 × 0% = ₪0</div>
              <div>₪521,255 × 3.5% = ₪18,244</div>
            </div>

            <p className="text-accent-900 mb-6">
              <span className="font-semibold">סה״כ מס רכישה: ₪18,244</span>
            </p>

            <p className="mb-6">
              עם המס עצמו יש עוד עלויות: דמי רישום הקניין, דמי עו״ד (בערך ₪1,500 עד ₪2,500), וביטוח קניין. כל העלויות הנלוות הללו מסתכמות ל-2 או 3 אחוז נוסף ממחיר הדירה.
            </p>

            <CalculatorCTA
              calculatorName="מחשבון המשכנתא"
              calculatorUrl="/tools/mortgage-calculator"
              teaser="עבור משכנתא של ₪2,500,000, ל-20 שנה בריבית 5%, החזר חודשי: ₪14,900. עכשיו אתה יכול לתכנן את כל הוצאות הקניה ביחד."
            />

            <h2 className="text-2xl font-bold mt-8 mb-4 text-accent-900">מה לא משלמים מס עליו?</h2>

            <ul className="list-disc list-inside space-y-4 mb-6">
              <li>
                <span className="font-semibold">דירה ראשונה עד ₪1,978,745</span> משלמת 0% מס.
              </li>
              <li>
                <span className="font-semibold">ריהוט ותחזוקה אם הם חלק מהסכום:</span> אפשר לחלק את המחיר בהסכם בין קרקע/בנייה ותוכן הדירה. זה יהקטין את הבסיס לחישוב המס. בכל מקרה, רוב הקניות הן על מחיר קטגוריה אחת (הקרקע עם הבנייה הקיימת), כך שהחלוקה לא תמיד משנה בפועל.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-accent-900">שאלות נפוצות</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">מתי משלמים את מס הרכישה?</h3>
                <p>
                  לפי סעיף 46 לחוק המס על הכנסה, בעת סגירת העסקה בעיר, כשאתה נרשם כבעל הדירה. צריך להחזיק את הכסף בכספיים מימי קביעת ההסכם.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">אם קניתי דירה שנייה, המס גבוה יותר?</h3>
                <p>
                  כן. עבור דירה שנייה, אין הטבה של 0% עד ₪1,978,745. המס מתחיל מ-5% מהשוויון הראשון. זה תמריץ ממשלתי להיות קופץ.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">האם המס השתנה לאחרונה?</h3>
                <p>
                  כן. בשנות האחרונות הזרימו מס רכישה כמה פעמים בשיעורים ובסכומים מדורגים. לפני שתתכננו קניה, בדקו עם עו״ד מומחה את הטבות הנוכחיות.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-accent-900 mb-2">מי משלם את המס? הקונה או המוכר?</h3>
                <p>
                  הקונה משלם מס רכישה וכל העלויות הנלוות. המוכר משלם עמלת תיווך (בערך 2% לתיווכן). חריג: אם הסכמתם, המוכר יכול לתרום חלק מהעלויות לקונה. זה משא ומתן, לא חוק.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-accent-200">
              <h3 className="text-lg font-semibold mb-4 text-accent-900">קרא גם:</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/guides/mashkanta-rishona" className="text-primary-600 hover:text-primary-700 underline">
                    משכנתא ראשונה. כמה תוכל להשיג?
                  </a>
                </li>
                <li>
                  <a href="/guides/mahzor-mashkanta" className="text-primary-600 hover:text-primary-700 underline">
                    מחזור משכנתא. כדאי בכלל?
                  </a>
                </li>
                <li>
                  <a href="/tools/mortgage-calculator" className="text-primary-600 hover:text-primary-700 underline">
                    מחשבון המשכנתא. חשבו את ההחזר החודשי שלכם
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-accent-200 text-sm text-accent-600">
            <p className="mb-4">
              <strong>אין באמור ייעוץ פיננסי.</strong> המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.
            </p>
            <p>
              <strong>דור גולדמן</strong>, Maxit.מקסיט
            </p>
          </div>

          <AdSlot variant="bottom" />
        </div>

        <aside className="w-full lg:w-80">
          <AdSlot variant="sidebar" />
          <RelatedGuides currentHref="/guides/mas-richisha-dira" />
        </aside>
      </article>
    </>
  );
}
