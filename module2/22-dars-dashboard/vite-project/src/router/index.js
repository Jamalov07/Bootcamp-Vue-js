import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import About from "../views/About/About.vue";
import Users from "../views/Users/Users.vue";
import Range from "../views/Range/Range.vue";
import Extra from "../views/Extra/Extra.vue";
import User from "../views/User/User.vue";
import Forms from "../views/Forms/Forms.vue";
import Buttons from "../views/Buttons/Buttons.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/users", name: "users", component: Users },
    { path: "/stat", name: "range", component: Range },
    { path: "/extra", name: "extra", component: Extra },
    { path: "/profil", name: "users", component: User },
    { path: "/buttons", name: "buttons", component: Buttons },
    { path: "/forms", name: "forms", component: Forms },
  ],
});

export default router;
