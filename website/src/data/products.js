const sharedFeatures = {
  en: [
    "Fully automatic operation",
    "Enclosed bottle handling process",
    "PLC and HMI control",
    "Low labor requirement",
    "Suitable for stable production line operation"
  ],
  zh: [
    "全自动运行",
    "全封闭输送与瓶仓衔接",
    "PLC 与人机界面控制",
    "节省人工成本",
    "适合稳定生产线运行"
  ]
};

export const products = [
  {
    id: "zy-12xq",
    model: "ZY-12XQ",
    excelModel: "ZY12XQ",
    sourceMatch: "旧站 + Excel",
    category: "fully-auto",
    material: "PET",
    cavities: 12,
    maxCapacity: "600ml",
    outputPerHour: "23000-24000",
    outputBand: "8000+",
    neckRange: "Φ20mm ~ Φ38mm",
    maxDiameter: "Φ68mm",
    maxHeight: "<250mm",
    automation: "servo-auto",
    visibleInCatalog: true,
    featured: true,
    status: "on-sale",
    image: "/images/products/zy-12xq-01.jpg",
    images: [
      "/images/products/zy-12xq-01.jpg",
      "/images/products/zy-12xq-02.jpg",
      "/images/products/zy-12xq-03.jpg",
      "/images/products/zy-12xq-04.jpg",
      "/images/products/zy-12xq-05.jpg",
      "/images/products/zy-12xq-06.jpg",
      "/images/products/zy-12xq-07.jpg",
      "/images/products/zy-12xq-08.jpg"
    ],
    i18n: {
      en: {
        name: "12-Cavity Fully Automatic Servo Blow Molding Machine",
        usage: "Beverage bottles / mineral water bottles",
        sellingPoint: "High-output PET bottle equipment for continuous production lines.",
        features: sharedFeatures.en
      },
      zh: {
        name: "一出12全自动伺服吹瓶机",
        usage: "饮料瓶 / 矿泉水瓶",
        sellingPoint: "面向高产能 PET 瓶生产线，适合连续化批量生产。",
        features: sharedFeatures.zh
      }
    }
  },
  {
    id: "zy-08x",
    model: "ZY-08X",
    excelModel: "ZY08X",
    sourceMatch: "旧站 + Excel",
    category: "fully-auto",
    material: "PET",
    cavities: 8,
    maxCapacity: "600ml",
    outputPerHour: "15500-16500",
    outputBand: "8000+",
    neckRange: "Φ20mm ~ Φ38mm",
    maxDiameter: "Φ68mm",
    maxHeight: "<250mm",
    automation: "servo-auto",
    visibleInCatalog: true,
    featured: true,
    status: "on-sale",
    image: "/images/products/zy-08x-01.jpg",
    images: [
      "/images/products/zy-08x-01.jpg",
      "/images/products/zy-08x-02.jpg",
      "/images/products/zy-08x-03.jpg",
      "/images/products/zy-08x-04.jpg",
      "/images/products/zy-08x-05.jpg",
      "/images/products/zy-08x-06.jpg",
      "/images/products/zy-08x-07.jpg",
      "/images/products/zy-08x-08.jpg"
    ],
    i18n: {
      en: {
        name: "8-Cavity Servo Automatic Blow Molding Machine",
        usage: "Beverage bottles / mineral water bottles",
        sellingPoint: "A balanced high-output model for small PET bottle production.",
        features: sharedFeatures.en
      },
      zh: {
        name: "一出八伺服自动吹瓶机",
        usage: "饮料瓶 / 矿泉水瓶",
        sellingPoint: "兼顾产能和设备占地，适合中高产线升级。",
        features: sharedFeatures.zh
      }
    }
  },
  {
    id: "zy-02d-152-4",
    model: "ZY-02D-152.4mm",
    excelModel: "ZY02SF5-152.4",
    sourceMatch: "旧站命名 + Excel型号/参数",
    category: "pet",
    material: "PET",
    cavities: 2,
    maxCapacity: "2800ml",
    outputPerHour: "1200-2000",
    outputBand: "1000-3000",
    neckRange: "Φ38mm ~ Φ125mm",
    maxDiameter: "Φ140mm",
    maxHeight: "<260mm",
    automation: "fully-auto",
    visibleInCatalog: true,
    featured: true,
    status: "on-sale",
    image: "/images/products/zy-02d-152-4-01.jpg",
    images: [
      "/images/products/zy-02d-152-4-01.jpg",
      "/images/products/zy-02d-152-4-02.jpg",
      "/images/products/zy-02d-152-4-03.jpg"
    ],
    i18n: {
      en: {
        name: "2-Cavity Wide-Mouth Blow Molding Machine",
        usage: "Wide-mouth bottles / food packaging containers",
        sellingPoint: "Designed for wide-mouth PET bottle and container applications.",
        features: [...sharedFeatures.en, "Dedicated to wide-mouth preform blowing"]
      },
      zh: {
        name: "一出二广口吹瓶机",
        usage: "广口瓶 / 食品包装容器",
        sellingPoint: "专用于广口瓶胚吹制，适合广口 PET 容器生产。",
        features: [...sharedFeatures.zh, "专用于广口瓶胚吹制"]
      }
    }
  },
  {
    id: "zy-02sf-114-3",
    model: "ZY-02SF 114.3mm",
    excelModel: "ZY02A6-114.3",
    sourceMatch: "旧站命名 + Excel型号/参数",
    category: "pet",
    material: "PET",
    cavities: 2,
    maxCapacity: "1000ml",
    outputPerHour: "1000-2000",
    outputBand: "1000-3000",
    neckRange: "Φ20mm ~ Φ68mm",
    maxDiameter: "Φ100mm",
    maxHeight: "<220mm",
    automation: "fully-auto",
    visibleInCatalog: true,
    featured: false,
    status: "on-sale",
    image: "/images/products/zy-02sf-114-3-01.jpg",
    images: [
      "/images/products/zy-02sf-114-3-01.jpg",
      "/images/products/zy-02sf-114-3-02.jpg",
      "/images/products/zy-02sf-114-3-03.jpg",
      "/images/products/zy-02sf-114-3-04.jpg",
      "/images/products/zy-02sf-114-3-05.jpg"
    ],
    i18n: {
      en: {
        name: "2-Cavity 114.3mm Pitch Blow Molding Machine",
        usage: "PET bottles / small and medium containers",
        sellingPoint: "A 2-cavity PET bottle machine for 114.3mm pitch bottle production.",
        features: sharedFeatures.en
      },
      zh: {
        name: "一出二节距114.3mm",
        usage: "PET瓶 / 中小容量容器",
        sellingPoint: "2腔吹瓶，适合 114.3mm 节距瓶型生产。",
        features: sharedFeatures.zh
      }
    }
  },
  {
    id: "zy-04sf",
    model: "ZY-04SF",
    excelModel: "ZY04sf-2升",
    sourceMatch: "旧站 + Excel",
    category: "fully-auto",
    material: "PET",
    cavities: 4,
    maxCapacity: "2L",
    outputPerHour: "2800-5500",
    outputBand: "3000-8000",
    neckRange: "Φ20mm ~ Φ38mm",
    maxDiameter: "Φ110mm",
    maxHeight: "<300mm",
    automation: "servo-auto",
    visibleInCatalog: true,
    featured: true,
    status: "on-sale",
    image: "/images/products/zy-04sf-01.jpg",
    images: [
      "/images/products/zy-04sf-01.jpg",
      "/images/products/zy-04sf-02.jpg",
      "/images/products/zy-04sf-03.jpg",
      "/images/products/zy-04sf-04.jpg",
      "/images/products/zy-04sf-05.jpg",
      "/images/products/zy-04sf-06.jpg",
      "/images/products/zy-04sf-07.jpg"
    ],
    i18n: {
      en: {
        name: "4-Cavity Fully Automatic Servo Blow Molding Machine",
        usage: "2L PET bottles / beverage containers",
        sellingPoint: "4-cavity servo equipment for 2L PET bottle production.",
        features: sharedFeatures.en
      },
      zh: {
        name: "1出4全自动伺服吹瓶机",
        usage: "2L PET瓶 / 饮料容器",
        sellingPoint: "瓶子间距 114.3mm，适合 2L PET 瓶生产。",
        features: sharedFeatures.zh
      }
    }
  },
  {
    id: "zy-04d-76-2",
    model: "ZY-04D 76.2mm",
    excelModel: "ZY04D76.2",
    sourceMatch: "旧站 + Excel",
    category: "fully-auto",
    material: "PET",
    cavities: 4,
    maxCapacity: "600ml",
    outputPerHour: "5000-6000",
    outputBand: "3000-8000",
    neckRange: "Φ20mm ~ Φ38mm",
    maxDiameter: "Φ70mm",
    maxHeight: "<240mm",
    automation: "fully-auto",
    visibleInCatalog: true,
    featured: false,
    status: "on-sale",
    image: "/images/products/zy-04d-76-2-01.jpg",
    images: [
      "/images/products/zy-04d-76-2-01.jpg",
      "/images/products/zy-04d-76-2-02.jpg"
    ],
    i18n: {
      en: {
        name: "4-Cavity 76.2mm Pitch Blow Molding Machine",
        usage: "Small PET bottles / beverage containers",
        sellingPoint: "Compact 4-cavity equipment for 600ml PET bottle production.",
        features: sharedFeatures.en
      },
      zh: {
        name: "一出四节距76.2mm",
        usage: "小容量 PET瓶 / 饮料容器",
        sellingPoint: "瓶子间距 76.2mm，适合 600ml PET 瓶生产。",
        features: sharedFeatures.zh
      }
    }
  }
];

