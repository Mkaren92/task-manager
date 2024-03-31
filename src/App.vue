<template>
  <v-app>
    <Header />
    <Snackbar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/navigation/Header.vue";
import Snackbar from "./components/general/Snackbar.vue";

export default {
  components: {
    Header,
    Snackbar,
  },
};
</script>
