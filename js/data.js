/* ==========================================================
 * 饮食热量记录站 · 食物库数据 data.js
 * ----------------------------------------------------------
 * 【如何添加/修改食物】
 *  1. 在 FOODS 数组里复制一个对象，改 id（全局唯一数字）即可；
 *  2. 字段说明：
 *     - id        : 唯一 id
 *     - name      : 食物名称（搜索按它匹配）
 *     - emoji     : 占位图案（不引入外部图片）
 *     - category  : 分类 key（见下方 CATEGORIES）
 *     - unit      : 计量单位文案（"份" / "个" / "杯" / "100g" 等）
 *     - measure   : 计量方式
 *                    'count'  → 按份/个/杯 计数
 *                    'weight' → 按 100g 计重（热量为每 100g 的值）
 *     - cal       : 热量（kcal），对应上面的单位
 *     - p / c / f : 蛋白质 / 碳水 / 脂肪（克），按该食物的基础单位
 *     - tags      : 标签数组（手账风小标签，2~3 个）
 *     - nutrition : 营养要点（一句话）
 *     - tip       : 减脂提示（一句话）
 *     【可选扩展字段（后续模块使用，不影响旧数据）】
 *     - grams     : 单个份量的估算克重（无则用 UNIT_INFO 换算表兜底）
 *     - spicy     : 辣度（不辣/微辣/中辣/特辣，见 SPICY_LEVELS）
 *     - science   : 科普短句（仅供个人减脂参考，不构成医疗建议）
 *     - cuisine   : 菜系 key（八大菜系，见 CUISINE_LIB）
 *     - region/province/city : 地域归属（全国饮食库使用）
 *  3. 所有数值均为估算值，仅供个人减脂参考。
 * ========================================================== */

/* ---------- 分类定义（筛选标签顺序 = 数组顺序） ---------- */
const CATEGORIES = [
    { key: 'street',    name: '街边小吃', emoji: '🍢' },
    { key: 'bake',      name: '烘焙点心', emoji: '🧁' },
    { key: 'drink',     name: '奶茶饮品', emoji: '🧋' },
    { key: 'breakfast', name: '早餐面点', emoji: '🥟' },
    { key: 'hotpot',    name: '火锅食材', emoji: '🥘' },
    { key: 'fitness',   name: '低卡优选', emoji: '🥗' },
    { key: 'home',      name: '家常饭菜', emoji: '🍚' },
];

/* ==========================================================
 * 设计系统常量（全局数据模型，供所有模块复用）
 * ========================================================== */

/* ---------- 单位换算表：杯 / 个 / 碗 / 串 / 份 / 克 ---------- */
/* 克重为常见做法的估算值，用于「约 X g」的展示与粗略换算 */
const UNIT_INFO = {
    '杯':   { grams: 500, note: '约 500ml', kind: '液体' },
    '碗':   { grams: 350, note: '约 350g',  kind: '汤食' },
    '个':   { grams: 80,  note: '约 80g（大小差异大）', kind: '一般' },
    '只':   { grams: 60,  note: '约 60g',   kind: '一般' },
    '根':   { grams: 30,  note: '约 30g',   kind: '条状' },
    '串':   { grams: 30,  note: '串净重约 30g', kind: '烤串' },
    '片':   { grams: 20,  note: '约 20g',   kind: '片状' },
    '块':   { grams: 50,  note: '约 50g',   kind: '块状' },
    '张':   { grams: 80,  note: '约 80g',   kind: '饼类' },
    '套':   { grams: 200, note: '约 200g',  kind: '套餐' },
    '笼':   { grams: 240, note: '一笼约 240g（约 6 只）', kind: '笼蒸' },
    '盘':   { grams: 200, note: '约 200g',  kind: '盘装' },
    '半颗': { grams: 40,  note: '约 40g',   kind: '一般' },
    '份':   { grams: 150, note: '约 150g（店与店差异大）', kind: '一般' },
};

/** 取食物的每份估算克重（计重食物直接用克数） */
function estGrams(food, qty) {
    if (!food) return 0;
    if (food.measure === 'weight') return Math.round(Number(qty) || 0);
    const per = (typeof food.grams === 'number' && food.grams > 0)
        ? food.grams
        : (UNIT_INFO[food.unit] ? UNIT_INFO[food.unit].grams : 100);
    return Math.round(per * (Number(qty) || 0));
}

/* ---------- 辣度统一：不辣 / 微辣 / 中辣 / 特辣 ---------- */
const SPICY_LEVELS = [
    { key: '不辣', emoji: '🤍', color: '#8FAF84' },
    { key: '微辣', emoji: '🟢', color: '#7FB069' },
    { key: '中辣', emoji: '🟠', color: '#E0913E' },
    { key: '特辣', emoji: '🔴', color: '#D24D3B' },
];
function spicyMeta(name) {
    return SPICY_LEVELS.find(s => s.key === name) || SPICY_LEVELS[0];
}

/* ---------- 八大菜系登记表（代表菜数据在「全国饮食库」单独交付） ---------- */
const CUISINE_LIB = [
    { key: 'lu',    name: '鲁菜', region: '山东',           flavor: '咸鲜',      spicy: '不辣', sweet: '微甜', desc: '黄河流域菜系，善用葱姜与酱料，讲究火候与汤头' },
    { key: 'chuan', name: '川菜', region: '四川、重庆',     flavor: '麻辣',      spicy: '特辣', sweet: '不甜', desc: '一菜一格、百菜百味，麻辣鲜香是招牌' },
    { key: 'yue',   name: '粤菜', region: '广东、广西、港澳', flavor: '清淡鲜甜', spicy: '不辣', sweet: '清甜', desc: '讲究食材本味，清淡养生，点心一绝' },
    { key: 'su',    name: '苏菜', region: '江苏',           flavor: '咸中带甜',  spicy: '不辣', sweet: '偏甜', desc: '刀工精细、火候考究，浓淡适宜' },
    { key: 'min',   name: '闽菜', region: '福建',           flavor: '鲜香',      spicy: '微辣', sweet: '微甜', desc: '擅长海鲜与汤羹，佛跳墙是名片' },
    { key: 'zhe',   name: '浙菜', region: '浙江',           flavor: '清爽',      spicy: '不辣', sweet: '微甜', desc: '清新爽口，注重食材原味与河鲜' },
    { key: 'xiang', name: '湘菜', region: '湖南',           flavor: '香辣',      spicy: '特辣', sweet: '不甜', desc: '香辣浓郁，腊味与剁椒是灵魂' },
    { key: 'hui',   name: '徽菜', region: '安徽',           flavor: '咸鲜',      spicy: '微辣', sweet: '微甜', desc: '讲究用油用色，重火功，火腿与山珍见长' },
];
function getCuisine(key) {
    return CUISINE_LIB.find(c => c.key === key) || null;
}

