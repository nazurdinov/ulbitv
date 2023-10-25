import { type StateSchema } from 'app/config/store/StateSchema'
import { useSelector } from 'react-redux'

export const selectProfileIsEdit = (): boolean => {
  return useSelector((state: StateSchema) => state?.profile?.isEdit || false)
}
