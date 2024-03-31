import mutations from "./mutations";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      tasks: [],
      activeTask: null,
      sortData: null,
      filterData: { isComplete: null, priority: [] },
    };
  },
  getters,
  mutations,
};
