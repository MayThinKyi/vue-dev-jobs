<script setup lang="ts">
import logo from '@/assets/logo.png'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const menus = ref([
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Jobs', link: '/jobs' },
  { id: 3, name: 'Add Jobs', link: '/job/add' },
])
const route = useRoute()
const isActiveLink = (link: string) => {
  return link === route.path
}
</script>

<template>
  <div
    class="border-b border-green-500 bg-active py-2 px-10 flex items-center justify-between text-white"
  >
    <RouterLink to="/">
      <img :src="logo" class="w-[60px] h-[60px]" />
    </RouterLink>
    <div class="flex items-center gap-2">
      <RouterLink
        :class="[
          'py-2',
          'px-4',
          'hover:bg-activeHover',
          'rounded-lg',
          isActiveLink(item.link) ? 'bg-activeHover' : '',
        ]"
        :to="item.link"
        v-for="item in menus"
        :key="item.id"
      >
        {{ item.name }}
      </RouterLink>
    </div>
  </div>
</template>
