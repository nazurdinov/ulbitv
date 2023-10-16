import { type StateSchema } from 'app/config/store/StateSchema'

export const getLoginIsLoading = (state: StateSchema) => state?.loginForm?.isLoading ?? false
