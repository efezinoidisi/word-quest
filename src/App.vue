<template>
  <header>
    <h1 class="">wordle game clone</h1>
  </header>

  <main>
    <div>
      <WordDisplay v-for="word in guesses" :key="word" :word="word" :size="5" />
    </div>

    <button
      class="bg-purple-700 text-white px-4 py-2 capitalize rounded my-4 disabled:bg-slate-100 disabled:text-black"
      :disabled="isDisabled"
      @click="submitGuess"
    >
      submit
    </button>
    <KeyBoard />
  </main>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import KeyBoard from './components/KeyBoard.vue'
import WordDisplay from './components/WordDisplay.vue'
import { useGameStore } from './stores/game'

const store = useGameStore()

const { submitGuess } = store
const { guesses, isDisabled } = storeToRefs(store)

// const keyboardClass = 'keyboard'

// const handleChange = (data: string | Event) => {
//   if (data instanceof Event) {
//     const { value } = data.target as HTMLInputElement
//     input.value = value

//     return
//   }

//   input.value = data
// }

// const handleKeypress = (key: string) => {
//   if (key === 'Backspace') {
//input.value.slice(0,-1)
//   } else {
//     // input.value += key
//   }
// }
</script>
<style scoped></style>
