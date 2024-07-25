<template>
  <button
    type="button"
    :class="isDisabled ? 'bg-slate-500 pointer-events-none' : ''"
    @click="handleClick"
    class="bg-white py-2 px-4 capitalize text-black"
  >
    {{ keyLabel }}
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { keyLabel, isDisabled } = defineProps<{
  keyLabel: string
  isDisabled: boolean
}>()

const keyClass = computed(() => ({
  disabled: isDisabled,
  regular: !isDisabled
}))

const emit = defineEmits<{
  (event: 'keyPress', key: string): void
}>()

const handleClick = () => {
  emit('keyPress', keyLabel)
}
</script>
