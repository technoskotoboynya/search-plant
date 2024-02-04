<script setup lang="ts">
const props = defineProps({
  plant: String,
  subtitle: String,
  image: String,
  type: String,
  family: String,
})
</script>

<template>
  <aside>
    <v-card :rounded="'lg mb-8'">
      <v-img :src="props.image" cover :height="185" />
      <v-card-title>{{ props.plant }}</v-card-title>
      <v-card-subtitle class="mb-4">{{ props.subtitle }}</v-card-subtitle>
      <v-card-subtitle class="mb-1">Семейство: {{ props.family }}</v-card-subtitle>
      <v-card-subtitle class="mb-4">Тип: {{ props.type }}</v-card-subtitle>
    </v-card>
  </aside>
</template>

<style scoped>

</style>