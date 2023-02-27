<template>
  <header>
    <div class="container mx-auto py-[19px] h-[90px]">
      <nav class="flex justify-between items-center">
        <img src="../../assets/images/Logo.svg" alt="logo" />
        <ul class="flex justify-between items-center w-[30%]">
          <li v-for="item in navLink" :key="item.id">
            <RouterLink :to="item.link">{{ item.title }}</RouterLink>
          </li>
        </ul>
        <Button
          textContent="Contact me"
          class="bg-white text-[#5E3BEE] border-[#5E3BEE] hover:bg-[#5E3BEE] hover:text-white"
        >
          <RouterLink to="/contact">Contact me</RouterLink>
        </Button>
      </nav>
    </div>
  </header>
</template>
<script>
import Button from "../../ui/Button/Button.vue";
import navLinks from "../../constants/navLinks";
import { RouterLink } from "vue-router";
export default {
  name: "Header",
  data() {
    return {
      navLink: navLinks,
    };
  },
  components: {
    Button,
  },
};
</script>
<style scoped>
header {
  box-shadow: 0px 5.33333px 80px rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative;
}
</style>
