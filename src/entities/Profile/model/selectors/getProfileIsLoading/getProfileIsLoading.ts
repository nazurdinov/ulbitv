import { type StateSchema } from 'app/config/store/StateSchema'

export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading ?? false
