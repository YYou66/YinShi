/* ==========================================================
 * 饮食热量记录站 · Service Worker（PWA 离线支持）v2
 * - 导航 + 核心代码（html/js/css/manifest）：网络优先 → 发版立即生效，断网回退缓存
 * - 数据与图标（data/*、assets/*）：缓存优先 + 后台静默更新（装完可离线）
 * - /api/ 与跨域、非 GET：直接走网络，绝不缓存（云端识别不受影响）
 * 注意：改动核心代码后如需强制清缓存，把下面 VERSION 升一档（ys-pwa-vN）
 * ========================================================== */
const VERSION = 'ys-pwa-v2';

const PRECACHE = [
    './',
    './index.html',
    './manifest.webmanifest',
    './css/style.css',
    './js/data.js',
    './js/app.js',
    './data/science.js',
    './data/foods-cn-1.js',
    './data/foods-cn-2.js',
    './data/foods-cn-3.js',
    './data/foods-cn-4.js',
    './data/foods-cn-5.js',
    './data/foods-cn-6.js',
    './data/brands-1.js',
    './data/brands-2.js',
    './data/brands-3.js',
    './data/brands-4.js',
    './data/brands-5.js',
    './data/brands-6.js',
    './data/brands-7.js',
    './data/brands-8.js',
    './data/brands-9.js',
    './data/brands-10.js',
    './assets/icon-192.png',
    './assets/icon-512.png',
    './assets/icon-512-maskable.png',
    './assets/apple-touch-icon.png',
];

/* 安装：预缓存全站静态资源，立即接管旧版本 */
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(VERSION)
            .then((cache) => cache.addAll(PRECACHE))
            .then(() => self.skipWaiting())
    );
});

/* 激活：清掉旧版本缓存 */
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

/* 核心代码清单：网络优先，用户永远拿到最新版 */
const CORE = ['/js/app.js', '/js/data.js', '/css/style.css', '/manifest.webmanifest'];

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;                                  // POST（云端识别）不碰缓存
    const url = new URL(req.url);
    if (url.origin !== self.location.origin) return;                   // 跨域直连网络
    if (url.pathname.indexOf('/api/') === 0) return;                   // API 函数绝不缓存

    /* 页面导航：网络优先，断网回退首页 */
    if (req.mode === 'navigate') {
        event.respondWith(
            fetch(req)
                .then((res) => {
                    const copy = res.clone();
                    caches.open(VERSION).then((cache) => cache.put(req, copy));
                    return res;
                })
                .catch(() => caches.match('./index.html'))
        );
        return;
    }

    /* 核心代码：网络优先（发版立即生效），失败回退缓存（离线可用） */
    if (CORE.some((p) => url.pathname.endsWith(p))) {
        event.respondWith(
            fetch(req)
                .then((res) => {
                    if (res && res.ok) {
                        const copy = res.clone();
                        caches.open(VERSION).then((cache) => cache.put(req, copy));
                    }
                    return res;
                })
                .catch(() => caches.match(req))
        );
        return;
    }

    /* 数据与图标：缓存优先 + 后台静默更新 */
    event.respondWith(
        caches.match(req).then((hit) => {
            const net = fetch(req)
                .then((res) => {
                    if (res && res.ok) {
                        const copy = res.clone();
                        caches.open(VERSION).then((cache) => cache.put(req, copy));
                    }
                    return res;
                })
                .catch(() => hit);
            return hit || net;
        })
    );
});
