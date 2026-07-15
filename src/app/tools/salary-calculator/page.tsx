import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import SalaryCalculator from '@/components/SalaryCalculator';
import CalcMethodology from '@/components/CalcMethodology';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבון שכר נטו',
  description:
    'מחשבון שכר נטו חינמי לשנת 2026 - חשבו כמה תקבלו הביתה אחרי מס הכנסה, ביטוח לאומי, ביטוח בריאות ופנסיה. עדכני למדרגות המס 2026.',
  canonical: '/tools/salary-calculator',
});

/* ── JSON-LD: Calculator + BreadcrumbList + FAQ ── */
const jsonLd = [
  /* 1. WebApplication */
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'מחשבון שכר נטו - מקסיט',
    url: `${SITE_URL}/tools/salary-calculator`,
    description:
      'מחשבון שכר נטו חינמי לשנת 2026 - חשבו כמה תקבלו הביתה אחרי מס הכנסה, ביטוח לאומי, ביטוח בריאות ופנסיה.',
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
      { '@type': 'ListItem', position: 1, name: 'בית',            item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'מחשבונים',       item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'מחשבון שכר נטו', item: `${SITE_URL}/tools/salary-calculator` },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה ההבדל בין שכר ברוטו לשכר נטו?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שכר ברוטו הוא השכר המוסכם לפני ניכויים. שכר נטו הוא הסכום שמתקבל בפועל בחשבון הבנק, לאחר ניכוי מס הכנסה, ביטוח לאומי, ביטוח בריאות ופנסיה. ההפרש יכול לנוע בין 20%–40% מהברוטו, תלוי ברמת השכר.',
        },
      },
      {
        '@type': 'Question',
        name: 'מהן מדרגות המס בישראל לשנת 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'מדרגות מס הכנסה לשנת 2026 (חודשי): עד ₪7,010 - 10%; ₪7,011–₪10,060 - 14%; ₪10,061–₪19,000 - 20%; ₪19,001–₪25,100 - 31%; ₪25,101–₪46,690 - 35%; ₪46,691–₪60,130 - 47%; מעל ₪60,130 - 50%. המדרגות מתעדכנות מדי שנה.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה זו נקודת זיכוי ממס?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'נקודת זיכוי ממס היא הנחה קבועה שמנוכה מסכום המס לתשלום. בשנת 2026 שווי נקודת הזיכוי הוא ₪249 לחודש. כל תושב ישראל זכאי לנקודות בסיס: גבר - 2.25 נקודות, אישה - 2.75 נקודות. נוספות נקודות בגין ילדים, לימודים, שירות צבאי ועוד.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה מנכים מהשכר לביטוח לאומי ובריאות?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'עובד שכיר משלם ביטוח לאומי: 0.4% על חלק השכר עד כ-₪8,160 ו-7% על השכר שמעל. ביטוח בריאות: 3.1% על חלק השכר עד הסף ו-5% מעליו. שיעורים אלו מחושבים על הברוטו (לא על ההכנסה החייבת). המעסיק משלם בנוסף את חלקו בנפרד.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם הפקדות הפנסיה מפחיתות את המס?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. הפקדות עובד לפנסיה מוכרות כניכוי ממס הכנסה עד 7% מהשכר, עד לתקרת שכר של כ-₪36,000 לחודש. משמעות: עובד שמפקיד 6% לפנסיה על שכר של ₪15,000 חוסך מס על ₪900 בחודש - חיסכון של עשות עד מאות שקלים בחודש.',
        },
      },
    ],
  },
];

