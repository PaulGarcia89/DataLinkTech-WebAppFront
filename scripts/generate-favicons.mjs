/** Raster exports of the code-native brand mark; stable URLs for crawlers. */
import sharp from "sharp";
import fs from "node:fs/promises";
const svg = await fs.readFile("public/brand/favicon.svg");
for (const size of [48, 96, 192, 512]) {
  await sharp(svg)
    .resize(size, size)
    .png()
    .toFile(`public/favicon-${size}.png`);
}
await sharp(svg).resize(180, 180).png().toFile("public/apple-touch-icon.png");
// ICO with PNG payload; 48px works for browser tabs and legacy discovery.
const png = await fs.readFile("public/favicon-48.png");
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 48;
header[7] = 48;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png.length, 14);
header.writeUInt32LE(22, 18);
await fs.writeFile("public/favicon.ico", Buffer.concat([header, png]));
