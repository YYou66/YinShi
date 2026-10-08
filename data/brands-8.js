/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 8
 * ----------------------------------------------------------
 *  - 赛百味 / 杨国福麻辣烫 / 山姆会员店 / 吉野家 / 正新鸡排 各 10 款
 *  - id 767-816，接批次 7（717-766），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 赛百味按 6 英寸计、酱包为标准单包；杨国福按「份」计（一碗组合另算）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH8 = [
    /* ================= 赛百味 🥪 ================= */
    { id: 767, name: '火鸡胸三明治（6英寸）', emoji: '🥪', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 210, cal: 320, p: 18, c: 42, f: 8,
      tags: ['低脂', '经典'], nutrition: '火鸡胸肉配蔬菜，经典低脂款', tip: '选全麦面包 + 不要蛋黄酱' },
    { id: 768, name: '鸡肉三明治（6英寸）', emoji: '🥪', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 220, cal: 350, p: 22, c: 47, f: 8,
      tags: ['鸡肉', '蛋白'], nutrition: '烤鸡肉配蔬菜，蛋白位扎实', tip: '加双份蔬菜，纤维更足' },
    { id: 769, name: '意大利辣味火鸡三明治（6英寸）', emoji: '🌶️', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 220, cal: 360, p: 20, c: 50, f: 9,
      tags: ['辣味', '火鸡'], nutrition: '辣味火鸡片，风味足热量可控', tip: '辣酱替代沙拉酱更划算' },
    { id: 770, name: '金枪鱼三明治（6英寸）', emoji: '🐟', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 230, cal: 470, p: 24, c: 44, f: 22,
      tags: ['金枪鱼', '蛋黄酱'], nutrition: '金枪鱼拌蛋黄酱，蛋白高脂肪也高', tip: '酱是变量，减半省 80' },
    { id: 771, name: '意大利B.M.T.三明治（6英寸）', emoji: '🥓', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 230, cal: 450, p: 24, c: 46, f: 19,
      tags: ['萨拉米', '香肠'], nutrition: '萨拉米 + 火腿 + 培根三拼，加工肉位高', tip: '咸香过瘾，钠也过警戒线' },
    { id: 772, name: '牛肉丸三明治（6英寸）', emoji: '🧆', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 230, cal: 430, p: 25, c: 44, f: 17,
      tags: ['牛肉', '热食'], nutrition: '意式牛肉丸配番茄酱', tip: '热食款里蛋白位不错' },
    { id: 773, name: '蔬菜三明治（6英寸·素食）', emoji: '🥬', category: 'breakfast', brand: 'subway', unit: '个', measure: 'count', grams: 220, cal: 300, p: 11, c: 48, f: 7,
      tags: ['素食', '清爽'], nutrition: '什锦蔬菜配酱，清爽但面包是主力', tip: '素食位低卡，酱别手抖' },
    { id: 774, name: '千岛酱（标准包）', emoji: '🥄', category: 'breakfast', brand: 'subway', unit: '包', measure: 'count', grams: 30, cal: 100, p: 0, c: 8, f: 7,
      tags: ['酱料', '隐形'], nutrition: '千岛酱标准单包，两包就多一杯米饭', tip: '要「半包」是店员听得懂的话' },
    { id: 775, name: '蜂蜜芥末酱（标准包）', emoji: '🍯', category: 'breakfast', brand: 'subway', unit: '包', measure: 'count', grams: 30, cal: 90, p: 0, c: 12, f: 4,
      tags: ['酱料', '甜口'], nutrition: '蜂蜜芥末酱，甜口碳水位', tip: '比千岛略轻，仍建议半包' },
    { id: 776, name: '薯片（1小袋）', emoji: '🍟', category: 'street', brand: 'subway', unit: '袋', measure: 'count', grams: 28, cal: 160, p: 2, c: 17, f: 9,
      tags: ['配餐', '炸物'], nutrition: '经典配餐薯片，油炸碳水', tip: '换成蔬菜杯，直接省 160' },

    /* ================= 杨国福麻辣烫 🍜 ================= */
    { id: 777, name: '麻辣汤底（1碗）', emoji: '🌶️', category: 'home', brand: 'yangguofu', unit: '碗', measure: 'count', grams: 500, cal: 300, p: 6, c: 14, f: 24,
      tags: ['汤底', '红油'], nutrition: '麻辣红油汤底一碗，油是热量主力', tip: '选番茄/骨汤底直接省 150，汤别喝' },
    { id: 778, name: '麻酱蘸料（1份）', emoji: '🫙', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 70, cal: 230, p: 7, c: 14, f: 16,
      tags: ['蘸料', '麻酱'], nutrition: '芝麻酱蘸料，小料位热量大户', tip: '醋碟 + 半份麻酱最平衡' },
    { id: 779, name: '毛肚（1份）', emoji: '🐂', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 100, cal: 120, p: 14, c: 4, f: 6,
      tags: ['内脏', '脆爽'], nutrition: '毛肚高蛋白低脂，涮煮吸味', tip: '麻辣烫里的优等生' },
    { id: 780, name: '肥牛卷（1份）', emoji: '🥩', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 120, cal: 280, p: 18, c: 4, f: 22,
      tags: ['牛肉', '肥脂'], nutrition: '肥牛卷脂肪位高，红油再叠一层', tip: '过水涮一下再蘸，减 40' },
    { id: 781, name: '鱼豆腐（1份）', emoji: '🧆', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 90, cal: 110, p: 8, c: 9, f: 5,
      tags: ['丸滑', '鱼糜'], nutrition: '鱼糜制品，蛋白淀粉各半', tip: '丸滑类里中位选择' },
    { id: 782, name: '鹌鹑蛋（1份5个）', emoji: '🥚', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 55, cal: 80, p: 7, c: 1, f: 5,
      tags: ['蛋', '蛋白'], nutrition: '卤鹌鹑蛋，小而扎实', tip: '随手可得的优质蛋白' },
    { id: 783, name: '油麦菜（1份）', emoji: '🥬', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 150, cal: 40, p: 2, c: 5, f: 2,
      tags: ['蔬菜', '低卡'], nutrition: '绿叶菜几乎零负担', tip: '先下一大把蔬菜垫底' },
    { id: 784, name: '土豆片（1份）', emoji: '🥔', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 150, cal: 110, p: 3, c: 24, f: 1,
      tags: ['淀粉菜', '土豆'], nutrition: '土豆是隐形主食', tip: '吃了土豆片，方便面就别加' },
    { id: 785, name: '方便面饼（1份）', emoji: '🍜', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 80, cal: 350, p: 8, c: 52, f: 12,
      tags: ['主食', '面'], nutrition: '油炸面饼，麻辣烫经典翻车点', tip: '换宽粉/米饭，或只吃半份' },
    { id: 786, name: '宽粉（1份）', emoji: '🍠', category: 'home', brand: 'yangguofu', unit: '份', measure: 'count', grams: 160, cal: 180, p: 5, c: 38, f: 1,
      tags: ['主食', '粉'], nutrition: '红薯宽粉，纯碳水位', tip: '比方便面饼友好一半' },

    /* ================= 山姆会员店 🛒 ================= */
    { id: 787, name: '原味麻薯（1个）', emoji: '🍡', category: 'bake', brand: 'sam', unit: '个', measure: 'count', grams: 40, cal: 130, p: 3, c: 18, f: 5,
      tags: ['网红', '麻薯'], nutrition: '山姆爆款麻薯，糯米软糯碳水', tip: '一盒 30 个，控制在 1-2 个' },
    { id: 788, name: '瑞士卷（1块）', emoji: '🍰', category: 'bake', brand: 'sam', unit: '块', measure: 'count', grams: 60, cal: 220, p: 4, c: 26, f: 11,
      tags: ['爆款', '蛋糕卷'], nutrition: '奶油蛋糕卷，糖油组合', tip: '山姆排队王，半条封顶' },
    { id: 789, name: '烤鸡（1/4只）', emoji: '🍗', category: 'home', brand: 'sam', unit: '份', measure: 'count', grams: 200, cal: 330, p: 30, c: 2, f: 23,
      tags: ['烤鸡', '蛋白'], nutrition: '整只烤鸡分件，带皮脂肪不低', tip: '去皮减约 80 kcal' },
    { id: 790, name: '牛肉卷（1个）', emoji: '🌯', category: 'home', brand: 'sam', unit: '个', measure: 'count', grams: 180, cal: 380, p: 16, c: 43, f: 16,
      tags: ['熟食', '牛肉'], nutrition: '烤牛肉卷，饼皮牛肉芝士组合', tip: '熟食区优解，配蔬菜沙拉' },
    { id: 791, name: '青柠汁（1杯）', emoji: '🍋', category: 'drink', brand: 'sam', unit: '杯', measure: 'count', grams: 300, cal: 110, p: 0, c: 27, f: 0,
      tags: ['果汁', '酸甜'], nutrition: '青柠果汁，酸味骗人糖不少', tip: '兑气泡水 1:1 更划算' },
    { id: 792, name: '贝果（1个）', emoji: '🥯', category: 'bake', brand: 'sam', unit: '个', measure: 'count', grams: 100, cal: 300, p: 10, c: 56, f: 4,
      tags: ['主食', '贝果'], nutrition: '大个头贝果，早餐位选手', tip: '切开冻一半，下次再吃' },
    { id: 793, name: '披萨（1片）', emoji: '🍕', category: 'home', brand: 'sam', unit: '片', measure: 'count', grams: 110, cal: 260, p: 11, c: 31, f: 10,
      tags: ['披萨', '加餐'], nutrition: '整张切片装，一片是合理单位', tip: '2 片 + 沙拉就是一餐' },
    { id: 794, name: '蛋黄酥（1个）', emoji: '🥮', category: 'bake', brand: 'sam', unit: '个', measure: 'count', grams: 60, cal: 250, p: 6, c: 31, f: 11,
      tags: ['点心', '酥皮'], nutrition: '酥皮裹蛋黄，起酥油不可忽视', tip: '一个封顶，配无糖茶' },
    { id: 795, name: '全脂牛奶（1盒250ml）', emoji: '🥛', category: 'drink', brand: 'sam', unit: '盒', measure: 'count', grams: 250, cal: 170, p: 8, c: 14, f: 9,
      tags: ['牛奶', '补钙'], nutrition: '全脂纯牛奶，蛋白钙双补', tip: '早餐搭配位，比风味奶干净' },
    { id: 796, name: '酱牛肉（1份）', emoji: '🍖', category: 'home', brand: 'sam', unit: '份', measure: 'count', grams: 120, cal: 260, p: 34, c: 4, f: 13,
      tags: ['熟食', '高蛋白'], nutrition: '卤制牛腱肉，蛋白位天花板', tip: '备餐神器，冷藏分装' },

    /* ================= 吉野家 🍚 ================= */
    { id: 797, name: '牛肉饭（中碗）', emoji: '🍚', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 450, cal: 650, p: 30, c: 90, f: 19,
      tags: ['招牌', '盖饭'], nutrition: '招牌牛肉盖饭，米饭是隐形主力', tip: '饭吃 2/3，洋葱牛肉多吃' },
    { id: 798, name: '牛肉饭（大碗）', emoji: '🍚', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 560, cal: 820, p: 38, c: 112, f: 22,
      tags: ['大碗', '盖饭'], nutrition: '大碗版牛肉饭，接近一顿半', tip: '大碗差价不划算，热量翻倍' },
    { id: 799, name: '双拼牛肉饭（1碗）', emoji: '🍱', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 520, cal: 780, p: 34, c: 112, f: 22,
      tags: ['双拼', '盖饭'], nutrition: '双拼组合，肉更多饭也更多', tip: '两人分一碗最合理' },
    { id: 800, name: '日式煎饺（1份5只）', emoji: '🥟', category: 'home', brand: 'yoshinoya', unit: '份', measure: 'count', grams: 250, cal: 350, p: 14, c: 44, f: 13,
      tags: ['煎饺', '配餐'], nutrition: '煎饺配饭是碳水叠碳水', tip: '单点煎饺当一餐，别配饭' },
    { id: 801, name: '鸡肉亲子丼（1碗）', emoji: '🍗', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 450, cal: 620, p: 36, c: 88, f: 14,
      tags: ['鸡肉', '盖饭'], nutrition: '滑蛋鸡肉盖饭，蛋白比牛肉饭高', tip: '同价位更优的蛋白选择' },
    { id: 802, name: '牛肉蔬菜汤（1碗）', emoji: '🍲', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 350, cal: 180, p: 10, c: 20, f: 7,
      tags: ['汤品', '清淡'], nutrition: '牛肉清汤配蔬菜，温和顺口', tip: '配半碗饭就是轻餐' },
    { id: 803, name: '味噌汤（1碗）', emoji: '🥣', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 300, cal: 60, p: 4, c: 6, f: 2,
      tags: ['汤品', '日式'], nutrition: '味噌汤清淡低卡', tip: '配餐汤的正确答案，钠偏高少喝两口' },
    { id: 804, name: '蔬菜沙拉（1份）', emoji: '🥗', category: 'street', brand: 'yoshinoya', unit: '份', measure: 'count', grams: 160, cal: 90, p: 3, c: 10, f: 4,
      tags: ['沙拉', '蔬菜'], nutrition: '和风汁蔬菜沙拉', tip: '先吃沙拉垫底，盖饭自然少吃' },
    { id: 805, name: '炸鸡块（1份3块）', emoji: '🍗', category: 'home', brand: 'yoshinoya', unit: '份', measure: 'count', grams: 150, cal: 300, p: 18, c: 20, f: 16,
      tags: ['唐扬', '炸物'], nutrition: '日式唐扬鸡块，复炸吸油', tip: '配亲子丼就别再点，二选一' },
    { id: 806, name: '白米饭（1碗）', emoji: '🍚', category: 'home', brand: 'yoshinoya', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '盖饭已是饭，这碗默认不加' },

    /* ================= 正新鸡排 🥩 ================= */
    { id: 807, name: '大鸡排（1块）', emoji: '🥩', category: 'street', brand: 'zhengxin', unit: '块', measure: 'count', grams: 250, cal: 580, p: 30, c: 54, f: 27,
      tags: ['招牌', '炸物'], nutrition: '招牌大鸡排，裹粉油炸，一块顶半顿', tip: '两人分一块，或选烤制款' },
    { id: 808, name: '香辣鸡排（1块）', emoji: '🌶️', category: 'street', brand: 'zhengxin', unit: '块', measure: 'count', grams: 250, cal: 600, p: 30, c: 57, f: 28,
      tags: ['香辣', '炸物'], nutrition: '撒粉版香辣鸡排，辣粉增味不增蛋白', tip: '比原味多 20，主要在撒粉与挂糊' },
    { id: 809, name: '无骨鸡柳（1份）', emoji: '🍗', category: 'street', brand: 'zhengxin', unit: '份', measure: 'count', grams: 150, cal: 380, p: 22, c: 37, f: 16,
      tags: ['鸡柳', '炸物'], nutrition: '无骨鸡柳条，裹粉率高', tip: '小份解馋位，酱少蘸' },
    { id: 810, name: '鸡米花（1份）', emoji: '🍿', category: 'street', brand: 'zhengxin', unit: '份', measure: 'count', grams: 120, cal: 320, p: 16, c: 30, f: 15,
      tags: ['鸡米花', '追剧'], nutrition: '一口一个的炸鸡粒，极易吃过量', tip: '倒进小碗吃，别抱着纸桶' },
    { id: 811, name: '炸鸡腿（1只）', emoji: '🍗', category: 'street', brand: 'zhengxin', unit: '只', measure: 'count', grams: 160, cal: 390, p: 24, c: 26, f: 21,
      tags: ['鸡腿', '炸物'], nutrition: '整只炸鸡腿，带皮脂肪位高', tip: '去皮减约 90 kcal' },
    { id: 812, name: '香辣鸡翅（1对）', emoji: '🍗', category: 'street', brand: 'zhengxin', unit: '对', measure: 'count', grams: 90, cal: 300, p: 18, c: 20, f: 16,
      tags: ['鸡翅', '炸物'], nutrition: '一对炸鸡翅，皮脂占大头', tip: '2 对封顶，配柠檬水' },
    { id: 813, name: '鱿鱼串（1串）', emoji: '🦑', category: 'street', brand: 'zhengxin', unit: '串', measure: 'count', grams: 80, cal: 150, p: 9, c: 17, f: 5,
      tags: ['海鲜', '串串'], nutrition: '裹浆鱿鱼串，海鲜位但裹了粉', tip: '小食位相对友好' },
    { id: 814, name: '薯条（1中份）', emoji: '🍟', category: 'street', brand: 'zhengxin', unit: '份', measure: 'count', grams: 120, cal: 300, p: 4, c: 44, f: 12,
      tags: ['薯条', '配餐'], nutrition: '炸薯条，配餐热量陷阱', tip: '鸡排已是炸物，薯条pass' },
    { id: 815, name: '柠檬水（1杯）', emoji: '🍋', category: 'drink', brand: 'zhengxin', unit: '杯', measure: 'count', grams: 400, cal: 80, p: 0, c: 20, f: 0,
      tags: ['饮品', '解腻'], nutrition: '招牌柠檬水，糖水位', tip: '比奶茶友好，仍建议少糖' },
    { id: 816, name: '烤鸡肉串（1串）', emoji: '🍢', category: 'street', brand: 'zhengxin', unit: '串', measure: 'count', grams: 70, cal: 180, p: 14, c: 10, f: 10,
      tags: ['烤制', '串串'], nutrition: '非油炸烤鸡串，炸物区的清流', tip: '同店最优解，优先选它' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2-5 保持 2026-09-29、批次 6-7 保持 2026-10-08 不变） */
BRAND_FOODS_BATCH8.forEach(f => { f.updated = '2026-10-08'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH8);
