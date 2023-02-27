<template>
  <div
    v-if="configs"
    class="configs z-20 absolute top-[140px] rounded-xl h-[544px] w-[580px] bg-white"
  >
    <div class="flex justify-between p-7">
      <h1 class="text-lg-reg text-blue-reg">Settings</h1>
      <i class="bx bx-x text-2xl" @click="configsToggle"></i>
    </div>
    <hr />
    <div class="flex justify-between flex-col mt-6 w-full h-[109px] mb-6">
      <div class="flex justify-between flex-col px-8 h-full">
        <h1 class="text-dark-blue-reg text-body-1-reg">Time (Minutes)</h1>
        <div class="flex justify-between">
          <SelectTime time="25" />
          <SelectTime time="5" />
          <SelectTime time="15" />
        </div>
      </div>
    </div>
    <hr />
    <div class="flex justify-between py-6 px-[40px] items-center">
      <h1>Fonts</h1>
      <div class="flex justify-between w-2/5 items-center">
        <RoundedDiv class="text-white bg-dark-blue-reg"> Aa </RoundedDiv>
        <RoundedDiv
          class="opacity-75 font-RobotoRegular text-blue-reg bg-silver-reg"
        >
          Aa
        </RoundedDiv>
        <RoundedDiv class="font-SpaceRegular text-dark-blue-reg bg-silver-reg">
          Aa
        </RoundedDiv>
      </div>
    </div>
    <hr />
    <div class="flex justify-between py-6 px-[40px] items-center">
      <h1>Color</h1>
      <div id="themes" class="flex justify-between w-2/5 items-center">
        <RoundedDiv
          class="red bg-red-reg"
          @click="changeTheme('red-reg')"
        ></RoundedDiv>
        <RoundedDiv
          class="blue bg-[#70F3F8]"
          @click="changeTheme('[#70F3F8]')"
        ></RoundedDiv>
        <RoundedDiv
          class="pink bg-[#D881F8]"
          @click="changeTheme('[#D881F8]')"
        ></RoundedDiv>
      </div>
    </div>
    <div class="relative">
      <Button textContent="apply" class="absolute -bottom-10 left-[41%] bg-red-reg" />
    </div>
  </div>
</template>
<script>
import Button from "../../ui/Button/Button.vue";
import RoundedDiv from "../../ui/RoundedDiv/RoundedDiv.vue";
import SelectTime from "../../ui/SelectTime/SelectTime.vue";

export default {
  name: "Modal",
  props: {
    configs: Boolean,
  },
  methods: {
    configsToggle() {
      this.$emit("cancel", true);
    },
    changeTheme(color) {
      if (color == "red-reg") {
        let red = this.$el.querySelector(".red");
        let blue = this.$el.querySelector(".blue");
        let pink = this.$el.querySelector(".pink");
        blue.innerHTML = "";
        pink.innerHTML = "";
        red.innerHTML = `<i class='bx bx-check  text-dark-blue text-2xl'></i>`;
      }
      if (color == "[#70F3F8]") {
        let red = this.$el.querySelector(".red");
        let blue = this.$el.querySelector(".blue");
        let pink = this.$el.querySelector(".pink");
        red.innerHTML = "";
        pink.innerHTML = "";
        blue.innerHTML = `<i class='bx bx-check text-dark-blue text-2xl'></i>`;
      }
      if (color == "[#D881F8]") {
        let red = this.$el.querySelector(".red");
        let blue = this.$el.querySelector(".blue");
        let pink = this.$el.querySelector(".pink");
        red.innerHTML = "";
        blue.innerHTML = "";
        pink.innerHTML = `<i class='bx bx-check text-dark-blue text-2xl'></i>`;
      }
      this.$emit("theme", color);
    },
  },
  components: { RoundedDiv, SelectTime, Button },
};
</script>
<style></style>