export const categories = {
  "fully-auto": { en: "Fully Automatic", zh: "全自动吹瓶机" },
  pet: { en: "PET Blow Molding", zh: "PET吹瓶机" },
  pp: { en: "PP Blow Molding", zh: "PP吹瓶机" },
  "large-capacity": { en: "Large Capacity", zh: "大容量设备" },
  custom: { en: "Custom Solution", zh: "定制方案" }
};

export const automationLabels = {
  "servo-auto": { en: "Servo Fully Automatic", zh: "伺服全自动" },
  "fully-auto": { en: "Fully Automatic", zh: "全自动" },
  "semi-auto": { en: "Semi Automatic", zh: "半自动" }
};

export const outputBands = {
  "1000-3000": { en: "1,000 - 3,000 bph", zh: "1000 - 3000 瓶/小时" },
  "3000-8000": { en: "3,000 - 8,000 bph", zh: "3000 - 8000 瓶/小时" },
  "8000+": { en: "8,000+ bph", zh: "8000+ 瓶/小时" }
};

export const capacityBands = {
  "under-1l": { en: "Up to 1L", zh: "1L 以内" },
  "1l-2l": { en: "1L - 2L", zh: "1L - 2L" },
  "over-2l": { en: "Above 2L", zh: "2L 以上" }
};

