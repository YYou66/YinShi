/* ==========================================================
 * 饮食热量记录站 · app.js
 * 模块一：全局框架（Tab 切换 / Toast）+ 食物库
 * ----------------------------------------------------------
 * 数据流：
 *   食物库卡片「加入计算器」→ 写入 localStorage(cart)，模块二接管
 *   收藏状态 → localStorage(favorites)
 *   饮食记录 → localStorage(records)，模块三接管
 * ========================================================== */

/* ---------- localStorage 的 key（带版本前缀，避免未来字段变动导致旧数据报错） ---------- */
const LS_KEYS = {
    favorites: 'ys.v3.favorites',    // 收藏的食物 id 数组
    calcCart: 'ys.v3.calc_cart',     // 计算器购物车：[{ id, qty }]
    records: 'ys.v3.records',        // 饮食记录（模块三使用）
    searchHistory: 'ys.v3.history',  // 搜索历史（模块二使用）
    settings: 'ys.v3.settings',      // 用户设置（体重 / 每日目标，后续模块使用）
};

/* ---------- 旧版 key 迁移：把 v1 数据无损搬到带版本号的新 key ---------- */
function migrateLegacyLS() {
    const legacyMap = {
        'ys_favorites': LS_KEYS.favorites,
        'ys_calc_cart': LS_KEYS.calcCart,
        'ys_records': LS_KEYS.records,
    };
    Object.entries(legacyMap).forEach(([oldKey, newKey]) => {
        try {
            if (localStorage.getItem(newKey) == null && localStorage.getItem(oldKey) != null) {
                localStorage.setItem(newKey, localStorage.getItem(oldKey));
            }
            localStorage.removeItem(oldKey);
        } catch (e) { /* 忽略单个 key 的迁移失败 */ }
    });
}
migrateLegacyLS();

/* ---------- 全局状态 ---------- */
const state = {
    page: 'food',        // 当前页
    filter: 'all',       // 当前筛选分类
    keyword: '',         // 搜索关键字
    sort: 'default',     // 排序：default / high / low
    favorites: loadLS(LS_KEYS.favorites, []),   // 收藏 id 数组
    calcCart: loadLS(LS_KEYS.calcCart, []),     // 计算器购物车
    nutriFilter: [],                            // 营养素筛选（多选，AND 叠加）
    searchHistory: loadLS(LS_KEYS.searchHistory, []), // 搜索历史（最近在前）
};

/* ==========================================================
 * 工具函数
 * ========================================================== */

/** 读取 localStorage（容错） */
function loadLS(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

/** 写入 localStorage */
function saveLS(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        showToast('⚠ 本地存储失败，请检查浏览器设置');
    }
}

/** 按 id 找食物（食物库 FOODS + 菜系库 CUI_FOODS + 全国库 CN_FOODS + 品牌库 BRAND_FOODS） */
function getFood(id) {
    const n = Number(id);
    return FOODS.find(f => f.id === n)
        || (typeof CUI_FOODS !== 'undefined' ? CUI_FOODS.find(f => f.id === n) : null)
        || (typeof CN_FOODS !== 'undefined' ? CN_FOODS.find(f => f.id === n) : null)
        || (typeof BRAND_FOODS !== 'undefined' ? BRAND_FOODS.find(f => f.id === n) : null)
        || null;
}

/** 轻提示 */
let toastTimer = null;
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

/** XSS 转义：所有来自用户输入或外部数据的内容，渲染进 HTML 前必须过一遍 */
function esc(str) {
    return String(str == null ? '' : str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

/** 统一的热量描述：每 100g 或 1 份/个 的 kcal 文案（避免四处手写） */
function foodBaseText(food) {
    if (!food) return '';
    return food.measure === 'weight'
        ? `每 100g ${food.cal} kcal`
        : `${food.cal} kcal / 1 ${food.unit}`;
}

/** 按数量换算热量 + 三大营养素（蛋白质 / 碳水 / 脂肪） */
function macroSub(food, qty) {
    const q = Number(qty);
    if (!food || !isFinite(q) || q <= 0) return { kcal: 0, p: 0, c: 0, f: 0 };
    const scale = food.measure === 'weight' ? q / 100 : q;
    return {
        kcal: Math.round(food.cal * scale),
        p: Math.round(food.p * scale),
        c: Math.round(food.c * scale),
        f: Math.round(food.f * scale),
    };
}

/* ==========================================================
 * 页面 Tab 切换
 * ========================================================== */
function switchPage(page) {
    state.page = page;
    // 高亮当前 Tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.page === page);
    });
    // 显示对应页面
    document.querySelectorAll('.page').forEach(sec => {
        sec.classList.toggle('active', sec.id === 'page-' + page);
    });
    // 进入计算器页时刷新购物车，随时同步徽标
    if (page === 'calculator') renderCalculator();
    // 进入记录页时刷新记录
    if (page === 'records') renderRecords();
    updateTabBadge();
    updateRecBadge();
    window.scrollTo({ top: 0 });
}

/* ==========================================================
 * 渲染：筛选标签
 * ========================================================== */
function renderFilterTags() {
    // 「全部」+ 6 个分类
    const tags = [{ key: 'all', name: '全部', emoji: '📚' }, ...CATEGORIES];
    const box = document.getElementById('filterTags');
    box.innerHTML = tags.map(t => `
        <button class="filter-tag ${state.filter === t.key ? 'active' : ''}"
                data-filter="${t.key}">
            <span>${t.emoji}</span> ${t.name}
        </button>
    `).join('');

    // 单选切换
    box.querySelectorAll('.filter-tag').forEach(btn => {
        btn.addEventListener('click', () => {
            state.filter = btn.dataset.filter;
            renderFilterTags();   // 重绘以高亮当前项
            renderFoodGrid();     // 重新渲染卡片
        });
    });
}

/* ==========================================================
 * 渲染：营养素分类筛选（多选叠加，点选/再点取消）
 * ========================================================== */
function renderNutriTags() {
    const box = document.getElementById('nutriTags');
    if (!box) return;
    box.innerHTML = NUTRI_GROUPS.map(g => `
        <button class="nutri-tag ${state.nutriFilter.includes(g.id) ? 'active' : ''}"
                data-nutri="${g.id}">
            ${g.emoji} ${g.name}
        </button>
    `).join('');

    box.querySelectorAll('.nutri-tag').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.nutri;
            const i = state.nutriFilter.indexOf(id);
            if (i > -1) state.nutriFilter.splice(i, 1);
            else state.nutriFilter.push(id);
            renderNutriTags();
            renderFoodGrid();
        });
    });
}

/** 当前激活的营养素筛选项（用于空状态/计数文案） */
function activeNutriNames() {
    return state.nutriFilter
        .map(id => (NUTRI_GROUPS.find(g => g.id === id) || {}).name)
        .filter(Boolean);
}

/* ==========================================================
 * 渲染：食物卡片
 * ========================================================== */

/** 按 搜索 + 筛选 + 排序 取可见食物 */
function getVisibleFoods() {
    let list = FOODS.filter(f => {
        const okFilter = state.filter === 'all' || f.category === state.filter;
        const okSearch = !state.keyword || f.name.includes(state.keyword);
        const okNutri = state.nutriFilter.every(gid => {
            const g = NUTRI_GROUPS.find(x => x.id === gid);
            return g ? g.test(f) : true;
        });
        return okFilter && okSearch && okNutri;
    });

    if (state.sort === 'high') list = [...list].sort((a, b) => b.cal - a.cal);
    else if (state.sort === 'low') list = [...list].sort((a, b) => a.cal - b.cal);

    return list;
}

