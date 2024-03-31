import { createStore } from "vuex";
import taskModule from "./modules/task/index.js";
import generalModule from "./modules/general/index.js";
import { localStoragePlugin } from "@/plugins/localStorage.js";

const store = createStore({
  modules: {
    task: taskModule,
    general: generalModule
  },
  plugins: [localStoragePlugin],
});

export default store;
