<template>
  <header class="shadow fixed t-0 w-full z-10 bg-white">
    <div class="container-fluid">
      <nav class="flex w-full justify-between h-[70px] items-center p-4">
        <a href="" class="nav__logo text-2xl font-bold text-indigo-600">
          LOGO
        </a>
        <div
          class="nav__menu flex justify-between w-[260px] items-center p-2 cursor-pointer"
        >
          <i
            @click="toggleBtn"
            class="bx bx-menu text-3xl text-indigo-600 active:bg-indigo-100 hover:text-black hover:bg-indigo-200 rounded-lg"
          ></i>
          <div class="nav__user flex items-center justify-between">
            <span class="font-semibold text-indigo-800 mr-2">Sardor Uzoqov</span
            ><i class="bx bxs-user-circle text-2xl"></i>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    toggleBtn: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style></style>
