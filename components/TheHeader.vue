<script setup lang="ts">
import { ref } from "vue"
const nav = ref([
  {
    link: "/",
    title: "Описание"
  },
  {
    link: "/search",
    title: "Поиск"
  }
])
</script>

<template>
  <v-app-bar :elevation="4" class="pa-4 position-relative">
    <nuxt-link to="/">
      <v-img
          src="/logo.png"
          width="80"
          height="80"
      />
    </nuxt-link>
    <v-spacer></v-spacer>
    <v-list nav class="d-flex mr-12">
      <v-list-item v-for="(item, index) in nav" :key="`nav-link-${index}`">
        <nuxt-link
            :to="item.link"
            class="text-decoration-none font-weight-medium text-black link text-h6"
            exact-active-class="active-link"
        >
          {{item.title}}
        </nuxt-link>
      </v-list-item>
    </v-list>
    <v-spacer></v-spacer>
    <div></div>
  </v-app-bar>
</template>

<style lang="scss">
.link {
  position: relative;
  transition: color 0.3s ease;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #53823a !important;
    transition: width 0.3s ease;
    transform-origin: left;
  }

  &:hover {
    color: #53823a !important;

    &::after {
      width: 100%;
    }
  }
}
.active-link {
  color: #53823a !important;
  position: relative;
  transition: color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #53823a !important;
    transition: width 0.3s ease;
    transform-origin: left;
  }

  &:hover {
    color: #53823a !important;

    &::after {
      width: 100%;
    }
  }
}
</style>