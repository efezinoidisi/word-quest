export function getBackgroundColor(status: number | null) {
  if (status === null) return 'bg-inherit'
  if (status === 0) {
    return 'bg-green-600'
  }
  if (status === 1) {
    return 'bg-yellow-500'
  }

  return 'bg-gray-500'
}

export function getRandomWord(words: Array<string>): string {
  const randomIndex = Math.floor(Math.random() * words.length)

  return words[randomIndex]
}

export function initValidation() {
  return Array(6)
    .fill(0)
    .map(() =>
      new Array(6).fill({
        status: null,
        letter: null
      })
    )
}

export function getAverageGuesses({
  guesses,
  totalGames
}: {
  guesses: { [key: number]: number }
  totalGames: number
}) {
  if (totalGames === 0) return 0

  const totalGuesses = Object.entries(guesses).reduce((sum, [key, value]) => sum + +key * value, 0)

  return (totalGuesses / totalGames).toFixed(2)
}
