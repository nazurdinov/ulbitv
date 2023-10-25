import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { type Profile, type ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../api/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../api/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
  isEdit: false,
  isLoading: false
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload
    },
    setFromData: (state, action: PayloadAction<Profile>) => {
      state.formData = {
        ...state.formData,
        ...action.payload
      }
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
    resetForm: (state) => {
      state.formData = state.data
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      .addCase(updateProfileData.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.formData = action.payload
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
