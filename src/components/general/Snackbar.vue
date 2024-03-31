<template>
  <!-- Snackbar component for displaying notifications -->
  <v-snackbar v-model="snackbar" location="bottom right" :color="color">
    <span class="text-white">
      {{ text }}
    </span>
    <template v-slot:actions>
      <v-btn color="white" variant="text" @click="snackbar = false">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  data() {
    return {
      text: null,
      snackbar: false,
      color: null,
      timeout: null,
    };
  },
  computed: {
    snackbarData() {
      return this.$store.getters["general/snackbarData"];
    },
  },
  watch: {
    // Watching for changes in snackbar data
    snackbarData(newVal) {
      // Clearing previous timeout
      clearTimeout(this.timeout);
      this.text = newVal.text;
      this.snackbar = newVal.snackbar;
      this.color = newVal.color;

      // Setting timeout for auto-dismissal
      this.timeout = setTimeout(() => {
        // Dismissing snackbar after 3 seconds
        this.snackbar = false;
      }, 3000);
    },
  },
};
</script>
