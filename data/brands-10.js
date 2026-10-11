/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 10
 * ----------------------------------------------------------
 *  - 周黑鸭 / 中式早餐铺 / 鲜芋仙 / Wagas / 半天妖烤鱼 各 10 款
 *  - id 867-916，接批次 9（817-866），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 「中式早餐铺」为全国早餐店通用款合辑（非单一品牌）
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH10 = [
    /* ================= 周黑鸭 🦆 ================= */
    { id: 867, name: '鸭脖（1根·锁鲜）', emoji: '🦆', category: 'street', brand: 'zhouheiya', unit: '根', measure: 'count', grams: 120, cal: 310, p: 28, c: 11, f: 18,
      tags: ['卤味', '招牌'], nutrition: '整根鸭脖甜辣卤味，啃着吃不知不觉一整根', tip: '甜辣口含糖，别当纯蛋白算' },
    { id: 868, name: '鸭锁鲜（1盒）', emoji: '📦', category: 'street', brand: 'zhouheiya', unit: '盒', measure: 'count', grams: 150, cal: 380, p: 34, c: 15, f: 20,
      tags: ['锁鲜', '盒装'], nutrition: '锁鲜装鸭锁骨，肉少啃头足', tip: '一盒≈一碗米饭，追剧友好但别超两盒' },
    { id: 869, name: '鸭翅（1只）', emoji: '🍗', category: 'street', brand: 'zhouheiya', unit: '只', measure: 'count', grams: 60, cal: 150, p: 16, c: 3, f: 8,
      tags: ['卤味', '小份'], nutrition: '鸭翅蛋白位在线，个头小好控量', tip: '卤味里的中位选择，2-3 只封顶' },
    { id: 870, name: '鸭掌（1只）', emoji: '🦆', category: 'street', brand: 'zhouheiya', unit: '只', measure: 'count', grams: 45, cal: 90, p: 12, c: 3, f: 3,
      tags: ['卤味', '低卡'], nutrition: '鸭掌以皮筋为主，啃头大于吃头', tip: '解馋位低卡选手，慢慢啃最划算' },
    { id: 871, name: '鸭舌（50g）', emoji: '🍢', category: 'street', brand: 'zhouheiya', unit: '份', measure: 'count', grams: 50, cal: 170, p: 15, c: 5, f: 10,
      tags: ['卤味', '高价'], nutrition: '鸭舌脂肪位不低，越香越要数着吃', tip: '按份买，散称容易超预算' },
    { id: 872, name: '藕片（100g）', emoji: '🪷', category: 'street', brand: 'zhouheiya', unit: '份', measure: 'count', grams: 100, cal: 120, p: 2, c: 22, f: 3,
      tags: ['素卤', '碳水'], nutrition: '卤藕脆爽，但藕是主食不是菜', tip: '吃藕片记得当天减半碗饭' },
    { id: 873, name: '豆干（100g）', emoji: '🟫', category: 'street', brand: 'zhouheiya', unit: '份', measure: 'count', grams: 100, cal: 180, p: 16, c: 9, f: 9,
      tags: ['素卤', '植物蛋白'], nutrition: '卤豆干植物蛋白位扎实', tip: '素卤里的优选，比藕片更抗饿' },
    { id: 874, name: '鸭肠（80g）', emoji: '🍜', category: 'street', brand: 'zhouheiya', unit: '份', measure: 'count', grams: 80, cal: 130, p: 14, c: 3, f: 7,
      tags: ['卤味', '火锅同款'], nutrition: '卤鸭肠脆嫩，涮火锅同款食材', tip: '热量友好，钠偏高多喝水' },
    { id: 875, name: '鸭胗（1个）', emoji: '🫘', category: 'street', brand: 'zhouheiya', unit: '个', measure: 'count', grams: 55, cal: 70, p: 11, c: 2, f: 2,
      tags: ['卤味', '低卡'], nutrition: '鸭胗纯瘦内脏，蛋白密度高', tip: '卤味里最像正经加餐的一位' },
    { id: 876, name: '藤椒凤爪（100g）', emoji: '🌶️', category: 'street', brand: 'zhouheiya', unit: '份', measure: 'count', grams: 100, cal: 200, p: 18, c: 8, f: 11,
      tags: ['凤爪', '藤椒'], nutrition: '凤爪胶原蛋白位，酸辣开胃', tip: '啃头 > 吃头，三五只就收手' },

    /* ================= 中式早餐铺 🍳（合辑） ================= */
    { id: 877, name: '鲜肉包（1个）', emoji: '🥟', category: 'home', brand: 'breakfast', unit: '个', measure: 'count', grams: 100, cal: 230, p: 8, c: 30, f: 9,
      tags: ['包子', '早餐'], nutrition: '标准肉包一个，碳水蛋白脂肪都有', tip: '配无糖豆浆就是合格早餐' },
    { id: 878, name: '素馅包（1个）', emoji: '🥬', category: 'home', brand: 'breakfast', unit: '个', measure: 'count', grams: 95, cal: 170, p: 5, c: 29, f: 4,
      tags: ['包子', '素馅'], nutrition: '素馅包油脂位更低', tip: '两个素包 ≈ 一个肉包的热量' },
    { id: 879, name: '豆浆（1杯·加糖）', emoji: '🥛', category: 'drink', brand: 'breakfast', unit: '杯', measure: 'count', grams: 300, cal: 110, p: 4, c: 17, f: 3,
      tags: ['豆浆', '含糖'], nutrition: '早餐铺豆浆普遍加糖', tip: '甜豆浆两口就喝完，糖在杯底' },
    { id: 880, name: '豆浆（1杯·无糖）', emoji: '🥛', category: 'drink', brand: 'breakfast', unit: '杯', measure: 'count', grams: 300, cal: 70, p: 4, c: 6, f: 3,
      tags: ['豆浆', '无糖'], nutrition: '无糖豆浆，植物蛋白位', tip: '跟店员说「无糖」，直接省 40 kcal' },
    { id: 881, name: '茶叶蛋（1个）', emoji: '🥚', category: 'street', brand: 'breakfast', unit: '个', measure: 'count', grams: 55, cal: 75, p: 7, c: 1, f: 5,
      tags: ['蛋', '高蛋白'], nutrition: '茶叶蛋早餐位优等生', tip: '随手加一个，蛋白质就稳了' },
    { id: 882, name: '小米粥（1碗）', emoji: '🥣', category: 'home', brand: 'breakfast', unit: '碗', measure: 'count', grams: 300, cal: 90, p: 3, c: 19, f: 0,
      tags: ['粥', '清淡'], nutrition: '小米粥温和好消化', tip: '粥升糖快，配包子鸡蛋一起吃' },
    { id: 883, name: '皮蛋瘦肉粥（1碗）', emoji: '🍲', category: 'home', brand: 'breakfast', unit: '碗', measure: 'count', grams: 350, cal: 220, p: 11, c: 32, f: 5,
      tags: ['粥', '有料'], nutrition: '有肉有蛋的粥，比白粥扛饿', tip: '粥里最实在的一碗' },
    { id: 884, name: '烧麦（1个）', emoji: '🥟', category: 'street', brand: 'breakfast', unit: '个', measure: 'count', grams: 50, cal: 105, p: 4, c: 16, f: 3,
      tags: ['糯米', '点心'], nutrition: '糯米烧麦，小小一个碳水密集', tip: '一两 4 个 ≈ 一碗饭，别数错' },
    { id: 885, name: '油条（1根）', emoji: '🥖', category: 'street', brand: 'breakfast', unit: '根', measure: 'count', grams: 80, cal: 270, p: 6, c: 37, f: 11,
      tags: ['油炸', '经典'], nutrition: '油条是早餐的热量刺客', tip: '半根配豆浆就好，一整根=炸油+碳水' },
    { id: 886, name: '肉饼（1个·韭菜猪肉）', emoji: '🫓', category: 'street', brand: 'breakfast', unit: '个', measure: 'count', grams: 120, cal: 250, p: 11, c: 26, f: 11,
      tags: ['煎制', '馅饼'], nutrition: '煎肉饼油面吸油，香也油', tip: '早餐位中位，配粥别配豆浆甜' },

    /* ================= 鲜芋仙 🍠 ================= */
    { id: 887, name: '芋圆四号（1碗）', emoji: '🍠', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 400, cal: 430, p: 8, c: 80, f: 10,
      tags: ['招牌', '芋圆'], nutrition: '芋圆+红豆+仙草，一碗糖水主食位', tip: '芋圆是淀粉不是菜，当主食算' },
    { id: 888, name: '烧仙草（1碗）', emoji: '🫕', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 380, cal: 380, p: 7, c: 70, f: 8,
      tags: ['招牌', '仙草'], nutrition: '烧仙草配芋圆红豆，清苦被糖中和', tip: '料多糖多，两人分一碗更轻松' },
    { id: 889, name: '手工豆花（1碗）', emoji: '🍮', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 300, cal: 210, p: 6, c: 37, f: 4,
      tags: ['豆花', '植物蛋白'], nutrition: '豆花底植物蛋白位，糖浆是变量', tip: '糖浆少淋一半，甜味还在' },
    { id: 890, name: '仙草冻（1份）', emoji: '🟫', category: 'street', brand: 'xianyu', unit: '份', measure: 'count', grams: 250, cal: 130, p: 2, c: 28, f: 1,
      tags: ['低卡', '仙草'], nutrition: '仙草冻本身热量很低', tip: '糖水甜品位的低位选择' },
    { id: 891, name: '红豆汤（1碗）', emoji: '🫘', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 300, cal: 190, p: 5, c: 40, f: 1,
      tags: ['豆汤', '温热'], nutrition: '红豆汤沙甜，豆类碳水位', tip: '看着养生，糖照样不少' },
    { id: 892, name: '芋圆奶茶（1杯）', emoji: '🧋', category: 'drink', brand: 'xianyu', unit: '杯', measure: 'count', grams: 400, cal: 290, p: 4, c: 58, f: 6,
      tags: ['芋圆', '奶茶'], nutrition: '芋圆奶茶，嚼着喝的主食', tip: '芋圆吸完=半碗饭，糖度选少糖' },
    { id: 893, name: '鲜奶（1杯）', emoji: '🥛', category: 'drink', brand: 'xianyu', unit: '杯', measure: 'count', grams: 250, cal: 150, p: 8, c: 12, f: 8,
      tags: ['鲜奶', '无添加'], nutrition: '纯鲜奶，钙与蛋白位', tip: '糖水店里最不会错的一杯' },
    { id: 894, name: '蜜桃冰沙（1杯）', emoji: '🍑', category: 'drink', brand: 'xianyu', unit: '杯', measure: 'count', grams: 350, cal: 210, p: 1, c: 49, f: 1,
      tags: ['冰沙', '果味'], nutrition: '果味冰沙，几乎纯糖水', tip: '果糖不比奶茶温柔，量小为王' },
    { id: 895, name: '双皮奶（1碗）', emoji: '🍮', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 250, cal: 240, p: 6, c: 38, f: 7,
      tags: ['奶制', '经典'], nutrition: '双皮奶奶香足，奶皮是脂肪', tip: '奶制甜品里中位，别当布丁无脑吃' },
    { id: 896, name: '综合冰（1碗）', emoji: '🍧', category: 'street', brand: 'xianyu', unit: '碗', measure: 'count', grams: 400, cal: 320, p: 4, c: 67, f: 4,
      tags: ['刨冰', '夏季'], nutrition: '刨冰+炼乳+配料，糖分叠满', tip: '炼乳是隐形热量，淋一半' },

    /* ================= Wagas 🥗 ================= */
    { id: 897, name: '三文鱼牛油果沙拉（1份）', emoji: '🥗', category: 'home', brand: 'wagas', unit: '份', measure: 'count', grams: 320, cal: 420, p: 26, c: 18, f: 28,
      tags: ['沙拉', '轻食'], nutrition: '三文鱼+牛油果，好脂肪位偏高', tip: '酱汁另放，油醋汁最稳' },
    { id: 898, name: '凯撒鸡肉沙拉（1份）', emoji: '🥬', category: 'home', brand: 'wagas', unit: '份', measure: 'count', grams: 300, cal: 380, p: 30, c: 14, f: 22,
      tags: ['沙拉', '高蛋白'], nutrition: '鸡胸沙拉蛋白位足，凯撒酱是变量', tip: '凯撒酱换油醋，直接省 100' },
    { id: 899, name: '鸡胸牛油果三明治（1个）', emoji: '🥪', category: 'home', brand: 'wagas', unit: '个', measure: 'count', grams: 280, cal: 450, p: 28, c: 44, f: 18,
      tags: ['三明治', '高蛋白'], nutrition: '全麦夹鸡胸牛油果，均衡位选手', tip: '午餐一个刚好，别配薯条' },
    { id: 900, name: '烤牛肉法拉费卷（1个）', emoji: '🫓', category: 'home', brand: 'wagas', unit: '个', measure: 'count', grams: 300, cal: 520, p: 24, c: 57, f: 22,
      tags: ['卷饼', '鹰嘴豆'], nutrition: '法拉费+烤牛肉卷，料足热量也足', tip: '轻食≠低卡，卷类是重炮' },
    { id: 901, name: '意面（1份·番茄肉酱）', emoji: '🍝', category: 'home', brand: 'wagas', unit: '份', measure: 'count', grams: 450, cal: 610, p: 22, c: 90, f: 18,
      tags: ['意面', '主食'], nutrition: '番茄肉酱意面，一份顶一顿饭', tip: '面馆位高位，减脂期选半份' },
    { id: 902, name: '牛油果吐司（1份）', emoji: '🥑', category: 'home', brand: 'wagas', unit: '份', measure: 'count', grams: 200, cal: 340, p: 10, c: 41, f: 15,
      tags: ['吐司', '早午餐'], nutrition: '牛油果吐司，好脂肪+碳水组合', tip: 'brunch 位选择，配黑咖啡' },
    { id: 903, name: '香蕉奶昔（1杯）', emoji: '🍌', category: 'drink', brand: 'wagas', unit: '杯', measure: 'count', grams: 400, cal: 280, p: 7, c: 52, f: 5,
      tags: ['奶昔', '果昔'], nutrition: '香蕉奶昔顺口，糖与热量都顺', tip: '液态热量易过量，慢点喝' },
    { id: 904, name: '冷萃咖啡（1杯）', emoji: '☕', category: 'drink', brand: 'wagas', unit: '杯', measure: 'count', grams: 350, cal: 15, p: 1, c: 3, f: 0,
      tags: ['咖啡', '无糖'], nutrition: '冷萃黑咖，几乎零热量', tip: '提神位最优解，别加奶' },
    { id: 905, name: '能量棒（1根）', emoji: '🍫', category: 'street', brand: 'wagas', unit: '根', measure: 'count', grams: 55, cal: 210, p: 8, c: 26, f: 8,
      tags: ['加餐', '便携'], nutrition: '坚果果干能量棒，密度不低', tip: '运动前后吃，平时当零食会超' },
    { id: 906, name: '番茄浓汤（1碗）', emoji: '🍅', category: 'home', brand: 'wagas', unit: '碗', measure: 'count', grams: 300, cal: 160, p: 4, c: 24, f: 5,
      tags: ['汤品', '开胃'], nutrition: '番茄浓汤顺滑，奶油面糊打底', tip: '配沙拉的低位汤品' },

    /* ================= 半天妖烤鱼 🌶️ ================= */
    { id: 907, name: '青花椒烤鱼（1条·2-3人）', emoji: '🐟', category: 'home', brand: 'bantianyao', unit: '条', measure: 'count', grams: 1200, cal: 1450, p: 80, c: 50, f: 103,
      tags: ['招牌', '整条'], nutrition: '整条烤鱼配青花椒与配菜，油在汤里', tip: '3 人分着吃人均约 480，汤别泡饭' },
    { id: 908, name: '烤鱼（单人小份）', emoji: '🥘', category: 'home', brand: 'bantianyao', unit: '份', measure: 'count', grams: 500, cal: 620, p: 36, c: 22, f: 44,
      tags: ['单人', '分层'], nutrition: '单人小份，鱼肉蛋白位足、红油不缺席', tip: '一人食刚好，米饭减半' },
    { id: 909, name: '米饭（1碗）', emoji: '🍚', category: 'home', brand: 'bantianyao', unit: '碗', measure: 'count', grams: 200, cal: 230, p: 5, c: 51, f: 1,
      tags: ['主食', '米饭'], nutrition: '标准一碗米饭', tip: '烤鱼汤汁下饭是陷阱，饭先减半' },
    { id: 910, name: '红糖糍粑（1份5块）', emoji: '🍡', category: 'street', brand: 'bantianyao', unit: '份', measure: 'count', grams: 180, cal: 310, p: 4, c: 58, f: 7,
      tags: ['小吃', '油炸'], nutrition: '糍粑裹红糖再油炸，糖油双高', tip: '两块解馋，五块=半碗饭+油' },
    { id: 911, name: '凉拌黄瓜（1份）', emoji: '🥒', category: 'street', brand: 'bantianyao', unit: '份', measure: 'count', grams: 180, cal: 60, p: 2, c: 8, f: 2,
      tags: ['凉菜', '低卡'], nutrition: '拍黄瓜清脆低卡', tip: '烤鱼桌上的清流，放心夹' },
    { id: 912, name: '炸酥肉（1份）', emoji: '🍗', category: 'street', brand: 'bantianyao', unit: '份', measure: 'count', grams: 150, cal: 390, p: 18, c: 20, f: 26,
      tags: ['炸物', '川味'], nutrition: '复炸小酥肉，外脆里油', tip: '趁热吃几块就好，凉了更油' },
    { id: 913, name: '冰粉（1碗）', emoji: '🍧', category: 'street', brand: 'bantianyao', unit: '碗', measure: 'count', grams: 250, cal: 150, p: 2, c: 33, f: 1,
      tags: ['甜品', '解辣'], nutrition: '红糖冰粉，解辣糖水位', tip: '比烤鱼桌上的油友好得多' },
    { id: 914, name: '酸梅汤（1扎·500ml）', emoji: '🥤', category: 'drink', brand: 'bantianyao', unit: '扎', measure: 'count', grams: 500, cal: 130, p: 1, c: 32, f: 0,
      tags: ['饮品', '解腻'], nutrition: '酸梅汤酸甜解腻，含糖不低', tip: '一扎两人分，别当水灌' },
    { id: 915, name: '麻辣烤鱼（1条·2-3人）', emoji: '🌶️', category: 'home', brand: 'bantianyao', unit: '条', measure: 'count', grams: 1200, cal: 1520, p: 80, c: 48, f: 112,
      tags: ['招牌', '麻辣'], nutrition: '麻辣版红油更厚，比青花椒贵 70 kcal', tip: '重口版，油碟就别蘸了' },
    { id: 916, name: '蔬菜拼盘（1份）', emoji: '🥦', category: 'street', brand: 'bantianyao', unit: '份', measure: 'count', grams: 300, cal: 130, p: 4, c: 20, f: 4,
      tags: ['配菜', '蔬菜'], nutrition: '菌菇蔬菜拼盘，涮烤鱼汤位', tip: '先吃菜再吃鱼，饱腹感更早来' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2-5 保持 2026-09-29、批次 6-9 保持 2026-10-08 不变） */
BRAND_FOODS_BATCH10.forEach(f => { f.updated = '2026-10-11'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH10);
