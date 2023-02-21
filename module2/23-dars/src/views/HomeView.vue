<template>
  <div class="container mx-auto p-20 flex justify-center items-center">
    <form
      action="#"
      class="shadow shadow-green-600 p-5 w-2/3"
      @submit.prevent="preventDefault()"
    >
      <Input
        labeId="username"
        inputType="text"
        placeholder="Enter username"
        :value="name"
        @input="($event) => (name = $event.target.value)"
      />
      <Input
        labeId="email"
        inputType="email"
        placeholder="Enter email"
        :value="email"
        @input="emailHandler(e)"
      />
      <Button
        btnType="submit"
        textContent="ADD NEW USER"
        class="bg-cyan-500 text-white mx-auto block w-1/2"
      />
    </form>
  </div>
</template>
<script>
import Input from "../ui/Input.vue";
import Button from "../ui/Button.vue";
export default {
  name: "HomeView",
  components: {
    Input,
    Button,
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    addUser() {
      const newUser = {
        id: Date.now(),
        name: this.name,
        email: this.email,
      };
      console.log(newUser);
    },
  },

  emailHandler(e) {
    this.email = e.target.value;
  },
};
</script>
<style lang="scss"></style>