/** 单张卡片 HTML（食物库 / 菜系 / 品牌通用；品牌餐品显示品牌徽章） */
function foodCardHTML(food, index) {
    const cat = CATEGORIES.find(c => c.key === food.category);
    const brand = food.brand && typeof BRANDS_LIB !== 'undefined' ? BRANDS_LIB.find(b => b.key === food.brand) : null;
    const faved = state.favorites.includes(food.id);
    const measureText = food.measure === 'weight' ? '每 100g' : '1 ' + food.unit;

    return `
        <article class="food-card clickable" data-id="${food.id}" style="animation-delay:${index * 40}ms">
            <div class="card-head">
                <span class="cat-chip${brand ? ' brand-chip' : ''}">${brand ? `${brand.emoji} ${brand.name}` : `${cat.emoji} ${cat.name}`}</span>
                <button class="heart-btn ${faved ? 'active' : ''}"
                        data-fav="${food.id}" aria-label="收藏">
                    <svg width="18" height="18" viewBox="0 0 24 24"
                         fill="${faved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="1.8">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                    </svg>
                </button>
            </div>

            <div class="card-emoji">${food.emoji}</div>

            <div class="card-body">
                <h3 class="food-name">${food.name}</h3>
                <div class="cal-row">
                    <span class="cal-num">${food.cal}</span>
                    <span class="cal-unit">kcal</span>
                    <span class="measure-chip">${measureText}</span>
                </div>
                <!-- 三大营养素（按基础单位） -->
                <div class="macro-row">
                    <div class="macro-item"><b>${food.p}</b><span>蛋白 g</span></div>
                    <div class="macro-item"><b>${food.c}</b><span>碳水 g</span></div>
                    <div class="macro-item"><b>${food.f}</b><span>脂肪 g</span></div>
                </div>
                <!-- 手账风小标签 -->
                <div class="tags-row">
                    ${food.tags.map(t => `<span class="tag-chip">${t}</span>`).join('')}
                </div>
                <div class="note-block">
                    <span class="note-label">营养要点</span>
                    ${food.nutrition}
                </div>
                <div class="note-block tip">
                    <span class="note-label">减脂提示</span>
                    ${food.tip}
                </div>
                ${food.science ? `<div class="note-block sci">
                    <span class="note-label">科普</span>
                    ${esc(food.science)}
                </div>` : ''}
                <div class="detail-link-row">
                    <button class="detail-link" data-detail="${food.id}">📖 查看详情</button>
                </div>
            </div>

            <div class="card-actions">
                <button class="btn-add" data-calc="${food.id}">＋ 加入计算器</button>
                <button class="btn-note" data-note="${food.id}">✎ 记一笔</button>
            </div>
        </article>
    `;
}

/** 渲染食物网格 + 空状态 + 结果数 */
function renderFoodGrid() {
    const list = getVisibleFoods();
    const grid = document.getElementById('foodGrid');
    const empty = document.getElementById('foodEmpty');

    grid.innerHTML = list.map((f, i) => foodCardHTML(f, i)).join('');

    // 结果计数
    const countEl = document.getElementById('resultCount');
    const total = getVisibleFoods().length;
    const activeCat = CATEGORIES.find(c => c.key === state.filter);
    countEl.textContent = state.keyword
        ? `「${state.keyword}」找到 ${total} 款`
        : (state.nutriFilter.length
            ? `${activeNutriNames().join(' + ')} · ${total} 款`
            : (state.filter !== 'all' && activeCat
                ? `${activeCat.emoji} ${activeCat.name} · ${total} 款`
                : `共 ${total} 款食物`));

    // 空状态
    if (list.length === 0) {
        empty.classList.remove('hidden');
        document.getElementById('foodEmptyText').textContent = state.keyword
            ? `没有找到「${state.keyword}」相关的食物，换个关键词试试？`
            : (state.nutriFilter.length
                ? `这个营养素组合下还没找到对应食物，试试去掉「${activeNutriNames().join(' / ')}」中的一项？`
                : '这个分类下还没有食物，去别的分类看看？');
    } else {
        empty.classList.add('hidden');
    }
}

    /** 卡片网格事件：委托到容器（渲染任意网格后无需重绑，避免食物页/菜系页重复监听） */
function bindGridActions() {
    ['foodGrid', 'cuisineGrid', 'brandGrid'].forEach(id => {
        const grid = document.getElementById(id);
        if (!grid) return;
        grid.addEventListener('click', (e) => {
            /* ♥ 收藏 */
            const heart = e.target.closest('.heart-btn');
            if (heart) return toggleFavorite(Number(heart.dataset.fav), heart);

            /* 📖 查看详情 */
            const detail = e.target.closest('.detail-link');
            if (detail) { e.stopPropagation(); return openFoodDetail(getFood(Number(detail.dataset.detail))); }

            /* ＋ 加入计算器 */
            const add = e.target.closest('.btn-add');
            if (add) {
                const origin = add.textContent;
                addToCalculator(Number(add.dataset.calc));
                add.textContent = '✓ 已加入';
                setTimeout(() => { add.textContent = origin; }, 1200);
                return;
            }

            /* ✎ 记一笔 */
            const note = e.target.closest('.btn-note');
            if (note) return openQuickRecord(getFood(Number(note.dataset.note)));

            /* 点卡片空白区域 → 打开统一详情 */
            const card = e.target.closest('.food-card.clickable');
            if (card && !e.target.closest('.btn-add, .btn-note, .heart-btn, .detail-link')) {
                openFoodDetail(getFood(Number(card.dataset.id)));
            }
        });
    });
}

/** 收藏 / 取消收藏（卡片与详情共用） */
function toggleFavorite(id, btn) {
    const food = getFood(id);
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
        btn.classList.remove('active');
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'none');
        showToast(`已取消收藏 · ${food ? food.name : ''}`);
    } else {
        state.favorites.push(id);
        btn.classList.add('active');
        const svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', 'currentColor');
        showToast(`♥ 已收藏 · ${food ? food.name : ''}`);
    }
    saveLS(LS_KEYS.favorites, state.favorites);
}

/** 加入计算器购物车（计重默认 100g，计数 +1 份） */
function addToCalculator(id) {
    const food = getFood(id);
    if (!food) return null;
    const item = state.calcCart.find(i => i.id === id);
    if (item) {
        item.qty = food.measure === 'weight' ? 100 : item.qty + 1;
    } else {
        state.calcCart.push({ id, qty: food.measure === 'weight' ? 100 : 1 });
    }
    saveLS(LS_KEYS.calcCart, state.calcCart);
    updateTabBadge();
    showToast(`已加入计算器 · ${food.name}（当前 ${state.calcCart.length} 项）`);
    return food;
}

/* ==========================================================
 * 统一食物详情模板（食物库 / 八大菜系 / 品牌热量库共用）
 * ========================================================== */
function openFoodDetail(food) {
    if (!food) return;
    const cat = CATEGORIES.find(c => c.key === food.category);
    const spicy = food.spicy ? spicyMeta(food.spicy) : null;
    const cc = food.cuisine ? CUISINE_LIB.find(x => x.key === food.cuisine) : null;
    const brand = food.brand && typeof BRANDS_LIB !== 'undefined' ? BRANDS_LIB.find(b => b.key === food.brand) : null;
    const nutriHits = NUTRI_GROUPS.filter(g => g.test(food));
    const gramText = food.measure === 'count'
        ? '约 ' + estGrams(food, 1) + ' g / 1 ' + food.unit
        : '按克重计（每 100g）';

    document.getElementById('detailBody').innerHTML = `
        <div class="detail-head">
            <div class="detail-emoji">${food.emoji}</div>
            <div>
                <div class="detail-name">${esc(food.name)}</div>
                <div class="detail-meta">
                    ${cat ? `<span class="cat-chip">${cat.emoji} ${esc(cat.name)}</span>` : ''}
                    ${spicy ? `<span class="spicy-chip">${spicy.emoji} ${esc(food.spicy)}</span>` : ''}
                    ${cc ? `<span class="cuisine-chip">🍲 ${esc(cc.name)}</span>` : ''}
                    ${brand ? `<span class="cat-chip brand-chip">${brand.emoji} ${esc(brand.name)}</span>` : ''}
                </div>
            </div>
        </div>
        <div class="detail-calrow">
            <b>${food.cal}</b> kcal / ${food.measure === 'weight' ? '100g' : '1 ' + food.unit}
            <span class="measure-chip">${gramText}</span>
        </div>
        <div class="macro-row" style="justify-content:flex-start;">
            <div class="macro-item"><b>${food.p}</b><span>蛋白 g</span></div>
            <div class="macro-item"><b>${food.c}</b><span>碳水 g</span></div>
            <div class="macro-item"><b>${food.f}</b><span>脂肪 g</span></div>
            ${typeof food.fiber === 'number' ? `<div class="macro-item"><b>${food.fiber}</b><span>纤维 g</span></div>` : ''}
        </div>
        <div class="tags-row" style="justify-content:flex-start;">
            ${(food.tags || []).map(t => `<span class="tag-chip">${esc(t)}</span>`).join('')}
            ${nutriHits.map(g => `<span class="n-chip">${g.emoji} ${g.name}</span>`).join('')}
        </div>
        <div class="detail-note"><b>营养要点</b>${esc(food.nutrition)}</div>
        <div class="detail-note tip"><b>减脂提示</b>${esc(food.tip)}</div>
        ${brand ? `<div class="detail-note brand-note"><b>品牌备注</b>⚠️ 热量为估算值，以品牌官方小程序 / 包装标注为准<em class="notice-inline">更新于 ${esc(food.updated || '')}</em></div>` : ''}
        ${food.science ? `<div class="detail-note sci-note"><b>科普短句</b>${esc(food.science)}<em class="notice-inline">仅供个人减脂参考，不构成医疗建议</em></div>` : ''}
        <div class="detail-actions">
            <button class="btn-add" data-calcfood="${food.id}">＋ 加入计算器</button>
            <button class="btn-note" data-note="${food.id}">✎ 记一笔</button>
        </div>
    `;
    document.getElementById('detailModal').classList.add('show');
    bindDetailActions();
}

