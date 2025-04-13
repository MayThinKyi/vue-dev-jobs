<script setup lang="ts">
import { ref } from 'vue'
import Feature from '../molecules/Feature.vue'

const features = ref([
  {
    id: 1,
    title: 'For Developers',
    text: 'Browse our Vue jobs and start your career today',
    bgColor: '#F3F4F6',
    btnText: 'Browse Jobs',
    btnBgColor: '#000',
    link: '/jobs',
  },
  {
    id: 2,
    title: 'For Employers',
    text: 'List your job to find the perfect developer for the role',
    bgColor: '#DCFCE7',
    btnText: 'Add Job',
    btnBgColor: '#22C55E',
    link: '/job/add',
  },
])
</script>

<template>
  <section class="py-20 px-10 grid grid-cols-2 gap-10">
    <Feature v-for="item in features" :key="item.id" :item="item" />
  </section>
</template>
