import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

function AboutPage (): JSX.Element {
  const { t } = useTranslation(['about'])

  return (
    <div>
      <h1>{t('About page')}</h1>
      <Counter />

    </div>
  )
}

export default AboutPage
