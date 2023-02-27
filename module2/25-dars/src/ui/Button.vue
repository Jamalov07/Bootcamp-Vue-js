<template>
  <button :type="btnType" class="py-2 px-4 focus:ring-4 focus:ring-sky-400">
    {{ textContent }}
  </button>
</template>
<script>
export default {
  name: "Button",
  props: {
    btnType: String,
    textContent: String,
  },
};
</script>
<style lang="scss"></style>
