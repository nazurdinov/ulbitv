import { counterActions, counterReducer } from './counterSlice'
import { type counterSchema } from '../types/counterSchema'

describe('counterSlice', () => {
  test('should decrement', () => {
    const state: counterSchema = {
      value: 10
    }

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })

  test('should increment', () => {
    const state: counterSchema = {
      value: 10
    }

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })

  test('should work with undefined state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
