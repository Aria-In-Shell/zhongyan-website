import { products as fallbackProducts } from "./products.js";

const DEFAULT_PB_URL = "http://127.0.0.1:8090";

function getPocketBaseUrl() {
  return import.meta.env.PUBLIC_PB_URL || DEFAULT_PB_URL;
}

// 注意：excelModel / sourceMatch 属于内部对账字段，不映射到前台。
function fromPocketBaseRecord(record) {
  return {
    id: record.productId,
    model: record.model,
    category: record.category,
    material: record.material,
    cavities: record.cavities,
    maxCapacity: record.maxCapacity,
    outputPerHour: record.outputPerHour,
    outputBand: record.outputBand,
    neckRange: record.neckRange,
    maxDiameter: record.maxDiameter,
    maxHeight: record.maxHeight,
    automation: record.automation,
    visibleInCatalog: record.visibleInCatalog,
    featured: record.featured,
    status: record.status,
    image: record.image,
    images: record.images?.length ? record.images : [record.image],
    i18n: record.i18n
  };
}

let loggedSource = false;

function logDataSource(source, detail = "") {
  if (loggedSource) return;
  loggedSource = true;
  console.log(`[products] data source for this build: ${source}${detail ? ` (${detail})` : ""}`);
}

export async function getProducts() {
  const url = `${getPocketBaseUrl()}/api/collections/products/records?perPage=200&filter=${encodeURIComponent("visibleInCatalog=true")}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`PocketBase products request failed: ${response.status}`);
    }

    const data = await response.json();
    logDataSource("PocketBase", getPocketBaseUrl());
    return data.items.map(fromPocketBaseRecord);
  } catch (error) {
    logDataSource("LOCAL FALLBACK", `PocketBase unavailable at ${getPocketBaseUrl()}`);
    return fallbackProducts
      .filter((product) => product.visibleInCatalog)
      .map(({ excelModel, sourceMatch, ...product }) => product);
  }
}

export async function getProduct(id) {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
