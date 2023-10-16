import styles from './Loginform.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { loginActions, loginReducer } from '../../model/slice/loginSlice'
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword'
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError'
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader'

interface LoginFormProps {
  className?: string
}

const LoginForm = ({ className = '' }: LoginFormProps) => {
  const { t } = useTranslation()

  useDynamicReducerLoader({
    reducerKey: 'loginForm',
    reducer: loginReducer,
    removeAfterUnmount: true
  })

  const dispatch = useAppDispatch()

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onUsernameChange = (value: string) => {
    dispatch(loginActions.setUsername(value))
  }

  const onPasswordChange = (value: string) => {
    dispatch(loginActions.setPassword(value))
  }

  const onLoginClick = () => {
    void dispatch(loginByUsername({
      username, password
    }))
  }

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <h1>{t('Авторизация')}</h1>
        {error &&
          <div className={styles.errorMsg}>{error}</div>
        }
        <Input
          autofocus
          label={'Логин'}
          value={username}
          onChange={onUsernameChange}
        />
        <Input
          label={'Пароль'}
          value={password}
          onChange={onPasswordChange}
        />
        <div className={styles.enterBtnWr}>
        <Button disabled={isLoading} theme={ThemeButton.OUTLINED} onClick={onLoginClick}>{t('Войти')}</Button>
        </div>
    </div>
  )
}

export default LoginForm
