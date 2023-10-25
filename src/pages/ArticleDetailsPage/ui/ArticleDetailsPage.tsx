import styles from './ArticleDetailsPage.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import { useTranslation } from 'react-i18next'

interface ArticleDetailsPageProps {
  className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps): JSX.Element => {
  const { t } = useTranslation()

  return (
    <div className={classNames(styles.ArticleDetailsPage, {}, [className])}>
      Article details page
    </div>
  )
}

export default ArticleDetailsPage
