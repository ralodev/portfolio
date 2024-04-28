<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNavbar from './components/SiteNavbar.vue'
</script>

<template>
  <header class="fixed w-full z-50">
    <SiteNavbar />
  </header>
  <RouterView />
  <footer></footer>
</template>

<style>
body {
  background-color: #fff;
}
</style>
