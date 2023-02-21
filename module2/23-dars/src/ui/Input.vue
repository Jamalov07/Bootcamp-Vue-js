<template>
  <label :for="labelId" class="w-1/2 block my-3 mx-auto">
    <p class="text-indigo-500 my-2" v-if="placeholder">{{ placeholder }}</p>
    <input
      :type="inputType"
      :id="labelId"
      class="p-3 w-full ring-2 focus:ring-cyan-700 outline-none placeholder:text-slate-700"
      :placeholder="placeholder ? placeholder : 'error'"
    />
  </label>
</template>
<script>
export default {
  name: "Input",
  props: {
    labelId: {
      type: String,
      required: true,
    },
    placeholder: String,
    inputType: String,
  },
};
</script>
<style lang="scss"></style>
