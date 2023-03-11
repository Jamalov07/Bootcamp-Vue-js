import { createStore } from "vuex";
import signin from "./modules/login";
const store = createStore({
  modules: { signin },
});

export default store;
