import { type DeepPartial, type StateSchema } from 'app/config/store/StateSchema'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'user1'
      }
    }

    expect(getLoginUsername(state as StateSchema)).toEqual('user1')
  })

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}

    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})
