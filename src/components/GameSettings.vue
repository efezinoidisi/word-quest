<template>
  <button @click="showModal">Settings</button>
  <ModalWrapper ref="modal" :showConfirm="false" :showCancel="false">
    <button @click="closeModal">
      <i class="pi pi-times text-2xl absolute top-3 right-2"></i>
    </button>
    <h3 class="text-center text-3xl font-semibold flex items-center gap-4">
      <i class="pi pi-cog text-2xl"></i>

      <span>Settings</span>
    </h3>
    <div class="flex justify-between items-center">
      <div class="space-y-1">
        <h4 class="capitalize font-medium text-xl">hard mode</h4>
        <p class="text-sm">Any revealed hints must be used in subsequent guesses</p>
      </div>

      <ToggleButton id="hard-mode" v-model="isHardMode" label="toggle hard mode" />
    </div>
  </ModalWrapper>
</template>
<script setup lang="ts">
import useModal from '@/composables/useModal'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import ModalWrapper from './ModalWrapper.vue'
import ToggleButton from './ToggleButton.vue'

const store = useGameStore()

const { isHardMode } = storeToRefs(store)

const { modal, showModal, closeModal } = useModal()
</script>