function capacityToMl(capacity = "") {
  const match = String(capacity).match(/([\d.]+)\s*(ml|l)/i);
  if (!match) return null;
  const value = Number(match[1]);
  return match[2].toLowerCase() === "l" ? value * 1000 : value;
}

export function getCapacityBand(product) {
  const ml = capacityToMl(product.maxCapacity);
  if (ml == null) return "";
  if (ml <= 1000) return "under-1l";
  if (ml <= 2000) return "1l-2l";
  return "over-2l";
}

export function getCategoryLabel(category, locale = "en") {
  return categories[category]?.[locale] ?? category;
}

export function getAutomationLabel(automation, locale = "en") {
  return automationLabels[automation]?.[locale] ?? automation;
}

export function getProductText(product, locale = "en") {
  return product.i18n[locale] ?? product.i18n.en;
}

export function getFeaturedProducts(list = products) {
  return list.filter((product) => product.visibleInCatalog && product.featured);
}

export function getRelatedProducts(product, list = products, limit = 3) {
  return list
    .filter((item) => item.visibleInCatalog && item.id !== product.id && item.category === product.category)
    .slice(0, limit);
}

export function getVisibleProducts() {
  return products.filter((product) => product.visibleInCatalog);
}

export function getProductById(id) {
  return products.find((product) => product.id === id);
}
