const count = {
  state: () => ({
    number: 0,
  }),
  mutations: {
    INCR(state) {
      state.number++;
    },
    DECR(state) {
      state.number--;
    },
    RESET(state) {
      state.number = 0;
    },
  },
  actions: {},
  getters: {
    doubleCount(state) {
      state.number += 10;
    },
    resetCount(state) {
      state.number = 0;
    },
  },
};

export default count;
