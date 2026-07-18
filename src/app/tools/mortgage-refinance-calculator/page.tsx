import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import RefinanceCalculator from '@/components/RefinanceCalculator';
import CalcMethodology from '@/components/CalcMethodology';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבון מחזור משכנתא',
  description:
    'מחשבון מחזור משכנתא חינמי בעברית - השווה את המשכנתא הנוכחית להצעה חדשה, כולל עמלת פירעון מוקדם. חיסכון חודשי, נקודת איזון והאם המחזור משתלם.',
  canonical: '/tools/mortgage-refinance-calculator',
});

/* ── JSON-LD: Calculator + BreadcrumbList + FAQ ── */
const jsonLd = [
  /* 1. WebApplication */
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'מחשבון מחזור משכנתא - מקסיט',
    url: `${SITE_URL}/tools/mortgage-refinance-calculator`,
    description:
      'מחשבון מחזור משכנתא חינמי בעברית - השוואה בין המשכנתא הנוכחית להצעת מחזור, כולל עלויות: חיסכון חודשי, נקודת איזון וחיסכון כולל.',
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
      { '@type': 'ListItem', position: 3, name: 'מחשבון מחזור משכנתא', item: `${SITE_URL}/tools/mortgage-refinance-calculator` },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מתי מחזור משכנתא משתלם?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כשהחיסכון המצטבר מהריבית החדשה גבוה מעלויות המחזור (עמלת פירעון מוקדם, שמאי, פתיחת תיק). כלל אצבע: פער של 1% ומעלה בריבית עם 10+ שנים שנותרו כמעט תמיד משתלם. פער של פחות מ-0.5% דורש בדיקה מדוקדקת של נקודת האיזון.',
        },
      },
      {
        '@type': 'Question',
        name: 'מהי עמלת פירעון מוקדם (עמלת היוון)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'עמלה שהבנק גובה כשסוגרים מסלול בריבית קבועה לפני הזמן, כפיצוי על הפרשי הריבית. היא מחושבת לפי הפער בין הריבית בחוזה לריבית הממוצעת ביום הסילוק. מסלולי פריים בדרך כלל פטורים ממנה. את הסכום המדויק מקבלים בדוח יתרות לסילוק מהבנק - הוא חינמי ואינו מחייב.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה זו נקודת איזון במחזור משכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'מספר החודשים עד שהחיסכון החודשי מכסה את עלויות המחזור. לדוגמה: עלויות של ₪12,000 וחיסכון של ₪400 בחודש = נקודת איזון של 30 חודשים. אם מתכננים למכור את הדירה לפני נקודת האיזון, המחזור מפסיד.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר למחזר משכנתא בבנק אחר?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. מחזור חיצוני - מעבר מבנק לבנק - הוא לגיטימי ונפוץ, והבנקים מתחרים על לקוחות ממחזרים. מומלץ לקבל הצעות מ-2 עד 3 בנקים (למשל בנק טפחות, מזרחי טפחות, לאומי) ולהשתמש בהצעה הטובה כמנוף מול הבנק הנוכחי.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם הארכת תקופה במחזור חוסכת כסף?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא בהכרח. הארכת תקופה מקטינה את ההחזר החודשי אבל מוסיפה שנות ריבית - העלות הכוללת עלולה לעלות גם כשהריבית ירדה. המחשבון מציג את שני המספרים: החיסכון החודשי והחיסכון הכולל, כדי שההחלטה תהיה שקופה.',
        },
      },
    ],
  },
];

export default function RefinanceCalculatorPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: 'מחשבון מחזור משכנתא' },
        ]}
      />

      <div className="mb-8">
        <h1 className="section-title mb-3">מחשבון מחזור משכנתא</h1>
        <p className="text-accent-500 leading-relaxed">
          הבנק הציע לך ריבית טובה יותר? לפני שאתה חותם, בדוק מה המחזור באמת
          שווה. הזן את יתרת המשכנתא הנוכחית, את ההצעה החדשה ואת עלויות
          המחזור - ותקבל את החיסכון החודשי, נקודת האיזון והחיסכון הכולל
          אחרי כל העלויות.
        </p>
      </div>

      <RefinanceCalculator />

      <CalcMethodology
        formula="החזר חודשי לכל מסלול לפי נוסחת שפיצר: קרן × (ריבית חודשית × (1 + ריבית חודשית)^מספר תשלומים) ÷ ((1 + ריבית חודשית)^מספר תשלומים − 1). חיסכון כולל = עלות המסלול הנוכחי − (עלות המסלול החדש + עלויות מחזור). נקודת איזון = עלויות מחזור ÷ חיסכון חודשי."
        assumptions={[
          'ריבית ממוצעת אחת לכל תמהיל (לחישוב מדויק לפי מסלולים - השתמש במחשבון המשכנתא המלא)',
          'שיטת שפיצר בשני המסלולים',
          'עלויות המחזור משולמות מראש ולא מגולגלות לקרן',
          'ללא הצמדה למדד - במסלולים צמודים החיסכון בפועל עשוי להשתנות',
        ]}
        source="נוסחת שפיצר: תקן בנקאי מקובל בישראל · עמלת פירעון מוקדם: הוראות בנק ישראל"
      />

      <AdSlot variant="post-results-mobile" className="mt-6" />

      {/* ── Educational content ── */}
      <section className="mt-14 space-y-10">

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">איך משתמשים במחשבון מחזור המשכנתא?</h2>
          <p className="text-accent-500 leading-relaxed mb-4">
            שלושה שלבים. קודם, הזן את מצב המשכנתא הנוכחית שלך: היתרה לסילוק,
            הריבית הממוצעת והשנים שנותרו - הכל מופיע בדוח היתרות שהבנק חייב
            לתת לך חינם. אחר כך הזן את ההצעה החדשה שקיבלת. בסוף, הזן את עלויות
            המחזור: עמלת פירעון מוקדם, שמאי ופתיחת תיק.
          </p>
          <p className="text-accent-500 leading-relaxed">
            המחשבון לא מתחנף. אם ההצעה החדשה יקרה יותר בסך הכל - הוא יגיד לך
            את זה באדום, גם כשההחזר החודשי נראה נמוך יותר.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-3">דוגמה מחושבת: כמה שווה ירידה של 0.9% בריבית?</h2>
          <p className="text-accent-500 leading-relaxed mb-4">
            יתרת משכנתא של ₪900,000 ל-20 שנה בריבית ממוצעת של 5.2% = החזר חודשי
            של כ-₪6,040. אותה יתרה בריבית 4.3% = כ-₪5,600. חיסכון של כ-₪440
            בחודש, שהם כ-₪105,000 לאורך 20 שנה.
          </p>
          <p className="text-accent-500 leading-relaxed">
            עכשיו הצד השני: אם עמלת הפירעון המוקדם והעלויות הנלוות מגיעות
            ל-₪12,000, נקודת האיזון היא כ-27 חודשים. נשאר לך חיסכון נטו של
            כ-₪93,000. זה מחזור משתלם. אבל אם העמלה הייתה ₪60,000 והיית מתכנן
            למכור את הדירה בעוד שלוש שנים - התמונה מתהפכת.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-accent-900 mb-4">שאלות נפוצות</h2>
          <div className="space-y-4">

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מתי מחזור משכנתא משתלם?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כשהחיסכון המצטבר גבוה מעלויות המחזור. כלל אצבע: פער של 1% ומעלה
                בריבית עם 10+ שנים שנותרו כמעט תמיד משתלם. פער של פחות מ-0.5%
                דורש בדיקה מדוקדקת - וזה בדיוק מה שהמחשבון עושה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">איפה מוצאים את עמלת הפירעון המוקדם?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                בדוח יתרות לסילוק. הבנק חייב להנפיק אותו חינם תוך ימים בודדים,
                והוא לא מחייב אותך בכלום. הדוח מפרט את העמלה לכל מסלול בנפרד -
                מסלולי פריים בדרך כלל פטורים, מסלולים בריבית קבועה הם המקור
                העיקרי לעמלה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם למחזר בבנק שלי או בבנק אחר?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תבדוק את שניהם. מחזור פנימי (באותו בנק) פשוט יותר וזול יותר
                בעלויות נלוות. מחזור חיצוני פותח תחרות אמיתית - קח הצעות
                מבנק טפחות, מזרחי טפחות ולאומי, וחזור עם הטובה שבהן לבנק
                הנוכחי שלך. הרבה פעמים הוא ישווה אותה כדי לא לאבד אותך.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">ההחזר החודשי ירד - למה החיסכון הכולל שלילי?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כנראה הארכת את התקופה. פריסה של אותה יתרה על יותר שנים מקטינה
                את ההחזר החודשי אבל מוסיפה שנות ריבית. זו לא בהכרח טעות - לפעמים
                ההקלה בתזרים שווה את זה - אבל צריך לעשות את זה בעיניים פקוחות.
              </p>
            </div>

          </div>
        </div>

        {/* ── Cross-link to the refinance guide ── */}
        <div className="p-5 bg-primary-50 border border-primary-100 rounded-2xl">
          <p className="font-semibold text-accent-800 mb-1 text-sm">
            רוצה להבין את התהליך לעומק לפני שאתה פונה לבנק?
          </p>
          <p className="text-accent-500 text-sm mb-3">
            המדריך המלא למחזור משכנתא מסביר מתי כדאי, מה לבדוק בדוח היתרות,
            ואיך לנהל משא ומתן מול הבנק.
          </p>
          <a
            href="/guides/מחזור-משכנתא"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600
                       hover:text-primary-700 underline underline-offset-2 transition-colors duration-150"
          >
            למדריך המלא: מחזור משכנתא - מתי כדאי ומתי לא
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </section>

      <AdSlot variant="bottom" className="mt-10" />
    </div>
  );
}
