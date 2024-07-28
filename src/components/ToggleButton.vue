<template>
  <label className="inline-flex items-center cursor-pointer">
    <input type="checkbox" :id="id" :name="id" className="sr-only peer" v-model="model" />
    <span
      className="block relative w-11 h-6 bg-gray-800 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500/30 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"
    ></span>
  </label>
</template>
<script setup lang="ts">
const model = defineModel()
const { id } = defineProps<{
  id: string
}>()
</script>
