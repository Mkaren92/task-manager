export default {
  methods: {
    // Method to display a success snackbar message
    $snackbarSuccess(text) {
      this.$store.commit("general/setSnackbarData", {
        text,
        snackbar: true,
        color: "green",
      });
    },
    // Method to display an error snackbar message
    $snackbarError(text) {
      this.$store.commit("general/setSnackbarData", {
        text,
        snackbar: true,
        color: "red",
      });
    },
  },
};
