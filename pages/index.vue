<script setup lang="ts">
useHead({
  title: "Description"
})
</script>

<template>
  <section class="mt-10">
    <v-container>
      <v-sheet
          :elevation="4"
          :rounded="'lg'"
          class="pa-10 d-flex flex-column align-center"
      >
        <h1 class="text-h4 font-weight-regular mb-4 text-center" style="max-width: 550px; width: 100%">
          <strong class="text-primary">GreenCare</strong>
          ваш личный помощник по уходу за растениями
        </h1>
        <p class="text-body-color text-center" style="max-width: 800px; width: 100%;">
          <strong class="text-primary">GreenCare</strong> -
          это инновационное мобильное приложение, созданное специально для любителей
          растений всех уровней опыта. Независимо от того, у вас городская квартира
          или просторный сад, <strong class="text-primary">GreenCare</strong> поможет вам легко и успешно
          ухаживать за вашими зелеными друзьями.
        </p>
      </v-sheet>
    </v-container>
  </section>
</template>

<style scoped>

</style>