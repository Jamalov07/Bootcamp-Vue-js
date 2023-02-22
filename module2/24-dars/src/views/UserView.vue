<template>
  <div class="bg-white w-1/2 pt-5 mx-auto min-h-[300px] shadow-lg container">
    <h1
      class="text-green-700 text-green-500 text-center text-xl uppercase font-semibold"
    >
      User list
    </h1>
    <table class="list bg-green-300 table-auto w-full border-separate">
      <thead class="p-5 bg-green-400 rounded-2xl w-full">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <h1
        class="text-center text-red-700 font-bold text-2xl"
        v-if="!userList.length"
      >
        USER LIST EMPTY
      </h1>
      <div class="w-full flex justify-center items-center">
        <span class="loader block" v-if="!userList.length"></span>
      </div>
      <tbody class="w-full">
        <ListItem
          v-if="!isLoading"
          v-for="(item, index) in userList"
          :key="item.id"
          :num="index"
          :item="item"
          :removeUser="removeUser"
        />
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "@/service/axios";
import ListItem from "../ui/ListItem.vue";
export default {
  name: "UserView",
  data() {
    return {
      userList: [],
      isLoading: true,
    };
  },
  methods: {
    async getAllUsers() {
      try {
        const users = await axios.get("/users");
        if (users.status === 200) {
          this.userList = users.data;
          setTimeout(() => {
            this.isLoading = false;
          }, 2000);
        }
        console.log(users);
      } catch (error) {
        console.log(error);
      }
    },
    removeUser(id) {
      axios.delete(`/users/${id}`, {});
    },
  },
  mounted() {
    this.getAllUsers();
  },
  updated() {
    this.getAllUsers(); 
  },
  components: { ListItem },
};
</script>
<style>
.loader {
  position: relative;
  width: 85px;
  height: 50px;
  background-repeat: no-repeat;
  background-image: linear-gradient(green, 50px, transparent 0),
    linear-gradient(green 50px, transparent 0),
    linear-gradient(green 50px, transparent 0),
    linear-gradient(green 50px, transparent 0),
    linear-gradient(green 50px, transparent 0),
    linear-gradient(green 50px, transparent 0);
  background-position: 0px center, 15px center, 30px center, 45px center,
    60px center, 75px center, 90px center;
  animation: rikSpikeRoll 0.65s linear infinite alternate;
}
@keyframes rikSpikeRoll {
  0% {
    background-size: 10px 3px;
  }
  16% {
    background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px;
  }
  33% {
    background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px,
      10px 3px;
  }
  50% {
    background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px,
      10px 3px;
  }
  66% {
    background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px,
      10px 3px;
  }
  83% {
    background-size: 10px 3px, 10px 3px, 10px 10px, 10px 30px, 10px 50px,
      10px 3px;
  }
  100% {
    background-size: 10px 3px, 10px 3px, 10px 3px, 10px 10px, 10px 30px,
      10px 50px;
  }
}
</style>
