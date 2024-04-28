<template>
  <!-- Card container -->
  <article class="relative w-full">
    <!-- Card Content -->
    <div class="relative flex flex-col gap-2 font-medium md:flex-row">
      <!-- Info -->
      <div class="order-2 flex w-full flex-col justify-center px-6 md:w-1/2 md:px-2">
        <!-- Title -->
        <h2 class="text-4xl src font-bold text-ltext1 text-slate-600 tracking-wider">
          {{ name }}
        </h2>
        <!-- Tags -->
        <div class="my-2 flex flex-wrap gap-2 font-medium src">
          <div
            v-for="tech in techstack"
            :key="tech.toLowerCase()"
            class="relative flex flex-nowrap whitespace-nowrap rounded-md bg-gray-300 px-2 py-1 text-sm font-normal"
          >
            {{ tech }}
          </div>
        </div>
        <!-- Description -->
        <p class="pt-2 text-base text-ltext2 open">
          {{ description }}
        </p>

        <!-- Buttons -->
        <div class="flex gap-5 pt-3">
          <a
            v-if="src"
            :title="`${props.name} github repository`"
            :href="src"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GlassButton
              :title="`${props.name} github repository`"
              type="button"
              bg="bg-slate-700"
              :disabled="!src"
              padding="16"
            >
              <template #icon>
                <GithubIcon class="w-6 h-6" />
              </template>
              Source
            </GlassButton>
          </a>
          <a v-if="url != ''" :href="url" target="_blank" rel="noreferrer noopener">
            <GlassButton v-if="url" :disabled="!url" padding="16">
              <template #icon>
                <WebIcon class="w-6 h-6" />
              </template>
              Demo
            </GlassButton>
          </a>
        </div>
      </div>
      <!-- Images -->
      <div class="group px-6 md:w-1/2 md:px-0 max-w-[90vw] mx-auto">
        <div class="container">
          <div class="tilt-box-wrap">
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <span class="t_over"></span>
            <div class="tilt-box">
              <img
                :src="getImageUrl()"
                :alt="name + ' main image'"
                class="object-cover object-center mx-auto max-h-[490px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import WebIcon from '@/components/icons/WebIcon.vue'
import GithubIcon from '@/components/icons/GithubIcon.vue'
const emits = defineEmits(['open-src', 'open-demo', 'open-live', 'open-read'])

const props = defineProps({
  name: {
    type: String,
    default: 'Project name'
  },
  description: {
    type: String,
    default: 'Project description'
  },
  image: {
    type: String,
    default: 'https://via.placeholder.com/300'
  },
  url: {
    type: String,
    required: false
  },
  src: {
    type: String,
    required: false
  },
  read: {
    type: Boolean,
    required: false
  },
  techstack: {
    type: Array<String>,
    required: false
  }
})

const getImageUrl = () => {
  return new URL(`/src/assets/img/projects/${props.image}`, import.meta.env.VITE_URL).href
}
</script>

<style scoped>
.tilt-box-wrap {
  position: relative;
  transition: all 0.6s ease-out;
  perspective: 1000px;
}
.tilt-box-wrap:hover {
  transition: all 0.3s linear;
  perspective: 1000px;
}
.tilt-box {
  width: 100%;
  height: 100%;
  position: relative;
  transition: all 0.6s ease-out;
  transform: rotateX(0deg) rotateY(0deg);
  perspective: 1000px;
  transform-style: preserve-3d;
}
.t_over {
  width: 33.333%;
  height: 33.333%;
  position: absolute;
  z-index: 1;
}
.t_over:nth-child(1) {
  left: 0;
  top: 0;
}
.t_over:nth-child(2) {
  left: 33.333%;
  top: 0;
}
.t_over:nth-child(3) {
  left: 66.666%;
  top: 0;
}
.t_over:nth-child(4) {
  left: 0;
  top: 33.333%;
}
.t_over:nth-child(5) {
  left: 33.333%;
  top: 33.333%;
}
.t_over:nth-child(6) {
  left: 66.666%;
  top: 33.333%;
}
.t_over:nth-child(7) {
  left: 0;
  top: 66.666%;
}
.t_over:nth-child(8) {
  left: 33.333%;
  top: 66.666%;
}
.t_over:nth-child(9) {
  left: 66.666%;
  top: 66.666%;
}

.t_over:nth-child(1):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(10deg);
}
.t_over:nth-child(2):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(0deg);
}
.t_over:nth-child(3):hover ~ .tilt-box {
  transform: rotateX(-10deg) rotateY(-10deg);
}
.t_over:nth-child(4):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(10deg);
}
.t_over:nth-child(5):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(0deg);
}
.t_over:nth-child(6):hover ~ .tilt-box {
  transform: rotateX(0deg) rotateY(-10deg);
}
.t_over:nth-child(7):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(10deg);
}
.t_over:nth-child(8):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(0deg);
}
.t_over:nth-child(9):hover ~ .tilt-box {
  transform: rotateX(10deg) rotateY(-10deg);
}
</style>
