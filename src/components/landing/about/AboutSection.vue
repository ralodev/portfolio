<template>
  <section
    id="about"
    name="about"
    class="bg-[#ececec] py-10 flex justify-center w-full min-h-[80ch] items-center"
  >
    <div class="content">
      <h1 class="section__title">
        {{ $t('about.title') }}
      </h1>
      <div class="text-center inline-block mt-10 mb-10 sm:mt-0">
        <div name="photo-frame" class="relative group inline-block md:block mb-8 md:mb-0">
          <img
            src="@/assets/img/profile.webp"
            class="float-left h-56 w-56 z-[1] relative rotate-6 mx-8 mb-2 border-gray-400 rounded-lg md:group-hover:rotate-0 duration-300"
            alt=""
          />
          <div
            class="absolute h-[244px] w-[244px] translate-y-[-10px] translate-x-[22px] bg-white rotate-6 shadow-xl rounded-lg md:group-hover:rotate-0 duration-300"
          ></div>
        </div>
        <p class="text-base sm:text-lg open text-start">
          {{ $t('about.summary') }}
        </p>
      </div>
      <EducationPanel />
      <AchievementsPanel />
    </div>
  </section>
</template>

<script lang="ts" setup>
import EducationPanel from './EducationPanel.vue'
import AchievementsPanel from './AchievementsPanel.vue'
</script>

<style scoped>
section {
  filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.6));
}
</style>
