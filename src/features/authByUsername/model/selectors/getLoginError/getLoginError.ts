import { type StateSchema } from 'app/config/store/StateSchema'

export const getLoginError = (state: StateSchema) => state?.loginForm?.error
