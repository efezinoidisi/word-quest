import { expect, test } from 'vitest'

import { getBackgroundColor } from '../utils'

test('returns correct background color', () => {
  expect(getBackgroundColor(null)).toBe('bg-inherit')

  expect(getBackgroundColor(0)).toBe('bg-green-600')

  expect(getBackgroundColor(1)).toBe('bg-yellow-500')

  expect(getBackgroundColor(-1)).toBe('bg-gray-500')
})
