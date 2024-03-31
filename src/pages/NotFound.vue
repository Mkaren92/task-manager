<template>
  <v-container fluid class="p-4">
    <v-row justify="center">
      <v-col cols="12" md="10" class="text-center">
        <div class="image-404 mb-3">
          <h1 class="text-h2">404</h1>
        </div>
        <div>
          <h3 class="text-h5">Looks like you're lost</h3>
          <p>The page you are looking for is not available!</p>
          <v-btn color="primary mt-2">
            <NavigationButton to="/tasks" text="Go to Home" />
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import NavigationButton from "@/components/navigation/Button.vue";
export default {
  components: {
    NavigationButton,
  },
};
</script>

<style scoped>
.image-404 {
  background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
  height: 400px;
  background-position: center;
}
</style>
