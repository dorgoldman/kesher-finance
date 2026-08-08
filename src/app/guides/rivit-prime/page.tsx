import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/ריבית-פריים';

export const metadata: Metadata = {
  title: 'ריבית פריים 2026',
  description:
    'ריבית הפריים עלתה? ירדה? כך זה משפיע על המשכנתא וההלוואות שלך. מה זה פריים מינוס, כמה לשים בתמהיל, ומה קרה בשנים האחרונות.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ריבית פריים 2026 - הסבר פשוט וכל מה שצריך לדעת',
    description:
      'ריבית הפריים עלתה? ירדה? כך זה משפיע על המשכנתא וההלוואות שלך. מדריך מעודכן לשנת 2026.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-17',
    dateModified: '2026-07-08',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: 'מקסיט. Maxit' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: 'https://getmaxit.co.il' },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: 'https://getmaxit.co.il/guides' },
      { '@type': 'ListItem', position: 3, name: 'ריבית פריים', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה ריבית הפריים היום?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ריבית הפריים עומדת על 5% (נכון ליולי 2026, לאחר הורדת ריבית בנק ישראל ב-6.7.2026). היא מורכבת מריבית בנק ישראל (3.5%) ועוד 1.5% קבוע.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם ריבית הפריים תרד ב-2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'השוק מתמחר הורדת ריבית הדרגתית ב-2026, אבל התחזיות משתנות לפי נתוני האינפלציה. אף אחד לא יודע בדיוק מתי ובכמה.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה ההבדל בין פריים לריבית קבועה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'פריים משתנה עם הזמן בהתאם להחלטות בנק ישראל. ריבית קבועה נקבעת ביום לקיחת ההלוואה ולא משתנה. פריים בדרך כלל זול יותר בטווח הקצר, אבל כרוך בסיכון של עלייה.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לעבור ממסלול פריים לריבית קבועה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. זה נקרא מחזור משכנתא. יש לזה עלויות, אבל לעיתים זה שווה את זה. תלוי בפער הריביות ובכמה שנים נשארו למשכנתא.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'mah-ze',      label: 'מה זה ריבית פריים?' },
  { id: 'lama-meshane', label: 'למה זה משנה לך?' },
  { id: 'minus',       label: 'פריים מינוס - מה המינוס?' },
  { id: 'kamah',       label: 'כמה לשים במסלול פריים?' },
  { id: 'historia',    label: 'מה קרה בשנים האחרונות?' },
  { id: 'dugma',       label: 'דוגמה מספרית' },
  { id: 'taut',        label: 'טעויות נפוצות' },
  { id: 'faq',         label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function RibitPrimePage() {

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
          { label: 'ריבית פריים' },
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
              ריבית פריים: מה זה ואיך זה משפיע עליך
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן: יולי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            בנק ישראל הודיע. הריבית השתנתה. ואתה קיבלת הודעה מהבנק שהחזר המשכנתא שלך
            ישתנה החודש.
          </p>
          <p className={p}>
            מרגיש שמישהו שינה את כללי המשחק בלי לשאול אותך. זה בדיוק מה שריבית הפריים עושה.
          </p>

          {/* Section 1 */}
          <h2 id="mah-ze" className={h2}>מה זה בכלל ריבית פריים?</h2>
          <p className={p}>
            ריבית הפריים היא ריבית ייחוס שנקבעת על ידי בנק ישראל, ומשמשת בסיס לחישוב
            ריביות על הלוואות ומשכנתאות בישראל.
          </p>
          <p className={p}>
            כיום ריבית הפריים עומדת על 5% (ריבית בנק ישראל 3.5% פלוס 1.5% קבוע).
            הבנקים לא ממציאים את הריבית שלהם. הם לוקחים את הפריים ומוסיפים עליו מרווח.
          </p>
          <p className={p}>
            כשבנק ישראל מעלה את הריבית, הפריים עולה. כשהוא מוריד, הפריים יורד. זה קורה
            בערך 8 פעמים בשנה בישראל, בהחלטות ועדת המוניטרין.
          </p>

          {/* Section 2 */}
          <h2 id="lama-meshane" className={h2}>למה זה משנה לך?</h2>
          <p className={p}>
            אם יש לך משכנתא עם מסלול פריים (פריים מינוס X%), כל שינוי בריבית הפריים משפיע
            ישירות על ההחזר החודשי שלך.
          </p>
          <p className={p}>
            דוגמה פשוטה: לקחת ₪500,000 במסלול פריים מינוס 1.5% לתקופה של 20 שנה. כשהפריים
            היה 3.5%, שילמת בערך ₪1,750 בחודש. כשהפריים קפץ ל-6.5%, ההחזר קפץ ל-₪2,400
            בחודש. זה ₪650 יותר בכל חודש. מאותה הלוואה, מאותו בנק.
          </p>
          <p className={p}>
            זה לא עמלה. זה לא קנס. זה פשוט כך הפריים עובד.
          </p>

          {/* Section 3 */}
          <h2 id="minus" className={h2}>פריים מינוס: מה המינוס הזה?</h2>
          <p className={p}>
            הבנקים לא נותנים לך פריים טהור. הם נותנים פריים מינוס מרווח. למשל: פריים מינוס 1.5%.
          </p>
          <p className={p}>
            כשאתה מנהל משא ומתן על משכנתא, המרווח הזה הוא אחד הדברים שאפשר לשפר. פריים
            מינוס 1.8% עדיף על פריים מינוס 1.2%. ההבדל נראה קטן. לאורך 25 שנה הוא עשרות
            אלפי שקלים.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לראות כמה ריבית הפריים משנה את ההחזר שלך?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון המשכנתא מחשב את זה אוטומטית.
              </p>
            </div>
            <a
              href="/tools/mortgage-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון משכנתא
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Section 4 */}
          <h2 id="kamah" className={h2}>כמה מהמשכנתא כדאי לשים במסלול פריים?</h2>
          <p className={p}>
            זאת שאלה שאין עליה תשובה אחת נכונה. אבל יש כלל אצבע.
          </p>
          <p className={p}>
            בנק ישראל ממליץ לא לחרוג מ-33% מהמשכנתא במסלול משתנה (פריים וריבית משתנה
            יחד). הסיבה פשוטה: אם הריבית תעלה בצורה חדה, אתה לא רוצה שכל המשכנתא שלך
            תתייקר בבת אחת.
          </p>
          <p className={p}>
            לרוב הזוגות, שילוב של 30% עד 33% פריים עם שאר המשכנתא בקבועה ומשתנה נותן את
            האיזון הטוב ביותר בין ריבית נוחה לסיכון מנוהל.
          </p>

          {/* Section 5 */}
          <h2 id="historia" className={h2}>מה קרה לריבית הפריים בשנים האחרונות?</h2>
          <p className={p}>
            בין 2021 ל-2023 ריבית בנק ישראל עלתה מ-0.1% ל-4.75% תוך שנה וחצי. זה קצב
            העלאה שלא ראינו בישראל מעולם.
          </p>
          <p className={p}>
            מי שהיה עם משכנתא בפריים ראה את ההחזר החודשי שלו עולה בכמה מאות שקלים תוך
            חודשים בודדים. מי שבנה נכון את התמהיל ספג את הזעזוע בצורה מבוקרת.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-2 text-right font-semibold">שנה</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית בנק ישראל</th>
                  <th className="px-4 py-2 text-right font-semibold">ריבית פריים</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['2020', '0.10%', '1.60%'],
                  ['2021', '0.10%', '1.60%'],
                  ['סוף 2022', '3.25%', '4.75%'],
                  ['שיא 2023', '4.75%', '6.25%'],
                  ['2024', '4.50%', '6.00%'],
                  ['יולי 2026 (כיום)', '3.50%', '5.00%'],
                ].map(([year, boi, prime], i) => (
                  <tr key={year} className={i % 2 === 0 ? '' : 'bg-accent-50/60'}>
                    <td className="border border-accent-100 px-4 py-2 text-accent-700">{year}</td>
                    <td className="border border-accent-100 px-4 py-2 text-accent-600">{boi}</td>
                    <td className="border border-accent-100 px-4 py-2 font-medium text-primary-700">{prime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={p}>
            מקור:{' '}
            <a
              href="https://www.boi.org.il/monetary-policy/interest-rate-decisions/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 underline underline-offset-2 hover:text-primary-700"
            >
              החלטות ועדת המוניטרין, בנק ישראל
            </a>
            . נבדק לאחרונה: 8 ביולי 2026.
          </p>

          {/* Section 6: worked example */}
          <h2 id="dugma" className={h2}>דוגמה מספרית: מה קרה להחזר בפועל?</h2>
          <p className={p}>
            בואו נקח משפחה שלקחה ₪600,000 במסלול פריים מינוס 1.5% ל-25 שנה בתחילת 2021.
          </p>
          <p className={p}>
            בינואר 2021, פריים עמד על 1.6%. אחרי המינוס: 0.1% בלבד. ההחזר החודשי: כ-₪1,920.
          </p>
          <p className={p}>
            עד סוף 2022 הפריים עלה ל-4.75%. אחרי המינוס: 3.25%. ההחזר קפץ לכ-₪2,920.
            בתוך שנה אחת, ₪1,000 יותר כל חודש. מאותה הלוואה בדיוק.
          </p>
          <p className={p}>
            כיום, עם פריים 5% ומינוס 1.5%, הריבית עומדת על 3.5%. ההחזר מתייצב על כ-₪3,000.
          </p>
          <p className={p}>
            מ-₪1,920 ל-₪3,000, גידול של כ-56% בהחזר החודשי, ללא שום שינוי בגובה ההלוואה.
            מי שהגביל את הפריים ל-30% מהתמהיל ספג עלייה של כ-₪300 בחודש, לא נוח, אבל ניהול אפשרי.
          </p>

          {/* Section 7: common mistakes */}
          <h2 id="taut" className={h2}>שלוש טעויות נפוצות עם מסלול פריים</h2>
          <p className={p}>
            <span className="font-semibold text-accent-800">1. לשים יותר מדי בפריים כי "הריבית נמוכה עכשיו."</span>{' '}
            פריים זול בטווח הקצר, אבל לא יציב. מי שמשים 60% מהמשכנתא בפריים לוקח סיכון שלא
            תמיד מחושב. בנק ישראל מגביל את מסלולי המשתנה ל-33%, לא בשביל הכיף.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">2. לא לנהל משא ומתן על המינוס.</span>{' '}
            הבנקים לא מציעים את המינוס הטוב ביותר מראש. ההפרש בין פריים מינוס 1% לפריים מינוס
            1.8% נראה קטן. על ₪600,000 ל-25 שנה, זה ₪40,000-₪60,000 לאורך חיי ההלוואה.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">3. לא לשקול מחזור כשהריבית יורדת.</span>{' '}
            אם הפריים ירד משמעותית, שווה לבדוק מחזור של חלק מהמשכנתא. עלויות המחזור (כ-₪4,000-₪8,000
            טיפוסי) מוצדקות כשהחיסכון הצפוי עולה עליהן.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון המשכנתא"
            calculatorUrl="/tools/mortgage-calculator"
            teaser="שנה את ריבית הפריים במחשבון ותראה מיד איך ההחזר החודשי מגיב."
          />

          {/* Section 6: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה ריבית הפריים היום?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                ריבית הפריים עומדת על 5% (נכון ליולי 2026). היא מורכבת מריבית בנק ישראל
                (3.5%) ועוד 1.5% קבוע.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם ריבית הפריים תרד ב-2026?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                השוק מתמחר הורדת ריבית הדרגתית ב-2026, אבל התחזיות משתנות לפי נתוני
                האינפלציה. אף אחד לא יודע בדיוק מתי ובכמה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מה ההבדל בין פריים לריבית קבועה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                פריים משתנה עם הזמן בהתאם להחלטות בנק ישראל. ריבית קבועה נקבעת ביום לקיחת
                ההלוואה ולא משתנה. פריים בדרך כלל זול יותר בטווח הקצר, אבל כרוך בסיכון
                של עלייה.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                האם אפשר לעבור ממסלול פריים לריבית קבועה?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. זה נקרא מחזור משכנתא. יש לזה עלויות, אבל לעיתים זה שווה את זה. תלוי
                בפער הריביות ובכמה שנים נשארו למשכנתא.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/guides/מחזור-משכנתא" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                מחזור משכנתא: מתי זה משתלם ומתי זה מלכודת
              </a>
              <a href="/guides/שפיצר-מול-קרן-שווה" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                לוח שפיצר מול קרן שווה: ההשוואה האמיתית
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <RelatedGuides currentHref="/guides/ריבית-פריים" />

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
              <a
                href="/tools/mortgage-calculator"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5
                           bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                           rounded-xl transition-colors duration-200 cursor-pointer"
              >
                לחישוב
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </aside>

      </div>

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
