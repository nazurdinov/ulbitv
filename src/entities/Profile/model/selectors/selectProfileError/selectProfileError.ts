import { type StateSchema } from 'app/config/store/StateSchema'
import { useSelector } from 'react-redux'

export const selectProfileError = (): string => {
  return useSelector((state: StateSchema) => state?.profile?.error || '')
}
