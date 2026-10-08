/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 6
 * ----------------------------------------------------------
 *  - Manner 咖啡 / 老乡鸡 / 好利来 / 便利店精选 / 西贝莜面村 各 10 款
 *  - id 667-716，接批次 5（617-666），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 「便利店精选」为 7-11 / 全家 / 罗森通用款合辑（饭团/关东煮/便当）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH6 = [
    /* ================= Manner 咖啡 🫘 ================= */
    { id: 667, name: '冰美式（小杯）', emoji: '☕', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 10, p: 0, c: 2, f: 0,
      tags: ['黑咖啡', '零糖'], nutrition: '浓缩加冰水，几乎零热量', tip: '减脂期最优咖啡选择' },
    { id: 668, name: '热美式（小杯）', emoji: '☕', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 300, cal: 10, p: 0, c: 2, f: 0,
      tags: ['黑咖啡', '热饮'], nutrition: '热美式，几乎零热量', tip: '不加糖不加奶就是 10 大卡' },
    { id: 669, name: '拿铁（小杯）', emoji: '☕', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 150, p: 8, c: 13, f: 7,
      tags: ['牛奶', '经典'], nutrition: '浓缩配全脂牛奶，蛋白与钙的加分项', tip: '咖啡里的中位选择' },
    { id: 670, name: '橘金气泡美式（小杯）', emoji: '🍊', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 80, p: 0, c: 19, f: 0,
      tags: ['气泡', '橘香'], nutrition: '橘子糖浆配气泡美式，清爽带糖', tip: '招牌款，糖浆减半约省 40' },
    { id: 671, name: '燕麦拿铁（小杯）', emoji: '🌾', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 170, p: 5, c: 20, f: 8,
      tags: ['燕麦奶', '植物基'], nutrition: '燕麦奶版拿铁，乳糖不耐友好', tip: '比全脂奶拿铁略高一点点' },
    { id: 672, name: '澳白（小杯）', emoji: '☕', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 300, cal: 130, p: 7, c: 11, f: 6,
      tags: ['双份浓缩', '奶咖'], nutrition: '双份浓缩配少量奶泡，咖啡味浓', tip: '奶量少，比拿铁更「咖啡」' },
    { id: 673, name: '生椰拿铁（小杯）', emoji: '🥥', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 230, p: 4, c: 28, f: 11,
      tags: ['生椰', '厚乳'], nutrition: '椰乳配浓缩，香但脂肪不低', tip: '椰乳是变量，选少糖' },
    { id: 674, name: '冰博客厚乳拿铁（小杯）', emoji: '🥛', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 320, p: 7, c: 36, f: 16,
      tags: ['厚乳', '高蛋白'], nutrition: '提纯厚牛乳，奶香浓热量也浓', tip: '咖啡里的「小甜品」，偶尔喝' },
    { id: 675, name: '桂花拿铁（小杯）', emoji: '🌼', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 190, p: 5, c: 28, f: 6,
      tags: ['桂花', '季节'], nutrition: '桂花糖浆配奶咖，香气足', tip: '糖浆减半更划算' },
    { id: 676, name: '气泡美式（小杯）', emoji: '🫧', category: 'drink', brand: 'manner', unit: '杯', measure: 'count', grams: 350, cal: 15, p: 0, c: 3, f: 0,
      tags: ['气泡', '无糖'], nutrition: '无糖气泡水配浓缩，几乎零卡', tip: '气泡水版美式，解馋不亏' },

    /* ================= 老乡鸡 🍲 ================= */
    { id: 677, name: '肥西老母鸡汤（1份）', emoji: '🍲', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 350, cal: 280, p: 22, c: 6, f: 18,
      tags: ['招牌', '鸡汤'], nutrition: '招牌土鸡汤，蛋白足汤底带鸡油', tip: '喝汤别撇油，或撇油省 60' },
    { id: 678, name: '农家小炒肉（1份）', emoji: '🌶️', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 260, cal: 420, p: 20, c: 15, f: 31,
      tags: ['下饭', '炒肉'], nutrition: '辣椒炒五花肉，油重下饭', tip: '汤汁少拌饭，米饭减半' },
    { id: 679, name: '梅菜扣肉（1份）', emoji: '🍖', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 280, cal: 520, p: 22, c: 26, f: 36,
      tags: ['蒸菜', '五花肉'], nutrition: '梅菜吸油配五花肉，脂肪位高', tip: '两人分一份更合理' },
    { id: 680, name: '番茄炒蛋（1份）', emoji: '🍅', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 250, cal: 250, p: 9, c: 16, f: 17,
      tags: ['家常', '蛋'], nutrition: '番茄配炒蛋，炒蛋吸油是变量', tip: '家常菜里中位选择' },
    { id: 681, name: '蒸蛋羹（1份）', emoji: '🥚', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 180, cal: 140, p: 10, c: 6, f: 9,
      tags: ['蒸蛋', '清淡'], nutrition: '嫩蒸蛋，优质蛋白好吸收', tip: '清淡档首选' },
    { id: 682, name: '小炒黄牛肉（1份）', emoji: '🐂', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 270, cal: 460, p: 26, c: 14, f: 33,
      tags: ['牛肉', '下饭'], nutrition: '牛肉配辣椒爆炒，蛋白高油也不低', tip: '牛肉位里相对优解' },
    { id: 683, name: '清炒时蔬（1份）', emoji: '🥬', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 220, cal: 120, p: 4, c: 14, f: 6,
      tags: ['素菜', '清爽'], nutrition: '时令青菜快炒', tip: '必点的一盘，纤维担当' },
    { id: 684, name: '米饭（1碗）', emoji: '🍚', category: 'home', brand: 'laoxiangji', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '配下饭菜先算上 230' },
    { id: 685, name: '紫菜蛋花汤（1份）', emoji: '🥣', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 300, cal: 60, p: 3, c: 4, f: 3,
      tags: ['汤品', '清淡'], nutrition: '紫菜蛋花，清淡低卡', tip: '配餐汤的正确答案' },
    { id: 686, name: '土豆烧鸡（1份）', emoji: '🥔', category: 'home', brand: 'laoxiangji', unit: '份', measure: 'count', grams: 300, cal: 360, p: 18, c: 40, f: 13,
      tags: ['家常', '鸡肉'], nutrition: '土豆配鸡块，土豆是隐形主食', tip: '有土豆，米饭可减半' },

    /* ================= 好利来 🧁 ================= */
    { id: 687, name: '半熟芝士（1枚）', emoji: '🍰', category: 'bake', brand: 'holiland', unit: '枚', measure: 'count', grams: 45, cal: 160, p: 5, c: 13, f: 9,
      tags: ['招牌', '芝士'], nutrition: '好利来招牌半熟芝士，单枚估算约 160 大卡', tip: '一枚解馋就好，别一盒起步' },
    { id: 688, name: '半熟芝士（1盒5枚）', emoji: '📦', category: 'bake', brand: 'holiland', unit: '盒', measure: 'count', grams: 225, cal: 800, p: 25, c: 66, f: 47,
      tags: ['盒装', '芝士'], nutrition: '整盒 5 枚按单枚累计，约 800 大卡', tip: '一盒≈大半顿饭，分享装' },
    { id: 689, name: '冰山熔岩巧克力（1个）', emoji: '🍫', category: 'bake', brand: 'holiland', unit: '个', measure: 'count', grams: 80, cal: 350, p: 5, c: 40, f: 19,
      tags: ['巧克力', '网红'], nutrition: '熔岩巧克力蛋糕，糖与脂双高', tip: '甜品级，配黑咖啡刚好' },
    { id: 690, name: '空气盒子蛋糕（1个）', emoji: '🍮', category: 'bake', brand: 'holiland', unit: '个', measure: 'count', grams: 90, cal: 280, p: 6, c: 32, f: 13,
      tags: ['慕斯', '盒子'], nutrition: '轻慕斯盒子蛋糕，「空气感」不等于低卡', tip: '看起来小，热量并不少' },
    { id: 691, name: '蜂蜜蛋糕（1块）', emoji: '🍯', category: 'bake', brand: 'holiland', unit: '块', measure: 'count', grams: 100, cal: 330, p: 6, c: 58, f: 8,
      tags: ['经典', '蛋糕'], nutrition: '经典蜂蜜蛋糕，碳水为主', tip: '传统款，配茶不配奶' },
    { id: 692, name: '蛋黄酥（1个）', emoji: '🥮', category: 'bake', brand: 'holiland', unit: '个', measure: 'count', grams: 65, cal: 280, p: 6, c: 34, f: 13,
      tags: ['中式点心', '酥皮'], nutrition: '酥皮裹蛋黄，起酥油不可忽视', tip: '一个封顶，配无糖茶' },
    { id: 693, name: '岩烧乳酪吐司（1片）', emoji: '🍞', category: 'bake', brand: 'holiland', unit: '片', measure: 'count', grams: 90, cal: 300, p: 8, c: 36, f: 14,
      tags: ['吐司', '乳酪'], nutrition: '乳酪酱抹吐司烤制，香浓高碳', tip: '早餐吃它就别再加酱' },
    { id: 694, name: '奥利奥半熟芝士（1枚）', emoji: '🍪', category: 'bake', brand: 'holiland', unit: '枚', measure: 'count', grams: 50, cal: 180, p: 5, c: 17, f: 10,
      tags: ['联名', '芝士'], nutrition: '奥利奥碎配半熟芝士，比原味略高', tip: '原味与联名差 20 大卡' },
    { id: 695, name: '红丝绒芝士蛋糕（1块）', emoji: '🍰', category: 'bake', brand: 'holiland', unit: '块', measure: 'count', grams: 110, cal: 420, p: 7, c: 48, f: 22,
      tags: ['蛋糕', '芝士'], nutrition: '红丝绒配芝士奶酪霜，油脂位高', tip: '两人分一块最明智' },
    { id: 696, name: '手撕面包（1个）', emoji: '🥖', category: 'bake', brand: 'holiland', unit: '个', measure: 'count', grams: 90, cal: 250, p: 6, c: 40, f: 8,
      tags: ['面包', '基础款'], nutrition: '手撕软面包，油糖面组合', tip: '烘焙区相对温和的选择' },

    /* ================= 便利店精选 🏪 ================= */
    { id: 697, name: '金枪鱼饭团（1个）', emoji: '🍙', category: 'breakfast', brand: 'convenience', unit: '个', measure: 'count', grams: 120, cal: 190, p: 8, c: 28, f: 5,
      tags: ['饭团', '早餐'], nutrition: '7-11 / 全家 / 罗森通用款，海苔米饭金枪鱼', tip: '早餐位较优解，配茶叶蛋更顶饿' },
    { id: 698, name: '烤鸡腿饭团（1个）', emoji: '🍙', category: 'breakfast', brand: 'convenience', unit: '个', measure: 'count', grams: 130, cal: 210, p: 9, c: 31, f: 5,
      tags: ['饭团', '鸡肉'], nutrition: '烤鸡腿肉饭团，便利店经典款', tip: '比油炸款饭团友好' },
    { id: 699, name: '鸡蛋三明治（1个）', emoji: '🥪', category: 'breakfast', brand: 'convenience', unit: '个', measure: 'count', grams: 150, cal: 250, p: 11, c: 30, f: 10,
      tags: ['三明治', '蛋'], nutrition: '鸡蛋沙拉三明治，蛋香绵密', tip: '沙拉酱是变量，选全蛋款' },
    { id: 700, name: '照烧鸡便当（1份）', emoji: '🍱', category: 'home', brand: 'convenience', unit: '份', measure: 'count', grams: 380, cal: 520, p: 28, c: 68, f: 16,
      tags: ['便当', '正餐'], nutrition: '照烧鸡排配饭的便利店正餐', tip: '饭吃一半，酱汁不全拌' },
    { id: 701, name: '关东煮白萝卜（1串）', emoji: '🍢', category: 'street', brand: 'convenience', unit: '串', measure: 'count', grams: 90, cal: 45, p: 1, c: 10, f: 1,
      tags: ['关东煮', '清淡'], nutrition: '炖萝卜入味低卡，汤汁偏咸', tip: '关东煮里的低位首选，汤少喝' },
    { id: 702, name: '关东煮魔芋丝（1串）', emoji: '🍢', category: 'street', brand: 'convenience', unit: '串', measure: 'count', grams: 80, cal: 35, p: 1, c: 8, f: 1,
      tags: ['关东煮', '魔芋'], nutrition: '魔芋丝几乎零脂，纤维管饱', tip: '刷剧加餐的最优解' },
    { id: 703, name: '茶叶蛋（1个）', emoji: '🥚', category: 'breakfast', brand: 'convenience', unit: '个', measure: 'count', grams: 55, cal: 75, p: 6, c: 1, f: 5,
      tags: ['蛋', '蛋白'], nutrition: '卤香茶叶蛋，蛋白担当', tip: '随手可得的 6g 蛋白' },
    { id: 704, name: '土豆沙拉（1盒）', emoji: '🥗', category: 'street', brand: 'convenience', unit: '盒', measure: 'count', grams: 150, cal: 180, p: 4, c: 24, f: 7,
      tags: ['沙拉', '土豆'], nutrition: '土豆泥沙拉，看似健康实为淀粉', tip: '「沙拉」里也有隐形主食' },
    { id: 705, name: '金枪鱼沙拉（1盒）', emoji: '🥗', category: 'street', brand: 'convenience', unit: '盒', measure: 'count', grams: 200, cal: 220, p: 16, c: 12, f: 12,
      tags: ['沙拉', '蛋白'], nutrition: '金枪鱼蔬菜沙拉，蛋白位不错', tip: '酱包用一半即可' },
    { id: 706, name: '关东煮鱼豆腐（1串）', emoji: '🍢', category: 'street', brand: 'convenience', unit: '串', measure: 'count', grams: 60, cal: 60, p: 4, c: 6, f: 3,
      tags: ['关东煮', '鱼糜'], nutrition: '鱼糜制品，蛋白与淀粉各半', tip: '两串以内当加餐' },

    /* ================= 西贝莜面村 🌾 ================= */
    { id: 707, name: '西贝面筋（1份）', emoji: '🥗', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 300, cal: 460, p: 14, c: 56, f: 19,
      tags: ['招牌', '凉菜'], nutrition: '招牌凉拌面筋，酸辣开胃但油糖足', tip: '招牌必点，主食相应减量' },
    { id: 708, name: '莜面栲栳栳（1份）', emoji: '🌾', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 280, cal: 380, p: 12, c: 68, f: 6,
      tags: ['莜面', '粗粮'], nutrition: '莜面卷蒸制，粗粮低脂位', tip: '主食位的优质选择（配卤另算）' },
    { id: 709, name: '张爷爷空心挂面（1碗）', emoji: '🍜', category: 'home', brand: 'xibei', unit: '碗', measure: 'count', grams: 450, cal: 550, p: 20, c: 88, f: 11,
      tags: ['招牌', '汤面'], nutrition: '手工空心挂面配汤，一碗顶饱', tip: '当一餐主食，小菜减半' },
    { id: 710, name: '牛大骨（1份）', emoji: '🦴', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 400, cal: 620, p: 45, c: 6, f: 46,
      tags: ['硬菜', '牛肉'], nutrition: '带髓大骨肉，蛋白与脂肪双高', tip: '2-3 人分享，练腿日优选' },
    { id: 711, name: '草原酸奶（1杯）', emoji: '🥛', category: 'drink', brand: 'xibei', unit: '杯', measure: 'count', grams: 180, cal: 150, p: 7, c: 15, f: 6,
      tags: ['招牌', '酸奶'], nutrition: '浓稠草原酸奶，含糖需留意', tip: '比奶盖饮品友好得多' },
    { id: 712, name: '大漠沙棘汁（1杯）', emoji: '🧃', category: 'drink', brand: 'xibei', unit: '杯', measure: 'count', grams: 300, cal: 160, p: 1, c: 39, f: 0,
      tags: ['沙棘', '果汁'], nutrition: '沙棘果汁酸甜，果糖不低', tip: '酸味骗人，其实一杯糖不少' },
    { id: 713, name: '大拌菜（1份）', emoji: '🥬', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 260, cal: 160, p: 4, c: 20, f: 7,
      tags: ['蔬菜', '凉拌'], nutrition: '什锦鲜蔬凉拌，纤维担当', tip: '先吃它垫底，总量自然降' },
    { id: 714, name: '黄米凉糕（1份）', emoji: '🍯', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 200, cal: 320, p: 6, c: 64, f: 5,
      tags: ['点心', '甜品'], nutrition: '黄米糯米凉糕蘸蜜，甜口点心', tip: '当甜品算，别当主食加' },
    { id: 715, name: '猪肉酸菜蒸饺（1份6只）', emoji: '🥟', category: 'home', brand: 'xibei', unit: '份', measure: 'count', grams: 240, cal: 430, p: 16, c: 48, f: 18,
      tags: ['蒸饺', '酸菜'], nutrition: '猪肉酸菜馅蒸饺，六只一份', tip: '六只封顶，配大拌菜刚好' },
    { id: 716, name: '米饭（1碗）', emoji: '🍚', category: 'home', brand: 'xibei', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '点莜面时可省下这碗' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2-5 保持 2026-09-29 不变） */
BRAND_FOODS_BATCH6.forEach(f => { f.updated = '2026-10-08'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH6);
