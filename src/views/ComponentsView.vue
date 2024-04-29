<template>
  <main class="min-h-screen w-full bg-gray-200 p-28">
    <section class="mx-auto w-full max-w-4xl">
      <article class="rounded-2xl border-2 border-gray-300 bg-white p-5">
        <h1 class="open text-2xl font-bold">GlassButton</h1>
        <div name="sample" class="flex items-center gap-x-3 py-5">
          <GlassButton>Default</GlassButton>
          <GlassButton bg="bg-teal-700">Tailwind BG</GlassButton>
          <GlassButton padding="30">Custom padding</GlassButton>
          <GlassButton bg="bg-yellow-700">
            <template #icon>
              <SmileIcon />
            </template>
          </GlassButton>
          <GlassButton bg="bg-pink-700">
            <template #icon>
              <SmileIcon class="w-6" />
            </template>
            Text
          </GlassButton>
          <GlassButton size="small">SMALL</GlassButton>
          <GlassButton size="large">LARGE</GlassButton>
          <GlassButton><span class="text-pink-300">hello</span></GlassButton>
        </div>
        <div class="code-container my-5 select-none border border-gray-300 p-3">
          <code class="" id="button-use">
            <span class="comment">Default button</span>
            <span class="open-tag">GlassButton</span>
            Default
            <span class="close-tag">GlassButton</span>

            <span class="comment">Button with tailwind BG color</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">class</span>
              <span class="classname">bg-teal-700</span>
            </span>
            Tailwind BG
            <span class="close-tag">GlassButton</span>

            <span class="comment">Button with custom padding</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">padding</span>
              <span class="classname">30</span>
            </span>
            Custom padding
            <span class="close-tag">GlassButton</span>
            <br />

            <span class="comment">Button with only icon</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">class</span>
              <span class="classname">bg-yellow-700</span>
            </span>
            <br />
            <span class="open-tag ps-3"
              >template
              <span class="attrib-only">#id</span>
            </span>
            &lt;svg ... &gt;
            <span class="close-tag">template</span>
            <br />
            <span class="close-tag">GlassButton</span>

            <span class="comment">Button with icon and text</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">class</span>
              <span class="classname">bg-pink-700</span>
            </span>
            <br />
            <span class="open-tag ps-3"
              >template
              <span class="attrib-only">#icon</span>
            </span>
            &lt;svg ... &gt;
            <span class="close-tag">template</span>
            <br />
            <span class="ps-3">Text</span>
            <br />
            <span class="close-tag">GlassButton</span>

            <span class="comment">Small button</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">size</span>
              <span class="classname">small</span>
            </span>
            SMALL
            <span class="close-tag">GlassButton</span>
            <br />

            <span class="comment">Small button</span>
            <span class="open-tag"
              >GlassButton
              <span class="attrib">size</span>
              <span class="classname">large</span>
            </span>
            LARGE
            <span class="close-tag">GlassButton</span>
            <br />
          </code>
        </div>
        <div class="group relative">
          <textarea
            readonly
            class="h-60 max-h-96 w-full select-all border border-gray-300 bg-gray-100 group-hover:bg-gray-200"
            id="button-code"
            v-model="code"
          >
          </textarea>
          <button
            class="absolute right-8 top-5 rounded-xl border border-gray-300 bg-yellow-100 p-3 opacity-0 duration-300 group-hover:opacity-100"
          >
            Copy
          </button>
        </div>
      </article>
    </section>
  </main>
</template>

