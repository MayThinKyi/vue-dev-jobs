<script setup lang="ts">
const props = defineProps<{
  btnTitle: string
  btnBg?: string
  btnOnClick: () => void
  roundedFull?: boolean
}>()
</script>

<template>
  <button
    @click="props.btnOnClick"
    :class="[
      'w-full',
      props.btnBg ? 'bg-red-600 hover:bg-red-800' : 'bg-green-500 hover:bg-green-800',
      'py-2',
      'px-4',
      props.roundedFull ? 'rounded-full' : 'rounded-lg',
      'text-center',
      'text-white',
      'font-semibold',
    ]"
  >
    {{ props.btnTitle }}
  </button>
</template>
