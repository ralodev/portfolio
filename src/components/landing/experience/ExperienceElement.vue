<template>
  <li
    class="relative before:absolute before:top-[6px] before:w-4 before:h-4 before:rounded-full before:left-[-35px] before:z-[1] before:bg-sky-900 before: pb-8"
  >
    <article>
      <h1 class="text-xl font-bold text-sky-900 open">
        {{ props.title }}
      </h1>
      <time class="text-sm font-mono font-semibold text-gray-700">
        {{ props.start }} - {{ props.end }} ({{ totalTime() }} {{ $t('experience.months') }})
      </time>
      <span class="block">
        <component
          :is="props.url == '#' ? 'h2' : 'a'"
          :href="props.url"
          class="text-lg font-semibold source items-center gap-x-1 inline-flex"
          :class="props.url == '#' ? 'cursor-default' : 'cursor-pointer hover: hover:text-sky-700'"
          target="_blank"
          rel="noopener noreferrer"
        >
          @ {{ props.company }}
          <svg
            v-if="url != '#'"
            xmlns="http://www.w3.org/2000/svg"
            class="inline-block"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M15.64 7.025h-3.622v-2h7v7h-2v-3.55l-4.914 4.914l-1.414-1.414z" />
              <path d="M10.982 6.975h-6v12h12v-6h-2v4h-8v-8h4z" />
            </g>
          </svg>
        </component>
      </span>
      <div class="text-base pt-1 open">
        <p>
          {{ props.description }}
        </p>
        <ul v-if="props.highlights[0] != ''" class="list-disc list-inside">
          <li v-for="highlight in props.highlights" :key="highlight.toString()">
            {{ highlight }}
          </li>
        </ul>
      </div>
    </article>
  </li>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const props = defineProps({
  title: {
    type: String,
    default: 'Job Title'
  },
  url: {
    type: String,
    default: '#'
  },
  start: {
    type: String,
    default: 'Start Date'
  },
  end: {
    type: String,
    default: 'Present'
  },
  company: {
    type: String,
    default: 'Company Name'
  },
  description: {
    type: String,
    default: 'Description of the job'
  },
  highlights: {
    type: Array<String>,
    default: () => []
  }
})

const totalTime = () => {
  if (props.end === t('experience.present')) {
    const startDate = new Date(props.start)
    const currentDate = new Date()
    const months =
      currentDate.getMonth() -
      startDate.getMonth() +
      12 * (currentDate.getFullYear() - startDate.getFullYear())
    return months
  } else {
    const startDate = new Date(props.start)
    const endDate = new Date(props.end)
    const months =
      endDate.getMonth() -
      startDate.getMonth() +
      12 * (endDate.getFullYear() - startDate.getFullYear())
    return months
  }
}
</script>

<style></style>
