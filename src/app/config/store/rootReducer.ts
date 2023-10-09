import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'

export const rootReducer: ReducersMapObject<StateSchema> = {
  counter: counterReducer,
  user: userReducer
}
