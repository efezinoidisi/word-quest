<template>
  <div class="flex gap-2">
    <p
      v-for="(letter, letterIndex) in displayedWord"
      :key="letter"
      class="border border-slate-400 py-2 px-4 rounded-md capitalize min-w-12 min-h-12 text-xl flex justify-center items-center"
      :class="
        validationResults[index][letterIndex].letter
          ? getBackgroundColor(validationResults[index][letterIndex].status)
          : 'bg-transparent'
      "
    >
      {{ letter }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { getBackgroundColor } from '@/utils/utils'
import { storeToRefs } from 'pinia'

const store = useGameStore()

const { validationResults } = storeToRefs(store)

const { word, size, index } = defineProps<{
  word: string
  size: number
  index: number
}>()

const emptySlots = ' '.repeat(Math.max(0, size - word.length))

const displayedWord = (word + emptySlots).slice(0, size).split('')
</script>
