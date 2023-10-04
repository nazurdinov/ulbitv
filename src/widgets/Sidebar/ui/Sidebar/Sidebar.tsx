import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { ThemeSwitcher } from 'widgets/ThemeSwithcer'
import { LangSwitcher } from 'widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className = '' }: SidebarProps): JSX.Element => {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = (): void => {
    setCollapsed(prev => !prev)
  }
  return (
    <div data-testid="Sidebar" className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button onClick={toggle}>Toggle</button>
      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  )
}
