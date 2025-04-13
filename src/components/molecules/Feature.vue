<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  item: {
    id: number
    title: string
    text: string
    bgColor: string
    btnText: string
    btnBgColor: string
    link: string
  }
}>()
const router = useRouter()
const goToLink = () => {
  return router.push(props.item.link)
}
</script>

<template>
  <div :style="{ background: props.item.bgColor }" class="p-8 rounded-3xl">
    <h1 class="mb-2 text-xl font-semibold">{{ props.item.title }}</h1>
    <p class="mb-3">{{ props.item.text }}</p>
    <button
      @click="goToLink"
      :style="{ background: props.item.btnBgColor }"
      class="text-white py-2 px-4 rounded-lg"
    >
      {{ props.item.btnText }}
    </button>
  </div>
</template>
