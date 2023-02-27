<template>
  <section class="min-h-[1190px]">
    <div
      class="container mx-auto py-[149px] flex flex-col justify-between items-center"
    >
      <div class="flex justify-between h-[130px] w-full items-center">
        <div class="flex flex-col justify-between text-[#282938]">
          <p class="text-[16px] font-semibold">Recent Projects</p>
          <h1 class="text-[48px] font-bold">My Portfolio</h1>
        </div>
        <Button
          class="bg-[#E62872] text-white flex justify-between h-[75px] items-center gap-2 rounded-[10px]"
        >
          <i class="bx bx-globe text-2xl"></i>
          <p>Visit My Dribble</p>
        </Button>
      </div>
      <div class="grid grid-cols-3 gap-8 pt-24">
        <div class="card flex flex-col w-[554px] h-[664px]">
          <img src="../../assets/images/Image2.png" alt="img" />
          <div class="flex flex-col p-8 justify-between h-full">
            <h1 class="fonyt-bold text-[24px]">Ahuse</h1>
            <p class="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div
              class="flex justify-between items-center text-[14px] font-semibold border-b border-black w-1/3"
            >
              <p>View in Dribble</p>
              <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="card flex flex-col w-[554px] h-[664px]">
          <img src="../../assets/images/Image1.png" alt="img" />
          <div class="flex flex-col p-8 justify-between h-full">
            <h1 class="fonyt-bold text-[24px]">App Dashboard</h1>
            <p class="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div
              class="flex justify-between items-center text-[14px] font-semibold border-b border-black w-1/3"
            >
              <p>View in Dribble</p>
              <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
            </div>
          </div>
        </div>
        <div class="card flex flex-col w-[554px] h-[664px]">
          <img src="../../assets/images/Image.png" alt="img" />
          <div class="flex flex-col p-8 justify-between h-full">
            <h1 class="fonyt-bold text-[24px]">Easy Rent</h1>
            <p class="text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros.
            </p>
            <div
              class="flex justify-between items-center text-[14px] font-semibold border-b border-black w-1/3"
            >
              <p>View in Dribble</p>
              <i class="bx bx-up-arrow-alt rotate-45 text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Button from "../../ui/Button/Button.vue";

export default {
  name: "Portfolio",
  components: {
    Button,
  },
};
</script>
<style scoped>
.card {
  box-shadow: 0px 0px 32px rgba(0, 0, 0, 0.15);
}
</style>
