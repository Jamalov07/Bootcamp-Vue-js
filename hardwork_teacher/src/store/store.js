import { createStore } from "vuex";
import { stuffLogin } from "./modules/stuff/stuffLogin";

const store = createStore({
  modules: { stuffLogin },
});

export default store;
