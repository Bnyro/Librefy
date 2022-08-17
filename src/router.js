import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import QuotesPage from "./components/QuotesPage.vue";
import TranslatePage from "./components/TranslatePage.vue";
import PageNotFound from "./components/PageNotFound.vue";
import BoredPage from "./components/BoredPage.vue";
import DictionaryPage from "./components/DictionaryPage.vue";
import RandomUserPage from "./components/RandomUserPage.vue";
import IPInfoPage from "./components/IPInfoPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
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
  {
    path: "/user",
    name: "Random User",
    component: RandomUserPage,
  },
  {
    path: "/dict",
    name: "Dictionary",
    component: DictionaryPage,
  },
  {
    path: "/ip",
    name: "IP Info",
    component: IPInfoPage,
  },
  {
    path: "/bored",
    name: "Bored",
    component: BoredPage,
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: PageNotFound,
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
