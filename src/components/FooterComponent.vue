import { RouterLink } from 'vue-router';
<template>
  <footer class="divide-y bg-neutral-800 px-4 text-gray-100">
    <div
      class="mx-auto flex max-w-5xl flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0"
    >
      <div class="lg:w-1/3">
        <div class="flex items-center space-x-2">
          <svg
            class="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                fill="currentColor"
                fill-opacity="0"
                stroke-dasharray="48"
                stroke-dashoffset="48"
                d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" />
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.8s"
                  dur="0.15s"
                  values="0;0.3"
                />
              </path>
              <path
                stroke-dasharray="14"
                stroke-dashoffset="14"
                d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.6s"
                  dur="0.2s"
                  values="14;28"
                />
              </path>
            </g>
            <mask id="lineMdCoffeeTwotoneLoop0">
              <path
                fill="none"
                stroke="#fff"
                stroke-width="2"
                d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
              >
                <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" />
              </path>
            </mask>
            <rect
              width="24"
              height="0"
              y="7"
              fill="currentColor"
              mask="url(#lineMdCoffeeTwotoneLoop0)"
            >
              <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" />
              <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" />
            </rect>
          </svg>
          <h1 class="self-center text-2xl font-semibold">Ralodev</h1>
        </div>
        <span class="text-sm">
          Thank you for visiting my portfolio.
          <br />Here are some useful links:
        </span>
      </div>
      <div class="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:mx-auto sm:grid-cols-3 lg:w-2/3">
        <div class="space-y-3">
          <h2 class="uppercase">Resources</h2>
          <ul
            class="space-y-1 [&>li>a]:inline-flex [&>li>a]:min-h-12 [&>li>a]:min-w-12 [&>li>a]:items-center [&>li>a]:sm:inline"
          >
            <li>
              <a
                href="https://components.ralo.dev/"
                class="hover:text-blue-300 hover:underline"
                target="_blank"
                >Components</a
              >
            </li>
            <li>
              <RouterLink class="hover:text-blue-300 hover:underline" to="/credits"
                >Credits</RouterLink
              >
            </li>
          </ul>
        </div>
        <div class="space-y-3">
          <h2 class="uppercase">Developers</h2>
          <ul
            class="space-y-1 [&>li>a]:inline-flex [&>li>a]:min-h-12 [&>li>a]:min-w-12 [&>li>a]:items-center [&>li>a]:sm:inline"
          >
            <li>
              <a
                class="hover:text-blue-300 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/ralodev/portfolio"
                >Source code</a
              >
            </li>
            <li>
              <a
                class="hover:text-blue-300 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/ralodev/vuefolio"
                >Portfolio template</a
              >
            </li>
            <li>
              <a
                class="hover:text-blue-300 hover:underline"
                rel="noopener noreferrer"
                href="https://github.com/ralodev/vuefolio/blob/main/README.md#getting-started"
                >Documentation</a
              >
            </li>
          </ul>
        </div>
        <div class="col-span-2 sm:col-span-1 sm:space-y-3">
          <h2 class="text-center uppercase sm:text-start">Social</h2>
          <div class="flex items-center justify-center space-x-3 sm:justify-start">
            <a
              rel="noopener noreferrer"
              href="https://github.com/ralodev"
              title="GitHub"
              class="flex items-center p-6 sm:p-0"
            >
              <GithubIcon class="h-6 w-6" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ralodev"
              title="LinkedIn"
              class="flex items-center p-6 sm:p-0"
            >
              <LinkedinIcon class="h-6 w-6" />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://buymeacoffee.com/ralodev"
              title="Buy me a coffee"
              class="flex items-center rounded-full p-6 duration-500 sm:p-1 sm:hover:bg-yellow-200 sm:hover:text-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                class="h-5 w-5"
              >
                <path
                  fill="currentColor"
                  d="m20.216 6.415l-.132-.666c-.119-.598-.388-1.163-1.001-1.379c-.197-.069-.42-.098-.57-.241c-.152-.143-.196-.366-.231-.572c-.065-.378-.125-.756-.192-1.133c-.057-.325-.102-.69-.25-.987c-.195-.4-.597-.634-.996-.788a6 6 0 0 0-.626-.194c-1-.263-2.05-.36-3.077-.416a26 26 0 0 0-3.7.062c-.915.083-1.88.184-2.75.5c-.318.116-.646.256-.888.501c-.297.302-.393.77-.177 1.146c.154.267.415.456.692.58c.36.162.737.284 1.123.366c1.075.238 2.189.331 3.287.37q1.829.074 3.65-.118q.449-.05.896-.119c.352-.054.578-.513.474-.834c-.124-.383-.457-.531-.834-.473c-.466.074-.96.108-1.382.146q-1.767.12-3.536.006a22 22 0 0 1-1.157-.107c-.086-.01-.18-.025-.258-.036q-.364-.055-.724-.13c-.111-.027-.111-.185 0-.212h.005q.416-.09.838-.147h.002c.131-.009.263-.032.394-.048a25 25 0 0 1 3.426-.12q1.011.029 2.017.144l.228.031q.4.06.798.145c.392.085.895.113 1.07.542c.055.137.08.288.111.431l.319 1.484a.237.237 0 0 1-.199.284h-.003l-.112.015a37 37 0 0 1-4.743.295a37 37 0 0 1-4.699-.304c-.14-.017-.293-.042-.417-.06c-.326-.048-.649-.108-.973-.161c-.393-.065-.768-.032-1.123.161c-.29.16-.527.404-.675.701c-.154.316-.199.66-.267 1c-.069.34-.176.707-.135 1.056c.087.753.613 1.365 1.37 1.502a39.7 39.7 0 0 0 11.343.376a.483.483 0 0 1 .535.53l-.071.697l-1.018 9.907c-.041.41-.047.832-.125 1.237c-.122.637-.553 1.028-1.182 1.171q-.868.197-1.756.205c-.656.004-1.31-.025-1.966-.022c-.699.004-1.556-.06-2.095-.58c-.475-.458-.54-1.174-.605-1.793l-.731-7.013l-.322-3.094c-.037-.351-.286-.695-.678-.678c-.336.015-.718.3-.678.679l.228 2.185l.949 9.112c.147 1.344 1.174 2.068 2.446 2.272c.742.12 1.503.144 2.257.156c.966.016 1.942.053 2.892-.122c1.408-.258 2.465-1.198 2.616-2.657l1.024-9.995l.215-2.087a.48.48 0 0 1 .39-.426c.402-.078.787-.212 1.074-.518c.455-.488.546-1.124.385-1.766zm-1.478.772c-.145.137-.363.201-.578.233c-2.416.359-4.866.54-7.308.46c-1.748-.06-3.477-.254-5.207-.498c-.17-.024-.353-.055-.47-.18c-.22-.236-.111-.71-.054-.995c.052-.26.152-.609.463-.646c.484-.057 1.046.148 1.526.22q.865.132 1.737.212c2.48.226 5.002.19 7.472-.14q.675-.09 1.345-.21c.399-.072.84-.206 1.08.206c.166.281.188.657.162.974a.54.54 0 0 1-.169.364zm-6.159 3.9c-.862.37-1.84.788-3.109.788a6 6 0 0 1-1.569-.217l.877 9.004c.065.78.717 1.38 1.5 1.38c0 0 1.243.065 1.658.065c.447 0 1.786-.065 1.786-.065c.783 0 1.434-.6 1.499-1.38l.94-9.95a4 4 0 0 0-1.322-.238c-.826 0-1.491.284-2.26.613"
                />
              </svg>
            </a>
          </div>
          <p class="text-center sm:text-start">contact@ralo.dev</p>
        </div>
      </div>
    </div>
    <div class="py-6 text-center text-sm">© 2024 Ralodev. Some rights reserved.</div>
  </footer>
</template>

<script setup lang="ts">
import GithubIcon from './icons/GithubIcon.vue'
import LinkedinIcon from './icons/LinkedinIcon.vue'
</script>
