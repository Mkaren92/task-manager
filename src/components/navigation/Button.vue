<template>
  <!-- Reusable navigation button  -->
  <router-link :to="to" class="text-white text-decoration-none">{{
    text
  }}</router-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
