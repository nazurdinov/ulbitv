import axios from 'axios'
import { fetchProfileData } from './fetchProfileData'
import { type Dispatch } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/config/store/StateSchema'
import { Country } from 'shared/const/common'
import { Currency } from 'entities/Currency'

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

const data = {
  firstname: 'Sam',
  lastname: 'Naz',
  city: 'Dushanbe',
  username: 'nazurdino',
  country: Country.TAJIKISTAN,
  currency: Currency.RUB,
  avatar: 'https://miro.medium.com/v2/resize:fit:640/0*ngAthWxOvKZHvsw9',
  age: 33
}

describe('Fetch profile data api', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn()
  })

  test('should be successful', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({
      data
    }))

    const action = fetchProfileData()
    const result = await action(dispatch, getState, {
      api: mockedAxios
    })

    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })

  test('should be rejected', async () => {
    mockedAxios.get.mockReturnValue(Promise.resolve({
      status: 403
    }))

    const action = fetchProfileData()
    const result = await action(dispatch, getState, {
      api: mockedAxios
    })

    expect(mockedAxios.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
