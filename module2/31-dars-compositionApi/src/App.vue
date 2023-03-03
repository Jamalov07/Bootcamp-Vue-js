<script setup>
import { ref, onMounted, onUpdated } from "vue";
import { useStore } from "vuex";
let num = ref(0);
let title = ref("");
let body = ref("");
function update() {
  num.value++;
}
const state = useStore().state;
const store = useStore();
onMounted(() => {
  store.dispatch("fetchPosts");
});

onUpdated(() => {
  console.log("update");
});

function submitForm(id = 1) {
  const post = {
    id: 1,
    title: title.value,
    body: body.value,
  };
  console.log(id, post);
  store.dispatch("updatePost", { id: 1, data: post });
}
</script>

<template>
  <div class="container">
    <div class="p-5 bg-white w-90 shadow">
      <h1 class="text-center">{{ num }}</h1>

      <h1 class="text-center"></h1>

      <button class="btn btn-success mx-1" @click="update">UPDATE</button>
      <form action="#" class="m-4" @submit.prevent>
        <input
          v-model="title"
          type="text"
          class="form-control p-3 my-3"
          placeholder="enter title"
        />
        <input
          type="text"
          class="form-control p-3 my-3"
          placeholder="enter body"
          v-model="body"
        />
        <button type="submit" class="btn btn-success my-3" @click="submitForm">
          POST
        </button>
      </form>
    </div>
    <div class="p-5 bg-white w-90 shadow my-3">
      <h1 v-if="state.getpost.isLoading">LOADING . . .</h1>
      <h1 class="text-center text-danger" v-if="state.getpost.errormessage">
        {{ state.getpost.errormessage }}
      </h1>
      <ul class="p-2 list-unstyled">
        <li
          class="p-3 shadow bg-white w-100 my-3"
          v-for="(item, index) in state.getpost.posts"
        >
          <strong>{{ index + 1 }}</strong>
          <h5>{{ item.title }}</h5>
          <p class="text-success">{{ item.body }}</p>
          <button
            class="btn btn-success mx-1"
            @click="$store.dispatch('fetchPostItem', item.id)"
          >
            GET POST
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
