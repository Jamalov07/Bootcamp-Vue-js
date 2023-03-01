<template>
  <div
    class="w-[96px] h-screen bg-white rounded-r-xl shadow-xl flex flex-col justify-between items-center py-5 fixed z-20"
  >
    <div class="mx-auto">
      <i class="bx bxs-color text-7xl font-light"></i>
    </div>
    <div class="pl-[29px] pr-[25px]">
      <ul class="flex flex-col justify-between h-full gap-3">
        <li v-for="item in naviLinks">
          <RouterLink
            :to="item.path"
            class="w-[42px] h-[40px] flex items-center justify-center rounded-[7px]"
            ><i :class="`bx ${item.icon} text-2xl font-light`"></i
          ></RouterLink>
        </li>
      </ul>
    </div>
    <div class="relative">
      <img
        src="https://picsum.photos/id/234/120/240"
        alt="img"
        class="rounded-3xl w-[50px] h-[50px]"
      />
      <div
        class="h-3 w-3 rounded-full bg-green-600 absolute bottom-0 right-0"
      ></div>
    </div>
  </div>
</template>
<script>
import navLinks from "../../constants/navLinks";

export default {
  name: "Sidebar",
  data() {
    return {
      naviLinks: navLinks,
    };
  },
};
</script>
<style scoped>
.router-link-active {
  background-color: #e3ecff;
}
.router-link-active > i {
  color: #0b5ffd;
}
</style>
