<template>
  <footer class="bg-[#F5FCFF] mb-20">
    <div
      class="container mx-auto py-20 flex justify-between flex-col min-h-[432px]"
    >
      <div class="flex justify-between text-[16px]">
        <img src="../../assets/images/Logo.svg" alt="logo" />
        <ul class="flex justify-between w-[48%]">
          <li><a href="#">Home</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">About me</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <ul class="flex justify-between items-center w-[10%]">
          <li>
            <i class="bx bxl-facebook"></i>
          </li>
          <li>
            <i class="bx bxl-instagram"></i>
          </li>
          <li>
            <i class="bx bxl-twitter"></i>
          </li>
          <li>
            <i class="bx bxl-linkedin-square"></i>
          </li>
        </ul>
      </div>
      <div
        class="flex justify-between pt-[33px] text-[14px] border-t border-black"
      >
        <h1>Made with 💖 by Airdokan</h1>
        <div class="flex justify-between w-[23%]">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import NavLinks from "../../constants/navLinks";
export default {
  name: "Footer",
  data() {
    return {
      navLink: NavLinks,
    };
  },
};
</script>
<style></style>