/** 详情页内按钮（加入计算器 / 记一笔） */
function bindDetailActions() {
    const add = document.querySelector('#detailBody .btn-add');
    if (add) add.addEventListener('click', () => addToCalculator(Number(add.dataset.calcfood)));
    const note = document.querySelector('#detailBody .btn-note');
    if (note) note.addEventListener('click', () => {
        const f = getFood(Number(note.dataset.note));
        closeFoodDetail();
        openQuickRecord(f);
    });
}

function closeFoodDetail() {
    document.getElementById('detailModal').classList.remove('show');
}

/* ==========================================================
 * 搜索框（实时过滤 + 搜索历史 / 热门搜索面板）
 * ========================================================== */
const HOT_SEARCHES = ['奶茶', '拿铁', '鸡胸', '红薯', '鸡蛋', '面包'];

/** 记录搜索关键词（去重，最近在前，最多 8 条） */
function recordSearch(kw) {
    const k = String(kw || '').trim();
    if (!k) return;
    state.searchHistory = [k, ...state.searchHistory.filter(x => x !== k)].slice(0, 8);
    saveLS(LS_KEYS.searchHistory, state.searchHistory);
    renderSearchPanel();
}

/** 渲染搜索历史 / 热门搜索，并绑定点击 */
function renderSearchPanel() {
    const panel = document.getElementById('searchPanel');
    if (!panel) return;

    document.getElementById('spHistoryWrap')
        .classList.toggle('hidden', state.searchHistory.length === 0);
    document.getElementById('spHistory').innerHTML = state.searchHistory
        .map(k => `<button class="sp-chip" data-kw="${esc(k)}">🔎 ${esc(k)}</button>`).join('');
    document.getElementById('spHot').innerHTML = HOT_SEARCHES
        .map(k => `<button class="sp-chip" data-kw="${esc(k)}">🔥 ${esc(k)}</button>`).join('');

    /* 点选历史/热门词：直接用该词搜索 */
    panel.querySelectorAll('.sp-chip').forEach(chip => {
        chip.addEventListener('mousedown', (e) => e.preventDefault()); // 保住输入框焦点
        chip.addEventListener('click', () => {
            applySearchKeyword(chip.dataset.kw);
            closeSearchPanel();
        });
    });

    document.getElementById('clearHistory').addEventListener('click', () => {
        state.searchHistory = [];
        saveLS(LS_KEYS.searchHistory, []);
        renderSearchPanel();
        showToast('已清除搜索历史');
    });
}

/** 应用一个搜索词（输入框 + 状态 + 记录历史 + 重渲染） */
function applySearchKeyword(kw) {
    const input = document.getElementById('searchInput');
    input.value = kw;
    state.keyword = kw;
    document.getElementById('searchClear').classList.add('show');
    recordSearch(kw);
    renderFoodGrid();
}

function openSearchPanel() {
    renderSearchPanel();
    document.getElementById('searchPanel').classList.remove('hidden');
}

function closeSearchPanel() {
    document.getElementById('searchPanel').classList.add('hidden');
}

function bindSearch() {
    const input = document.getElementById('searchInput');
    const clear = document.getElementById('searchClear');

    input.addEventListener('input', () => {
        state.keyword = input.value.trim();
        // 有关键字时显示清空按钮
        clear.classList.toggle('show', input.value.length > 0);
        renderFoodGrid();
    });

    // 聚焦展开历史/热门面板
    input.addEventListener('focus', openSearchPanel);
    input.addEventListener('blur', () => {
        setTimeout(() => {
            if (document.activeElement !== input) closeSearchPanel();
        }, 180);
    });

    // 回车：把词记入搜索历史
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            if (state.keyword) recordSearch(state.keyword);
            closeSearchPanel();
        }
    });

    clear.addEventListener('click', () => {
        input.value = '';
        state.keyword = '';
        clear.classList.remove('show');
        renderFoodGrid();
        input.focus();
    });

    // 点击搜索框以外的区域 → 收起面板
    document.addEventListener('click', (e) => {
        const wrap = document.querySelector('.search-wrap');
        if (wrap && !wrap.contains(e.target)) closeSearchPanel();
    });
}

/* ==========================================================
 * 排序
 * ========================================================== */
function bindSort() {
    document.getElementById('sortSelect').addEventListener('change', (e) => {
        state.sort = e.target.value;
        renderFoodGrid();
    });
}

/* ==========================================================
 * Tab 切换绑定
 * ========================================================== */
function bindTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchPage(btn.dataset.page));
    });
}

/* ==========================================================
 * 模块二：热量计算器
 * ========================================================== */

/** 今日日期 key（YYYY-MM-DD） */
function currentDateKey() {
    const d = new Date();
    const pad = n => String(n).padStart(2, '0');
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** 数量是否合法：>0；计数类还要求整数 */
function isValidQty(food, qty) {
    const q = Number(qty);
    if (!isFinite(q) || q <= 0) return false;
    if (food.measure === 'count' && !Number.isInteger(q)) return false;
    return true;
}

/** 单项热量 = 计数 ×cal / 计重 ×cal/100g */
function calcSub(food, qty) {
    return Math.round(food.cal * (food.measure === 'weight' ? qty / 100 : qty));
}

/** 条目有效数量（异常时回退默认值，避免崩溃） */
function safeQty(item) {
    const food = getFood(item.id);
    const q = Number(item.qty);
    if (food && (!isFinite(q) || q <= 0)) {
        return food.measure === 'weight' ? 100 : 1;
    }
    return q;
}

/** 计算器 Tab 上的条目数徽标 */
function updateTabBadge() {
    const badge = document.getElementById('calcBadge');
    if (!badge) return;
    const n = state.calcCart.length;
    badge.textContent = n;
    badge.classList.toggle('hidden', n === 0);
}

/** 渲染整个计算器（空状态 / 清单 / 汇总） */
function renderCalculator() {
    const items = state.calcCart.filter(i => getFood(i.id));
    const main = document.getElementById('calcMain');
    const empty = document.getElementById('calcEmpty');
    if (items.length === 0) {
        main.classList.add('hidden');
        empty.classList.remove('hidden');
        updateTabBadge();
        return;
    }
    main.classList.remove('hidden');
    empty.classList.add('hidden');
    renderCalcList(items);
    renderCalcSummary(items);
}

/** 渲染购物车清单 */
function renderCalcList(items) {
    const list = document.getElementById('calcList');
    list.innerHTML = items.map(it => {
        const food = getFood(it.id);
        const base = foodBaseText(food) + (food.measure === 'count' ? ` · 约 ${estGrams(food, 1)} g` : '');
        const qtyUnit = food.measure === 'weight' ? 'g' : food.unit;
        return `
            <div class="calc-row" data-id="${food.id}">
                <span class="row-emoji">${food.emoji}</span>
                <div class="row-info">
                    <div class="row-name">${food.name}</div>
                    <div class="row-base">${base}</div>
                </div>
                <div class="row-qty">
                    <input type="number" class="qty-input" data-qty="${food.id}"
                           min="1" step="1" value="${it.qty}">
                    <span class="qty-unit">${qtyUnit}</span>
                    <div class="qty-error">份数/克重必须大于 0。</div>
                </div>
                <div class="row-result">
                    <div class="row-sub" data-sub="${food.id}">0 <span>kcal</span></div>
                    <div class="row-macros" data-macro="${food.id}">蛋白 0g · 碳水 0g · 脂肪 0g</div>
                </div>
                <button class="row-del" data-del="${food.id}" aria-label="删除">✕</button>
            </div>
        `;
    }).join('');

    // 初始化每行小计，再绑定事件
    items.forEach(it => updateCalcRow(getFood(it.id), it.qty));
    bindCalcInputEvents(items);
}

/** 更新单行：校验 + 小计 + 三大营养素显示 */
function updateCalcRow(food, qty) {
    const row = document.querySelector(`.calc-row[data-id="${food.id}"]`);
    if (!row) return;
    const valid = isValidQty(food, qty);
    row.classList.toggle('error', !valid);
    row.querySelector('.qty-input').classList.toggle('invalid', !valid);
    const sub = valid ? calcSub(food, Number(qty)) : 0;
    row.querySelector('.row-sub').innerHTML = `${sub} <span>kcal</span>`;
    // 单行估算营养素（蛋白 / 碳水 / 脂肪）
    const m = valid ? macroSub(food, Number(qty)) : null;
    row.querySelector('.row-macros').textContent =
        `蛋白 ${m ? m.p : 0}g · 碳水 ${m ? m.c : 0}g · 脂肪 ${m ? m.f : 0}g`;
}

/** 清单行事件：改数量实时重算 / 删除 */
function bindCalcInputEvents(items) {
    /* 数量输入 */
    document.querySelectorAll('.qty-input').forEach(input => {
        input.addEventListener('input', () => {
            const id = Number(input.dataset.qty);
            const item = state.calcCart.find(i => i.id === id);
            if (item) item.qty = input.value;
            updateCalcRow(getFood(id), item ? item.qty : 1);
            renderCalcSummary(items);   // 汇总跟随实时变化
        });
        input.addEventListener('change', () => {
            saveLS(LS_KEYS.calcCart, state.calcCart);   // 离开输入框时落盘
        });
    });

    /* 单条删除 */
    document.querySelectorAll('.row-del').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = Number(btn.dataset.del);
            state.calcCart = state.calcCart.filter(i => i.id !== id);
            saveLS(LS_KEYS.calcCart, state.calcCart);
            renderCalculator();
            showToast(`已移除 · ${getFood(id).name}`);
        });
    });
}

