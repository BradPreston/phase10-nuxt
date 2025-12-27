import tailwindcss from "@tailwindcss/vite";

import "./lib/env.ts";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
});
