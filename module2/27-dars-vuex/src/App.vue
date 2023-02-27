<template>
  <header class="bg-cyan-700">
    <div class="container mx-auto">
      <nav class="bg-cyan-700 flex justify-between px-4 items-center h-[70px]">
        <a href="#" class="text-white text-2xl">VUE-ROUTER</a>
        <ul class="flex w-3/12 justify-between">
          <li>
            <RouterLink class="p-[10px]" to="/">Home</RouterLink>
          </li>
          <li>
            <RouterLink class="p-[10px]" to="/post">Post</RouterLink>
          </li>
          <li>
            <RouterLink class="p-[10px]" to="/user">Users</RouterLink>
          </li>
          <li>
            <RouterLink class="p-[10px]" to="/about">About</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <main>
    <section class="main">
      <div class="container mx-auto px-5">
        <RouterView />
      </div>
    </section>
  </main>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  name: "App",
};
</script>
<style>
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
}

.main {
  min-height: calc(100vh - 70px 5px);
}
</style>