/** 渲染汇总：分类小计 + 总热量 + 评估 */
function renderCalcSummary(items) {
    const validItems = items.filter(it => {
        const f = getFood(it.id);
        return f && isValidQty(f, it.qty);
    });
    const invalidCount = items.length - validItems.length;

    /* ---- 分类小计 ---- */
    const catMap = {};
    validItems.forEach(it => {
        const f = getFood(it.id);
        const v = calcSub(f, it.qty);
        catMap[f.category] = (catMap[f.category] || 0) + v;
    });
    const catBox = document.getElementById('catSubtotals');
    const cats = Object.entries(catMap);
    catBox.innerHTML = `<h4>分类小计</h4>` + (cats.length
        ? cats.map(([k, v]) => {
            const c = CATEGORIES.find(x => x.key === k);
            return `<div class="cat-item"><span>${c ? c.emoji + ' ' + c.name : k}</span><b>${v} kcal</b></div>`;
        }).join('')
        : `<p class="no-sub">修正数量后显示小计</p>`);

    /* ---- 总热量 + 评估 + 三大营养素合计 ---- */
    const total = validItems.reduce((s, it) => s + calcSub(getFood(it.id), it.qty), 0);
    const macroTotal = { p: 0, c: 0, f: 0 };
    validItems.forEach(it => {
        const m = macroSub(getFood(it.id), it.qty);
        macroTotal.p += m.p;
        macroTotal.c += m.c;
        macroTotal.f += m.f;
    });
    renderTotalBox(total, validItems.length, invalidCount, macroTotal);

    /* ---- 保存按钮：有非法数量时禁用 ---- */
    document.getElementById('saveCalcBtn').disabled = invalidCount > 0;
}

/** 评估分级：<300 轻食 / 300–600 适中 / >600 偏高 + 三大营养素合计 */
function renderTotalBox(total, validCount, invalidCount, macroTotal) {
    const box = document.getElementById('totalBox');
    let level, label, hint;
    if (validCount === 0 && invalidCount > 0) {
        level = 'mid';
        label = '待修正 ⚠';
        hint = '请把不合适的数量改好，合计会自动算出来';
        box.innerHTML = `
            <div class="total-label">本餐预估总热量</div>
            <div class="total-num">—</div>
            <div class="total-unit">kcal（千卡）</div>
            <span class="level-badge">${label}</span>
            <p class="level-hint">${hint}</p>
        `;
        box.className = 'total-box level-' + level;
        return;
    }
    if (total < 300)      { level = 'light'; label = '轻食 🟢'; hint = '这顿很轻松，继续保持～'; }
    else if (total <= 600){ level = 'mid';   label = '适中 🟡'; hint = '正常一餐的量，餐后补点蔬菜水果'; }
    else                  { level = 'high';  label = '偏高 🔴'; hint = '热量不低，其他餐次要控一控，多动动'; }

    box.className = 'total-box level-' + level;
    box.innerHTML = `
        <div class="total-label">本餐预估总热量</div>
        <div class="total-num">${total}</div>
        <div class="total-unit">kcal（千卡）</div>
        <span class="level-badge">${label}</span>
        <p class="level-hint">${hint}</p>
        ${invalidCount > 0 ? `<p class="level-hint warn">⚠ 有 ${invalidCount} 项数量不合法，修正后才能保存</p>` : ''}
        ${validCount > 0 && macroTotal ? `
        <div class="macro-sum">
            <div class="ms-item"><b>${macroTotal.p}</b><span>💪 蛋白质 g</span></div>
            <div class="ms-item"><b>${macroTotal.c}</b><span>🍚 碳水 g</span></div>
            <div class="ms-item"><b>${macroTotal.f}</b><span>🧈 脂肪 g</span></div>
        </div>` : ''}
    `;
}

/** 一键清空 */
function clearCalculator() {
    if (state.calcCart.length === 0) return;
    state.calcCart = [];
    saveLS(LS_KEYS.calcCart, state.calcCart);
    renderCalculator();
    showToast('购物车已清空');
}

/** 保存到今日记录（写入 localStorage，模块三接管展示） */
function saveCalcToRecords() {
    const items = state.calcCart;
    const valid = items.map(it => ({ it, f: getFood(it.id) }))
                       .filter(x => x.f && isValidQty(x.f, x.it.qty));
    if (valid.length !== items.length) {
        showToast('有数量不合法，请修正后再保存');
        return;
    }
    const meal = document.getElementById('saveMeal').value;
    const date = currentDateKey();
    const records = loadLS(LS_KEYS.records, []);

    valid.forEach(({ it, f }) => {
        records.push({
            id: Date.now() + '-' + Math.random().toString(36).slice(2, 6),
            ts: Date.now(),
            date, meal,
            foodId: f.id, name: f.name, emoji: f.emoji, category: f.category,
            unit: f.unit, measure: f.measure, cal: f.cal,
            qty: Number(it.qty),
            grams: estGrams(f, it.qty),   // 估算克重
            sub: calcSub(f, it.qty),      // 保存时快照
        });
    });
    saveLS(LS_KEYS.records, records);

    // 保存成功 → 清空购物车
    state.calcCart = [];
    saveLS(LS_KEYS.calcCart, state.calcCart);
    renderCalculator();
    showToast(`💾 已保存到今日记录（${meal} · ${valid.length} 项）`);
}

/** 计算器页面固定按钮 */
function bindCalcActions() {
    document.getElementById('clearCalcBtn').addEventListener('click', () => {
        if (state.calcCart.length > 0) {
            const ok = window.confirm('确定清空计算器里的所有食物吗？');
            if (ok) clearCalculator();
        }
    });
    document.getElementById('saveCalcBtn').addEventListener('click', saveCalcToRecords);
    document.getElementById('goFoodBtn').addEventListener('click', () => switchPage('food'));
}

/* ==========================================================
 * 模块三：饮食记录
 * ========================================================== */

const MEALS = ['早餐', '午餐', '晚餐', '加餐'];
const MEAL_EMOJI = { '早餐': '🍳', '午餐': '🍱', '晚餐': '🍲', '加餐': '🍬' };

