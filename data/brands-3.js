/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 3
 * ----------------------------------------------------------
 *  - 醉得意（需求文档点名）/ 茶百道 / 沪上阿姨 各 10 款
 *  - 蜜雪冰城追加 10 款（与批次 1 的 10 款不重复，合计 20 款）
 *  - id 527-566，接批次 2（477-526），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 茶百道「豆乳玉麒麟」锚点来自多篇公开测评（中杯标准糖
 *    510-532 大卡、三分糖约 470-480、无糖约 420-430）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH3 = [
    /* ================= 醉得意 🥘 ================= */
    { id: 527, name: '醉排骨（招牌）', emoji: '🍖', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 260, cal: 380, p: 18, c: 32, f: 20,
      tags: ['招牌', '排骨'], nutrition: '福州风味炸收排骨，酸甜带蒜香', tip: '招牌必点，酱汁拌饭要克制' },
    { id: 528, name: '糖醋里脊', emoji: '🍖', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 280, cal: 480, p: 16, c: 63, f: 18,
      tags: ['酸甜', '油炸'], nutrition: '裹粉油炸里脊挂糖醋汁，油糖双高', tip: '配碗清汤，别再点主食甜品' },
    { id: 529, name: '水煮肉片', emoji: '🌶️', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 350, cal: 620, p: 28, c: 23, f: 46,
      tags: ['川味', '重油'], nutrition: '红油豆芽垫底，肉片滑嫩但油量大', tip: '过热水涮一层油能减约 100 kcal' },
    { id: 530, name: '酸菜鱼', emoji: '🐟', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 400, cal: 450, p: 30, c: 15, f: 30,
      tags: ['酸辣', '鱼片'], nutrition: '黑鱼片配酸菜，汤底浮油不少', tip: '蛋白管够，汤别泡饭' },
    { id: 531, name: '麻婆豆腐', emoji: '🥘', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 250, cal: 380, p: 18, c: 14, f: 28,
      tags: ['川味', '豆腐'], nutrition: '嫩豆腐配肉末红油，下饭利器', tip: '豆腐本身低卡，红油才是热量来源' },
    { id: 532, name: '干锅肥肠', emoji: '🥘', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 300, cal: 640, p: 20, c: 19, f: 54,
      tags: ['干锅', '重口'], nutrition: '肥肠脂肪极高，干锅持续加热收汁', tip: '本期热量天花板，两人分着吃' },
    { id: 533, name: '手撕包菜', emoji: '🥬', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 300, cal: 210, p: 4, c: 23, f: 11,
      tags: ['素菜', '清爽'], nutrition: '大火快炒的包菜，油量决定热量', tip: '桌上最稳的一盘，优先夹它' },
    { id: 534, name: '可乐鸡翅（6只）', emoji: '🍗', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 300, cal: 500, p: 30, c: 54, f: 18,
      tags: ['鸡翅', '甜口'], nutrition: '可乐收汁鸡翅，甜味来自糖而非可乐本身', tip: '去皮能减约 60 kcal' },
    { id: 535, name: '番茄蛋汤', emoji: '🍅', category: 'home', brand: 'zui', unit: '份', measure: 'count', grams: 300, cal: 90, p: 4, c: 7, f: 5,
      tags: ['汤品', '清淡'], nutrition: '番茄与蛋花，清淡挂', tip: '替代重口汤品的正确答案' },
    { id: 536, name: '米饭（1碗）', emoji: '🍚', category: 'home', brand: 'zui', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '点菜下饭先算上这碗的 230' },

    /* ================= 茶百道 🍹 ================= */
    { id: 537, name: '豆乳玉麒麟（中杯）', emoji: '🧋', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 520, p: 6, c: 62, f: 27,
      tags: ['招牌', '奶盖'], nutrition: '乌龙茶底配豆乳奶盖与黄豆粉，公开测评标准糖约 510-532 大卡', tip: '三分糖约 480、去奶盖更低，别天天喝' },
    { id: 538, name: '珍珠奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 350, p: 3, c: 76, f: 4,
      tags: ['珍珠', '奶茶'], nutrition: '经典珍珠奶茶，公开数据约 300-400 大卡', tip: '珍珠减半立省 50 kcal' },
    { id: 539, name: '芝芝莓莓（中杯）', emoji: '🍓', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 4, c: 46, f: 11,
      tags: ['莓果', '奶盖'], nutrition: '草莓果肉冰沙配芝士奶盖，公开数据约 280-350 大卡', tip: '去奶盖直接降一档' },
    { id: 540, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 280, p: 3, c: 54, f: 6,
      tags: ['芒果', '西米'], nutrition: '芒果椰奶配西米，公开数据约 250-300 大卡', tip: '果奶组合里相对克制的一款' },
    { id: 541, name: '芋泥波波奶绿（中杯）', emoji: '🍠', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 250, p: 5, c: 42, f: 7,
      tags: ['芋泥', '奶绿'], nutrition: '芋泥打底配奶绿波波，公开数据约 220-280 大卡', tip: '代餐感强，喝了就别配零食' },
    { id: 542, name: '四季春茶（中杯·微糖）', emoji: '🍵', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 120, p: 0, c: 30, f: 0,
      tags: ['纯茶', '清爽'], nutrition: '清香四季春，微糖版约 100-150 大卡', tip: '点「无糖」可接近 0，解腻首选' },
    { id: 543, name: '烤黑糖波波牛乳（中杯）', emoji: '🧋', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 400, p: 9, c: 66, f: 11,
      tags: ['黑糖', '鲜奶'], nutrition: '黑糖珍珠配鲜牛乳，香浓也高碳', tip: '黑糖挂壁减半，甜度选三分' },
    { id: 544, name: '血糯米芋圆奶茶（中杯）', emoji: '🫘', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 420, p: 6, c: 82, f: 8,
      tags: ['血糯米', '芋圆'], nutrition: '双小料组合，淀粉加糖叠加', tip: '小料只留一样，能省 60-80 kcal' },
    { id: 545, name: '多肉葡萄（中杯）', emoji: '🍇', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 2, c: 76, f: 2,
      tags: ['葡萄', '果茶'], nutrition: '葡萄果肉与果酱打底的冰沙果茶', tip: '果茶糖不少，选半糖起步' },
    { id: 546, name: '乌漆嘛黑（中杯）', emoji: '🫐', category: 'drink', brand: 'chabaidao', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 1, c: 72, f: 1,
      tags: ['桑葚', '果茶'], nutrition: '桑葚果酱调色的酸甜果茶', tip: '颜值款糖分不低，少糖为宜' },

    /* ================= 沪上阿姨 🫖 ================= */
    { id: 547, name: '血糯米波波奶茶（中杯）', emoji: '🫘', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 400, p: 6, c: 80, f: 6,
      tags: ['血糯米', '招牌'], nutrition: '招牌血糯米系列，糯香但淀粉足', tip: '血糯米本身顶饱，可当半顿加餐' },
    { id: 548, name: '芋泥波波鲜奶茶（中杯）', emoji: '🍠', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 420, p: 8, c: 74, f: 10,
      tags: ['芋泥', '鲜奶'], nutrition: '厚芋泥配鲜奶茶与波波', tip: '奶底选鲜奶、糖减半更稳' },
    { id: 549, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 3, c: 59, f: 6,
      tags: ['芒果', '西米'], nutrition: '芒果椰香配西米柚子粒', tip: '冰沙款少糖风味也不减' },
    { id: 550, name: '五谷血糯米奶茶（中杯）', emoji: '🌾', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 380, p: 7, c: 74, f: 6,
      tags: ['五谷', '谷物'], nutrition: '五谷杂粮版奶茶，饱腹感强', tip: '代餐可以，别再配主食' },
    { id: 551, name: '芝士奶盖葡萄（中杯）', emoji: '🍇', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 360, p: 4, c: 54, f: 14,
      tags: ['葡萄', '奶盖'], nutrition: '葡萄果茶加厚厚芝士奶盖', tip: '奶盖是主要变量，可去可分装' },
    { id: 552, name: '茉莉奶绿（中杯）', emoji: '🍵', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 4, c: 67, f: 5,
      tags: ['奶绿', '茉莉'], nutrition: '茉莉茶底配奶，清香顺滑', tip: '三分糖是甜度与负担的平衡点' },
    { id: 553, name: '满杯橙橙（中杯）', emoji: '🍊', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 240, p: 1, c: 59, f: 0,
      tags: ['橙子', '果茶'], nutrition: '橙子果肉果茶，酸甜维 C 感', tip: '果茶里的中位选择，半糖更好' },
    { id: 554, name: '鲜榨柠檬茶（中杯）', emoji: '🍋', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 200, p: 0, c: 50, f: 0,
      tags: ['柠檬', '红茶'], nutrition: '柠檬配红茶，清爽解腻', tip: '糖度可调，半糖约省 40 kcal' },
    { id: 555, name: '烤芋泥好暖椰（中杯）', emoji: '🥥', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 450, p: 8, c: 78, f: 12,
      tags: ['芋泥', '椰乳'], nutrition: '烤芋泥配椰乳，绵密高碳', tip: '本期沪上热量位前列，偶尔犒赏' },
    { id: 556, name: '四季春青提（中杯）', emoji: '🍇', category: 'drink', brand: 'auntie', unit: '杯', measure: 'count', grams: 500, cal: 260, p: 1, c: 64, f: 0,
      tags: ['青提', '果茶'], nutrition: '青提果肉配四季春茶底', tip: '茶底清爽，记得要求少糖' },

    /* ================= 蜜雪冰城（批次 3 追加 10 款）🍦 ================= */
    { id: 557, name: '茉莉奶绿（中杯）', emoji: '🧋', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 260, p: 2, c: 58, f: 2,
      tags: ['奶绿', '平价'], nutrition: '茉莉茶底配奶，平价奶茶位', tip: '蜜雪系里相对低卡的一款' },
    { id: 558, name: '椰果奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 340, p: 2, c: 76, f: 3,
      tags: ['椰果', '小料'], nutrition: '经典椰果奶茶，小料提供咀嚼感', tip: '椰果比珍珠热量略低，可优先' },
    { id: 559, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 3, c: 61, f: 5,
      tags: ['芒果', '西米'], nutrition: '芒果配西米的平价版本', tip: '解馋够用，糖度选少糖' },
    { id: 560, name: '奥利奥圣代', emoji: '🍦', category: 'bake', brand: 'mixue', unit: '份', measure: 'count', grams: 140, cal: 250, p: 4, c: 34, f: 11,
      tags: ['圣代', '奥利奥'], nutrition: '冰淇淋撒奥利奥碎，脆上加甜', tip: '比加酱版圣代友好，控制在一个' },
    { id: 561, name: '芝士奶盖四季春（中杯）', emoji: '🧀', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 220, p: 2, c: 37, f: 7,
      tags: ['奶盖', '纯茶'], nutrition: '纯茶加芝士奶盖，茶解腻奶盖增脂', tip: '奶盖减半，剩下就是快乐茶' },
    { id: 562, name: '冰鲜柠檬水（大杯）', emoji: '🍋', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 600, cal: 180, p: 0, c: 45, f: 0,
      tags: ['柠檬', '大杯'], nutrition: '大杯版柠檬水，糖水底依旧', tip: '大杯糖更多，点半糖更稳' },
    { id: 563, name: '芋圆葡萄（中杯）', emoji: '🍇', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 280, p: 2, c: 66, f: 1,
      tags: ['葡萄', '芋圆'], nutrition: '葡萄果茶配芋圆小料', tip: '果茶加小料，糖度务必减半' },
    { id: 564, name: '蜂蜜柚子茶（中杯）', emoji: '🍯', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 230, p: 0, c: 57, f: 0,
      tags: ['柚子', '热饮'], nutrition: '蜂蜜柚子酱冲调，酸甜热饮', tip: '酱少放一勺直接省 40 kcal' },
    { id: 565, name: '茉莉绿茶（中杯·无糖）', emoji: '🍵', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 5, p: 0, c: 1, f: 0,
      tags: ['纯茶', '无糖'], nutrition: '无糖纯茶，几乎零热量', tip: '替代含糖饮料的最优解，无限续' },
    { id: 566, name: '巧克力奶茶（中杯）', emoji: '🍫', category: 'drink', brand: 'mixue', unit: '杯', measure: 'count', grams: 500, cal: 390, p: 4, c: 82, f: 5,
      tags: ['巧克力', '奶茶'], nutrition: '可可风味奶茶，甜度偏高', tip: '可可控首选少糖，别加波波' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2 保持 2026-09-29 不变） */
BRAND_FOODS_BATCH3.forEach(f => { f.updated = '2026-09-29'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH3);
