import type { Game } from '@/types/game'
import { getRandomWord, initValidation } from '@/utils/utils'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { toast } from 'vue3-toastify'

const initialGuess = Array(6).fill('')

const position: { [key: number]: string } = {
  0: 'first',
  1: 'second',
  2: 'third',
  3: 'fourth',
  4: 'fifth'
}

const initialStatistics = {
  currentStreak: 0,
  maxStreak: 0,
  gamesPlayed: 0,
  gamesWon: 0,
  guesses: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 },
  hasPlayed: false
}

const storageKey = 'word-quest-game'

const localData = localStorage.getItem(storageKey)

const defaultGameSettings: Game = localData ? JSON.parse(localData) : initialStatistics

export const useGameStore = defineStore('game', () => {
  const activeIndex = ref(0)

  const guesses = ref<Array<string>>([...initialGuess])

  const validationResults = ref([...initValidation()])

  const wordList = ref<Array<string>>([])

  const guessWord = ref('')

  const isGameEnd = ref(false)

  const statistics = ref(defaultGameSettings)

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

  function updateStatistics(isWinner: boolean) {
    if (isWinner) {
      statistics.value.currentStreak += 1
      statistics.value.gamesWon += 1
    }

    if (!statistics.value.hasPlayed) {
      statistics.value.hasPlayed = true
    }

    if (!isWinner) {
      statistics.value.currentStreak = 0
    }

    statistics.value.maxStreak = Math.max(
      statistics.value.currentStreak,
      statistics.value.maxStreak
    )
    statistics.value.gamesPlayed += 1
    const size = guesses.value.filter((guess) => guess).length
    statistics.value.guesses[size] += 1
  }

  function submitGuess(): { gameEnd: boolean; isWinner: boolean } {
    const guess = guesses.value[activeIndex.value]

    const currentList = wordList.value.filter((word) => word.length === guessWord.value.length)

    if (!currentList.includes(guess)) {
      toast.info(`not in word list`)

      return {
        gameEnd: false,
        isWinner: false
      }
    }

    if (isHardMode.value && activeIndex.value !== 0) {
      const result = validationResults.value[activeIndex.value - 1]

      for (let i = 0; i < wordLength.value; i++) {
        if (result[i].status === 0 && guess[i] !== result[i].letter) {
          toast.info(`The ${position[i]} letter must be ${result[i].letter.toUpperCase()}`)

          return {
            gameEnd: false,
            isWinner: false
          }
        }
        if (result[i].status === 1 && !guess.includes(result[i].letter)) {
          toast.info(`word must include ${result[i].letter.toUpperCase()}`)

          return {
            gameEnd: false,
            isWinner: false
          }
        }
      }
    }
    // validate guess
    const isValid = validateGuess()
    if (isValid) {
      isGameEnd.value = true
      updateStatistics(true)

      return {
        gameEnd: true,
        isWinner: true
      }
    }
    if (!isValid && activeIndex.value === 5) {
      isGameEnd.value = true
      updateStatistics(false)

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
    isHardMode,
    statistics
  }
})
