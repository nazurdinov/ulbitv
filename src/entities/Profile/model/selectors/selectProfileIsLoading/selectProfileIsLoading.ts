import { type StateSchema } from 'app/config/store/StateSchema'
import { useSelector } from 'react-redux'

export const selectProfileIsLoading = (): boolean => {
  return useSelector((state: StateSchema) => state?.profile?.isLoading || false)
}
