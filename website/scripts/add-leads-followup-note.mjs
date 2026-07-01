const PB_URL = process.env.PB_URL ?? "http://127.0.0.1:8090";
const PB_ADMIN_EMAIL = process.env.PB_ADMIN_EMAIL ?? "admin@zhongyan.local";
const PB_ADMIN_PASSWORD = process.env.PB_ADMIN_PASSWORD ?? "ZhongyanDemo2026!";

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

const auth = await request("/api/collections/_superusers/auth-with-password", {
  method: "POST",
  body: JSON.stringify({
    identity: PB_ADMIN_EMAIL,
    password: PB_ADMIN_PASSWORD
  })
});

const headers = { Authorization: `Bearer ${auth.token}` };
const leads = await request("/api/collections/leads", { headers });
const hasField = leads.fields.some((field) => field.name === "followUpNote");

if (hasField) {
  console.log("leads.followUpNote already exists");
} else {
  leads.fields.push({
    name: "followUpNote",
    type: "text",
    required: false,
    presentable: false,
    unique: false,
    options: { min: null, max: null, pattern: "" }
  });

  await request(`/api/collections/${leads.id}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ fields: leads.fields })
  });
  console.log("added leads.followUpNote");
}
