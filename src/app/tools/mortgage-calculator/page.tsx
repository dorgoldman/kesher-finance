import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import MortgageCalculator from '@/components/MortgageCalculator';
import CalcMethodology from '@/components/CalcMethodology';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבון משכנתא',
  description:
    'מחשבון משכנתא חינמי בעברית - הרכיבו תמהיל מסלולים (קבועה, משתנה, פריים, זכאות), חשבו החזר חודשי כולל ולוח סילוקין מפורט.',
  canonical: '/tools/mortgage-calculator',
  languages: {
    'he-IL': `${SITE_URL}/tools/mortgage-calculator`,
    'ar': `${SITE_URL}/ar/tools/mortgage-calculator`,
  },
});

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'מחשבון משכנתא - מקסיט',
    url: `${SITE_URL}/tools/mortgage-calculator`,
    description: 'מחשבון משכנתא חינמי בעברית עם תמהיל מסלולים ולוח סילוקין מפורט',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'All',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'ILS' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
    inLanguage: 'he',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'מחשבונים', item: `${SITE_URL}/tools` },
      { '@type': 'ListItem', position: 3, name: 'מחשבון משכנתא' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'איך מחשבים החזר חודשי של משכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לפי שיטת שפיצר: החזר = קרן × (ריבית חודשית × (1 + ריבית חודשית)^מספר תשלומים) ÷ ((1 + ריבית חודשית)^מספר תשלומים − 1). לדוגמה, משכנתא של ₪1,000,000 ל-25 שנה בריבית 5.5% = החזר חודשי של כ-₪6,141.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ההבדל בין מסלולי המשכנתא?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ארבעה מסלולים עיקריים: ריבית קבועה לא צמודה (יציבות מלאה), ריבית משתנה כל 5 שנים (נמוכה בהתחלה, עשויה לעלות), פריים (צמוד לריבית בנק ישראל, גמיש לפירעון מוקדם), וזכאות (הלוואה מסובסדת בריבית נמוכה).',
        },
      },
      {
        '@type': 'Question',
        name: 'מהו תמהיל משכנתא חכם?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תמהיל חכם מפזר סיכון: שליש קבועה (יציבות), שליש פריים (גמישות לפירעון מוקדם), שליש משתנה (חיסכון). ודאו שההחזר לא עולה על 30% מההכנסה נטו.',
        },
      },
    ],
  },
];

