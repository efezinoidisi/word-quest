<template>
  <main class="min-h-svh py-5 bg-galaxy relative flex flex-col justify-center items-center">
    <div class="grid gap-2 place-items-center bg-background px-5 py-3 text-foreground rounded">
      <WordDisplay
        v-for="(word, index) in guesses"
        :key="`${word}-${index}`"
        :word="word"
        :size="5"
        :index="index"
      />
    </div>
    <KeyBoard :handleSubmit="handleSubmit" />

    <button
      @click="resetGame"
      class="absolute top-3 md:top-10 right-5 md:right-20 bg-heading px-2 py-1 rounded-md text-black"
    >
      reset game
    </button>

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
import KeyBoard from '@/components/KeyBoard.vue'
import Modal from '@/components/ModalWrapper.vue'
import WordDisplay from '@/components/WordDisplay.vue'
import useModal from '@/composables/useModal'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'

const store = useGameStore()

const { modal, showModal } = useModal()

const { submitGuess, resetGame } = store
const { guesses, isDisabled, guessWord, statistics } = storeToRefs(store)
const modalHtml = ref('<p>test</p>')

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

watch(statistics.value, () => {
  localStorage.setItem('word-quest-game', JSON.stringify(statistics.value))
})
</script>
<style scoped></style>
