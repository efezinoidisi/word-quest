<template>
  <button
    type="button"
    :class="backgroundColor"
    @click="handleClick"
    class="py-1 px-1 min-w-6 sm:min-w-7 md:min-w-10 sm:px-2 text-lg md:px-4 md:py-2 capitalize text-black rounded"
  >
    {{ keyLabel }}
  </button>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { getBackgroundColor } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useGameStore()

const { validationResults } = storeToRefs(store)

const { keyLabel } = defineProps<{
  keyLabel: string
}>()

const emit = defineEmits<{
  (event: 'keyPress', key: string): void
}>()

const handleClick = () => {
  emit('keyPress', keyLabel)
}

const backgroundColor = computed(() => {
  let color = 'bg-white'
  let status: number

  validationResults.value.flat(2).forEach((result) => {
    if (result.letter !== keyLabel) return
    // is correct
    if (status === 0) return
    status = result.status
    color = getBackgroundColor(status)
  })

  return color
})
</script>
