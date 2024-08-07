import { describe, expect, it, vi } from 'vitest'

import { keyboardList } from '@/constants'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import KeyBoard from '../KeyBoard.vue'

const handleSubmit = vi.fn()

describe('Keyboard Component', () => {
  const wrapper = mount(KeyBoard, {
    props: { handleSubmit },
    global: {
      plugins: [createTestingPinia()]
    }
  })
  it('renders correctly', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  const allKeys = keyboardList
    .flat()
    .map((key) => key.label)
    .join('')

  it('shows all keys', () => {
    expect(wrapper.text()).toEqual(allKeys)
  })
})
