import { products as fallbackProducts } from "./products.js";

const DEFAULT_PB_URL = "http://127.0.0.1:8090";

function getPocketBaseUrl() {
  return import.meta.env.PUBLIC_PB_URL || DEFAULT_PB_URL;
}

function fromPocketBaseRecord(record) {
  return {
    id: record.productId,
    model: record.model,
    excelModel: record.excelModel,
    sourceMatch: record.sourceMatch,
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

export async function getProducts() {
  const url = `${getPocketBaseUrl()}/api/collections/products/records?perPage=200&filter=${encodeURIComponent("visibleInCatalog=true")}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`PocketBase products request failed: ${response.status}`);
    }

    const data = await response.json();
    return data.items.map(fromPocketBaseRecord);
  } catch (error) {
    console.warn(`Using fallback products because PocketBase is unavailable at ${getPocketBaseUrl()}.`);
    return fallbackProducts.filter((product) => product.visibleInCatalog);
  }
}

export async function getProduct(id) {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
