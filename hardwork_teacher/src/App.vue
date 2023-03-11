<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import { RouterView } from "vue-router";
import checkToken from "./helper/checkToken";
import Login from "./views/Login.vue";
const router = useRouter();
</script>
<template>
  <!-- <template v-if="checkToken(router)">
    <div class="main py-[30px] px-[70px]">
      <div class="flex justify-between gap-4">
        <Sidebar />
        <div class="flex flex-col gap-6">
          <Header />
          <RouterView />
        </div>
      </div>
    </div>
  </template>
  <template v-else> -->
  <Login />
  <!-- </template> -->
</template>
<style scoped>
.main {
  background: rgba(54, 46, 146, 0.06);
}
</style>
