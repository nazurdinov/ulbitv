import { configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { rootReducer } from './rootReducer'
import { createReducerManager } from './reducerManager'

const reducerManager = createReducerManager(rootReducer)

const createReduxStore = (initialState?: StateSchema) => {
  const configStore = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: true,
    preloadedState: initialState
  })

  // eslint-disable-next-line
  // @ts-expect-error
  configStore.reducerManager = reducerManager

  return configStore
}

export const store = createReduxStore()

export type AppDispatch = typeof store.dispatch
