export default {
  methods: {
    // Method to sort tasks based on specified data
    sortTasks(tasks, data) {
      // Destructuring data into key and order, with default values
      const [key, order] = data ? data.split("-") : ["id", "asc"];

      // Sorting tasks based on key and order
      return tasks.sort((a, b) => {
        if (key === "priority") {
          // Sorting by priority
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          const priorityA = priorityOrder[a.priority] || 0;
          const priorityB = priorityOrder[b.priority] || 0;
          if (priorityA !== priorityB) {
            return order === "asc"
              ? priorityA - priorityB
              : priorityB - priorityA;
          }
        } else if (key === "duedate") {
          // Sorting by due date
          const dueDateA = a.duedate;
          const dueDateB = b.duedate;
          if (dueDateA !== dueDateB) {
            const dueDateA = new Date(a.duedate);
            const dueDateB = new Date(b.duedate);
            if (dueDateA.getTime() !== dueDateB.getTime()) {
              return order === "asc"
                ? dueDateA.getTime() - dueDateB.getTime()
                : dueDateB.getTime() - dueDateA.getTime();
            }
          }
        }

        // Default sorting by task ID
        return b.id - a.id;
      });
    },
  },
};
