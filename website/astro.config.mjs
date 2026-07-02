import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aria-in-shell.github.io/zhongyan-website/",
  base: process.env.GITHUB_ACTIONS ? "/zhongyan-website" : "/",
  output: "static",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin"),
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", zh: "zh-CN" }
      }
    })
  ]
});
