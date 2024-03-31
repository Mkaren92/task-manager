<template>
  <transition name="task-fade" mode="out-in">
    <v-card
      v-if="task"
      :key="task.id"
      class="task-card"
      @mouseenter="showButtons = true"
      @mouseleave="showButtons = false"
    >
      <!-- Task title -->
      <v-card-title>
        {{ task.name }}
      </v-card-title>
      <v-row class="mb-2">
        <v-col>
          <!-- Task due date -->
          <v-card-subtitle>
            {{ formatDate(task.duedate) }}
          </v-card-subtitle>
        </v-col>
        <v-col align="right">
          <!-- Task priority -->
          <v-card-subtitle
            :class="{
              'text-capitalize font-weight-bold': true,
              'text-success': task.priority === 'low',
              'text-warning': task.priority === 'medium',
              'text-error': task.priority === 'high',
            }"
          >
            {{ task.priority }}
          </v-card-subtitle>
        </v-col>
      </v-row>

      <!-- Task actions -->
      <v-card-actions>
        <v-row>
          <v-switch
            class="ml-3 pl-0"
            v-model="complete"
            @change="toggleTaskIsComplete"
            label="Done"
            hide-details
            color="primary"
            inset
          ></v-switch>
        </v-row>
        <!-- Edit button -->
        <v-btn
          color="blue-lighten-2"
          variant="tonal"
          @click="goToTaskEdit(task)"
        >
          Edit
        </v-btn>
        <!-- Delete button -->
        <v-btn
          @click="(toDelete = !toDelete), (show = false)"
          color="red-lighten-2"
          variant="tonal"
        >
          Delete
        </v-btn>
        <!-- Toggle button for expanding task details -->
        <v-btn
          class="ml-1"
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="(show = !show), (toDelete = false)"
        ></v-btn>
      </v-card-actions>

      <!-- Task details with expand transition -->
      <v-expand-transition>
        <div v-show="show || toDelete">
          <v-divider></v-divider>
          <!-- Task details -->
          <v-card-text v-if="show">
            <h4 class="mb-2">{{ task.name }}</h4>
            <p>{{ task.description }}</p>
          </v-card-text>

          <!-- Confirmation message for task deletion -->
          <v-card-text v-if="toDelete">
            <v-row>
              <v-col> Are you sure you want to delete this task? </v-col>
              <v-col align="right">
                <v-btn
                  @click="toDelete = false"
                  color="gray-lighten-2"
                  variant="tonal"
                >
                  No
                </v-btn>
                <v-btn
                  @click="deleteTask(task.id)"
                  color="green-lighten-2"
                  variant="tonal"
                  class="ml-2"
                >
                  Yes
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </transition>
</template>

<script>
import formatting from "@/mixins/formatting.js";

export default {
  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  mixins: [formatting],
  data() {
    return {
      complete: false,
      show: false,
      toDelete: false,
    };
  },
  methods: {
    // Method to navigate to task edit page
    goToTaskEdit(task) {
      this.$store.commit("task/setActiveTask", task);
      this.$router.push(`/tasks/edit/${task.id}`);
    },
    // Method to toggle task completion status
    async toggleTaskIsComplete() {
      const editedTask = { isComplete: this.complete };

      try {
        // Editing task in local storage
        await this.$store.localStorage.editTask(this.task.id, editedTask);
        // Committing mutation to edit task in store
        this.$store.commit("task/editTask", {
          id: this.task.id,
          editedTask,
        });
        this.$snackbarSuccess(
          `Task has been marked as ${this.complete ? "complete" : "incomplete"}`
        );
      } catch (error) {
        this.$snackbarError(error);
      }
    },
    async deleteTask(id) {
      try {
        // Deleting task from local storage
        await this.$store.localStorage.deleteTask(id);
        // Committing mutation to delete task in store
        this.$store.commit("task/deleteTask", id);
        this.$snackbarSuccess("Task has beed deleted!");
      } catch (error) {
        this.$snackbarError(error);
      }
    },
  },
  created() {
    // Setting initial completion status
    this.complete = this.task.isComplete;
  },
};
</script>

<style scoped>
/* Define the transition classes */
.task-fade-enter-active,
.task-fade-leave-active {
  transition: opacity 0.5s ease;
}
.task-fade-enter,
.task-fade-leave-to {
  opacity: 0;
}
</style>
