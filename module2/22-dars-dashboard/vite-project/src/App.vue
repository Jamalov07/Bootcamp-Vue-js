<template>
  <Header :toggleBtn="toggleMenu" />
  <main class="flex">
    <aside class="sticky z-20 max-w-[320px] top-0">
      <Sidebar :toggle="toggled" />
    </aside>
    <div class="main bg-indigo-100 w-full h-screen mt-[70px] p-8">
      <RouterView />
    </div>
  </main>
  <Footer />
</template>

<script>
import Header from "./components/Header/Header.vue";
import Sidebar from "./components/Sidebar/Sidebar.vue";
import Footer from "./components/Footer/Footer.vue";
import Home from "./views/Home/Home.vue";
import Form from "./components/Form/Form.vue";
import { RouterView } from "vue-router";
export default {
  name: "App",
  components: {
    Header,
    Sidebar,
    Footer,
    Form,
  },
  data() {
    return {
      toggled: true,
    };
  },
  methods: {
    toggleMenu() {
      this.toggled = !this.toggled;
    },
  },
};
</script>

<style scoped></style>
