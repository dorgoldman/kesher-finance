import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import YoungCoupleCalculator from '@/components/YoungCoupleCalculator';
import CalcMethodology from '@/components/CalcMethodology';
import JsonLd, { generateSEOMetadata } from '@/components/SEO';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבון משכנתא לזוג צעיר',
  description:
    'מחשבון משכנתא לזוג צעיר חינמי - בדקו זכאות, הון עצמי מינימלי (25%), יחס החזר להכנסה (40%) והחזר חודשי כולל עם הלוואת זכאות ממשרד השיכון.',
  canonical: '/tools/young-couple-mortgage',
});

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'מחשבון משכנתא לזוג צעיר - מקסיט',
    url: `${SITE_URL}/tools/young-couple-mortgage`,
    description: 'מחשבון משכנתא חינמי לזוגות צעירים עם הלוואת זכאות, בדיקת הון עצמי ויחס החזר להכנסה',
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
      { '@type': 'ListItem', position: 3, name: 'מחשבון משכנתא לזוג צעיר' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'כמה הון עצמי צריך זוג צעיר לדירה ראשונה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בנק ישראל דורש מינימום 25% הון עצמי לרכישת דירה ראשונה. לדירה של ₪1,500,000 צריך לפחות ₪375,000 הון עצמי. הלוואת זכאות ממשרד השיכון לא נחשבת כהון עצמי.',
        },
      },
      {
        '@type': 'Question',
        name: 'מהי הלוואת זכאות ממשרד השיכון?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הלוואת זכאות היא הלוואה מסובסדת בריבית נמוכה (3%–4.5%) לזכאים. הסכום נע בין ₪100,000 ל-₪800,000 לפי דירוג הזכאות, ומשולמת בתנאים מועדפים לעומת משכנתא רגילה.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה מותר שההחזר החודשי של משכנתא יהיה ביחס להכנסה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'בנק ישראל מגביל את יחס ההחזר ל-40% מההכנסה נטו. רוב היועצים ממליצים לא לחרוג מ-30%. לדוגמה, עם הכנסה משותפת של ₪18,000, ההחזר המקסימלי המומלץ הוא ₪5,400.',
        },
      },
    ],
  },
];

