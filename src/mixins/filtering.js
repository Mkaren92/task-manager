export default {
  methods: {
    // Method to filter tasks based on filter options
    filterTasks(tasks, filterOptions = {}) {
      const { isComplete = null, priority = [] } = filterOptions;
      let filteredTasks = tasks;

      // Filtering by completion status if specified
      if (isComplete !== null) {
        filteredTasks = filteredTasks.filter(
          (task) => task.isComplete === isComplete
        );
      }

      // Filtering by priority if specified
      if (priority.length > 0) {
        filteredTasks = filteredTasks.filter((task) =>
          priority.includes(task.priority)
        );
      }

      return filteredTasks;
    },
  },
};
