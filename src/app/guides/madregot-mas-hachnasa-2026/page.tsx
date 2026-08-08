import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedGuides from '@/components/RelatedGuides';
import AdSlot from '@/components/AdSlot';
import JsonLd from '@/components/SEO';
import { SITE_NAME } from '@/lib/constants';
import { CalculatorCTA } from '@/templates/article-page';

/* ── Canonical domain for this article ── */
const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/guides/madregot-mas-hachnasa-2026`;

export const metadata: Metadata = {
  title: 'מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה',
  description:
    'מדרגות המס השתנו ב-2026 (תיקון 288). הטבלה המלאה, מה בדיוק זז, ודוגמה מספרית לכמה זה שווה למי שמרוויח 18,000 ₪ בחודש.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה',
    description:
      'מדרגות המס השתנו ב-2026 (תיקון 288). הטבלה המלאה, מה בדיוק זז, ודוגמה מספרית לכמה זה שווה למי שמרוויח 18,000 ₪ בחודש.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה',
    description:
      'מדרגות המס השתנו ב-2026 (תיקון 288). הטבלה המלאה, מה בדיוק זז, ודוגמה מספרית לכמה זה שווה למי שמרוויח 18,000 ₪ בחודש.',
  },
};

/* ── JSON-LD ── */
const jsonLd = [
  /* 1. Article */
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה',
    description:
      'מדרגות המס השתנו ב-2026 (תיקון 288). הטבלה המלאה, מה בדיוק זז, ודוגמה מספרית לכמה זה שווה למי שמרוויח 18,000 ₪ בחודש.',
    url: CANONICAL,
    inLanguage: 'he',
    datePublished: '2026-08-05',
    dateModified: '2026-08-05',
    author: { '@type': 'Person', name: 'דור גולדמן', url: 'https://getmaxit.co.il/about' },
    publisher: { '@type': 'Organization', name: SITE_NAME },
  },
  /* 2. BreadcrumbList */
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'ראשי',    item: BASE },
      { '@type': 'ListItem', position: 2, name: 'מדריכים', item: `${BASE}/guides` },
      { '@type': 'ListItem', position: 3, name: 'מדרגות מס הכנסה 2026', item: CANONICAL },
    ],
  },
  /* 3. FAQPage */
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'אני מרוויח פחות מ-16,720 ₪ בחודש. תיקון 288 בכלל רלוונטי לי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'לא ישירות. מדרגות ה-10% וה-14% לא זזו, אז אם כל המשכורת שלך נופלת שם, המס שלך זהה למה שהיה ב-2025. השינוי משפיע רק על מי שחלק מההכנסה שלו נופל בין 16,720 ל-25,100 ₪.',
        },
      },
      {
        '@type': 'Question',
        name: 'מתי בדיוק רואים את ההבדל בתלוש?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי מתי המעסיק עדכן את מערכת השכר. החוק חל מ-1 בינואר 2026, אבל אושר רק סוף מרץ, כך שחלק מהמעסיקים ביצעו התאמה רטרואקטיבית בתלוש אחד וחלק פרסו את ההפרש על כמה חודשים.',
        },
      },
      {
        '@type': 'Question',
        name: 'נקודות הזיכוי גם השתנו ב-2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'שווי הנקודה, 242 ₪ לחודש, לא השתנה כתוצאה מתיקון 288. התיקון עוסק במדרגות המס, לא בנקודות הזיכוי.',
        },
      },
      {
        '@type': 'Question',
        name: 'איך אני יודע בכמה בדיוק זה משפיע עליי?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'תלוי כמה מהמשכורת שלך נופל בטווח 16,720-25,100 ₪ ובכמה נקודות זיכוי יש לך. הדרך הכי מהירה לקבל מספר מדויק היא להזין את המשכורת שלך במחשבון השכר נטו ולראות את הפירוט המלא.',
        },
      },
    ],
  },
];

/* ── Table of contents ── */
const TOC = [
  { id: 'takeaways', label: 'בקצרה' },
  { id: 'tikun-288', label: 'מה בדיוק השתנה בתיקון 288' },
  { id: 'tabela',    label: 'טבלת מדרגות המס המלאה' },
  { id: 'dugma',     label: 'דוגמה: משכורת 18,000 ₪' },
  { id: 'nekudot',   label: 'נקודות זיכוי' },
  { id: 'faq',       label: 'שאלות נפוצות' },
];

/* ── Shared prose typography helpers ── */
const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';
const strong = 'font-semibold text-accent-800';

export default function MadregotMasHachnasa2026Page() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs
        items={[
          { label: 'מדריכים', href: '/guides' },
          { label: 'מדרגות מס הכנסה 2026' },
        ]}
      />

      {/* Ad slot - above article */}
      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ══ ARTICLE ══════════════════════════════════════════════════════ */}
        <article>

          {/* Article header */}
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              מיסוי
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              מדרגות מס הכנסה 2026: הטבלה המלאה וכל מה שהשתנה
            </h1>
            <div className="flex flex-wrap items-center gap-1.5 text-sm text-accent-400">
              <span>נכתב ונערך על ידי{' '}
                <a href="/about" className="underline underline-offset-2 hover:text-primary-600">דור גולדמן</a></span>
              <span aria-hidden="true">·</span>
              <span>עודכן לאחרונה: 2026-08-05</span>
            </div>
          </header>

          {/* ── Intro ── */}
          <p className={p}>
            ₪141. זה בערך כמה יותר נשאר לך בכיס כל חודש אם אתה מרוויח 18,000 ₪
            ברוטו, בזכות שינוי שנכנס לתוקף בתחילת 2026 ורוב האנשים לא שמו לב אליו.
          </p>
          <p className={p}>
            מדרגות מס הכנסה 2026 עצמן זזו, בתיקון 288. מי שמרוויח בין 16,720
            ל-25,100 ₪ בחודש משלם עליהן פחות מס, קבוע, כל חודש, משנה שעברה.
          </p>

          {/* ── Key takeaways ── */}
          <h2 id="takeaways" className={h2}>בקצרה</h2>
          <ul className="list-none space-y-2.5 mb-8">
            {[
              'מדרגת 20% הורחבה מ-16,720 ₪ ל-19,000 ₪ לחודש, ומדרגת 31% זזה ל-19,001-25,100 ₪, לפי תיקון 288.',
              'רק שתי המדרגות האלה זזו - 10%, 14%, 35%, 47% ו-50% נשארות קפואות עד 2027.',
              'החוק בתוקף רטרואקטיבי מ-1 בינואר 2026, גם שאושר רק ב-30 במרץ.',
              'על משכורת של 18,000 ₪ ברוטו, ההפרש הוא כ-141 ₪ בחודש, כ-1,690 ₪ בשנה.',
              'שווי נקודת זיכוי ל-2026 הוא 242 ₪ לחודש, ולא השתנה בתיקון.',
              'מי שכל המשכורת שלו מתחת ל-16,720 ₪ לא מרגיש שום הבדל.',
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-accent-600 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* ── Section 1 ── */}
          <h2 id="tikun-288" className={h2}>מה בדיוק השתנה בתיקון 288</h2>
          <p className={p}>
            תיקון 288 לפקודת מס הכנסה הרחיב את מדרגת ה-20% מתקרה של 16,720 ₪
            לחודש ל-19,000 ₪, ודחף את תחילת מדרגת ה-31% ל-19,001 ₪ עד תקרה
            חדשה של 25,100 ₪, לפי רשות המסים. בפועל, פלח הכנסה שהיה נכנס
            למדרגת ה-31% עובר עכשיו למדרגת ה-20%.
          </p>
          <p className={p}>
            התיקון אושר סופית ב-30 במרץ 2026 כחלק מחוק ההתייעלות הכלכלית, אבל
            הוא חל רטרואקטיבית מה-1 בינואר 2026. מי שקיבל תלוש בין ינואר למרץ
            שילם לפי המדרגות הישנות וקיבל התאמה, בדרך כלל דרך המעסיק.
          </p>
          <p className={p}>
            רק שתי המדרגות האלה זזו. מדרגות 10%, 14%, 35%, 47% ו-50% נשארות
            קפואות מבחינת הצמדה עד 2027.
          </p>

          {/* ── Section 2 ── */}
          <h2 id="tabela" className={h2}>טבלת מדרגות מס הכנסה 2026 המלאה</h2>
          <p className={p}>
            להלן הטבלה המלאה כפי שהיא מיושמת במחשבון השכר של האתר, לפי
            רשות המסים: כל מדרגה חלה רק על החלק מההכנסה שנופל בתוכה, לא על
            כל הסכום. מי שמרוויח 20,000 ₪ משלם 10%, 14%, 20% ו-31% על ארבעה
            פלחים שונים של המשכורת שלו, בשום שלב לא על הכל ביחד.
          </p>

          <div className="overflow-x-auto mb-8 rounded-2xl border border-accent-100 shadow-sm">
            <table className="w-full text-sm text-right border-collapse">
              <thead>
                <tr className="bg-primary-600 text-white">
                  <th className="px-4 py-3 font-semibold text-right">הכנסה חודשית</th>
                  <th className="px-4 py-3 font-semibold text-right">שיעור המס</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['עד ₪7,010', '10%'],
                  ['₪7,011 עד ₪10,060', '14%'],
                  ['₪10,061 עד ₪19,000', '20%'],
                  ['₪19,001 עד ₪25,100', '31%'],
                  ['₪25,101 עד ₪46,690', '35%'],
                  ['₪46,691 עד ₪60,130', '47%'],
                  ['מעל ₪60,130', '50%'],
                ].map(([range, rate], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-accent-50/60'}>
                    <td className="px-4 py-3 font-medium text-accent-800 border border-accent-100">{range}</td>
                    <td className="px-4 py-3 text-accent-600 border border-accent-100">{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Section 3: worked example ── */}
          <h2 id="dugma" className={h2}>דוגמה מספרית: כמה זה שווה למי שמרוויח 18,000 ₪ בחודש</h2>
          <p className={p}>
            ניקח מישהו עם משכורת ברוטו של 18,000 ₪ ומחשב את המס לפני נקודות
            זיכוי, כדי לבודד בדיוק את האפקט של הרחבת המדרגה. שום דבר אחר לא
            השתנה.
          </p>
          <p className={p}>
            <span className={strong}>לפי המדרגות הישנות</span> (20% עד 16,720 ₪,
            31% אחרי כך): ₪701 על ה-7,010 ₪ הראשונים, ₪427 על הפלח הבא של
            3,050 ₪, ₪1,332 על הפלח שנפל במדרגת ה-20% הישנה (6,660 ₪), ועוד
            ₪396.80 על ה-1,280 ₪ שנפלו כבר במדרגת ה-31%. סך הכל: ₪2,856.80.
          </p>
          <p className={p}>
            <span className={strong}>לפי המדרגות החדשות</span> (20% עד 19,000 ₪):
            אותם ₪701 ו-₪427 על שתי המדרגות הראשונות, ואז ₪1,588 על כל
            ה-7,940 ₪ שנשארו, כי כל הסכום הזה עדיין נמצא במדרגת ה-20%. סך
            הכל: ₪2,716.
          </p>
          <p className={p}>
            ההפרש: כ-₪141 בחודש, כ-₪1,690 בשנה. באותה משכורת בדיוק, בלי לעבוד
            שעה נוספת.
          </p>

          {/* Internal CTA */}
          <CalculatorCTA
            calculatorName="מחשבון השכר נטו"
            calculatorUrl="/tools/salary-calculator"
            teaser="רוצה לראות את המספר המדויק שלך, כולל נקודות זיכוי, ביטוח לאומי ופנסיה, לפי מדרגות 2026 המעודכנות?"
          />

          {/* ── Section 4 ── */}
          <h2 id="nekudot" className={h2}>נקודות זיכוי: איך יורדים מהמס הגולמי למס בתלוש</h2>
          <p className={p}>
            שווי נקודת זיכוי אחת ל-2026 הוא 242 ₪ לחודש, לפי רשות המסים. תושב
            זכר מתחיל בברירת מחדל מ-2.25 נקודות, תושבת נקבה מ-2.75 נקודות, ויש
            נקודות נוספות למי שיש לו ילדים, למי שגר באזור עדיפות לאומית, ולעוד
            קטגוריות. הטבלה למעלה נותנת רק את המס הגולמי לפי מדרגות.
          </p>
          <p className={p}>
            מי שיש לו 2.25 נקודות זיכוי מקבל הנחה קבועה של כ-₪545 בחודש מהמס
            שחושב בטבלה, בלי קשר לגובה המשכורת. זו הסיבה שהמס בפועל שמופיע
            בתלוש תמיד נמוך מהחישוב הגולמי לפי המדרגות בלבד.
          </p>

          {/* ── Section 5: FAQ ── */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                אני מרוויח פחות מ-16,720 ₪ בחודש. תיקון 288 בכלל רלוונטי לי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                לא ישירות. מדרגות ה-10% וה-14% לא זזו, אז אם כל המשכורת שלך
                נופלת שם, המס שלך זהה למה שהיה ב-2025. השינוי משפיע רק על מי
                שחלק מההכנסה שלו נופל בין 16,720 ל-25,100 ₪.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                מתי בדיוק רואים את ההבדל בתלוש?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי מתי המעסיק עדכן את מערכת השכר. החוק חל מ-1 בינואר 2026,
                אבל אושר רק סוף מרץ, כך שחלק מהמעסיקים ביצעו התאמה
                רטרואקטיבית בתלוש אחד וחלק פרסו את ההפרש על כמה חודשים.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                נקודות הזיכוי גם השתנו ב-2026?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                שווי הנקודה, 242 ₪ לחודש, לא השתנה כתוצאה מתיקון 288. התיקון
                עוסק במדרגות המס, לא בנקודות הזיכוי.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">
                איך אני יודע בכמה בדיוק זה משפיע עליי?
              </h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                תלוי כמה מהמשכורת שלך נופל בטווח 16,720-25,100 ₪ ובכמה נקודות
                זיכוי יש לך. הדרך הכי מהירה לקבל מספר מדויק היא להזין את
                המשכורת שלך במחשבון השכר נטו ולראות את הפירוט המלא.
              </p>
            </div>
          </div>

          {/* ── Cross-links ── */}
          <div className="my-8 p-5 bg-accent-50 border border-accent-100 rounded-2xl">
            <p className="text-sm font-semibold text-accent-700 mb-3">קראו גם:</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="/guides/kama-mashkanta-lpei-maskuret" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                כמה משכנתא אפשר לקחת לפי המשכורת
              </a>
              <a href="/guides/halvaah-mekarhn-hashtalmut" className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 underline underline-offset-2 transition-colors duration-150">
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                הלוואה מקרן השתלמות: איך זה עובד
              </a>
            </div>
          </div>

          {/* ── Sources + disclaimer ── */}
          <div className="mb-6 text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold text-accent-500">מקורות:</span>{' '}
            <a href="https://www.malam-payroll.com/%D7%A2%D7%93%D7%9B%D7%95%D7%A0%D7%99-%D7%9E%D7%A1-%D7%94%D7%9B%D7%A0%D7%A1%D7%94-%D7%9C%D7%A9%D7%A0%D7%AA-2026/" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">מלם שכר, עדכוני מס הכנסה 2026</a>{' '}·{' '}
            <a href="https://zcpa.co.il/Article/madregot-mas-hachnasa-2026" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">zcpa.co.il, מדרגות מס הכנסה 2026</a>{' '}·{' '}
            <a href="https://www.gov.il/BlobFolder/generalpage/income-tax-monthly-deductions-booklet/he/generalInformation_income-tax-monthly-deductions-booklet_monthly-deductions-booklet-2026.pdf" target="_blank" rel="noopener noreferrer" className="text-primary-600 underline underline-offset-2 hover:text-primary-700">רשות המסים, לוח עזר לחישוב מס ינואר 2026</a>
            {' '}(נבדק 2026-08-05)
          </div>

          <RelatedGuides currentHref="/guides/madregot-mas-hachnasa-2026" />

          <div className="border-t border-accent-100 pt-6">
            <p className="text-xs text-accent-400 leading-relaxed">
              <span className="font-semibold">אין באמור ייעוץ פיננסי.</span>{' '}
              המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ
              עם בעל רישיון.
            </p>
          </div>

        </article>

        {/* ══ SIDEBAR ══════════════════════════════════════════════════════ */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">

            {/* Sidebar ad */}
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
                מחשבון השכר נטו
              </p>
              <p className="text-xs text-accent-500 mb-4 leading-relaxed">
                חשבו את השכר נטו שלכם לפי מדרגות המס והנקודות שלכם ל-2026.
              </p>
              <a
                href="/tools/salary-calculator"
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
