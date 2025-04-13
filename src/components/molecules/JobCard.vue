<script setup lang="ts">
import { useRouter } from 'vue-router'
import Button from '../atoms/Button.vue'
import { computed, reactive } from 'vue'

const props = defineProps<{
  job: Job
}>()
const router = useRouter()

const onBtnClick = () => {
  return router.push(`/jobs/${props.job.id}`)
}

const state = reactive({
  isTruncated: true,
})
const toggleTruncated = () => {
  state.isTruncated = !state.isTruncated
}
const description = computed(() => {
  return state.isTruncated
    ? props.job.description.substring(0, 100) + ' ...'
    : props.job.description
})
</script>

<template>
  <div class="bg-white rounded-3xl p-8 cursor-pointer">
    <p>{{ props.job.type }}</p>
    <h1 class="mb-1 font-semibold text-xl">{{ props.job.title }}</h1>
    <p>
      {{ description }}
      <span class="text-green-500 font-semibold" @click="toggleTruncated">{{
        state.isTruncated ? 'Read More' : 'Read Less'
      }}</span>
    </p>
    <p class="font-semibold text-lg my-2 text-green-600">{{ props.job.salary }}</p>
    <hr class="my-2" />
    <p class="text-red-500 text-lg font-semibold mb-2">{{ props.job.location }}</p>
    <Button btn-title="Read More" :btn-on-click="onBtnClick" />
  </div>
</template>
