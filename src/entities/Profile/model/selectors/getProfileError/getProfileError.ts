import { type StateSchema } from 'app/config/store/StateSchema'

export const getProfileError = (state: StateSchema) => state?.profile?.error
