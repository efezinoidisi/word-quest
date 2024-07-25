<template>
  <div class="flex gap-2">
    <p
      v-for="letter in displayedInput"
      :key="letter"
      class="border border-slate-400 py-2 px-4 rounded-md capitalize min-w-12 min-h-12"
    >
      {{ letter }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { word,size } = defineProps<{
  word: string;
  size:number;
}>()
const displayedInput = computed(() => {
    const emptySlots = ' '.repeat(Math.max(0, size - word.length))

    return (word + emptySlots).slice(0, size).split('')
  })
</script>
