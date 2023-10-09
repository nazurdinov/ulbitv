import { type StateSchema } from 'app/config/store/StateSchema'

export const getCounterValue = (state: StateSchema) => state.counter.value
