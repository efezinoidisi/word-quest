<template>
  <button
    type="button"
    :class="backgroundColor"
    @click="handleClick"
    class="bg-white py-2 px-4 capitalize text-black"
  >
    {{ keyLabel }}
  </button>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { getBackgroundColor } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const store = useGameStore()

const { validationResults } = storeToRefs(store)

const { keyLabel } = defineProps<{
  keyLabel: string
  isDisabled: boolean
}>()

const emit = defineEmits<{
  (event: 'keyPress', key: string): void
}>()

const handleClick = () => {
  emit('keyPress', keyLabel)
}

const backgroundColor = ref('')

watch(
  validationResults.value,
  () => {
    const key = validationResults.value.flat(2).find((item) => item.letter === keyLabel)

    backgroundColor.value = key ? getBackgroundColor(key.status) : ''
  },
  {
    immediate: true
  }
)
</script>
