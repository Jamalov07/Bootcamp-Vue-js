<template>
  <tr class="px-5 py-3 bg-green-300 rounded-2xl my-2 items-center border">
    <td>
      <strong>{{ num + 1 }}</strong>
    </td>
    <td>{{ item.name }}</td>
    <td>{{ item.email }}</td>
    <td>
      <button
        @click="openModal(item.id)"
        class="bg-cyan-600 focus:ring-2 focus:ring-cyan-200 px-4 py-2 rounded-2xl duration-200 text-white"
      >
        Edit
      </button>
    </td>
    <td>
      <button
        @click="removeUser(item.id)"
        class="bg-red-600 focus:ring-2 focus:ring-red-200 px-4 py-2 rounded-2xl duration-200 text-white"
      >
        Remove
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "ListItem",
  props: {
    num: [String, Number],
    item: Object,
    removeUser: Function,
  },
  data() {
    return {};
  },
  methods: {
    openModal(id) {
      this.$emit("open",id);
    },
  },
};
</script>
<style></style>
