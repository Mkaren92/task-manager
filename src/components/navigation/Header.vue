<template>
  <!-- Application AppBar -->
  <v-app-bar app color="primary">
    <v-toolbar-title>
      <NavigationButton to="/tasks" text="Tasks" />
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Button to navigate to home -->
    <v-btn text>
      <NavigationButton to="/tasks" text="Home" />
    </v-btn>
    <!-- Button to navigate to task creation page -->
    <v-btn text>
      <NavigationButton to="/tasks/create" text="Add task" />
    </v-btn>
  </v-app-bar>
</template>
<script>
import NavigationButton from "./Button.vue";
export default {
  components: {
    NavigationButton,
  },
};
</script>
