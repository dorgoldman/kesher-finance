import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import JsonLd from '@/components/SEO';
import HeroCalculator from '@/components/HeroCalculator';

export const metadata: Metadata = {
  title: 'Maxit.מקסיט - מחשבונים ומדריכים פיננסיים בעברית',
  description: 'מחשבוני משכנתא, הלוואה ושכר נטו בעברית. מדריכים פיננסיים ברורים. הכלים חינמיים, התוצאות מיידיות.',
  alternates: { canonical: SITE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: 'מחשבונים פיננסיים ומדריכים בעברית',
  inLanguage: 'he',
};

const tools = [
  {
    title: 'מחשבון משכנתא',
    description: 'הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין מפורט',
    href: '/tools/mortgage-calculator',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'מחשבון הלוואה',
    description: 'חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל סוג הלוואה צרכנית',
    href: '/tools/loan-calculator',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'מחשבון שכר נטו',
    description: 'חשבו כמה תקבלו הביתה אחרי מס הכנסה, ביטוח לאומי ופנסיה - מדרגות 2026',
    href: '/tools/salary-calculator',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
];

/* ── Greyscale bank name chips for trust bar ── */
function BankChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-lg bg-white/6 border border-white/8
                     text-white/25 text-xs font-semibold tracking-wide select-none">
      {name}
    </span>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ══════════════════════════════════════════════════════════════════
          HERO - dark, split layout
          Column order: LEFT = headline, RIGHT = calculator
          Direction: ltr on the grid so col-1 is visually left, col-2 right
          (Wise / Revolut / Ramp reference layout)
      ══════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0F1117] relative overflow-hidden">

        {/* Background glows - make glassmorphism visible in HeroCalculator */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-[-80px] right-[-60px] w-[700px] h-[700px]
                          bg-primary-600/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-[-40px] left-[-80px] w-[500px] h-[500px]
                          bg-primary-500/8 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="container-wide relative py-16 sm:py-20 lg:py-28">
          {/*
            dir="ltr" on grid: first child → LEFT column (headline),
            second child → RIGHT column (calculator).
            Hebrew text inside the headline column stays naturally right-aligned
            within its own column.
          */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
            dir="ltr"
          >

            {/* ── LEFT column: headline + CTA ── */}
            <div className="text-right" dir="rtl">
              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20
                              rounded-full px-4 py-1.5 text-sm font-medium text-primary-400 mb-6">
                <span className="w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" aria-hidden="true" />
                מחשבונים פיננסיים חכמים
              </div>

              {/*
                Skill: font-weight 900, 64-72px headline.
                Body: font-weight 300 (light) - creates typographic contrast.
              */}
              <h1
                className="text-white font-black leading-[1.05] mb-6 tracking-tight"
                style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
              >
                תכננו את<br />
                <span className="text-primary-400">המשכנתא שלכם</span><br />
                בביטחון מלא
              </h1>

              <p className="text-white/45 text-lg font-light leading-relaxed mb-8 max-w-md">
                הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין
                מפורט - הכלי החינמי המתקדם ביותר לתכנון משכנתא בישראל.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/tools/mortgage-calculator" className="btn-primary press-effect text-base px-7">
                  מחשבון משכנתא מלא
                </Link>
                <Link
                  href="/guides"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold
                             text-white/60 hover:text-white border border-white/12 hover:border-white/25
                             transition-all duration-200 cursor-pointer min-h-[44px] text-base"
                >
                  מדריכים
                </Link>
              </div>
            </div>

            {/* ── RIGHT column: live calculator ── */}
            <div>
              <HeroCalculator />
            </div>

          </div>
        </div>

        {/* ── Trust bar ── */}
        <div className="border-t border-white/6">
          <div className="container-wide py-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8">

              {/* User count + stats */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-white/30 text-sm">
                  <svg className="w-4 h-4 text-primary-500/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                  </svg>
                  <span>מחושב ע&quot;י <strong className="text-white/50 font-bold">10,000+</strong> משתמשים החודש</span>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-white/30 text-sm">
                  <svg className="w-4 h-4 text-primary-500/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>ללא הרשמה · חינמי לחלוטין</span>
                </div>
              </div>

              {/* Bank chips row + year badge */}
              <div className="flex items-center gap-2 flex-wrap justify-center" dir="rtl">
                <span className="text-white/20 text-xs ml-1">מחירים מעודכנים:</span>
                <BankChip name="הפועלים" />
                <BankChip name="לאומי" />
                <BankChip name="מזרחי" />
                <BankChip name="דיסקונט" />
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg
                                 bg-primary-500/10 border border-primary-500/20 text-primary-400/70 text-[11px] font-semibold">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  2026
                </span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          TOOLS - light section
      ══════════════════════════════════════════════════════════════════ */}
      <section className="container-wide py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="section-title mb-3">הכלים שלנו</h2>
          <p className="section-subtitle mx-auto">מחשבונים מקצועיים, חינמיים ובעברית</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Live calculator cards */}
          {tools.map((tool) => (
            <Link key={tool.href} href={tool.href} className="card-interactive group">
              <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 mb-4 group-hover:bg-primary-100 transition-colors duration-200">
                {tool.icon}
              </div>
              <h3 className="text-lg font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
                {tool.title}
              </h3>
              <p className="text-accent-500 text-sm leading-relaxed font-light">{tool.description}</p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
                <span>לחישוב</span>
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          GUIDES
      ══════════════════════════════════════════════════════════════════ */}
      <section className="container-wide pb-20">
        <div className="text-center mb-10">
          <h2 className="section-title mb-3">מדריכים</h2>
          <p className="section-subtitle mx-auto">מדריכים מקיפים בעברית שיעזרו לכם להבין נושאים פיננסיים</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* 1 — הלוואות */}
          <Link href="/guides/halvaot-madrich" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">הלוואות</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              הלוואות: איך בוחרים נכון
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              איך משווים בין הצעות, מה לבדוק לפני שחותמים, ואיך לא ליפול על ריבית מוסתרת.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* 2 — הלוואה חוץ בנקאית */}
          <Link href="/guides/halvaah-hutz-bankait" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">הלוואות</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              הלוואה חוץ בנקאית: המדריך המלא
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              חברות האשראי, גופי מימון פרטיים, ומה ההבדל האמיתי לעומת הלוואה מהבנק.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* 3 — הלוואה מקרן השתלמות */}
          <Link href="/guides/הלוואה-מקרן-השתלמות" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">חיסכון</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              הלוואה מקרן השתלמות
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              הלוואה בריבית נמוכה שמחכה לך בקרן — רוב האנשים פשוט לא יודעים שזה אפשרי.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* 4 — משכנתא ראשונה */}
          <Link href="/guides/משכנתא-ראשונה" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">משכנתא</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              משכנתא ראשונה: המדריך לקונה דירה
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              מהפגישה הראשונה בבנק עד חתימת החוזה — כל שלב בתהליך מוסבר בפשטות.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* 5 — מחזור משכנתא */}
          <Link href="/guides/מחזור-משכנתא" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">משכנתא</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              מחזור משכנתא: מתי כדאי ומתי לא
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              מתי הריבית החדשה מצדיקה את עלויות המחזור, ואיך לחשב את נקודת האיזון.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* 6 — ריבית אפקטיבית */}
          <Link href="/guides/ריבית-אפקטיבית" className="card-interactive group flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                              text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-[11px] font-semibold text-accent-400 uppercase tracking-wide">ריביות</span>
            </div>
            <h3 className="text-base font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
              ריבית אפקטיבית: המספר שחשוב
            </h3>
            <p className="text-accent-500 text-sm leading-relaxed font-light flex-1">
              הריבית הנומינלית בפרסומת היא לא מה שתשלם בפועל. הנה ההבדל ואיך לחשב אותו.
            </p>
            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary-600">
              <span>קרא עוד</span>
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

        </div>

        {/* CTA to all guides */}
        <div className="text-center mt-10">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold
                       border border-accent-200 text-accent-700 hover:border-primary-300
                       hover:text-primary-700 hover:bg-primary-50
                       transition-all duration-200 cursor-pointer text-sm"
          >
            כל המדריכים
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

      </section>
    </>
  );
}
