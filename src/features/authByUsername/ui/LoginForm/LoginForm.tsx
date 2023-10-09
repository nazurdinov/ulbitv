import styles from './Loginform.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { useRef, useState } from 'react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <h1>{t('Авторизация')}</h1>
      <form>
        <Input
          autofocus
          label={'Логин'}
          value={username}
          onChange={(value) => { setUsername(value) }}
        />
        <Input
          label={'Пароль'}
          value={password}
          onChange={(value) => { setPassword(value) }}
        />
        <div className={styles.enterBtnWr}>
        <Button theme={ThemeButton.OUTLINED} type='submit'>{t('Войти')}</Button>
        </div>
      </form>
    </div>
  )
}
