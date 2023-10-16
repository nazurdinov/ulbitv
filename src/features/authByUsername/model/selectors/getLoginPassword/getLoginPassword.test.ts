import { type StateSchema } from 'app/config/store/StateSchema'
import { getLoginPassword } from './getLoginPassword'
import { type DeepPartial } from '@reduxjs/toolkit'

describe('getLoginPassword', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'pass123'
      }
    }

    expect(getLoginPassword(state as StateSchema)).toEqual('pass123')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginPassword(state as StateSchema)).toEqual('')
  })
})
