import { useMemo } from 'react'
import styles from './Select.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

interface Option {
  label: string
  value: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: Option[]
  onChange: (value: string) => void
  isDisabled?: boolean
  value?: string
}

export const Select = (props: SelectProps) => {
  const {
    label,
    className,
    options,
    isDisabled,
    value,
    onChange
  } = props

  const optionList = useMemo(() => {
    return options?.map((option) => <option
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>)
  }, [options])

  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(styles.Select, {}, [className])}>
      <label>{label}</label>

      <select value={value} disabled={isDisabled} onChange={onChangeHandler}>
        {optionList}
      </select>
    </div>
  )
}
