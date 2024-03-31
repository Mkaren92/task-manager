export default {
  install(app) {
    // Adding a global method to navigate back to the home page
    app.config.globalProperties.$backToHome = () => {
      app.config.globalProperties.$router.push("/tasks");
    };
  },
};
