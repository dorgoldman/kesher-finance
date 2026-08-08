import { SITE_NAME, SITE_URL, OG_IMAGE } from '@/lib/constants';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export function generateSEOMetadata({ title, description, canonical, ogImage }: Omit<SEOProps, 'jsonLd'>) {
  return {
    title,
    description,
    alternates: {
      canonical: canonical || undefined,
    },
    openGraph: {
      title,
      description,
      url: canonical || SITE_URL,
      siteName: SITE_NAME,
      locale: 'he_IL',
      type: 'website' as const,
      // Always emit an image. This used to be `...(ogImage && {...})`, so with
      // no caller passing ogImage every page built by this helper declared
      // twitter:card=summary_large_image with NOTHING behind it — a promise of
      // a big visual card that delivers a blank. Eight pages shipped that way
      // (all five tools, both hubs, and the Arabic calculator).
      // Defining `openGraph` here also blocks the file-convention image in
      // src/app/opengraph-image.tsx from being inherited, since Next.js
      // shallow-merges metadata — so it has to be set explicitly.
      images: [ogImage ? { url: ogImage, width: 1200, height: 630 } : OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImage ?? OG_IMAGE.url],
    },
  };
}

export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const jsonLdArray = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLdArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
