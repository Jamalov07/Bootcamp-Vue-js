<template>
  <div class="flex w-full">
    <Sidebar />
    <RouterView />
  </div>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";
import Sidebar from "./components/Sidebar/Sidebar.vue";
export default {
  name: "App",
  components: {
    Sidebar,
  },
};
</script>
<style></style>
