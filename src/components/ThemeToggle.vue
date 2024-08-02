<template>
  <div class="flex gap-2">
    <button
      v-for="{ name, icon } in themes"
      :key="name"
      @click="toggleTheme(name)"
      class="flex items-center gap-2 py-2 px-2 md:px-3 rounded-2xl transition-all duration-200 ease-in-out outline-none focus-visible:outline-foreground"
      :class="theme === name ? 'bg-cb ' : 'border border-cb md:hover:opacity-60'"
    >
      <i class="pi text-lg" :class="icon"></i>
      <span class="capitalize text-sm md:text-base">{{ name }}</span>
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
