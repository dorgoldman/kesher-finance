import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import LoanCalculator from '@/components/LoanCalculator';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבון הלוואה - חישוב החזר חודשי | Maxit.מקסיט',
  description:
    'מחשבון הלוואה חינמי בעברית — חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל הלוואה צרכנית. שיטת שפיצר, תוצאות מיידיות.',
  canonical: '/tools/loan-calculator',
});

/* ── JSON-LD: Calculator + BreadcrumbList + FAQ ── */
const jsonLd = [
  /* 1. WebApplication */
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'מחשבון הלוואה — מקסיט',
    url: `${SITE_URL}/tools/loan-calculator`,
    description:
      'מחשבון הלוואה חינמי בעברית — חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל הלוואה צרכנית. שיטת שפיצר.',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ILS',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    inLanguage: 'he',
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'בית',       item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'מחשבונים', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'מחשבון הלוואה', item: `${SITE_URL}/tools/loan-calculator` },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה זו שיטת שפיצר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שיטת שפיצר (Spitzer) היא שיטת ההחזר הנפוצה ביותר לאשראי צרכני. בשיטה זו ההחזר החודשי קבוע לאורך כל התקופה — מדי חודש משלמים ריבית על יתרת הקרן ואת ההפרש ממחזירים כקרן. עם הזמן חלק הריבית פוחת וחלק הקרן גדל.',
        },
      },
      {
        '@type': 'Question',
        name: 'כיצד מחשבים החזר חודשי על הלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'נוסחת שפיצר: M = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1), כאשר P = סכום ההלוואה, r = ריבית חודשית (שנתית ÷ 12), n = מספר חודשי ההחזר. ניתן להשתמש במחשבון שלנו לקבלת תוצאה מיידית.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ההבדל בין ריבית שנתית לריבית חודשית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הריבית השנתית המצוינת בחוזה ההלוואה מחולקת ב-12 לחישוב הריבית החודשית. לדוגמה, ריבית שנתית של 8% שווה לריבית חודשית של כ-0.667%. המחשבון מבצע את ההמרה אוטומטית.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה ריבית אשלם לאורך חיי ההלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'סכום הריבית הכולל תלוי בשלושה גורמים: סכום ההלוואה, שיעור הריבית ותקופת ההחזר. ככל שהתקופה ארוכה יותר — ההחזר החודשי נמוך יותר, אך סך הריבית גבוה יותר. המחשבון מציג את כל הנתונים בשקיפות מלאה.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם ניתן לפרוע הלוואה לפני הזמן?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ברוב הלוואות הצרכניות ניתן לפרוע מוקדם, לעיתים ללא קנסות (תלוי בחוזה). פירעון מוקדם מקטין את סך הריבית ששולמה. מומלץ לבדוק את תנאי ההלוואה הספציפית מול הגוף המלווה.',
        },
      },
    ],
  },
];

export default function LoanCalculatorPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: 'מחשבון הלוואה' },
        ]}
      />

      <div className="mb-8">
        <h1 className="section-title mb-3">מחשבון הלוואה</h1>
        <p className="text-accent-500 leading-relaxed">
          חשבו את ההחזר החודשי, סך הריבית ולוח הסילוקין המלא לכל הלוואה
          צרכנית — אשראי אישי, הלוואת רכב, שיפוצים ועוד. החישוב מבוסס
          שיטת שפיצר (תשלומים קבועים) והתוצאות מתעדכנות בזמן אמת.
        </p>
      </div>

      <LoanCalculator />

      <AdSlot variant="post-results-mobile" className="mt-6" />

      {/* ── Educational content ── */}
      <section className="mt-14 space-y-10">

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">איך עובד מחשבון ההלוואה?</h2>
          <p className="text-accent-500 leading-relaxed">
            המחשבון משתמש בשיטת שפיצר — הנפוצה ביותר בהלוואות צרכניות בישראל.
            בשיטה זו ההחזר החודשי קבוע לאורך כל תקופת ההלוואה. בתחילת הדרך
            רוב התשלום מורכב מריבית; ככל שהזמן עובר, חלק הקרן גדל וחלק הריבית
            פוחת — כפי שמראה לוח הסילוקין המפורט.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה זו שיטת שפיצר?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                שיטת שפיצר היא שיטת ההחזר הנפוצה ביותר לאשראי צרכני. ההחזר החודשי
                קבוע לאורך כל התקופה — מדי חודש משלמים ריבית על יתרת הקרן ואת ההפרש
                ממחזירים כקרן. עם הזמן חלק הריבית פוחת וחלק הקרן גדל.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כיצד מחשבים החזר חודשי?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                נוסחת שפיצר: <span dir="ltr" className="font-mono text-accent-700">M = P × r × (1+r)ⁿ / ((1+r)ⁿ − 1)</span>,
                כאשר P = סכום ההלוואה, r = ריבית חודשית (שנתית ÷ 12),
                n = מספר חודשי ההחזר. המחשבון מבצע את כל החישובים אוטומטית.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">תקופה קצרה או ארוכה — מה עדיף?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תקופה קצרה = החזר חודשי גבוה יותר, אך סך ריבית נמוך משמעותית.
                תקופה ארוכה = החזר חודשי נוח יותר, אך עלות כוללת גבוהה יותר.
                הכלל: קצרו את התקופה כל עוד ההחזר החודשי לא עולה על 30%–35% מהכנסתכם הפנויה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם ניתן לפרוע הלוואה לפני הזמן?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                ברוב ההלוואות הצרכניות ניתן לפרוע מוקדם, לעיתים ללא עמלות (תלוי בחוזה).
                פירעון מוקדם מפחית את סך הריבית ששולמה. בדקו את תנאי ההלוואה הספציפית
                מול הבנק או החברה המלווה.
              </p>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">טיפים להלוואה חכמה</h2>
          <ul className="space-y-3 text-accent-500">
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">01</span>
              <span>השוו ריביות בין לפחות 3 גופים מלווים — בנקים, חברות אשראי וגמ&quot;חים</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">02</span>
              <span>ודאו שההחזר החודשי לא עולה על 30%–35% מהכנסתכם הפנויה</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">03</span>
              <span>בדקו את ריבית ה-APR (ריבית שנתית אפקטיבית) — היא כוללת עמלות ועלויות נוספות</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">04</span>
              <span>שמרו על קרן חירום לפני נטילת הלוואה — לפחות 3 חודשי הוצאות</span>
            </li>
          </ul>
        </div>

      </section>

      <AdSlot variant="bottom" className="mt-10" />
    </div>
  );
}
