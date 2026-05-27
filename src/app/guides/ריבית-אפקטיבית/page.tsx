import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { CalculatorCTA } from '@/templates/article-page';
import MobileArticleTOC from '@/components/MobileArticleTOC';

const CANONICAL = 'https://getmaxit.co.il/guides/ריבית-אפקטיבית';

export const metadata: Metadata = {
  title: 'ריבית אפקטיבית',
  description:
    'הבנק הציע לך ריבית של 6%? יכול להיות שתשלם 9% בפועל. כך מבינים ריבית אפקטיבית ומשתמשים בה לטובתך.',
  alternates: { canonical: CANONICAL },
};

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'ריבית אפקטיבית - מה זה באמת ואיך לא ליפול בפח',
    description:
      'הבנק הציע לך ריבית של 6%? יכול להיות שתשלם 9% בפועל. כך מבינים ריבית אפקטיבית ומשתמשים בה לטובתך.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-05-17',
    dateModified: '2026-05-17',
    author: { '@type': 'Organization', name: 'מקסיט. Maxit' },
    publisher: { '@type': 'Organization', name: 'מקסיט. Maxit' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי', item: 'https://getmaxit.co.il' },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: 'https://getmaxit.co.il/guides' },
      { '@type': 'ListItem', position: 3, name: 'ריבית אפקטיבית', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה ההבדל בין ריבית אפקטיבית לריבית נומינלית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ריבית נומינלית היא הריבית הבסיסית לפני עמלות ועלויות נוספות. ריבית אפקטיבית כוללת את הכל ומשקפת את העלות האמיתית של ההלוואה. תמיד השווה לפי ריבית אפקטיבית.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם הבנק חייב להציג ריבית אפקטיבית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן. על פי חוק, כל גוף מימון בישראל חייב להציג את הריבית האפקטיבית השנתית לפני חתימה על הסכם הלוואה. אם לא הציגו, בקש בכתב.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם ריבית אפקטיבית גבוהה מ-20% חוקית?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'יש תקרת ריבית מקסימלית שנקבעת בחוק ומתעדכנת מדי פעם. ריביות גבוהות מאוד, מעל 20-25%, נפוצות בעיקר בהלוואות חוץ בנקאיות ויש לבחון אותן בקפידה. לגופים חוץ בנקאיים לא מפוקחים יש פחות הגנות.',
        },
      },
      {
        '@type': 'Question',
        name: 'מה עדיף: ריבית קבועה או משתנה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי בתחזית הריבית. כשריבית הפריים גבוהה וצפויה לרדת, ריבית משתנה יכולה להיות עדיפה. כשריבית נמוכה וצפויה לעלות, קבועה בטוחה יותר. ב-2026, עם ציפיות להורדת ריבית הדרגתית, שווה לשקול.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'nakuva-efektivit', label: 'ריבית נקובה מול אפקטיבית' },
  { id: 'lama-zeh-hashuv',  label: 'למה זה חשוב?' },
  { id: 'mah-nichlas',      label: 'מה נכלל בריבית האפקטיבית?' },
  { id: 'lefi-sug',         label: 'ריבית טובה לפי סוג הלוואה' },
  { id: 'eich-meshavim',    label: 'איך משווים הצעות נכון?' },
  { id: 'taaut-nefutza',    label: 'טעות נפוצה שעולה כסף' },
  { id: 'faq',              label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function RibitEfektivitPage() {

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
          { label: 'ריבית אפקטיבית' },
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
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              ריבית אפקטיבית: המספר שהבנק מעדיף שלא תסתכל עליו
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב על ידי צוות מקסיט</span>
              <span aria-hidden="true">·</span>
              <span>עודכן: מאי 2026</span>
            </div>
          </header>

          {/* Intro */}
          <p className={p}>
            הבנק הציע לך ריבית של 6% על הלוואה. נשמע סביר.
          </p>
          <p className={p}>
            אבל אחרי עמלת פתיחת תיק, דמי ניהול וביטוח חובה, אתה משלם בפועל 8.5%. זאת
            הריבית האפקטיבית. וזה המספר שצריך להסתכל עליו.
          </p>

          {/* Section 1 */}
          <h2 id="nakuva-efektivit" className={h2}>מה ההבדל בין ריבית נקובה לריבית אפקטיבית?</h2>
          <p className={p}>
            ריבית נקובה, שנקראת גם ריבית נומינלית, היא הריבית הבסיסית שמציגים לך בפרסומת
            או בהצעה. היא לא כוללת עמלות, דמי ניהול, ביטוחים, או עלויות נסתרות.
          </p>
          <p className={p}>
            ריבית אפקטיבית היא העלות האמיתית של ההלוואה. היא מחושבת לאחר שמוסיפים את כל
            העמלות ועלויות הנלוות, ומבטאת כמה אתה משלם בפועל על כל שקל שלוות.
          </p>
          <p className={p}>
            הפער יכול להיות קטן או גדול, תלוי בגוף המלווה. בחברות חוץ בנקאיות ובחברות
            אשראי, הפער לפעמים מגיע ל-3-4 אחוזים ויותר.
          </p>

          {/* Section 2 */}
          <h2 id="lama-zeh-hashuv" className={h2}>למה זה חשוב?</h2>
          <p className={p}>
            כי השוואת ריביות ללא ריבית אפקטיבית היא חסרת משמעות.
          </p>
          <p className={p}>
            בנק א' מציע 7% ריבית עם עמלת פתיחת תיק ₪500 ודמי ניהול חודשיים. בנק ב' מציע
            8% ריבית ללא עמלות. מי זול יותר? תלוי לחלוטין בסכום ובתקופה. בלי לחשב את
            הריבית האפקטיבית, אי אפשר לדעת.
          </p>
          <p className={p}>
            על פי חוק, כל גוף מימון בישראל חייב להציג את הריבית האפקטיבית לפני חתימה. אם
            לא הציגו לך אותה, בקש אותה בכתב.
          </p>

          {/* Section 3 */}
          <h2 id="mah-nichlas" className={h2}>מה נכלל בריבית האפקטיבית?</h2>
          <p className={p}>
            כל דבר שעולה לך כסף בגלל ההלוואה:
          </p>
          <p className={p}>
            עמלת פתיחת תיק, שיכולה לנוע בין ₪200 לכמה אלפי שקלים. דמי ניהול חודשיים,
            שנראים קטנים אבל מצטברים לאורך השנים. ביטוח חיים או ביטוח אשראי שהגוף המלווה
            מחייב. הצמדה למדד, אם ההלוואה צמודה. תדירות חיוב הריבית, שמשפיעה על העלות
            בגלל ריבית דריבית.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לחשב כמה ההלוואה תעלה לך בפועל?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה מראה החזר חודשי, ריבית כוללת ועלות אמיתית.
              </p>
            </div>
            <Link
              href="/tools/loan-calculator"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                         bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                         transition-colors duration-200 cursor-pointer whitespace-nowrap"
            >
              מחשבון הלוואה
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Section 4 */}
          <h2 id="lefi-sug" className={h2}>ריבית טובה לפי סוג הלוואה: המדריך המהיר</h2>
          <p className={p}>
            לא כל ריבית אפקטיבית שווה. הנה מה שנחשב תחרותי בישראל ב-2026:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הלוואה מקרן השתלמות:</span>{' '}
            5-7% אפקטיבי. הזול ביותר שתמצא.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הלוואה בנקאית עם ביטחונות:</span>{' '}
            6-9% אפקטיבי. תלוי בנכס ובדירוג האשראי.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הלוואה בנקאית צרכנית:</span>{' '}
            8-12% אפקטיבי. הסטנדרט לרוב הישראלים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">הלוואה חוץ בנקאית:</span>{' '}
            12-24% אפקטיבי. לפעמים הכרחי, אבל בדוק היטב את התנאים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">אשראי בכרטיס:</span>{' '}
            15-30% אפקטיבי. היקר ביותר. להימנע מהלוואות ארוכות טווח בכרטיס.
          </p>
          <p className={p}>
            אם מישהו מציע לך הלוואה בריבית נמוכה משמעותית מהטווח הרלוונטי, בדוק מה
            מסתתר בתנאים.
          </p>

          {/* Section 5 */}
          <h2 id="eich-meshavim" className={h2}>איך משווים הצעות נכון?</h2>
          <p className={p}>
            שלושה צעדים פשוטים:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">בקש את הריבית האפקטיבית השנתית בכתב.</span>{' '}
            מכל גוף מימון. לא את הנקובה, את האפקטיבית. זאת הזכות שלך על פי חוק.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">השווה על אותו סכום ואותה תקופה.</span>{' '}
            ריבית אפקטיבית של הלוואה ל-3 שנים תהיה שונה מאותה הלוואה ל-5 שנים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">בדוק אם יש עמלת פירעון מוקדם.</span>{' '}
            הלוואה עם ריבית אפקטיבית נמוכה אבל קנס פירעון גבוה יכולה להיות יקרה יותר אם
            תרצה לסגור אותה לפני הזמן.
          </p>

          {/* Section 6 */}
          <h2 id="taaut-nefutza" className={h2}>טעות נפוצה שעולה כסף</h2>
          <p className={p}>
            לחתום על ביטוח חיים שהגוף המלווה מציע, מבלי להשוות.
          </p>
          <p className={p}>
            בנקים וחברות מימון לפעמים מחייבים ביטוח אשראי כתנאי לקבלת ההלוואה. הביטוח
            שהם מציעים לא תמיד הכי זול בשוק. אפשר לפעמים להציג ביטוח חיים קיים כבטוחה
            ולחסוך כמה מאות שקלים בשנה. שווה לשאול.
          </p>

          {/* Calculator CTA */}
          <CalculatorCTA
            calculatorName="מחשבון ההלוואה"
            calculatorUrl="/tools/loan-calculator"
            teaser="הכנס שתי הצעות שונות לפי אותו סכום ותקופה ותראה מה ההפרש בפועל."
          />

          {/* Section 7: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה ההבדל בין ריבית אפקטיבית לריבית נומינלית?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                ריבית נומינלית היא הריבית הבסיסית לפני עמלות ועלויות נוספות. ריבית אפקטיבית
                כוללת את הכל ומשקפת את העלות האמיתית של ההלוואה. תמיד השווה לפי ריבית
                אפקטיבית.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם הבנק חייב להציג ריבית אפקטיבית?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן. על פי חוק, כל גוף מימון בישראל חייב להציג את הריבית האפקטיבית השנתית
                לפני חתימה על הסכם הלוואה. אם לא הציגו, בקש בכתב.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם ריבית אפקטיבית גבוהה מ-20% חוקית?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                יש תקרת ריבית מקסימלית שנקבעת בחוק ומתעדכנת מדי פעם. ריביות גבוהות מאוד,
                מעל 20-25%, נפוצות בעיקר בהלוואות חוץ בנקאיות ויש לבחון אותן בקפידה.
                לגופים חוץ בנקאיים לא מפוקחים יש פחות הגנות.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה עדיף: ריבית קבועה או משתנה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי בתחזית הריבית. כשריבית הפריים גבוהה וצפויה לרדת, ריבית משתנה יכולה
                להיות עדיפה. כשריבית נמוכה וצפויה לעלות, קבועה בטוחה יותר. ב-2026, עם
                ציפיות להורדת ריבית הדרגתית, שווה לשקול.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/guides/halvaah-hutz-bankait" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה חוץ בנקאית: המדריך המלא
              </Link>
              <Link href="/guides/halvaah-lchol-matara" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה לכל מטרה: מתי כדאי, מתי לא, וכמה זה עולה
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
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
                מחשבון הלוואה
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                חשב החזר חודשי, סך ריבית ועלות כוללת של ההלוואה שלך.
              </p>
              <Link
                href="/tools/loan-calculator"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5
                           bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold
                           rounded-xl transition-colors duration-200 cursor-pointer"
              >
                לחישוב
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

          </div>
        </aside>

      </div>

      {/* Ad slot - below article */}
      <AdSlot variant="bottom" className="mt-10" />

    </div>
  );
}
