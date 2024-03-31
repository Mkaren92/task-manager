<template>
  <!-- Conditional rendering based on tasks availability -->
  <template v-if="tasks.length">
    <!-- Render task controls and task cards if tasks are available -->
    <TaskControls />
    <TasksCards />
  </template>
  <!-- Render task welcome message if no tasks are available -->
  <TaskWelcome v-else />
</template>

<script>
import TasksCards from "@/components/tasks/Cards.vue";
import TaskControls from "@/components/tasks/Controls.vue";
import TaskWelcome from "@/components/tasks/Welcome.vue";

export default {
  components: {
    TasksCards,
    TaskControls,
    TaskWelcome,
  },
  computed: {
    tasks() {
      return this.$store.getters["task/tasks"];
    },
  },
};
</script>
