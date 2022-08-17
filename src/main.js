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
  },
};

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mixin(mixin);
app.mount("#app");
