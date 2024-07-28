import type { Theme } from '@/types/theme'
import { readonly, ref, watch } from 'vue'

const storageKey = 'word-quest-theme'

const defaultTheme = (localStorage.getItem(storageKey) as Theme) ?? 'system'
const theme = ref<Theme>(defaultTheme)

export default function useTheme() {
  const toggleTheme = (newTheme: Theme) => {
    if (newTheme === theme.value) return
    theme.value = newTheme
  }

  watch(theme, () => {
    localStorage.setItem(storageKey, theme.value)
  })
  return {
    theme: readonly(theme),
    toggleTheme
  }
}