<script lang="ts" setup>
import GlassButton from '@/components/GlassButton.vue'
import SmileIcon from '@/components/icons/SmileIcon.vue'
import { ref } from 'vue'
const code = ref()
code.value = `<template>
  <button
    :disabled="props.disabled"
    class="glass-button source"
    :class="getButtonSize"
    :title="props.title"
  >
    <span
      class="glass-button__content text-white"
      :class="getButtonSpacing"
      :style="\`padding-inline: \${props.padding}px !important\`"
    >
      <span v-if="!!slots['icon']" class="flex [&>svg]:my-auto [&>svg]:inline">
        <slot name="icon" />
      </span>
      <span v-if="!!slots['default']" class="m-auto">
        <slot name="default" />
      </span>
    </span>
    <span class="glass-button__bg" :class="bgClass + (props.disabled ? ' opacity-50' : '')"></span>
  </button>
</template>

<script lang="ts" setup>
import { useSlots, computed } from 'vue'
const slots = useSlots()
const button_sizes: Record<string, string> = {
  small: ' h-[35px] min-w-[35px] text-sm',
  normal: ' h-[50px] min-w-[35px] text-lg',
  large: ' h-[65px] min-w-[35px] text-2xl font-semibold'
}
const button_spacing: Record<string, string> = {
  small: ' px-2 gap-x-2',
  normal: ' px-2 gap-x-2',
  large: ' px-5 gap-x-3'
}
const props = defineProps({
  bg: {
    type: String,
    default: 'bg-sky-800'
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal',
    required: false
  },
  padding: {
    type: String,
    default: '8'
  }
})

const getButtonSize = computed(() => {
  const isValidSize = Object.keys(button_sizes).includes(props.size)
  const newClass = isValidSize ? button_sizes[props.size] : button_sizes['normal']
  return newClass
})
const getButtonSpacing = computed(() => {
  const isValidSpacing = Object.keys(button_spacing).includes(props.size)
  const newClass = isValidSpacing ? button_spacing[props.size] : button_spacing['normal']
  return newClass
})
const bgClass = computed(() => {
  return props.bg.includes('bg-') ? props.bg : 'bg-' + props.bg
})
${'</'}script>

<style scoped>
.glass-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  position: relative;
  /* overflow: hidden; */
  border-radius: 6px;
  z-index: 1;
  transition: all 0.3s;
}

.glass-button:not([disabled]) {
  cursor: pointer;
}

.glass-button:is([disabled]) {
  cursor: not-allowed;
}

.glass-button__content {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  backdrop-filter: blur(0px);
  letter-spacing: 0.5px;
  border-radius: 10px;
  transition: all 0.3s;
  z-index: 1;
  border: 1px solid rgba(156, 156, 156, 0.466);
}

.glass-button:disabled {
  cursor: default;
}

.glass-button .glass-button__bg {
  position: absolute;
  content: '';
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 10px;
  pointer-events: none;
  transition: all 0.3s;
}

.glass-button:not([disabled]):hover .glass-button__bg {
  transform: translate(5px, 5px);
  box-shadow: 5px 5px 5px 0px #0000003a;
}

.glass-button:not([disabled]):hover .glass-button__content {
  background-color: #00000017;
  backdrop-filter: blur(4px);
}
</style>
`
</script>

<style>
.code-container {
  background: #172c3f;
  color: #eee;
}
.open-tag {
  color: rgb(68, 223, 68);
}
.close-tag {
  color: rgb(68, 223, 68);
}
.open-tag::before {
  content: '<';
  color: #e6d9bf;
}
.open-tag::after {
  content: '>';
  color: #e6d9bf;
}
.close-tag::before {
  content: '</';
  color: #e6d9bf;
}
.close-tag::after {
  content: '>';
  color: #e6d9bf;
}
.attrib {
  color: rgb(81, 205, 236);
}
.attrib-only {
  color: rgb(81, 205, 236);
}
.attrib::after {
  content: '=';
  color: #e6d9bf;
}
.classname {
  color: rgb(247, 167, 111);
}
.classname::before,
.classname::after {
  content: '"';
  color: rgb(194, 135, 93);
}
.comment {
  margin-top: 1rem;
  color: cadetblue;
  display: block;
}
.comment::before {
  content: '<!--';
}
.comment::after {
  content: '-->';
}
</style>
