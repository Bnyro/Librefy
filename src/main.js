import { createApp } from "vue";
import App from "./App.vue";
import "uno.css";
import router from "./router.js";

const mixin = {
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
app.mixin(mixin);
app.mount("#app");
