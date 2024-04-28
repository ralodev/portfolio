<script setup lang="ts">
import { onMounted, ref } from 'vue'
import GlassButton from '@/components/GlassButton.vue'
const WEB3FORMS_ACCESS_KEY = 'a492c371-8aa4-42fc-9f22-453715749f65'
const name = ref('')
const email = ref('')
const message = ref('')
const sending = ref(false)
const isMessageAvailable = ref(true)
const cooldownTimeLeft = ref('00:00')

onMounted(() => {
  checkMessageAvailable()
})

const checkMessageAvailable = () => {
  let lastMessage = localStorage.getItem('lastMessage')
  if (lastMessage) {
    let lastMessageTime = new Date(lastMessage)
    let currentTime = new Date()
    // Calculamos la diferencia en milisegundos
    let difference = currentTime.getTime() - lastMessageTime.getTime()
    // Convertimos la diferencia a minutos
    let differenceInMinutes = difference / 60000
    if (differenceInMinutes < 30) {
      // Convertir la diferencia de nuevo a minutos y segundos para la salida
      let minutes = 30 - Math.floor(differenceInMinutes)
      let seconds = 59 - Math.floor((difference % (1000 * 60)) / 1000)
      cooldownTimeLeft.value = `${minutes}:${seconds.toString().padStart(2, '0')}`
      // Check again in 1 sec
      setTimeout(() => {
        checkMessageAvailable()
      }, 1000)
      isMessageAvailable.value = false
      return false
    }
  }
  isMessageAvailable.value = true
  return true
}

const submitForm = async () => {
  if (!checkMessageAvailable()) {
    console.error("You can't send more messages")
    return
  }
  sending.value = true
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      name: name.value,
      email: email.value,
      message: message.value
    })
  })
  const result = await response.json()
  if (result.success) {
    console.log(result)
  }
  let currentDateTime = new Date(Date.now()).toISOString()
  localStorage.setItem('lastMessage', currentDateTime)
  checkMessageAvailable()
}
</script>
<template>
  <form
    @submit.prevent="submitForm"
    class="flex w-full max-w-[600px] flex-col gap-y-5 self-center pt-3 text-start open"
  >
    <label class="block" for="name">
      {{ $t('contact.name_label') }}
      <input
        type="text"
        name="name"
        v-model="name"
        autocomplete="name"
        :placeholder="$t('contact.name_placeholder')"
        class="block px-3 min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white outline-0 focus:outline-1 focus:outline-sky-700 border-neutral-400"
        required
      />
    </label>
    <label class="block" for="email">
      {{ $t('contact.email_label') }}
      <input
        type="email"
        name="email"
        v-model="email"
        autocomplete="email"
        :placeholder="$t('contact.email_placeholder')"
        class="block px-3 min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white outline-0 focus:outline-1 focus:outline-sky-700 border-neutral-400"
        required
      />
    </label>
    <label class="block" for="message">
      {{ $t('contact.message_label') }}
      <textarea
        name="message"
        v-model="message"
        class="block px-3 py-2 min-h-[45px] w-full select-all rounded-md rounded-s-md border-[1px] bg-white outline-0 focus:outline-1 focus:outline-sky-700 border-neutral-400"
        :placeholder="$t('contact.message_placeholder')"
        required
      ></textarea>
    </label>

    <span v-if="!isMessageAvailable" class="text-red-600 source text-sm text-center">
      {{ $t('contact.restriction') }}
    </span>

    <span class="mx-auto">
      <GlassButton :disabled="sending || !isMessageAvailable" type="submit" title="Send message">
        <span v-if="isMessageAvailable" class="px-3">
          {{ sending ? $t('contact.sending') : $t('contact.send') }}
        </span>
        <span v-else class="px-3">
          {{ cooldownTimeLeft }}
        </span>
      </GlassButton>
    </span>
  </form>
</template>
