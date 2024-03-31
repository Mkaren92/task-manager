<template>
  <!-- Card for welcoming users and prompting to add a task -->
  <v-card color="indigo" variant="outlined" class="mx-auto" max-width="500">
    <v-card-item>
      <div>
        <div class="text-h6 mb-1">
          Welcome to our Task Management Application!
        </div>
        <div class="text-caption">
          Get started now by adding your first task
        </div>
      </div>
    </v-card-item>

    <v-card-actions>
      <v-btn text>
        <NavigationButton
          to="/tasks/create"
          text="Add task"
          class="text-indigo"
        />
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import NavigationButton from "../navigation/Button.vue";
export default {
  components: {
    NavigationButton,
  },
};
</script>
