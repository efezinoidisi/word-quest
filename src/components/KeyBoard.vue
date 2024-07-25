<template>
  <div class="grid gap-3 border place-items-center w-fit mx-auto my-7 p-2">
    <div v-for="(row, index) in keys" :key="`row-${index}`" class="flex gap-3">
      <KeyboardKey
        v-for="key in row"
        :key="key.label"
        :keyLabel="key.label"
        :isDisabled="key.isDisabled"
        @keyPress="handleKeypress"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useGameStore } from '../stores/game'
import KeyboardKey from './KeyboardKey.vue'

const keys = ref([
  [
    {
      label: 'q',
      isDisabled: false
    },
    {
      label: 'w',
      isDisabled: false
    },
    {
      label: 'e',
      isDisabled: false
    },
    {
      label: 'r',
      isDisabled: false
    },
    {
      label: 't',
      isDisabled: false
    },

    {
      label: 'y',
      isDisabled: false
    },

    {
      label: 'u',
      isDisabled: false
    },
    {
      label: 'i',
      isDisabled: false
    },
    {
      label: 'o',
      isDisabled: false
    },

    {
      label: 'p',
      isDisabled: false
    }
  ],

  [
    {
      label: 'a',
      isDisabled: false
    },
    {
      label: 's',
      isDisabled: false
    },
    {
      label: 'd',
      isDisabled: false
    },
    {
      label: 'f',
      isDisabled: false
    },
    {
      label: 'g',
      isDisabled: false
    },
    {
      label: 'h',
      isDisabled: false
    },
    {
      label: 'j',
      isDisabled: false
    },
    {
      label: 'k',
      isDisabled: false
    },
    {
      label: 'l',
      isDisabled: false
    },
    {
      label: 'Enter',
      isDisabled: true
    }
  ],
  [
    {
      label: 'z',
      isDisabled: false
    },
    {
      label: 'x',
      isDisabled: false
    },
    {
      label: 'c',
      isDisabled: false
    },
    {
      label: 'v',
      isDisabled: false
    },
    {
      label: 'b',
      isDisabled: false
    },
    {
      label: 'n',
      isDisabled: false
    },
    {
      label: 'm',
      isDisabled: false
    },
    {
      label: 'Backspace',
      isDisabled: false
    }
  ]
])

const store = useGameStore()

const { handleChange, handleBackspace } = store

const validKeys = keys.value.flatMap((row) => row.map((key) => key.label))

const handleKeypress = (key: string) => {
  if (key === 'Backspace') {
    handleBackspace()
    return
  }

  if (key === 'Enter') {
    // handle submit
    return
  }
  handleChange(key)
}

function keydownListener(event: KeyboardEvent) {
  const key = event.key

  if (!validKeys.includes(key)) return
  handleKeypress(key)
}

onMounted(() => {
  window.addEventListener('keydown', keydownListener)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', keydownListener)
})
</script>
