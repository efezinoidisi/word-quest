<template>
  <main>
    <div class="grid gap-2 place-items-center">
      <WordDisplay
        v-for="(word, index) in guesses"
        :key="`${word}-${index}`"
        :word="word"
        :size="5"
        :index="index"
      />
    </div>
    <KeyBoard :handleSubmit="handleSubmit" />

    <Modal :showCancel="false" :onConfirm="resetGame" confirmText="new game" ref="modal">
      <div v-html="modalHtml" class="p-3"></div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import KeyBoard from '@/components/KeyBoard.vue'
import Modal from '@/components/ModalWrapper.vue'
import WordDisplay from '@/components/WordDisplay.vue'
import { useGameStore } from '@/stores/game'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const store = useGameStore()

const modal = ref<InstanceType<typeof Modal>>()

const { submitGuess, resetGame } = store
const { guesses, isDisabled, guessWord } = storeToRefs(store)
const modalHtml = ref('<p>test</p>')

const showModal = () => modal.value?.showModal()

function handleSubmit() {
  // only submit when up to five characters
  if (isDisabled.value) return

  const { isWinner, gameEnd } = submitGuess()

  if (isWinner) {
    modalHtml.value = '<h3 class="text-3xl">Congratulations!</h3>'
    showModal()
  }

  if (!isWinner && gameEnd) {
    modalHtml.value = `
    <h3 class="text-3xl mb-3">Level Failed</h3>
    <p>The correct word is <strong class="text-purple-500 text-xl">${guessWord.value}</strong></p>
    `
    showModal()
  }
}
</script>
<style scoped></style>
