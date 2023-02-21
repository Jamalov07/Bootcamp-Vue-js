<template>
  <div>
    <div
      class="w-full shadow-lg h-[500px] rounded-lg p-8 bg-white flex justify-around"
    >
      <div class="flex flex-col justify-between justify-start font-normal">
        <h1 class="text-3xl font-normal">Single Color Buttons</h1>
        <p class="text-slate-500">
          Add class <span class="text-red-500">.btn-{color}</span> for buttons
          in theme colors
        </p>
        <div class="flex flex-wrap gap-6">
          <Button
            btnType="button"
            textContent="Primary"
            class="bg-blue-700 focus:ring-blue-400 text-white hover:bg-blue-800"
          />
          <Button
            btnType="button"
            textContent="Secondary"
            class="bg-gray-300 text-black hover:text-white focus:ring-gray-200 hover:bg-gray-400"
          />
          <Button
            btnType="button"
            textContent="Success"
            class="bg-cyan-600 text-white focus:ring-cyan-200 hover:bg-cyan-700"
          />
          <Button
            btnType="button"
            textContent="Danger"
            class="bg-red-500 text-white focus:ring-red-300 hover:bg-red-600"
          />
          <Button
            btnType="button"
            textContent="Warning"
            class="bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400"
          />
          <Button
            btnType="button"
            textContent="Info"
            class="bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 text-white"
          />
          <Button
            btnType="button"
            textContent="Light"
            class="text-black hover:text-white bg-gray-100 hover:bg-gray-200 focus:ring-gray-300"
          />
          <Button
            btnType="button"
            textContent="Dark"
            class="text-white bg-slate-900 hover:bg-black focus:ring-slate-600"
          />
          <Button
            btnType="button"
            textContent="Link"
            class="text-blue-600 hover:text-blue-700 outline-none focus:ring-0 underline"
          />
        </div>
      </div>
      <div class="flex flex-col justify-between justify-start">
        <h1 class="text-3xl font-normal">Rounded Buttons</h1>
        <p class="text-slate-500">
          Add class <span class="text-red-500">.btn-{color}</span> for buttons
          in theme colors
        </p>
        <div class="flex flex-wrap gap-6">
          <Button
            btnType="button"
            textContent="Primary"
            class="bg-blue-700 focus:ring-blue-400 text-white hover:bg-blue-800 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Secondary"
            class="bg-gray-300 text-black hover:text-white focus:ring-gray-200 hover:bg-gray-400 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Success"
            class="bg-cyan-600 text-white focus:ring-cyan-200 hover:bg-cyan-700 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Danger"
            class="bg-red-500 text-white focus:ring-red-300 hover:bg-red-600 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Warning"
            class="bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-400 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Info"
            class="bg-blue-400 hover:bg-blue-500 focus:ring-blue-300 text-white rounded-full"
          />
          <Button
            btnType="button"
            textContent="Light"
            class="text-black hover:text-white bg-gray-100 hover:bg-gray-200 focus:ring-gray-300 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Dark"
            class="text-white bg-slate-900 hover:bg-black focus:ring-slate-600 rounded-full"
          />
          <Button
            btnType="button"
            textContent="Link"
            class="text-blue-600 hover:text-blue-700 outline-none focus:ring-0 underline rounded-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Button from "../../ui/Button.vue";
export default {
  name: "Buttons",
  components: {
    Button,
  },
};
</script>
<style lang="scss"></style>
