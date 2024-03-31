import { createApp } from "vue";
import store from "./store/index.js";
import router from "./plugins/router.js";
import navigation from "./plugins/navigation.js";
import vuetify from "./plugins/vuetify.js";
import snackbar from "./mixins/snackbar.js";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
// Adding plugins to the Vue application instance
app.use(router);
app.use(store);
app.use(navigation);
app.use(vuetify);
// Adding the snackbar mixin to all components
app.mixin(snackbar);
app.mount("#app");
