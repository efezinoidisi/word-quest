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
      new Array(5).fill({
        status: null,
        letter: null
      })
    )
}
