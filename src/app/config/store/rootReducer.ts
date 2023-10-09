import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from 'entities/User'
import { counterReducer } from 'entities/Counter'

export const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer
}
