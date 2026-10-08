/* ==========================================================
 * 饮食热量记录站 · 品牌热量库 批次 7
 * ----------------------------------------------------------
 *  - Tims 中国 / 袁记云饺 / 绿茶餐厅 / 泸溪河 / 海底捞 各 10 款
 *  - id 717-766，接批次 6（667-716），与食物库/菜系/省区不冲突
 *  - BRAND_FOODS 由批次 1（brands-1.js）声明，本文件 push 合并
 *  - 海底捞锅底按「锅」计（2-4 人共享），小料碟为单人份
 *  - ⚠️ 所有数值均为估算值，以品牌官方小程序 / 包装标注为准
 * ========================================================== */

const BRAND_FOODS_BATCH7 = [
    /* ================= Tims 中国 🥯 ================= */
    { id: 717, name: '原味贝果（1个）', emoji: '🥯', category: 'bake', brand: 'tims', unit: '个', measure: 'count', grams: 95, cal: 290, p: 10, c: 54, f: 4,
      tags: ['招牌', '贝果'], nutrition: '碱水贝果，扎实耐嚼，碳水为主', tip: '配黑咖啡就是经典 Tims 早餐' },
    { id: 718, name: '芝士贝果（1个）', emoji: '🥯', category: 'bake', brand: 'tims', unit: '个', measure: 'count', grams: 105, cal: 350, p: 12, c: 54, f: 10,
      tags: ['芝士', '贝果'], nutrition: '芝士夹心贝果，咸香高一档', tip: '比原味多 60 大卡，选哪个看早餐' },
    { id: 719, name: '全麦贝果（1个）', emoji: '🌾', category: 'bake', brand: 'tims', unit: '个', measure: 'count', grams: 95, cal: 270, p: 11, c: 50, f: 4,
      tags: ['全麦', '粗粮'], nutrition: '全麦版贝果，纤维略高', tip: '同系列低卡位，看配料表选真全麦' },
    { id: 720, name: '鲜萃咖啡（中杯）', emoji: '☕', category: 'drink', brand: 'tims', unit: '杯', measure: 'count', grams: 400, cal: 10, p: 0, c: 2, f: 0,
      tags: ['黑咖啡', '零糖'], nutrition: '鲜萃黑咖啡，几乎零热量', tip: '减脂期最优选择' },
    { id: 721, name: '拿铁（中杯）', emoji: '☕', category: 'drink', brand: 'tims', unit: '杯', measure: 'count', grams: 400, cal: 160, p: 8, c: 15, f: 7,
      tags: ['牛奶', '奶咖'], nutrition: '鲜奶拿铁，蛋白与钙加分', tip: '咖啡里的中位选择' },
    { id: 722, name: '生椰拿铁（中杯）', emoji: '🥥', category: 'drink', brand: 'tims', unit: '杯', measure: 'count', grams: 400, cal: 240, p: 4, c: 30, f: 11,
      tags: ['生椰', '厚乳'], nutrition: '椰乳配浓缩，香但脂肪不低', tip: '椰乳是变量，选少糖' },
    { id: 723, name: '枫糖拿铁（中杯）', emoji: '🍁', category: 'drink', brand: 'tims', unit: '杯', measure: 'count', grams: 400, cal: 250, p: 6, c: 40, f: 7,
      tags: ['枫糖', '招牌'], nutrition: 'Tims 特色枫糖浆配奶咖', tip: '糖浆减半约省 50 kcal' },
    { id: 724, name: '香酥肉桂卷（1个）', emoji: '🌀', category: 'bake', brand: 'tims', unit: '个', measure: 'count', grams: 90, cal: 330, p: 6, c: 46, f: 14,
      tags: ['肉桂', '甜点'], nutrition: '肉桂糖霜卷，油糖面组合', tip: '配黑咖啡刚好，配拿铁就超了' },
    { id: 725, name: '农场鸡肉沙拉（1份）', emoji: '🥗', category: 'street', brand: 'tims', unit: '份', measure: 'count', grams: 220, cal: 220, p: 12, c: 16, f: 11,
      tags: ['沙拉', '蛋白'], nutrition: '烤鸡肉蔬菜沙拉，蛋白位不错', tip: '酱包用一半即可' },
    { id: 726, name: '烤牛肉贝果三明治（1个）', emoji: '🥪', category: 'breakfast', brand: 'tims', unit: '个', measure: 'count', grams: 180, cal: 420, p: 22, c: 44, f: 16,
      tags: ['牛肉', '早餐'], nutrition: '烤牛肉配贝果，咸口早餐位', tip: '顶饱首选，午餐可减主食' },

    /* ================= 袁记云饺 🥟 ================= */
    { id: 727, name: '鲜肉云吞（1份约10只）', emoji: '🥟', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 300, cal: 480, p: 22, c: 55, f: 18,
      tags: ['招牌', '云吞'], nutrition: '现包鲜肉云吞，皮薄馅足', tip: '干拌比汤煮少吸水更顶饿' },
    { id: 728, name: '玉米鲜肉饺（1份约10只）', emoji: '🥟', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 320, cal: 460, p: 20, c: 61, f: 15,
      tags: ['玉米', '水饺'], nutrition: '玉米粒配鲜肉，清甜口', tip: '蔬菜馅位里较优解' },
    { id: 729, name: '韭菜鸡蛋饺（1份约10只）', emoji: '🥟', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 300, cal: 420, p: 14, c: 59, f: 14,
      tags: ['素馅', '鸡蛋'], nutrition: '韭菜鸡蛋经典素馅', tip: '素馅不等于低卡，皮与油在呢' },
    { id: 730, name: '猪肉大葱饺（1份约10只）', emoji: '🥟', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 320, cal: 500, p: 22, c: 54, f: 22,
      tags: ['经典', '肉馅'], nutrition: '猪肉大葱，肥瘦相间脂肪位高', tip: '经典款，配醋碟别配红油' },
    { id: 731, name: '红油抄手（1份约10只）', emoji: '🌶️', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 300, cal: 520, p: 20, c: 48, f: 27,
      tags: ['红油', '抄手'], nutrition: '红油拌抄手，油是热量主力', tip: '红油少放一半，直接省 100' },
    { id: 732, name: '酸汤水饺（1份约10只）', emoji: '🍜', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 330, cal: 480, p: 22, c: 60, f: 17,
      tags: ['酸汤', '开胃'], nutrition: '酸汤底水饺，开胃顺口', tip: '汤底咸酸，汤别喝太多' },
    { id: 733, name: '香菇鲜肉饺（1份约10只）', emoji: '🍄', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 320, cal: 440, p: 19, c: 59, f: 14,
      tags: ['香菇', '肉馅'], nutrition: '香菇提香配鲜肉', tip: '肉馅位里相对清爽' },
    { id: 734, name: '虫草花鲜肉云吞（1份约10只）', emoji: '🌼', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 300, cal: 450, p: 21, c: 51, f: 18,
      tags: ['虫草花', '云吞'], nutrition: '虫草花配鲜肉馅，风味清雅', tip: '与鲜肉云吞热量相近，换口味用' },
    { id: 735, name: '白菜猪肉饺（1份约10只）', emoji: '🥬', category: 'home', brand: 'yuanji', unit: '份', measure: 'count', grams: 320, cal: 430, p: 18, c: 60, f: 13,
      tags: ['白菜', '家常'], nutrition: '白菜猪肉经典搭配', tip: '水分多更清爽，配清汤' },
    { id: 736, name: '云吞面（1碗）', emoji: '🍜', category: 'home', brand: 'yuanji', unit: '碗', measure: 'count', grams: 400, cal: 400, p: 18, c: 58, f: 10,
      tags: ['汤面', '云吞'], nutrition: '云吞配细面，一餐主食位', tip: '面量可减半，云吞优先吃' },

    /* ================= 绿茶餐厅 🍞 ================= */
    { id: 737, name: '面包诱惑（1份）', emoji: '🍞', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 350, cal: 680, p: 10, c: 96, f: 28,
      tags: ['招牌', '甜品'], nutrition: '招牌：蜂蜜面包块配冰淇淋，糖油炸弹', tip: '全场高危，三人分着吃' },
    { id: 738, name: '绿茶烤鸡（半只）', emoji: '🍗', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 380, cal: 620, p: 42, c: 12, f: 45,
      tags: ['招牌', '烤鸡'], nutrition: '招牌烤鸡，皮脆油多蛋白足', tip: '去皮减约 150 kcal' },
    { id: 739, name: '东坡仔排（1份）', emoji: '🍖', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 300, cal: 560, p: 26, c: 44, f: 31,
      tags: ['排骨', '浓油赤酱'], nutrition: '甜咸口仔排，酱汁裹油裹糖', tip: '配碗清汤，米饭减半' },
    { id: 740, name: '糖醋排骨（1份）', emoji: '🍬', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 280, cal: 540, p: 24, c: 67, f: 19,
      tags: ['酸甜', '排骨'], nutrition: '糖醋挂汁，碳水位突出', tip: '酸甜口最下饭，也最容易吃过量' },
    { id: 741, name: '石锅豆腐（1份）', emoji: '🥘', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 300, cal: 330, p: 16, c: 18, f: 22,
      tags: ['豆腐', '石锅'], nutrition: '石锅焖豆腐，锅气足油不少', tip: '豆腐本身低卡，石锅油是变量' },
    { id: 742, name: '龙井虾仁（1份）', emoji: '🍤', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 250, cal: 280, p: 24, c: 8, f: 17,
      tags: ['杭帮', '虾仁'], nutrition: '龙井茶香配虾仁，清爽高蛋白', tip: '本店最优解之一' },
    { id: 743, name: '三杯鸡（1份）', emoji: '🍗', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 300, cal: 520, p: 30, c: 20, f: 35,
      tags: ['九层塔', '鸡'], nutrition: '一杯米酒一杯油一杯酱，油重', tip: '鸡肉位高危，去汁更稳' },
    { id: 744, name: '台式卤肉饭（1碗）', emoji: '🍚', category: 'home', brand: 'greentea', unit: '碗', measure: 'count', grams: 320, cal: 480, p: 16, c: 68, f: 16,
      tags: ['卤肉', '盖饭'], nutrition: '卤肉盖饭，一餐主食位', tip: '肉汁少拌，饭留一半' },
    { id: 745, name: '蒜蓉粉丝娃娃菜（1份）', emoji: '🥬', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 280, cal: 210, p: 5, c: 30, f: 8,
      tags: ['蔬菜', '粉丝'], nutrition: '蒜蓉配娃娃菜粉丝，纤维担当', tip: '粉丝算主食，米饭可省' },
    { id: 746, name: '红豆圆子（1份）', emoji: '🍡', category: 'home', brand: 'greentea', unit: '份', measure: 'count', grams: 250, cal: 320, p: 6, c: 63, f: 5,
      tags: ['甜品', '红豆'], nutrition: '红豆糯米圆子甜羹', tip: '当甜品算，别再点主食' },

    /* ================= 泸溪河 🥮 ================= */
    { id: 747, name: '原味桃酥（1块）', emoji: '🍪', category: 'bake', brand: 'lu', unit: '块', measure: 'count', grams: 55, cal: 240, p: 3, c: 30, f: 12,
      tags: ['招牌', '桃酥'], nutrition: '招牌桃酥，疏松起酥油是主力', tip: '一块解馋，罐装别端着吃' },
    { id: 748, name: '鲜奶泡芙（1个）', emoji: '🧁', category: 'bake', brand: 'lu', unit: '个', measure: 'count', grams: 45, cal: 150, p: 3, c: 16, f: 8,
      tags: ['招牌', '泡芙'], nutrition: '脆皮泡芙填鲜奶卡仕达', tip: '个头小，3 个就超一份甜品' },
    { id: 749, name: '蛋黄酥（1个）', emoji: '🥮', category: 'bake', brand: 'lu', unit: '个', measure: 'count', grams: 65, cal: 290, p: 7, c: 35, f: 14,
      tags: ['酥皮', '咸蛋黄'], nutrition: '酥皮裹咸蛋黄红豆沙', tip: '中式点心高危位，一个封顶' },
    { id: 750, name: '鲜奶麻薯（1盒）', emoji: '🍡', category: 'bake', brand: 'lu', unit: '盒', measure: 'count', grams: 130, cal: 300, p: 6, c: 50, f: 8,
      tags: ['麻薯', '软糯'], nutrition: '鲜奶麻薯，软糯碳水位', tip: '看着小，糯米密度很高' },
    { id: 751, name: '绿豆糕（1盒4块）', emoji: '🟩', category: 'bake', brand: 'lu', unit: '盒', measure: 'count', grams: 120, cal: 330, p: 6, c: 56, f: 9,
      tags: ['绿豆', '传统'], nutrition: '绿豆糕，油糖含量不低', tip: '清爽是错觉，4 块 ≈ 一碗饭' },
    { id: 752, name: '桂花糕（1块）', emoji: '🌼', category: 'bake', brand: 'lu', unit: '块', measure: 'count', grams: 70, cal: 210, p: 4, c: 42, f: 3,
      tags: ['桂花', '米糕'], nutrition: '桂花米糕，糖渍桂花提香', tip: '碳水为主，配无糖茶' },
    { id: 753, name: '肉松小贝（1个）', emoji: '🍰', category: 'bake', brand: 'lu', unit: '个', measure: 'count', grams: 75, cal: 280, p: 9, c: 34, f: 12,
      tags: ['肉松', '蛋糕'], nutrition: '蛋糕体裹沙拉酱与肉松', tip: '咸香口更易停不下来，1-2 个封顶' },
    { id: 754, name: '老婆饼（1个）', emoji: '🥮', category: 'bake', brand: 'lu', unit: '个', measure: 'count', grams: 55, cal: 230, p: 4, c: 36, f: 8,
      tags: ['酥皮', '冬瓜糖'], nutrition: '老婆饼，糖冬瓜馅偏甜', tip: '传统点心里中位选择' },
    { id: 755, name: '蝴蝶酥（1个）', emoji: '🦋', category: 'bake', brand: 'lu', unit: '个', measure: 'count', grams: 60, cal: 260, p: 4, c: 38, f: 10,
      tags: ['酥皮', '焦糖'], nutrition: '焦糖蝴蝶酥，层层起酥', tip: '黄油+焦糖，配黑咖啡' },
    { id: 756, name: '全麦吐司（1袋4片）', emoji: '🍞', category: 'bake', brand: 'lu', unit: '袋', measure: 'count', grams: 160, cal: 360, p: 10, c: 66, f: 6,
      tags: ['吐司', '全麦'], nutrition: '全麦吐司一袋 4 片', tip: '当主食分装，别整袋炫' },

    /* ================= 海底捞 🫕 ================= */
    { id: 757, name: '番茄锅底（1锅）', emoji: '🍅', category: 'hotpot', brand: 'haidilao', unit: '锅', measure: 'count', grams: 1500, cal: 600, p: 10, c: 60, f: 35,
      tags: ['锅底', '番茄'], nutrition: '番茄锅底一锅，油与糖都在汤里', tip: '2-4 人共享，人均约 200-300' },
    { id: 758, name: '麻酱小料（1碟）', emoji: '🫙', category: 'hotpot', brand: 'haidilao', unit: '碟', measure: 'count', grams: 80, cal: 260, p: 8, c: 18, f: 17,
      tags: ['小料', '麻酱'], nutrition: '芝麻酱碟，小料台热量大头', tip: '半碟起步，或改海鲜酱油碟' },
    { id: 759, name: '香油蒜泥碟（1碟）', emoji: '🧄', category: 'hotpot', brand: 'haidilao', unit: '碟', measure: 'count', grams: 70, cal: 220, p: 2, c: 6, f: 21,
      tags: ['小料', '香油'], nutrition: '香油打底，纯脂肪碟', tip: '香油碟 ≈ 喝油，蒜泥醋碟更轻' },
    { id: 760, name: '捞派脆脆毛肚（1份）', emoji: '🐂', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 150, cal: 110, p: 14, c: 4, f: 5,
      tags: ['招牌', '毛肚'], nutrition: '招牌毛肚，高蛋白低脂', tip: '七上八下涮着吃，本场优选' },
    { id: 761, name: '手打虾滑（1份）', emoji: '🦐', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 180, cal: 180, p: 18, c: 8, f: 9,
      tags: ['虾滑', '蛋白'], nutrition: '手打虾滑，蛋白位扎实', tip: '丸滑类里的优等生' },
    { id: 762, name: '肥牛卷（1份）', emoji: '🥩', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 200, cal: 350, p: 20, c: 6, f: 27,
      tags: ['肥牛', '肉类'], nutrition: '肥牛卷脂肪位高', tip: '涮掉浮沫，油碟改酱油碟' },
    { id: 763, name: '酥肉（1份）', emoji: '🍖', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 180, cal: 430, p: 18, c: 20, f: 31,
      tags: ['炸物', '小酥肉'], nutrition: '椒盐小酥肉，复炸吸油', tip: '直接吃最香也最油，涮着吃反而低' },
    { id: 764, name: '冰粉（1碗）', emoji: '🍧', category: 'hotpot', brand: 'haidilao', unit: '碗', measure: 'count', grams: 250, cal: 180, p: 2, c: 39, f: 2,
      tags: ['甜品', '解辣'], nutrition: '红糖冰粉，解辣但糖不低', tip: '红糖水少搅两下' },
    { id: 765, name: '手工抻面（1份）', emoji: '🍜', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 250, cal: 330, p: 9, c: 67, f: 3,
      tags: ['主食', '抻面'], nutrition: '表演抻面，纯主食位', tip: '下在番茄锅会更吸油，清汤为宜' },
    { id: 766, name: '蔬菜拼盘（1份）', emoji: '🥬', category: 'hotpot', brand: 'haidilao', unit: '份', measure: 'count', grams: 350, cal: 120, p: 5, c: 16, f: 4,
      tags: ['蔬菜', '拼盘'], nutrition: '时蔬拼盘，纤维担当', tip: '先下蔬菜垫底，总量自然降' },
];

/* 更新日期：本批次统一标注（批次 1 保持 2026-09-26、批次 2-5 保持 2026-09-29、批次 6 保持 2026-10-08 不变） */
BRAND_FOODS_BATCH7.forEach(f => { f.updated = '2026-10-08'; });
BRAND_FOODS.push(...BRAND_FOODS_BATCH7);
