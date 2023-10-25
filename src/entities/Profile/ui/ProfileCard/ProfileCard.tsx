import styles from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { type Profile } from '../../model/types/profile'
import { Loader } from 'shared/ui/Loader/Loader'
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader'
import { profileReducer } from '../../model/slice/profileSlice'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Select } from 'shared/ui/Select/Select'
import { Country } from 'shared/const/common'
import { useCallback, useMemo } from 'react'
import { type Currency, currencyValueLabelList } from 'entities/Currency'

interface ProfileCardProps {
  className?: string
  formData?: Profile
  isLoading?: boolean
  error?: string
  isEdit?: boolean
  onFirstNameChange?: (value: string) => void
  onLastNameChange?: (value: string) => void
  onAgeChange?: (value: string) => void
  onCityChange?: (value: string) => void
  onUsernameChange?: (value: string) => void
  onAvatarChange?: (value: string) => void
  onCurrencyChange?: (currency: Currency) => void
  onCountryChange?: (country: Country) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation()

  const {
    formData,
    isLoading,
    error,
    isEdit = false,
    className,
    onFirstNameChange,
    onLastNameChange,
    onAgeChange,
    onCityChange,
    onUsernameChange,
    onAvatarChange,
    onCurrencyChange,
    onCountryChange
  } = props

  const onCurrencyChangeHandler = useCallback((value: string) => {
    onCurrencyChange?.(value as Currency)
  }, [onCurrencyChange])

  const onCountryChangeHandler = useCallback((value: string) => {
    onCountryChange?.(value as Country)
  }, [onCountryChange])

  const countryOptions = useMemo(() => [
    { label: Country.TAJIKISTAN, value: Country.TAJIKISTAN },
    { label: Country.USA, value: Country.USA }
  ], [])

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.loaderWr])}>
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.errorWr])}>
        <h1>{error}</h1>
      </div>
    )
  }

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      { formData?.avatar &&
          <Avatar size={100} src={formData.avatar} isCircle />}
      <div className={styles.data}>
        <Input
          onChange={onFirstNameChange}
          readOnly={!isEdit}
          className={classNames(styles.input, { [styles.readOnly]: !isEdit })}
          value={formData?.firstname}
          label={t('Firstname')}
        />
        <Input
          onChange={onLastNameChange}
          readOnly={!isEdit}
          className={styles.input}
          value={formData?.lastname}
          label={t('Lastname')}
        />
        <Input
          onChange={onAgeChange}
          readOnly={!isEdit}
          className={styles.input}
          type='number'
          value={formData?.age}
          label={t('Age')}
        />
        <Input
          onChange={onCityChange}
          readOnly={!isEdit}
          className={styles.input}
          value={formData?.city}
          label={t('City')}
        />
        <Input
          onChange={onUsernameChange}
          readOnly={!isEdit}
          className={styles.input}
          value={formData?.username}
          label={t('Username')}
        />
        <Input
          onChange={onAvatarChange}
          readOnly={!isEdit}
          className={styles.input}
          value={formData?.avatar}
          label={t('Avatar URL')}
        />
        <Select
          onChange={onCurrencyChangeHandler}
          label={t('Currency')}
          options={currencyValueLabelList}
          isDisabled={!isEdit}
          value={formData?.currency}
        />
        <Select
          onChange={onCountryChangeHandler}
          label={t('Country')}
          options={countryOptions}
          isDisabled={!isEdit}
          value={formData?.country}
        />
      </div>
    </div>
  )
}
