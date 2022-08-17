import { createI18n } from "vue-i18n";
import en from "./src/locales/en.json";

function getLang() {
  if (navigator.languages != undefined) return navigator.languages[0];
  return navigator.language;
}

const i18n = createI18n({
  globalInjection: true,
  legacy: false,
  locale: getLang().split("-")[0],
  fallbackLocale: "en",
  messages: {
    en: en,
  },
});

export default i18n;
