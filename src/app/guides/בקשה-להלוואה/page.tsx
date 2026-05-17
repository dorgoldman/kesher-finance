'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';

/* -- Canonical -- */
const CANONICAL = 'https://getmaxit.co.il/guides/בקשה-להלוואה';

/* -- JSON-LD -- */
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'איך מגישים בקשה להלוואה ומה הבנק בודק',
    description:
      'מה הבנק בודק לפני שהוא מאשר הלוואה? ולמה יש אנשים שנדחים בלי הסבר? המדריך שיעזור לך להגיש בקשה נכון בפעם הראשונה.',
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
      { '@type': 'ListItem', position: 3, name: 'בקשה להלוואה', item: CANONICAL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'מה בודקים בבקשה להלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הבנק בודק הכנסה פנויה, היסטוריה בנקאית, דירוג אשראי מבנק ישראל, והתחייבויות קיימות. לסכומים גדולים הוא גם ידרוש ביטחונות כמו נכס או ערב.',
        },
      },
      {
        '@type': 'Question',
        name: 'הלוואה נדחתה - מה עושים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'קודם כל מבינים למה. אפשר לבקש מהבנק הסבר, ולבדוק את דוח האשראי שלך בבנק ישראל בחינם. הסיבות הנפוצות: יחס החזר גבוה, היסטוריה שלילית, או מסמכים חסרים. לפעמים פשוט כדאי לנסות בנק אחר.',
        },
      },
      {
        '@type': 'Question',
        name: 'כמה זמן לוקח אישור הלוואה?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'הלוואות קטנות בבנקים גדולים כמו לאומי או הפועלים יכולות לקבל אישור תוך שעות דרך האפליקציה. הלוואות גדולות עם ביטחונות לוקחות לרוב 3-7 ימי עסקים. חברות חוץ בנקאיות לפעמים מאשרות תוך שעה, אבל בריבית גבוהה יותר.',
        },
      },
      {
        '@type': 'Question',
        name: 'האם אפשר לקחת הלוואה מכמה בנקים?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'כן, זה חוקי לחלוטין. אבל כל הלוואה פעילה נכנסת לחישוב יחס ההחזר, ומקשה על קבלת הלוואות נוספות. כמו כן, כל בקשה כוללת בדיקת אשראי שמצטיירת בדוח שלך.',
        },
      },
    ],
  },
];

const TOC = [
  { id: 'mah-bodek',      label: 'מה הבנק בודק?' },
  { id: 'hachnasa',       label: 'מה נחשב הכנסה?' },
  { id: 'mismachim',      label: 'איזה מסמכים צריך?' },
  { id: 'eich-lehagish',  label: 'איך להגיש נכון?' },
  { id: 'lama-nidche',    label: 'למה בקשות נדחות?' },
  { id: 'achar-dichia',   label: 'מה עושים אחרי דחייה?' },
  { id: 'faq',            label: 'שאלות נפוצות' },
];

const h2 = 'text-2xl font-bold text-accent-900 mb-4 mt-12 first:mt-0 scroll-mt-24';
const p  = 'text-accent-600 leading-relaxed mb-5';

