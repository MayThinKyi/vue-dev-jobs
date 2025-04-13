<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import router from '@/router'
import axios from 'axios'
import { push } from 'notivue'
import { reactive, ref } from 'vue'

const form = reactive({
  title: '',
  type: 'Full-Time',
  description: '',
  location: '',
  salary: '$30K-$60K',
  company: {
    name: '',
    description: '',
    contactEmail: '',
    contactPhone: '',
  },
})
const isSubmitting = ref(false)

const onFormSubmit = async () => {
  try {
    isSubmitting.value = true
    const res = await axios.post('http://localhost:8000/jobs/', form)
    await router.push(`/jobs/${res.data.id}`)
    push.success('Job created successfully!')
  } catch (error) {
    console.log('Error when creating Job: ', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="bg-bgContainer py-20 px-10">
    <form @submit.prevent="onFormSubmit" class="bg-white p-8 rounded-3xl w-1/2 mx-auto">
      <h1 class="text-2xl font-semibold text-center">Add Job</h1>
      <div class="mb-4">
        <p class="font-medium mb-1">Job Type</p>
        <select v-model="form.type" class="px-4 py-2 border rounded-lg outline-none w-full">
          <option value="Part-Time">Part-Time</option>
          <option value="Full-Time">Full-Time</option>
        </select>
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Job Title</p>
        <input v-model="form.title" class="px-4 py-2 border rounded-lg outline-none w-full" />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Job Description</p>
        <textarea
          v-model="form.description"
          rows="3"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Salary</p>
        <select v-model="form.salary" class="px-4 py-2 border rounded-lg outline-none w-full">
          <option value="$10K-$30K">$10K-$30K</option>
          <option value="$30K-$60K">$30K-$60K</option>
          <option value="$60K-$90K">$60K-$90K</option>
          <option value="$90K-$120K">$90K-$120K</option>
          <option value="$120K-$150K">$120K-$150K</option>
        </select>
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Company Location</p>
        <textarea
          v-model="form.location"
          rows="3"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Company Name</p>
        <input
          v-model="form.company.name"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Company Description</p>
        <textarea
          v-model="form.company.description"
          rows="3"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Company Email</p>
        <input
          v-model="form.company.contactEmail"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <div class="mb-4">
        <p class="font-medium mb-1">Company Phone</p>
        <input
          v-model="form.company.contactPhone"
          class="px-4 py-2 border rounded-lg outline-none w-full"
        />
      </div>
      <Button
        :disabled="isSubmitting"
        :btn-title="isSubmitting ? 'Submitting' : 'Submit'"
        :btn-on-click="() => {}"
      />
    </form>
  </section>
</template>
