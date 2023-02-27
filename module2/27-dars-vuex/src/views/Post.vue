<template>
  <div>
    <h1 class="text-center m-5 font-bold uppercase text-2xl">Post</h1>
    <ul class="shadow-lg w-2/3 mx-auto p-5 border" v-if="isLoading">
      <li v-for="item in posts">
        <RouterLink
          class="p-4 my-1 shadow-lg text-bold block"
          :to="`/post/${item.id}`"
          >{{ item.id }} {{ item.title }}
        </RouterLink>
      </li>
    </ul>
    <h1 v-else="isLoading" class="text-center uppercase font-bold text-red-500">
      Loading ...
    </h1>
  </div>
</template>
<script>
import axios from "../service/axios";
import { RouterLink } from "vue-router";
export default {
  name: "Post",
  data() {
    return {
      posts: [],
      isLoading: false,
    };
  },
  methods: {
    async getPosts() {
      try {
        const response = await axios.get("/posts");
        if (response.status === 200) {
          this.posts = await response.data;
          this.isLoading = true;
          console.log(this.posts);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.getPosts();
  },
};
</script>
<style></style>
