export const localStoragePlugin = (store) => {
  // Function to load tasks from local storage
  const loadTasks = () => {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  };

  // Function to save tasks to local storage
  const saveTasks = async (tasks) => {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  };

  // Function to add a task to local storage
  const addTask = async (newTask) => {
    try {
      const tasks = loadTasks();
      tasks.push(newTask);
      await saveTasks(tasks);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Function to edit a task in local storage
  const editTask = async (id, editedTask) => {
    try {
      const tasks = loadTasks();
      const index = tasks.findIndex((task) => task.id === id);
      if (index !== -1) {
        tasks[index] = { ...tasks[index], ...editedTask };
        await saveTasks(tasks);
      } else {
        throw new Error("Task not found");
      }
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Function to delete a task from local storage
  const deleteTask = async (id) => {
    try {
      const tasks = loadTasks();
      const editedTasks = tasks.filter((task) => task.id !== id);
      await saveTasks(editedTasks);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  // Exposing methods to store for access from Vuex actions
  store.localStorage = {
    addTask,
    deleteTask,
    editTask,
  };

  // Initializing tasks from local storage when plugin is loaded
  const tasks = loadTasks();
  if (tasks) store.commit("task/initializeTasks", tasks);
};
