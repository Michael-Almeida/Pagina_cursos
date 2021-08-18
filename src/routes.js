import VueRouter from "vue-router";
import Home from "./pages/Home.vue";


const routes = [
    { path: "/", component: Home, name: 'home' },
]


const router = new VueRouter({
    routes,
    mode: "history",
});

export default router;