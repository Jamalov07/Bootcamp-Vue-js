<template>
  <div class="m-4">
    <div id="app">
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <editor
        v-model="textval"
        api-key="ocatyx3ynovjjfd0htiplvrd451szo8osxl2malsqa4exosk"
        :init="{
          height: 500,
          menubar: false,
          plugins: [
            'a11ychecker',
            'advlist',
            'advcode',
            'advtable',
            'autolink',
            'checklist',
            'export',
            'lists',
            'link',
            'image',
            'charmap',
            'preview',
            'anchor',
            'searchreplace',
            'visualblocks',
            'powerpaste',
            'fullscreen',
            'formatpainter',
            'insertdatetime',
            'media',
            'table',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | casechange blocks | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlst checklist outdent indent | removeformat | a11ycheck code table help',
        }"
        initial-value="Welcome to TinyMCE Vue"
      />
    </div>
  </div>
  <button
    @click="changeText"
    class="text-xl py-2 px-4 rounded-md bg-indigo-700 text-white block text-center mx-auto"
  >
    Submit
  </button>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { toast } from "vue3-toastify";

export default {
  name: "PostAdd",
  components: {
    editor: Editor,
  },
  data() {
    return {
      textval: "",
    };
  },
  methods: {
    changeText(e) {
      e.preventDefault();

      console.log(this.textval);
      if (this.textval) {
        this.$store
          .dispatch("ADD_POST", {
            title: "LOREM",
            category_id: "Jamiyat",
            full_text: this.textval,
          })
          .then((res) => {
            if (res.status === 201) {
              toast.success(res, statusText);
            } else {
              toast.error(res.message);
            }
          });
      } else {
        toast.warning("Please input something");
      }
    },
  },
};
</script>

<!-- ocatyx3ynovjjfd0htiplvrd451szo8osxl2malsqa4exosk -->
