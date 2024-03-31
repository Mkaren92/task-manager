import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

// Vuetify is a collection of pre-made components
const vuetify = createVuetify({
  components,
  directives,
});

export default vuetify;
