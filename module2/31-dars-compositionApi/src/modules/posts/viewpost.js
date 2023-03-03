import axios from "../../service/axios";

const postItem = {
  state: () => ({
    postItem: null,
    isLoading: true,
    errormessage: "",
  }),
  mutations: {
    GET_POST_ITEM(state, data) {
      state.postItem = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async fetchPostItem({ commit }, ID) {
      try {
        const post = await axios.get(`/posts/${ID}`);
        commit("GET_POST_ITEM", post.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default postItem;
