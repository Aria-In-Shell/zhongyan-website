const PB_URL = process.env.PB_URL ?? "http://127.0.0.1:8090";
const PB_ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL ?? "admin@zhongyan.local";
const PB_ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD ?? "ZhongyanDemo2026!";

const { products } = await import("../src/data/products.js");

async function request(path, options = {}) {
  const response = await fetch(`${PB_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers ?? {})
    }
  });

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new Error(`${options.method ?? "GET"} ${path} failed: ${response.status} ${text}`);
  }
  return data;
}

async function auth() {
  const data = await request("/api/collections/_superusers/auth-with-password", {
    method: "POST",
    body: JSON.stringify({
      identity: PB_ADMIN_EMAIL,
      password: PB_ADMIN_PASSWORD
    })
  });
  return data.token;
}

function headers(token) {
  return { Authorization: `Bearer ${token}` };
}

async function collectionExists(name, token) {
  try {
    await request(`/api/collections/${name}`, { headers: headers(token) });
    return true;
  } catch (error) {
    if (String(error.message).includes("404")) return false;
    throw error;
  }
}

async function createCollection(collection, token) {
  if (await collectionExists(collection.name, token)) {
    console.log(`skip collection ${collection.name}`);
    return;
  }
  await request("/api/collections", {
    method: "POST",
    headers: headers(token),
    body: JSON.stringify(collection)
  });
  console.log(`created collection ${collection.name}`);
}

const text = (name, required = false) => ({
  name,
  type: "text",
  required,
  presentable: false,
  unique: false,
  options: { min: null, max: null, pattern: "" }
});

const number = (name, required = false) => ({
  name,
  type: "number",
  required,
  presentable: false,
  unique: false,
  options: { min: null, max: null, noDecimal: false }
});

const bool = (name) => ({
  name,
  type: "bool",
  required: false,
  presentable: false,
  unique: false,
  options: {}
});

const json = (name) => ({
  name,
  type: "json",
  required: false,
  presentable: false,
  unique: false,
  options: { maxSize: 2000000 }
});

const productsCollection = {
  name: "products",
  type: "base",
  system: false,
  listRule: "",
  viewRule: "",
  createRule: null,
  updateRule: null,
  deleteRule: null,
  fields: [
    text("productId", true),
    text("model", true),
    text("excelModel"),
    text("sourceMatch"),
    text("category"),
    text("material"),
    number("cavities"),
    text("maxCapacity"),
    text("outputPerHour"),
    text("outputBand"),
    text("neckRange"),
    text("maxDiameter"),
    text("maxHeight"),
    text("automation"),
    bool("visibleInCatalog"),
    bool("featured"),
    text("status"),
    text("image"),
    json("images"),
    json("i18n")
  ]
};

const leadsCollection = {
  name: "leads",
  type: "base",
  system: false,
  listRule: null,
  viewRule: null,
  createRule: "",
  updateRule: null,
  deleteRule: null,
  fields: [
    text("name", true),
    text("email", true),
    text("phone"),
    text("company"),
    text("interestedModel"),
    text("material"),
    text("capacity"),
    text("targetOutput"),
    bool("wholeLine"),
    text("message", true),
    text("sourcePage"),
    text("locale"),
    text("status"),
    text("assignee"),
    text("followUpNote")
  ]
};

function productPayload(product) {
  return {
    productId: product.id,
    model: product.model,
    excelModel: product.excelModel ?? "",
    sourceMatch: product.sourceMatch ?? "",
    category: product.category,
    material: product.material,
    cavities: product.cavities,
    maxCapacity: product.maxCapacity,
    outputPerHour: product.outputPerHour,
    outputBand: product.outputBand,
    neckRange: product.neckRange,
    maxDiameter: product.maxDiameter,
    maxHeight: product.maxHeight,
    automation: product.automation,
    visibleInCatalog: product.visibleInCatalog,
    featured: product.featured,
    status: product.status,
    image: product.image,
    images: product.images ?? [product.image],
    i18n: product.i18n
  };
}

async function upsertProducts(token) {
  const existing = await request("/api/collections/products/records?perPage=200", {
    headers: headers(token)
  });
  const byProductId = new Map(existing.items.map((item) => [item.productId, item]));

  for (const product of products) {
    const payload = productPayload(product);
    const existingRecord = byProductId.get(product.id);
    if (existingRecord) {
      await request(`/api/collections/products/records/${existingRecord.id}`, {
        method: "PATCH",
        headers: headers(token),
        body: JSON.stringify(payload)
      });
      console.log(`updated product ${product.model}`);
    } else {
      await request("/api/collections/products/records", {
        method: "POST",
        headers: headers(token),
        body: JSON.stringify(payload)
      });
      console.log(`created product ${product.model}`);
    }
  }
}

const token = await auth();
await createCollection(productsCollection, token);
await createCollection(leadsCollection, token);
await upsertProducts(token);
console.log("PocketBase initialization complete.");
