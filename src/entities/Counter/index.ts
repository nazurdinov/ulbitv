import type { counterSchema } from './model/types/counterSchema'
import { Counter } from './ui/Counter'
import { counterReducer } from './model/slice/counterSlice'

export {
  Counter,
  type counterSchema,
  counterReducer
}
