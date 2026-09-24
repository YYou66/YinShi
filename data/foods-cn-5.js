/* ==========================================================
 * 饮食热量记录站 · 全国饮食库 批次 5（大陆收官）：西南 + 西北
 * ----------------------------------------------------------
 *  - 重庆 / 四川 / 贵州 / 云南 / 西藏（西南）· 陕西 / 甘肃 / 青海 / 宁夏 / 新疆（西北），各 6 道
 *  - 末尾 push 进 CN_FOODS；id 从 345 起，不可与已有批次冲突
 *  - 字段与 FOODS 完全兼容；region（大区）/ province（省份）
 *  - 所有数值均为估算值，仅供个人减脂参考，不构成医疗建议
 * ========================================================== */

const CN_FOODS4 = [
    /* ================= 重庆（西南） ================= */
    { id: 345, name: '重庆小面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 420, p: 14, c: 56, f: 15,
      region: '西南', province: '重庆', tags: ['麻辣', '碱面'], nutrition: '佐料是灵魂，辣油花椒管够', tip: '少辣少油是点单潜规则' },
    { id: 346, name: '重庆火锅（一人份）', emoji: '🍲', category: 'hotpot', unit: '份', measure: 'count', grams: 450, cal: 480, p: 28, c: 12, f: 36,
      region: '西南', province: '重庆', tags: ['牛油', '红汤'], nutrition: '牛油九宫格，烫菜涮肉一锅端', tip: '人多吃油多，多烫素菜少吃酥肉' },
    { id: 347, name: '酸辣粉', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 350, cal: 380, p: 10, c: 58, f: 12,
      region: '西南', province: '重庆', tags: ['红薯粉', '酸辣'], nutrition: '红薯粉配酸辣汤，开胃上头', tip: '粉条吸油，汤别喝光' },
    { id: 348, name: '南山泉水鸡', emoji: '🐔', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 420, p: 28, c: 10, f: 30,
      region: '西南', province: '重庆', tags: ['麻辣', '干烧'], nutrition: '泉水煮后麻辣干烧，肉质嫩', tip: '重庆人聚餐标配，配青菜' },
    { id: 349, name: '万州烤鱼', emoji: '🐟', category: 'home', unit: '份', measure: 'count', grams: 500, cal: 520, p: 34, c: 10, f: 38,
      region: '西南', province: '重庆', tags: ['烤鱼', '红油'], nutrition: '整鱼烤后泼红油，配菜吸油', tip: '鱼肉是蛋白主力，红油少拌菜' },
    { id: 350, name: '山城冰汤圆', emoji: '🍧', category: 'bake', unit: '碗', measure: 'count', grams: 250, cal: 200, p: 3, c: 42, f: 3,
      region: '西南', province: '重庆', tags: ['甜品', '冰镇'], nutrition: '小汤圆配醪糟冰沙', tip: '火锅后的降温仪式' },

    /* ================= 四川（西南） ================= */
    { id: 351, name: '钵钵鸡（冷串 10 串）', emoji: '🍢', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 260, p: 18, c: 10, f: 17,
      region: '西南', province: '四川', tags: ['冷串', '藤椒'], nutrition: '冷泡藤椒红油，荤素皆可串', tip: '乐山名场面，素串更划算' },
    { id: 352, name: '宜宾燃面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 430, p: 15, c: 56, f: 17,
      region: '西南', province: '四川', tags: ['干拌', '芽菜'], nutrition: '干拌面配芽菜碎米芽，油润', tip: '燃面靠油燃，少油更清爽' },
    { id: 353, name: '冒菜（一人份）', emoji: '🍲', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 320, p: 20, c: 18, f: 20,
      region: '西南', province: '四川', tags: ['麻辣烫', '下饭'], nutrition: '北派麻辣烫，荤素同冒', tip: '少点丸子油条，多点豆制品蔬菜' },
    { id: 354, name: '跷脚牛肉', emoji: '🍲', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 320, p: 28, c: 4, f: 20,
      region: '西南', province: '四川', tags: ['清汤', '乐山'], nutrition: '牛骨清汤涮牛肉，原汤化原食', tip: '乐山必吃，清汤牛肉热量可控' },
    { id: 355, name: '三大炮', emoji: '🍡', category: 'street', unit: '份', measure: 'count', grams: 150, cal: 260, p: 4, c: 52, f: 5,
      region: '西南', province: '四川', tags: ['糯米', '红糖'], nutrition: '糯米团裹豆面红糖，咚咚三响', tip: '锦里小吃，两三颗就够' },
    { id: 356, name: '甜水面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 300, cal: 350, p: 9, c: 60, f: 9,
      region: '西南', province: '四川', tags: ['甜辣', '粗面'], nutrition: '筷子粗面拌甜辣酱', tip: '酱汁浓稠，别拌米饭' },

    /* ================= 贵州（西南） ================= */
    { id: 357, name: '贵阳肠旺面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 430, p: 16, c: 54, f: 17,
      region: '西南', province: '贵州', tags: ['肠旺', '红油'], nutrition: '肥肠血旺脆哨面，红油鲜香', tip: '贵阳早餐霸主，脆哨少加' },
    { id: 358, name: '凯里酸汤鱼', emoji: '🐟', category: 'home', unit: '份', measure: 'count', grams: 450, cal: 320, p: 30, c: 10, f: 18,
      region: '西南', province: '贵州', tags: ['酸汤', '鲜鱼'], nutrition: '红酸汤煮鱼，酸辣开胃低负担', tip: '汤开胃，鱼肉是蛋白主力' },
    { id: 359, name: '丝娃娃', emoji: '🥗', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 180, p: 6, c: 28, f: 5,
      region: '西南', province: '贵州', tags: ['素菜', '卷饼'], nutrition: '薄饼卷十几种素菜，蘸酸汤', tip: '贵阳春季限定，低卡友好' },
    { id: 360, name: '花溪牛肉粉', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 380, p: 18, c: 52, f: 12,
      region: '西南', province: '贵州', tags: ['牛肉粉', '清汤'], nutrition: '黄牛肉清汤粉，鲜香', tip: '加酸菜更清爽' },
    { id: 361, name: '贵州辣子鸡（糍粑辣椒）', emoji: '🍗', category: 'home', unit: '份', measure: 'count', grams: 350, cal: 420, p: 30, c: 10, f: 28,
      region: '西南', province: '贵州', tags: ['糍粑辣椒', '香辣'], nutrition: '糍粑辣椒炒鸡块，香而不燥', tip: '和川式辣子鸡是两种哲学' },
    { id: 362, name: '豆腐圆子', emoji: '🧆', category: 'street', unit: '份', measure: 'count', grams: 200, cal: 260, p: 10, c: 24, f: 14,
      region: '西南', province: '贵州', tags: ['豆制品', '炸物'], nutrition: '豆腐捏圆油炸，外脆内嫩', tip: '蘸折耳根蘸水，别配主食' },

    /* ================= 云南（西南） ================= */
    { id: 363, name: '过桥米线', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 500, cal: 420, p: 18, c: 58, f: 13,
      region: '西南', province: '云南', tags: ['米线', '滚汤'], nutrition: '滚汤烫熟荤素配料，仪式感拉满', tip: '汤滚油厚，喝一半即可' },
    { id: 364, name: '云南汽锅鸡', emoji: '🐔', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 300, p: 30, c: 4, f: 18,
      region: '西南', province: '云南', tags: ['汽锅', '原汁'], nutrition: '蒸汽凝汤，原汁原味少油', tip: '建水汽锅鸡，高蛋白低负担' },
    { id: 365, name: '鲜花饼（1个）', emoji: '🌸', category: 'bake', unit: '个', measure: 'count', grams: 60, cal: 180, p: 3, c: 30, f: 6,
      region: '西南', province: '云南', tags: ['玫瑰', '酥饼'], nutrition: '玫瑰花酱酥皮饼，甜香', tip: '云南伴手礼，一两个配茶' },
    { id: 366, name: '云南小锅米线', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 380, p: 12, c: 58, f: 11,
      region: '西南', province: '云南', tags: ['小锅', '酸辣'], nutrition: '小铜锅现煮，酱香浓郁', tip: '比过桥更接地气的日常' },
    { id: 367, name: '舂鸡脚（傣味）', emoji: '🍗', category: 'street', unit: '份', measure: 'count', grams: 200, cal: 200, p: 16, c: 10, f: 12,
      region: '西南', province: '云南', tags: ['傣味', '酸辣'], nutrition: '木瓜柠檬辣椒舂鸡脚，酸辣弹牙', tip: '西双版纳夜市担当，低脂零食' },
    { id: 368, name: '烤乳扇', emoji: '🫓', category: 'street', unit: '份', measure: 'count', grams: 100, cal: 250, p: 9, c: 28, f: 11,
      region: '西南', province: '云南', tags: ['奶制品', '烤制'], nutrition: '大理牛奶皮卷炭火烤', tip: '奶香浓郁，撒糖或不撒' },

    /* ================= 西藏（西南） ================= */
    { id: 369, name: '藏面（牛肉面）', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 300, cal: 300, p: 14, c: 48, f: 6,
      region: '西南', province: '西藏', tags: ['藏式', '牛肉'], nutrition: '青稞或小麦面配牦牛肉汤', tip: '拉萨晨食，汤清肉香' },
    { id: 370, name: '酥油茶', emoji: '🥛', category: 'drink', unit: '杯', measure: 'count', grams: 300, cal: 200, p: 3, c: 10, f: 17,
      region: '西南', province: '西藏', tags: ['酥油', '砖茶'], nutrition: '酥油砖茶盐打制，能量密度高', tip: '高原能量补给，别当水喝' },
    { id: 371, name: '糌粑', emoji: '🫓', category: 'breakfast', unit: '份', measure: 'count', grams: 150, cal: 280, p: 8, c: 52, f: 5,
      region: '西南', province: '西藏', tags: ['青稞', '炒面'], nutrition: '青稞炒面拌酥油茶，抗饿', tip: '藏民主食，一小碗顶半天' },
    { id: 372, name: '牦牛肉干', emoji: '🥩', category: 'street', unit: '份', measure: 'count', grams: 50, cal: 150, p: 20, c: 2, f: 7,
      region: '西南', province: '西藏', tags: ['风干', '高蛋白'], nutrition: '牦牛肉风干，蛋白质密度高', tip: '耐嚼顶饱，注意钠含量' },
    { id: 373, name: '甜茶（藏式奶茶）', emoji: '🥛', category: 'drink', unit: '杯', measure: 'count', grams: 300, cal: 200, p: 4, c: 24, f: 9,
      region: '西南', province: '西藏', tags: ['甜茶', '奶茶'], nutrition: '红茶奶粉白糖熬煮', tip: '拉萨甜茶馆慢生活标配' },
    { id: 374, name: '藏包子（牛肉馅）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 200, cal: 280, p: 12, c: 36, f: 9,
      region: '西南', province: '西藏', tags: ['蒸包', '牛肉'], nutrition: '牦牛肉馅蒸包，皮薄多汁', tip: '配酥油茶正合适' },

    /* ================= 陕西（西北） ================= */
    { id: 375, name: '肉夹馍', emoji: '🫓', category: 'home', unit: '个', measure: 'count', grams: 200, cal: 380, p: 16, c: 40, f: 18,
      region: '西北', province: '陕西', tags: ['白吉馍', '腊汁肉'], nutrition: '腊汁肉夹白吉馍，肥瘦自己挑', tip: '选纯瘦，馍别浸油汤' },
    { id: 376, name: 'biangbiang面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 420, p: 14, c: 62, f: 12,
      region: '西北', province: '陕西', tags: ['宽面', '油泼'], nutrition: '裤带宽面油泼辣子，麦香足', tip: '油泼是灵魂也是油' },
    { id: 377, name: '羊肉泡馍', emoji: '🫓', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 480, p: 22, c: 56, f: 19,
      region: '西北', province: '陕西', tags: ['馍掰', '羊汤'], nutrition: '手掰馍煮羊肉汤，管饱暖身', tip: '掰小馍粒更入味，汤别喝光' },
    { id: 378, name: '西安凉皮', emoji: '🍜', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 260, p: 6, c: 46, f: 6,
      region: '西北', province: '陕西', tags: ['凉皮', '酸辣'], nutrition: '米皮凉拌油泼辣子，爽口', tip: '夏天首选，辣油适量' },
    { id: 379, name: '葫芦头泡馍', emoji: '🍲', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 460, p: 18, c: 52, f: 20,
      region: '西北', province: '陕西', tags: ['大肠', '肥汤'], nutrition: '猪大肠肥汤泡馍，老滋味', tip: '油脂大户，偶尔解馋' },
    { id: 380, name: '岐山臊子面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 350, cal: 380, p: 14, c: 58, f: 11,
      region: '西北', province: '陕西', tags: ['臊子', '酸辣'], nutrition: '酸辣臊子汤面，一碗接一碗', tip: '汤酸开胃，面是碳水主力' },

    /* ================= 甘肃（西北） ================= */
    { id: 381, name: '兰州牛肉面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 380, p: 18, c: 56, f: 10,
      region: '西北', province: '甘肃', tags: ['清汤', '牛面'], nutrition: '一清二白三红四绿五黄，牛肉面标准', tip: '多加青菜萝卜，少红油' },
    { id: 382, name: '天水呱呱', emoji: '🫓', category: 'street', unit: '份', measure: 'count', grams: 200, cal: 240, p: 5, c: 40, f: 7,
      region: '西北', province: '甘肃', tags: ['荞麦', '凉拌'], nutrition: '荞麦糊凝块拌辣油，天水名片', tip: '西北凉粉类低负担小吃' },
    { id: 383, name: '甘肃酿皮', emoji: '🍜', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 280, p: 6, c: 48, f: 7,
      region: '西北', province: '甘肃', tags: ['酿皮', '酸辣'], nutrition: '面粉洗出面筋蒸皮，Q弹', tip: '夏日消暑，麻酱少刷' },
    { id: 384, name: '牛奶鸡蛋醪糟', emoji: '🥣', category: 'drink', unit: '碗', measure: 'count', grams: 300, cal: 220, p: 6, c: 32, f: 7,
      region: '西北', province: '甘肃', tags: ['醪糟', '牛奶'], nutrition: '牛奶鸡蛋醪糟葡萄干，热饮', tip: '兰州夜市当红甜汤' },
    { id: 385, name: '羊肉面片', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 400, p: 18, c: 54, f: 13,
      region: '西北', province: '甘肃', tags: ['面片', '羊汤'], nutrition: '揪面片配羊肉汤，西北家常', tip: '汤宽面窄，暖和顶饱' },
    { id: 386, name: '敦煌驴肉黄面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 420, p: 18, c: 58, f: 13,
      region: '西北', province: '甘肃', tags: ['黄面', '驴肉'], nutrition: '黄面拌驴肉臊，敦煌特色', tip: '到了敦煌才吃得到的讲究' },

    /* ================= 青海（西北） ================= */
    { id: 387, name: '尕面片', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 400, p: 16, c: 58, f: 11,
      region: '西北', province: '青海', tags: ['面片', '牛汤'], nutrition: '手工揪面片配牛羊肉汤', tip: '青海日常主食' },
    { id: 388, name: '青海老酸奶', emoji: '🥛', category: 'drink', unit: '杯', measure: 'count', grams: 200, cal: 180, p: 5, c: 26, f: 6,
      region: '西北', province: '青海', tags: ['酸奶', '浓稠'], nutrition: '牦牛酸奶表层黄油皮，酸浓', tip: '原味更健康，加糖可选' },
    { id: 389, name: '狗浇尿油饼', emoji: '🫓', category: 'bake', unit: '份', measure: 'count', grams: 100, cal: 260, p: 4, c: 34, f: 12,
      region: '西北', province: '青海', tags: ['油饼', '土族'], nutrition: '薄饼浇油烙制，名字接地气', tip: '青海湖沿线早餐，量少多油' },
    { id: 390, name: '青稞甜醅', emoji: '🥣', category: 'drink', unit: '碗', measure: 'count', grams: 300, cal: 220, p: 5, c: 44, f: 2,
      region: '西北', province: '青海', tags: ['青稞', '发酵'], nutrition: '青稞发酵甜醅，酒香清甜', tip: '高原清凉饮品' },
    { id: 391, name: '青海杂碎汤', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 350, cal: 280, p: 18, c: 10, f: 19,
      region: '西北', province: '青海', tags: ['羊杂', '暖身'], nutrition: '羊杂汤清晨一碗，抗寒', tip: '撇浮油，肉碎都吃掉' },
    { id: 392, name: '青海酿皮（高原版）', emoji: '🍜', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 280, p: 6, c: 48, f: 7,
      region: '西北', province: '青海', tags: ['酿皮', '辣油'], nutrition: '高原水洗面皮更筋道', tip: '和兰州酿皮同宗，口味自选' },

    /* ================= 宁夏（西北） ================= */
    { id: 393, name: '吴忠羊杂碎', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 350, cal: 320, p: 20, c: 8, f: 24,
      region: '西北', province: '宁夏', tags: ['羊杂', '红油'], nutrition: '羊杂汤卧红油，宁夏晨间排行第一', tip: '暖胃但不低卡，配饼少吃' },
    { id: 394, name: '宁夏烩小吃', emoji: '🍲', category: 'home', unit: '份', measure: 'count', grams: 350, cal: 300, p: 16, c: 22, f: 16,
      region: '西北', province: '宁夏', tags: ['烩菜', '多料'], nutrition: '夹板丸子粉条菜一锅烩', tip: '荤素一锅，米饭减半' },
    { id: 395, name: '八宝茶（盖碗）', emoji: '🍵', category: 'drink', unit: '杯', measure: 'count', grams: 300, cal: 120, p: 2, c: 26, f: 2,
      region: '西北', province: '宁夏', tags: ['盖碗茶', '果干'], nutrition: '枸杞桂圆红枣冰糖盖碗茶', tip: '糖在碗底，不搅不喝更健康' },
    { id: 396, name: '银川烤全羊（一份）', emoji: '🍖', category: 'home', unit: '份', measure: 'count', grams: 250, cal: 380, p: 30, c: 2, f: 27,
      region: '西北', province: '宁夏', tags: ['烤全羊', '宴客'], nutrition: '滩羊烤制焦香，油脂丰富', tip: '宴席硬菜，挑瘦吃' },
    { id: 397, name: '固原搅团', emoji: '🫓', category: 'street', unit: '份', measure: 'count', grams: 250, cal: 280, p: 6, c: 48, f: 8,
      region: '西北', province: '宁夏', tags: ['荞面', '搅团'], nutrition: '荞面糊搅成团配蘸汁', tip: '西北杂粮智慧，配酸菜汁' },
    { id: 398, name: '黄河鲤鱼（红烧）', emoji: '🐟', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 380, p: 28, c: 8, f: 26,
      region: '西北', province: '宁夏', tags: ['河鱼', '红烧'], nutrition: '黄河鲤鱼肉嫩，红烧入味', tip: '鱼肉蛋白好，汁少拌饭' },

    /* ================= 新疆（西北） ================= */
    { id: 399, name: '新疆大盘鸡', emoji: '🍲', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 480, p: 26, c: 40, f: 24,
      region: '西北', province: '新疆', tags: ['大盘鸡', '皮带面'], nutrition: '鸡块土豆皮带面，量大管饱', tip: '皮带面吸汁热量高，面少量' },
    { id: 400, name: '过油肉拌面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 480, p: 18, c: 58, f: 20,
      region: '西北', province: '新疆', tags: ['拌面', '拉条子'], nutrition: '拉条子过油肉配菜，油润', tip: '加面是新疆人的倔强，克制' },
    { id: 401, name: '烤包子（馕坑）', emoji: '🫓', category: 'street', unit: '个', measure: 'count', grams: 150, cal: 300, p: 10, c: 36, f: 13,
      region: '西北', province: '新疆', tags: ['馕坑', '羊肉'], nutrition: '馕坑烤羊肉馅包子，皮脆', tip: '两个解馋，配酸奶' },
    { id: 402, name: '羊肉串（大串2支）', emoji: '🍢', category: 'street', unit: '份', measure: 'count', grams: 120, cal: 240, p: 18, c: 2, f: 18,
      region: '西北', province: '新疆', tags: ['红柳', '炭烤'], nutrition: '红柳枝烤羊肉，孜然辣椒面', tip: '新疆标配，挑瘦串' },
    { id: 403, name: '羊肉抓饭', emoji: '🍚', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 480, p: 18, c: 56, f: 21,
      region: '西北', province: '新疆', tags: ['抓饭', '羊油'], nutrition: '胡萝卜黄萝卜羊油焖饭', tip: '胡萝卜管够，米饭偷着长' },
    { id: 404, name: '新疆酸奶（加糖）', emoji: '🥛', category: 'drink', unit: '杯', measure: 'count', grams: 250, cal: 200, p: 5, c: 28, f: 7,
      region: '西北', province: '新疆', tags: ['酸奶', '浓稠'], nutrition: '牧场酸奶加白砂糖', tip: '选无糖更友好' },
];

/* 合并进全国主库 */
CN_FOODS.push(...CN_FOODS4);