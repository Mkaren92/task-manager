<template>
  <!-- Task edit form -->
  <TaskForm action="edit" @edit="editTask" :task="activeTask" />
</template>

<script>
import TaskForm from "@/components/tasks/Form.vue";

export default {
  components: {
    TaskForm,
  },
  computed: {
    activeTask() {
      return this.$store.getters["task/activeTask"];
    },
  },
  methods: {
    // Method to edit task
    async editTask(editedTask) {
      try {
        // Editing task in local storage
        await this.$store.localStorage.editTask(this.activeTask.id, editedTask);
        // Committing the edited task to the store
        this.$store.commit("task/editTask", {
          id: this.activeTask.id,
          editedTask,
        });
        this.$snackbarSuccess("Task has beed edited!");
        this.$backToHome();
      } catch (error) {
        this.$snackbarError(error);
      }
    },
  },
  created() {
    // Redirecting to home page if no active task is available
    if (!this.activeTask) return this.$backToHome();
  },
  beforeUnmount() {
    // Clearing active task from the store before component unmounts
    this.$store.commit("task/setActiveTask", null);
  },
};
</script>
