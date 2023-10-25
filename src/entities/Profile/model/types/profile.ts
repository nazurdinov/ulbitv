import { type Currency } from 'entities/Currency'
import { type Country } from 'shared/const/common'

export interface Profile {
  firstname?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Country
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  readonly data?: Profile
  formData?: Profile
  isLoading: boolean
  error?: string
  isEdit: boolean
}
