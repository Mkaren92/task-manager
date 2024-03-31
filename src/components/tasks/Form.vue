<template>
  <!-- Form for task creation or editing -->
  <v-row justify="space-around">
    <v-sheet width="50%" min-width="328">
      <h2 class="mb-2 text-capitalize">{{ action }} task</h2>
      <v-form ref="form" @submit.prevent="onSubmit">
        <!-- Task name field -->
        <v-text-field
          v-model="name"
          :counter="30"
          :rules="[(v) => !!v || 'Name is required']"
          label="Name"
          required
          class="mb-2"
          variant="outlined"
        ></v-text-field>

        <!-- Task description field -->
        <v-textarea
          :rules="[(v) => !!v || 'Description is required']"
          v-model="description"
          label="Description"
          required
          class="mb-2"
          variant="outlined"
        ></v-textarea>

        <!-- Task priority selection -->
        <v-select
          v-model="priority"
          :items="priorityItems"
          :rules="[(v) => !!v || 'Priority is required']"
          label="Priority"
          required
          class="mb-2"
          variant="outlined"
        ></v-select>

        <!-- Task due date selection -->
        <v-date-picker
          min-width="300"
          width="100%"
          :rules="[(v) => !!v || 'Due date is required']"
          elevation="2"
          :min="minDate"
          hide-header
          v-model="duedate"
          required
        ></v-date-picker>

        <!-- Cancel and submit buttons -->
        <div class="d-flex flex-column">
          <v-btn
            type="button"
            class="mt-4"
            color="primary"
            block
            @click="cancelTaskEdit"
          >
            Cancel
          </v-btn>
          <v-btn type="submit" class="mt-4" color="success" block>
            <!-- Dynamic label for submit button (Create/Edit) -->
            {{ action.toUpperCase() }}
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </v-row>
</template>

<script>
import { priorityItems } from "@/store/static.js";
export default {
  props: {
    action: {
      type: String,
      required: true,
    },
    task: {
      type: Object,
    },
  },
  data() {
    return {
      name: "",
      description: "",
      priority: "",
      duedate: null,
      minDate: new Date().toISOString().substr(0, 10), // Minimum date (today)
      priorityItems: priorityItems,
    };
  },
  methods: {
    async onSubmit() {
      const taskData = {
        name: this.name,
        description: this.description,
        priority: this.priority,
        duedate: this.duedate,
      };
      // Validating form
      const { valid } = await this.$refs.form.validate();
      if (valid && this.duedate) {
        // Emitting event with task data (Create/Edit)
        this.$emit(this.action, taskData);
      }
    },
    cancelTaskEdit() {
      this.$store.commit("task/setActiveTask", null);
      this.$backToHome();
    },
  },
  created() {
    // Setting form fields if task prop is provided (Edit)
    if (this.task) {
      this.name = this.task.name;
      this.description = this.task.description;
      this.priority = this.task.priority;
      this.duedate = new Date(this.task.duedate);
    }
  },
};
</script>
