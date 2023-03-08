import axios from "../service/axios";

const signin = {
  state: () => ({
    user: null,
    isLoading: true,
    errorMessage: "",
  }),
  mutations: {
    USER_DATA(state, data) {
      state.user = data;
    },
    SET_LOADING(state, status) {
      state.isLoading = status;
    },
    SET_ERRORMESSAGE(state, message) {
      state.errormessage = message;
    },
  },

  actions: {
    async singInStuff({ commit }, userData) {
      try {
        console.log(userData);
        const stuffData = await axios.post("/stuff/signin", userData);
        console.log(stuffData);
        commit("USER_DATA", stuffData.data);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERRORMESSAGE", error.message);
        console.log(error);
      }
    },
  },
};

export default signin;
