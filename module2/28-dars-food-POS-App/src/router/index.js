import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Discount from "../views/Discount.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/discount",
      name: "discount",
      component: Discount,
    },
    // {
    //   path: "/dashboard",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/message",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/notification",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/setting",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/home",
    //   name: "home",
    //   component: Home,
    // },
    // {
    //   path: "/exit",
    //   name: "home",
    //   component: Home,
    // },
  ],
});

export default router;
