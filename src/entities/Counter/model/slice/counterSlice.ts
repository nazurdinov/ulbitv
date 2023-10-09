import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increment (state) {
      state.value++
    },
    decrement (state) {
      state.value--
    }
  }
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice
