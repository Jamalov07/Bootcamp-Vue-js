import axios from "axios";

export const stuffLogin = {
  state: () => ({
    stuff: null,
    isLoading: true,
    message: "",
  }),
  mutations: {
    SET_STUFF(state, data) {
      state.stuff = data;
    },
    CANCEL_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },

  actions: {
    async STUFFLOGIN({ commit }, stuffData) {
      try {
        console.log(stuffData);
        const response = await axios.post(
          "http://3.92.175.77:3210/admin/login",
          stuffData
        );
        console.log(response);
        commit("SET_STUFF", response.data);
        commit("CANCEL_LOADING", false);
        return response.data;
      } catch (error) {
        commit("SET_MESSAGE", error.response.data.message);
        console.log(error);
        return error.response.data;
      }
    },
  },
};
