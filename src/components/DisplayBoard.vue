<template>
  <div class="grid gap-2 place-items-center bg-background px-5 py-3 text-foreground rounded">
      <WordDisplay
        v-for="(word, index) in guesses"
        :key="`${word}-${index}`"
        :word="word"
        :index="index"
      />
    </div>
</template> <script setup lang='ts'>
import { useGameStore } from '@/stores/game';
import WordDisplay from './WordDisplay.vue';
import { storeToRefs } from 'pinia';

const store = useGameStore()

const {guesses} = storeToRefs(store)

</script> 