/* ---------- 营养素分类：高蛋白 / 高纤维 / 低GI / 高钙 / 高铁 / 维C / 钾 / 低脂 / 低糖 ---------- */
/* 判定 = 显式字段数据（fiber/sugar/gi/calcium/iron/vitC/potassium）优先，否则按 p/c/f 与标签兜底 */
const NUTRI_GROUPS = [
    { id: 'high-protein', name: '高蛋白',    emoji: '🥩', test: f =>
        (typeof f.p === 'number' && f.p >= 12) || (f.tags || []).includes('高蛋白') },
    { id: 'high-fiber',   name: '高膳食纤维', emoji: '🥦', test: f =>
        (typeof f.fiber === 'number' && f.fiber >= 4.5) || (f.tags || []).includes('高纤维') },
    { id: 'low-gi',       name: '低 GI',     emoji: '🌾', test: f =>
        (typeof f.gi === 'number' && f.gi <= 55) || (f.tags || []).some(t => t.includes('低GI')) },
    { id: 'high-calcium', name: '高钙',      emoji: '🥛', test: f =>
        (typeof f.calcium === 'number' && f.calcium >= 200) || (f.tags || []).some(t => t.includes('高钙') || t.includes('奶') || t.includes('乳')) },
    { id: 'high-iron',    name: '高铁',      emoji: '🩸', test: f =>
        (typeof f.iron === 'number' && f.iron >= 2) || (f.tags || []).some(t => t.includes('铁')) },
    { id: 'high-vitc',    name: '富含维C',   emoji: '🍊', test: f =>
        (typeof f.vitC === 'number' && f.vitC >= 25) || (f.tags || []).some(t => t.includes('维C') || t.includes('维c')) },
    { id: 'high-k',       name: '富含钾',    emoji: '🍌', test: f =>
        (typeof f.potassium === 'number' && f.potassium >= 250) || (f.tags || []).some(t => t.includes('钾')) },
    { id: 'low-fat',      name: '低脂',      emoji: '🥗', test: f =>
        (typeof f.f === 'number' && f.f <= 4) || (f.tags || []).includes('低脂') },
    { id: 'low-sugar',    name: '低糖',      emoji: '🍬', test: f =>
        (typeof f.sugar === 'number' && f.sugar <= 5) || (f.tags || []).some(t => t.includes('低糖')) },
];