export default function SalaryCalculatorPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: 'מחשבון שכר נטו' },
        ]}
      />

      <div className="mb-8">
        <h1 className="section-title mb-3">מחשבון שכר נטו</h1>
        <p className="text-accent-500 leading-relaxed">
          כמה תקבלו הביתה? הכניסו שכר ברוטו, נקודות זיכוי ואחוז פנסיה - המחשבון
          מחשב בזמן אמת את שכר הנטו לאחר מס הכנסה, ביטוח לאומי וביטוח בריאות.
          מבוסס על מדרגות מס עדכניות לשנת 2026.
        </p>
      </div>

      <SalaryCalculator />

      <CalcMethodology
        formula="מס הכנסה: חישוב פרוגרסיבי לפי מדרגות על ההכנסה החייבת (ברוטו פחות הפקדות פנסיה). ביטוח לאומי ובריאות: אחוז קבוע מהברוטו לפי שתי מדרגות. פנסיה: אחוז מהברוטו שמנוכה מההכנסה החייבת במס."
        assumptions={[
          'מדרגות מס הכנסה 2026',
          'נקודת זיכוי = ₪249 לחודש',
          'שיעורי ביטוח לאומי ובריאות 2026',
          'חישוב לעובד שכיר בלבד',
          'ניכוי פנסיה לפי האחוז שהוזן',
        ]}
        source="מדרגות מס: רשות המסים | שיעורי ביטוח לאומי: המוסד לביטוח לאומי"
      />

      <AdSlot variant="post-results-mobile" className="mt-6" />

      {/* ── Educational content ── */}
      <section className="mt-14 space-y-10">

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">איך מחושב שכר הנטו?</h2>
          <p className="text-accent-500 leading-relaxed">
            משכר הברוטו מנוכים ארבעה רכיבים עיקריים: מס הכנסה (פרוגרסיבי לפי מדרגות),
            ביטוח לאומי (קצבאות ודמי אבטלה), ביטוח בריאות (מימון קופות חולים) ופנסיה
            (חיסכון לגיל פרישה). המס חל על הכנסה פחות הפקדות הפנסיה, ואילו ביטוח
            לאומי ובריאות מחושבים על הברוטו.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מהי נקודת זיכוי?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                נקודת זיכוי מנוכה ישירות מסכום המס - לא מההכנסה. בשנת 2026 שווי כל נקודה
                הוא ₪249 לחודש. גבר תושב זכאי ל-2.25 נקודות בסיס (₪560/חודש), אישה
                תושבת - 2.75 נקודות (₪685/חודש). ילדים, לימודים ושירות צבאי מזכים
                בנקודות נוספות.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">למה פנסיה מפחיתה את המס?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הפקדות עובד לקרן פנסיה מוכרות כהוצאה מוטבת לפי סעיף 47 לפקודת מס הכנסה.
                ניתן לנכות עד 7% מהשכר (עד תקרת שכר), מה שמקטין את ההכנסה החייבת ומשכך
                את חבות המס. זה אחד היתרונות הגדולים של חיסכון פנסיוני מסודר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה שיעור ביטוח לאומי לעובד שכיר?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                עובד שכיר משלם 0.4% על החלק עד כ-₪8,160 לחודש, ו-7% על החלק שמעל ועד
                לתקרת הכנסה (כ-₪68,000). ביטוח הבריאות הוא 3.1% ו-5% בהתאמה. זכרו:
                המעסיק משלם בנוסף את חלקו, שאינו מנוכה מהמשכורת שלכם.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם החישוב מדויק לגמרי?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                המחשבון מעניק הערכה טובה לרוב המקרים. חישוב שכר מדויק תלוי גם ב: בונוסים
                וקצובות שמטופלים אחרת, פנסיית חובה מורכבת יותר, ניכויים מיוחדים, פיצויים
                ועוד. לחישוב מדויק ייעוץ רואה חשבון או יועץ שכר.
              </p>
            </div>

          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">טיפים לתכנון שכר חכם</h2>
          <ul className="space-y-3 text-accent-500">
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">01</span>
              <span>בדקו שנקודות הזיכוי שלכם עדכניות - ילדים, לימודים ושירות צבאי מזכים בנקודות נוספות</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">02</span>
              <span>הפקידו את המקסימום לפנסיה (7%) - כל שקל שם חוסך מס ויוצר ריבית דריבית לטווח ארוך</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">03</span>
              <span>שאלו את מעסיקכם על קרן השתלמות - עד ₪19,800/שנה פטורים ממס (אחרי 6 שנות ותק)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary-500 font-bold shrink-0">04</span>
              <span>אם שכרכם עלה - חשבו מחדש: ייתכן שקפצתם מדרגת מס ומשתלם להגדיל הפקדות לפנסיה</span>
            </li>
          </ul>
        </div>

      </section>

      <AdSlot variant="bottom" className="mt-10" />
    </div>
  );
}
