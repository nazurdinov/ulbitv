/* eslint-disable react/no-unknown-property */
import { useState, type ReactNode, useEffect } from 'react'
import styles from './Modal.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

interface ModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen = false, onClose, lazy = false } = props

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setisMounted] = useState(false)

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.closing]: isClosing
  }

  const onCloseHandler = () => {
    setIsClosing(true)
    if (onClose) {
      setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }

  const onContentClickHandler = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onCloseHandler()
    }
  }

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)

      setisMounted(true)
    }

    return () => {
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen])

  if (lazy && !isMounted) {
    return null
  }

  return (
      <div className={classNames(styles.Modal, mods, [className ?? ''])}>
        <div className={styles.overlay} onClick={onCloseHandler}>
          <div className={styles.content} onClick={onContentClickHandler}>
            { children }
          </div>
        </div>
      </div>
  )
}
