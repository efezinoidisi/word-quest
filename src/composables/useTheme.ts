import type { Theme } from '@/types/theme'
import { getThemePreference } from '@/utils/utils'
import { onMounted, readonly, ref } from 'vue'

const storageKey = 'word-quest-theme'

const defaultTheme = (localStorage.getItem(storageKey) as Theme) ?? getThemePreference()
const theme = ref<Theme>(defaultTheme)

export default function useTheme() {
  const toggleTheme = (newTheme: Theme) => {
    if (newTheme === theme.value) return

    // remove previous theme
    document.body.classList.remove(theme.value === 'system' ? getThemePreference() : theme.value)

    theme.value = newTheme
    // add new theme
    document.body.classList.add(theme.value === 'system' ? getThemePreference() : theme.value)

    localStorage.setItem(storageKey, theme.value)
  }

  onMounted(() => {
    document.body.classList.add(theme.value === 'system' ? getThemePreference() : theme.value)
  })

  return {
    theme: readonly(theme),
    toggleTheme
  }
}