export default function MortgageCalculatorPage() {
  return (
    <div className="container-page py-10">
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: 'מחשבון משכנתא' },
        ]}
      />

      <div>
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h1 className="section-title">מחשבון משכנתא</h1>
              <a
                href="/ar/tools/mortgage-calculator"
                hrefLang="ar"
                className="shrink-0 text-sm font-semibold text-primary-600 hover:text-primary-700
                           underline underline-offset-2 transition-colors duration-150 cursor-pointer whitespace-nowrap"
              >
                بالعربية ←
              </a>
            </div>
            <p className="text-accent-500 leading-relaxed">
              הרכיבו את תמהיל המשכנתא שלכם ממספר מסלולים - ריבית קבועה, משתנה,
              פריים וזכאות. המחשבון מחשב את ההחזר החודשי הכולל ומציג לוח סילוקין
              משולב לכל המסלולים.
            </p>
          </div>

          <MortgageCalculator />

          <CalcMethodology
            formula="לכל מסלול: החזר חודשי = קרן × (ריבית חודשית × (1 + ריבית חודשית)^מספר תשלומים) ÷ ((1 + ריבית חודשית)^מספר תשלומים − 1). ההחזר החודשי הכולל הוא סכום ההחזרים מכל המסלולים."
            assumptions={[
              'ריבית הפריים הבסיסית: 6.5% (בנק ישראל, 2026)',
              'חישוב לפי שיטת שפיצר (תשלומים קבועים)',
              'ריבית חודשית = ריבית שנתית ÷ 12',
              'ללא התחשבות בעמלות פירעון מוקדם',
            ]}
            source="נתוני ריבית פריים: בנק ישראל"
          />

          <AdSlot variant="post-results-mobile" className="mt-6" />

          <section className="mt-14 space-y-10">
            <div>
              <h2 className="text-xl font-bold text-accent-900 mb-3">מהו תמהיל משכנתא?</h2>
              <p className="text-accent-500 leading-relaxed">
                תמהיל משכנתא הוא השילוב של מספר מסלולי הלוואה שמרכיבים את המשכנתא
                שלכם. כל מסלול מאופיין בסוג ריבית שונה, תקופה שונה וסכום שונה.
                תמהיל חכם מפזר את הסיכון ויכול לחסוך לכם עשרות אלפי שקלים.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-accent-900 mb-3">סוגי המסלולים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card border-blue-100 bg-blue-50/40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">🔒</span>
                    <h3 className="font-bold text-accent-800">ריבית קבועה לא צמודה</h3>
                  </div>
                  <p className="text-sm text-accent-500">ריבית קבועה לכל התקופה. וודאות מלאה בהחזר החודשי, מתאים לשונאי סיכון.</p>
                </div>
                <div className="card border-amber-100 bg-amber-50/40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">📈</span>
                    <h3 className="font-bold text-accent-800">ריבית משתנה</h3>
                  </div>
                  <p className="text-sm text-accent-500">ריבית מתעדכנת כל 5 שנים. בדרך כלל נמוכה יותר בהתחלה, אך עשויה לעלות.</p>
                </div>
                <div className="card border-violet-100 bg-violet-50/40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">📊</span>
                    <h3 className="font-bold text-accent-800">פריים</h3>
                  </div>
                  <p className="text-sm text-accent-500">צמוד לריבית הפריים של בנק ישראל. גמיש לפירעון מוקדם, משתנה עם השוק.</p>
                </div>
                <div className="card border-emerald-100 bg-emerald-50/40">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl" aria-hidden="true">🏛️</span>
                    <h3 className="font-bold text-accent-800">זכאות</h3>
                  </div>
                  <p className="text-sm text-accent-500">הלוואה מסובסדת לזכאים. ריבית נמוכה ותנאים מועדפים מהמדינה.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-accent-900 mb-3">טיפים לתמהיל חכם</h2>
              <ul className="space-y-3 text-accent-500">
                <li className="flex gap-2">
                  <span className="text-primary-500 font-bold">01</span>
                  <span>ודאו שההחזר החודשי הכולל לא עולה על 30% מההכנסה הפנויה</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-500 font-bold">02</span>
                  <span>שלבו מסלול פריים (גמישות לפירעון) עם מסלול קבוע (יציבות)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-500 font-bold">03</span>
                  <span>השוו הצעות מלפחות 3 בנקים לפני שמתחייבים</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary-500 font-bold">04</span>
                  <span>קחו בחשבון עלויות נלוות - שמאי, עורך דין, ביטוח משכנתא</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-accent-900 mb-4">שאלות נפוצות</h2>
              <div className="space-y-4">

                <div className="card">
                  <h3 className="font-bold text-accent-800 mb-2">איך מחשבים החזר חודשי של משכנתא?</h3>
                  <p className="text-sm text-accent-500 leading-relaxed">
                    לפי שיטת שפיצר: החזר = קרן × (ריבית חודשית × (1 + ריבית חודשית)^מספר תשלומים)
                    ÷ ((1 + ריבית חודשית)^מספר תשלומים − 1). לדוגמה, משכנתא של ₪1,000,000 ל-25
                    שנה בריבית 5.5% = החזר חודשי של כ-₪6,141.
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-accent-800 mb-2">מה ההבדל בין מסלולי המשכנתא?</h3>
                  <p className="text-sm text-accent-500 leading-relaxed">
                    ארבעה מסלולים עיקריים: ריבית קבועה לא צמודה (יציבות מלאה), ריבית משתנה
                    כל 5 שנים (נמוכה בהתחלה, עשויה לעלות), פריים (צמוד לריבית בנק ישראל,
                    גמיש לפירעון מוקדם), וזכאות (הלוואה מסובסדת בריבית נמוכה).
                  </p>
                </div>

                <div className="card">
                  <h3 className="font-bold text-accent-800 mb-2">מהו תמהיל משכנתא חכם?</h3>
                  <p className="text-sm text-accent-500 leading-relaxed">
                    תמהיל חכם מפזר סיכון: שליש קבועה (יציבות), שליש פריים (גמישות לפירעון
                    מוקדם), שליש משתנה (חיסכון). ודאו שההחזר לא עולה על 30% מההכנסה נטו.
                  </p>
                </div>

              </div>
            </div>
          </section>

          <AdSlot variant="bottom" className="mt-10" />
      </div>
    </div>
  );
}
