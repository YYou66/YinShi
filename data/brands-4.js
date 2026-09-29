/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 4
 * ----------------------------------------------------------
 *  - 茶颜悦色 / 奈雪的茶 / 益禾堂 / 必胜客 / 德克士 各 10 款
 *  - id 567-616，接批次 3（527-566），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 锚点来自公开营养数据库：
 *    · 德克士手枪腿 1 份（290g）约 479 大卡
 *    · 必胜客超级至尊披萨 100g 约 259 大卡（P10.7/C24.1/F12.5）
 *    · 必胜客香浓鸡茸汤 100g 约 74 大卡
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH4 = [
    /* ================= 茶颜悦色 🍃 ================= */
    { id: 567, name: '幽兰拿铁（中杯）', emoji: '🧋', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 380, p: 5, c: 52, f: 17,
      tags: ['招牌', '奶油顶'], nutrition: '锡兰红茶配鲜奶，顶着奶油与碧根果碎', tip: '招牌必点，去掉奶油顶约省 80 kcal' },
    { id: 568, name: '声声乌龙（中杯）', emoji: '🍵', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 280, p: 4, c: 52, f: 6,
      tags: ['乌龙', '轻乳'], nutrition: '乌龙茶底配鲜奶，茶香压住甜腻', tip: '三分糖起步，风味不减' },
    { id: 569, name: '桂花弄（中杯）', emoji: '🌼', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 260, p: 3, c: 51, f: 5,
      tags: ['桂花', '清新'], nutrition: '桂花香轻乳茶，清甜路线', tip: '茶颜里负担较轻的一档' },
    { id: 570, name: '筝筝纸鸢（中杯）', emoji: '🪁', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 4, c: 58, f: 6,
      tags: ['雨前龙井', '招牌'], nutrition: '龙井茶底配奶，豆香明显', tip: '选少糖，配咸口小食更妙' },
    { id: 571, name: '人间烟火（中杯）', emoji: '🎆', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 290, p: 4, c: 55, f: 6,
      tags: ['大红袍', '浓香'], nutrition: '大红袍茶底配奶，焙火味足', tip: '茶底浓，甜度可再压低' },
    { id: 572, name: '栀晓（中杯）', emoji: '🌸', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 240, p: 3, c: 46, f: 5,
      tags: ['栀子', '花香'], nutrition: '栀子花香轻乳茶', tip: '花香系里低卡选择' },
    { id: 573, name: '凤栖绿桂（中杯）', emoji: '🌿', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 220, p: 2, c: 44, f: 4,
      tags: ['桂花', '绿茶'], nutrition: '绿茶配桂花的清爽组合', tip: '本系列低位，解渴友好' },
    { id: 574, name: '烟火易冷（中杯）', emoji: '🎇', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 310, p: 4, c: 60, f: 6,
      tags: ['香栗', '秋冬'], nutrition: '栗子风味轻乳茶，绵甜偏高碳', tip: '秋冬限定感，偶尔喝' },
    { id: 575, name: '蔓越阑珊（中杯）', emoji: '🍓', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 500, cal: 340, p: 4, c: 63, f: 8,
      tags: ['蔓越莓', '酸甜'], nutrition: '蔓越莓果酱配奶，酸甜挂', tip: '果酱是糖分主力，少糖为宜' },
    { id: 576, name: '桂花乌龙（热·无糖）', emoji: '🫖', category: 'drink', brand: 'chayan', unit: '杯', measure: 'count', grams: 400, cal: 10, p: 0, c: 2, f: 0,
      tags: ['纯茶', '无糖'], nutrition: '无糖热纯茶，几乎零热量', tip: '冬天的最优解，无限续' },

    /* ================= 奈雪的茶 🍓 ================= */
    { id: 577, name: '霸气芝士草莓（中杯）', emoji: '🍓', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 430, p: 5, c: 60, f: 19,
      tags: ['招牌', '芝士顶'], nutrition: '草莓果肉冰沙配厚厚芝士奶盖', tip: '去芝士顶直接降约 130 kcal' },
    { id: 578, name: '霸气橙子（中杯）', emoji: '🍊', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 290, p: 2, c: 68, f: 1,
      tags: ['鲜橙', '果茶'], nutrition: '整颗鲜橙切片配茶底，清爽果茶', tip: '果茶糖不低，点半糖' },
    { id: 579, name: '芝芝莓莓（中杯）', emoji: '🍓', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 410, p: 5, c: 59, f: 17,
      tags: ['莓果', '芝士顶'], nutrition: '草莓冰沙配芝士奶盖', tip: '和芝芝系列一样，芝士是变量' },
    { id: 580, name: '霸气西柚（中杯）', emoji: '🍇', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 260, p: 2, c: 61, f: 1,
      tags: ['西柚', '微苦'], nutrition: '西柚果粒配茶底，微苦回甘', tip: '霸气系列里低卡位' },
    { id: 581, name: '香水柠檬茶（中杯）', emoji: '🍋', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 220, p: 0, c: 55, f: 0,
      tags: ['柠檬', '红茶'], nutrition: '香水柠檬捶打配红茶，酸爽解腻', tip: '半糖即可，清爽度不减' },
    { id: 582, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 4, c: 63, f: 7,
      tags: ['芒果', '西柚'], nutrition: '芒果椰奶配西柚粒西米', tip: '经典款，糖度可减半' },
    { id: 583, name: '霸气油柑（中杯）', emoji: '🍏', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 180, p: 1, c: 44, f: 0,
      tags: ['油柑', '回甘'], nutrition: '网红油柑茶，微涩回甘', tip: '几乎无脂，糖度低负担小' },
    { id: 584, name: '草莓魔法棒（1个）', emoji: '🍓', category: 'bake', brand: 'nayuki', unit: '个', measure: 'count', grams: 150, cal: 350, p: 7, c: 58, f: 10,
      tags: ['软欧包', '草莓'], nutrition: '奈雪招牌软欧包，草莓巧克力装饰', tip: '一人食建议分半，配茶刚好' },
    { id: 585, name: '芝士奶酪软欧包（1个）', emoji: '🧀', category: 'bake', brand: 'nayuki', unit: '个', measure: 'count', grams: 130, cal: 380, p: 10, c: 51, f: 15,
      tags: ['软欧包', '芝士'], nutrition: '软欧包夹芝士奶酪馅，香浓高碳', tip: '当主食吃，别再配饮料' },
    { id: 586, name: '鸭屎香柠檬茶（中杯）', emoji: '🍋', category: 'drink', brand: 'nayuki', unit: '杯', measure: 'count', grams: 500, cal: 200, p: 0, c: 50, f: 0,
      tags: ['鸭屎香', '柠檬'], nutrition: '凤凰单丛茶底配柠檬，香气突出', tip: '茶底解腻，少糖更佳' },

    /* ================= 益禾堂 🥛 ================= */
    { id: 587, name: '益禾烤奶（中杯）', emoji: '🥛', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 400, p: 5, c: 77, f: 8,
      tags: ['招牌', '烤奶'], nutrition: '招牌烤奶，焦糖奶香偏高碳', tip: '当家款，三分糖能省 60 kcal' },
    { id: 588, name: '益禾烤奶（大杯）', emoji: '🥛', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 600, cal: 500, p: 6, c: 96, f: 10,
      tags: ['招牌', '大杯'], nutrition: '大杯版烤奶，一杯顶半顿饭', tip: '控卡期选中杯就够' },
    { id: 589, name: '蜂蜜柚子（中杯）', emoji: '🍯', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 250, p: 0, c: 62, f: 0,
      tags: ['柚子', '酸甜'], nutrition: '蜂蜜柚子酱冲调，酸甜热饮', tip: '酱减半省 40 kcal' },
    { id: 590, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 310, p: 3, c: 61, f: 6,
      tags: ['芒果', '西米'], nutrition: '芒果椰奶配西米的平价版', tip: '解馋够用，选少糖' },
    { id: 591, name: '草莓奶冻（中杯）', emoji: '🍓', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 340, p: 5, c: 64, f: 7,
      tags: ['草莓', '奶冻'], nutrition: '草莓果酱配奶冻小料', tip: '小料多糖也多，可减料' },
    { id: 592, name: '四季春奶茶（中杯）', emoji: '🍵', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 320, p: 3, c: 66, f: 5,
      tags: ['四季春', '奶茶'], nutrition: '清香四季春茶底配奶', tip: '茶感足，少糖不心疼' },
    { id: 593, name: '珍珠奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 350, p: 3, c: 76, f: 4,
      tags: ['珍珠', '经典'], nutrition: '经典珍珠奶茶', tip: '珍珠减半立省 50 kcal' },
    { id: 594, name: '柠檬绿茶（中杯）', emoji: '🍋', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 180, p: 0, c: 45, f: 0,
      tags: ['柠檬', '绿茶'], nutrition: '柠檬配绿茶，清爽路线', tip: '本店低卡位，半糖更好' },
    { id: 595, name: '燕麦烤奶（中杯）', emoji: '🌾', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 420, p: 8, c: 77, f: 9,
      tags: ['燕麦', '烤奶'], nutrition: '烤奶加燕麦谷物，饱腹感强', tip: '可代加餐，别配甜点' },
    { id: 596, name: '原味奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'yihetang', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 3, c: 70, f: 4,
      tags: ['原味', '基础款'], nutrition: '最基础的原味奶茶', tip: '基础款里选三分糖最划算' },

    /* ================= 必胜客 🫓 ================= */
    { id: 597, name: '超级至尊披萨（单片）', emoji: '🍕', category: 'home', brand: 'ph', unit: '片', measure: 'count', grams: 120, cal: 310, p: 13, c: 30, f: 15,
      tags: ['招牌', '披萨'], nutrition: '公开营养数据：超级至尊披萨 100g 约 259 大卡', tip: '2-3 片加沙拉就是一餐' },
    { id: 598, name: '超级至尊披萨（整张·9寸8片）', emoji: '🍕', category: 'home', brand: 'ph', unit: '张', measure: 'count', grams: 960, cal: 2480, p: 104, c: 240, f: 120,
      tags: ['分享装', '披萨'], nutrition: '整张按单片 ×8 估算（100g 约 259 大卡）', tip: '分享场景记录用，人均 2 片约 620' },
    { id: 599, name: '夏威夷风情披萨（单片）', emoji: '🍍', category: 'home', brand: 'ph', unit: '片', measure: 'count', grams: 120, cal: 290, p: 12, c: 32, f: 11,
      tags: ['火腿', '菠萝'], nutrition: '火腿菠萝经典组合，甜咸口', tip: '水果多油相对少，但仍按片计' },
    { id: 600, name: '芝心拉丝披萨（单片）', emoji: '🧀', category: 'home', brand: 'ph', unit: '片', measure: 'count', grams: 130, cal: 350, p: 13, c: 32, f: 18,
      tags: ['芝心', '加倍芝士'], nutrition: '饼边夹芝士，脂肪位最高', tip: '芝士是变量，减脂期选普通饼底' },
    { id: 601, name: '浓情香鸡翼（5只）', emoji: '🍗', category: 'home', brand: 'ph', unit: '份', measure: 'count', grams: 250, cal: 430, p: 28, c: 10, f: 31,
      tags: ['烤翅', '蛋白'], nutrition: '腌烤鸡翅，蛋白足但皮脂高', tip: '去皮可减约 90 kcal' },
    { id: 602, name: '铁板意式肉酱面', emoji: '🍝', category: 'home', brand: 'ph', unit: '份', measure: 'count', grams: 320, cal: 500, p: 16, c: 66, f: 18,
      tags: ['意面', '肉酱'], nutrition: '肉酱意面配铁板，酱汁含油糖', tip: '酱少要一半，或与人分食' },
    { id: 603, name: '焗烤海鲜饭', emoji: '🦐', category: 'home', brand: 'ph', unit: '份', measure: 'count', grams: 300, cal: 470, p: 18, c: 54, f: 19,
      tags: ['焗饭', '芝士'], nutrition: '芝士焗饭，拉丝底下是油与碳', tip: '趁热吃两口就停，别刮底' },
    { id: 604, name: '香浓鸡茸汤（1份）', emoji: '🥣', category: 'home', brand: 'ph', unit: '份', measure: 'count', grams: 250, cal: 190, p: 8, c: 15, f: 10,
      tags: ['汤品', '奶油'], nutrition: '公开营养数据：鸡茸汤 100g 约 74 大卡', tip: '奶油底汤，比浓汤宝系列友好' },
    { id: 605, name: '香草凤尾虾（1份）', emoji: '🍤', category: 'home', brand: 'ph', unit: '份', measure: 'count', grams: 150, cal: 320, p: 16, c: 21, f: 19,
      tags: ['虾', '油炸'], nutrition: '裹粉炸虾配香草，壳薄吸油', tip: '蘸酱减半，或挤柠檬汁' },
    { id: 606, name: '抹茶雪域蛋糕（1块）', emoji: '🍰', category: 'bake', brand: 'ph', unit: '块', measure: 'count', grams: 130, cal: 450, p: 8, c: 60, f: 19,
      tags: ['甜品', '抹茶'], nutrition: '必胜客经典抹茶雪域，奶油蛋糕体', tip: '两人分一块最明智' },

    /* ================= 德克士 🐔 ================= */
    { id: 607, name: '脆皮手枪腿（1份）', emoji: '🍗', category: 'home', brand: 'dicos', unit: '份', measure: 'count', grams: 290, cal: 480, p: 30, c: 13, f: 34,
      tags: ['招牌', '炸鸡'], nutrition: '公开营养数据：手枪腿 1 份（290g）约 479 大卡，脂肪占 64%', tip: '招牌必点，去皮能减约 120 kcal' },
    { id: 608, name: '脆皮炸鸡（1块）', emoji: '🍗', category: 'street', brand: 'dicos', unit: '块', measure: 'count', grams: 130, cal: 320, p: 24, c: 14, f: 19,
      tags: ['炸鸡', '脆皮'], nutrition: '招牌脆皮炸鸡，皮脂是热量主力', tip: '去皮只吃肉，直接省一档' },
    { id: 609, name: '鸡米花（中份）', emoji: '🍿', category: 'street', brand: 'dicos', unit: '份', measure: 'count', grams: 140, cal: 360, p: 18, c: 29, f: 19,
      tags: ['小食', '油炸'], nutrition: '鸡粒裹粉油炸，一口一个最易超量', tip: '中份起步，别点大份' },
    { id: 610, name: '菠萝鸡腿堡', emoji: '🍔', category: 'home', brand: 'dicos', unit: '个', measure: 'count', grams: 240, cal: 430, p: 22, c: 49, f: 16,
      tags: ['汉堡', '菠萝'], nutrition: '鸡腿排配菠萝片，酸甜解腻', tip: '单个汉堡+无糖饮料是快餐位较优解' },
    { id: 611, name: '照烧鸡腿堡', emoji: '🍔', category: 'home', brand: 'dicos', unit: '个', measure: 'count', grams: 240, cal: 420, p: 24, c: 49, f: 14,
      tags: ['汉堡', '照烧'], nutrition: '照烧酱鸡腿排，咸甜口', tip: '酱汁偏甜，酱包放一半' },
    { id: 612, name: '黄金咖喱鸡饭', emoji: '🍛', category: 'home', brand: 'dicos', unit: '份', measure: 'count', grams: 380, cal: 550, p: 26, c: 73, f: 17,
      tags: ['饭类', '咖喱'], nutrition: '咖喱鸡排配饭，碳水位高', tip: '饭减半或与人分，酱不拌完' },
    { id: 613, name: '薯条（中份）', emoji: '🍟', category: 'street', brand: 'dicos', unit: '份', measure: 'count', grams: 110, cal: 320, p: 4, c: 42, f: 15,
      tags: ['配餐', '油炸'], nutrition: '炸薯条，盐与油的组合', tip: '与汉堡二选一更划算' },
    { id: 614, name: '香酥鸡柳（1份）', emoji: '🥢', category: 'street', brand: 'dicos', unit: '份', measure: 'count', grams: 100, cal: 300, p: 15, c: 26, f: 15,
      tags: ['小食', '鸡柳'], nutrition: '裹粉鸡柳，配酱另算', tip: '番茄酱比沙拉酱友好' },
    { id: 615, name: '葡式蛋挞（1个）', emoji: '🥧', category: 'bake', brand: 'dicos', unit: '个', measure: 'count', grams: 70, cal: 220, p: 4, c: 26, f: 11,
      tags: ['甜品', '蛋挞'], nutrition: '酥皮蛋挞，奶油蛋香', tip: '一个解馋就好，配无糖茶' },
    { id: 616, name: '可乐（中杯）', emoji: '🥤', category: 'drink', brand: 'dicos', unit: '杯', measure: 'count', grams: 400, cal: 150, p: 0, c: 38, f: 0,
      tags: ['含糖饮料', '气泡'], nutrition: '中杯含糖可乐，纯添加糖', tip: '换无糖可乐或柠檬水立省 150' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2/3 保持 2026-09-29 不变） */
BRAND_FOODS_BATCH4.forEach(f => { f.updated = '2026-09-29'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH4);
