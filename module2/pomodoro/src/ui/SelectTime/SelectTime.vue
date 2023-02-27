<template>
  <div class="flex flex-col w-[140px] gap-1">
    <h1 class="text-body-2-reg text-xs-reg text-dark-blue-reg opacity-40">
      pomodoro
    </h1>
    <div
      class="flex justify-between bg-silver-reg p-[15px] rounded-[10px] h-12"
    >
      <h1>{{time}}</h1>
      <div class="flex flex-col justify-between">
        <i class="bx bx-chevron-up w-4 h-3"></i>
        <i class="bx bx-chevron-down w-4 h-3"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectTime",
  props: {
    time: [String, Number],
  },
};
</script>
<style></style>
