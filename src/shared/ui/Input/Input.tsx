/* eslint-disable react/display-name */
import React, { type InputHTMLAttributes, useEffect, useRef, memo } from 'react'
import styles from './Input.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  autofocus?: boolean
  label?: string
}

export const Input = memo((props: InputProps) => {
  const {
    type = 'text',
    className = '',
    value,
    onChange,
    label,
    autofocus,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  useEffect(() => {
    if (autofocus) {
      inputRef.current?.focus()
    }
  }, [autofocus])

  return (
    <div className={classNames(styles.Input, {}, [className])}>
      <label>{label}</label>
      <input
        data-testid='input'
        ref={inputRef}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...rest}
      />
    </div>
  )
})
