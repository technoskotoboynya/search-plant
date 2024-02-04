<script setup lang="ts">
import { useCatalogStore } from "~/store/catalogStore";

const plant_from_store = useCatalogStore()
function selectFilter(filter: string) {
  if(plant_from_store.selectFilter === filter) {
    plant_from_store.selectFilter = ''
  } else {
    plant_from_store.selectFilter = filter
  }
}
</script>

<template>
  <v-menu :location="location">
    <template v-slot:activator="{ props }">
      <v-btn
          color="primary"
          dark
          v-bind="props"
          :height="56"
      >
        <v-img src="/filter.svg" :width="40" :height="40" />
      </v-btn>
    </template>

    <v-list class="pa-0">
      <v-list-item
          v-for="(item, index) in plant_from_store.filters"
          :key="index"
          :class="[plant_from_store.selectFilter === item ? 'bg-primary text-white' : '']"
      >
        <v-list-item-title
            @click="selectFilter(item)"
            class="cursor-pointer"
        >
          {{ item }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
</style>