import React, { type ErrorInfo, type ReactNode } from 'react'
import styles from './ErrorBoundary.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'

interface iProps {
  children?: ReactNode
}

interface iState {
  hasError: boolean
}

export class ErrorBoundary extends React.Component<iProps, iState> {
  constructor (props: iProps) {
    super(props)
    this.state = { hasError: false }
  }

  public static getDerivedStateFromError (_: Error): iState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    if (error) {
      console.log()
    }
  }

  pageReload (): void {
    location.reload()
  }

  render (): ReactNode {
    if (this.state.hasError) {
      return <div className={classNames(styles.errorBoundary)}>
        <div>Something went wrong...</div>
        <div><button onClick={this.pageReload}>Reload the page</button></div>
      </div>
    }

    return this.props.children
  }
}
