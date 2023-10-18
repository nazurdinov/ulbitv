import { type ReducersMapObject, type EnhancedStore, type AnyAction, type Reducer, type CombinedState } from '@reduxjs/toolkit'
import { type counterSchema } from '../../../entities/Counter/model/types/counterSchema'
import { type UserSchema } from '../../../entities/User'
import { type LoginSchema } from '../../../features/authByUsername'
import { type ProfileSchema } from 'entities/Profile'
import { type AxiosInstance } from 'axios'
import { type NavigateOptions, type To } from 'react-router-dom'

export interface StateSchema {
  counter: counterSchema
  user: UserSchema

  // Асинхронные редюсеры
  loginForm?: LoginSchema
  profile?: ProfileSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager?: ReducerManager
}

export interface ThunkExtraArg {
  api: AxiosInstance
  navigate?: (to: To, options?: NavigateOptions) => void
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArg
}

export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T