export default function BakashaLeHalvaahPage() {
  const [tocOpen, setTocOpen] = useState(false);

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
          { label: 'בקשה להלוואה' },
        ]}
      />

      {/* Ad slot - above article */}
      <AdSlot variant="header" className="mb-10" />

      {/* Mobile TOC dropdown */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setTocOpen((o) => !o)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border
                     border-accent-200 rounded-xl text-sm font-semibold text-accent-800
                     hover:border-primary-300 transition-colors duration-150 cursor-pointer"
          aria-expanded={tocOpen}
        >
          <span>תוכן עניינים</span>
          <svg
            className={`w-4 h-4 text-accent-400 transition-transform duration-200 ${tocOpen ? 'rotate-180' : ''}`}
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {tocOpen && (
          <div className="mt-1 border border-accent-200 rounded-xl bg-white overflow-hidden">
            <nav aria-label="תוכן עניינים">
              <ul>
                {TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={() => setTocOpen(false)}
                      className="flex items-center gap-2 px-4 py-2.5 text-sm text-accent-600
                                 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-150"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent-300 shrink-0" />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">

        {/* ARTICLE */}
        <article>

          <header className="mb-10">
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100
                            rounded-full px-3 py-1 text-xs font-semibold text-primary-700 mb-4">
              הלוואות
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-4 tracking-tight">
              איך מגישים בקשה להלוואה: ומה הבנק באמת בודק
            </h1>
            <p className="text-accent-400 text-sm">
              עודכן לאחרונה: מאי 2026 · קריאה: כ-5 דקות
            </p>
          </header>

          {/* Intro */}
          <p className={p}>
            הגשת בקשה להלוואה. קיבלת דחייה. בלי הסבר.
          </p>
          <p className={p}>
            זה קורה להרבה אנשים. לא תמיד בגלל שיש בעיה, לפעמים בגלל שהבקשה לא הוגשה
            נכון, או שהמסמכים לא הראו את התמונה הנכונה. הנה מה שצריך לדעת.
          </p>

          {/* Section 1 */}
          <h2 id="mah-bodek" className={h2}>מה הבנק בודק לפני שהוא מאשר?</h2>
          <p className={p}>
            הבנק בודק בעיקר שאלה אחת: האם תוכל להחזיר?
          </p>
          <p className={p}>
            כדי לענות על זה הוא בוחן את ההכנסה הפנויה שלך, כלומר מה נשאר לך אחרי הוצאות
            קבועות. בודק את ההיסטוריה הבנקאית שלך, כמה פעמים היה מינוס, האם היו צ'קים
            חוזרים. בודק את דירוג האשראי שלך מבנק ישראל. ומסתכל על ההתחייבויות הקיימות
            שלך, הלוואות פעילות, מסגרות אשראי, החזרי משכנתא.
          </p>
          <p className={p}>
            אם הסכום שאתה מבקש גדול, הוא גם יבדוק ביטחונות כמו נכס, ערב, או קרן
            השתלמות.
          </p>

          {/* Section 2 */}
          <h2 id="hachnasa" className={h2}>מה נחשב "הכנסה" בעיני הבנק?</h2>
          <p className={p}>
            כאן אנשים רבים מופתעים. לא כל הכנסה נחשבת אותו דבר.
          </p>
          <p className={p}>
            משכורת מעבודה שכירה זה הכי חזק, כי זה יציב ומוכח. הכנסה מנכס מניב נחשבת,
            אבל בנקים שונים מתייחסים אליה אחרת, וחלקם מסרבים לספור אותה במלואה. הכנסה
            של עצמאי מורכבת יותר, הבנק ירצה לראות שומות מס של שנתיים לפחות. קצבאות
            ביטוח לאומי נספרות בחלקן.
          </p>
          <p className={p}>
            אם ההכנסה שלך לא מגיעה ממשכורת, כדאי לבוא מוכן עם כמה שיותר תיעוד.
          </p>

          {/* Section 3 */}
          <h2 id="mismachim" className={h2}>איזה מסמכים צריך להכין?</h2>
          <p className={p}>
            הנה הרשימה הבסיסית לרוב הבנקים:
          </p>
          <p className={p}>
            תלושי שכר של 3 חודשים אחרונים. עבור עצמאיים: שומת מס של שנתיים אחרונות.
            תדפיס חשבון בנק של 3 חודשים. תעודת זהות. ולפעמים, במיוחד לסכומים גדולים,
            אסמכתא על הביטחונות שאתה מציע.
          </p>
          <p className={p}>
            מי שמגיע מוכן חוסך הלוך ושוב ומראה לבנק שהוא רציני.
          </p>

          {/* Section 4 */}
          <h2 id="eich-lehagish" className={h2}>איך להגיש נכון?</h2>
          <p className={p}>
            שלושה דברים שמשפרים את הסיכויים:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">לבקש מהבנק שלך קודם.</span>{' '}
            הבנק שאתה לקוח בו כבר מכיר אותך ויש לו היסטוריה. לקוח ותיק עם התנהלות
            תקינה מקבל יחס אחר ממישהו שבא מבחוץ.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">להראות יציבות.</span> אם עברת
            עבודה לאחרונה, הבנק יהסס יותר. אם אתה באותה עבודה שנתיים ויותר, זה נקודת
            חוזק.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">לבקש סכום ריאלי.</span> בקשה
            לסכום גבוה מדי ביחס להכנסה תידחה. עדיף להתחיל בסכום קטן יותר, לאשר אותו,
            ולבנות היסטוריית אשראי חיובית.
          </p>

          {/* Internal CTA */}
          <div className="my-6 p-5 bg-primary-50 border border-primary-100 rounded-2xl flex flex-col sm:flex-row
                          items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-accent-800 mb-0.5 text-sm">
                רוצה לחשב כמה ההלוואה תעלה לך לפני שמגישים?
              </p>
              <p className="text-accent-500 text-sm">
                מחשבון ההלוואה מחשב החזר חודשי ועלות כוללת.
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

          {/* Section 5 */}
          <h2 id="lama-nidche" className={h2}>למה בקשות נדחות?</h2>
          <p className={p}>
            הסיבות הנפוצות ביותר:
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">יחס החזר גבוה מדי.</span>{' '}
            הבנקים לא מאשרים הלוואה שבה ההחזר החודשי עולה על 30-40% מההכנסה הנטו. אם
            כבר יש לך הלוואות פעילות, הן נכנסות לחישוב.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">היסטוריית אשראי שלילית.</span>{' '}
            צ'קים חוזרים, חריגות ממסגרת אשראי, הלוואות שלא שולמו בזמן. הכל רשום בדוח
            האשראי שלך בבנק ישראל, ונשאר שם שנים.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">חוסר יציבות תעסוקתית.</span>{' '}
            שינוי עבודה לאחרונה, עבודה זמנית, או הכנסה לא קבועה מקשים על האישור.
          </p>
          <p className={p}>
            <span className="font-semibold text-accent-800">מסמכים לא שלמים.</span>{' '}
            לפעמים הבקשה נדחית כי חסר מסמך אחד. תמיד שאל את הפקיד בדיוק מה נדרש לפני
            שמגישים.
          </p>

          {/* Section 6 */}
          <h2 id="achar-dichia" className={h2}>מה עושים אחרי דחייה?</h2>
          <p className={p}>
            קודם כל, לא להגיש מיד לבנק אחר.
          </p>
          <p className={p}>
            כל בקשת הלוואה מצטיירת בדוח האשראי שלך. אם תגיש לחמישה בנקים תוך שבוע, זה
            נראה רע ומקטין עוד יותר את הסיכויים. קודם כל הבן למה נדחית, תקן את מה שאפשר,
            ורק אז נסה שוב.
          </p>
          <p className={p}>
            אפשר לבקש מהבנק הסבר על הדחייה. הם לא תמיד חייבים לתת אחד, אבל לפעמים
            הפקיד יגיד לך בעל פה מה הבעיה. אפשר גם להוריד את דוח האשראי שלך מאתר בנק
            ישראל בחינם ולבדוק אם יש שם שגיאות.
          </p>
          <p className={p}>
            אם הבנק לא מתאים, חברות חוץ בנקאיות מפוקחות כמו ורד מימון, פנינסולה, או
            OneZero עשויות להציע תנאים לאנשים שהבנק לא אישר. הריבית תהיה גבוהה יותר,
            אבל זה אופציה לגיטימית.
          </p>

          {/* Section 7: FAQ */}
          <h2 id="faq" className={h2}>שאלות נפוצות</h2>

          <div className="space-y-4 mb-10">
            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">מה בודקים בבקשה להלוואה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הבנק בודק הכנסה פנויה, היסטוריה בנקאית, דירוג אשראי מבנק ישראל,
                והתחייבויות קיימות. לסכומים גדולים הוא גם ידרוש ביטחונות כמו נכס
                או ערב.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">הלוואה נדחתה: מה עושים?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                קודם כל מבינים למה. אפשר לבקש מהבנק הסבר, ולבדוק את דוח האשראי שלך
                בבנק ישראל בחינם. הסיבות הנפוצות: יחס החזר גבוה, היסטוריה שלילית, או
                מסמכים חסרים. לפעמים פשוט כדאי לנסות בנק אחר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">כמה זמן לוקח אישור הלוואה?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                הלוואות קטנות בבנקים גדולים כמו לאומי או הפועלים יכולות לקבל אישור
                תוך שעות דרך האפליקציה. הלוואות גדולות עם ביטחונות לוקחות לרוב 3-7
                ימי עסקים. חברות חוץ בנקאיות לפעמים מאשרות תוך שעה, אבל בריבית גבוהה
                יותר.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-accent-800 mb-2">האם אפשר לקחת הלוואה מכמה בנקים?</h3>
              <p className="text-sm text-accent-500 leading-relaxed">
                כן, זה חוקי לחלוטין. אבל כל הלוואה פעילה נכנסת לחישוב יחס ההחזר
                ומקשה על קבלת הלוואות נוספות. כמו כן, כל בקשה כוללת בדיקת אשראי
                שמצטיירת בדוח שלך.
              </p>
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
                חשב החזר חודשי, סך ריבית ועלות כוללת לפני שמגישים.
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
