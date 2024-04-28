<template>
  <section
    id="experience"
    name="experience"
    class="bg-[#ececec] py-10 flex justify-center w-full min-h-[80ch] items-center"
  >
    <div>
      <h1 class="source text-5xl font-semibold text-center tracking-wider uppercase mb-10 w-full">
        {{ $t('experience.title') }}
      </h1>
      <div class="relative grid gap-4 sm:grid-cols-12 content">
        <div class="col-span-12 sm:col-span-3">
          <div
            class="text-center sm:text-left sm:before:block before:w-full before:mx-auto before:h-4 before:mt-[5px] before:mb-5 before:rounded-lg before:hidden sm:before:mx-0 before:bg-gradient-to-l before:from-sky-900 before: sticky top-24"
          >
            <span class="text-base inline-block pb-2 text-balance sm:text-wrap">
              {{ $t('experience.description') }}
            </span>
            <a href="/CV-Raúl_López.pdf" title="Download resume" target="_blank">
              <GlassButton title="Download resume" class="mx-auto mb-8">
                <span class="px-2"> {{ $t('experience.download_button') }} </span>
              </GlassButton>
            </a>
          </div>
        </div>
        <div class="relative col-span-12 ps-4 space-y-6 sm:col-span-9">
          <ul
            class="col-span-12 relative ps-4 sm:col-span-8 before:absolute before:top-[5px] before:bottom-0 before:w-0.5 before:-left-3 before:bg-gray-300"
          >
            <ExperienceElement
              v-for="job in experience"
              :key="job.id"
              v-bind="job"
              :title="$t(`experience.list[${job.id}].position`)"
              :url="$t(`experience.list[${job.id}].url`)"
              :start="$t(`experience.list[${job.id}].startDate`)"
              :end="$t(`experience.list[${job.id}].endDate`)"
              :company="$t(`experience.list[${job.id}].name`)"
              :description="$t(`experience.list[${job.id}].summary`)"
              :highlights="$t(`experience.list[${job.id}].highlights`).split(';')"
            />
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import en_experience from '@/i18n/en/en_experience'
import ExperienceElement from './ExperienceElement.vue'
const experience = en_experience.list
</script>
