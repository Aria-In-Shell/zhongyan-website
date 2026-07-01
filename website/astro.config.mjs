import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://aria-in-shell.github.io/zhongyan-website/",
  base: process.env.GITHUB_ACTIONS ? "/zhongyan-website" : "/",
  output: "static"
});
