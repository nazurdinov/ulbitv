import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/config/store/StateSchema'
import { type Profile } from '../../types/profile'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      extra.api.defaults.headers.Authorization = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      const response = await extra.api.get<Profile>('/profile')

      if (!response.data) {
        throw new Error()
      }
      return response.data
    } catch (err) {
      return rejectWithValue('Something went wrong :(')
    }
  }
)
