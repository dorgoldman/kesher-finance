import Link from 'next/link';
import { guidesByCategory } from '@/lib/guides';
import Logo from './Logo';

const loanGuides = guidesByCategory('הלוואות').slice(0, 4);
const mortgageGuides = guidesByCategory('משכנתאות').slice(0, 4);

export default function Footer() {
  return (
    <footer className="footer-green">
      <style>{`
        .footer-green { background: #0E3D2C; color: #DCE8DF; }
        .footer-link { color: #A9C4B2; transition: color 0.2s; }
        .footer-link:hover { color: #fff; }
        .footer-bottom-link { color: #A9C4B2; transition: color 0.2s; }
        .footer-bottom-link:hover { color: #fff; }
      `}</style>

      <div className="container-wide py-14 px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-11">

          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="light" className="mb-3" />
            <p className="text-sm leading-relaxed max-w-[260px]" style={{ color: '#A9C4B2' }}>
              מחשבונים פיננסיים מתקדמים ומדריכים בעברית לניהול חכם של הכסף שלך.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">מחשבונים</h3>
            <ul className="space-y-2.5">
              {[
                { href: '/tools/mortgage-calculator', label: 'מחשבון משכנתא' },
                { href: '/tools/mortgage-refinance-calculator', label: 'מחשבון מחזור משכנתא' },
                { href: '/tools/young-couple-mortgage', label: 'מחשבון לזוג צעיר' },
                { href: '/tools/loan-calculator', label: 'מחשבון הלוואה' },
                { href: '/tools/salary-calculator', label: 'מחשבון שכר נטו' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="footer-link text-sm cursor-pointer">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">מדריכי הלוואות</h3>
            <ul className="space-y-2.5">
              {loanGuides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="footer-link text-sm cursor-pointer">{guide.shortLabel}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-4">מדריכי משכנתא</h3>
            <ul className="space-y-2.5">
              {mortgageGuides.map((guide) => (
                <li key={guide.href}>
                  <Link href={guide.href} className="footer-link text-sm cursor-pointer">{guide.shortLabel}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[13px] pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,.14)', color: '#A9C4B2' }}
        >
          <p>&copy; {new Date().getFullYear()} מקסיט. כל הזכויות שמורות.</p>
          <div className="flex items-center gap-5">
            <Link href="/about" className="footer-bottom-link cursor-pointer">אודות</Link>
            <Link href="/contact" className="footer-bottom-link cursor-pointer">צור קשר</Link>
            <Link href="/privacy" className="footer-bottom-link cursor-pointer">מדיניות פרטיות</Link>
          </div>
        </div>
      </div>

      <div className="container-wide px-5 sm:px-6 lg:px-8 pb-6">
        <p className="text-xs text-center leading-relaxed max-w-3xl mx-auto" style={{ color: '#A9C4B2', opacity: 0.7 }}>
          מקסיט מספקת מידע לצורכי מחשבון בלבד ואינה מהווה ייעוץ פיננסי, השקעות או מס.
          לפני קבלת החלטות פיננסיות יש להתייעץ עם בעל מקצוע מוסמך.
        </p>
      </div>
    </footer>
  );
}
