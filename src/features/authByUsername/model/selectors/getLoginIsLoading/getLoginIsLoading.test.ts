import { type StateSchema } from 'app/config/store/StateSchema'
import { getLoginIsLoading } from './getLoginIsLoading'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true
      }
    }

    expect(getLoginIsLoading(state as StateSchema)).toBe(true)
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
  })
})
