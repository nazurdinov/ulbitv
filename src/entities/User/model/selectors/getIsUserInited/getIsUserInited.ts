import { type StateSchema } from 'app/config/store/StateSchema'

export const getIsUserInited = (state: StateSchema) => state.user._inited