function pad2(n) { return String(n).padStart(2, '0'); }
function dateKeyOf(d) { return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`; }

/** 日期 key → 展示文案（今天 / 昨天 / M月D日 周X） */
function dateKeyToLabel(key) {
    if (key === currentDateKey()) return '今天';
    const yd = new Date();
    yd.setDate(yd.getDate() - 1);
    if (key === dateKeyOf(yd)) return '昨天';
    const d = new Date(key + 'T00:00:00');
    const now = new Date();
    const wd = ['日', '一', '二', '三', '四', '五', '六'][d.getDay()];
    return d.getFullYear() === now.getFullYear()
        ? `${d.getMonth() + 1}月${d.getDate()}日 周${wd}`
        : `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

/** 取记录数组（内存态 + localStorage 同步） */
function getRecords() {
    if (!state.records) state.records = loadLS(LS_KEYS.records, []);
    return state.records;
}

/** 单条记录小计：优先用食物库实时算，食物下架则用保存快照 */
function recSub(r) {
    const f = getFood(r.foodId);
    const q = Number(r.qty);
    if (f && q > 0) return calcSub(f, q);
    return r.sub || 0;
}

/** 记录数量是否合法（与计算器同规则） */
function isRecQtyValid(r) {
    const f = getFood(r.foodId);
    const q = Number(r.qty);
    if (!isFinite(q) || q <= 0) return false;
    const m = f ? f.measure : r.measure;
    if (m === 'count' && !Number.isInteger(q)) return false;
    return true;
}

/** 每天总热量 map（用于柱状图与徽标） */
function dailyTotals() {
    const map = {};
    getRecords().forEach(r => {
        const q = Number(r.qty);
        if (!isFinite(q) || q <= 0) return;
        map[r.date] = (map[r.date] || 0) + recSub(r);
    });
    return map;
}

/** 记录按日期+餐次分组，返回有序数组 */
function groupRecords() {
    const map = new Map();
    getRecords().forEach(r => {
        if (!map.has(r.date)) map.set(r.date, { date: r.date, meals: {} });
        const g = map.get(r.date);
        if (!g.meals[r.meal]) g.meals[r.meal] = [];
        g.meals[r.meal].push(r);
    });
    return [...map.values()]
        .sort((a, b) => b.date.localeCompare(a.date))   // 新的在前
        .map(g => {
            const meals = MEALS
                .filter(m => g.meals[m])
                .map(m => ({ meal: m, items: g.meals[m].sort((x, y) => x.ts - y.ts) }));
            const total = meals.reduce((s, mg) =>
                s + mg.items.reduce((s2, r) => s2 + recSub(r), 0), 0);
            return { date: g.date, label: dateKeyToLabel(g.date), meals, total };
        });
}

/** 今日速览信息 */
function getTodayInfo(groups) {
    const g = groups.find(x => x.date === currentDateKey());
    const count = g ? g.meals.reduce((s, mg) => s + mg.items.length, 0) : 0;
    return { total: g ? g.total : 0, count };
}

/** 记录页 Tab 徽标 = 今日合计 */
function updateRecBadge() {
    const badge = document.getElementById('recBadge');
    if (!badge) return;
    const total = Math.round(getTodayInfo(groupRecords()).total);
    badge.textContent = total;
    badge.classList.toggle('hidden', total === 0);
}

/** 渲染整个记录页 */
function renderRecords() {
    const groups = groupRecords();
    const empty = document.getElementById('recEmpty');
    const body = document.getElementById('recBody');

    if (groups.length === 0) {
        empty.classList.remove('hidden');
        body.classList.add('hidden');
        updateRecBadge();
        return;
    }
    empty.classList.add('hidden');
    body.classList.remove('hidden');

    renderTodayStrip(groups);
    renderChart(groups);
    document.getElementById('recList').innerHTML = groups.map(renderDayCard).join('');
    bindRecEvents(groups);
    updateRecBadge();
}

/** 今日速览条 + 评估徽标 */
function renderTodayStrip(groups) {
    const { total, count } = getTodayInfo(groups);
    const strip = document.getElementById('todayStrip');
    let level, label;
    if (total < 300)      { level = 'light'; label = '轻食 🟢'; }
    else if (total <= 600){ level = 'mid';   label = '适中 🟡'; }
    else                  { level = 'high';  label = '偏高 🔴'; }
    strip.className = 'today-strip level-' + level;
    document.getElementById('todayNum').textContent = total;
    document.getElementById('todayLevel').textContent = label;
    document.getElementById('todayCount').textContent = `共 ${count} 条记录`;
}

/** 近 7 天柱状图（纯 CSS） */
function renderChart(groups) {
    const totals = dailyTotals();
    const chart = document.getElementById('recChart');
    const today = new Date();
    const days = [];
    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(today.getDate() - i);
        const key = dateKeyOf(d);
        days.push({ key, value: totals[key] || 0, isToday: i === 0, weekday: d.getDay() });
    }
    const max = Math.max(...days.map(x => x.value), 1);

    chart.innerHTML = days.map((d, idx) => {
        const pct = d.value > 0 ? Math.round(d.value / max * 100) : 0;
        const levelClass = d.value < 300 ? 'bar-light' : (d.value <= 600 ? 'bar-mid' : 'bar-high');
        const wd = '周' + ['日', '一', '二', '三', '四', '五', '六'][d.weekday];
        const label = idx === 6 ? '今' : (idx === 5 ? '昨' : wd);
        return `
            <div class="chart-col">
                <span class="chart-val">${d.value > 0 ? d.value : ''}</span>
                <div class="chart-bar ${d.value > 0 ? levelClass : 'zero'} ${d.isToday ? 'today-bar' : ''}"
                     style="height:${d.value > 0 ? pct : 4}%"></div>
                <span class="chart-day">${label}</span>
            </div>
        `;
    }).join('');
}

/** 单日卡片：日期头 + 餐次分栏 */
function renderDayCard(g) {
    return `
        <div class="day-card">
            <div class="day-head">
                <span class="day-label">${g.label}</span>
                <span class="day-date">${g.date}</span>
                <span class="day-total">${g.total} kcal</span>
            </div>
            ${g.meals.map(mg => `
                <div class="meal-group">
                    <div class="meal-head">
                        <span class="meal-chip">${MEAL_EMOJI[mg.meal] || '🍽'} ${mg.meal}</span>
                    </div>
                    <div class="meal-rows">
                        ${mg.items.map(recRowHTML).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

/** 单条记录行 */
function recRowHTML(r) {
    const f = getFood(r.foodId);
    const name = f ? f.name : r.name;
    const emoji = f ? f.emoji : r.emoji;
    const qtyUnit = (f ? f.measure : r.measure) === 'weight' ? 'g' : (f ? f.unit : r.unit);
    const base = f
        ? (f.measure === 'weight'
            ? `${r.qty} g · ${foodBaseText(f)}`
            : `${foodBaseText(f)} · 约 ${estGrams(f, r.qty)} g`)
        : '食物已下架，数据为保存快照';
    return `
        <div class="calc-row rec-row" data-id="${r.id}" data-ts="${r.ts}">
            <span class="row-emoji">${emoji}</span>
            <div class="row-info">
                <div class="row-name">${esc(name)}</div>
                <div class="row-base">${base}</div>
            </div>
            <div class="row-qty">
                <input type="number" class="qty-input" data-rec="${r.id}" min="1" step="1" value="${esc(r.qty)}">
                <span class="qty-unit">${esc(qtyUnit)}</span>
                <div class="qty-error">请输入大于 0 的${(f ? f.measure : r.measure) === 'weight' ? '克数' : '整数份数'}</div>
            </div>
            <div class="row-sub">${recSub(r)} <span>kcal</span></div>
            <button class="row-edit" data-editrec="${r.id}" aria-label="编辑餐次/日期" title="编辑餐次/日期">✏️</button>
            <button class="row-del" data-delrec="${r.id}" aria-label="删除">✕</button>
        </div>
    `;
}

/** 记录行事件：改数量 / 删除 / 点行回看来源食物 */
function bindRecEvents(groups) {
    const all = getRecords();

    document.querySelectorAll('.rec-row').forEach(row => {
        row.addEventListener('click', (e) => {
            // 点输入框 / 编辑 / 删除按钮时不打开详情
            if (e.target.closest('.qty-input, .row-del, .row-edit')) return;
            const rec = all.find(x => x.id === row.dataset.id);
            if (rec) openRecordDetail(rec);
        });
    });

    /* 编辑份数：实时改行小计，失焦落盘并整体刷新 */
    document.querySelectorAll('.qty-input[data-rec]').forEach(input => {
        input.addEventListener('input', () => {
            const rec = all.find(x => x.id === input.dataset.rec);
            if (!rec) return;
            rec.qty = input.value;
            const row = input.closest('.rec-row');
            const f = getFood(rec.foodId);
            const valid = isRecQtyValid(rec);
            row.classList.toggle('error', !valid);
            input.classList.toggle('invalid', !valid);
            row.querySelector('.row-sub').innerHTML =
                `${valid ? recSub(rec) : 0} <span>kcal</span>`;
        });
        input.addEventListener('change', () => {
            saveLS(LS_KEYS.records, all);
            renderRecords(groups);
            showToast('已更新份数');
        });
    });

    /* 删除单条 */
    document.querySelectorAll('.row-del[data-delrec]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.delrec;
            const rec = all.find(x => x.id === id);
            const idx = all.findIndex(x => x.id === id);
            if (idx > -1) all.splice(idx, 1);
            saveLS(LS_KEYS.records, all);
            renderRecords(groups);
            showToast(`已删除记录 · ${rec ? rec.name : ''}`);
        });
    });

    /* ✏️ 编辑餐次 / 日期 */
    document.querySelectorAll('.row-edit[data-editrec]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            openEditRecord(all.find(x => x.id === btn.dataset.editrec));
        });
    });
}

