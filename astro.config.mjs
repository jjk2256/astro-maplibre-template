// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://astro-maplibre-template.github.io",
  base: "astro-maplibre-template",
  integrations: [mdx(), sitemap(), tailwind()],
});
