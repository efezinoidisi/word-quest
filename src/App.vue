<template>
  <div class="bg-background text-foreground min-h-svh">
    <NavBar />
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { keyboardList } from './constants'
import { useGameStore } from './stores/game'

const store = useGameStore()

onMounted(async () => {
  await store.getWords()
})
</script>
