import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import JsonLd from '@/components/SEO';
import { SITE_NAME, OG_IMAGE } from '@/lib/constants';

const BASE = 'https://getmaxit.co.il';
const CANONICAL = `${BASE}/contact`;

export const metadata: Metadata = {
  title: 'צור קשר',
  description: 'שאלות, הערות, או הצעות לשיתוף פעולה. נשמח לשמוע.',
  alternates: { canonical: CANONICAL },
  openGraph: {
    images: [OG_IMAGE],
    title: 'צור קשר',
    description: 'שאלות, הערות, או הצעות לשיתוף פעולה. נשמח לשמוע.',
    url: CANONICAL,
    siteName: SITE_NAME,
    locale: 'he_IL',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'צור קשר',
  description: 'שאלות, הערות, או הצעות לשיתוף פעולה. נשמח לשמוע.',
  url: CANONICAL,
  inLanguage: 'he',
  publisher: { '@type': 'Organization', name: SITE_NAME },
};

const p = 'text-accent-600 leading-relaxed mb-5';

export default function ContactPage() {
  return (
    <div className="container-page py-10">
      <JsonLd data={jsonLd} />

      <Breadcrumbs items={[{ label: 'צור קשר' }]} />

      <div className="max-w-2xl">

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-black text-accent-900 leading-tight mb-3 tracking-tight">
            צור קשר
          </h1>
        </header>

        <p className={p}>
          יש לך שאלה? מצאת טעות במחשבון? רוצה להציע נושא למדריך? נשמח לשמוע.
        </p>

        <div className="card mb-8">
          <p className="text-sm text-accent-500 mb-1">אימייל</p>
          <a
            href="mailto:finance@mgh-ltd.com"
            className="text-lg font-semibold text-primary-600 hover:text-primary-700
                       transition-colors duration-150 cursor-pointer"
          >
            finance@mgh-ltd.com
          </a>
        </div>

        <p className={p}>
          אנחנו עונים בדרך כלל תוך יום עסקים אחד עד שניים.
        </p>

        <div className="border-t border-accent-100 pt-6 mt-6">
          <p className="text-xs text-accent-400 leading-relaxed">
            <span className="font-semibold">אין באמור ייעוץ פיננסי.</span>{' '}
            המידע באתר הוא לצרכי לימוד בלבד. לפני כל החלטה פיננסית, התייעץ עם בעל רישיון.
          </p>
        </div>

      </div>
    </div>
  );
}
