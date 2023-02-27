<template>
  <main class="w-screen h-screen bg-blue-reg">
    <div
      class="w-[410px] py-14 h-[90%] my-auto mx-auto flex flex-col justify-between items-center relative"
    >
      <h1 class="text-silver-reg text-[32px]">pomodoro</h1>
      <ButtonsGroup class="z-10">
        <Button
          @click="changeTime(`pomodoro`)"
          textContent="pomodoro"
          :class="`${pomodoro ? `bg-${mainColor}` : ``}`"
        />
        <Button
          @click="changeTime(`shortBreak`)"
          textContent="short break"
          :class="`${shortBreak ? `bg-${mainColor}` : ``}`"
        />
        <Button
          @click="changeTime(`longBreak`)"
          textContent="long break"
          :class="`${longBreak ? `bg-${mainColor}` : ``}`"
        />
      </ButtonsGroup>
      <mainElement :time="mainTime" />
      <i class="bx bxs-cog text-silver-reg text-2xl" @click="configsToggle"></i>
      <Modal :configs="configs" @cancel="configsToggle" @theme="changeTheme" />
    </div>
  </main>
</template>
<script>
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup.vue";
import mainElement from "./components/mainElement/mainElement.vue";
import Modal from "./components/Modal/Modal.vue";
import Button from "./ui/Button/Button.vue";
export default {
  name: "App",
  components: {
    ButtonsGroup,
    Button,
    mainElement,
    Modal,
  },

  data() {
    return {
      configs: false,
      pomodoro: true,
      shortBreak: false,
      longBreak: false,
      pomodoroTime: "25:00",
      shortBreakTime: "05:00",
      longBreakTime: "15:00",
      mainTime: this.pomodoroTime,
      mainColor: "red-reg",
    };
  },
  methods: {
    configsToggle() {
      this.configs = !this.configs;
    },
    changeTime(name) {
      console.log(name, this.mainTime);
      if (name === "pomodoro") {
        if (!this.pomodoro) {
          this.mainTime = this.pomodoroTime;
          this.pomodoro = true;
          this.shortBreak = false;
          this.longBreak = false;
        }
      }
      if (name === "shortBreak") {
        this.mainTime = this.shortBreakTime;
        if (!this.shortBreak) {
          this.shortBreak = true;
          this.pomodoro = false;
          this.longBreak = false;
        }
      }
      if (name === "longBreak") {
        this.mainTime = this.longBreakTime;
        if (!this.longBreak) {
          this.longBreak = true;
          this.pomodoro = false;
          this.shortBreak = false;
        }
      }
    },
    changeTheme(color) {
      this.mainColor = color;
    },
  },
  mounted() {
    this.mainTime = this.pomodoroTime;
  },
};
</script>
<style></style>
