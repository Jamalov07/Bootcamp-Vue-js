<template>
  <div class="w-full shadow p-5 border my-5">
    <button
      @click="$router.back()"
      class="bg-cyan-500 px-3 py-2 rounded-lg text-white font-bold focus:ring-4 focus:ring-cyan-600"
    >
      GO BACK
    </button>
  </div>
  <div class="p-5 w-full shadow m-4 mx-auto border">
    <div v-if="isLoad">
      <h1 class="px-5 font-semibold">
        {{ $route.params.id }} {{ post.title }}
      </h1>
      <p class="px-5 my-3">{{ post.body }}</p>
    </div>
    <div v-else="isLoading">
      <h1 class="text-center uppercase font-bold text-red-500">Loading ...</h1>
    </div>
  </div>
</template>
<script>
import axios from "../service/axios";
export default {
  name: "PostItem",
  data() {
    return {
      post: [],
      isLoad: false,
    };
  },
  methods: {
    getId() {
      console.log(this.$route.params.id);
    },
    async getPostItem() {
      try {
        const postItem = await axios.get(`posts/${this.$route.params.id}`);
        if (postItem.status === 200) {
          this.post = await postItem.data;
          this.isLoad = true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    //     goBack() {
    //   this.$router.back();
    //     },
  },
  mounted() {
    this.getId();
    this.getPostItem();
  },
};
</script>
<style></style>
