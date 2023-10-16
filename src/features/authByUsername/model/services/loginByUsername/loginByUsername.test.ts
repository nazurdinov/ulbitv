import axios from 'axios'
import { loginByUsername } from './loginByUsername'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/config/store/StateSchema'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

describe('Login by username service', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('should be successful', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: {
        username: '123',
        id: '1'
      }
    }))

    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  test('should be rejected', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403
    }))

    const action = loginByUsername({ username: '123', password: '123' })
    const result = await action(dispatch, getState, undefined)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
