import { expect, test } from 'vitest'

import { getAverageGuesses, getBackgroundColor, getRandomWord } from '../utils'

test('returns correct background color', () => {
  expect(getBackgroundColor(null)).toBe('bg-inherit')

  expect(getBackgroundColor(0)).toBe('bg-green-600')

  expect(getBackgroundColor(1)).toBe('bg-yellow-500')

  expect(getBackgroundColor(-1)).toBe('bg-gray-500')

  expect(getBackgroundColor(10)).toBe('bg-gray-500')

  expect(getBackgroundColor(-10)).toBe('bg-gray-500')
})

test('returns a random word', () => {
  const wordList = ['shoe', 'place', 'near', 'palace']

  const isRandom = (word: string) => wordList.includes(word)
  expect(getRandomWord(wordList)).toSatisfy(isRandom)
})

test('returns correct average of guesses', () => {
  const guesses = { 1: 1, 2: 0, 3: 4, 5: 2, 6: 7 }
  const totalGames = 10

  expect(getAverageGuesses({ guesses, totalGames })).toBe('6.50')

  expect(getAverageGuesses({ guesses, totalGames: 0 })).toBe(0)
})
