import { classNames } from 'shared/lib/classnames/classNames'
import styles from './LoadingPage.module.scss'
import { Loader } from 'shared/ui/Loader/Loader'

export function LoadingPage (): JSX.Element {
  return (
    <div className={classNames(styles.LoadingPage)}>
      <Loader />
    </div>
  )
}
