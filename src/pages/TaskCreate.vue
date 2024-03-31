<template>
  <!-- Task creation form -->
  <TaskForm action="create" @create="createTask" />
</template>

<script>
import TaskForm from "@/components/tasks/Form.vue";
export default {
  components: {
    TaskForm,
  },
  methods: {
    // Method to create a new task
    async createTask(data) {
      const newTask = {
        id: Date.now(),
        isComplete: false,
        ...data,
      };

      try {
        // Adding new task to local storage
        await this.$store.localStorage.addTask(newTask);
        // Committing the addition of new task to the store
        this.$store.commit("task/addTask", newTask);
        this.$snackbarSuccess("New task has beed created!");
        this.$backToHome();
      } catch (error) {
        this.$snackbarError(error);
      }
    },
  },
};
</script>
