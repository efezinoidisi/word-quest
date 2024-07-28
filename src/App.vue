<template>
  <div :class="theme" class="bg-background text-foreground min-h-svh">
    <NavBar />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { RouterView } from 'vue-router'
import useTheme from './composables/useTheme'

const { theme } = useTheme()
</script>
