import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import config from "../config.js";
import i18n from "../i18n.js";
import "uno.css";

const mixin = {
  data() {
    return {
      config: config,
    };
  },
  methods: {
    async fetchJSON(url, options) {
      return fetch(url, options).then((response) => {
        return response.json();
      });
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    formatNumber (number) {
      // Nine Zeroes for Billions
      return Math.abs(Number(number)) >= 1.0e+9

      ? (Math.abs(Number(number)) / 1.0e+9).toFixed(2) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(number)) >= 1.0e+6

      ? (Math.abs(Number(number)) / 1.0e+6).toFixed(2) + "M"
      // Three Zeroes for Thousands
      : Math.abs(Number(number)) >= 1.0e+3

      ? (Math.abs(Number(number)) / 1.0e+3).toFixed(2) + "K"

      : Math.abs(Number(number));
    }
  },
};

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mixin(mixin);
app.mount("#app");
