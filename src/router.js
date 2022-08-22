import {
    createRouter,
    createWebHistory
} from "vue-router";
import HomePage from "./components/HomePage.vue";
import QuotesPage from "./components/QuotesPage.vue";
import TranslatePage from "./components/TranslatePage.vue";
import PageNotFound from "./components/PageNotFound.vue";
import BoredPage from "./components/BoredPage.vue";
import DictionaryPage from "./components/DictionaryPage.vue";
import RandomUserPage from "./components/RandomUserPage.vue";
import CountriesPage from "./components/CountriesPage.vue";

const routes = [{
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
        path: "/countries",
        name: "Countries",
        component: CountriesPage,
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
    mode: "history",
    routes,
    scrollBehavior: function(_to, _from, savedPosition) {
        return savedPosition ? savedPosition : window.scrollTo(0, 0);
    },
});

router.afterEach((to) => {
    // set the page title
    document.title = to.name;
    // set the icon
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.getElementsByTagName("head")[0].appendChild(link);
    }
    const fileName = to.path == "/" ? "/home" : to.path;
    link.href = "/assets" + fileName + ".svg";
});

export default router;