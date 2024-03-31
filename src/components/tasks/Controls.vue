<template>
  <!-- Filter and sort section -->
  <section>
    <v-row>
      <v-col cols="12" md="4">
        <!-- Select dropdown for filtering by priority -->
        <v-select
          v-model="filterData.priority"
          :items="priorityItems"
          label="Filter by priority"
          chips
          variant="outlined"
          multiple
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <!-- Select dropdown for filtering by completion status -->
        <v-select
          v-model="filterData.isComplete"
          :items="completeItems"
          label="Filter by complete"
          variant="outlined"
          chips
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12" md="4">
        <!-- Select dropdown for sorting options -->
        <v-select
          v-model="sort"
          :items="sortItems"
          variant="outlined"
          label="Sort by"
          clearable
        >
          <!-- Custom rendering of selected option -->
          <template v-slot:selection="{ item }">
            <div v-if="item.raw.value !== 'id-asc'">
              <v-icon :icon="item.raw.icon" end></v-icon>
              <span class="pl-3">{{ item.title }}</span>
            </div>
          </template>
          <!-- Custom rendering of each item in the dropdown -->
          <template v-slot:item="{ item, props }">
            <v-list-item
              v-bind="props"
              :key="item.raw.value"
              :value="item.raw.value"
              :append-icon="item.raw.icon"
              :title="item.raw.title"
            >
            </v-list-item>
          </template>
        </v-select>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { priorityItems, completeItems, sortItems } from "@/store/static.js";

export default {
  data: () => ({
    sort: null,
    priorityItems: priorityItems,
    completeItems: completeItems,
    sortItems: sortItems,
  }),
  computed: {
    filterData() {
      return this.$store.getters["task/filterData"];
    },
    sortData() {
      return this.$store.getters["task/sortData"];
    },
  },
  watch: {
    sort(newVal) {
      this.$store.commit("task/setSortData", newVal);
    },
  },
  created() {
    this.sort = this.sortData;
  },
};
</script>
