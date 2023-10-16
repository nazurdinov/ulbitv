import { type StateSchema } from 'app/config/store/StateSchema'

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password ?? ''
