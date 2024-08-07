<template>
  <button @click="showModal" class="hover:border-b hover:border-cb transition-colors ease-linear">
    Statistics
  </button>

  <ModalWrapper ref="modal" :showConfirm="false" :showCancel="false" :onClose="handleButtonClick">
    <button @click="closeModal" class="group">
      <i
        class="pi pi-times text-2xl absolute top-3 right-3 group-hover:text-cb transition-colors ease-linear"
      ></i>
    </button>
    <h2 class="text-2xl md:text-4xl mb-5 border-b-2 border-cb pb-2 flex items-center gap-4">
      <i class="pi pi-chart-bar text-2xl"></i>

      <span>Statistics</span>
    </h2>

    <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
      <p class="capitalize">words solved</p>
      <p>{{ statistics.gamesWon }}</p>
    </div>

    <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
      <p class="capitalize">percentage success</p>
      <p>{{ percentageSuccess ? `${percentageSuccess}%` : 'no data' }}</p>
    </div>

    <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
      <p class="capitalize">current streak</p>
      <p>{{ statistics.currentStreak }}</p>
    </div>

    <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
      <p class="capitalize">best streak</p>
      <p>{{ statistics.maxStreak }}</p>
    </div>

    <div class="flex justify-between items-center gap-3 text-xl mb-2 md:text-2xl">
      <p class="capitalize">average guesses</p>
      <p>{{ averageGuesses }}</p>
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import useModal from '@/composables/useModal'
import { useGameStore } from '@/stores/game'
import { getAverageGuesses } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import ModalWrapper from './ModalWrapper.vue'

const { handleButtonClick } = defineProps<{
  handleButtonClick: () => void
}>()

const { modal, showModal, closeModal } = useModal()
const store = useGameStore()

const { statistics } = storeToRefs(store)

const percentageSuccess = computed(() => {
  if (statistics.value.gamesPlayed === 0) return 0
  return Math.round((statistics.value.gamesWon / statistics.value.gamesPlayed) * 100)
})

const averageGuesses = computed(() => {
  const average = getAverageGuesses({
    guesses: statistics.value.guesses,
    totalGames: statistics.value.gamesPlayed
  })

  return average
})
</script>
