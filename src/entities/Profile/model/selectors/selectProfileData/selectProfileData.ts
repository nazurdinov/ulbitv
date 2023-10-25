import { type StateSchema } from 'app/config/store/StateSchema'
import { useSelector } from 'react-redux'
import { type Profile } from '../../types/profile'

export const selectProfileData = (): Profile | undefined => {
  return useSelector((state: StateSchema) => state?.profile?.data)
}
