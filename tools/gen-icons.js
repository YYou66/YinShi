/* ==========================================================
 * 饮食热量记录站 · PWA 图标生成器（零依赖）
 * 输出 assets/icon-192.png / icon-512.png / icon-512-maskable.png / apple-touch-icon.png
 * 设计：印章蓝底(#6E97AB) + 米白餐盘(#FEFCF7) + 印章蓝深心形(#4E7A90)
 * 用法：node tools/gen-icons.js
 * ========================================================== */
const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

/* ---------- PNG 编码 ---------- */
const CRC_TABLE = (() => {
    const t = new Int32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
        t[n] = c;
    }
    return t;
})();

function crc32(buf) {
    let c = ~0;
    for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
    return ~c >>> 0;
}

function chunk(type, data) {
    const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
    const td = Buffer.concat([Buffer.from(type, 'ascii'), data]);
    const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
    return Buffer.concat([len, td, crc]);
}

function encodePNG(w, h, rgba) {           // rgba: Buffer w*h*4
    const raw = Buffer.alloc((w * 4 + 1) * h);
    for (let y = 0; y < h; y++) {
        raw[y * (w * 4 + 1)] = 0;          // 滤波器 0（无滤波）
        rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4);
    }
    const ihdr = Buffer.alloc(13);
    ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
    ihdr[8] = 8; ihdr[9] = 6;              // 8bit / RGBA
    return Buffer.concat([
        Buffer.from([0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A]),
        chunk('IHDR', ihdr),
        chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
        chunk('IEND', Buffer.alloc(0)),
    ]);
}

/* ---------- 图形绘制 ---------- */
const BG    = [0x6E, 0x97, 0xAB];   // 印章蓝
const PLATE = [0xFE, 0xFC, 0xF7];   // 米白餐盘
const HEART = [0x4E, 0x7A, 0x90];   // 印章蓝深（心形）

/* 隐式心形曲线 (x²+y²-1)³ - x²y³ ≤ 0，y 轴向上；包围盒 x≈±1.15, y≈[-1,1.2] */
function inHeart(x, y) {
    const t = x * x + y * y - 1;
    return t * t * t - x * x * y * y * y <= 0;
}

function makePixelFn(S, maskable) {
    const cx = S / 2, cy = S / 2;
    const plateR = (maskable ? 0.30 : 0.36) * S;              // 餐盘半径（maskable 收进 80% 安全区）
    const r = ((maskable ? 0.44 : 0.54) * S) / 2.3;           // 心形缩放（2.3 = 心形包围盒宽）
    const heartCy = cy + 0.1 * r;                              // 心形视觉中心补偿
    return (px, py) => {
        const dx = px - cx, dy = py - cy;
        if (dx * dx + dy * dy > plateR * plateR) return BG;
        const hx = dx / r, hy = -(py - heartCy) / r;           // 翻转 y：屏幕坐标 → 数学坐标
        return inHeart(hx, hy) ? HEART : PLATE;
    };
}

function renderIcon(S, maskable) {
    const fn = makePixelFn(S, maskable);
    const rgba = Buffer.alloc(S * S * 4);
    const SS = 2;                                              // 2×2 超采样抗锯齿
    for (let y = 0; y < S; y++) {
        for (let x = 0; x < S; x++) {
            let r = 0, g = 0, b = 0;
            for (let sy = 0; sy < SS; sy++) {
                for (let sx = 0; sx < SS; sx++) {
                    const c = fn(x + (sx + 0.5) / SS, y + (sy + 0.5) / SS);
                    r += c[0]; g += c[1]; b += c[2];
                }
            }
            const n = SS * SS, i = (y * S + x) * 4;
            rgba[i] = Math.round(r / n); rgba[i + 1] = Math.round(g / n); rgba[i + 2] = Math.round(b / n); rgba[i + 3] = 255;
        }
    }
    return encodePNG(S, S, rgba);
}

/* ---------- 输出 ---------- */
const outDir = path.join(__dirname, '..', 'assets');
fs.mkdirSync(outDir, { recursive: true });
const jobs = [
    ['icon-192.png', 192, false],
    ['icon-512.png', 512, false],
    ['icon-512-maskable.png', 512, true],
    ['apple-touch-icon.png', 180, false],
];
for (const [name, S, maskable] of jobs) {
    const buf = renderIcon(S, maskable);
    fs.writeFileSync(path.join(outDir, name), buf);
    console.log('OK ' + name + ' ' + S + 'x' + S + ' (' + buf.length + ' bytes)');
}
console.log('全部图标已生成 ✔');
