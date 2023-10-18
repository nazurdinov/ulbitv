import { type StateSchema } from 'app/config/store/StateSchema'

export const getProfileData = (state: StateSchema) => state?.profile?.data
