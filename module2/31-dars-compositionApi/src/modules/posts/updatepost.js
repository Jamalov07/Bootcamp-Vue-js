import axios from "../../service/axios";

const postItem = {
  state: () => ({
    status: null,
    isLoading: true,
    errormessage: "",
  }),
  mutations: {
    UPDATE_POST(state, data) {
      state.status = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async updatePost({ commit }, data) {
      try {
        const post = await axios.put(`/posts/${data.id}`, data.data);
        commit("UPDATE_POST", post.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default postItem;
