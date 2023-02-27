<template>
  <button class="text-[16px] py-[14px] px-[22.5px] rounded-[4px] border">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    textContent: String,
  },
};
</script>
<style></style>
