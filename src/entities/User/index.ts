export {
  userReducer,
  userActions
} from './model/slice/userSlice'
export type {
  UserSchema,
  User
} from './model/types/user'

export { getIsUserInited } from './model/selectors/getIsUserInited/getIsUserInited'
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData'
