import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Students from "../views/Students.vue";
import Groups from "../views/Groups.vue";
import Lessons from "../views/Lessons.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/groups",
      name: "groups",
      component: Groups,
    },
    {
      path: "/students",
      name: "students",
      component: Students,
    },
    {
      path: "/lessons",
      name: "lessons",
      component: Lessons,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
  ],
});

export default router;
