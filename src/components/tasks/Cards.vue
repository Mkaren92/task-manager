<template>
  <!-- Displaying sorted and filtered tasks -->
  <v-row>
    <v-col
      cols="12"
      md="6"
      lg="4"
      v-for="task in sortedAndFilteredTasks"
      :key="task.id"
    >
      <TaskDetails :task="task" />
    </v-col>
  </v-row>
</template>

<script>
import TaskDetails from "./Details.vue";
import sorting from "@/mixins/sorting.js";
import filtering from "@/mixins/filtering.js";

export default {
  components: {
    TaskDetails,
  },
  mixins: [sorting, filtering],
  computed: {
    tasks() {
      return this.$store.getters["task/tasks"];
    },
    sortData() {
      return this.$store.getters["task/sortData"];
    },
    filterData() {
      return this.$store.getters["task/filterData"];
    },
     // Sorting tasks based on sort data
    sortedTasks() {
      return this.sortTasks(this.tasks, this.sortData);
    },
    // Filtering tasks based on sort and filter data
    // Separate function to skip unnecessary evaluation of sortedtasks data
    sortedAndFilteredTasks() {
      let tasksData = this.sortedTasks;
      const { isComplete, priority } = this.filterData;
      if (isComplete !== null || priority.length) {
        tasksData = this.filterTasks(tasksData, this.filterData);
      }
      return tasksData;
    },
  },
};
</script>
