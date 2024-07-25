import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useGameStore = defineStore('input', () => {
  const activeIndex = ref(0)
  const guesses = ref<Array<string>>(Array(6).fill(''))

  // length of word to be guessed;
  const wordLength = 5

  function handleChange(value: string) {
    if (guesses.value[activeIndex.value].length >= wordLength) return

    guesses.value[activeIndex.value] += value
  }

  function handleBackspace() {
    if (!guesses.value[activeIndex.value]) return

    // remove the last character
    guesses.value[activeIndex.value] = guesses.value[activeIndex.value].slice(0, -1)
  }

  function resetInput() {
    guesses.value[activeIndex.value] = ''
  }

  function submitGuess() {
    activeIndex.value += 1
    // validate guess
  }

  // submit button
  const isDisabled = computed(() => {
    return guesses.value[activeIndex.value].length < wordLength
  })

  return { handleChange, resetInput, handleBackspace, submitGuess, guesses, isDisabled }
})
