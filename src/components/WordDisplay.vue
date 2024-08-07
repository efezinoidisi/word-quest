<template>
  <div class="flex gap-2">
    <p
      v-for="(_, slotIndex) in slots"
      :key="`${word[slotIndex]}-${slotIndex}`"
      class="border border-primary py-2 px-4 rounded-md capitalize min-w-12 min-h-12 text-lg flex justify-center items-center md:min-w-14 md:min-h-14"
      :class="
        validationResults[index][slotIndex].letter
          ? getBackgroundColor(validationResults[index][slotIndex].status)
          : 'bg-kbd'
      "
    >
      <span>{{ word[slotIndex] }}</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { getBackgroundColor } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useGameStore()

const { validationResults, guessWord } = storeToRefs(store)

const { word, index } = defineProps<{
  word: string
  index: number
}>()

const slots = computed(() => {
  const size = guessWord.value.length
  const emptySlots = ' '.repeat(Math.max(0, size))

  return emptySlots
})
</script>
