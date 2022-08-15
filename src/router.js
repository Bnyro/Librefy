import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Quotify",
    component: () => import("./components/QuotifyPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (_to, _from, savedPosition) {
    return savedPosition ? savedPosition : window.scrollTo(0, 0);
  },
});

export default router;
