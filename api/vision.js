/* ==========================================================
 * 饮食热量记录站 · 拍照识别云端中转（Vercel Serverless Function）
 * ----------------------------------------------------------
 *  - key 存放在 Vercel 后台 Environment Variables（VISION_API_KEY），
 *    不写进代码、不出现在前端、不进公开仓库
 *  - 请求体：{ test: true }                    → 最小连通性测试
 *           { system, image }                  → 识别（image 为 data URL）
 *  - 上游响应原样透传（含错误），前端解析逻辑与直连完全一致
 *  - 环境变量（可选）：VISION_API_URL / VISION_MODEL 覆盖默认智谱端点
 * ========================================================== */
const DEFAULT_URL = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
const DEFAULT_MODEL = 'glm-4.1v-thinking-flash';

/* 简单来源护栏：只放行本站域名 / vercel 预览 / 本机（curl 无 Origin 也放行） */
const ALLOW_ORIGIN = [/yuvo\.asia$/, /\.vercel\.app$/, /^http:\/\/localhost(:\d+)?$/, /^http:\/\/127\.0\.0\.1(:\d+)?$/];

module.exports = async (req, res) => {
    /* ---- CORS 预检 ---- */
    const origin = req.headers.origin || '';
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') return res.status(204).end();
    if (origin && !ALLOW_ORIGIN.some(re => re.test(origin))) {
        return res.status(403).json({ error: { message: '不允许的来源：' + origin } });
    }
    if (req.method !== 'POST') return res.status(405).json({ error: { message: '仅支持 POST' } });

    /* ---- key 只从环境变量读取 ---- */
    const key = process.env.VISION_API_KEY;
    if (!key) {
        return res.status(503).json({
            error: { message: '云端识别未配置：站长需在 Vercel 后台 Settings → Environment Variables 添加 VISION_API_KEY 并重新部署。你也可以在「接入设置」里填自己的 API Key 直连。' },
        });
    }
    const url = process.env.VISION_API_URL || DEFAULT_URL;
    const model = process.env.VISION_MODEL || DEFAULT_MODEL;

    /* ---- 组装上游请求（服务端固定结构，模型/端点不受前端控制） ---- */
    const body = req.body || {};
    let payload;
    if (body.test) {
        payload = { model, messages: [{ role: 'user', content: '回复 ok' }], max_tokens: 200 };
    } else {
        const image = String(body.image || '');
        if (!image.startsWith('data:image/')) return res.status(400).json({ error: { message: '缺少 image（data:image/…;base64,…）' } });
        if (image.length > 3000000) return res.status(413).json({ error: { message: '图片过大（>2.2MB），请压缩后再试' } });
        const system = String(body.system || '').slice(0, 3000) || '你是食物热量识别助手。只输出 JSON 对象。';
        payload = {
            model,
            temperature: 0.2,
            max_tokens: 1500,
            messages: [
                { role: 'system', content: system },
                {
                    role: 'user', content: [
                        { type: 'text', text: '请识别这张图片里的食物并按要求输出 JSON。' },
                        { type: 'image_url', image_url: { url: image } },
                    ],
                },
            ],
        };
    }

    /* ---- 转发上游并原样透传 ---- */
    try {
        const up = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + key },
            body: JSON.stringify(payload),
        });
        const text = await up.text();
        res.status(up.status);
        res.setHeader('Content-Type', up.headers.get('content-type') || 'application/json');
        return res.send(text);
    } catch (e) {
        return res.status(502).json({ error: { message: '上游请求失败：' + ((e && e.message) || e) } });
    }
};

/* 思考型模型可能超 10 秒，给足时长（Hobby 上限 60s） */
module.exports.config = { maxDuration: 60 };
