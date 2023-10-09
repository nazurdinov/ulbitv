import { LoginModal } from 'features/authByUsername'
import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <Button theme={ThemeButton.OUTLINED} onClick={() => { setIsLoginModalOpen(prev => !prev) }}>{t('Войти')}</Button>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => { setIsLoginModalOpen(prev => !prev) } } />
    </div>
  )
}
