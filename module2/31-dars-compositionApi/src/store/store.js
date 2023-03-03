import { createStore } from "vuex";
import getpost from "../modules/posts/getpost";
import postItem from "../modules/posts/viewpost";
import updatePost from "../modules/posts/updatepost";
const store = createStore({
  modules: {
    getpost,
    postItem,
    updatePost,
  },
});

export default store;
