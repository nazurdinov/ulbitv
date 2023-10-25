import { type ReducersMapObject } from '@reduxjs/toolkit'
import { type StateSchema } from './StateSchema'
import { userReducer } from '../../../entities/User'

export const rootReducer: ReducersMapObject<StateSchema> = {
  user: userReducer
}
