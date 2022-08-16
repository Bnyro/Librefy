import { defineConfig } from "unocss";
import transformerDirective from "@unocss/transformer-directives";

export default defineConfig({
  darkMode: "media",
  transformers: [transformerDirective()],
});
