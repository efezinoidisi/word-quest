<template>
  <header
    class="flex items-center gap-3 px-4 py-5 backdrop-blur sticky top-0 w-full shadow-md md:px-20 lg:px-section md:justify-between z-50"
  >
    <p class="text-2xl">
      <RouterLink to="/">WQ</RouterLink>
    </p>
    <nav
      class="items-center inset-x-0 gap-3 bg-background w-full h-fit transition-all duration-500 ease-in-out animate-slide-in absolute top-full md:static md:w-fit md:bg-transparent md:animate-none py-5 md:py-0"
      id="menu"
      :class="isMenuVisible ? 'flex flex-col md:flex-row' : 'hidden md:flex'"
    >
      <RouterLink
        to="/#how-to-play"
        class="text-nowrap hover:border-b hover:border-cb transition-all ease-linear"
        @click="handleNavButtonClick"
        >How to play</RouterLink
      >
      <GameStats :handleButtonClick="handleNavButtonClick" />
      <GameSettings :handleButtonClick="handleNavButtonClick" />
    </nav>
    <ThemeToggle class="ml-auto md:ml-0" />
    <button
      class="md:hidden"
      :aria-expanded="isMenuVisible"
      aria-controls="menu"
      @click="toggleMenu"
    >
      <i class="pi pi-bars text-2xl"></i>
    </button>
  </header>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import GameSettings from './GameSettings.vue'
import GameStats from './GameStats.vue'
import ThemeToggle from './ThemeToggle.vue'

const isMenuVisible = ref(false)

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value
}

function handleNavButtonClick() {
  if (!isMenuVisible.value) return
  toggleMenu()
}
</script>
