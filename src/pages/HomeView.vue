<template>
  <main class="w-11/12 mx-auto py-7">
    <section class="grid place-items-center mb-14">
      <h1 class="text-2xl">WordQuest</h1>
      <img
        :src="imgUrl"
        alt="word"
        class="w-full md:max-w-md rounded-xl block my-6 bg-[#f7f7f7]"
        width="200"
        height="200"
      />
      <h2 class="text-5xl mb-8 font-bold leading-snug text-center text-balance max-w-2xl">
        Get 6 chances to guess a 5-letter word
      </h2>

      <RouterLink
        to="/game"
        class="text-2xl capitalize text-center bg-primary text-white py-3 px-7 rounded-xl min-w-44 block"
        >start game</RouterLink
      >
    </section>

    <section class="space-y-10 max-w-md mx-auto pt-20" id="how-to-play">
      <h2 class="text-3xl capitalize font-semibold">how to play</h2>
      <p class="text-xl">Guess the Wordle in 6 tries</p>

      <ul class="list-disc list-inside space-y-4 text-xl">
        <li>
          Each guess must be a valid 5-letter word (currently limited to a fixed word list so not
          all five letter words in the english language).
        </li>
        <li>The color of the tiles will change to show how close your guess was to the word.</li>
      </ul>
    </section>

    <section class="mt-10 max-w-md mx-auto">
      <h3 class="text-2xl font-medium">Examples</h3>

      <div class="mt-10 space-y-5">
        <p class="uppercase space-x-3 mb-3 text-lg">
          <span class="border border-slate-400 rounded-md px-4 py-3">s</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">p</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">a</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">c</span>
          <span class="border border-slate-400 rounded-md px-4 py-3 bg-green-500">e</span>
        </p>
        <p class="text-lg">
          <strong class="uppercase text-2xl">e</strong> is in the word and in the correct spot.
        </p>
      </div>

      <div class="mt-14 space-y-5">
        <p class="uppercase space-x-3 mb-3 text-lg">
          <span class="border border-slate-400 rounded-md px-4 py-3 bg-yellow-500">h</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">o</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">u</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">s</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">e</span>
        </p>
        <p class="text-lg">
          <strong class="uppercase text-2xl">h</strong> is in the word but in the wrong spot.
        </p>
      </div>

      <div class="mt-14 space-y-5">
        <p class="uppercase space-x-3 mb-3 text-lg">
          <span class="border border-slate-400 rounded-md px-4 py-3">s</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">t</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">a</span>
          <span class="border border-slate-400 rounded-md px-4 py-3 bg-gray-500">r</span>
          <span class="border border-slate-400 rounded-md px-4 py-3">t</span>
        </p>
        <p class="text-lg">
          <strong class="uppercase text-2xl">r</strong> is not in the word in any spot.
        </p>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import imgUrl from '@/assets/rubik.webp'
import { RouterLink } from 'vue-router'
</script>
