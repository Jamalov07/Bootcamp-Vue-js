<template>
  <header class="bg-green-500">
    <div class="container mx-auto">
      <nav class="flex w-full justify-between h-[75px] items-center">
        <a href="/" class="text-white uppercase nav-logo font-bold text-2xl"
          >VUE.APP</a
        >
        <ul
          class="nav__list flex min-w-[10%] uppercase justify-between text-white"
        >
          <li class="nav__list--item">
            <RouterLink class="nav__list--item-link p-3" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav__list--item">
            <RouterLink class="nav__list--item-link p-3" to="/userlist"
              >User list</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
import { RouterLink } from "vue-router";
export default {
  name: "Header",
};
</script>
<style scoped>
.router-link-active {
  color: yellow !important;
  text-decoration: underline;
  font-weight: 900;
}
</style>
