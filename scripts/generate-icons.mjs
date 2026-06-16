import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { deflateSync } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(__dirname, "..", "extension", "icons");

mkdirSync(iconsDir, { recursive: true });

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc ^= buf[i];
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuf = Buffer.from(type);
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function buildSimplePng(size) {
  const width = size;
  const height = size;
  const rowLen = 1 + width * 4;
  const filtered = Buffer.alloc(height * rowLen);

  for (let y = 0; y < height; y++) {
    const offset = y * rowLen;
    filtered[offset] = 0;
    for (let x = 0; x < width; x++) {
      const cx = width / 2;
      const cy = height / 2;
      const r = width * 0.38;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      const base = offset + 1 + x * 4;
      if (dist <= r) {
        filtered[base] = 37;
        filtered[base + 1] = 99;
        filtered[base + 2] = 235;
        filtered[base + 3] = 255;
      } else {
        filtered[base] = 250;
        filtered[base + 1] = 248;
        filtered[base + 2] = 255;
        filtered[base + 3] = 255;
      }
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const compressed = deflateSync(filtered);
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

  return Buffer.concat([
    signature,
    chunk("IHDR", ihdr),
    chunk("IDAT", compressed),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

for (const size of [16, 48, 128]) {
  const png = buildSimplePng(size);
  writeFileSync(join(iconsDir, `icon${size}.png`), png);
  console.log(`Created icon${size}.png`);
}
