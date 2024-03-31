export default {
  initializeTasks(state, tasks) {
    state.tasks = tasks;
  },
  setActiveTask(state, task) {
    state.activeTask = task;
  },
  addTask(state, task) {
    state.tasks.push(task);
  },
  editTask(state, { id, editedTask }) {
    const index = state.tasks.findIndex((task) => task.id === id);
    if (index !== -1) {
      state.tasks[index] = { ...state.tasks[index], ...editedTask };
    }
  },
  deleteTask(state, id) {
    state.tasks = state.tasks.filter((task) => task.id !== id);
  },
  setSortData(state, data) {
    state.sortData = data;
  },
};
