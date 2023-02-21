<template>
  <button :type="btnType" class="py-3 px-7 text-xl rounded-md focus:ring-4">
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
