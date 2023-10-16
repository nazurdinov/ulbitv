import { type ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINED = 'outlined'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ThemeButton
}

export const Button = (props: ButtonProps): JSX.Element => {
  const {
    className = '',
    children,
    theme,
    disabled = false,
    ...otherProps
  } = props

  const mods = {
    [styles.disabled]: disabled
  }
  return (
    <button disabled={disabled} className={classNames(styles.Button, mods, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
