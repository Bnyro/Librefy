import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import i18n from "@intlify/unplugin-vue-i18n/vite";
import Unocss from "unocss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss(),
    i18n({
      include: path.resolve(__dirname, "./src/locales/**"),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
