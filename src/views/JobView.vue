<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import router from '@/router'
import axios from 'axios'
import { push } from 'notivue'
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const jobId = route.params.jobId

const state = reactive<{
  job: Job
  isLoading: boolean
}>({
  job: {} as Job,
  isLoading: false,
})

const handleDeleteJob = async () => {
  try {
    await axios.delete(`http://localhost:8000/jobs/${jobId}`)
    router.push('/jobs')
    push.success('Job deleted successfully!')
  } catch (error) {
    console.log('Error when deleting Job: ', error)
  }
}
const goToLink = () => {
  return router.push(`/job/update/${jobId}`)
}

onMounted(async () => {
  try {
    state.isLoading = true
    const res = await axios.get(`http://localhost:8000/jobs/${jobId}`)
    state.job = res.data
  } catch (error) {
    console.log('Error when fetching Job: ', error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-bgContainer py-20 px-10">
    <p v-if="state.isLoading">Loading...</p>
    <div v-else>
      <div v-if="state.job.title" class="grid grid-cols-6 gap-10">
        <div class="col-span-4">
          <div class="bg-white rounded-xl p-8">
            <p>{{ state.job.type }}</p>
            <h1 class="text-xl font-semibold my-1">{{ state.job.title }}</h1>
            <p class="mt-0.5 text-green-600 font-medium">{{ state.job.location }}</p>
          </div>
          <div class="bg-white rounded-xl p-8 mt-8">
            <p class="mb-1 text-xl text-green-700 font-semibold">Job Description</p>
            <p>{{ state.job.description }}</p>
            <p class="mt-4 mb-1 text-xl text-green-700 font-semibold">Salary</p>
            <p>{{ state.job.salary }}</p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="bg-white rounded-xl p-8">
            <h1 class="text-xl font-semibold mb-2">Company Info</h1>
            <h1 class="text-xl font-semibold text-green-600 mb-1">{{ state.job.company.name }}</h1>
            <p>{{ state.job.company.description }}</p>
            <hr class="my-3" />
            <h1 class="text-xl font-medium">Company Email:</h1>
            <h1 class="bg-green-200 font-semibold py-2 px-4 my-2">
              {{ state.job.company.contactEmail }}
            </h1>
            <h1 class="text-xl font-medium">Company Phone:</h1>
            <h1 class="bg-green-200 font-semibold py-2 px-4 my-2">
              {{ state.job.company.contactPhone }}
            </h1>
          </div>
          <div class="bg-white rounded-xl p-8 mt-8">
            <h1 class="text-xl font-semibold">Manage Job</h1>
            <Button class="my-3" rounded-full btn-title="Edit Job" :btn-on-click="goToLink" />
            <Button
              rounded-full
              btn-bg="bg-red-500"
              btn-title="Delete Job"
              :btn-on-click="handleDeleteJob"
            />
          </div>
        </div>
      </div>
      <p v-else>No Job found...</p>
    </div>
  </section>
</template>
