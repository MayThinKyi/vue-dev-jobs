<script setup lang="ts">
import axios from 'axios'
import { onMounted, reactive } from 'vue'
import JobCard from '../molecules/JobCard.vue'

const state = reactive<{
  jobs: Job[]
  isLoading: boolean
}>({
  jobs: [],
  isLoading: false,
})

onMounted(async () => {
  try {
    state.isLoading = true
    const res = await axios.get('http://localhost:8000/jobs')
    const data = await res.data
    state.jobs = data
  } catch (error) {
    console.log('Error when fetching Jobs:', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="py-20 px-10 bg-bgContainer">
    <h1 class="mb-10 text-3xl text-center font-semibold text-green-600">Browse Jobs</h1>
    <p v-if="state.isLoading">Loading...</p>
    <div v-else>
      <div v-if="state.jobs.length > 0" class="grid grid-cols-3 gap-10">
        <JobCard v-for="item in state.jobs" :key="item.id" :job="item" />
      </div>
      <p v-else>No Jobs Data ...</p>
    </div>
  </section>
</template>
