<script setup lang="ts">
import { useCatalogStore } from "~/store/catalogStore";

const plant_from_store = useCatalogStore()

</script>

<template>
  <v-text-field
      type="text"
      v-model="plant_from_store.searchItem"
      placeholder="Поиск"
      variant="solo-filled"
      hide-details="true"
  />
</template>

<style scoped>

</style>