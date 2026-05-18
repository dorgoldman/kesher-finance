import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { generateSEOMetadata } from '@/components/SEO';

export const metadata: Metadata = generateSEOMetadata({
  title: 'מחשבונות פיננסיים',
  description: 'מחשבונות פיננסיים חינמיים בעברית: משכנתא, הלוואות ושכר נטו. חשבו בדיוק מה תשלמו ומה תקבלו, בלי להירשם.',
  canonical: '/tools',
});

export default function ToolsHub() {
  return (
    <div className="container-page py-10">
      <Breadcrumbs items={[{ label: 'מחשבונים' }]} />

      <h1 className="section-title mb-2">מחשבונים פיננסיים</h1>
      <p className="section-subtitle mb-10">
        כלים חינמיים בעברית לתכנון פיננסי חכם
      </p>

      <AdSlot variant="header" className="mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* ── Live: מחשבון משכנתא ── */}
        <Link href="/tools/mortgage-calculator" className="card-interactive group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                            text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <span className="badge-primary">משכנתא</span>
          </div>
          <h2 className="text-lg font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            מחשבון משכנתא
          </h2>
          <p className="text-accent-500 text-sm leading-relaxed">
            הרכיבו תמהיל מסלולים, חשבו החזר חודשי כולל ולוח סילוקין מפורט
          </p>
        </Link>

        {/* ── Live: מחשבון הלוואה ── */}
        <Link href="/tools/loan-calculator" className="card-interactive group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                            text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="badge-primary">הלוואה</span>
          </div>
          <h2 className="text-lg font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            מחשבון הלוואה
          </h2>
          <p className="text-accent-500 text-sm leading-relaxed">
            חשבו החזר חודשי, סך ריבית ולוח סילוקין לכל סוג הלוואה צרכנית
          </p>
        </Link>

        {/* ── Live: מחשבון שכר נטו ── */}
        <Link href="/tools/salary-calculator" className="card-interactive group">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center
                            text-primary-600 group-hover:bg-primary-100 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <span className="badge-primary">שכר נטו</span>
          </div>
          <h2 className="text-lg font-bold text-accent-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
            מחשבון שכר נטו
          </h2>
          <p className="text-accent-500 text-sm leading-relaxed">
            חשבו שכר נטו לאחר מס הכנסה, ביטוח לאומי, בריאות ופנסיה - מדרגות 2026
          </p>
        </Link>

      </div>
    </div>
  );
}
