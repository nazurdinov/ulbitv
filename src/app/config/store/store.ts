import { type AnyAction, type CombinedState, type Reducer, configureStore } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { rootReducer } from './rootReducer'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { type NavigateOptions, type To } from 'react-router-dom'

const reducerManager = createReducerManager(rootReducer)

export const createReduxStore = (
  navigate?: (to: To, options?: NavigateOptions) => void,
  initialState?: StateSchema
) => {
  const configStore = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>, AnyAction>,
    devTools: true,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate
          }
        }
      })

  })

  // eslint-disable-next-line
  // @ts-expect-error
  configStore.reducerManager = reducerManager

  return configStore
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
