import styles from './NotFoundPage.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'

interface NotFoundPageProps {
  className?: string
}

export const NotFoundPage = ({ className = '' }: NotFoundPageProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <h1 className={classNames(styles.NotFoundPage, {}, [className])}>
      {t('PAGE NOT FOUND')} :(
    </h1>
  )
}
