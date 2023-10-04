import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div>

      </div>
      <div className={styles.linksBlock}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={styles.mainLink}>{t('Home')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About')}</AppLink>
      </div>
    </div>
  )
}
