import { describe, expect, it } from 'vitest'

import { initValidation } from '@/utils/utils'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import KeyboardKey from '../KeyboardKey.vue'

describe('Keyboard Key', () => {
  const wrapper = mount(KeyboardKey, {
    props: { keyLabel: 'h' },
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            game: {
              validationResults: initValidation(),
              wordList: ['slow', 'solve', 'mind', 'house', 'midget']
            }
          }
        })
      ]
    }
  })
  it('displays the correct key', () => {
    expect(wrapper.text()).toEqual('h')
  })
})
