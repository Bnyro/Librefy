import { defineConfig } from "unocss";
import transformerDirective from "@unocss/transformer-directives";
import { presetUno, presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify()],
  darkMode: "media",
  transformers: [transformerDirective()],
});
