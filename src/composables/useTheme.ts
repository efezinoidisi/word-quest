import type { Theme } from '@/types/theme'
import { onMounted, readonly, ref } from 'vue'

const storageKey = 'word-quest-theme'

const defaultTheme = (localStorage.getItem(storageKey) as Theme) ?? 'system'
const theme = ref<Theme>(defaultTheme)

export default function useTheme() {
  const toggleTheme = (newTheme: Theme) => {
    if (newTheme === theme.value) return
    document.body.classList.remove(theme.value)
    theme.value = newTheme
    document.body.classList.add(theme.value)
    localStorage.setItem(storageKey, theme.value)
  }

  onMounted(() => {
    document.body.classList.add(theme.value)
  })

  return {
    theme: readonly(theme),
    toggleTheme
  }
}
