import type { Metadata } from 'next';
import { Heebo, Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  display: 'swap',
  variable: '--font-heebo',
});

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  display: 'swap',
  variable: '--font-cairo',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Maxit',
    template: '%s | Maxit',
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    siteName: SITE_NAME,
  },
  icons: {
    icon: [
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon-192.png',
  },
  verification: {
    google: 'a2oR7FNyG2Bn8wvrR0MxQH24bH0KGd9uNbhU1XGLcbY',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${cairo.variable}`}>
      <body className="font-heebo min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
            }),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-5D8RS8626V" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4485608003839489"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
