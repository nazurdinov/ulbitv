import { type LinkProps, Link } from 'react-router-dom'
import styles from './AppLink.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme: AppLinkTheme
  hidden?: boolean
}

export const AppLink = (props: AppLinkProps): JSX.Element => {
  const { className = '', hidden = false, children, theme, to, ...rest } = props

  if (hidden) {
    return <></>
  }

  return (
    <Link to={to} className={classNames(styles.AppLink, {}, [className, styles[theme]])} {...rest} >
      {children}
    </Link>
  )
}
