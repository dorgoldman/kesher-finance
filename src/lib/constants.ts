export const SITE_NAME = 'Maxit';
export const SITE_NAME_HE = 'מקסיט';
export const SITE_NAME_EN = 'Maxit';
export const SITE_DESCRIPTION = 'מחשבונים פיננסיים, מדריכים ומידע על הלוואות, משכנתאות וניהול כספים בעברית';
export const SITE_URL = 'https://getmaxit.co.il';
export const SITE_LOCALE = 'he_IL';

/**
 * Open Graph image for pages that declare their own `openGraph` block.
 *
 * Next.js shallow-merges metadata: a page exporting `openGraph` REPLACES the
 * parent's, so the file-convention image from src/app/opengraph-image.tsx does
 * not reach it. That is not theoretical — 21 of 31 built pages shipped with no
 * og:image at all, while still declaring twitter:card=summary_large_image,
 * which promises a big visual card and delivers nothing.
 *
 * Any page that sets `openGraph` must therefore also set `images: [OG_IMAGE]`.
 * Pages that set no openGraph at all inherit correctly and need nothing.
 *
 * The url is relative on purpose — metadataBase in layout.tsx absolutises it.
 */
export const OG_IMAGE = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: SITE_NAME,
};
