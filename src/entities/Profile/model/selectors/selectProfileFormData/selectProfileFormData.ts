import { type StateSchema } from 'app/config/store/StateSchema'
import { useSelector } from 'react-redux'
import { type Profile } from '../../types/profile'

export const selectProfileFormData = (): Profile | undefined => {
  return useSelector((state: StateSchema) => state?.profile?.formData)
}
