import { getRandomWord, initValidation } from '@/utils/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const initialGuess = Array(6).fill('')

export const useGameStore = defineStore('input', () => {
  const activeIndex = ref(0)

  const guesses = ref<Array<string>>([...initialGuess])

  const validationResults = ref([...initValidation()])

  const wordList = ref<Array<string>>([])

  const guessWord = ref('')

  const isGameEnd = ref(false)

  const isHardMode = ref(false)

  // length of word to be guessed;
  const wordLength = computed(() => guessWord.value.length)

  function handleChange(value: string) {
    if (guesses.value[activeIndex.value].length >= wordLength.value) return

    guesses.value[activeIndex.value] += value
  }

  function handleBackspace() {
    if (!guesses.value[activeIndex.value]) return

    // remove the last character
    guesses.value[activeIndex.value] = guesses.value[activeIndex.value].slice(0, -1)
  }

  function validateGuess() {
    const guess = guesses.value[activeIndex.value]

    guess.split('').forEach((letter, index) => {
      const result = {
        letter,
        status: 0
      }
      if (letter === guessWord.value[index]) {
        validationResults.value[activeIndex.value][index] = result
      } else if (guessWord.value.split('').includes(letter)) {
        result.status = 1
        validationResults.value[activeIndex.value][index] = result
      } else {
        result.status = -1

        validationResults.value[activeIndex.value][index] = result
      }
    })

    if (guess === guessWord.value) return true

    return false
  }

  function submitGuess(): { gameEnd: boolean; isWinner: boolean } {
    // validate guess
    const isValid = validateGuess()
    if (isValid) {
      isGameEnd.value = true
      return {
        gameEnd: true,
        isWinner: true
      }
    }
    if (!isValid && activeIndex.value === 5) {
      isGameEnd.value = true
      return {
        gameEnd: true,
        isWinner: false
      }
    }
    activeIndex.value += 1
    return {
      gameEnd: false,
      isWinner: false
    }
  }

  // submit button
  const isDisabled = computed(() => {
    return guesses.value[activeIndex.value].length < wordLength.value
  })

  function getWords() {
    fetch('/words.txt')
      .then((res) => res.text())
      .then((data) => {
        const words = data.split('\n')
        wordList.value = words

        const word = getRandomWord(words)

        guessWord.value = word
      })
  }

  function resetGame() {
    guesses.value = [...initialGuess]

    validationResults.value = [...initValidation()]

    guessWord.value = getRandomWord(wordList.value)

    activeIndex.value = 0
    isGameEnd.value = false
  }

  getWords()

  return {
    handleChange,
    resetGame,
    handleBackspace,
    submitGuess,
    guesses,
    isDisabled,
    validationResults,
    guessWord,
    isGameEnd,
    isHardMode
  }
})
