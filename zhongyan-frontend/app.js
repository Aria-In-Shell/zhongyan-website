const heroImage =
  "https://omo-oss-image.thefastimg.com/portal-saas/pg2024112919344399025/cms/image/ee7e84b3-366f-489f-ad0e-a65111df37a2.jpg";

const fallbackImages = [
  "https://omo-oss-image.thefastimg.com/portal-saas/pg2024112919344399025/cms/image/9384a534-b3e6-455b-8a29-3c28a51389cb.jpg",
  "https://omo-oss-image.thefastimg.com/portal-saas/pg2024112919344399025/cms/image/5368c4cd-939a-4559-9bfc-58a13bfde972.png",
  "https://omo-oss-image.thefastimg.com/portal-saas/pg2024112919344399025/cms/image/c1922e59-1dba-43a6-bd2f-bf09aa791640.jpg",
  "https://omo-oss-image.thefastimg.com/portal-saas/pg2024112919344399025/cms/image/0481b18b-6030-4ab8-be30-f08b1e512066.jpg",
  heroImage,
];

const products = [
  {
    id: "P001",
    name: "1出6伺服电动高速吹瓶机",
    model: "ZY-06GS",
    category: "全自动吹瓶机",
    material: "PET",
    usage: "饮料瓶 / 矿泉水瓶",
    capacity: "600ml",
    output: "11500-12500瓶/小时",
    outputBand: "8000+",
    cavities: "6腔",
    automation: "伺服自动",
    image: fallbackImages[0],
    sellingPoint: "高速、全自动，适合小容量 PET 瓶规模化生产。",
    lifecycle: "在售",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P002",
    name: "一出12全自动伺服吹瓶机",
    model: "ZY-12XQ",
    category: "全自动吹瓶机",
    material: "PET",
    usage: "饮料瓶 / 矿泉水瓶",
    capacity: "600ml",
    output: "23000-24000瓶/小时",
    outputBand: "8000+",
    cavities: "12腔",
    automation: "伺服自动",
    image: fallbackImages[1],
    sellingPoint: "面向高产能生产线，适合连续化批量生产。",
    lifecycle: "在售",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P003",
    name: "一出八伺服自动吹瓶机",
    model: "ZY-08X",
    category: "全自动吹瓶机",
    material: "PET",
    usage: "饮料瓶 / 矿泉水瓶",
    capacity: "600ml",
    output: "15500-16500瓶/小时",
    outputBand: "8000+",
    cavities: "8腔",
    automation: "伺服自动",
    image: fallbackImages[2],
    sellingPoint: "兼顾产能和设备占地，适合中高产线升级。",
    lifecycle: "在售",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P004",
    name: "一出二5L油瓶吹瓶机",
    model: "ZY-02D-5L",
    category: "PET吹瓶机",
    material: "PET",
    usage: "油瓶 / 大容量容器",
    capacity: "5L",
    output: "1800-2000瓶/小时",
    outputBand: "1000-3000",
    cavities: "2腔",
    automation: "全自动",
    image: fallbackImages[3],
    sellingPoint: "适用于食用油、清洁液等大容量容器生产。",
    lifecycle: "在售",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P005",
    name: "一出二广口吹瓶机",
    model: "ZY-02D-152.4",
    category: "PET吹瓶机",
    material: "PET",
    usage: "广口瓶",
    capacity: "2800ml",
    output: "1200-2000瓶/小时",
    outputBand: "1000-3000",
    cavities: "2腔",
    automation: "全自动",
    image: fallbackImages[4],
    sellingPoint: "适合广口容器、食品包装等瓶型需求。",
    lifecycle: "在售",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P006",
    name: "一出二PP吹瓶机",
    model: "ZY-02D-140",
    category: "PP吹瓶机",
    material: "PP",
    usage: "PP容器 / 食品包装",
    capacity: "3000ml",
    output: "1200-2000瓶/小时",
    outputBand: "1000-3000",
    cavities: "2腔",
    automation: "全自动",
    image: fallbackImages[1],
    sellingPoint: "适用于 PP 材料容器生产和特殊瓶型定制。",
    lifecycle: "定制生产",
    launchDate: "内部待确认",
    visibleInCatalog: true,
  },
  {
    id: "P010",
    name: "一出一20L伺服自动吹瓶机",
    model: "ZY-01E-20L",
    category: "PET吹瓶机",
    material: "PET",
    usage: "大容量容器",
    capacity: "20L",
    output: "300-800瓶/小时",
    outputBand: "300-1000",
    cavities: "1腔",
    automation: "伺服自动",
    image: fallbackImages[0],
    sellingPoint: "用于大容量桶装容器，可根据项目需求评估。",
    lifecycle: "停产但支持售后",
    launchDate: "内部待确认",
    visibleInCatalog: false,
  },
];

