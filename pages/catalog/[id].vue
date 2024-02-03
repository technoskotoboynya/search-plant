<script setup lang="ts">
import { useRoute } from 'vue-router';
import {useCatalogStore} from "~/store/catalogStore";

const route = useRoute();
const productId: string | string[] = route.params.id;
const plant_from_store = useCatalogStore()
const pageInfo = plant_from_store.getPlantById(productId)
</script>

<template>
  <section class="mt-8 plant-page">
    <v-container>
      <v-sheet class="pa-6 pa-md-12" :rounded="'xl'" color="white" :elevation="2">
        <v-row class="mb-8">
          <v-col align-self="center" cols="12" md="6">
            <h1 class="text-h3 text-md-h2 mb-4">{{ pageInfo.plant }}</h1>
            <h2 class="text-h6 text-body-color">{{ pageInfo.subtitle }}</h2>
          </v-col>
          <v-col cols="12" md="6">
            <v-img :src="pageInfo.img" class="rounded-xl" />
          </v-col>
        </v-row>
        <v-row v-for="item in pageInfo.pageDesc" :key="item" class="mb-6 flex-column">
          <h3 class="text-h4 text-secondary-gray mb-4">{{ item.title }}</h3>
          <p v-if="item.subtitle" class="mb-4 text-h6">{{ item.subtitle }}</p>
          <v-sheet v-if="item.numericList || item.titleList" class="mb-4">
            <p class="text-body-1 text-primary mb-4">{{ item.titleList }}</p>
            <p
                v-for="(item, i) in item.numericList"
                :key="i"
                class="mb-4"
            >
              {{ i + 1 }}. {{ item }}
            </p>
          </v-sheet>
          <v-sheet
              v-if="item.img"
              :rounded="'xl'"
              class="pa-4 d-flex justify-center w-100 bg-grey-lighten-3 mb-4"
          >
            <v-img
                :src="item.img"
                :width="500"
                :height="400"
                :rounded="'xl'"
            />
          </v-sheet>
          <p v-for="text in item.description" :key="item" class="mb-5">
            {{text}}
          </p>
        </v-row>
      </v-sheet>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.plant-page {
  p {
    max-width: 1000px;
  }
}
</style>