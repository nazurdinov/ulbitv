import { type DeepPartial } from 'app/config/store/StateSchema'
import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
  test('should set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin'
    }

    const result = loginReducer(state as LoginSchema, loginActions.setUsername('root'))

    expect(result).toStrictEqual({ username: 'root' })
  })

  test('should set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '123'
    }

    const result = loginReducer(state as LoginSchema, loginActions.setPassword('111'))

    expect(result).toStrictEqual({ password: '111' })
  })
})
