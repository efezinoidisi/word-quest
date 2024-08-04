<template>
  <main class="h-svh grid place-items-center bg-art bg-cover">
    <section
      class="max-w-md mx-auto bg-[#eecc33] text-[#2c3a64] px-5 md:px-10 md:min-w-96 py-7 rounded-2xl min-w-64"
    >
      <h1 class="text-2xl md:text-4xl lg:text-5xl mb-5">Statistics</h1>

      <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
        <p class="capitalize">words solved</p>
        <p>{{ statistics.gamesPlayed }}</p>
      </div>

      <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
        <p class="capitalize">percentage success</p>
        <p>{{ percentageSuccess }}%</p>
      </div>

      <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
        <p class="capitalize">current streak</p>
        <p>{{ statistics.currentStreak }}</p>
      </div>

      <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
        <p class="capitalize">best streak</p>
        <p>{{ statistics.maxStreak }}</p>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useGameStore()

const { statistics } = storeToRefs(store)

const percentageSuccess = computed(() =>
  Math.round((statistics.value.gamesWon / statistics.value.gamesPlayed) * 100)
)
</script>
