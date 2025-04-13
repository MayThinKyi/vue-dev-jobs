<script setup lang="ts">
import { Notification, Notivue } from 'notivue'
import Navbar from './components/organisms/Navbar.vue'
</script>

<template>
  <section>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <Navbar />
    <RouterView />
  </section>
</template>
