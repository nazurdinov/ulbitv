import { type counterSchema } from 'entities/Counter/model/types/counterSchema'
import { type UserSchema } from 'entities/User'

export interface StateSchema {
  counter: counterSchema
  user: UserSchema
}
