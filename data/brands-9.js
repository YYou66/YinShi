/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 9
 * ----------------------------------------------------------
 *  - 兰州牛肉面 / DQ 冰淇淋 / 味千拉面 / 太二酸菜鱼 / 汉拿山 各 10 款
 *  - id 817-866，接批次 8（767-816），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 「兰州牛肉面」为清真面馆通用款合辑（西北风味，非单一品牌）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH9 = [
    /* ================= 兰州牛肉面 🐂 ================= */
    { id: 817, name: '牛肉面（1碗·细面）', emoji: '🍜', category: 'home', brand: 'lanzhou', unit: '碗', measure: 'count', grams: 500, cal: 520, p: 24, c: 77, f: 13,
      tags: ['招牌', '汤面'], nutrition: '一清二白三红四绿，一碗面半碗汤', tip: '汤底钠高，喝两口就好' },
    { id: 818, name: '牛肉面（1碗·大碗）', emoji: '🍜', category: 'home', brand: 'lanzhou', unit: '碗', measure: 'count', grams: 620, cal: 680, p: 30, c: 106, f: 15,
      tags: ['大碗', '汤面'], nutrition: '大碗版，面量约多一半', tip: '大碗是男生量，女生细面小碗就够' },
    { id: 819, name: '炒面片（1碗）', emoji: '🥘', category: 'home', brand: 'lanzhou', unit: '碗', measure: 'count', grams: 480, cal: 560, p: 20, c: 84, f: 16,
      tags: ['炒制', '面食'], nutrition: '油炒面片，比汤面多一层油', tip: '锅气足油也足，配菜吃面减半' },
    { id: 820, name: '凉拌牛肉（1份）', emoji: '🥩', category: 'home', brand: 'lanzhou', unit: '份', measure: 'count', grams: 130, cal: 260, p: 30, c: 5, f: 14,
      tags: ['凉菜', '高蛋白'], nutrition: '卤牛肉凉拌，蛋白位扎实', tip: '面馆里的最优解，先来一碟' },
    { id: 821, name: '手抓羊肉（1份）', emoji: '🍖', category: 'home', brand: 'lanzhou', unit: '份', measure: 'count', grams: 180, cal: 420, p: 30, c: 4, f: 32,
      tags: ['羊肉', '硬菜'], nutrition: '带肥手抓羊排，脂肪位高', tip: '练腿日优选，配椒盐解腻' },
    { id: 822, name: '羊肉串（1串）', emoji: '🍢', category: 'street', brand: 'lanzhou', unit: '串', measure: 'count', grams: 55, cal: 130, p: 11, c: 3, f: 9,
      tags: ['烤串', '羊肉'], nutrition: '肥瘦相间烤串，一串一口香', tip: '10 串起步的坑，先数好 5 串' },
    { id: 823, name: '酸辣土豆丝（1份）', emoji: '🥔', category: 'home', brand: 'lanzhou', unit: '份', measure: 'count', grams: 200, cal: 160, p: 3, c: 24, f: 6,
      tags: ['素菜', '下饭'], nutrition: '土豆丝是隐形主食', tip: '吃它就少吃两口面' },
    { id: 824, name: '甜醅子（1碗）', emoji: '🥣', category: 'street', brand: 'lanzhou', unit: '碗', measure: 'count', grams: 200, cal: 190, p: 4, c: 40, f: 2,
      tags: ['西北', '甜食'], nutrition: '燕麦发酵甜醅，清真经典甜食', tip: '发酵清甜不腻，当甜品算' },
    { id: 825, name: '三泡台（1杯）', emoji: '🍵', category: 'drink', brand: 'lanzhou', unit: '杯', measure: 'count', grams: 300, cal: 60, p: 1, c: 15, f: 0,
      tags: ['盖碗茶', '冰糖'], nutrition: '三泡台盖碗茶，冰糖是热量来源', tip: '冰糖少放两块，茶照喝' },
    { id: 826, name: '灰豆子（1碗）', emoji: '🫘', category: 'street', brand: 'lanzhou', unit: '碗', measure: 'count', grams: 250, cal: 240, p: 6, c: 48, f: 3,
      tags: ['西北', '豌豆'], nutrition: '蓬灰熬豌豆甜羹，绵沙清甜', tip: '传统甜食，两人分一碗' },

    /* ================= DQ 冰淇淋 🍨 ================= */
    { id: 827, name: '暴风雪（中杯·标准）', emoji: '🍨', category: 'street', brand: 'dq', unit: '杯', measure: 'count', grams: 280, cal: 450, p: 7, c: 60, f: 21,
      tags: ['招牌', '冰淇淋'], nutrition: 'DQ 招牌暴风雪，倒杯不洒的稠密度=热量密度', tip: '中杯刚好，大杯翻倍' },
    { id: 828, name: '暴风雪（大杯）', emoji: '🍨', category: 'street', brand: 'dq', unit: '杯', measure: 'count', grams: 380, cal: 620, p: 9, c: 82, f: 28,
      tags: ['大杯', '冰淇淋'], nutrition: '大杯 ≈ 一碗半米饭的热量', tip: '两人分大杯最划算' },
    { id: 829, name: '芝士奶昔（1杯）', emoji: '🥤', category: 'drink', brand: 'dq', unit: '杯', measure: 'count', grams: 400, cal: 520, p: 10, c: 70, f: 22,
      tags: ['奶昔', '芝士'], nutrition: '浓稠奶昔，液态热量更容易喝过量', tip: '一杯 = 慢跑 50 分钟' },
    { id: 830, name: '香草甜筒（1个）', emoji: '🍦', category: 'street', brand: 'dq', unit: '个', measure: 'count', grams: 90, cal: 210, p: 4, c: 24, f: 11,
      tags: ['甜筒', '小份'], nutrition: '小份甜筒，解馋位选手', tip: '甜筒是冰淇淋的理性单位' },
    { id: 831, name: '草莓圣代（1杯）', emoji: '🍓', category: 'street', brand: 'dq', unit: '杯', measure: 'count', grams: 220, cal: 290, p: 5, c: 48, f: 9,
      tags: ['圣代', '果酱'], nutrition: '草莓酱配冰淇淋，果酱是糖主力', tip: '圣代位中位选择' },
    { id: 832, name: '华夫蛋筒（1个）', emoji: '🧇', category: 'street', brand: 'dq', unit: '个', measure: 'count', grams: 100, cal: 260, p: 5, c: 34, f: 12,
      tags: ['华夫', '甜筒'], nutrition: '华夫脆筒配冰淇淋，脆筒也是碳水', tip: '比普通甜筒多 50' },
    { id: 833, name: '果汁冰棒（1根）', emoji: '🍭', category: 'street', brand: 'dq', unit: '根', measure: 'count', grams: 70, cal: 90, p: 0, c: 20, f: 1,
      tags: ['冰棒', '低卡'], nutrition: '果汁冰棒，冰淇淋店的低位', tip: '热天首选，糖水但量小' },
    { id: 834, name: '奥利奥圣代（1杯）', emoji: '🍪', category: 'street', brand: 'dq', unit: '杯', measure: 'count', grams: 240, cal: 340, p: 6, c: 50, f: 13,
      tags: ['奥利奥', '圣代'], nutrition: '饼干碎配圣代，脆感来自糖油', tip: '比草莓圣代高 50' },
    { id: 835, name: '曲奇奶昔（1杯）', emoji: '🥛', category: 'drink', brand: 'dq', unit: '杯', measure: 'count', grams: 420, cal: 560, p: 9, c: 78, f: 23,
      tags: ['奶昔', '曲奇'], nutrition: '曲奇碎奶昔，甜品位顶配', tip: '全店高位，分享装为宜' },
    { id: 836, name: '巧克力圣代（1杯）', emoji: '🍫', category: 'street', brand: 'dq', unit: '杯', measure: 'count', grams: 230, cal: 320, p: 6, c: 50, f: 11,
      tags: ['巧克力', '圣代'], nutrition: '巧克力酱圣代', tip: '酱少要一半，直接省 40' },

    /* ================= 味千拉面 🍥 ================= */
    { id: 837, name: '豚骨拉面（1碗）', emoji: '🍜', category: 'home', brand: 'ajisen', unit: '碗', measure: 'count', grams: 550, cal: 650, p: 24, c: 94, f: 20,
      tags: ['招牌', '汤面'], nutrition: '豚骨白汤配叉烧溏心蛋，汤底是隐形脂肪', tip: '汤喝一半，面吃完刚好' },
    { id: 838, name: '味噌拉面（1碗）', emoji: '🍜', category: 'home', brand: 'ajisen', unit: '碗', measure: 'count', grams: 540, cal: 610, p: 23, c: 87, f: 19,
      tags: ['味噌', '汤面'], nutrition: '味噌汤底咸香，钠位偏高', tip: '与豚骨热量相近，换口味用' },
    { id: 839, name: '辣味拉面（1碗）', emoji: '🌶️', category: 'home', brand: 'ajisen', unit: '碗', measure: 'count', grams: 540, cal: 590, p: 22, c: 87, f: 17,
      tags: ['辣味', '汤面'], nutrition: '辣油提味，辣不等于低卡', tip: '辣汤更开胃，面更易多吃' },
    { id: 840, name: '猪骨叉烧（3片）', emoji: '🍖', category: 'home', brand: 'ajisen', unit: '份', measure: 'count', grams: 90, cal: 190, p: 15, c: 2, f: 14,
      tags: ['叉烧', '加料'], nutrition: '日式叉烧三片，肥瘦相间', tip: '加料位的蛋白担当' },
    { id: 841, name: '唐扬鸡块（1份3块）', emoji: '🍗', category: 'home', brand: 'ajisen', unit: '份', measure: 'count', grams: 130, cal: 280, p: 16, c: 22, f: 14,
      tags: ['唐扬', '炸物'], nutrition: '日式炸鸡块，复炸吸油', tip: '3 块封顶，配冷面就别点' },
    { id: 842, name: '饺子（1份5只）', emoji: '🥟', category: 'home', brand: 'ajisen', unit: '份', measure: 'count', grams: 220, cal: 320, p: 13, c: 42, f: 11,
      tags: ['煎饺', '配餐'], nutrition: '日式煎饺，皮薄馅煎底带油', tip: '配拉面是碳水叠碳水' },
    { id: 843, name: '中华冷面（1碗）', emoji: '🧊', category: 'home', brand: 'ajisen', unit: '碗', measure: 'count', grams: 450, cal: 430, p: 14, c: 76, f: 8,
      tags: ['冷面', '夏季'], nutrition: '酸甜冷面汤配面，夏季限定感', tip: '汤底含糖，冰爽也别大口灌' },
    { id: 844, name: '海带沙拉（1份）', emoji: '🥗', category: 'street', brand: 'ajisen', unit: '份', measure: 'count', grams: 120, cal: 110, p: 2, c: 18, f: 3,
      tags: ['小菜', '海藻'], nutrition: '中华海藻沙拉，脆爽低卡', tip: '拉面标配小菜，放心点' },
    { id: 845, name: '白米饭（1碗）', emoji: '🍚', category: 'home', brand: 'ajisen', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '拉面已是主食，这碗默认不加' },
    { id: 846, name: '可尔必思（1杯）', emoji: '🥛', category: 'drink', brand: 'ajisen', unit: '杯', measure: 'count', grams: 300, cal: 140, p: 2, c: 31, f: 1,
      tags: ['乳饮', '酸甜'], nutrition: '日式乳酸饮品，酸甜含糖', tip: '比奶昔友好，仍建议少糖' },

    /* ================= 太二酸菜鱼 🐟 ================= */
    { id: 847, name: '老坛子酸菜鱼（1人份）', emoji: '🐟', category: 'home', brand: 'taier', unit: '份', measure: 'count', grams: 450, cal: 540, p: 30, c: 22, f: 37,
      tags: ['招牌', '酸菜鱼'], nutrition: '黑鱼片配老坛酸菜，辣油是热量主力', tip: '鱼片管饱，红油少蘸' },
    { id: 848, name: '酸菜鱼（2-3人份）', emoji: '🥘', category: 'home', brand: 'taier', unit: '锅', measure: 'count', grams: 1100, cal: 1180, p: 60, c: 55, f: 78,
      tags: ['整锅', '分享'], nutrition: '整锅酸菜鱼，人均约 400-590', tip: '3 人分着吃刚好，汤别泡饭' },
    { id: 849, name: '米饭（1碗）', emoji: '🍚', category: 'home', brand: 'taier', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '鱼汤下饭是陷阱，饭先减半' },
    { id: 850, name: '麻辣豆花（1份）', emoji: '🍮', category: 'street', brand: 'taier', unit: '份', measure: 'count', grams: 200, cal: 180, p: 6, c: 30, f: 4,
      tags: ['招牌小食', '豆花'], nutrition: '麻辣调味豆花，植物蛋白位', tip: '小食位优解，麻辣但不油' },
    { id: 851, name: '花椒奶茶（1杯）', emoji: '🧋', category: 'drink', brand: 'taier', unit: '杯', measure: 'count', grams: 350, cal: 160, p: 3, c: 30, f: 3,
      tags: ['网红', '花椒'], nutrition: '花椒风味奶茶，猎奇但糖不少', tip: '尝鲜可以，糖度选三分' },
    { id: 852, name: '酸汤肥牛（1份）', emoji: '🌶️', category: 'home', brand: 'taier', unit: '份', measure: 'count', grams: 280, cal: 420, p: 24, c: 16, f: 29,
      tags: ['肥牛', '酸汤'], nutrition: '肥牛配金针菇酸汤，油位不低', tip: '与酸菜鱼二选一，别叠' },
    { id: 853, name: '蒜泥白肉（1份）', emoji: '🥩', category: 'home', brand: 'taier', unit: '份', measure: 'count', grams: 200, cal: 460, p: 20, c: 8, f: 38,
      tags: ['凉菜', '五花'], nutrition: '蒜泥五花肉片，脂肪位天花板', tip: '两人分一碟，先吃鱼片' },
    { id: 854, name: '麻婆豆腐（1份）', emoji: '🥘', category: 'home', brand: 'taier', unit: '份', measure: 'count', grams: 250, cal: 310, p: 15, c: 14, f: 21,
      tags: ['川菜', '豆腐'], nutrition: '麻辣烧豆腐，红油裹豆腐', tip: '豆腐本身低卡，油是变量' },
    { id: 855, name: '红糖冰粉（1碗）', emoji: '🍧', category: 'street', brand: 'taier', unit: '碗', measure: 'count', grams: 250, cal: 170, p: 2, c: 36, f: 2,
      tags: ['甜品', '解辣'], nutrition: '红糖冰粉，解辣糖水位', tip: '红糖水少搅两下' },
    { id: 856, name: '番茄蛋汤（1份）', emoji: '🥣', category: 'home', brand: 'taier', unit: '份', measure: 'count', grams: 300, cal: 70, p: 4, c: 7, f: 3,
      tags: ['汤品', '清淡'], nutrition: '番茄蛋花汤，清淡低卡', tip: '配餐汤的正确答案' },

    /* ================= 汉拿山 🔥 ================= */
    { id: 857, name: '五花肉（1份）', emoji: '🥩', category: 'home', brand: 'hanshan', unit: '份', measure: 'count', grams: 200, cal: 480, p: 22, c: 2, f: 43,
      tags: ['烤肉', '招牌'], nutrition: '韩式烤五花，脂肪位天花板', tip: '生菜包肉 + 少蘸酱是标准答案' },
    { id: 858, name: '调味牛肉（1份）', emoji: '🍖', category: 'home', brand: 'hanshan', unit: '份', measure: 'count', grams: 180, cal: 330, p: 28, c: 8, f: 21,
      tags: ['烤肉', '牛肉'], nutrition: '腌制牛肉，甜咸酱汁带糖', tip: '比五花肉优，烤到焦边更香' },
    { id: 859, name: '辣白菜（1份）', emoji: '🥬', category: 'home', brand: 'hanshan', unit: '份', measure: 'count', grams: 150, cal: 70, p: 2, c: 14, f: 1,
      tags: ['小菜', '发酵'], nutrition: '韩式辣白菜，低卡开胃', tip: '放心吃，钠偏高别喝汤汁' },
    { id: 860, name: '石锅拌饭（1碗）', emoji: '🍚', category: 'home', brand: 'hanshan', unit: '碗', measure: 'count', grams: 500, cal: 620, p: 18, c: 99, f: 17,
      tags: ['主食', '拌饭'], nutrition: '石锅拌饭配辣酱，锅巴是隐形油', tip: '辣酱放一半，拌匀更入味' },
    { id: 861, name: '大酱汤（1锅）', emoji: '🍲', category: 'home', brand: 'hanshan', unit: '锅', measure: 'count', grams: 350, cal: 160, p: 8, c: 16, f: 7,
      tags: ['汤品', '韩式'], nutrition: '韩式大酱豆腐汤，温和顺口', tip: '配烤肉的低卡汤底' },
    { id: 862, name: '冷面（1碗）', emoji: '🧊', category: 'home', brand: 'hanshan', unit: '碗', measure: 'count', grams: 480, cal: 480, p: 15, c: 91, f: 6,
      tags: ['冷面', '经典'], nutrition: '荞麦冷面酸甜汤，面是碳水主力', tip: '烤肉配冷面爽，但饭量双份' },
    { id: 863, name: '烤鸡翅（1对）', emoji: '🍗', category: 'home', brand: 'hanshan', unit: '对', measure: 'count', grams: 130, cal: 310, p: 22, c: 16, f: 18,
      tags: ['烤制', '鸡翅'], nutrition: '韩式烤鸡翅，带皮脂肪不低', tip: '烤物位中位，2 对封顶' },
    { id: 864, name: '芝士玉米（1份）', emoji: '🌽', category: 'home', brand: 'hanshan', unit: '份', measure: 'count', grams: 200, cal: 260, p: 6, c: 36, f: 10,
      tags: ['芝士', '配菜'], nutrition: '芝士焗玉米，香甜碳水位', tip: '看着是菜，其实是甜品' },
    { id: 865, name: '生菜（1份）', emoji: '🥬', category: 'home', brand: 'hanshan', unit: '份', measure: 'count', grams: 100, cal: 30, p: 2, c: 3, f: 1,
      tags: ['蔬菜', '包肉'], nutrition: '包肉生菜，几乎零负担', tip: '肉 + 生菜 + 少酱，黄金公式' },
    { id: 866, name: '韩式米酒（1杯）', emoji: '🍶', category: 'drink', brand: 'hanshan', unit: '杯', measure: 'count', grams: 250, cal: 120, p: 1, c: 29, f: 0,
      tags: ['米酒', '马格利'], nutrition: '马格利米酒，清甜后劲在酒精', tip: '微醺位，配烤肉别贪杯' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2-5 保持 2026-09-29、批次 6-8 保持 2026-10-08 不变） */
BRAND_FOODS_BATCH9.forEach(f => { f.updated = '2026-10-08'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH9);