const cases = [
  {
    title: "某饮料企业 PET 瓶吹瓶设备交付",
    industry: "饮料行业",
    equipment: "ZY-06GS",
    result: "稳定投产，产能达到预期",
  },
  {
    title: "大容量油瓶生产线设备选型",
    industry: "食用油包装",
    equipment: "ZY-02D-5L",
    result: "围绕 5L 容器完成设备匹配",
  },
  {
    title: "广口瓶项目瓶型适配案例",
    industry: "食品包装",
    equipment: "ZY-02D-152.4",
    result: "完成广口瓶成型参数和设备配置",
  },
];

const categories = [
  ["全自动吹瓶机", "高产能、规模化生产"],
  ["PET吹瓶机", "饮料、矿泉水、油瓶"],
  ["PP吹瓶机", "PP 材料容器需求"],
  ["大容量设备", "5L、20L 等容器"],
  ["定制方案", "瓶型、产能、整线规划"],
];

const state = {
  search: "",
  capacity: "全部",
  usage: "全部",
  material: "全部",
  output: "全部",
};

const selectors = {
  productGrid: document.querySelector("[data-product-grid]"),
  productCount: document.querySelector("[data-product-count]"),
  categoryStrip: document.querySelector("[data-category-strip]"),
  caseGrid: document.querySelector("[data-case-grid]"),
  inquiryDialog: document.querySelector("[data-inquiry-dialog]"),
  inquiryProduct: document.querySelector("[data-inquiry-product]"),
  detailDialog: document.querySelector("[data-detail-dialog]"),
  detailContent: document.querySelector("[data-detail-content]"),
};

function uniqueOptions(key) {
  return ["全部", ...new Set(products.filter((item) => item.visibleInCatalog).map((item) => item[key]))];
}

function fillSelect(selector, options) {
  const select = document.querySelector(selector);
  if (!select) return;
  select.innerHTML = options.map((item) => `<option value="${item}">${item}</option>`).join("");
}

function renderCategories() {
  if (!selectors.categoryStrip) return;
  selectors.categoryStrip.innerHTML = categories
    .map(
      ([name, desc]) => `
        <button class="category-card" type="button" data-category="${name}">
          <strong>${name}</strong>
          <span>${desc}</span>
        </button>
      `,
    )
    .join("");
}

function matches(product) {
  const keyword = state.search.trim().toLowerCase();
  const text = `${product.name} ${product.model} ${product.capacity} ${product.usage}`.toLowerCase();
  const searchMatch = keyword === "" || text.includes(keyword);
  const capacityMatch = state.capacity === "全部" || product.capacity === state.capacity;
  const usageMatch = state.usage === "全部" || product.usage.includes(state.usage);
  const materialMatch = state.material === "全部" || product.material === state.material;
  const outputMatch = state.output === "全部" || product.outputBand === state.output;
  return product.visibleInCatalog && searchMatch && capacityMatch && usageMatch && materialMatch && outputMatch;
}

