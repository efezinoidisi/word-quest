<template>
  <main class="flex flex-col justify-center items-center gap-3 min-h-svh">
    <h1 class="text-9xl font-bold">404</h1>
    <p class="text-2xl">This page does not exist</p>

    <button @click="goBack" class="bg-cb text-white px-5 py-2 rounded-md text-xl">Go back</button>
  </main>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()

const goBack = () => router.back()
</script>
