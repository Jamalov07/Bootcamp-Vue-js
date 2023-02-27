import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home/Home.vue";
import Portfolio from "../views/Portfolio/Portfolio.vue";
import About from "../views/About/About.vue";
import Testimonials from "../views/Testimonials/Testimonials.vue";
import Contact from "../views/Contact/Contact.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: Portfolio,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/testimonials",
      name: "testimonials",
      component: Testimonials,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
  ],
});

export default router;
