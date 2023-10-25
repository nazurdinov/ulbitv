import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwithcer'
import { LangSwitcher } from 'widgets/LangSwitcher'

import { useAuth } from 'shared/lib/hooks/useAuth/useAuth'
import { MenuItem } from '../MenuItem/MenuItem'
import { menuItems } from 'widgets/Sidebar/model/menuItems'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const isAuth = useAuth()

  const toggleCollapse = (): void => {
    setCollapsed(prev => !prev)
  }

  const menuItemList = useMemo(() => {
    return menuItems.map(item => <MenuItem
      key={item.to}
      to={item.to}
      Icon={<item.Icon />}
      isOnlyIcon={collapsed}
      label={t(item.label)}
      isVisible={item.authOnly ? !!isAuth : true}
      />)
  }, [menuItems, isAuth])

  return (
    <div data-testid="Sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <div className={styles.menu}>
        {menuItemList}
      </div>

      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
      <button data-testid='collapseBtn' className={classNames(styles.collapsBtn)} onClick={toggleCollapse}>
        {collapsed ? '>' : '<'}
      </button>
    </div>
  )
}
