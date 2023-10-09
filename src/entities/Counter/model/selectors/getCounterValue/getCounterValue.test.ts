import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounterValue } from './getCounterValue'
import { type StateSchema } from 'app/config/store/StateSchema'

describe('getCounterValue', () => {
  test('should return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }

    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
