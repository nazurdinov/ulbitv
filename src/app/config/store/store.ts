import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { rootReducer } from './rootReducer'

export const createReduxStore = (initialState?: StateSchema) => {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState
  })
}
