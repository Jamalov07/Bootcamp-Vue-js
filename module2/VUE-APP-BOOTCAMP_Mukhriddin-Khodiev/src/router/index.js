import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/signin",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "registration",
      component: () => import("../views/Registration.vue"),
    },
    {
      path: "/admin",
      component: () => import("../views/Admin.vue"),

      children: [
        {
          path: "/admin/add",
          name: "adminadd",
          component: () => import("../views/AddAdmin.vue"),
        },
        {
          path: "/admin/list",
          name: "adminlist",
          component: () => import("../views/AdminLists.vue"),
        },
      ],
    },
    {
      path: "/post",
      name: "post",
      component: () => import("../views/Post.vue"),

      children: [
        {
          path: "/post/add",
          name: "postadd",
          component: () => import("../views/PostAdd.vue"),
        },
        {
          path: "/post/list",
          name: "postlist",
          component: () => import("../views/PostList.vue"),
        },
      ],
    },
    {
      path: "/category",
      component: () => import("../views/Category.vue"),

      children: [
        {
          path: "/category/add",
          name: "categoryadd",
          component: () => import("../views/AddCategory.vue"),
        },
        {
          path: "/category/list",
          name: "categorylist",
          component: () => import("../views/CategoryLists.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "erorr",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
