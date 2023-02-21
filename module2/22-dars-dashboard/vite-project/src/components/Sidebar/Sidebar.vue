<template>
  <div v-if="toggle" class="bg-white w-[320px] min-h-screen shadow-lg">
    <a
      href="/"
      class="text-2xl font-bold bg-white p-5 text-center block text-indigo-600"
      >ADMIN DASHBOARD</a
    >

    <ul class="list mt-10">
      <li class="list__item py-1 px-2" v-for="item in navlink" :key="item.id">
        <RouterLink
          :to="item.link"
          class="list__item--link flex items-center rounded-lg shadow border hover:bg-indigo-50 duration-300 font-medium bg-white min-w-full p-4"
          ><i class="bx text-2xl mr-3" :class="item.icon"></i>
          <span>{{ item.title }}</span></RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<script>
import navlinks from "../../constants/navlinks";
import { RouterLink } from "vue-router";
export default {
  name: "Sidebar",
  props: {
    toggle: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      navlink: navlinks,
    };
  },
};
</script>

<style scoped>
.router-link-active {
  background-color: blueviolet !important;
  color: white !important;
  font-weight: 600 !important;
}
</style>
