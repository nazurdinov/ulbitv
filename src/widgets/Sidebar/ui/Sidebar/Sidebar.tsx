import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwithcer'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import HomeIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapse = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div data-testid="Sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <div className={styles.menu}>
        <AppLink className={classNames(styles.menuItem)} theme={AppLinkTheme.SECONDARY} to={'/'}>
          <HomeIcon />
          {
            !collapsed && <span>{t('Home')}</span>
          }
        </AppLink>
        <AppLink className={classNames(styles.menuItem)} theme={AppLinkTheme.SECONDARY} to={'/about'}>
          <AboutIcon />
          {
            !collapsed && <span>{t('About')}</span>
          }
        </AppLink>
      </div>

      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <button className={classNames(styles.collapsBtn)} onClick={toggleCollapse}>
        {collapsed ? '>' : '<'}
      </button>
    </div>
  )
}
