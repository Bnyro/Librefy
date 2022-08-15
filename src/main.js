import { createApp } from "vue";
import App from "./App.vue";
import "windi.css";
import router from "./router";

const mixin = {
  methods: {
    async fetchJSON(url, options) {
      return fetch("https://api.quotable.io" + url, options).then((response) => {
        return response.json();
      });
    },
  },
};

const app = createApp(App);
app.use(router);
app.mixin(mixin);
app.mount("#app");