function productCard(product) {
  return `
    <article class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" width="420" height="315" loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-title">
          <small>${product.model}</small>
          <h3>${product.name}</h3>
        </div>
        <p>${product.sellingPoint}</p>
        <dl class="spec-list">
          <div><dt>容量</dt><dd>${product.capacity}</dd></div>
          <div><dt>产能</dt><dd>${product.output}</dd></div>
          <div><dt>材料</dt><dd>${product.material}</dd></div>
          <div><dt>用途</dt><dd>${product.usage}</dd></div>
        </dl>
        <div class="card-actions">
          <button class="button ghost" type="button" data-detail="${product.id}">查看详情</button>
          <button class="button primary" type="button" data-inquire="${product.model}">立即询价</button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts() {
  if (!selectors.productGrid || !selectors.productCount) return;
  const filtered = products.filter(matches);
  selectors.productCount.textContent = filtered.length;
  selectors.productGrid.innerHTML = filtered.length
    ? filtered.map(productCard).join("")
    : `<div class="product-card"><div class="product-body"><h3>没有匹配设备</h3><p>可以提交瓶型、材料和产能需求，由销售与技术人员推荐。</p><button class="button primary" type="button" data-open-inquiry>提交需求</button></div></div>`;
}

function renderFeaturedProducts() {
  const grid = document.querySelector("[data-featured-grid]");
  if (!grid) return;
  grid.innerHTML = products
    .filter((item) => item.visibleInCatalog)
    .slice(0, 3)
    .map(productCard)
    .join("");
}

function renderCases() {
  if (!selectors.caseGrid) return;
  selectors.caseGrid.innerHTML = cases
    .map(
      (item) => `
        <article class="case-card">
          <small>${item.industry}</small>
          <h3>${item.title}</h3>
          <p>选用设备：${item.equipment}</p>
          <p>${item.result}</p>
        </article>
      `,
    )
    .join("");
}

function openInquiry(product = "") {
  if (selectors.inquiryProduct) selectors.inquiryProduct.value = product;
  if (selectors.inquiryDialog && typeof selectors.inquiryDialog.showModal === "function") {
    selectors.inquiryDialog.showModal();
  }
}

function openDetail(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product || !selectors.detailContent || !selectors.detailDialog) return;
  selectors.detailContent.innerHTML = `
    <div class="detail-grid">
      <img src="${product.image}" alt="${product.name}" width="520" height="390" loading="lazy" />
      <div class="detail-content">
        <span class="detail-badge">${product.model}</span>
        <h2>${product.name}</h2>
        <p>${product.sellingPoint}</p>
        <dl class="spec-list">
          <div><dt>分类</dt><dd>${product.category}</dd></div>
          <div><dt>腔数</dt><dd>${product.cavities}</dd></div>
          <div><dt>最大容量</dt><dd>${product.capacity}</dd></div>
          <div><dt>理论产能</dt><dd>${product.output}</dd></div>
          <div><dt>适用材料</dt><dd>${product.material}</dd></div>
          <div><dt>适用用途</dt><dd>${product.usage}</dd></div>
          <div><dt>自动化程度</dt><dd>${product.automation}</dd></div>
        </dl>
        <div class="detail-actions">
          <button class="button primary" type="button" data-inquire="${product.model}">立即询价</button>
          <button class="button ghost" value="cancel">返回产品中心</button>
        </div>
      </div>
    </div>
  `;
  if (typeof selectors.detailDialog.showModal === "function") {
    selectors.detailDialog.showModal();
  }
}

function resetFilters() {
  Object.assign(state, {
    search: "",
    capacity: "全部",
    usage: "全部",
    material: "全部",
    output: "全部",
  });
  const search = document.querySelector("[data-filter-search]");
  if (search) search.value = "";
  document.querySelectorAll("[data-filter]").forEach((select) => {
    select.value = "全部";
  });
  renderProducts();
}

function bindEvents() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.querySelector("[data-nav]").classList.toggle("is-open");
    });
  }

  const search = document.querySelector("[data-filter-search]");
  if (search) {
    search.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderProducts();
    });
  }

  document.querySelectorAll("[data-filter]").forEach((select) => {
    select.addEventListener("change", (event) => {
      state[event.target.dataset.filter] = event.target.value;
      renderProducts();
    });
  });

  const reset = document.querySelector("[data-reset-filters]");
  if (reset) reset.addEventListener("click", resetFilters);

  document.body.addEventListener("click", (event) => {
    const inquiry = event.target.closest("[data-open-inquiry]");
    const productInquiry = event.target.closest("[data-inquire]");
    const detail = event.target.closest("[data-detail]");
    const category = event.target.closest("[data-category]");

    if (inquiry) openInquiry();
    if (productInquiry) {
      if (selectors.detailDialog && selectors.detailDialog.open) selectors.detailDialog.close();
      openInquiry(productInquiry.dataset.inquire);
    }
    if (detail) openDetail(detail.dataset.detail);
    if (category) {
      const searchInput = document.querySelector("[data-filter-search]");
      if (searchInput) {
        searchInput.value = category.dataset.category;
        state.search = category.dataset.category;
        document.querySelector("#equipment").scrollIntoView({ behavior: "smooth" });
        renderProducts();
      } else {
        window.location.href = `./products.html?q=${encodeURIComponent(category.dataset.category)}`;
      }
    }
  });
}

function init() {
  fillSelect('[data-filter="capacity"]', uniqueOptions("capacity"));
  fillSelect('[data-filter="usage"]', ["全部", "饮料瓶", "矿泉水瓶", "油瓶", "广口瓶", "大容量容器", "PP容器"]);
  fillSelect('[data-filter="material"]', uniqueOptions("material"));
  fillSelect('[data-filter="output"]', ["全部", "300-1000", "1000-3000", "3000-8000", "8000+"]);
  renderCategories();
  renderProducts();
  renderFeaturedProducts();
  renderCases();
  bindEvents();

  const query = new URLSearchParams(window.location.search).get("q");
  const search = document.querySelector("[data-filter-search]");
  if (query && search) {
    state.search = query;
    search.value = query;
    renderProducts();
  }
}

init();
