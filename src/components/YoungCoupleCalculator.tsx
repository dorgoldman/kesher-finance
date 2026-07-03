'use client';

import { useState, useMemo } from 'react';

const PRIME_RATE = 6.5;

interface Results {
  propertyPrice: number;
  equity: number;
  equityPercent: number;
  totalLoan: number;
  eligibilityLoan: number;
  bankLoan: number;
  eligibilityMonthly: number;
  bankMonthly: number;
  totalMonthly: number;
  totalInterest: number;
  incomeRatio: number;
  verdicts: string[];
}

function calcMonthly(principal: number, annualRate: number, years: number): number {
  if (principal <= 0 || years <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calcTotalInterest(principal: number, annualRate: number, years: number): number {
  const monthly = calcMonthly(principal, annualRate, years);
  return monthly * years * 12 - principal;
}

function fmt(n: number): string {
  return n.toLocaleString('he-IL', { maximumFractionDigits: 0 });
}

export default function YoungCoupleCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(1_500_000);
  const [equity, setEquity] = useState(375_000);
  const [netIncome, setNetIncome] = useState(18_000);
  const [eligibilityAmount, setEligibilityAmount] = useState(160_000);
  const [eligibilityRate, setEligibilityRate] = useState(3.5);
  const [eligibilityYears, setEligibilityYears] = useState(25);
  const [bankRate, setBankRate] = useState(5.0);
  const [bankYears, setBankYears] = useState(25);

  const results = useMemo<Results | null>(() => {
    if (propertyPrice <= 0 || equity < 0 || netIncome <= 0) return null;

    const equityPercent = (equity / propertyPrice) * 100;
    const totalLoan = propertyPrice - equity;
    const elLoan = Math.min(eligibilityAmount, totalLoan);
    const bkLoan = totalLoan - elLoan;

    const elMonthly = calcMonthly(elLoan, eligibilityRate, eligibilityYears);
    const bkMonthly = calcMonthly(bkLoan, bankRate, bankYears);
    const totalMonthly = elMonthly + bkMonthly;
    const totalInterest =
      calcTotalInterest(elLoan, eligibilityRate, eligibilityYears) +
      calcTotalInterest(bkLoan, bankRate, bankYears);
    const incomeRatio = (totalMonthly / netIncome) * 100;

    const verdicts: string[] = [];
    if (equityPercent < 25) {
      verdicts.push('בנק ישראל דורש הון עצמי של 25% לפחות לדירה ראשונה. חסרים לכם ₪' + fmt(propertyPrice * 0.25 - equity));
    }
    if (incomeRatio > 40) {
      verdicts.push('ההחזר החודשי עולה על 40% מההכנסה — רוב הבנקים ידחו. צמצמו את סכום ההלוואה או הגדילו הון עצמי.');
    } else if (incomeRatio > 30) {
      verdicts.push('ההחזר החודשי בין 30%–40% מההכנסה. עובר, אבל שווה לשקול סכום נמוך יותר.');
    }
    if (equityPercent >= 25 && incomeRatio <= 40) {
      verdicts.push('המספרים נראים טוב — עומדים בדרישות בנק ישראל ובמבחן ההכנסה.');
    }

    return {
      propertyPrice,
      equity,
      equityPercent,
      totalLoan,
      eligibilityLoan: elLoan,
      bankLoan: bkLoan,
      eligibilityMonthly: elMonthly,
      bankMonthly: bkMonthly,
      totalMonthly,
      totalInterest,
      incomeRatio,
      verdicts,
    };
  }, [propertyPrice, equity, netIncome, eligibilityAmount, eligibilityRate, eligibilityYears, bankRate, bankYears]);

  return (
    <div className="space-y-8">
      {/* Inputs */}
      <div className="card p-6">
        <h2 className="font-bold text-accent-900 text-lg mb-5">פרטי הרכישה</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="cc-label">מחיר הדירה (₪)</label>
            <input
              type="number"
              className="input-field"
              value={propertyPrice || ''}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              min={100000}
              step={50000}
            />
          </div>
          <div>
            <label className="cc-label">הון עצמי (₪)</label>
            <input
              type="number"
              className="input-field"
              value={equity || ''}
              onChange={(e) => setEquity(Number(e.target.value))}
              min={0}
              step={10000}
            />
            {propertyPrice > 0 && (
              <p className="text-xs text-accent-400 mt-1">
                {((equity / propertyPrice) * 100).toFixed(0)}% ממחיר הדירה
              </p>
            )}
          </div>
          <div>
            <label className="cc-label">הכנסה חודשית נטו (₪)</label>
            <input
              type="number"
              className="input-field"
              value={netIncome || ''}
              onChange={(e) => setNetIncome(Number(e.target.value))}
              min={1000}
              step={1000}
            />
            <p className="text-xs text-accent-400 mt-1">משכורת נטו משותפת של שני בני הזוג</p>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-bold text-accent-900 text-lg mb-5">הלוואת זכאות</h2>
        <p className="text-sm text-accent-500 mb-4">
          הלוואה מסובסדת ממשרד השיכון לזכאים — ריבית נמוכה ותנאים מועדפים.
          הסכום תלוי בדירוג הזכאות שלכם.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div>
            <label className="cc-label">סכום זכאות (₪)</label>
            <input
              type="number"
              className="input-field"
              value={eligibilityAmount || ''}
              onChange={(e) => setEligibilityAmount(Number(e.target.value))}
              min={0}
              max={800000}
              step={10000}
            />
            <p className="text-xs text-accent-400 mt-1">עד ₪800,000 לפי דירוג</p>
          </div>
          <div>
            <label className="cc-label">ריבית זכאות (%)</label>
            <input
              type="number"
              className="input-field"
              value={eligibilityRate || ''}
              onChange={(e) => setEligibilityRate(Number(e.target.value))}
              min={0}
              max={10}
              step={0.1}
            />
            <p className="text-xs text-accent-400 mt-1">בד״כ 3%–4.5%</p>
          </div>
          <div>
            <label className="cc-label">תקופה (שנים)</label>
            <input
              type="number"
              className="input-field"
              value={eligibilityYears || ''}
              onChange={(e) => setEligibilityYears(Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>
        </div>
      </div>

      <div className="card p-6">
        <h2 className="font-bold text-accent-900 text-lg mb-5">משכנתא בנקאית (יתרה)</h2>
        <p className="text-sm text-accent-500 mb-4">
          ההפרש בין מחיר הדירה לבין הון עצמי + זכאות — זה מה שתלוו מהבנק.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="cc-label">ריבית בנקאית (%)</label>
            <input
              type="number"
              className="input-field"
              value={bankRate || ''}
              onChange={(e) => setBankRate(Number(e.target.value))}
              min={0.1}
              max={15}
              step={0.1}
            />
            <p className="text-xs text-accent-400 mt-1">ריבית ממוצעת למשכנתא: 4.5%–5.5%</p>
          </div>
          <div>
            <label className="cc-label">תקופה (שנים)</label>
            <input
              type="number"
              className="input-field"
              value={bankYears || ''}
              onChange={(e) => setBankYears(Number(e.target.value))}
              min={1}
              max={30}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div className="space-y-6">
          {/* Verdict strip */}
          {results.verdicts.map((v, i) => (
            <div
              key={i}
              className={`p-4 rounded-xl border text-sm font-medium leading-relaxed ${
                v.includes('נראים טוב')
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : v.includes('דורש') || v.includes('ידחו')
                  ? 'bg-red-50 border-red-200 text-red-800'
                  : 'bg-amber-50 border-amber-200 text-amber-800'
              }`}
            >
              {v}
            </div>
          ))}

          {/* Summary cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="card p-4 text-center">
              <p className="text-xs text-accent-400 mb-1">סה״כ הלוואה</p>
              <p className="text-xl font-bold text-accent-900 display-number">₪{fmt(results.totalLoan)}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-accent-400 mb-1">החזר חודשי כולל</p>
              <p className="text-xl font-bold text-primary-600 display-number">₪{fmt(results.totalMonthly)}</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-accent-400 mb-1">% מההכנסה</p>
              <p className={`text-xl font-bold display-number ${
                results.incomeRatio > 40 ? 'text-red-600' : results.incomeRatio > 30 ? 'text-amber-600' : 'text-emerald-600'
              }`}>
                {results.incomeRatio.toFixed(0)}%
              </p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-xs text-accent-400 mb-1">הון עצמי</p>
              <p className={`text-xl font-bold display-number ${
                results.equityPercent < 25 ? 'text-red-600' : 'text-emerald-600'
              }`}>
                {results.equityPercent.toFixed(0)}%
              </p>
            </div>
          </div>

          {/* Breakdown */}
          <div className="card p-6">
            <h3 className="font-bold text-accent-900 mb-4">פירוט ההלוואות</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary-600 text-white">
                    <th className="px-4 py-2.5 text-right font-medium rounded-tr-lg">מרכיב</th>
                    <th className="px-4 py-2.5 text-right font-medium">סכום</th>
                    <th className="px-4 py-2.5 text-right font-medium">ריבית</th>
                    <th className="px-4 py-2.5 text-right font-medium">תקופה</th>
                    <th className="px-4 py-2.5 text-right font-medium rounded-tl-lg">החזר חודשי</th>
                  </tr>
                </thead>
                <tbody className="text-accent-600">
                  <tr className="border-b border-accent-100">
                    <td className="px-4 py-3 font-medium">הלוואת זכאות</td>
                    <td className="px-4 py-3 display-number">₪{fmt(results.eligibilityLoan)}</td>
                    <td className="px-4 py-3 display-number">{eligibilityRate}%</td>
                    <td className="px-4 py-3 display-number">{eligibilityYears} שנים</td>
                    <td className="px-4 py-3 display-number font-medium">₪{fmt(results.eligibilityMonthly)}</td>
                  </tr>
                  <tr className="border-b border-accent-100 bg-accent-50/60">
                    <td className="px-4 py-3 font-medium">משכנתא בנקאית</td>
                    <td className="px-4 py-3 display-number">₪{fmt(results.bankLoan)}</td>
                    <td className="px-4 py-3 display-number">{bankRate}%</td>
                    <td className="px-4 py-3 display-number">{bankYears} שנים</td>
                    <td className="px-4 py-3 display-number font-medium">₪{fmt(results.bankMonthly)}</td>
                  </tr>
                  <tr className="font-bold text-accent-900">
                    <td className="px-4 py-3">סה״כ</td>
                    <td className="px-4 py-3 display-number">₪{fmt(results.totalLoan)}</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 display-number text-primary-600">₪{fmt(results.totalMonthly)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 bg-accent-50 rounded-lg text-sm text-accent-500">
              סה״כ ריבית על כל ההלוואות: <span className="font-bold text-accent-800 display-number">₪{fmt(results.totalInterest)}</span>
            </div>
          </div>

          {/* Visual breakdown bar */}
          <div className="card p-6">
            <h3 className="font-bold text-accent-900 mb-3">הרכב מימון הדירה</h3>
            <div className="h-8 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all duration-300"
                style={{ width: `${results.equityPercent}%` }}
                title={`הון עצמי: ${results.equityPercent.toFixed(0)}%`}
              />
              <div
                className="bg-blue-500 h-full transition-all duration-300"
                style={{ width: `${(results.eligibilityLoan / results.propertyPrice) * 100}%` }}
                title={`זכאות: ${((results.eligibilityLoan / results.propertyPrice) * 100).toFixed(0)}%`}
              />
              <div
                className="bg-violet-500 h-full transition-all duration-300"
                style={{ width: `${(results.bankLoan / results.propertyPrice) * 100}%` }}
                title={`בנקאית: ${((results.bankLoan / results.propertyPrice) * 100).toFixed(0)}%`}
              />
            </div>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-accent-500">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-emerald-500" />
                הון עצמי ({results.equityPercent.toFixed(0)}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-blue-500" />
                זכאות ({((results.eligibilityLoan / results.propertyPrice) * 100).toFixed(0)}%)
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-violet-500" />
                בנקאית ({((results.bankLoan / results.propertyPrice) * 100).toFixed(0)}%)
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
