<template>
  <div class="flex gap-1 items-center bg-theme-btn rounded-2xl p-1">
    <button
      v-for="{ name, icon } in themes"
      :key="name"
      @click="toggleTheme(name)"
      class="flex py-2 px-2 md:px-3 rounded-2xl transition-all duration-200 ease-in-out outline-none"
      :class="theme === name ? 'bg-primary text-white' : ''"
    >
      <i class="pi" :class="icon"></i>
      <span class="sr-only">{{ name }}</span>
    </button>
  </div>
</template>
<script setup lang="ts">
import useTheme from '@/composables/useTheme'
import type { Theme } from '@/types/theme'

const themes: Array<{ name: Theme; icon: string }> = [
  {
    name: 'light',
    icon: 'pi-sun'
  },
  {
    name: 'system',
    icon: 'pi-desktop'
  },
  {
    name: 'dark',
    icon: 'pi-moon'
  }
]

const { toggleTheme, theme } = useTheme()
</script>
