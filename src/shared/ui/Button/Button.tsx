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
    ...otherProps
  } = props

  return (
    <button className={classNames(styles.Button, {}, [className, styles[theme]])} {...otherProps}>
      {children}
    </button>
  )
}
