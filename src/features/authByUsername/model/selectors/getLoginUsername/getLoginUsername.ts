import { type StateSchema } from 'app/config/store/StateSchema'

export const getLoginUsername = (state: StateSchema) => state?.loginForm?.username ?? ''
