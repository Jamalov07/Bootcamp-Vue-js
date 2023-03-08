<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useStore();
console.log(store);
const login = ref("");
const password = ref("");

function sendDatasToAction() {
  console.log(login, password);
  const stuffData = {
    login: login.value,
    password: password.value,
  };

  store.dispatch("singInStuff", stuffData);
}

function checkAndSet() {
  sendDatasToAction();
  localStorage.setItem("token", store.state.signin.user.refresh_token);

  if (store.state.signin.user) {
    // if (checkToken()) {
    // router.back();
    // }
  }
}
</script>

<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div class="w-[900px] flex flex-col justify-between h-[500px]">
      <h1 class="text-center uppercase text-[#0c027b] text-2xl font-medium">
        Sign in
      </h1>
      <input
        type="text"
        placeholder="Enter Your Login"
        class="p-5 focus:outline-sky-500 placeholder:text-[#0C027B8A]"
        v-model="login"
      />
      <input
        type="text"
        placeholder="Enter Your Password"
        class="p-5 focus:outline-sky-500 placeholder:text-[#0C027B8A]"
        v-model="password"
      />
      <div class="w-full p-2 px-4 flex justify-between">
        <h1 class="text-red">{{ store.state.signin.errorMessage }}</h1>
        <h1
          class="text-end text-red font-light text-blue-600 hover:text-red-600 underline"
        >
          Admin bilan bog'lanish
        </h1>
      </div>
      <button
        @click="checkAndSet"
        class="text-center px-auto py-5 mt-10 duration-300 tracking-[3px] text-xl"
      >
        Tizimga kirish
      </button>
    </div>
  </div>
</template>

<style scoped>
input {
  background: rgba(12, 2, 123, 0.06);
  border: 1px solid rgba(12, 2, 123, 0.76);
  border-radius: 8px;
}

button {
  background: rgba(12, 2, 123, 0.28);
  border-radius: 8px;
  color: #0c027b;
  border: 1px solid transparent;
}

button:hover {
  background: rgba(12, 2, 123, 0.06);
  border: 1px solid rgba(12, 2, 123, 0.76);
}
</style>
