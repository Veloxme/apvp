// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://Veloxme.github.io",
  base: "/apvp/",
  integrations: [tailwind()],
});
