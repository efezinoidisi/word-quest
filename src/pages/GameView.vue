<template>
  <main
    class="py-5 relative flex flex-col justify-center items-center min-h-lvh bg-center bg-cover"
    :class="bgImage"
  >
    <div class="w-fit grid place-items-center gap-y-2 mx-auto">
      <DisplayBoard />
      <button
        @click="resetGame"
        class="bg-foreground px-2 py-1 rounded-md text-background block ml-auto"
      >
        Reset game
      </button>
      <KeyBoard :handleSubmit="handleSubmit" />
    </div>

    <!-- game end modal -->
    <Modal
      :showCancel="false"
      :onConfirm="resetGame"
      confirmText="play again?"
      ref="modal"
      :allowClickOutside="false"
    >
      <div v-html="modalHtml" class="p-3"></div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import DisplayBoard from '@/components/DisplayBoard.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import Modal from '@/components/ModalWrapper.vue'
import useModal from '@/composables/useModal'
import useTheme from '@/composables/useTheme'
import { useGameStore } from '@/stores/game'
import { getThemePreference } from '@/utils/utils'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

const store = useGameStore()

const { modal, showModal } = useModal()

const { theme } = useTheme()

const bgImage = computed(() => {
  const value = theme.value === 'system' ? getThemePreference() : theme.value

  return value === 'light' ? 'bg-light' : 'bg-galaxy'
})

const { submitGuess, resetGame } = store
const { isDisabled, guessWord } = storeToRefs(store)
const modalHtml = ref('')

function handleSubmit() {
  // only submit when up to five characters
  if (isDisabled.value) return

  const { isWinner, gameEnd } = submitGuess()

  if (isWinner) {
    modalHtml.value = '<h3 class="text-3xl">Yeah, You did it!</h3>'
    showModal()
  }

  if (!isWinner && gameEnd) {
    modalHtml.value = `
    <h3 class="text-3xl mb-3">Game Over</h3>
    <p>The correct word is <strong class="text-primary capitalize text-xl"> ${guessWord.value}</strong></p>
    `
    showModal()
  }
}
</script>
<style scoped></style>
