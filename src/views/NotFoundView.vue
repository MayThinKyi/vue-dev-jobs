<script setup lang="ts">
import Button from '@/components/atoms/Button.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => router.push('/')
</script>

<template>
  <section class="w-1/4 mx-auto h-[80vh] flex flex-col items-center justify-center">
    <h1 class="text-2xl mb-8 font-semibold">404 Not Found</h1>
    <Button btn-title="Go Home" :btn-on-click="goHome" />
  </section>
</template>
