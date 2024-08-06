import type ModalWrapper from '@/components/ModalWrapper.vue'
import { ref } from 'vue'

export default function useModal() {
  const modal = ref<InstanceType<typeof ModalWrapper>>()

  const showModal = () => modal.value?.showModal()

  const closeModal = () => modal.value?.closeModal()

  return {
    modal,
    showModal,
    closeModal
  }
}
