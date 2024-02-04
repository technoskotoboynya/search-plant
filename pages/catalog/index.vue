<script setup lang="ts">
import { useCatalogStore } from "~/store/catalogStore";
useHead({title: 'Catalog'})

const plant_from_store = useCatalogStore()
</script>

<template>
  <section class="mt-8">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="1">
          <Filter />
        </v-col>
        <v-col>
          <Search cols="12" md="10"/>
        </v-col>
      </v-row>
      <v-row>
        <transition-group name="card-transition">
          <v-col cols="12" md="6" lg="4" v-for="item in plant_from_store.filteredData" :key="item.id">
            <nuxt-link :to="`catalog/${item.plant}/`">
              <Card
                  :plant="item.plant"
                  :subtitle="item.subtitle"
                  :image="item.img"
                  :type="item.type"
                  :family="item.family"
              />
            </nuxt-link>
          </v-col>
        </transition-group>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
.card-transition-enter-active, .card-transition-leave-active {
  transition: opacity 0.2s;
}
.card-transition-enter, .card-transition-leave-to {
  opacity: 0;
}
.card-transition-move {
  transition: transform 0.2s;
}
</style>