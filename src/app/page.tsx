import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import JsonLd from '@/components/SEO';
import HeroCalculator from '@/components/HeroCalculator';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: { absolute: 'מחשבונים פיננסיים בעברית | Maxit' },
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
    description: 'הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין מפורט.',
    href: '/tools/mortgage-calculator',
    glyph: '₪',
  },
  {
    title: 'מחשבון הלוואה',
    description: 'חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל סוג הלוואה צרכנית.',
    href: '/tools/loan-calculator',
    glyph: '%',
  },
  {
    title: 'מחשבון שכר נטו',
    description: 'חשבו כמה תקבלו הביתה אחרי מס הכנסה, ביטוח לאומי ופנסיה — מדרגות 2026.',
    href: '/tools/salary-calculator',
    glyph: 'נ׳',
  },
];

const guides = [
  {
    title: 'הלוואות: איך בוחרים נכון',
    description: 'איך משווים בין הצעות, מה לבדוק לפני שחותמים, ואיך לא ליפול על ריבית מוסתרת.',
    href: '/guides/halvaot-madrich',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה חוץ בנקאית: המדריך המלא',
    description: 'חברות האשראי, גופי מימון פרטיים, ומה ההבדל האמיתי לעומת הלוואה מהבנק.',
    href: '/guides/halvaah-hutz-bankait',
    category: 'הלוואות',
  },
  {
    title: 'הלוואה מקרן השתלמות',
    description: 'הלוואה בריבית נמוכה שמחכה לך בקרן — רוב האנשים פשוט לא יודעים שזה אפשרי.',
    href: '/guides/הלוואה-מקרן-השתלמות',
    category: 'חיסכון',
  },
  {
    title: 'משכנתא ראשונה: המדריך לקונה דירה',
    description: 'מהפגישה הראשונה בבנק ועד חתימת החוזה — כל שלב בתהליך מוסבר בפשטות.',
    href: '/guides/משכנתא-ראשונה',
    category: 'משכנתא',
  },
  {
    title: 'מחזור משכנתא: מתי כדאי ומתי לא',
    description: 'מתי הריבית החדשה מצדיקה את עלויות המחזור, ואיך לחשב את נקודת האיזון.',
    href: '/guides/מחזור-משכנתא',
    category: 'משכנתא',
  },
  {
    title: 'ריבית אפקטיבית: המספר שחשוב',
    description: 'הריבית הנומינלית בפרסומת היא לא מה שתשלמו בפועל. הנה ההבדל ואיך לחשב אותו.',
    href: '/guides/ריבית-אפקטיבית',
    category: 'ריביות',
  },
];

