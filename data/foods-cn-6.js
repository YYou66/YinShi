/* ==========================================================
 * 饮食热量记录站 · 全国饮食库 批次 6：港澳台
 * ----------------------------------------------------------
 *  - 香港 6 / 澳门 2 / 台湾 4，合计 12 道；至此全国 34 个省级行政区收录完毕
 *  - 末尾 push 进 CN_FOODS；id 从 405 起
 *  - 字段与 FOODS 完全兼容；region（港澳台）/ province（省份）
 *  - 所有数值均为估算值，仅供个人减脂参考，不构成医疗建议
 * ========================================================== */

const CN_FOODS5 = [
    /* ================= 香港 ================= */
    { id: 405, name: '港式奶茶（丝袜奶茶）', emoji: '🥤', category: 'drink', unit: '杯', measure: 'count', grams: 300, cal: 180, p: 4, c: 24, f: 7,
      region: '港澳台', province: '香港', tags: ['港式', '茶餐厅'], nutrition: '锡兰红茶撞淡奶，浓滑回甘', tip: '少糖走奶是隐士喝法' },
    { id: 406, name: '菠萝包', emoji: '🍞', category: 'bake', unit: '个', measure: 'count', grams: 90, cal: 300, p: 6, c: 44, f: 11,
      region: '港澳台', province: '香港', tags: ['茶餐厅', '酥皮'], nutrition: '酥皮面包裹黄油名场面', tip: '冰火菠萝油热量更高，偶尔为幸' },
    { id: 407, name: '流沙包（2个）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 140, cal: 260, p: 6, c: 42, f: 8,
      region: '港澳台', province: '香港', tags: ['早茶', '流沙'], nutrition: '咸蛋黄流沙馅，甜咸爆浆', tip: '早茶争议担当，两个刚好' },
    { id: 408, name: '车仔面（自选配菜）', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 380, p: 13, c: 54, f: 12,
      region: '港澳台', province: '香港', tags: ['街头', '自选'], nutrition: '鱼蛋牛杂萝卜自由组合', tip: '萝卜鱼蛋多点，炸物少点' },
    { id: 409, name: '鸡蛋仔', emoji: '🧇', category: 'street', unit: '份', measure: 'count', grams: 150, cal: 350, p: 7, c: 54, f: 12,
      region: '港澳台', province: '香港', tags: ['街头', '脆香'], nutrition: '蛋浆格子烘烤，外脆内软', tip: '港剧同款，两人分一份更合理' },
    { id: 410, name: '咖喱牛腩饭', emoji: '🍛', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 520, p: 28, c: 56, f: 21,
      region: '港澳台', province: '香港', tags: ['茶餐厅', '咖喱'], nutrition: '咖喱牛腩配米饭，辛香下饭', tip: '咖喱油厚，米饭吃一半' },

    /* ================= 澳门 ================= */
    { id: 411, name: '葡式蛋挞（安德鲁/玛嘉烈）', emoji: '🥧', category: 'bake', unit: '个', measure: 'count', grams: 60, cal: 280, p: 5, c: 30, f: 16,
      region: '港澳台', province: '澳门', tags: ['葡挞', '焦糖'], nutrition: '酥皮蛋奶焦糖顶，酥到掉渣', tip: '澳门名片，一个足矣' },
    { id: 412, name: '猪扒包（澳门）', emoji: '🍔', category: 'home', unit: '个', measure: 'count', grams: 200, cal: 400, p: 16, c: 36, f: 22,
      region: '港澳台', province: '澳门', tags: ['猪扒', '脆皮'], nutrition: '脆皮猪扒夹菠萝油面包', tip: '大利来记式碳水快乐，配冻柠茶' },

    /* ================= 台湾 ================= */
    { id: 413, name: '台式卤肉饭', emoji: '🍛', category: 'home', unit: '份', measure: 'count', grams: 350, cal: 450, p: 22, c: 52, f: 17,
      region: '港澳台', province: '台湾', tags: ['卤肉', '便当'], nutrition: '卤肉汁浇饭配卤蛋，酱香浓郁', tip: '汁是热量，饭量减半' },
    { id: 414, name: '珍珠奶茶（中杯）', emoji: '🧋', category: 'drink', unit: '杯', measure: 'count', grams: 500, cal: 320, p: 2, c: 72, f: 3,
      region: '港澳台', province: '台湾', tags: ['珍珠', '奶茶'], nutrition: '奶茶加珍珠波霸，含糖大户', tip: '无糖少珍珠是自救，别天天喝' },
    { id: 415, name: '凤梨酥（1个）', emoji: '🍍', category: 'bake', unit: '个', measure: 'count', grams: 45, cal: 190, p: 3, c: 28, f: 7,
      region: '港澳台', province: '台湾', tags: ['凤梨', '酥饼'], nutrition: '冬瓜凤梨馅酥皮饼，甜中带酸', tip: '台湾伴手礼，一两个配茶' },
    { id: 416, name: '台湾牛肉面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 440, p: 20, c: 54, f: 16,
      region: '港澳台', province: '台湾', tags: ['红烧', '牛腱'], nutrition: '红烧牛肉汤面，腱子肉软烂', tip: '汤头醇厚，汤留一半' },
];

/* 合并进全国主库 */
CN_FOODS.push(...CN_FOODS5);