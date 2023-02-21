<template>
  <div>
    <h1 class="text-center text-indigo-700">Form elements</h1>
    <Input inputType="text" placeholder="Enter username" labelId="username" />
    <Input
      inputType="password"
      placeholder="Enter password"
      labelId="userpassword"
    />
    <Button
      btnType="button"
      textContent="SIGN UP"
      class="bg-green-600 text-white font-bold mb-2"
    />
    <Card>
      <img src="https://picsum.photos/id/354/320/210" alt="" />
      <div class="card-body p-3">
        <h1 class="card-title font-bold text-xl my-2">Card Title ler ipsum ...</h1>
        <p class="text-12px text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem vitae
          natus quibusdam maxime facere nihil deserunt nobis voluptates
          explicabo dicta!
        </p>
        <div class="flex justify-between w-[90%] mx-auto">
          <Button
            btnType="button"
            textContent="DIS LIKE"
            class="bg-red-600 text-white font-bold mb-2"
          />
          <Button
            btnType="button"
            textContent="LIKE"
            class="bg-green-600 text-white font-bold mb-2"
          />
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
// import { Button, Input, Card } from "../../ui/index";
import Input from "../../ui/Input.vue";
import Button from "../../ui/Button.vue";
import Card from "../../ui/Card.vue";
export default {
  name: "Form",
  components: {
    Input,
    Button,
    Card,
  },
};
</script>

<style></style>
