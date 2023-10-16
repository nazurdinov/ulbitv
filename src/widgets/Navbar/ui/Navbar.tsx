import { LoginModal } from 'features/authByUsername'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData/getUserAuthData'
import { userActions } from 'entities/User'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  const userAuth = useSelector(getUserAuthData)
  const dispatch = useDispatch()

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  const onLogout = () => {
    setIsLoginModalOpen(false)
    dispatch(userActions.logout())
  }

  if (userAuth) {
    return (<div className={classNames(styles.Navbar, {}, [className])}>
      <Button theme={ThemeButton.OUTLINED} onClick={onLogout}>{t('Выйти')}</Button>
    </div>)
  }

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button theme={ThemeButton.OUTLINED} onClick={() => { setIsLoginModalOpen(prev => !prev) }}>{t('Войти')}</Button>
      { isLoginModalOpen && <LoginModal isOpen={isLoginModalOpen} onClose={() => { setIsLoginModalOpen(prev => !prev) } } /> }
    </div>
  )
}
