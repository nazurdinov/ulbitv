import { type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
  container?: Element
}
export default ({ children, container = document.querySelector('#app')! }: PortalProps) => {
  return createPortal(children, container)
}
