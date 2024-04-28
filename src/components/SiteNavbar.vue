<template>
  <div class="bg-white text-xl z-10 text-zinc-800 uppercase shadow">
    <div class="content flex justify-between items-center source w-full mx-auto py-4">
      <router-link class="flex my-auto items-center open font-bold" to="/">
        {{"<Ralodev />"}}
      </router-link>
      <div class="flex items-center space-x-2 font-semibold">
        <nav class="hidden items-center md:flex space-x-2 [&>a]:px-1">
          <router-link class="hover:text-sky-800" to="/">{{ $t('hero.home') }}</router-link>
          <router-link class="hover:text-sky-800" to="/#experience">{{
            $t('experience.title')
          }}</router-link>
          <router-link class="hover:text-sky-800" to="/#projects">{{
            $t('projects.title')
          }}</router-link>
          <router-link class="hover:text-sky-800" to="/#about">{{ $t('about.title') }}</router-link>
          <router-link class="hover:text-sky-800" to="/#contact">{{
            $t('contact.title')
          }}</router-link>
        </nav>
        <div class="source text-black">
          <!-- <select v-model="$i18n.locale">
            <option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :value="locale"
            >
              {{ locale }}
            </option>
          </select> -->
          <LanguageSelector />
        </div>
        <button class="md:hidden" @click="showMenu = !showMenu">
          <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="showMenu" class="items-center flex">
      <nav
        class="z-10 bg-white relative flex w-full flex-col [&>a]:px-10 [&>a]:py-4 text-zinc-700 divide-y"
      >
        <router-link @click="showMenu = false" class="hover:text-sky-800" to="/">{{
          $t('hero.home')
        }}</router-link>
        <router-link @click="showMenu = false" class="hover:text-sky-800" to="/#experience">{{
          $t('experience.title')
        }}</router-link>
        <router-link @click="showMenu = false" class="hover:text-sky-800" to="/#projects">{{
          $t('projects.title')
        }}</router-link>
        <router-link @click="showMenu = false" class="hover:text-sky-800" to="/#about">{{
          $t('about.title')
        }}</router-link>
        <router-link @click="showMenu = false" class="hover:text-sky-800" to="/#contact">{{
          $t('contact.title')
        }}</router-link>
      </nav>
    </div>
  </div>
  <div
    v-if="showMenu"
    @click="showMenu = false"
    class="w-screen h-screen bg-black/50 absolute top-0 left-0 z-[-1]"
  ></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LanguageSelector from './LanguageSelector.vue'
const showMenu = ref(false)
</script>

<style></style>