/* ---------- 食物库（共 100 款：6 个分类各 15 款 + 家常饭菜 10 款） ---------- */
const FOODS = [
    /* ==================== 街边小吃（按份） ==================== */
    {
        id: 1, name: '章鱼小丸子', emoji: '🐙', category: 'street',
        unit: '份', measure: 'count', cal: 190, p: 6, c: 28, f: 6,
        tags: ['街头人气', '淀粉为主', '解馋'],
        nutrition: '淀粉外壳 + 章鱼颗粒，碳水偏高',
        tip: '小份解馋即可，避开淋满的沙拉酱'
    },
    {
        id: 2, name: '烤面筋', emoji: '🍢', category: 'street',
        unit: '份', measure: 'count', cal: 120, p: 11, c: 16, f: 2,
        tags: ['植物蛋白', '低脂', '街头人气'],
        nutrition: '面筋蛋白为主，酱料决定热量上限',
        tip: '少刷酱、少辣油，热量能再降三成'
    },
    {
        id: 3, name: '炸鸡排', emoji: '🍗', category: 'street',
        unit: '份', measure: 'count', cal: 450, p: 25, c: 25, f: 26,
        tags: ['油炸', '高蛋白', '高卡'],
        nutrition: '油炸外皮吸油多，蛋白质与油脂并存',
        tip: '撕掉外皮再吃，热量约减一半'
    },
    {
        id: 4, name: '铁板鱿鱼', emoji: '🦑', category: 'street',
        unit: '份', measure: 'count', cal: 210, p: 28, c: 8, f: 8,
        tags: ['高蛋白', '香辣', '低脂'],
        nutrition: '高蛋白低脂，但秘制酱料含糖油',
        tip: '改用孜然 / 辣椒粉代替甜面酱更优'
    },
    {
        id: 5, name: '烤冷面', emoji: '🍜', category: 'street',
        unit: '份', measure: 'count', cal: 380, p: 14, c: 55, f: 11,
        tags: ['管饱', '碳水偏高', '重口'],
        nutrition: '冷面 + 鸡蛋 + 酱料，一整套很顶饱',
        tip: '不加火腿肠、少刷酱，热量能降 1/3'
    },
    {
        id: 6, name: '手抓饼', emoji: '🫓', category: 'street',
        unit: '份', measure: 'count', cal: 400, p: 12, c: 40, f: 21,
        tags: ['高油', '管饱', '街头人气'],
        nutrition: '油酥饼皮油脂高，加蛋加肠更超标',
        tip: '只加蛋和生菜，别加烤肠脆饼'
    },
    {
        id: 7, name: '狼牙土豆', emoji: '🥔', category: 'street',
        unit: '份', measure: 'count', cal: 260, p: 4, c: 40, f: 10,
        tags: ['淀粉碳水', '香辣', '解馋'],
        nutrition: '土豆过油炸，辣料白砂糖添负担',
        tip: '要老板少油干拌，辣粉代替甜辣酱'
    },
    {
        id: 8, name: '长沙臭豆腐', emoji: '🧄', category: 'street',
        unit: '份', measure: 'count', cal: 220, p: 10, c: 20, f: 11,
        tags: ['发酵豆制品', '香辣', '解馋'],
        nutrition: '油炸豆腐吸汁，酱料足热量不低',
        tip: '6 块解馋即可，汤少喝点',
        science: '豆腐发酵会产生独特风味物质，但油炸与重酱才是热量来源，选清蒸类豆制品更优'
    },
    {
        id: 9, name: '关东煮', emoji: '🥣', category: 'street',
        unit: '份', measure: 'count', cal: 150, p: 8, c: 14, f: 6,
        tags: ['清爽低卡', '便利店', '汤食'],
        nutrition: '蔬菜豆腐为主，汤底清爽',
        tip: '选萝卜白菜豆腐串，避开丸类淀粉串',
        science: '关东煮本身清爽，但深褐色汤底往往偏咸，汤别喝太多'
    },
    {
        id: 10, name: '淀粉肠', emoji: '🌭', category: 'street',
        unit: '根', measure: 'count', cal: 180, p: 5, c: 22, f: 8,
        tags: ['淀粉为主', '油炸', '解馋'],
        nutrition: '以淀粉为主，油炸外皮吸油',
        tip: '偶尔嘴馋来一根，别配辣酱套餐'
    },
    {
        id: 61, name: '鸡蛋灌饼', emoji: '🫓', category: 'street',
        unit: '份', measure: 'count', cal: 330, p: 12, c: 36, f: 15,
        tags: ['高蛋白', '管饱', '街头人气'],
        nutrition: '饼皮 + 灌蛋液，蛋白质看得见',
        tip: '加生菜刷薄酱，别再加脆饼火腿肠'
    },
    {
        id: 62, name: '烤红薯', emoji: '🍠', category: 'street',
        unit: '个', measure: 'count', cal: 180, p: 2, c: 40, f: 1,
        tags: ['粗粮碳水', '高纤维', '天然甜'],
        nutrition: '天然粗粮，膳食纤维丰富',
        tip: '当主食吃别当零食，甜度很给力',
        science: '红薯升糖速度远低于等量甜点，但炭火烤制会流失部分水分、浓缩糖分，注意别一次吃太多',
        grams: 200
    },
    {
        id: 63, name: '冰糖葫芦', emoji: '🍡', category: 'street',
        unit: '串', measure: 'count', cal: 150, p: 1, c: 35, f: 0,
        tags: ['水果', '高糖', '经典零食'],
        nutrition: '山楂水果 + 冰糖外衣，甜蜜暴击',
        tip: '每周解馋一串，别当日常水果'
    },
    {
        id: 64, name: '炸串拼盘', emoji: '🍢', category: 'street',
        unit: '份', measure: 'count', cal: 350, p: 15, c: 25, f: 20,
        tags: ['油炸', '高卡', '重口'],
        nutrition: '万物皆可炸，外层面糊最吸油',
        tip: '素串选烤不选炸，酱料单放蘸着吃'
    },
    {
        id: 65, name: '凉皮', emoji: '🥣', category: 'street',
        unit: '份', measure: 'count', cal: 300, p: 8, c: 48, f: 8,
        tags: ['碳水为主', '清凉解腻', '夏季人气'],
        nutrition: '淀粉凉皮为主，麻酱辣油是热量大头',
        tip: '麻酱减半、醋多放，酸辣更开胃'
    },

    /* ==================== 烘焙点心（按个） ==================== */
    {
        id: 11, name: '葡式蛋挞', emoji: '🥧', category: 'bake',
        unit: '个', measure: 'count', cal: 230, p: 4, c: 26, f: 12,
        tags: ['烘焙甜点', '黄油香', '下午茶'],
        nutrition: '酥皮含大量黄油起酥，糖油炸弹',
        tip: '当下午茶点心，一天最多 1 个'
    },
    {
        id: 12, name: '铜锣烧', emoji: '🥞', category: 'bake',
        unit: '个', measure: 'count', cal: 250, p: 5, c: 48, f: 6,
        tags: ['红豆馅', '经典', '日式'],
        nutrition: '红豆馅 + 蜂蜜饼皮，碳水充足',
        tip: '选无馅或杂粮款，配无糖茶更搭'
    },
    {
        id: 13, name: '黄油曲奇', emoji: '🍪', category: 'bake',
        unit: '个', measure: 'count', cal: 70, p: 1, c: 7, f: 4,
        tags: ['黄油香', '小巧', '下午茶'],
        nutrition: '黄油占比高，小身材大热量',
        tip: '2 片封顶，细嚼慢咽解馋'
    },
    {
        id: 14, name: '红丝绒纸杯蛋糕', emoji: '🧁', category: 'bake',
        unit: '个', measure: 'count', cal: 320, p: 4, c: 40, f: 16,
        tags: ['奶油霜', '高糖', '下午茶'],
        nutrition: '奶油霜 + 面粉，糖脂双高',
        tip: '和同伴分着吃，快乐减半热量'
    },
    {
        id: 15, name: '黄油可颂', emoji: '🥐', category: 'bake',
        unit: '个', measure: 'count', cal: 310, p: 6, c: 35, f: 16,
        tags: ['酥皮', '早餐搭档', '黄油香'],
        nutrition: '千层起酥夹黄油，个中热量高手',
        tip: '当早餐主食，配黑咖啡别配含糖奶'
    },
    {
        id: 16, name: '马卡龙', emoji: '🍬', category: 'bake',
        unit: '个', measure: 'count', cal: 90, p: 1, c: 12, f: 4,
        tags: ['颜控', '高糖', '小巧'],
        nutrition: '杏仁粉 + 糖霜，小巧热量不低',
        tip: '1 个就够甜，拍完照慢慢吃'
    },
    {
        id: 17, name: '麻薯球', emoji: '🍡', category: 'bake',
        unit: '个', measure: 'count', cal: 85, p: 1, c: 16, f: 2,
        tags: ['糯米', '软糯', '零食'],
        nutrition: '糯米粉 + 黄油，软糯有嚼劲',
        tip: '3 个以内；选无夹心款更友好'
    },
    {
        id: 18, name: '原味贝果', emoji: '🥯', category: 'bake',
        unit: '个', measure: 'count', cal: 260, p: 9, c: 50, f: 2,
        tags: ['低糖低油', '扎实', '经典'],
        nutrition: '低糖低油，面团扎实耐嚼',
        tip: '配鸡蛋 / 牛油果，正餐级健康组合'
    },
    {
        id: 19, name: '瑞士卷', emoji: '🍰', category: 'bake',
        unit: '块', measure: 'count', cal: 210, p: 3, c: 34, f: 7,
        tags: ['奶油馅', '切片分享', '下午茶'],
        nutrition: '松软蛋糕 + 奶油馅，一片也顶饱',
        tip: '切薄片吃，配美式不配奶茶'
    },
    {
        id: 20, name: '蛋黄酥', emoji: '🥮', category: 'bake',
        unit: '个', measure: 'count', cal: 280, p: 6, c: 32, f: 14,
        tags: ['咸蛋黄', '层层酥', '节庆'],
        nutrition: '油皮油酥 + 咸蛋黄 + 豆沙，层层是油',
        tip: '当节日点心，一天一个的心愿达成'
    },
    {
        id: 66, name: '奶油泡芙', emoji: '🥠', category: 'bake',
        unit: '个', measure: 'count', cal: 200, p: 3, c: 20, f: 12,
        tags: ['奶油馅', '酥皮', '下午茶'],
        nutrition: '空心酥皮灌奶油，一个刚好',
        tip: '配黑咖啡解腻，两个就超标了'
    },
    {
        id: 67, name: '肉松小贝', emoji: '🧁', category: 'bake',
        unit: '个', measure: 'count', cal: 260, p: 8, c: 30, f: 12,
        tags: ['肉松', '咸甜口', '网红'],
        nutrition: '蛋糕体 + 沙拉酱 + 肉松，酱是热量源',
        tip: '想省热量，先刮掉一层沙拉酱'
    },
    {
        id: 68, name: '吐司面包', emoji: '🍞', category: 'bake',
        unit: '片', measure: 'count', cal: 130, p: 4, c: 24, f: 2,
        tags: ['基础主食', '百搭', '低糖'],
        nutrition: '基础碳水，白吐司糖油较温和',
        tip: '选全麦款，配鸡蛋牛油果更均衡'
    },
    {
        id: 69, name: '布朗尼', emoji: '🍫', category: 'bake',
        unit: '块', measure: 'count', cal: 240, p: 4, c: 30, f: 12,
        tags: ['巧克力', '浓醇', '下午茶'],
        nutrition: '巧克力 + 黄油 + 糖，浓郁热量也浓',
        tip: '切小方块，配黑咖啡慢慢抿'
    },
    {
        id: 70, name: '司康', emoji: '🥮', category: 'bake',
        unit: '个', measure: 'count', cal: 200, p: 4, c: 28, f: 8,
        tags: ['英式', '果干', '下午茶'],
        nutrition: '黄油面团 + 果干，英伦下午茶扛把子',
        tip: '奶油果酱浅蘸，别整坨抹'
    },

    /* ==================== 奶茶饮品（按杯） ==================== */
    {
        id: 21, name: '珍珠奶茶', emoji: '🧋', category: 'drink',
        unit: '杯', measure: 'count', cal: 450, p: 2, c: 70, f: 15,
        tags: ['奶茶人气', '高糖', '高卡'],
        nutrition: '波霸 / 奶精 / 糖浆三合一，液体热量不低',
        tip: '选无糖 + 去波霸，热量瞬间减半',
        science: '一杯 500ml 全糖珍珠奶茶含糖通常超过一天建议糖摄入量，高糖饮品可能更容易致痘',
        grams: 500
    },
    {
        id: 22, name: '芋泥啵啵奶茶', emoji: '🥤', category: 'drink',
        unit: '杯', measure: 'count', cal: 520, p: 3, c: 80, f: 20,
        tags: ['芋泥', '热卖', '高卡'],
        nutrition: '芋泥本身含糖，再叠奶盖热量更高',
        tip: '不加奶盖，换成清爽款更友好'
    },
    {
        id: 23, name: '鲜柠檬茶', emoji: '🍋', category: 'drink',
        unit: '杯', measure: 'count', cal: 150, p: 0, c: 36, f: 0,
        tags: ['果香', '清爽', '解腻'],
        nutrition: '热量主要来自糖浆，三分糖直接腰斩',
        tip: '选三分糖或无糖，冰饮更解腻'
    },
    {
        id: 24, name: '燕麦拿铁', emoji: '☕', category: 'drink',
        unit: '杯', measure: 'count', cal: 190, p: 4, c: 26, f: 7,
        tags: ['咖啡', '奶香', '暖饮'],
        nutrition: '燕麦奶自带碳水，还有咖啡因加持',
        tip: '不加糖不加焦糖酱，热量很友好'
    },
    {
        id: 25, name: '杨枝甘露', emoji: '🥭', category: 'drink',
        unit: '杯', measure: 'count', cal: 380, p: 2, c: 60, f: 14,
        tags: ['芒果', '椰浆', '港式'],
        nutrition: '芒果西柚 + 椰浆 + 西米，甜度拉满',
        tip: '选小杯、减糖浆，芒果保留更健康'
    },
    {
        id: 26, name: '港式丝袜奶茶', emoji: '🧉', category: 'drink',
        unit: '杯', measure: 'count', cal: 320, p: 4, c: 40, f: 15,
        tags: ['港式', '浓茶', '奶香'],
        nutrition: '淡奶醇厚，糖量不低',
        tip: '要求少甜，冰饮比热饮更涩香'
    },
    {
        id: 27, name: '无糖四季春茶', emoji: '🍵', category: 'drink',
        unit: '杯', measure: 'count', cal: 15, p: 0, c: 3, f: 0,
        tags: ['零卡', '清爽', '解腻'],
        nutrition: '纯茶几乎零热量，解腻神器',
        tip: '配什么小吃都放心，放心大胆点'
    },
    {
        id: 28, name: '抹茶拿铁', emoji: '🍵', category: 'drink',
        unit: '杯', measure: 'count', cal: 260, p: 5, c: 38, f: 9,
        tags: ['抹茶', '奶香', '微苦'],
        nutrition: '抹茶粉 + 牛奶 + 糖浆',
        tip: '选无糖浆，微苦回甘更高级'
    },
    {
        id: 29, name: '摩卡咖啡', emoji: '🍫', category: 'drink',
        unit: '杯', measure: 'count', cal: 350, p: 4, c: 45, f: 16,
        tags: ['巧克力', '奶油顶', '咖啡'],
        nutrition: '浓缩咖啡 + 巧克力酱 + 奶油顶',
        tip: '去掉奶油顶，热量立减 100+'
    },
    {
        id: 30, name: '奶盖茉莉花茶', emoji: '🫖', category: 'drink',
        unit: '杯', measure: 'count', cal: 280, p: 2, c: 24, f: 20,
        tags: ['奶盖', '花香', '咸香'],
        nutrition: '奶盖含奶油与盐，油脂热量高',
        tip: '奶盖减半或刮掉一层再喝'
    },
    {
        id: 71, name: '冰美式', emoji: '☕', category: 'drink',
        unit: '杯', measure: 'count', cal: 10, p: 0, c: 0, f: 0,
        tags: ['零卡', '咖啡', '提神'],
        nutrition: '水 + 浓缩咖啡，几乎零热量',
        tip: '什么都不加，就是减脂最友好的咖啡'
    },
    {
        id: 72, name: '椰椰拿铁', emoji: '🥥', category: 'drink',
        unit: '杯', measure: 'count', cal: 260, p: 4, c: 30, f: 13,
        tags: ['椰香', '咖啡', '热卖'],
        nutrition: '椰浆自带脂肪，香浓却不低卡',
        tip: '选无糖、冰饮，椰浆味更浓'
    },
    {
        id: 73, name: '草莓奶昔', emoji: '🍓', category: 'drink',
        unit: '杯', measure: 'count', cal: 320, p: 5, c: 52, f: 10,
        tags: ['水果', '冰沙', '甜口'],
        nutrition: '草莓果酱 + 冰淇淋打底，糖分不低',
        tip: '要半糖，或无糖加真实草莓果肉'
    },
    {
        id: 74, name: '葡萄气泡水', emoji: '🍇', category: 'drink',
        unit: '杯', measure: 'count', cal: 90, p: 0, c: 22, f: 0,
        tags: ['气泡', '果香', '清爽'],
        nutrition: '气泡水 + 果糖浆，清爽轻负担',
        tip: '选无糖气泡水版本，几乎零卡'
    },
    {
        id: 75, name: '阿华田', emoji: '🍫', category: 'drink',
        unit: '杯', measure: 'count', cal: 330, p: 6, c: 50, f: 11,
        tags: ['麦芽可可', '童年味', '甜口'],
        nutrition: '麦芽可可粉 + 牛奶，甜蜜回忆杀',
        tip: '减半糖量，用低脂奶更轻盈'
    },

    /* ==================== 早餐面点 ==================== */
    {
        id: 31, name: '大肉包', emoji: '🥟', category: 'breakfast',
        unit: '个', measure: 'count', cal: 260, p: 10, c: 40, f: 6,
        tags: ['传统早餐', '管饱', '咸口'],
        nutrition: '皮厚馅鲜，碳水蛋白质均衡',
        tip: '搭配无糖豆浆，别再加一套油条'
    },
    {
        id: 32, name: '茶叶蛋', emoji: '🥚', category: 'breakfast',
        unit: '个', measure: 'count', cal: 75, p: 7, c: 1, f: 5,
        tags: ['补蛋白', '便利店', '低卡'],
        nutrition: '优质蛋白，蛋黄含胆固醇',
        tip: '作加餐补蛋白质，非常合适'
    },
    {
        id: 33, name: '油条', emoji: '🥖', category: 'breakfast',
        unit: '根', measure: 'count', cal: 270, p: 6, c: 30, f: 14,
        tags: ['油炸', '传统早餐', '酥脆'],
        nutrition: '油炸面食，吸油量惊人',
        tip: '偶尔吃，配清粥豆浆、别再额外加糖'
    },
    {
        id: 34, name: '糯米烧麦', emoji: '🍙', category: 'breakfast',
        unit: '个', measure: 'count', cal: 100, p: 3, c: 18, f: 2,
        tags: ['糯米', '管饱', '咸口'],
        nutrition: '糯米主碳水，顶饱但升糖偏快',
        tip: '2 个就够，别配油煎系列'
    },
    {
        id: 35, name: '煎饼果子', emoji: '🫓', category: 'breakfast',
        unit: '套', measure: 'count', cal: 450, p: 16, c: 55, f: 18,
        tags: ['传统早餐', '酥脆', '管饱'],
        nutrition: '绿豆面 + 薄脆 + 甜面酱，酥脆高油',
        tip: '不要薄脆、双蛋多菜，酱少刷'
    },
    {
        id: 36, name: '无糖豆浆', emoji: '🥛', category: 'breakfast',
        unit: '杯', measure: 'count', cal: 55, p: 4, c: 3, f: 2,
        tags: ['植物蛋白', '传统', '轻负担'],
        nutrition: '植物蛋白 + 大豆卵磷脂，饱腹温和',
        tip: '传统无糖款，别选加糖速溶豆奶'
    },
    {
        id: 37, name: '小笼包', emoji: '🥢', category: 'breakfast',
        unit: '笼', measure: 'count', cal: 220, p: 12, c: 24, f: 8,
        tags: ['皮薄汁多', '江南', '咸口'],
        nutrition: '皮薄汁多，肉馅油脂随汤入口',
        tip: '一笼 6 个当主食，蘸料浅浅蘸'
    },
    {
        id: 38, name: '葱油饼', emoji: '🫓', category: 'breakfast',
        unit: '张', measure: 'count', cal: 320, p: 7, c: 45, f: 12,
        tags: ['油酥', '葱香', '传统早餐'],
        nutrition: '油酥起层，葱香与油脂并存',
        tip: '半张解馋，配蛋配菜更均衡'
    },
    {
        id: 39, name: '菜肉馄饨', emoji: '🥟', category: 'breakfast',
        unit: '碗', measure: 'count', cal: 350, p: 16, c: 45, f: 12,
        tags: ['汤食', '咸口', '管饱'],
        nutrition: '皮薄馅足，汤头油脂看底料',
        tip: '选清汤底、少放辣油，青菜多来点'
    },
    {
        id: 40, name: '酱香饼', emoji: '🫓', category: 'breakfast',
        unit: '份', measure: 'count', cal: 380, p: 10, c: 55, f: 12,
        tags: ['咸香', '油煎', '管饱'],
        nutrition: '面饼煎香 + 秘制刷酱，咸香高油',
        tip: '要少酱，趁热切成小块慢慢吃'
    },
    {
        id: 76, name: '燕麦粥', emoji: '🥣', category: 'breakfast',
        unit: '碗', measure: 'count', cal: 180, p: 6, c: 34, f: 2,
        tags: ['粗粮', '轻负担', '暖胃'],
        nutrition: '燕麦片煮粥，膳食纤维在线',
        tip: '用牛奶煮加鸡蛋，别加白糖'
    },
    {
        id: 77, name: '全麦吐司配蛋', emoji: '🍳', category: 'breakfast',
        unit: '份', measure: 'count', cal: 220, p: 13, c: 26, f: 7,
        tags: ['高蛋白', '轻负担', '元气早餐'],
        nutrition: '全麦碳水 + 煎蛋蛋白，黄金搭配',
        tip: '少油煎蛋，配圣女果更清爽'
    },
    {
        id: 78, name: '玉米烙', emoji: '🌽', category: 'breakfast',
        unit: '份', measure: 'count', cal: 380, p: 6, c: 55, f: 15,
        tags: ['甜玉米', '油炸', '甜咸口'],
        nutrition: '甜玉米 + 淀粉浆油炸，香甜但吸油',
        tip: '当甜点分着吃，别整盘独享'
    },
    {
        id: 79, name: '奶黄包', emoji: '🥯', category: 'breakfast',
        unit: '个', measure: 'count', cal: 220, p: 5, c: 36, f: 6,
        tags: ['甜口', '流心馅', '早茶'],
        nutrition: '奶黄流心馅，甜味碳水炸弹',
        tip: '一个就好，配茶水更解甜腻'
    },
    {
        id: 80, name: '皮蛋瘦肉粥', emoji: '🍚', category: 'breakfast',
        unit: '碗', measure: 'count', cal: 250, p: 12, c: 36, f: 6,
        tags: ['咸香', '暖胃', '传统'],
        nutrition: '米粥 + 瘦肉 + 皮蛋，温和顶饱',
        tip: '少放香油，加葱花姜丝提味'
    },

    /* ==================== 火锅食材（按 100g 计重） ==================== */
    {
        id: 41, name: '肥牛卷', emoji: '🥩', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 320, p: 19, c: 0, f: 27,
        tags: ['油脂丰腴', '火锅必点', '高卡'],
        nutrition: '油脂丰富，涮一下就得吃',
        tip: '涮清汤锅，蘸料少放麻酱'
    },
    {
        id: 42, name: '虾滑', emoji: '🦐', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 105, p: 19, c: 3, f: 2,
        tags: ['高蛋白', '低脂', '弹牙'],
        nutrition: '高蛋白低脂，火锅优选',
        tip: '配清汤 / 番茄锅，别蘸油碟'
    },
    {
        id: 43, name: '冻豆腐', emoji: '🧊', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 80, p: 8, c: 4, f: 4,
        tags: ['豆制品', '吸汤', '低卡'],
        nutrition: '豆制品，蜂窝结构爱吸汤汁',
        tip: '捞起沥干汤再入口，少吸红油'
    },
    {
        id: 44, name: '藕片', emoji: '🪷', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 65, p: 2, c: 15, f: 0,
        tags: ['脆爽', '淀粉类蔬菜', '低卡'],
        nutrition: '淀粉类蔬菜，脆甜低脂',
        tip: '当主食吃，麻辣锅少涮'
    },
    {
        id: 45, name: '毛肚', emoji: '🐄', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 95, p: 16, c: 1, f: 3,
        tags: ['高蛋白', '脆嫩', '火锅必点'],
        nutrition: '高蛋白几乎零碳水，七上八下就熟',
        tip: '别涮太久，脆嫩才好吃'
    },
    {
        id: 46, name: '鸭血', emoji: '🦆', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 70, p: 12, c: 2, f: 2,
        tags: ['补铁', '低脂', '软嫩'],
        nutrition: '蛋白质 + 铁，低脂低卡',
        tip: '少喝涮过它的红油汤'
    },
    {
        id: 47, name: '牛蛙', emoji: '🐸', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 90, p: 17, c: 1, f: 2,
        tags: ['白肉', '高蛋白', '嫩滑'],
        nutrition: '白肉高蛋白，肉质细嫩',
        tip: '清汤涮熟，蘸干碟最香'
    },
    {
        id: 48, name: '红薯宽粉', emoji: '🍠', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 120, p: 1, c: 28, f: 0,
        tags: ['薯类碳水', '弹滑', '主食替换'],
        nutrition: '薯类淀粉，吸味又顶饱',
        tip: '当主食算量，别整份下锅'
    },
    {
        id: 49, name: '娃娃菜', emoji: '🥬', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 15, p: 1, c: 3, f: 0,
        tags: ['高纤维', '低卡', '解腻'],
        nutrition: '高纤维低热量，火锅清流',
        tip: '放心大胆吃，记得吸油再入口'
    },
    {
        id: 50, name: '金针菇', emoji: '🍄', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 30, p: 2, c: 5, f: 0,
        tags: ['高纤维', '低卡', '弹牙'],
        nutrition: '低卡高纤维，明天见的老朋友',
        tip: '每次少夹一把，烫熟再吃'
    },
    {
        id: 81, name: '羊肉卷', emoji: '🐑', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 290, p: 19, c: 0, f: 23,
        tags: ['油脂丰腴', '暖身', '高卡'],
        nutrition: '羊肉卷脂肪不低，膻香是灵魂',
        tip: '涮清汤配韭花，别配麻酱双份'
    },
    {
        id: 82, name: '手打牛肉丸', emoji: '🧆', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 260, p: 16, c: 6, f: 18,
        tags: ['弹牙', '高蛋白', '高卡'],
        nutrition: '牛肉 + 油脂捶打，弹嫩多汁',
        tip: '3 颗就够，数着吃别一盘下锅'
    },
    {
        id: 83, name: '竹荪', emoji: '🎋', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 40, p: 3, c: 3, f: 1,
        tags: ['低卡', '菇类清香', '吸汤'],
        nutrition: '菌菇类，网状结构吸汤但热量低',
        tip: '清汤锅里涮，脆嫩鲜甜'
    },
    {
        id: 84, name: '土豆片', emoji: '🥔', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 80, p: 2, c: 18, f: 0,
        tags: ['淀粉类', '绵软', '主食替换'],
        nutrition: '薯类淀粉，绵软吸味',
        tip: '当主食吃，麻辣锅少涮'
    },
    {
        id: 85, name: '海带结', emoji: '🪸', category: 'hotpot',
        unit: '100g', measure: 'weight', cal: 25, p: 1, c: 4, f: 0,
        tags: ['海藻', '低卡', '解腻'],
        nutrition: '海藻类，碘与纤维在线',
        tip: '汤里多夹几个，热量几乎忽略'
    },

    /* ==================== 减脂人最爱 ==================== */
    {
        id: 51, name: '香煎鸡胸', emoji: '🍗', category: 'fitness',
        unit: '份', measure: 'count', cal: 165, p: 31, c: 2, f: 4,
        tags: ['高蛋白', '低脂', '减脂首选'],
        nutrition: '低脂高蛋白，减脂黄金食材',
        tip: '少油煎 + 黑胡椒，简单又美味',
        science: '鸡胸是低脂高蛋白的标杆食材，饱腹感强，但别过度依赖单一蛋白质来源'
    },
    {
        id: 52, name: '无糖希腊酸奶', emoji: '🥛', category: 'fitness',
        unit: '杯', measure: 'count', cal: 60, p: 10, c: 3, f: 1,
        tags: ['补蛋白', '无糖', '轻负担'],
        nutrition: '浓缩蛋白质，无糖低卡',
        tip: '配蓝莓 / 坚果，加餐首选'
    },
    {
        id: 53, name: '蒸玉米', emoji: '🌽', category: 'fitness',
        unit: '根', measure: 'count', cal: 110, p: 3, c: 24, f: 1,
        tags: ['粗粮', '高纤维', '自然甜'],
        nutrition: '优质粗粮碳水，饱腹感强',
        tip: '代替精制主食，红薯同理',
        science: '玉米保留完整谷粒，膳食纤维与B族维生素优于精白米面'
    },
    {
        id: 54, name: '白灼虾', emoji: '🍤', category: 'fitness',
        unit: '份', measure: 'count', cal: 120, p: 25, c: 0, f: 1,
        tags: ['高蛋白', '低脂', '清蒸鲜甜'],
        nutrition: '几乎纯蛋白，热量极低',
        tip: '蘸酱油姜末，别蘸油爆酱'
    },
    {
        id: 55, name: '水煮西兰花', emoji: '🥦', category: 'fitness',
        unit: '份', measure: 'count', cal: 55, p: 5, c: 8, f: 1,
        tags: ['高纤维', '低卡', '饱腹'],
        nutrition: '高纤维十字花科，饱腹低卡',
        tip: '淋一点生抽橄榄油，更好下口',
        science: '西兰花在同属蔬菜中蛋白质与矿物质较突出，并含硫代葡萄糖苷类物质，长期适量食用或有益'
    },
    {
        id: 56, name: '糙米饭', emoji: '🍚', category: 'fitness',
        unit: '碗', measure: 'count', cal: 220, p: 5, c: 46, f: 2,
        tags: ['粗粮', '高纤维', '主食替换'],
        nutrition: '保留米糠层，膳食纤维丰富',
        tip: '拳头大小一碗，配菜七分'
    },
    {
        id: 57, name: '水煮蛋', emoji: '🥚', category: 'fitness',
        unit: '个', measure: 'count', cal: 78, p: 6, c: 1, f: 5,
        tags: ['补蛋白', '便携', '全能'],
        nutrition: '全蛋营养全面，优质蛋白',
        tip: '早餐一个 + 加餐一个，刚刚好'
    },
    {
        id: 58, name: '牛油果', emoji: '🥑', category: 'fitness',
        unit: '半颗', measure: 'count', cal: 160, p: 2, c: 8, f: 15,
        tags: ['优质脂肪', '高钾', '饱腹感强'],
        nutrition: '优质脂肪 + 钾，饱腹感强',
        tip: '半颗就够，配全麦面包别整颗吞'
    },
    {
        id: 59, name: '三文鱼刺身', emoji: '🍣', category: 'fitness',
        unit: '100g', measure: 'weight', cal: 208, p: 20, c: 0, f: 14,
        tags: ['优质脂肪', '欧米伽3', '刺身'],
        nutrition: '欧米伽-3 脂肪酸，优质脂肪来源',
        tip: '一次 100g，轻蘸酱油芥末',
        science: '三文鱼富含欧米伽-3 脂肪酸与优质蛋白，但脂肪不低，减脂期建议控制在 100g 左右'
    },
    {
        id: 60, name: '魔芋凉拌面', emoji: '🍜', category: 'fitness',
        unit: '份', measure: 'count', cal: 90, p: 2, c: 18, f: 1,
        tags: ['魔芋', '低卡', '爽滑'],
        nutrition: '魔芋几乎零热量，饱腹又弹牙',
        tip: '料汁清淡点，配黄瓜丝虾仁更香'
    },
    {
        id: 86, name: '香煎瘦牛肉', emoji: '🥩', category: 'fitness',
        unit: '100g', measure: 'weight', cal: 150, p: 24, c: 0, f: 5,
        tags: ['高蛋白', '低脂', '增肌'],
        nutrition: '瘦牛肉富含铁与蛋白，增肌好手',
        tip: '少油大火快煎，配彩椒更赞'
    },
    {
        id: 87, name: '希腊鸡肉沙拉', emoji: '🥗', category: 'fitness',
        unit: '份', measure: 'count', cal: 280, p: 30, c: 18, f: 8,
        tags: ['高蛋白', '高纤维', '轻负担'],
        nutrition: '鸡胸 + 生菜 + 全谷粒，营养均衡',
        tip: '沙拉酱单放，用油醋汁代替'
    },
    {
        id: 88, name: '鹰嘴豆', emoji: '🫘', category: 'fitness',
        unit: '100g', measure: 'weight', cal: 165, p: 9, c: 27, f: 3,
        tags: ['植物蛋白', '高纤维', '饱腹'],
        nutrition: '豆中之王，蛋白纤维双在线',
        tip: '水煮拌沙拉，别做成油炸款'
    },
    {
        id: 89, name: '圣女果', emoji: '🍅', category: 'fitness',
        unit: '份', measure: 'count', cal: 45, p: 2, c: 10, f: 0,
        tags: ['低卡', '补维C', '解馋'],
        nutrition: '小番茄两拳份，维 C 与水分充足',
        tip: '当下午零嘴，健康又解馋'
    },
    {
        id: 90, name: '全麦面包', emoji: '🍞', category: 'fitness',
        unit: '片', measure: 'count', cal: 90, p: 4, c: 15, f: 1,
        tags: ['粗粮', '高纤维', '早餐搭档'],
        nutrition: '全麦粉做的真全麦，纤维保留',
        tip: '看配料表第一位要全麦粉',
        science: '真全麦面包用全麦粉而非「全麦风味」改良剂，纤维与B族维生素保留更完整'
    },

    /* ==================== 家常饭菜（日常三餐） ==================== */
    {
        id: 91, name: '白米饭', emoji: '🍚', category: 'home',
        unit: '碗', measure: 'count', cal: 232, p: 5, c: 50, f: 1,
        tags: ['主食', '百搭', '碳水'],
        nutrition: '精制碳水，一日三餐的底子',
        tip: '拳头大小约 150g，配足蛋白质和蔬菜'
    },
    {
        id: 92, name: '蛋炒饭', emoji: '🍳', category: 'home',
        unit: '盘', measure: 'count', cal: 450, p: 12, c: 60, f: 18,
        tags: ['快手', '管饱', '油香'],
        nutrition: '米饭 + 鸡蛋 + 油炒，油量决定热量',
        tip: '隔夜饭粒粒分明，油少放一半'
    },
    {
        id: 93, name: '番茄炒蛋', emoji: '🍅', category: 'home',
        unit: '份', measure: 'count', cal: 200, p: 9, c: 10, f: 13,
        tags: ['家常', '酸甜', '下饭'],
        nutrition: '番茄 + 鸡蛋，酸甜开胃',
        tip: '少油少糖，鸡蛋别煎太老'
    },
    {
        id: 94, name: '红烧肉', emoji: '🥘', category: 'home',
        unit: '份', measure: 'count', cal: 480, p: 14, c: 10, f: 42,
        tags: ['硬菜', '肥而不腻', '高卡'],
        nutrition: '五花肉炖煮，脂肪大户',
        tip: '偶尔解馋，配饭少舀汤汁'
    },
    {
        id: 95, name: '宫保鸡丁', emoji: '🐔', category: 'home',
        unit: '份', measure: 'count', cal: 320, p: 18, c: 20, f: 18,
        tags: ['川味', '花生', '下饭'],
        nutrition: '鸡丁 + 花生 + 糖醋芡汁，酸甜微辣',
        tip: '点少油少糖版本，别把汤汁拌进饭'
    },
    {
        id: 96, name: '青椒肉丝', emoji: '🫑', category: 'home',
        unit: '份', measure: 'count', cal: 280, p: 16, c: 12, f: 18,
        tags: ['家常', '下饭', '咸香'],
        nutrition: '瘦肉丝 + 青椒，荤素搭配',
        tip: '用瘦里脊，别勾重油芡'
    },
    {
        id: 97, name: '麻婆豆腐', emoji: '🌶️', category: 'home',
        unit: '份', measure: 'count', cal: 260, p: 14, c: 10, f: 18,
        tags: ['川味', '麻辣', '下饭'],
        nutrition: '嫩豆腐 + 牛肉臊子 + 红油',
        tip: '少红油多豆腐，记得配饭更省'
    },
    {
        id: 98, name: '清蒸鲈鱼', emoji: '🐟', category: 'home',
        unit: '份', measure: 'count', cal: 220, p: 30, c: 2, f: 10,
        tags: ['高蛋白', '清蒸', '鲜嫩'],
        nutrition: '整鱼清蒸，优质蛋白低油',
        tip: '淋蒸鱼豉油，别连浇三勺热油'
    },
    {
        id: 99, name: '白灼生菜', emoji: '🥬', category: 'home',
        unit: '份', measure: 'count', cal: 60, p: 2, c: 5, f: 3,
        tags: ['低卡', '高纤维', '清爽'],
        nutrition: '水烫生菜纤维高，热量低',
        tip: '生抽蚝油清淡兑，别浇油'
    },
    {
        id: 100, name: '拍黄瓜', emoji: '🥒', category: 'home',
        unit: '份', measure: 'count', cal: 45, p: 1, c: 6, f: 2,
        tags: ['低卡', '爽口', '解腻'],
        nutrition: '黄瓜水分足，脆爽解腻',
        tip: '蒜醋调味，少放香油'
    },
];