export default function YoungCoupleMortgagePage() {
  return (
    <div className="container-page py-10">
      {jsonLd.map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      <Breadcrumbs
        items={[
          { label: 'מחשבונים', href: '/tools' },
          { label: 'מחשבון משכנתא לזוג צעיר' },
        ]}
      />

      <div>
        <div className="mb-8">
          <h1 className="section-title mb-3">מחשבון משכנתא לזוג צעיר</h1>
          <p className="text-accent-500 leading-relaxed">
            בדקו כמה הון עצמי אתם צריכים, מה ההחזר החודשי עם הלוואת זכאות ממשרד
            השיכון, והאם עומדים במבחן ההכנסה של בנק ישראל (40%).
          </p>
        </div>

        <YoungCoupleCalculator />

        <CalcMethodology
          formula="חישוב לפי שיטת שפיצר: החזר = קרן × (ריבית חודשית × (1 + ריבית חודשית)^מספר תשלומים) ÷ ((1 + ריבית חודשית)^מספר תשלומים − 1). נפרד להלוואת זכאות ולמשכנתא בנקאית."
          assumptions={[
            'הון עצמי מינימלי: 25% ממחיר הדירה (הוראת בנק ישראל)',
            'יחס החזר להכנסה מקסימלי: 40% מההכנסה נטו',
            'חישוב בשיטת שפיצר (תשלומים קבועים)',
            'ריבית הזכאות בנפרד מריבית המשכנתא הבנקאית',
          ]}
          source="הנחיות: בנק ישראל, משרד הבינוי והשיכון"
        />

        <AdSlot variant="post-results-mobile" className="mt-6" />

        <section className="mt-14 space-y-10">
          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-3">מה זוגות צעירים צריכים לדעת</h2>
            <p className="text-accent-500 leading-relaxed">
              קניית דירה ראשונה מחייבת עמידה בשלושה תנאים: הון עצמי של 25% לפחות,
              החזר חודשי שלא עולה על 40% מההכנסה, ודירוג אשראי תקין. הלוואת הזכאות
              ממשרד השיכון יכולה להוריד את העלות הכוללת — אבל לא מחליפה הון עצמי.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-4">שאלות נפוצות</h2>
            <div className="space-y-4">

              <div className="card">
                <h3 className="font-bold text-accent-800 mb-2">כמה הון עצמי צריך זוג צעיר לדירה ראשונה?</h3>
                <p className="text-sm text-accent-500 leading-relaxed">
                  בנק ישראל דורש מינימום 25% הון עצמי לרכישת דירה ראשונה. לדירה של
                  ₪1,500,000 צריך לפחות ₪375,000 הון עצמי. הלוואת זכאות ממשרד השיכון
                  לא נחשבת כהון עצמי.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-accent-800 mb-2">מהי הלוואת זכאות ממשרד השיכון?</h3>
                <p className="text-sm text-accent-500 leading-relaxed">
                  הלוואה מסובסדת בריבית נמוכה (3%–4.5%) לזכאים. הסכום נע בין ₪100,000
                  ל-₪800,000 לפי דירוג הזכאות. ההלוואה ניתנת בתנאים מועדפים לעומת
                  משכנתא בנקאית רגילה, ולעיתים ניתן לפרוע אותה בלי עמלות.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-accent-800 mb-2">כמה מותר שההחזר החודשי יהיה ביחס להכנסה?</h3>
                <p className="text-sm text-accent-500 leading-relaxed">
                  בנק ישראל מגביל את יחס ההחזר ל-40% מההכנסה נטו — מעבר לזה רוב
                  הבנקים ידחו. הכלל המומלץ: לא יותר מ-30%. עם הכנסה משותפת של
                  ₪18,000, ההחזר המקסימלי המומלץ הוא ₪5,400.
                </p>
              </div>

              <div className="card">
                <h3 className="font-bold text-accent-800 mb-2">האם עדיף לקנות דירה ראשונה מקבלן או יד שנייה?</h3>
                <p className="text-sm text-accent-500 leading-relaxed">
                  לכל אפשרות יתרונות. דירה מקבלן — אפשר לפרוס תשלומים עד האכלוס,
                  ולפעמים פטורים ממס רכישה עד תקרה. יד שנייה — מחיר נמוך יותר, כניסה
                  מהירה. שימו לב: מס רכישה לדירה ראשונה עד ₪1,978,745 = 0% (2026).
                </p>
              </div>

            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent-900 mb-3">טיפים לזוגות צעירים</h2>
            <ul className="space-y-3 text-accent-500">
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold shrink-0">01</span>
                <span>בדקו זכאות במחשבון משרד השיכון — הדירוג משפיע על הסכום</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold shrink-0">02</span>
                <span>השוו הצעות מ-3 בנקים לפחות — הפרש של 0.5% בריבית = עשרות אלפי ₪</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold shrink-0">03</span>
                <span>קחו בחשבון עלויות נלוות: שמאי (₪2,000–3,000), עו״ד (0.5%–1%), מתווך (2%)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-500 font-bold shrink-0">04</span>
                <span>אל תשכחו ביטוח משכנתא — חובה, ועולה ₪100–300 לחודש</span>
              </li>
            </ul>
          </div>
        </section>

        <div className="mt-10 p-4 bg-accent-50 rounded-xl border border-accent-200 text-sm text-accent-500 leading-relaxed">
          <p className="font-bold mb-1">אין באמור ייעוץ פיננסי.</p>
          <p>המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.</p>
        </div>

        <AdSlot variant="bottom" className="mt-10" />
      </div>
    </div>
  );
}
