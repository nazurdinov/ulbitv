import { useTranslation } from 'react-i18next'

function AboutPage (): JSX.Element {
  const { t } = useTranslation(['about'])

  return (
    <div>
      <h1>{t('About page')}</h1>

    </div>
  )
}

export default AboutPage
