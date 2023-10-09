import { type DeepPartial } from '@reduxjs/toolkit'
import { getCounter } from './getCounter'
import { type StateSchema } from 'app/config/store/StateSchema'

describe('getCounter', () => {
  test('should return counter', () => {
    const state: DeepPartial<StateSchema> = {
      counter: {
        value: 10
      }
    }
    expect(getCounter(state as StateSchema)).toEqual({ value: 10 })
  })
})