const recentArticles = [
  {
    title: 'משכנתא ראשונה: המדריך המלא לזוגות ורוכשים',
    description: 'לוקחים משכנתא לראשונה? הון עצמי, תמהיל, זכאות, ביטוח ואיך לא להיות טרף קל לבנק.',
    href: '/guides/משכנתא-ראשונה',
    category: 'משכנתאות',
    date: 'מאי 2026',
  },
  {
    title: 'כמה משכנתא אפשר לקחת לפי משכורת?',
    description: 'הבנק מאשר לפי ההכנסה שלך. כך מחשבים כמה תקבלו, עם טבלאות מספרים אמיתיות לשנת 2026.',
    href: '/guides/כמה-משכנתא-לפי-משכורת',
    category: 'משכנתאות',
    date: 'מאי 2026',
  },
  {
    title: 'הלוואה מקרן השתלמות: הריבית הזולה שרוב האנשים שוכחים',
    description: 'אחת ההלוואות הזולות בשוק מחכה לך בקרן. יש כמה דברים שחייבים להבין לפני שלוחצים אישור.',
    href: '/guides/הלוואה-מקרן-השתלמות',
    category: 'הלוואות',
    date: 'מאי 2026',
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden" style={{ background: '#F6F4EF' }}>
        {/* Ambient glow blobs */}
        <div className="absolute pointer-events-none animate-glow-1" aria-hidden="true"
          style={{ top: '-160px', left: '-120px', width: '480px', height: '480px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201,164,76,.28), rgba(20,154,91,.14) 55%, transparent 75%)',
            filter: 'blur(10px)', zIndex: 0 }}
        />
        <div className="absolute pointer-events-none animate-glow-2" aria-hidden="true"
          style={{ bottom: '-200px', right: '10%', width: '380px', height: '380px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,154,91,.2), transparent 70%)',
            zIndex: 0 }}
        />

        <div className="container-wide relative py-16 sm:py-20 lg:py-[72px]" style={{ zIndex: 1 }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 items-center"
            style={{ gap: '64px' }}
            dir="ltr"
          >
            {/* Headline column */}
            <div className="text-right animate-fadeUp" dir="rtl">
              <div
                className="inline-flex items-center gap-2 mb-6"
                style={{
                  background: '#EAF5EE', color: '#0E3D2C', border: '1px solid #CDE6D6',
                  padding: '6px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                }}
              >
                <span
                  className="animate-pulse-dot"
                  style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#C9A44C' }}
                />
                מחשבונים פיננסיים חכמים
              </div>

              <h1
                className="font-extrabold leading-tight mb-5"
                style={{ fontSize: 'clamp(36px, 5vw, 58px)', letterSpacing: '-1px', color: '#14231C' }}
              >
                תכננו את{' '}
                <span className="gradient-text">המשכנתא שלכם</span>{' '}
                בביטחון מלא
              </h1>

              <p className="text-lg leading-relaxed mb-8 max-w-[480px]" style={{ color: '#55534A' }}>
                הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין מפורט — הכלי החינמי המתקדם ביותר לתכנון משכנתא בישראל.
              </p>

              <div className="flex flex-wrap gap-3.5">
                <Link
                  href="/tools/mortgage-calculator"
                  className="text-white font-bold cursor-pointer transition-all duration-250"
                  style={{
                    background: '#149A5B', padding: '15px 30px', borderRadius: '999px',
                    fontSize: '16px', boxShadow: '0 6px 18px rgba(20,154,91,.28)',
                  }}
                >
                  מחשבון משכנתא מלא
                </Link>
                <Link
                  href="/guides"
                  className="btn-secondary"
                >
                  מדריכים
                </Link>
              </div>
            </div>

            {/* Calculator column */}
            <div>
              <HeroCalculator />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className="flex flex-wrap justify-center gap-4 sm:gap-9 text-sm"
          style={{
            padding: '18px 24px', color: '#6B675D',
            borderTop: '1px solid #E5E1D6', borderBottom: '1px solid #E5E1D6',
            background: '#FBFAF6',
          }}
        >
          <span>מחושב ע&quot;י <b style={{ color: '#0E3D2C' }}>+3,490</b> משתמשים החודש</span>
          <span style={{ color: '#CFC9BB' }}>·</span>
          <span>ללא הרשמה</span>
          <span className="hidden sm:inline" style={{ color: '#CFC9BB' }}>·</span>
          <span className="hidden sm:inline">חינמי לחלוטין</span>
          <span style={{ color: '#CFC9BB' }}>·</span>
          <span>מעודכן ליולי 2026</span>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section style={{ padding: '72px 0' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-11">
              <h2 className="section-title mb-2.5">הכלים שלנו</h2>
              <p className="section-subtitle mx-auto">מחשבונים מקצועיים, חינמיים ובעברית</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tools.map((tool, i) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="card-interactive group om-card-in"
                  style={{ animationDelay: `${0.05 + i * 0.1}s`, padding: '30px' }}
                >
                  <div className="tool-icon-chip mb-4">{tool.glyph}</div>
                  <h3 className="text-xl font-bold text-accent-900 mb-2 group-hover:text-accent-900">
                    {tool.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed mb-4" style={{ color: '#6B675D' }}>
                    {tool.description}
                  </p>
                  <span className="link-arrow">לחישוב ←</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GUIDES ── */}
      <section style={{ paddingBottom: '72px' }}>
        <div className="container-wide">
          <ScrollReveal>
            <div className="text-center mb-11">
              <h2 className="section-title mb-2.5">מדריכים</h2>
              <p className="section-subtitle mx-auto">מדריכים מקיפים בעברית שיעזרו לכם להבין נושאים פיננסיים</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-interactive group"
                  style={{ padding: '28px' }}
                >
                  <span className="badge-primary mb-4 inline-block">{guide.category}</span>
                  <h3 className="text-lg font-bold text-accent-900 mb-2 leading-snug">
                    {guide.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3.5" style={{ color: '#6B675D' }}>
                    {guide.description}
                  </p>
                  <span className="link-arrow text-sm">קרא עוד ←</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-9">
              <Link href="/guides" className="btn-secondary">
                כל המדריכים ←
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── RECENT ARTICLES ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #E5E1D6' }}>
        <div className="container-wide" style={{ padding: '64px 0' }}>
          <ScrollReveal>
            <div className="flex items-center justify-between mb-7 px-5 sm:px-6 lg:px-8">
              <div>
                <h2 className="text-[30px] font-extrabold text-accent-900 mb-1.5" style={{ letterSpacing: '-0.5px' }}>
                  מדריכים אחרונים
                </h2>
                <p className="text-[15px]" style={{ color: '#6B675D' }}>פורסמו לאחרונה באתר</p>
              </div>
              <Link
                href="/guides"
                className="hidden sm:inline-flex text-[15px] font-bold cursor-pointer"
                style={{ color: '#149A5B' }}
              >
                כל המדריכים ←
              </Link>
            </div>

            <div className="flex flex-col px-5 sm:px-6 lg:px-8">
              {recentArticles.map((article, i) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="recent-article-row group grid gap-6 items-center transition-all duration-200 cursor-pointer"
                  style={{
                    gridTemplateColumns: '110px 1fr auto',
                    padding: '22px 8px',
                    borderTop: '1px solid #EDEAE0',
                    ...(i === recentArticles.length - 1 ? { borderBottom: '1px solid #EDEAE0' } : {}),
                    color: '#14231C',
                  }}
                >
                  <span className="text-[13px]" style={{ color: '#8A867A' }}>
                    <b style={{ color: '#0E3D2C' }}>{article.category}</b> · {article.date}
                  </span>
                  <span>
                    <span className="block text-[17px] font-bold mb-1">{article.title}</span>
                    <span className="block text-sm" style={{ color: '#6B675D' }}>{article.description}</span>
                  </span>
                  <span className="link-arrow hidden sm:block">קרא עוד ←</span>
                </Link>
              ))}
            </div>

            <div className="sm:hidden text-center mt-8 px-5">
              <Link href="/guides" className="btn-secondary text-sm">
                כל המדריכים ←
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
