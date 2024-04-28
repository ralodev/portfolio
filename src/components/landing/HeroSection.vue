<template>
  <section class="flex home-hero w-full items-center justify-center">
    <div class="text-center space-y-8 content">
      <h1
        class="font-black tracking-wide text-4xl sm:text-5xl md:text-6xl uppercase text-balance source"
      >
        {{ $t('hero.title') }}
      </h1>
      <p class="text-base sm:text-lg md:text-xl open max-w-[80ch] text-pretty">
        {{ $t('hero.subtitle') }}
      </p>
      <div class="flex gap-x-3 justify-center">
        <GlassButton bg="bg-sky-700">
          <template #icon>
            <LinkedinIcon class="w-8 h-8" />
          </template>
        </GlassButton>
        <GlassButton bg="bg-neutral-700">
          <template #icon>
            <GithubIcon class="w-8 h-8" />
          </template>
        </GlassButton>
        <GlassButton title="Contact">
          <span class="px-2"> {{ $t('hero.contact_button') }} </span>
        </GlassButton>
      </div>
    </div>
    <!-- Icon Scroll Credits: http://www.hnslack.xyz/ -->
    <div class="icon-scroll hidden md:block"></div>
    <div class="custom-shape-divider-bottom-1713476723">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script lang="ts" setup>
import GlassButton from '../GlassButton.vue'
import GithubIcon from '../icons/GithubIcon.vue'
import LinkedinIcon from '../icons/LinkedinIcon.vue'
</script>

<style>
.home-hero {
  background: linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)),
    url('@/assets/common-bg.svg');
  background-position: center;
  height: 100vh;
  min-height: 80ch;
  max-height: 120ch;
  position: relative;
}
.custom-shape-divider-bottom-1713476723 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1713476723 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1713476723 .shape-fill {
  fill: #ececec;
}

.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 27px;
  height: 45px;
  margin-left: -14px;
  bottom: 10px;
  margin-top: -35px;
  border: 2px solid #000;
  opacity: 50%;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #000;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(26px);
  }
}
</style>
