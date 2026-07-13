import { guidesByCategory } from '@/lib/guides';

const loanGuides = guidesByCategory('הלוואות').slice(0, 5);
const mortgageGuides = guidesByCategory('משכנתאות');

export default function Footer() {
  return (
    <footer className="bg-[#0F1117] text-white/40 mt-20">

      {/* Main grid */}
      <div className="container-wide py-14 border-b border-white/6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-extrabold text-white">מקסיט</span>
              <span className="text-2xl font-extrabold text-primary-500 mx-0.5">.</span>
              <span className="text-2xl font-extrabold text-white/30">Maxit</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-[240px]">
              מחשבונים פיננסיים מתקדמים ומדריכים בעברית לניהול חכם של הכסף שלך.
            </p>
          </div>

          {/* Calculators */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-[0.08em]">מחשבונים</h3>
            <ul className="space-y-3">
              <li>
                <a href="/tools/mortgage-calculator" className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer">
                  מחשבון משכנתא
                </a>
              </li>
              <li>
                <a href="/tools/mortgage-refinance-calculator" className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer">
                  מחשבון מחזור משכנתא
                </a>
              </li>
              <li>
                <a href="/tools/young-couple-mortgage" className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer">
                  מחשבון לזוג צעיר
                </a>
              </li>
              <li>
                <a href="/tools/loan-calculator" className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer">
                  מחשבון הלוואה
                </a>
              </li>
              <li>
                <a href="/tools/salary-calculator" className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer">
                  מחשבון שכר נטו
                </a>
              </li>
            </ul>
          </div>

          {/* Guides — loans */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-[0.08em]">מדריכי הלוואות</h3>
            <ul className="space-y-3">
              {loanGuides.map((guide) => (
                <li key={guide.href}>
                  <a
                    href={guide.href}
                    className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {guide.shortLabel}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides — mortgages */}
          <div>
            <h3 className="text-sm font-semibold text-white/70 mb-4 uppercase tracking-[0.08em]">מדריכי משכנתא</h3>
            <ul className="space-y-3">
              {mortgageGuides.map((guide) => (
                <li key={guide.href}>
                  <a
                    href={guide.href}
                    className="text-sm text-white/35 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    {guide.shortLabel}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/guides"
                  className="text-sm text-primary-400 hover:text-primary-300 font-semibold transition-colors duration-200 cursor-pointer"
                >
                  כל המדריכים ←
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Secondary row: Arabic calculator + tools hub */}
        <div className="mt-10 pt-8 border-t border-white/6 flex flex-wrap gap-x-6 gap-y-2">
          <a href="/tools" className="text-xs text-white/30 hover:text-white transition-colors duration-200 cursor-pointer">כל הכלים</a>
          <a href="/ar/tools/mortgage-calculator" className="text-xs text-white/30 hover:text-white transition-colors duration-200 cursor-pointer">حاسبة القرض العقاري</a>
          <a href="/about" className="text-xs text-white/30 hover:text-white transition-colors duration-200 cursor-pointer">אודות</a>
          <a href="/contact" className="text-xs text-white/30 hover:text-white transition-colors duration-200 cursor-pointer">צור קשר</a>
          <a href="/privacy" className="text-xs text-white/30 hover:text-white transition-colors duration-200 cursor-pointer">מדיניות פרטיות</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container-wide py-6">
        <p className="text-xs text-white/20 text-center leading-relaxed mb-4 max-w-3xl mx-auto">
          מקסיט מספקת מידע לצורכי מחשבון בלבד ואינה מהווה ייעוץ פיננסי, השקעות או מס.
          לפני קבלת החלטות פיננסיות יש להתייעץ עם בעל מקצוע מוסמך.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/15">
          <p>&copy; {new Date().getFullYear()} מקסיט. Maxit. כל הזכויות שמורות.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white/40 transition-colors duration-200 cursor-pointer">
              מדיניות פרטיות
            </a>
            <a href="/about" className="hover:text-white/40 transition-colors duration-200 cursor-pointer">
              אודות
            </a>
            <a href="/contact" className="hover:text-white/40 transition-colors duration-200 cursor-pointer">
              צור קשר
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
