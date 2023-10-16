import { type StateSchema } from 'app/config/store/StateSchema'
import { getLoginError } from './getLoginError'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginError', () => {
  test('should return error msg', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error'
      }
    }

    expect(getLoginError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginError(state as StateSchema)).toEqual(undefined)
  })
})
