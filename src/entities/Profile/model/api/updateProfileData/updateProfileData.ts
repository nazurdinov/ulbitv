import { createAsyncThunk } from '@reduxjs/toolkit'
import { type ThunkConfig } from 'app/config/store/StateSchema'
import { type Profile } from '../../types/profile'

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const { profile } = getState()

    try {
      const response = await extra.api.post<Profile>('/profile', profile?.formData)
      return response.data
    } catch (err) {
      return rejectWithValue('Something went wrong :(')
    }
  }
)
