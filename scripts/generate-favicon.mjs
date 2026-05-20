import sharp from 'sharp';

const svgBuffer = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <rect width="512" height="512" rx="115" fill="#1a7a4a"/>
  <text x="256" y="360" text-anchor="middle"
    font-family="Arial, sans-serif"
    font-weight="700"
    font-size="280"
    fill="white">Mx</text>
</svg>`);

await sharp(svgBuffer).png().toFile('public/favicon-512.png');
console.log('wrote public/favicon-512.png');

await sharp(svgBuffer).resize(192, 192).png().toFile('public/favicon-192.png');
console.log('wrote public/favicon-192.png');

await sharp(svgBuffer).resize(48, 48).png().toFile('public/favicon-48.png');
console.log('wrote public/favicon-48.png');
