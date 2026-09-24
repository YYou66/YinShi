/* ==========================================================
 * 饮食热量记录站 · 全国饮食库 批次 3：东北 + 华东
 * ----------------------------------------------------------
 *  - 黑龙江 / 吉林 / 辽宁（东北） · 上海 / 江苏 / 浙江 / 安徽 / 福建 / 江西 / 山东（华东），各 6 道
 *  - 本文件末尾将该批数据 push 进 CN_FOODS（全国主库），合并后 id 不可与批次 2 冲突
 *  - 字段与 FOODS 完全兼容；region（大区）/ province（省份）
 *  - 所有数值均为估算值，仅供个人减脂参考，不构成医疗建议
 * ========================================================== */

const CN_FOODS2 = [
    /* ================= 黑龙江（东北） ================= */
    { id: 225, name: '锅包肉', emoji: '🍖', category: 'home', unit: '份', measure: 'count', grams: 300, cal: 520, p: 28, c: 38, f: 30,
      region: '东北', province: '黑龙江', tags: ['酸甜', '炸物'], nutrition: '里脊肉片裹淀粉油炸再裹糖醋汁，酥脆是油给的', tip: '哈尔滨扛把子，酥壳刮掉糖醋汁更省' },
    { id: 226, name: '小鸡炖蘑菇', emoji: '🍗', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 380, p: 32, c: 12, f: 24,
      region: '东北', province: '黑龙江', tags: ['炖菜', '榛蘑'], nutrition: '笨鸡配榛蘑粉条，汤浓肉烂', tip: '汤泡饭是双倍热量，吃肉喝清汤更聪明' },
    { id: 227, name: '杀猪菜', emoji: '🍲', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 420, p: 24, c: 14, f: 30,
      region: '东北', province: '黑龙江', tags: ['血肠', '酸菜'], nutrition: '酸菜白肉血肠一锅烩，油脂含量高', tip: '多吃酸菜少碰肥肉，蘸蒜泥别蘸油' },
    { id: 228, name: '哈尔滨红肠', emoji: '🥖', category: 'street', unit: '根', measure: 'count', grams: 150, cal: 380, p: 15, c: 8, f: 33,
      region: '东北', province: '黑龙江', tags: ['烟熏', '肉肠'], nutrition: '猪肉烟熏灌肠，脂肪与钠都不低', tip: '切片当零食定量，别配啤酒整根吃' },
    { id: 229, name: '马迭尔冰棍', emoji: '🍦', category: 'bake', unit: '根', measure: 'count', grams: 50, cal: 90, p: 1, c: 11, f: 5,
      region: '东北', province: '黑龙江', tags: ['冰品', '奶香'], nutrition: '百年老字号冰棍，奶料扎实', tip: '中央大街人手一支，减脂期偶一为之' },
    { id: 230, name: '酸菜炖粉条', emoji: '🍲', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 300, p: 12, c: 30, f: 16,
      region: '东北', province: '黑龙江', tags: ['酸爽', '炖菜'], nutrition: '酸菜猪肉粉条，咸香下饭', tip: '当主菜配糙米饭更均衡' },

    /* ================= 吉林（东北） ================= */
    { id: 231, name: '延边冷面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 350, p: 12, c: 66, f: 6,
      region: '东北', province: '吉林', tags: ['荞麦', '冰凉'], nutrition: '荞麦面冷汤加黄瓜鸡蛋，清爽低脂', tip: '夏日降温神器，比热汤面热量更友好' },
    { id: 232, name: '猪肉炖粉条', emoji: '🍲', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 430, p: 20, c: 36, f: 24,
      region: '东北', province: '吉林', tags: ['炖菜', '经典'], nutrition: '五花肉白菜粉条慢炖，抗寒硬菜', tip: '粉条吸油，少油版更好' },
    { id: 233, name: '朝鲜族打糕', emoji: '🍡', category: 'bake', unit: '份', measure: 'count', grams: 200, cal: 300, p: 4, c: 60, f: 4,
      region: '东北', province: '吉林', tags: ['糯米', '年糕'], nutrition: '糯米蒸捶成糕蘸豆面，碳水担当', tip: '两三块足矣，当主食别当零食' },
    { id: 234, name: '延边烧烤（羊肉串10串）', emoji: '🍢', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 420, p: 30, c: 6, f: 30,
      region: '东北', province: '吉林', tags: ['烧烤', '孜然'], nutrition: '炭火羊肉串，油脂碳化香', tip: '挑瘦肉串，配黄瓜条解腻' },
    { id: 235, name: '吉林煎粉', emoji: '🫓', category: 'street', unit: '份', measure: 'count', grams: 250, cal: 300, p: 3, c: 48, f: 10,
      region: '东北', province: '吉林', tags: ['土豆粉', '油煎'], nutrition: '土豆粉坨煎至两面金黄，口感Q弹', tip: '当主食吃，配拌菜更均衡' },
    { id: 236, name: '查干湖炖胖头鱼', emoji: '🐟', category: 'home', unit: '份', measure: 'count', grams: 400, cal: 400, p: 30, c: 6, f: 28,
      region: '东北', province: '吉林', tags: ['炖鱼', '冬捕'], nutrition: '胖头鱼炖豆腐粉条，冬捕名场面', tip: '鱼肉蛋白优秀，鱼汤油大少喝' },

    /* ================= 辽宁（东北） ================= */
    { id: 237, name: '老边饺子（10个）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 500, cal: 650, p: 24, c: 72, f: 30,
      region: '东北', province: '辽宁', tags: ['蒸饺', '老字号'], nutrition: '煸馅蒸饺皮薄馅大，一斤热量不低', tip: '七八个就够，配蒜泥醋' },
    { id: 238, name: '沈阳烤鸡架', emoji: '🍗', category: 'street', unit: '份', measure: 'count', grams: 400, cal: 400, p: 36, c: 0, f: 28,
      region: '东北', province: '辽宁', tags: ['熏烤', '夜宵'], nutrition: '鸡架骨多肉少，啃的是香味', tip: '沈阳夜宵灵魂，配冰啤酒热量翻倍' },
    { id: 239, name: '大连海鲜焖子', emoji: '🍲', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 260, p: 12, c: 30, f: 10,
      region: '东北', province: '辽宁', tags: ['地瓜粉', '海鲜'], nutrition: '地瓜粉煎块配海鲜蔬菜，鲜香软糯', tip: '当主食吃，海鲜多夹点' },
    { id: 240, name: '鲅鱼饺子（8个）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 400, cal: 420, p: 24, c: 48, f: 14,
      region: '东北', province: '辽宁', tags: ['海鲜馅', '水饺'], nutrition: '鲅鱼肉馅鲜嫩多汁，海味蛋白', tip: '大连特色，皮薄馅大别贪碗' },
    { id: 241, name: '锦州烤串（羊肉串5串）', emoji: '🍢', category: 'street', unit: '份', measure: 'count', grams: 180, cal: 360, p: 26, c: 4, f: 26,
      region: '东北', province: '辽宁', tags: ['烧烤', '烟火气'], nutrition: '锦州烧烤名满东北，油香四溢', tip: '素串多点肉串少点，烧烤也讲排列组合' },
    { id: 242, name: '鞍山牛庄馅饼', emoji: '🫓', category: 'breakfast', unit: '个', measure: 'count', grams: 200, cal: 380, p: 14, c: 40, f: 18,
      region: '东北', province: '辽宁', tags: ['馅饼', '油润'], nutrition: '牛羊肉馅烙饼，皮薄油润', tip: '一个当早餐，配碗粥' },

    /* ================= 上海（华东） ================= */
    { id: 243, name: '生煎包（4个）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 160, cal: 380, p: 14, c: 34, f: 22,
      region: '华东', province: '上海', tags: ['水煎', '爆汁'], nutrition: '底部煎脆肉馅多汁，油煎部分热量高', tip: '四个顶一顿早饭，别配甜豆浆又加糖' },
    { id: 244, name: '上海小笼包（6个）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 180, cal: 360, p: 16, c: 40, f: 16,
      region: '华东', province: '上海', tags: ['汤包', '皮薄'], nutrition: '皮冻融化成汤汁，肉馅鲜甜', tip: '先咬个小口喝汤，六个封顶' },
    { id: 245, name: '上海红烧肉（本帮）', emoji: '🥘', category: 'home', unit: '份', measure: 'count', grams: 250, cal: 550, p: 20, c: 12, f: 46,
      region: '华东', province: '上海', tags: ['浓油赤酱', '本帮'], nutrition: '浓油赤酱的代表作，糖色油脂双高', tip: '沪上热量名片，两三块解馋就好' },
    { id: 246, name: '葱油拌面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 350, cal: 420, p: 12, c: 56, f: 16,
      region: '华东', province: '上海', tags: ['葱油', '面条'], nutrition: '葱油酱油拌面，油香扑鼻', tip: '上海人早餐魂，别加葱油浇头双份' },
    { id: 247, name: '鲜肉月饼', emoji: '🥮', category: 'bake', unit: '个', measure: 'count', grams: 100, cal: 480, p: 10, c: 48, f: 27,
      region: '华东', province: '上海', tags: ['苏式', '酥皮'], nutrition: '酥皮层层起酥裹肉馅，中秋流量王', tip: '排队也要限量，一个就够' },
    { id: 248, name: '酒酿圆子', emoji: '🍡', category: 'bake', unit: '碗', measure: 'count', grams: 250, cal: 240, p: 4, c: 48, f: 3,
      region: '华东', province: '上海', tags: ['甜品', '酒酿'], nutrition: '糯米小圆子配酒酿蛋花，暖甜', tip: '当甜品别当饭后追加' },

    /* ================= 江苏（华东） ================= */
    { id: 249, name: '鸭血粉丝汤（南京）', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 280, p: 14, c: 32, f: 10,
      region: '华东', province: '江苏', tags: ['金陵', '汤鲜'], nutrition: '鸭血鸭肠粉丝汤，低脂高铁', tip: '南京标配，鸭血管饱热量可控' },
    { id: 250, name: '金陵汤包（南京）', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 150, cal: 280, p: 12, c: 32, f: 12,
      region: '华东', province: '江苏', tags: ['汤包', '薄皮'], nutrition: '皮薄汤足，一口爆汁', tip: '轻轻提慢慢移，别烫着还加醋碟' },
    { id: 251, name: '无锡小笼包', emoji: '🥟', category: 'breakfast', unit: '份', measure: 'count', grams: 150, cal: 300, p: 14, c: 36, f: 12,
      region: '华东', province: '江苏', tags: ['甜鲜', '汤包'], nutrition: '咸中带甜的锡式汤包', tip: '无锡人爱甜，外地朋友尝鲜适量' },
    { id: 252, name: '苏式鲜肉月饼', emoji: '🥮', category: 'bake', unit: '个', measure: 'count', grams: 90, cal: 430, p: 8, c: 52, f: 21,
      region: '华东', province: '江苏', tags: ['酥皮', '肉馅'], nutrition: '酥皮+肉馅，中秋热量参考', tip: '与沪版同门，一个封顶' },
    { id: 253, name: '高邮咸鸭蛋', emoji: '🥚', category: 'breakfast', unit: '个', measure: 'count', grams: 70, cal: 110, p: 7, c: 1, f: 7,
      region: '华东', province: '江苏', tags: ['流油', '下饭'], nutrition: '双黄流油咸鸭蛋，钠含量偏高', tip: '半个配粥刚刚好，别整蛋干吃' },
    { id: 254, name: '常州大麻糕', emoji: '🫓', category: 'bake', unit: '个', measure: 'count', grams: 120, cal: 300, p: 7, c: 44, f: 11,
      region: '华东', province: '江苏', tags: ['芝麻', '酥饼'], nutrition: '咸甜两味芝麻酥饼', tip: '掰开分食，配茶正好' },

    /* ================= 浙江（华东） ================= */
    { id: 255, name: '嘉兴肉粽', emoji: '🍙', category: 'breakfast', unit: '个', measure: 'count', grams: 250, cal: 460, p: 12, c: 68, f: 14,
      region: '华东', province: '浙江', tags: ['粽子', '糯米'], nutrition: '糯米五花肉蛋黄，一只顶一餐', tip: '端午限定的热量担当，当正餐别加菜' },
    { id: 256, name: '宁波汤圆（芝麻8个）', emoji: '🍡', category: 'bake', unit: '碗', measure: 'count', grams: 200, cal: 420, p: 6, c: 60, f: 18,
      region: '华东', province: '浙江', tags: ['元宵', '黑芝麻'], nutrition: '糯米皮黑芝麻猪油馅，甜糯拉满', tip: '团团圆圆八个上限，汤别喝光' },
    { id: 257, name: '金华火腿（切片）', emoji: '🍖', category: 'home', unit: '份', measure: 'count', grams: 150, cal: 330, p: 36, c: 2, f: 20,
      region: '华东', province: '浙江', tags: ['腌肉', '高蛋白'], nutrition: '火腿蛋白密度高，盐分也高', tip: '配汤配菜提鲜，别当零食吃' },
    { id: 258, name: '绍兴醉鸡', emoji: '🍗', category: 'home', unit: '份', measure: 'count', grams: 300, cal: 320, p: 26, c: 4, f: 21,
      region: '华东', province: '浙江', tags: ['花雕', '酒香'], nutrition: '花雕酒浸鸡，酒香入骨', tip: '去皮吃鸡胸，酒香清爽' },
    { id: 259, name: '温州鱼丸汤', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 300, cal: 180, p: 14, c: 8, f: 9,
      region: '华东', province: '浙江', tags: ['鱼丸', '清淡'], nutrition: '鮸鱼打浆鱼丸，Q弹低脂', tip: '清汤鱼丸，海边人的轻负担' },
    { id: 260, name: '缙云烧饼', emoji: '🫓', category: 'street', unit: '个', measure: 'count', grams: 120, cal: 350, p: 8, c: 46, f: 15,
      region: '华东', province: '浙江', tags: ['梅干菜', '烤饼'], nutrition: '梅干菜肉馅烤饼，炭火香', tip: '一个解馋，薄脆的划算' },

    /* ================= 安徽（华东） ================= */
    { id: 261, name: '淮南牛肉汤', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 300, p: 18, c: 20, f: 14,
      region: '华东', province: '安徽', tags: ['牛肉汤', '暖身'], nutrition: '牛骨汤配牛肉粉丝，鲜辣过瘾', tip: '辣油面上一层，撇掉更清爽' },
    { id: 262, name: '阜阳格拉条', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 420, p: 13, c: 62, f: 12,
      region: '华东', province: '安徽', tags: ['面条', '酱香'], nutrition: '宽面拌酱豆芽荆芥，地方硬核面', tip: '阜阳人的早餐扛把子' },
    { id: 263, name: '无为板鸭', emoji: '🦆', category: 'home', unit: '份', measure: 'count', grams: 250, cal: 340, p: 26, c: 4, f: 24,
      region: '华东', province: '安徽', tags: ['熏鸭', '咸香'], nutrition: '八道工序熏制，皮脂香', tip: '皮薄肉瘦部位更划算' },
    { id: 264, name: '黄山烧饼', emoji: '🫓', category: 'bake', unit: '个', measure: 'count', grams: 60, cal: 300, p: 8, c: 40, f: 13,
      region: '华东', province: '安徽', tags: ['梅干菜', '酥脆'], nutrition: '梅干菜肥肉馅酥皮饼，一口酥', tip: '黄山伴手礼，两三个配茶刚好' },
    { id: 265, name: '三河米饺', emoji: '🥟', category: 'street', unit: '份', measure: 'count', grams: 200, cal: 300, p: 8, c: 44, f: 10,
      region: '华东', province: '安徽', tags: ['米皮', '油炸'], nutrition: '米粉皮包馅油炸，外脆内糯', tip: '油炸碳水，吃两个就好' },
    { id: 266, name: '合肥麻辣小龙虾（一份）', emoji: '🦞', category: 'street', unit: '份', measure: 'count', grams: 400, cal: 300, p: 26, c: 8, f: 17,
      region: '华东', province: '安徽', tags: ['夜宵', '香辣'], nutrition: '虾肉低脂，蘸料油汁是热量', tip: '嗦虾不嗦汁，配冰水别配含糖饮料' },

    /* ================= 福建（华东） ================= */
    { id: 267, name: '福州鱼丸汤', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 300, cal: 200, p: 12, c: 18, f: 8,
      region: '华东', province: '福建', tags: ['鱼丸', '包心'], nutrition: '鱼丸包肉馅，弹牙鲜美', tip: '清汤快手菜，海味轻负担' },
    { id: 268, name: '沙县拌面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 300, cal: 380, p: 12, c: 52, f: 13,
      region: '华东', province: '福建', tags: ['花生酱', '拌面'], nutrition: '花生酱拌面，香浓热量不低', tip: '沙县三宝之一，配烫青菜更稳' },
    { id: 269, name: '莆田卤面', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 400, p: 14, c: 56, f: 13,
      region: '华东', province: '福建', tags: ['汤面', '海鲜'], nutrition: '海鲜高汤卤面，汤是精华', tip: '汤少喝，面照吃' },
    { id: 270, name: '泉州姜母鸭', emoji: '🦆', category: 'home', unit: '份', measure: 'count', grams: 350, cal: 420, p: 28, c: 6, f: 30,
      region: '华东', province: '福建', tags: ['姜香', '温补'], nutrition: '麻油姜母焖鸭，暖身好物', tip: '麻油热量高，吃鸭肉少喝油汤' },
    { id: 271, name: '厦门花生汤', emoji: '🥣', category: 'drink', unit: '碗', measure: 'count', grams: 250, cal: 250, p: 6, c: 44, f: 6,
      region: '华东', province: '福建', tags: ['甜汤', '花生'], nutrition: '花生熬至软烂，甜香浓郁', tip: '午后甜品，古早味适量' },
    { id: 272, name: '锅边糊（鼎边糊）', emoji: '🥣', category: 'breakfast', unit: '碗', measure: 'count', grams: 300, cal: 180, p: 6, c: 30, f: 4,
      region: '华东', province: '福建', tags: ['米浆', '福州'], nutrition: '米浆烫成薄片配海鲜汤', tip: '福州早餐友好款，配油条别加多' },

    /* ================= 江西（华东） ================= */
    { id: 273, name: '南昌拌粉', emoji: '🍜', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 400, p: 10, c: 70, f: 9,
      region: '华东', province: '江西', tags: ['米粉', '香辣'], nutrition: '米粉拌辣椒萝卜干，爽辣开胃', tip: '南昌早餐双雄之一，辣度自控' },
    { id: 274, name: '瓦罐汤（排骨莲藕）', emoji: '🥣', category: 'home', unit: '盅', measure: 'count', grams: 350, cal: 180, p: 12, c: 12, f: 9,
      region: '华东', province: '江西', tags: ['煨汤', '滋补'], nutrition: '瓦罐炭火煨汤，排骨莲藕', tip: '拌粉+瓦罐汤是南昌套餐' },
    { id: 275, name: '藜蒿炒腊肉', emoji: '🥬', category: 'home', unit: '份', measure: 'count', grams: 300, cal: 300, p: 16, c: 8, f: 22,
      region: '华东', province: '江西', tags: ['时令', '腊味'], nutrition: '鄱阳湖藜蒿配腊肉，脆嫩清香', tip: '腊肉是热量点，多夹藜蒿' },
    { id: 276, name: '赣南小炒鱼', emoji: '🐟', category: 'home', unit: '份', measure: 'count', grams: 350, cal: 340, p: 24, c: 8, f: 24,
      region: '华东', province: '江西', tags: ['小炒', '酸辣'], nutrition: '草鱼块过油小炒，酸辣开胃', tip: '鱼块挑瘦肉，汁少拌饭' },
    { id: 277, name: '九江茶饼', emoji: '🫓', category: 'bake', unit: '个', measure: 'count', grams: 50, cal: 260, p: 5, c: 40, f: 9,
      region: '华东', province: '江西', tags: ['茶点', '芝麻'], nutrition: '茶油芝麻甜饼，配茶正好', tip: '茶点小饼，两个封顶' },
    { id: 278, name: '南昌白糖糕', emoji: '🍡', category: 'bake', unit: '份', measure: 'count', grams: 150, cal: 280, p: 3, c: 52, f: 7,
      region: '华东', province: '江西', tags: ['油炸', '甜糯'], nutrition: '糯米粉油炸裹糖霜，外脆内糯', tip: '南昌小吃名片，尝鲜定量' },

    /* ================= 山东（华东） ================= */
    { id: 279, name: '山东杂粮煎饼', emoji: '🫓', category: 'breakfast', unit: '份', measure: 'count', grams: 250, cal: 300, p: 8, c: 54, f: 6,
      region: '华东', province: '山东', tags: ['杂粮', '薄脆'], nutrition: '杂粮面摊薄饼，鸡蛋生菜加持', tip: '少薄脆多蔬菜，山东人从小吃到大的瘦身工具' },
    { id: 280, name: '济南把子肉', emoji: '🍖', category: 'home', unit: '份', measure: 'count', grams: 250, cal: 420, p: 22, c: 8, f: 32,
      region: '华东', province: '山东', tags: ['酱香', '下饭'], nutrition: '五花肉捆扎酱卤，油润酱香', tip: '配米饭吃一小块，酱汁别拌饭' },
    { id: 281, name: '单县羊肉汤', emoji: '🥣', category: 'home', unit: '碗', measure: 'count', grams: 400, cal: 260, p: 18, c: 6, f: 17,
      region: '华东', province: '山东', tags: ['羊肉汤', '乳白'], nutrition: '奶白羊汤配羊肉，冬日暖身', tip: '撇油喝汤，肉比汤更重要' },
    { id: 282, name: '潍坊肉火烧', emoji: '🫓', category: 'breakfast', unit: '个', measure: 'count', grams: 150, cal: 380, p: 12, c: 38, f: 20,
      region: '华东', province: '山东', tags: ['肉饼', '酥香'], nutrition: '油酥皮猪肉馅烤制', tip: '潍坊早餐魂，配咸汤更顺口' },
    { id: 283, name: '淄博烧烤（小饼卷肉）', emoji: '🫓', category: 'street', unit: '份', measure: 'count', grams: 300, cal: 480, p: 24, c: 44, f: 24,
      region: '华东', province: '山东', tags: ['烧烤', '小饼'], nutrition: '小饼卷肉串加葱酱，碳水+肉+油', tip: '葱是灵魂，酱少刷一层' },
    { id: 284, name: '菏泽壮馍', emoji: '🫓', category: 'breakfast', unit: '个', measure: 'count', grams: 300, cal: 350, p: 10, c: 48, f: 13,
      region: '华东', province: '山东', tags: ['大饼', '面食'], nutrition: '地方大饼厚实有嚼劲', tip: '顶饱主食，配碗汤' },
];

/* 合并进全国主库（后续批次照此追加） */
CN_FOODS.push(...CN_FOODS2);