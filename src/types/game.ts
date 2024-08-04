export type Game = {
  currentStreak: number
  maxStreak: number
  gamesPlayed: number
  gamesWon: number
  guesses: { [key: number]: number }
  hasPlayed: boolean
  isHardMode: boolean
}
