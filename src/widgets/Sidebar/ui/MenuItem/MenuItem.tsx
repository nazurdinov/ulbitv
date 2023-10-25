import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import styles from './MenuItem.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { type ReactNode } from 'react'

interface MenuItemProps {
  className?: string
  label?: string
  Icon?: ReactNode
  isOnlyIcon?: boolean
  to: string
  isVisible?: boolean
}

export const MenuItem = ({ className, label, isOnlyIcon = false, Icon, to, isVisible = true }: MenuItemProps) => {
  return (
    <AppLink isVisible={isVisible} className={classNames(styles.MenuItem, {}, [className])} theme={AppLinkTheme.SECONDARY} to={to}>
      {Icon}
      {
        !isOnlyIcon && <span>{label}</span>
      }
    </AppLink>
  )
}
