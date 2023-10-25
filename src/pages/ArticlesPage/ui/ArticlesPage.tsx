import styles from './ArticlesPage.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'

interface ArticlesPageProps {
  className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      Articles page
    </div>
  )
}

export default ArticlesPage
