import { describe, expect, it } from 'vitest'

import { initValidation } from '@/utils/utils'
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import WordDisplay from '../WordDisplay.vue'

const validationResults = initValidation()
const guessWord = 'house'

describe('Word Board', () => {
  const wrapper = mount(WordDisplay, {
    props: {
      word: 'house',
      index: 2
    },
    global: {
      plugins: [
        createTestingPinia({
          initialState: {
            game: {
              validationResults,
              guessWord,
              guesses: ['place', 'close', '', '', '', '']
            }
          }
        })
      ]
    }
  })
  it('renders correctly', () => {
    expect(wrapper.isVisible()).toBeTruthy()
  })

  it('displays the correct number of boxes', () => {
    const pSelector = '[data-testid="word-display"]'

    expect(wrapper.findAll(pSelector)).toHaveLength(guessWord.length)
  })
})
