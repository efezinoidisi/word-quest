<template>
  <div class="grid gap-2 place-items-center w-fit mx-auto my-7 py-4 px-1 md:px-4 rounded-md bg-kbd">
    <div
      v-for="(row, index) in keys"
      :key="`row-${index}`"
      class="flex gap-1 md:gap-2 w-full justify-center"
    >
      <KeyboardKey
        v-for="key in row"
        :key="key.label"
        :keyLabel="key.label"
        @keyPress="handleKeypress"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useGameStore } from '@/stores/game'
import KeyboardKey from './KeyboardKey.vue'
import { keyboardList } from '@/constants';

const { handleSubmit } = defineProps<{
  handleSubmit: () => void
}>()

const keys = ref(keyboardList)

const store = useGameStore()

const { isGameEnd } = storeToRefs(store)

const { handleChange, handleBackspace } = store

const validKeys = keys.value.flatMap((row) => row.map((key) => key.label))
validKeys.push('backspace')
const handleKeypress = (key: string) => {
  if (isGameEnd.value) return
  if (key === 'backspace' || key === 'del') {
    handleBackspace()
    return
  }

  if (key === 'enter') {
    handleSubmit()
    return
  }

  handleChange(key)
}

function keydownListener(event: KeyboardEvent) {
  event.preventDefault()
  const key = event.key.toLowerCase()

  if (!validKeys.includes(key)) return
  handleKeypress(key)
}

onMounted(() => {
  window.addEventListener('keydown', keydownListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', keydownListener)
})
</script>
