<template>
  <!-- Education section -->
  <CollapsiblePanel :header="$t('about.education.title')" toggleable>
    <template #icon>
      <svg
        class="my-auto mr-2 h-8 w-8"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
        <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
      </svg>
    </template>
    <!-- Education -->
    <ul class="space-y-5">
      <li v-for="edu in educationPrograms" :key="edu.id" class="flex flex-col">
        <p class="experience__title text-xl source font-semibold tracking-wide text-gray-800">
          {{ $t(`about.education.list[${edu.id}].title`) }}
        </p>
        <time class="experience__time source text-gray-800 uppercase text-sm">
          {{ toFixedDate($t(`about.education.list[${edu.id}].startDate`)) }} -
          {{ toFixedDate($t(`about.education.list[${edu.id}].endDate`)) }}</time
        >

        <p class="experience__company font-semibold open text-gray-700">
          @ {{ $t(`about.education.list[${edu.id}].institution`) }}
        </p>
        <div class="w-full -mx-2">
          <span
            class="rounded-md source bg-gray-300 uppercase text-gray-800 text-xs py-1 px-3 min-w-1 inline-block mx-2"
            v-for="course in edu.courses"
            :key="course"
            >{{ course }}</span
          >
        </div>
        <p class="experience__description">
          {{ $t(`about.education.list[${edu.id}].description`) }}
        </p>
      </li>
    </ul>
    <!-- Certifications -->
  </CollapsiblePanel>
</template>

<script lang="ts" setup>
import CollapsiblePanel from '@/components/CollapsiblePanel.vue'
import en_about from '@/i18n/en/en_about'
import one from '/src/assets/img/one.webp'

const dateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long'
}
const toFixedDate = (stringDate: string) => {
  const toDate = new Date(stringDate)
  return toDate.toLocaleDateString('en-US', dateOptions)
}
const educationPrograms = en_about.education.list
</script>
