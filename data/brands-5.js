/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 5
 * ----------------------------------------------------------
 *  - 书亦烧仙草 / 甜啦啦 / 一点点 / 塔斯汀 / 华莱士 各 10 款
 *  - id 617-666，接批次 4（567-616），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 锚点来自公开资料：
 *    · 塔斯汀香辣鸡腿中国汉堡 1 份（201g）约 426 大卡（公开营养库）
 *    · 塔斯汀堡名以官网产品页为准（北京烤鸭/藤椒鸡腿/板烧凤梨/培根煎蛋）
 *    · 华莱士手扒鸡约 2200 大卡/千克（本条按 500g 计）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH5 = [
    /* ================= 书亦烧仙草 🍮 ================= */
    { id: 617, name: '书亦烧仙草（大杯）', emoji: '🧋', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 600, cal: 460, p: 7, c: 92, f: 7,
      tags: ['招牌', '烧仙草'], nutrition: '招牌烧仙草，半杯都是料（仙草/红豆/花生/葡萄干）', tip: '料多糖多，选三分糖更稳' },
    { id: 618, name: '葡萄芋圆冻冻（中杯）', emoji: '🍇', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 380, p: 4, c: 82, f: 4,
      tags: ['葡萄', '芋圆'], nutrition: '葡萄果汁配芋圆与果冻，双小料高碳', tip: '小料只留一样，省 60 kcal' },
    { id: 619, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 320, p: 4, c: 62, f: 6,
      tags: ['芒果', '西米'], nutrition: '芒果椰奶配西米柚子粒', tip: '少糖风味不减' },
    { id: 620, name: '生打椰奶茶（中杯）', emoji: '🥥', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 350, p: 6, c: 63, f: 8,
      tags: ['生椰', '奶茶'], nutrition: '生打椰乳配奶茶底，椰香浓郁', tip: '椰乳带脂，选少糖平衡' },
    { id: 621, name: '柠檬冰茶（中杯）', emoji: '🍋', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 200, p: 0, c: 50, f: 0,
      tags: ['柠檬', '冰茶'], nutrition: '柠檬配红茶冰爽路线', tip: '半糖约省 40 kcal' },
    { id: 622, name: '茉莉奶绿（中杯）', emoji: '🍵', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 4, c: 60, f: 5,
      tags: ['奶绿', '茉莉'], nutrition: '茉莉茶底配奶，清香顺滑', tip: '三分糖是平衡点' },
    { id: 623, name: '布丁奶茶（中杯）', emoji: '🍮', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 370, p: 5, c: 72, f: 7,
      tags: ['布丁', '小料'], nutrition: '嫩布丁打底的奶茶，甜度偏高', tip: '布丁含糖，糖度再降一档' },
    { id: 624, name: '红豆奶茶（中杯）', emoji: '🫘', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 360, p: 6, c: 73, f: 5,
      tags: ['红豆', '谷物'], nutrition: '蜜红豆配奶茶，饱腹感较强', tip: '可代加餐，别配甜点' },
    { id: 625, name: '百香果绿茶（中杯）', emoji: '🧃', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 230, p: 0, c: 57, f: 0,
      tags: ['百香果', '果茶'], nutrition: '百香果配绿茶，酸甜清爽', tip: '果茶糖不低，点半糖' },
    { id: 626, name: '四季春（中杯·无糖）', emoji: '🍵', category: 'drink', brand: 'shuyi', unit: '杯', measure: 'count', grams: 500, cal: 5, p: 0, c: 1, f: 0,
      tags: ['纯茶', '无糖'], nutrition: '无糖纯茶，几乎零热量', tip: '解腻首选，无限续' },

    /* ================= 甜啦啦 🍉 ================= */
    { id: 627, name: '一桶水果茶（大桶）', emoji: '🪣', category: 'drink', brand: 'tianlala', unit: '桶', measure: 'count', grams: 800, cal: 480, p: 2, c: 115, f: 1,
      tags: ['招牌', '大桶'], nutrition: '招牌大桶水果茶，多人分享款', tip: '一桶≈大半顿饭，建议两人分' },
    { id: 628, name: '杨枝甘露（中杯）', emoji: '🥭', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 300, p: 3, c: 58, f: 6,
      tags: ['芒果', '西米'], nutrition: '芒果椰奶配西米的平价版', tip: '选少糖更划算' },
    { id: 629, name: '金桔柠檬茶（中杯）', emoji: '🍋', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 210, p: 0, c: 52, f: 0,
      tags: ['金桔', '柠檬'], nutrition: '金桔与柠檬的酸甜果茶', tip: '半糖起步' },
    { id: 630, name: '珍珠奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 340, p: 3, c: 73, f: 4,
      tags: ['珍珠', '经典'], nutrition: '经典珍珠奶茶', tip: '珍珠减半立省 50 kcal' },
    { id: 631, name: '椰果奶茶（中杯）', emoji: '🥥', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 3, c: 71, f: 4,
      tags: ['椰果', '小料'], nutrition: '椰果奶茶，椰果比珍珠热量略低', tip: '小料优先选椰果' },
    { id: 632, name: '血糯米奶茶（中杯）', emoji: '🫘', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 380, p: 6, c: 76, f: 6,
      tags: ['血糯米', '谷物'], nutrition: '血糯米打底，糯香高碳', tip: '代餐可以，别配主食' },
    { id: 633, name: '芋圆奶茶（中杯）', emoji: '🍠', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 370, p: 5, c: 74, f: 6,
      tags: ['芋圆', '小料'], nutrition: '手作芋圆配奶茶', tip: '芋圆减半最实际' },
    { id: 634, name: '芝士奶盖绿茶（中杯）', emoji: '🧀', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 260, p: 3, c: 38, f: 11,
      tags: ['奶盖', '绿茶'], nutrition: '绿茶配芝士奶盖，茶清爽盖增脂', tip: '奶盖减半，剩下就是快乐茶' },
    { id: 635, name: '鲜柠绿茶（中杯）', emoji: '🍋', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 170, p: 0, c: 42, f: 0,
      tags: ['柠檬', '绿茶'], nutrition: '鲜柠配绿茶，解腻路线', tip: '本店低卡位' },
    { id: 636, name: '原味绿茶（中杯·无糖）', emoji: '🍵', category: 'drink', brand: 'tianlala', unit: '杯', measure: 'count', grams: 500, cal: 5, p: 0, c: 1, f: 0,
      tags: ['纯茶', '无糖'], nutrition: '无糖纯茶，几乎零热量', tip: '平价解渴最优解' },

    /* ================= 一点点 🫧 ================= */
    { id: 637, name: '波霸奶茶（中杯）', emoji: '🧋', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 380, p: 4, c: 80, f: 5,
      tags: ['招牌', '波霸'], nutrition: '招牌波霸奶茶，大颗黑糖珍珠', tip: '三分糖 + 波霸减半最经典' },
    { id: 638, name: '布丁奶茶（中杯）', emoji: '🍮', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 390, p: 6, c: 76, f: 7,
      tags: ['布丁', '小料'], nutrition: '嫩布丁配奶茶，顺滑高碳', tip: '布丁本身含糖，糖度可再降' },
    { id: 639, name: '红茶玛奇朵（中杯）', emoji: '☕', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 360, p: 4, c: 68, f: 8,
      tags: ['玛奇朵', '奶盖'], nutrition: '红茶配奶盖（玛奇朵系列）', tip: '先喝茶后喝奶盖，或要分装' },
    { id: 640, name: '四季春玛奇朵（中杯）', emoji: '🍵', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 320, p: 3, c: 63, f: 6,
      tags: ['玛奇朵', '四季春'], nutrition: '四季春茶底配奶盖，茶味突出', tip: '玛奇朵系列低卡位' },
    { id: 641, name: '奶绿（中杯）', emoji: '🥛', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 330, p: 4, c: 67, f: 5,
      tags: ['奶绿', '基础款'], nutrition: '顺滑奶绿，茶香奶香平衡', tip: '基础款选三分糖最划算' },
    { id: 642, name: '四季春茶（中杯·无糖）', emoji: '🍵', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 5, p: 0, c: 1, f: 0,
      tags: ['纯茶', '无糖'], nutrition: '无糖四季春，几乎零热量', tip: '网红喝法：无糖 + 少冰' },
    { id: 643, name: '阿华田（中杯）', emoji: '🍫', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 400, p: 6, c: 76, f: 8,
      tags: ['可可', '联名'], nutrition: '阿华田可可饮品，麦芽可可香', tip: '甜度偏高，少糖起步' },
    { id: 644, name: '冰淇淋红茶（中杯）', emoji: '🍨', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 420, p: 6, c: 83, f: 7,
      tags: ['冰淇淋', '红茶'], nutrition: '红茶配冰淇淋球，甜品级饮品', tip: '当甜品算，别再配零食' },
    { id: 645, name: '双拼奶茶（波霸+布丁，中杯）', emoji: '🧋', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 450, p: 7, c: 85, f: 9,
      tags: ['双拼', '小料'], nutrition: '波霸加布丁双小料，一份顶两份甜', tip: '双拼虽香，糖度务必减半' },
    { id: 646, name: '椰果奶茶（中杯）', emoji: '🥥', category: 'drink', brand: 'yidiandian', unit: '杯', measure: 'count', grams: 500, cal: 350, p: 3, c: 76, f: 4,
      tags: ['椰果', '小料'], nutrition: '椰果配奶茶的经典组合', tip: '比双拼温和，可作日常款' },

    /* ================= 塔斯汀 🥙 ================= */
    { id: 647, name: '香辣鸡腿中国汉堡', emoji: '🍔', category: 'home', brand: 'tastien', unit: '个', measure: 'count', grams: 200, cal: 430, p: 26, c: 44, f: 17,
      tags: ['招牌', '中国汉堡'], nutrition: '公开营养数据：1 份（201g）约 426 大卡（P26/C44/F17）', tip: '现烤饼皮有韧性，去酱再省约 50' },
    { id: 648, name: '北京烤鸭中国汉堡', emoji: '🦆', category: 'home', brand: 'tastien', unit: '个', measure: 'count', grams: 230, cal: 480, p: 21, c: 56, f: 19,
      tags: ['招牌', '烤鸭'], nutrition: '官网招牌：烤鸭片配甜面酱与葱丝', tip: '酱香浓郁，酱减半更稳' },
    { id: 649, name: '藤椒鸡腿中国汉堡', emoji: '🌶️', category: 'home', brand: 'tastien', unit: '个', measure: 'count', grams: 240, cal: 540, p: 25, c: 58, f: 23,
      tags: ['藤椒', '辣味'], nutrition: '带皮鸡腿排配藤椒酱，公开估算 530-570 大卡', tip: '本期堡类高位，撕皮去酱更友好' },
    { id: 650, name: '板烧凤梨中国汉堡', emoji: '🍍', category: 'home', brand: 'tastien', unit: '个', measure: 'count', grams: 250, cal: 450, p: 24, c: 59, f: 13,
      tags: ['板烧', '凤梨'], nutrition: '板烧鸡腿排配凤梨，实测帖不去酱约 454 大卡', tip: '堡类里脂肪相对低的选择' },
    { id: 651, name: '培根煎蛋中国汉堡', emoji: '🥓', category: 'home', brand: 'tastien', unit: '个', measure: 'count', grams: 240, cal: 510, p: 21, c: 48, f: 26,
      tags: ['培根', '煎蛋'], nutrition: '培根煎蛋组合，评测帖称脂肪占比全场偏高', tip: '偶尔解馋款，配无糖茶' },
    { id: 652, name: '粗薯（中份）', emoji: '🍟', category: 'street', brand: 'tastien', unit: '份', measure: 'count', grams: 160, cal: 400, p: 5, c: 50, f: 20,
      tags: ['薯条', '油炸'], nutrition: '公开估算：中份粗薯（150-170g）约 380-420 大卡', tip: '与汉堡二选一更划算，多人分' },
    { id: 653, name: '塔塔鸡块（1份）', emoji: '🍗', category: 'street', brand: 'tastien', unit: '份', measure: 'count', grams: 100, cal: 260, p: 13, c: 25, f: 12,
      tags: ['鸡块', '小食'], nutrition: '评测实测约 260 大卡', tip: '配番茄酱比沙拉酱友好' },
    { id: 654, name: '香辣鸡翅（2对4只）', emoji: '🍗', category: 'street', brand: 'tastien', unit: '份', measure: 'count', grams: 125, cal: 330, p: 24, c: 8, f: 22,
      tags: ['鸡翅', '油炸'], nutrition: '公开估算：2 对约 320-350 大卡', tip: '带皮油炸，去皮减约 80 kcal' },
    { id: 655, name: '香芋派（1个）', emoji: '🥧', category: 'bake', brand: 'tastien', unit: '个', measure: 'count', grams: 85, cal: 230, p: 4, c: 32, f: 9,
      tags: ['派', '甜品'], nutrition: '公开估算：香芋派约 220-250 大卡（含糖馅+起酥皮）', tip: '添加糖不少，单次不超过 1 个' },
    { id: 656, name: '冰柠可乐（中杯）', emoji: '🥤', category: 'drink', brand: 'tastien', unit: '杯', measure: 'count', grams: 420, cal: 120, p: 0, c: 30, f: 0,
      tags: ['可乐', '气泡'], nutrition: '公开估算：中杯约 110-130 大卡', tip: '换无糖可乐立省 120' },

    /* ================= 华莱士 🐓 ================= */
    { id: 657, name: '蜜汁手扒鸡（1只）', emoji: '🍗', category: 'home', brand: 'wallace', unit: '只', measure: 'count', grams: 500, cal: 1100, p: 55, c: 35, f: 82,
      tags: ['招牌', '整鸡'], nutrition: '公开资料：手扒鸡约 2200 大卡/千克（本条按 500g 计）', tip: '热量天花板，2-3 人分享才合理' },
    { id: 658, name: '香辣鸡腿堡', emoji: '🍔', category: 'home', brand: 'wallace', unit: '个', measure: 'count', grams: 210, cal: 450, p: 21, c: 53, f: 17,
      tags: ['汉堡', '辣味'], nutrition: '炸鸡腿排配沙拉酱生菜', tip: '单堡+无糖饮料是快餐位较优解' },
    { id: 659, name: '新奥尔良烤翅（2只）', emoji: '🍗', category: 'street', brand: 'wallace', unit: '份', measure: 'count', grams: 130, cal: 300, p: 18, c: 14, f: 19,
      tags: ['烤翅', '奥尔良'], nutrition: '公开资料：烤鸡翅约 240 大卡/100g', tip: '去皮减约 70 kcal' },
    { id: 660, name: '鸡米花（中份）', emoji: '🍿', category: 'street', brand: 'wallace', unit: '份', measure: 'count', grams: 130, cal: 330, p: 16, c: 33, f: 15,
      tags: ['小食', '油炸'], nutrition: '鸡粒裹粉油炸，一口一个易超量', tip: '中份起步，别点大份' },
    { id: 661, name: '薯条（中份）', emoji: '🍟', category: 'street', brand: 'wallace', unit: '份', measure: 'count', grams: 110, cal: 320, p: 4, c: 44, f: 14,
      tags: ['薯条', '油炸'], nutrition: '公开资料：薯条约 290 大卡/100g', tip: '与汉堡二选一' },
    { id: 662, name: '鸡肉卷（1个）', emoji: '🌯', category: 'home', brand: 'wallace', unit: '个', measure: 'count', grams: 200, cal: 380, p: 16, c: 45, f: 15,
      tags: ['卷饼', '鸡柳'], nutrition: '饼皮卷鸡柳与酱料，酱是变量', tip: '酱放一半，或挤柠檬汁' },
    { id: 663, name: '鸡块（6块）', emoji: '🍗', category: 'street', brand: 'wallace', unit: '份', measure: 'count', grams: 100, cal: 260, p: 14, c: 26, f: 11,
      tags: ['鸡块', '小食'], nutrition: '公开资料：鸡块约 261 大卡/100g', tip: '6 块封顶，别当主食加量' },
    { id: 664, name: '葡式蛋挞（1个）', emoji: '🥧', category: 'bake', brand: 'wallace', unit: '个', measure: 'count', grams: 70, cal: 210, p: 4, c: 25, f: 10,
      tags: ['甜品', '蛋挞'], nutrition: '酥皮蛋挞，奶油蛋香', tip: '一个解馋就好' },
    { id: 665, name: '可乐（中杯）', emoji: '🥤', category: 'drink', brand: 'wallace', unit: '杯', measure: 'count', grams: 400, cal: 140, p: 0, c: 35, f: 0,
      tags: ['含糖饮料', '气泡'], nutrition: '中杯含糖可乐，纯添加糖', tip: '换无糖可乐立省 140' },
    { id: 666, name: '冰红茶（中杯）', emoji: '🧃', category: 'drink', brand: 'wallace', unit: '杯', measure: 'count', grams: 500, cal: 180, p: 0, c: 45, f: 0,
      tags: ['红茶', '含糖'], nutrition: '瓶装风味冰红茶，含糖不低', tip: '看似健康，其实一杯糖不少' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2/3/4 保持 2026-09-29 不变） */
BRAND_FOODS_BATCH5.forEach(f => { f.updated = '2026-09-29'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH5);
