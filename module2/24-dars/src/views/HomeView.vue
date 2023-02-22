<template>
  <div class="container mx-auto p-28 flex justify-center items-center">
    <form
      action="#"
      class="shadow-lg shadow-green-600 p-12 w-2/3"
      @submit="addUser"
    >
      <Input
        labelId="username"
        inputType="text"
        placeholder="Enter username"
        :value="name"
        @input="($event) => (name = $event.target.value)"
      />
      <Input
        labelId="email"
        inputType="email"
        placeholder="Enter email"
        :value="email"
        @input="(e) => emailHandler(e)"
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
import { v4 as uuid4 } from "uuid";
import axios from "@/service/axios";
import { toast } from "vue3-toastify";

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
    addUser(e) {
      e.preventDefault();
      const newUser = {
        id: uuid4(),
        name: this.name,
        email: this.email,
      };
      console.log(newUser);
      if (newUser.name.length === 0 || newUser.email.length === 0) {
        toast.error("please enter a new user name and email", {
          autoClose: 1000,
          theme: "auto",
          position: "bottom-right",
        });
      } else {
        axios.post("/users", newUser);
        toast.success("user succesfully added", {
          autoClose: 1000,
          theme: "auto",
          position: "bottom-right",
        });
        this.email = "";
        this.name = "";
      }
    },
    emailHandler(e) {
      this.email = e.target.value;
    },
  },
};
</script>
<style></style>
