import { ImageResponse } from 'next/og';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE_NAME } from '@/lib/constants';

/**
 * Link-preview image for this segment and everything nested under it.
 *
 * THE TEXT IN THIS IMAGE IS ENGLISH ON PURPOSE. Do not "fix" it to Hebrew.
 *
 * Nothing available to us renders Hebrew in an image correctly:
 *   - Satori (this renderer) implements no Unicode bidi, so Hebrew ships
 *     REVERSED — "מחשבונים" becomes "םינובשחמ". Passing an explicit Hebrew
 *     font (Heebo, static instances) does NOT fix it; that was tested.
 *   - Rasterizing an SVG is worse: librsvg/resvg also reverse it, and adding
 *     direction="rtl" there drops all but one glyph.
 * The failure is invisible — it looks right in a browser and wrong only in the
 * generated PNG. mg-pets shipped exactly this and served two months of
 * unreadable previews before anyone looked at the file.
 *
 * Hebrew is still correct everywhere it is TEXT rather than pixels: og:title
 * and og:description stay Hebrew, because scrapers lay those out with their
 * own text engines, which handle RTL properly. Only the image is English.
 *
 * The extensionless route this produces (/opengraph-image) also needs its
 * Content-Type pinned in public/_headers, or Cloudflare Pages serves it as
 * application/octet-stream and strict scrapers drop it.
 *
 * Whenever this file changes, LOOK at the generated PNG before shipping.
 */
export const dynamic = 'force-static';
export const alt = SITE_NAME;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Static instances, not the variable Heebo[wght].ttf — Satori's parser cannot
// read variable fonts and dies mid-build with "Cannot read properties of
// undefined (reading '258')". Heebo is the site's own typeface; its Latin
// glyphs keep the image on-brand.
const heeboRegular = readFileSync(join(process.cwd(), 'src/app/_fonts/Heebo-Regular.ttf'));
const heeboBold = readFileSync(join(process.cwd(), 'src/app/_fonts/Heebo-Bold.ttf'));

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F6F4EF',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'Heebo',
        }}
      >
        <div style={{ position: 'absolute', top: 0, left: 0, width: 14, height: '100%', background: '#149A5B' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 6, background: '#C9A44C' }} />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: 940 }}>
          <span style={{ fontSize: 30, color: '#149A5B', marginBottom: 20 }}>Maxit</span>
          <div style={{ fontSize: 66, fontWeight: 700, color: '#0E3D2C', lineHeight: 1.2 }}>
            Financial calculators, in Hebrew
          </div>
          <div style={{ fontSize: 31, color: '#55534A', marginTop: 26 }}>
            Mortgage · Loans · Net salary · Income tax
          </div>
          <div style={{ fontSize: 24, color: '#8A867A', marginTop: 34 }}>getmaxit.co.il</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Heebo', data: heeboRegular, weight: 400, style: 'normal' },
        { name: 'Heebo', data: heeboBold, weight: 700, style: 'normal' },
      ],
    }
  );
}
