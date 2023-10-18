import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/config/store/StateSchema'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Profile>('/profile')

      return response.data
    } catch (err) {
      return rejectWithValue('Something went wrong')
    }
  }
)
