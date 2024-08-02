<template>
  <header class="flex justify-between px-4 py-5 backdrop-blur sticky top-0 w-full shadow-sm">
    <p class="text-2xl">
      <RouterLink to="/">WQ</RouterLink>
    </p>
    <nav class="flex items-center gap-3">
      <button class="capitalize" @click="resetGame">new game</button>
      <button @click="showModal"><i class="pi pi-cog text-2xl"></i></button>
    </nav>
  </header>

  <ModalWrapper ref="modal" :showConfirm="false" :showCancel="false">
    <button @click="closeModal">
      <i class="pi pi-times text-2xl absolute top-3 right-2"></i>
    </button>
    <h3 class="text-center text-3xl font-semibold">Settings</h3>
    <div class="flex justify-between items-center">
      <div class="space-y-1">
        <h4 class="capitalize font-medium text-xl">hard mode</h4>
        <p class="text-sm">Any revealed hints must be used in subsequent guesses</p>
      </div>
      <ToggleButton id="hard-mode" v-model="isHardMode" label="toggle hard mode" />
    </div>

    <div class="space-y-2">
      <h4 class="capitalize font-medium text-xl">Theme</h4>
      <ThemeToggle />
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ModalWrapper from './ModalWrapper.vue'
import ThemeToggle from './ThemeToggle.vue'
import ToggleButton from './ToggleButton.vue'

const modal = ref<InstanceType<typeof ModalWrapper>>()

const showModal = () => modal.value?.showModal()

const closeModal = () => modal.value?.closeModal()

const store = useGameStore()

const { resetGame } = store
const { isHardMode } = storeToRefs(store)
</script>
