// Generates public/og.png (1200x630) and public/apple-touch-icon.png.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp';

const mark = (fill) => `<path d="M21 3 L3 9.5 Q11 11 12.5 12.5 Q14 14 15 21 Z" fill="${fill}"/>`;

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#F4F6F2"/>
  <rect x="40" y="40" width="1120" height="550" rx="48" fill="#FFFFFF"/>
  <rect x="96" y="96" width="72" height="72" rx="22" fill="#0E3B27"/>
  <g transform="translate(114 114) scale(1.5)">${mark('#93FA5B')}</g>
  <text x="192" y="128" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="34" fill="#0E3B27">Ankush Kumar</text>
  <text x="192" y="160" font-family="Menlo, monospace" font-size="20" fill="#4D6B5D">Product engineer · Ottawa, ON</text>
  <text x="96" y="330" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="78" letter-spacing="-3" fill="#0E3B27">Engineer by day.</text>
  <rect x="88" y="365" width="660" height="96" rx="18" fill="#93FA5B"/>
  <text x="106" y="440" font-family="Helvetica Neue, Arial, sans-serif" font-weight="800" font-size="78" letter-spacing="-3" fill="#0E3B27">Founder by night.</text>
  <text x="96" y="540" font-family="Helvetica Neue, Arial, sans-serif" font-weight="600" font-size="26" fill="#2E5443">Trend Micro · Hatching · BillingOS · Invitation Day · DeskOS</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 36 36">
  <rect width="36" height="36" fill="#0E3B27"/>
  <g transform="translate(8 8) scale(.833)">${mark('#93FA5B')}</g>
</svg>`;

await sharp(Buffer.from(og)).png().toFile('public/og.png');
await sharp(Buffer.from(icon)).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('Generated public/og.png and public/apple-touch-icon.png');