/** 打开「记一笔」弹窗 */
let quickFood = null;
function openQuickRecord(food) {
    if (!food) return;
    quickFood = food;
    const isW = food.measure === 'weight';
    document.getElementById('quickFood').innerHTML = `
        <span class="mf-emoji">${food.emoji}</span>
        <div>
            <div class="mf-name">${esc(food.name)}</div>
            <div class="mf-base">${foodBaseText(food)}${food.measure === 'count' ? ' · 约 ' + estGrams(food, food.measure === 'weight' ? 100 : 1) + ' g' : ''}</div>
        </div>
    `;
    const qty = document.getElementById('quickQty');
    qty.value = isW ? 100 : 1;
    document.getElementById('quickUnit').textContent = isW ? '克' : food.unit;
    updateQuickSub();
    document.getElementById('quickMeal').value = '加餐';
    document.getElementById('quickModal').classList.add('show');
}

/** 记一笔弹窗：实时预估 */
function updateQuickSub() {
    const qty = Number(document.getElementById('quickQty').value);
    const ok = quickFood && isFinite(qty) && qty > 0 &&
        (quickFood.measure === 'weight' || Number.isInteger(qty));
    const sub = ok ? calcSub(quickFood, qty) : 0;
    document.getElementById('quickSub').textContent = ok ? `预计 ${sub} kcal` : '份数/克重必须大于 0。';
    document.getElementById('quickOk').disabled = !ok;
}

/** 确认记一笔 → 写入今日记录 */
function confirmQuickRecord() {
    if (!quickFood) return;
    const qty = Number(document.getElementById('quickQty').value);
    if (!isFinite(qty) || qty <= 0) { showToast('份数/克重必须大于 0。'); return; }
    const meal = document.getElementById('quickMeal').value;
    const today = currentDateKey();
    const records = getRecords();
    records.push({
        id: Date.now() + '-' + Math.random().toString(36).slice(2, 6),
        ts: Date.now(),
        date: today, meal,
        foodId: quickFood.id, name: quickFood.name, emoji: quickFood.emoji,
        category: quickFood.category, unit: quickFood.unit, measure: quickFood.measure,
        cal: quickFood.cal, qty, grams: estGrams(quickFood, qty),
        sub: calcSub(quickFood, qty),
    });
    saveLS(LS_KEYS.records, records);
    closeQuickRecord();
    renderRecords();
    updateRecBadge();
    showToast(`📖 已记一笔 · ${quickFood.name}（${meal}）`);
}

function closeQuickRecord() {
    document.getElementById('quickModal').classList.remove('show');
}

/** 点击记录行 → 回看来源食物 */
function openRecordDetail(rec) {
    const f = getFood(rec.foodId);
    const name = f ? f.name : rec.name;
    const emoji = f ? f.emoji : rec.emoji;
    const cal = f ? f.cal : rec.cal;
    const unit = f ? f.unit : rec.unit;
    const measure = f ? f.measure : rec.measure;
    const nutrition = f ? f.nutrition : rec.nutrition || '暂无';
    const tip = f ? f.tip : '暂无';
    const qty = rec.qty;
    const sub = recSub(rec);
    const macroHTML = f ? `
        <div class="macro-row" style="justify-content:flex-start;">
            <div class="macro-item"><b>${f.p}</b><span>蛋白 g</span></div>
            <div class="macro-item"><b>${f.c}</b><span>碳水 g</span></div>
            <div class="macro-item"><b>${f.f}</b><span>脂肪 g</span></div>
        </div>` : '';
    const sciHTML = f && f.science ? `
        <div class="detail-note tip"><b>科普短句</b>${esc(f.science)}<em class="notice-inline">仅供个人减脂参考，不构成医疗建议</em></div>` : '';

    document.getElementById('detailBody').innerHTML = `
        <div class="detail-head">
            <div class="detail-emoji">${emoji}</div>
            <div>
                <div class="detail-name">${esc(name)}</div>
                <div class="detail-meta">${rec.date} · ${MEAL_EMOJI[rec.meal]} ${rec.meal} · ${qty} ${measure === 'weight' ? 'g' : unit}${f && f.measure === 'count' ? '（约 ' + estGrams(f, qty) + ' g）' : ''}</div>
            </div>
        </div>
        <div class="detail-cal">本次摄入 <b>${sub}</b> kcal</div>
        ${macroHTML}
        <div class="tags-row" style="justify-content:flex-start;">${f ? f.tags.map(t => `<span class="tag-chip">${esc(t)}</span>`).join('') : '<span class="tag-chip">下架食物</span>'}</div>
        <div class="detail-note"><b>营养要点</b>${esc(nutrition)}</div>
        <div class="detail-note tip"><b>减脂提示</b>${esc(tip)}</div>
        ${sciHTML}
    `;
    document.getElementById('detailModal').classList.add('show');
}

function closeRecordDetail() {
    document.getElementById('detailModal').classList.remove('show');
}

/* ==========================================================
 * 编辑记录：改餐次 / 日期（份数在记录行内直接改）
 * ========================================================== */
let editingRecId = null;

function openEditRecord(rec) {
    if (!rec) return;
    editingRecId = rec.id;
    const f = getFood(rec.foodId);
    document.getElementById('editFoodLine').innerHTML = `
        <span class="mf-emoji">${f ? f.emoji : (rec.emoji || '🍽')}</span>
        <div>
            <div class="mf-name">${esc(f ? f.name : rec.name)}</div>
            <div class="mf-base">${f ? foodBaseText(f) : '下架食物快照'} · ${rec.qty} ${(f ? f.measure : rec.measure) === 'weight' ? 'g' : (f ? f.unit : rec.unit)}</div>
        </div>
    `;
    document.getElementById('editDate').value = rec.date || currentDateKey();
    document.getElementById('editMeal').value = rec.meal || '加餐';
    document.getElementById('editModal').classList.add('show');
}

function confirmEditRecord() {
    const all = getRecords();
    const rec = all.find(x => x.id === editingRecId);
    if (!rec) { closeEditRecord(); return; }
    const date = document.getElementById('editDate').value;
    const meal = document.getElementById('editMeal').value;
    if (!date) { showToast('请选择日期'); return; }
    rec.date = date;
    rec.meal = meal || '加餐';
    saveLS(LS_KEYS.records, all);
    editingRecId = null;
    closeEditRecord();
    renderRecords();
    updateRecBadge();
    showToast(`✅ 已更新 · ${rec.name}（${date} ${MEAL_EMOJI[rec.meal]}${rec.meal}）`);
}

function closeEditRecord() {
    document.getElementById('editModal').classList.remove('show');
}

/* ==========================================================
 * 导出：JSON / CSV（全部记录，CSV 含估算营养素，Excel 友好）
 * ========================================================== */
