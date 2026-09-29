/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 2
 * ----------------------------------------------------------
 *  - 麦当劳 / 肯德基 / 星巴克 / 古茗 / 霸王茶姬，各 10 款
 *  - id 477-526，接批次 1（417-476），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 霸王茶姬「中杯·不另加糖」锚点来自品牌官方 CNAS/CMA 检测
 *    公开值（伯牙绝弦 130 / 花田乌龙 118 / 桂馥兰香 123 kcal）
 *  - 古茗数值参考品牌系列公开实测整理
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 *  - 更新日期按批次写入（详情页展示「更新于 YYYY-MM-DD」）
 * ========================================================== */

const BRAND_FOODS_BATCH2 = [
    /* ================= 麦当劳 🍟 ================= */
    { id: 477, name: '巨无霸', emoji: '🍔', category: 'home', brand: 'mcd', unit: '个', measure: 'count', grams: 219, cal: 550, p: 25, c: 45, f: 30,
      tags: ['牛肉汉堡', '招牌'], nutrition: '双层牛肉饼加酸黄瓜酱，经典美式', tip: '一餐额度直接拉满，配水别配可乐' },
    { id: 478, name: '麦辣鸡腿堡', emoji: '🍔', category: 'home', brand: 'mcd', unit: '个', measure: 'count', grams: 240, cal: 530, p: 24, c: 50, f: 26,
      tags: ['鸡腿堡', '香辣'], nutrition: '油炸鸡腿排加辣酱，酥脆下饭', tip: '辣酱换掉能少约 50 kcal' },
    { id: 479, name: '麦香鱼堡', emoji: '🍔', category: 'home', brand: 'mcd', unit: '个', measure: 'count', grams: 135, cal: 340, p: 15, c: 32, f: 17,
      tags: ['鱼堡', '清淡'], nutrition: '炸鳕鱼排配芝士，个头小', tip: '想解馋选它，比巨无霸省一半' },
    { id: 480, name: '板烧鸡腿堡', emoji: '🍔', category: 'home', brand: 'mcd', unit: '个', measure: 'count', grams: 220, cal: 410, p: 26, c: 44, f: 14,
      tags: ['鸡腿堡', '非油炸'], nutrition: '铁板煎烤鸡腿肉，脂肪相对低', tip: '汉堡里的稳健之选，去皮酱更优' },
    { id: 481, name: '薯条（中份）', emoji: '🍟', category: 'street', brand: 'mcd', unit: '份', measure: 'count', grams: 110, cal: 340, p: 4, c: 44, f: 16,
      tags: ['薯条', '油炸'], nutrition: '现炸土豆条，盐分不低', tip: '别蘸番茄酱，中份就够' },
    { id: 482, name: '麦乐鸡（5块）', emoji: '🍗', category: 'street', brand: 'mcd', unit: '份', measure: 'count', grams: 76, cal: 240, p: 13, c: 16, f: 13,
      tags: ['鸡块', '油炸'], nutrition: '鸡蓉块裹粉油炸，蘸酱另算', tip: '蜂蜜芥末比番茄酱热量高，注意' },
    { id: 483, name: '香烤鸡翅（2块）', emoji: '🍗', category: 'street', brand: 'mcd', unit: '份', measure: 'count', grams: 90, cal: 190, p: 14, c: 12, f: 10,
      tags: ['鸡翅', '烤制'], nutrition: '烤制入味，比油炸版清爽', tip: '加餐解馋刚好，别超过 2 块' },
    { id: 484, name: '猪柳蛋麦满分', emoji: '🥪', category: 'breakfast', brand: 'mcd', unit: '个', measure: 'count', grams: 140, cal: 230, p: 13, c: 24, f: 10,
      tags: ['早餐', '麦满分'], nutrition: '英式马夹蛋加猪柳，份量克制', tip: '早餐好搭档，搭黑咖更稳' },
    { id: 485, name: '肉桂苹果派', emoji: '🥧', category: 'bake', brand: 'mcd', unit: '个', measure: 'count', grams: 93, cal: 250, p: 3, c: 36, f: 10,
      tags: ['派', '甜品'], nutrition: '油酥皮包苹果馅，烫口甜香', tip: '下午茶解馋一个就好' },
    { id: 486, name: '可乐（中杯）', emoji: '🥤', category: 'drink', brand: 'mcd', unit: '杯', measure: 'count', grams: 400, cal: 150, p: 0, c: 38, f: 0,
      tags: ['可乐', '汽水'], nutrition: '中杯含糖碳酸饮料', tip: '换无糖可乐或水，套餐立省 150' },

    /* ================= 肯德基 🍗 ================= */
    { id: 487, name: '香辣鸡腿堡', emoji: '🍔', category: 'home', brand: 'kfc', unit: '个', measure: 'count', grams: 240, cal: 530, p: 24, c: 50, f: 26,
      tags: ['鸡腿堡', '招牌'], nutrition: '整块鸡腿排现炸，辣味开胃', tip: '招牌但脂肪高，别配薯条大份' },
    { id: 488, name: '老北京鸡肉卷', emoji: '🌯', category: 'home', brand: 'kfc', unit: '个', measure: 'count', grams: 210, cal: 400, p: 20, c: 42, f: 16,
      tags: ['鸡肉卷', '卷饼'], nutrition: '鸡肉条配甜面酱葱丝', tip: '酱是热量暗点，可要求少酱' },
    { id: 489, name: '新奥尔良烤鸡腿堡', emoji: '🍔', category: 'home', brand: 'kfc', unit: '个', measure: 'count', grams: 225, cal: 420, p: 27, c: 45, f: 14,
      tags: ['鸡腿堡', '烤制'], nutrition: '奥尔良腌制烤腿肉，不油炸', tip: '同价位里蛋白脂肪更友好' },
    { id: 490, name: '葡式蛋挞（1个）', emoji: '🥧', category: 'bake', brand: 'kfc', unit: '个', measure: 'count', grams: 70, cal: 230, p: 5, c: 24, f: 13,
      tags: ['蛋挞', '招牌'], nutrition: '酥皮蛋奶馅，油脂糖双高', tip: '热的时候吃一个，别一次一盒' },
    { id: 491, name: '上校鸡块（5块）', emoji: '🍗', category: 'street', brand: 'kfc', unit: '份', measure: 'count', grams: 85, cal: 300, p: 17, c: 20, f: 16,
      tags: ['鸡块', '油炸'], nutrition: '裹粉鸡块配胡椒香', tip: '分享装先分一半，控量关键' },
    { id: 492, name: '薯条（中份）', emoji: '🍟', category: 'street', brand: 'kfc', unit: '份', measure: 'count', grams: 110, cal: 340, p: 4, c: 44, f: 16,
      tags: ['薯条', '油炸'], nutrition: '粗切炸薯条，撒盐调味', tip: '中份已经不小，别升级大份' },
    { id: 493, name: '鸡米花（中份）', emoji: '🍿', category: 'street', brand: 'kfc', unit: '份', measure: 'count', grams: 140, cal: 360, p: 18, c: 28, f: 19,
      tags: ['鸡米花', '油炸'], nutrition: '小粒鸡米油炸，越吃越香', tip: '无意识刷剧杀手，倒一半出来吃' },
    { id: 494, name: '原味鸡（1块）', emoji: '🍗', category: 'street', brand: 'kfc', unit: '块', measure: 'count', grams: 120, cal: 300, p: 22, c: 12, f: 18,
      tags: ['炸鸡', '招牌'], nutrition: '秘制腌制整块带骨鸡', tip: '去皮吃能减约 60 kcal' },
    { id: 495, name: '香辣鸡翅（2块）', emoji: '🍗', category: 'street', brand: 'kfc', unit: '份', measure: 'count', grams: 95, cal: 200, p: 15, c: 12, f: 11,
      tags: ['鸡翅', '香辣'], nutrition: '经典辣烤翅中，香而不柴', tip: '配餐小食，2 块封顶' },
    { id: 496, name: '百事可乐（中杯）', emoji: '🥤', category: 'drink', brand: 'kfc', unit: '杯', measure: 'count', grams: 400, cal: 150, p: 0, c: 38, f: 0,
      tags: ['可乐', '汽水'], nutrition: '中杯含糖碳酸饮料', tip: '换零度可乐或柠檬水更好' },

    /* ================= 星巴克 ☕ ================= */
    { id: 497, name: '拿铁（中杯）', emoji: '☕', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 220, p: 12, c: 18, f: 11,
      tags: ['拿铁', '牛奶'], nutrition: '全脂牛奶打底，奶香浓郁', tip: '换燕麦奶或脱脂奶可再降' },
    { id: 498, name: '美式咖啡（中杯）', emoji: '☕', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 15, p: 1, c: 3, f: 0,
      tags: ['美式', '无糖'], nutrition: '双份浓缩加水，几乎零卡', tip: '减脂期安心喝，别加糖浆' },
    { id: 499, name: '焦糖玛奇朵（中杯）', emoji: '☕', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 250, p: 10, c: 38, f: 7,
      tags: ['焦糖', '含糖'], nutrition: '香草糖浆加焦糖淋面', tip: '甜度可调，选少糖立减不少' },
    { id: 500, name: '抹茶星冰乐（中杯）', emoji: '🥤', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 300, p: 7, c: 52, f: 7,
      tags: ['星冰乐', '抹茶'], nutrition: '抹茶糖浆加奶油顶，冰沙甜饮', tip: '奶油顶去掉直接省 60 kcal' },
    { id: 501, name: '冷萃咖啡（中杯）', emoji: '☕', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 5, p: 0, c: 1, f: 0,
      tags: ['冷萃', '无糖'], nutrition: '低温慢萃，口感顺滑微苦', tip: '控糖首选，夏天冰饮最优解' },
    { id: 502, name: '馥芮白（中杯）', emoji: '☕', category: 'drink', brand: 'starbucks', unit: '杯', measure: 'count', grams: 473, cal: 170, p: 10, c: 14, f: 8,
      tags: ['馥芮白', '浓缩'], nutrition: '金奖浓缩配蒸奶，奶味均衡', tip: '比拿铁更浓，咖啡因敏感注意' },
    { id: 503, name: '黄油可颂', emoji: '🥐', category: 'bake', brand: 'starbucks', unit: '个', measure: 'count', grams: 60, cal: 270, p: 6, c: 30, f: 14,
      tags: ['可颂', '黄油'], nutrition: '层层黄油起酥，香脆掉渣', tip: '配美式刚好，配拿铁就超了' },
    { id: 504, name: '火腿芝士帕尼尼', emoji: '🥪', category: 'breakfast', brand: 'starbucks', unit: '个', measure: 'count', grams: 180, cal: 350, p: 19, c: 35, f: 15,
      tags: ['帕尼尼', '热食'], nutrition: '压烤面包夹火腿芝士', tip: '正餐级轻食，早餐吃很顶饱' },
    { id: 505, name: '蓝莓麦芬', emoji: '🧁', category: 'bake', brand: 'starbucks', unit: '个', measure: 'count', grams: 105, cal: 340, p: 6, c: 44, f: 15,
      tags: ['麦芬', '甜点'], nutrition: '蓝莓果粒混蛋糕体，油糖足', tip: '当主食就别再配甜饮' },
    { id: 506, name: '提子曲奇', emoji: '🍪', category: 'bake', brand: 'starbucks', unit: '块', measure: 'count', grams: 75, cal: 250, p: 3, c: 33, f: 12,
      tags: ['曲奇', '甜点'], nutrition: '黄油曲奇配葡萄干', tip: '掰半块配咖啡，仪式感不减' },

    /* ================= 古茗 🥤 ================= */
    { id: 507, name: '百香果双响炮（中杯）', emoji: '🧋', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 304, p: 2, c: 72, f: 1,
      tags: ['百香果', '珍珠'], nutrition: '百香果配珍珠椰果，酸甜小料多', tip: '小料换仙草可省约 40 kcal' },
    { id: 508, name: '招牌柠檬茶（中杯）', emoji: '🍋', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 274, p: 0, c: 68, f: 0,
      tags: ['柠檬', '果茶'], nutrition: '红茶底配青柠檬，酸爽解腻', tip: '果茶系列的低卡位，选半糖更好' },
    { id: 509, name: '芋泥青稞牛奶（中杯）', emoji: '🥛', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 386, p: 12, c: 60, f: 11,
      tags: ['芋泥', '鲜奶'], nutrition: '芋泥青稞配鲜奶奶霜', tip: '代餐感强，喝它就别配零食' },
    { id: 510, name: '牛奶烧仙草（中杯）', emoji: '🍮', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 379, p: 11, c: 56, f: 13,
      tags: ['烧仙草', '鲜奶'], nutrition: '仙草冻配鲜奶与糖水', tip: '仙草本身低卡，热量在糖水' },
    { id: 511, name: '奶茶烧仙草（中杯）', emoji: '🧋', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 377, p: 6, c: 62, f: 11,
      tags: ['烧仙草', '奶茶'], nutrition: '奶茶汤底配仙草小料', tip: '比鲜奶版蛋白低，选鲜奶更值' },
    { id: 512, name: '牛奶三拼（中杯）', emoji: '🧋', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 402, p: 12, c: 62, f: 12,
      tags: ['三拼', '小料'], nutrition: '珍珠仙草布丁三样小料拉满', tip: '小料越多糖越高，可减半' },
    { id: 513, name: '醇奶可可（中杯）', emoji: '🍫', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 367, p: 9, c: 58, f: 11,
      tags: ['可可', '牛奶'], nutrition: '巧克力粉配纯奶，甜香顺滑', tip: '冬季暖心款，选三分糖' },
    { id: 514, name: '晨露抹茶（中杯）', emoji: '🍵', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 351, p: 8, c: 56, f: 11,
      tags: ['抹茶', '牛奶'], nutrition: '抹茶配纯奶，微苦回甘', tip: '抹茶控首选，少糖风味足' },
    { id: 515, name: '芝士莓莓（中杯）', emoji: '🍓', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 377, p: 6, c: 60, f: 13,
      tags: ['芝士奶盖', '莓果'], nutrition: '草莓冰沙配芝士奶盖', tip: '奶盖去霜直接省约 70 kcal' },
    { id: 516, name: '芝士清茶（中杯）', emoji: '🧀', category: 'drink', brand: 'guming', unit: '杯', measure: 'count', grams: 500, cal: 322, p: 5, c: 46, f: 13,
      tags: ['芝士奶盖', '清茶'], nutrition: '清爽茶汤配厚厚奶盖', tip: '不加奶盖就是 100 kcal 级' },

    /* ================= 霸王茶姬 🍵 ================= */
    { id: 517, name: '伯牙绝弦（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 130, p: 3, c: 18, f: 5,
      tags: ['招牌', '原叶奶茶'], nutrition: '茉莉雪芽配鲜奶，官方检测中杯不另加糖约 130 kcal', tip: '茶饮界低卡标杆，控糖闭眼点' },
    { id: 518, name: '花田乌龙（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 118, p: 3, c: 15, f: 5,
      tags: ['乌龙', '低糖'], nutrition: '蜜桃乌龙配鲜奶，官方检测约 118 kcal', tip: '果香明显不加糖也好喝' },
    { id: 519, name: '桂馥兰香（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 123, p: 3, c: 16, f: 5,
      tags: ['桂花', '低糖'], nutrition: '桂花拼配乌龙配鲜奶，官方检测约 123 kcal', tip: '秋天应季款，低负担' },
    { id: 520, name: '青沫观音（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 115, p: 3, c: 15, f: 5,
      tags: ['观音茶', '低糖'], nutrition: '铁观音茶底配鲜奶，官方首批送检款', tip: '茶味重奶味轻，清爽型' },
    { id: 521, name: '寻香山茶（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 120, p: 3, c: 16, f: 5,
      tags: ['山茶', '低糖'], nutrition: '山茶花香拼配茶配鲜奶', tip: '花香系代表，半糖以内即可' },
    { id: 522, name: '去云南·玫瑰普洱（中杯·不另加糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 125, p: 3, c: 17, f: 5,
      tags: ['普洱', '花香'], nutrition: '玫瑰与普洱拼配配鲜奶', tip: '醇厚挂的，不加糖不苦涩' },
    { id: 523, name: '雪落牡丹（中杯·少糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 145, p: 3, c: 22, f: 5,
      tags: ['牡丹', '少糖'], nutrition: '牡丹香拼配绿茶配鲜奶，少糖约 145 kcal', tip: '少糖已是平衡点，别点标准糖' },
    { id: 524, name: '万里木兰（中杯·少糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 470, cal: 140, p: 3, c: 21, f: 5,
      tags: ['红茶', '少糖'], nutrition: '兰香红茶配鲜奶，少糖约 140 kcal', tip: '奶茶感更足的低卡款' },
    { id: 525, name: '伯牙绝弦（大杯·标准糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 700, cal: 230, p: 5, c: 36, f: 7,
      tags: ['招牌', '标准糖'], nutrition: '大杯加标准糖，约是中杯不加糖的 1.8 倍', tip: '点大杯记得说「不另加糖」' },
    { id: 526, name: '桂馥兰香（大杯·标准糖）', emoji: '🍵', category: 'drink', brand: 'chagee', unit: '杯', measure: 'count', grams: 700, cal: 215, p: 5, c: 34, f: 7,
      tags: ['桂花', '标准糖'], nutrition: '大杯标准糖版本', tip: '和朋友分享大杯比独饮更稳' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26 不变） */
BRAND_FOODS_BATCH2.forEach(f => { f.updated = '2026-09-29'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH2);
