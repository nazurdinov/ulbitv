import { type StateSchema } from 'app/config/store/StateSchema'

export const getUserAuthData = (state: StateSchema) => state.user.authData
