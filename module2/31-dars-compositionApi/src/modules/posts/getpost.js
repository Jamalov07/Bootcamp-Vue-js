import axios from "../../service/axios";

const getpost = {
  state: () => ({
    posts: [],
    isLoading: true,
    errormessage: "",
  }),
  mutations: {
    GET_POSTS(state, data) {
      state.posts = data;
    },
    SET_LOADING(state,status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async fetchPosts({ commit }) {
      try {
        const posts = await axios.get("/posts");
        commit("GET_POSTS", posts.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default getpost;
