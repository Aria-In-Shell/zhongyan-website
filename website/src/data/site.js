export const site = {
  company: {
    en: "Jiangxi Zhongyan Intelligent Equipment Co., Ltd.",
    zh: "江西中研智能装备有限公司"
  },
  brand: "Zhongyan",
  // 占位联系方式：待公司统一提供后替换（待确认清单 A4）
  email: "26737038@qq.com",
  phone: "+86 000 0000 0000",
  whatsapp: "8600000000000",
  wechat: "placeholder-wechat-id",
  address: {
    en: "No. 6 Yichun Avenue, Yichun Economic and Technological Development Zone, Jiangxi, China",
    zh: "江西省宜春经济技术开发区宜春大道6号"
  },
  madeInChina: "",
  // 响应时效承诺（待确认清单 D20，先按 24 小时占位）
  replyPromise: {
    en: "We reply within 24 hours",
    zh: "我们将在 24 小时内回复"
  }
};

export function whatsappLink(prefillText = "") {
  const text = prefillText ? `?text=${encodeURIComponent(prefillText)}` : "";
  return `https://wa.me/${site.whatsapp}${text}`;
}