function exportRecords(format) {
    const records = getRecords();
    if (!records.length) { showToast('还没有记录可导出'); return; }
    const stamp = currentDateKey();

    if (format === 'json') {
        downloadFile(
            JSON.stringify(records, null, 2),
            `饮食记录_${stamp}.json`,
            'application/json;charset=utf-8'
        );
        return;
    }

    // CSV：UTF-8 BOM（Excel 中文不乱码）+ 防公式注入转义
    const head = ['日期', '餐次', '食物', '分类', '计量', '份量', '估算克重 g', '热量 kcal', '蛋白质 g', '碳水 g', '脂肪 g', '记录时间'];
    const rows = records.map(r => {
        const f = getFood(r.foodId);
        const m = f ? macroSub(f, Number(r.qty)) : null;
        const cat = (CATEGORIES.find(c => c.key === r.category) || {}).name || r.category || '';
        const unit = (f ? f.measure : r.measure) === 'weight' ? 'g' : (f ? f.unit : r.unit || '');
        return [
            r.date || '', r.meal || '',
            (f ? f.name : r.name) || '', cat, unit,
            r.qty != null ? r.qty : '',
            r.grams != null ? r.grams : (f ? estGrams(f, Number(r.qty)) : ''),
            recSub(r),
            m ? round1(m.p) : '', m ? round1(m.c) : '', m ? round1(m.f) : '',
            fmtRecordTime(r.ts),
        ];
    });
    const csv = '\uFEFF' + [head, ...rows].map(row => row.map(csvField).join(',')).join('\r\n');
    downloadFile(csv, `饮食记录_${stamp}.csv`, 'text/csv;charset=utf-8');
}

function round1(n) { return Math.round(n * 10) / 10; }

function fmtRecordTime(ts) {
    if (!ts) return '';
    const d = new Date(ts);
    if (isNaN(d.getTime())) return '';
    return `${dateKeyOf(d)} ${pad2(d.getHours())}:${pad2(d.getMinutes())}`;
}

/** CSV 字段转义：逗号/引号/换行包引号，防公式注入（= + - @ 开头加引号） */
function csvField(v) {
    const s = String(v == null ? '' : v);
    if (/^[=+\-@\t\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    if (/[",\n\r]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
}

/** 触发浏览器下载 */
function downloadFile(content, filename, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    showToast(`已导出 ${filename} · ${getRecords().length} 条记录`);
}

/** 弹窗 / 记录页固定按钮绑定 */
function bindRecordActions() {
    document.getElementById('quickCancel').addEventListener('click', closeQuickRecord);
    document.getElementById('quickOk').addEventListener('click', confirmQuickRecord);
    document.getElementById('quickQty').addEventListener('input', updateQuickSub);
    document.getElementById('quickMeal').addEventListener('change', updateQuickSub);

    document.getElementById('detailClose').addEventListener('click', closeRecordDetail);
    document.getElementById('detailModal').addEventListener('click', (e) => {
        if (e.target.id === 'detailModal') closeRecordDetail();
    });
    document.getElementById('quickModal').addEventListener('click', (e) => {
        if (e.target.id === 'quickModal') closeQuickRecord();
    });
    document.getElementById('goFoodBtn2').addEventListener('click', () => switchPage('food'));

    // 编辑记录弹窗
    document.getElementById('editCancel').addEventListener('click', closeEditRecord);
    document.getElementById('editOk').addEventListener('click', confirmEditRecord);
    document.getElementById('editModal').addEventListener('click', (e) => {
        if (e.target.id === 'editModal') closeEditRecord();
    });

    // 导出
    document.getElementById('exportCsvBtn').addEventListener('click', () => exportRecords('csv'));
    document.getElementById('exportJsonBtn').addEventListener('click', () => exportRecords('json'));

    // Esc 关闭弹窗
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickRecord();
            closeRecordDetail();
            closeEditRecord();
        }
    });
}

/* ==========================================================
 * 模块五：八大菜系 + 全国风味（省区分批）
 * ========================================================== */
const cuisineState = { mode: 'cuisine', cuisine: 'all', province: 'all', keyword: '', sort: 'default' };

/** 当前模式下的数据池：八大菜系 CUI_FOODS / 全国风味 CN_FOODS */
function cuisinePool() {
    return cuisineState.mode === 'cuisine' ? CUI_FOODS : CN_FOODS;
}

/** 模式切换 tabs（八大菜系 / 全国风味） */
function renderCuisineMode() {
    const box = document.getElementById('cuisineModeTabs');
    if (!box) return;
    box.innerHTML = `
        <button class="mode-tab ${cuisineState.mode === 'cuisine' ? 'active' : ''}" data-mode="cuisine">🍲 八大菜系</button>
        <button class="mode-tab ${cuisineState.mode === 'nation' ? 'active' : ''}" data-mode="nation">🌏 全国风味</button>
    `;
    box.querySelectorAll('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            cuisineState.mode = tab.dataset.mode;
            renderCuisineMode();
            renderCuisineBar();
            renderProvinceBar();
            renderCuisineDesc();
            renderCuisineGrid();
        });
    });
}

/** 全国风味：省区列表（按 CN_FOODS 出现顺序去重） */
function provinceList() {
    const seen = [];
    cuisinePool().forEach(f => {
        if (f.province && !seen.includes(f.province)) seen.push(f.province);
    });
    return seen;
}

/** 菜系页可见食物（模式 + 维度筛选 + 关键词 + 排序） */
function getCuisineFoods() {
    let list = cuisinePool().filter(f => {
        const okDim = cuisineState.mode === 'cuisine'
            ? (cuisineState.cuisine === 'all' || f.cuisine === cuisineState.cuisine)
            : (cuisineState.province === 'all' || f.province === cuisineState.province);
        const okSearch = !cuisineState.keyword || f.name.includes(cuisineState.keyword);
        return okDim && okSearch;
    });
    if (cuisineState.sort === 'high') list = [...list].sort((a, b) => b.cal - a.cal);
    else if (cuisineState.sort === 'low') list = [...list].sort((a, b) => a.cal - b.cal);
    return list;
}

/** 菜系筛选条（JS 渲染，数据来自 CUISINE_LIB） */
function renderCuisineBar() {
    const bar = document.getElementById('cuisineBar');
    if (!bar) return;
    bar.classList.toggle('hidden', cuisineState.mode !== 'cuisine');
    const chips = [{ key: 'all', name: '🔥 全部' }]
        .concat(CUISINE_LIB.map(c => ({ key: c.key, name: c.name })));
    bar.innerHTML = chips.map(c => `
        <button class="cuisine-chip ${cuisineState.cuisine === c.key ? 'active' : ''}"
                data-cuisine="${c.key}">${c.name}</button>
    `).join('');

    bar.querySelectorAll('.cuisine-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            cuisineState.cuisine = chip.dataset.cuisine;
            renderCuisineBar();
            renderCuisineDesc();
            renderCuisineGrid();
        });
    });
}

/** 省区筛选条（JS 渲染，仅「全国风味」模式显示） */
function renderProvinceBar() {
    const bar = document.getElementById('provinceBar');
    if (!bar) return;
    bar.classList.toggle('hidden', cuisineState.mode !== 'nation');
    const chips = [{ key: 'all', name: '🌏 全部省区' }]
        .concat(provinceList().map(p => ({ key: p, name: p })));
    bar.innerHTML = chips.map(p => `
        <button class="cuisine-chip province-chip ${cuisineState.province === p.key ? 'active' : ''}"
                data-province="${p.key}">${p.name}</button>
    `).join('');

    bar.querySelectorAll('.province-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            cuisineState.province = chip.dataset.province;
            renderProvinceBar();
            renderCuisineGrid();
        });
    });
}

/** 选中菜系时显示小百科横幅（地域 / 风味 / 辣度 / 甜度 / 描述） */
function renderCuisineDesc() {
    const box = document.getElementById('cuisineDesc');
    if (!box) return;
    if (cuisineState.mode !== 'cuisine') { box.classList.add('hidden'); return; }
    const c = CUISINE_LIB.find(x => x.key === cuisineState.cuisine);
    box.classList.toggle('hidden', !c);
    if (!c) return;
    box.innerHTML = `
        <div class="cd-main">
            <span class="cd-em">${esc(c.name)}</span>
            <span>${esc(c.region)} · ${esc(c.flavor)}</span>
        </div>
        <div class="cd-tags">
            <span class="cd-tag">🌶 辣度 ${esc(c.spicy)}</span>
            <span class="cd-tag">🍬 甜度 ${esc(c.sweet)}</span>
        </div>
        <div class="cd-desc">${esc(c.desc)}</div>
    `;
}

