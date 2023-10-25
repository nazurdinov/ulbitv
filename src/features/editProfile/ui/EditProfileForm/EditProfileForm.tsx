import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './EditProfileForm.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { ProfileCard, selectProfileError, selectProfileIsLoading, selectProfileIsEdit, profileActions, updateProfileData, profileReducer } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { fetchProfileData } from 'entities/Profile/model/api/fetchProfileData/fetchProfileData'
import { selectProfileFormData } from 'entities/Profile/model/selectors/selectProfileFormData/selectProfileFormData'
import { Country } from 'shared/const/common'
import { Currency } from 'entities/Currency'
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader'

interface EditProfileFormProps {
  className?: string
}

export const EditProfileForm = ({ className }: EditProfileFormProps) => {
  useDynamicReducerLoader({
    reducerKey: 'profile',
    reducer: profileReducer
  })
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const formData = selectProfileFormData()
  const isLoading = selectProfileIsLoading()
  const error = selectProfileError()
  const isEdit = selectProfileIsEdit()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onEditBtnClick = useCallback(() => {
    dispatch(profileActions.setIsEdit(true))
  }, [])

  const onSaveBtnClick = useCallback(() => {
    dispatch(profileActions.setIsEdit(false))

    dispatch(updateProfileData())
  }, [])

  const onCancelBtnClick = useCallback(() => {
    dispatch(profileActions.resetForm())
    dispatch(profileActions.setIsEdit(false))
  }, [])

  const onFirstNameChange = (value: string) => {
    dispatch(profileActions.setFromData({
      firstname: value || ''
    }))
  }

  const onLastNameChange = (value: string) => {
    dispatch(profileActions.setFromData({
      lastname: value || ''
    }))
  }

  const onAgeChange = (value: string) => {
    dispatch(profileActions.setFromData({
      age: Number(value || 0)
    }))
  }

  const onCityChange = (value: string) => {
    dispatch(profileActions.setFromData({
      city: value || ''
    }))
  }

  const onUsernameChange = (value: string) => {
    dispatch(profileActions.setFromData({
      username: value || ''
    }))
  }

  const onAvatarChange = (value: string) => {
    dispatch(profileActions.setFromData({
      avatar: value || ''
    }))
  }

  const onCurrencyChange = (value: Currency) => {
    dispatch(profileActions.setFromData({
      currency: value || Currency.USD
    }))
  }

  const onCountryChange = (value: Country) => {
    dispatch(profileActions.setFromData({
      country: value || Country.USA
    }))
  }

  return (
    <div className={classNames(styles.EditProfileForm, {}, [className])}>
    <div className={styles.header}>
       <h1>{t('Profile')}</h1>
       { !isEdit &&
        <Button
          className={styles.editBtn}
          theme={ThemeButton.OUTLINED}
          onClick={onEditBtnClick}
        >
          {t('Edit')}
        </Button>
       }
      </div>
      <ProfileCard
        formData={formData}
        error={error}
        isLoading={isLoading}
        isEdit={isEdit}
        onFirstNameChange={onFirstNameChange}
        onLastNameChange={onLastNameChange}
        onAgeChange={onAgeChange}
        onCityChange={onCityChange}
        onUsernameChange={onUsernameChange}
        onAvatarChange={onAvatarChange}
        onCurrencyChange={onCurrencyChange}
        onCountryChange={onCountryChange}
      />
      {isEdit &&
        <div className={styles.footer}>
          <Button
            className={styles.saveBtn}
            theme={ThemeButton.OUTLINED}
            onClick={onSaveBtnClick}
          >
            {t('Save')}
          </Button>
          <Button
            className={styles.cancelBtn}
            theme={ThemeButton.OUTLINED}
            onClick={onCancelBtnClick}
          >
            {t('Cancel')}
          </Button>
        </div>
      }
    </div>
  )
}
