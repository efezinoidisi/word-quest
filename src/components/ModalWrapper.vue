<template>
  <dialog ref="modal" class="modal" :class="classes" @click="handleDialogClick">
    <div class="px-5 w-full h-full space-y-5 pb-5">
      <slot />

      <footer class="w-full flex justify-end p-3" v-if="showCancel || showConfirm">
        <button
          type="button"
          v-if="showCancel"
          @click="closeModal"
          class="capitalize border border-purple-500 px-5 py-2 rounded-md text-purple-500"
        >
          {{ cancelText }}
        </button>

        <button
          type="button"
          v-if="showConfirm"
          @click.prevent="confirm"
          class="capitalize bg-purple-500 px-5 py-2 rounded-md text-white"
        >
          {{ confirmText }}
        </button>
      </footer>
    </div>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const modal = ref<HTMLDialogElement>()

const { confirmText, cancelText, showConfirm, showCancel, classes, allowClickOutside } =
  withDefaults(
    defineProps<{
      confirmText?: string
      cancelText?: string
      showConfirm?: boolean
      showCancel?: boolean
      classes?: string
      allowClickOutside?: boolean
    }>(),
    {
      cancelText: 'Cancel',
      confirmText: 'Confirm',
      showCancel: true,
      showConfirm: true,
      allowClickOutside :true
    }
  )

const emit = defineEmits(['confirm', 'cancel'])

const showModal = () => {
  modal.value?.showModal()
}

function close() {
  modal.value?.close()
}

const closeModal = () => {
  close()
  emit('cancel')
}

const confirm = () => {
  close()
  emit('confirm')
}

defineExpose({
  showModal,
  closeModal: (retVal?: string): void => modal.value?.close(retVal)
})

// close modal on click outside
function handleDialogClick(event: MouseEvent) {
  const target = event.target as HTMLDialogElement

  if (!allowClickOutside) return

  if (target && target.classList.contains('modal')) {
    closeModal()
  }
}
</script>
