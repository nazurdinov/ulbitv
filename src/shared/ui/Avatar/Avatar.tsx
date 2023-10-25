import { type CSSProperties, useMemo } from 'react'
import styles from './Avatar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  isCircle?: boolean
}

export const Avatar = (props: AvatarProps) => {
  const { src, className, size, isCircle } = props

  const css = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
    borderRadius: isCircle ? size : 0
  }), [size, isCircle])

  return (
    <div style={css} className={classNames(styles.Avatar, {}, [className])}>
      <img src={src} alt='Avatar' />
    </div>
  )
}
