<template>
  <form class="max-w-sm mx-auto">
    <div
      v-if="langDropdown"
      class="w-screen h-screen absolute top-0 left-0"
      @click="langDropdown = false"
    ></div>
    <div class="flex relative">
      <button
        id="states-button"
        @click="langDropdown = !langDropdown"
        class="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 gap-x-2 uppercase"
        type="button"
      >
        <!-- Selected Flag -->
        <component :is="selectedLanguageFlag" />
        {{ selectedLanguage }}
        <svg
          class="w-2.5 h-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      <div
        v-if="langDropdown"
        id="dropdown-states"
        class="z-10 top-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
      >
        <ul class="py-2 text-sm text-gray-700" aria-labelledby="states-button">
          <li v-for="option in languageOptions" :key="option.language">
            <button
              type="button"
              class="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              @click="changeLanguage(option)"
            >
              <Component :is="option.flagIcon" /> {{ option.language }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import EnglishIcon from './icons/EnglishIcon.vue'
import SpanishIcon from './icons/SpanishIcon.vue'
import FrenchIcon from './icons/FrenchIcon.vue'

const langDropdown = ref(false)
const selectedLanguageFlag = ref(EnglishIcon)
const selectedLanguage = ref('EN')
const locale = useI18n()
const languageOptions = [
  { language: 'English', flagIcon: EnglishIcon, code: 'en' },
  { language: 'Español', flagIcon: SpanishIcon, code: 'es' },
  { language: 'Français', flagIcon: FrenchIcon, code: 'fr' }
]
interface OptionObject {
  language: string
  flagIcon: any
  code: string
}
const changeLanguage = (option: OptionObject) => {
  selectedLanguage.value = option.code
  selectedLanguageFlag.value = option.flagIcon
  locale.locale.value = option.code.toLocaleLowerCase()
  langDropdown.value = false
}
</script>

<style></style>