/** 菜系页网格 + 计数 + 空状态 */
function renderCuisineGrid() {
    const list = getCuisineFoods();
    const grid = document.getElementById('cuisineGrid');
    const empty = document.getElementById('cuisineEmpty');
    grid.innerHTML = list.map((f, i) => foodCardHTML(f, i)).join('');

    const c = cuisineState.mode === 'cuisine' ? CUISINE_LIB.find(x => x.key === cuisineState.cuisine) : null;
    const p = cuisineState.mode === 'nation' && cuisineState.province !== 'all' ? cuisineState.province : null;
    let countText;
    if (cuisineState.keyword) {
        countText = `「${cuisineState.keyword}」找到 ${list.length} 道`;
    } else if (c) {
        countText = `${c.name} · ${list.length} 道`;
    } else if (p) {
        countText = `${p} · ${list.length} 道`;
    } else if (cuisineState.mode === 'nation') {
        countText = `全国风味 · 已收录 ${provinceList().length} 省 · 共 ${list.length} 道`;
    } else {
        countText = `八大菜系代表菜 · 共 ${list.length} 道`;
    }
    document.getElementById('cuisineCount').textContent = countText;

    let emptyText;
    if (list.length === 0) {
        empty.classList.remove('hidden');
        emptyText = cuisineState.keyword
            ? `没找到「${cuisineState.keyword}」相关的食物，换个词试试？`
            : (cuisineState.mode === 'nation'
                ? '这个省区还没收录风味，先逛逛别的省区？'
                : '这个菜系还没收录代表菜，先逛逛别的菜系？');
        document.getElementById('cuisineEmptyText').textContent = emptyText;
    } else {
        empty.classList.add('hidden');
    }
}

/** 菜系页控件：搜索 / 清空 / 排序 */
function bindCuisines() {
    const input = document.getElementById('cuisineSearch');
    const clear = document.getElementById('cuisineClear');
    input.addEventListener('input', () => {
        cuisineState.keyword = input.value.trim();
        clear.classList.toggle('show', input.value.length > 0);
        renderCuisineGrid();
    });
    clear.addEventListener('click', () => {
        input.value = '';
        cuisineState.keyword = '';
        clear.classList.remove('show');
        renderCuisineGrid();
        input.focus();
    });
    document.getElementById('cuisineSort').addEventListener('change', (e) => {
        cuisineState.sort = e.target.value;
        renderCuisineGrid();
    });
}

/* ==========================================================
 * 模块六：品牌热量库（蜜雪冰城 / 喜茶 / 瑞幸 / 库迪 / 汉堡王 / 达美乐）
 * ========================================================== */
const brandState = { brand: 'all', keyword: '', sort: 'default' };

/** 品牌页可见餐品（品牌筛选 + 关键词 + 排序） */
function getBrandFoods() {
    let list = (typeof BRAND_FOODS !== 'undefined' ? BRAND_FOODS : []).filter(f => {
        const okBrand = brandState.brand === 'all' || f.brand === brandState.brand;
        const okSearch = !brandState.keyword || f.name.includes(brandState.keyword);
        return okBrand && okSearch;
    });
    if (brandState.sort === 'high') list = [...list].sort((a, b) => b.cal - a.cal);
    else if (brandState.sort === 'low') list = [...list].sort((a, b) => a.cal - b.cal);
    return list;
}

/** 品牌筛选条（JS 渲染，数据来自 BRANDS_LIB；绿色系 Active 区分菜系蓝/省区橙） */
function renderBrandBar() {
    const bar = document.getElementById('brandBar');
    if (!bar) return;
    const chips = [{ key: 'all', name: '🏪 全部品牌' }]
        .concat(BRANDS_LIB.map(b => ({ key: b.key, name: `${b.emoji} ${b.name}` })));
    bar.innerHTML = chips.map(c => `
        <button class="cuisine-chip brand-chip ${brandState.brand === c.key ? 'active' : ''}"
                data-brand="${c.key}">${c.name}</button>
    `).join('');
    bar.querySelectorAll('.brand-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            brandState.brand = chip.dataset.brand;
            renderBrandBar();
            renderBrandGrid();
        });
    });
}

/** 品牌页网格 + 计数 + 空状态 */
function renderBrandGrid() {
    const list = getBrandFoods();
    const grid = document.getElementById('brandGrid');
    const empty = document.getElementById('brandEmpty');
    grid.innerHTML = list.map((f, i) => foodCardHTML(f, i)).join('');

    const b = brandState.brand !== 'all' ? BRANDS_LIB.find(x => x.key === brandState.brand) : null;
    document.getElementById('brandCount').textContent = brandState.keyword
        ? `「${brandState.keyword}」找到 ${list.length} 款`
        : (b ? `${b.emoji} ${b.name} · ${list.length} 款` : `品牌热量库 · 共 ${list.length} 款`);

    if (list.length === 0) {
        empty.classList.remove('hidden');
        document.getElementById('brandEmptyText').textContent = brandState.keyword
            ? `没找到「${brandState.keyword}」相关的餐品，换个词试试？`
            : '这个品牌还没收录餐品，先逛逛别的品牌？';
    } else {
        empty.classList.add('hidden');
    }
}

/** 品牌页控件：搜索 / 清空 / 排序 */
function bindBrands() {
    const input = document.getElementById('brandSearch');
    const clear = document.getElementById('brandClear');
    input.addEventListener('input', () => {
        brandState.keyword = input.value.trim();
        clear.classList.toggle('show', input.value.length > 0);
        renderBrandGrid();
    });
    clear.addEventListener('click', () => {
        input.value = '';
        brandState.keyword = '';
        clear.classList.remove('show');
        renderBrandGrid();
        input.focus();
    });
    document.getElementById('brandSort').addEventListener('change', (e) => {
        brandState.sort = e.target.value;
        renderBrandGrid();
    });
}

/* ==========================================================
 * 模块四：关于页
 * ========================================================== */

/** 关于页：单位换算表（数据来自 UNIT_INFO，单一数据源） */
function renderUnitTable() {
    const box = document.getElementById('unitTable');
    if (!box) return;
    box.innerHTML = Object.entries(UNIT_INFO).map(([k, v]) => `
        <div class="unit-item">
            <span class="u-k">${esc(k)}</span>
            <span class="u-v">${v.grams} g${v.note ? ' · ' + esc(v.note) : ''}</span>
        </div>
    `).join('');
}

/** 清除全部本地数据（收藏 + 计算器 + 饮食记录） */
function bindAboutActions() {
    document.getElementById('clearAllBtn').addEventListener('click', () => {
        const ok = window.confirm(
            '确定清除全部本地数据吗？\n\n收藏、计算器清单、全部饮食记录都会被删除，且无法恢复。'
        );
        if (!ok) return;
        [LS_KEYS.favorites, LS_KEYS.calcCart, LS_KEYS.records].forEach(k => {
            localStorage.removeItem(k);
        });
        state.favorites = [];
        state.calcCart = [];
        state.records = [];
        renderFoodGrid();      // 收藏高亮复位
        renderCalculator();    // 购物车清空
        renderRecords();       // 记录列表清空
        updateTabBadge();
        updateRecBadge();
        showToast('已清除全部本地数据 🗑');
    });
}

/** 📷 拍照识别（模拟版）占位：后续模块上线 */
function bindScanPlaceholder() {
    const cam = document.getElementById('camBtn');
    if (!cam) return;
    cam.addEventListener('click', () => {
        showToast('📷 拍照识别（模拟版）将在后续模块上线，敬请期待～');
    });
}

/* ==========================================================
 * 启动
 * ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
    migrateLegacyLS();      // 旧数据无损迁移到带版本号的 key
    bindTabs();
    renderFilterTags();
    renderNutriTags();
    renderFoodGrid();
    renderCuisineMode();     // 模块五：八大菜系 / 全国风味 模式切换
    renderCuisineBar();      // 模块五：八大菜系筛选条
    renderProvinceBar();     // 全国风味省区筛选条（默认隐藏）
    renderCuisineDesc();     // 菜系小百科（默认隐藏）
    renderCuisineGrid();     // 八大菜系代表菜网格
    renderBrandBar();        // 模块六：品牌筛选条
    renderBrandGrid();       // 模块六：品牌热量库网格
    bindGridActions();       // 卡片网格事件委托（食物库 + 菜系 + 品牌共用，注册一次）
    bindSearch();
    bindSort();
    bindCuisines();          // 菜系页搜索 / 排序
    bindBrands();            // 品牌页搜索 / 排序
    bindScanPlaceholder();  // 🍜 拍照识别按钮（占位）
    bindCalcActions();      // 模块二：计算器按钮
    renderCalculator();     // 模块二：购物车（含 localStorage 恢复）
    updateTabBadge();       // 购物车徽标
    bindRecordActions();    // 模块三：弹窗与固定按钮
    renderRecords();        // 模块三：饮食记录初始化
    updateRecBadge();       // 今日合计徽标
    bindAboutActions();     // 模块四：关于页数据管理
    renderUnitTable();      // 模块四：单位换算表
});