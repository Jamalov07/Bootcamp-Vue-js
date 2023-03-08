<script setup>
import navLinks from "../constants/navLinks";
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="w-[300px] h-screen text-[#0000FF]">
    <div class="flex flex-col justify-between gap-6">
      <h1 class="py-5 px-3 bg-white rounded-md text-center">LOGO</h1>
      <ul class="flex flex-col h-[700px] gap-y-4 bg-white rounded-md py-10">
        <li v-for="nav in navLinks" :key="nav.id" class="font-light text-xl">
          <RouterLink
            :to="nav.path"
            class="py-4 px-7 flex text-md items-center gap-2"
          >
            <i :class="`text-2xl bx ${nav.icon}`"></i>
            <h1>{{ nav.title }}</h1>
          </RouterLink>
        </li>
      </ul>
      <h1 class="py-3 px-3 bg-white rounded-md text-center">
        <div class="flex justify-center items-center gap-2">
          <i class="bx bx-exit"></i>
          <h1>Chiqish</h1>
        </div>
      </h1>
    </div>
  </div>
</template>

<style>
.router-link-active {
  background: linear-gradient(
    270deg,
    rgba(0, 0, 255, 0.17) 42.31%,
    rgba(0, 0, 255, 0) 92.79%
  );
}
</style>
