<template>
  <section class="min-h-[1000px] bg-[#F5FCFF]">
    <div class="container mx-auto py-[133px]">
      <div class="flex justify-between">
        <div
          class="flex flex-col justify-between text-[#282938] h-[500px] my-auto"
        >
          <h1 class="text-[21px] font-semibold">Hey, I am John</h1>
          <h1 class="text-[#282938] text-[74px] font-bold leading-[120%]">
            I create <span class="text-[#5E3BEE]">product design </span>and
            brand experience
          </h1>
          <p class="text-[24px] text-[#1C1E53] w-[80%]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </p>
          <Button
            class="bg-[#5E3BEE] w-[170px] text-white hover:bg-white hover:border hover:border-[#5E3BEE] hover:text-[#5E3BEE]"
            >Get in Touch
          </Button>
        </div>
        <img
          src="../../assets/images/Group 11 1.png"
          alt="img"
          class="w-[917px]"
        />
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../../ui/Button/Button.vue";

export default {
  name: "Home",
  components: {
    Button,
  },
};
</script>
<style></style>
