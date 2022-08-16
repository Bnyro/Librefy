import { createRouter, createWebHistory } from "vue-router";
import QuotesPage from "./components/QuotesPage.vue";
import TranslatePage from "./components/TranslatePage.vue";

const routes = [
  {
    path: "/quotes",
    name: "Quotes",
    component: QuotesPage,
  },
  {
    path: "/translate",
    name: "Translator",
    component: TranslatePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: function (_to, _from, savedPosition) {
    return savedPosition ? savedPosition : window.scrollTo(0, 0);
  },
});

// automatically set the document title
router.afterEach((to) => {
  document.title = to.name;
});

export default router;
