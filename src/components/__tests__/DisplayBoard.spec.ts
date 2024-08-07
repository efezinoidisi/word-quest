import { describe, expect, it } from 'vitest'

import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import DisplayBoard from '../DisplayBoard.vue'
import WordDisplay from '../WordDisplay.vue'

describe('Word Board', () => {
  const wrapper = mount(DisplayBoard, {
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            game: {
              guesses: Array(6).fill('')
            }
          }
        })
      ]
    }
  })
  it('renders correctly', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('displays six rows for guesses', () => {
    const display = wrapper.findAllComponents(WordDisplay)
    expect(display).toHaveLength(6)
  })
})
