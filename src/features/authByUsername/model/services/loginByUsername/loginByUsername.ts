import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/config/store/StateSchema'
import { userActions, type User } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.post<User>('/login', {
        username,
        password
      })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      if (extra.navigate) {
        extra.navigate('/')
      }
      return response.data
    } catch (err) {
      return rejectWithValue('Something went wrong')
    }
  }
)
