import { Button, ThemeButton } from 'shared/ui/Button/Button'
import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
import RuFlag from 'shared/assets/icons/ru-flag.svg'
import EnFlag from 'shared/assets/icons/us-flag.svg'
import TjFlag from 'shared/assets/icons/tj-flag.svg'
import { useTranslation } from 'react-i18next'

interface LangSwitcherProps {
  className?: string
}

export enum appLanguages {
  RU = 'ru',
  EN = 'en',
  TJ = 'tj',
}

export const LangSwitcher = ({ className = '' }: LangSwitcherProps): JSX.Element => {
  const { i18n } = useTranslation()

  const changLang = (): void => {
    let newLang = appLanguages.EN

    if (i18n.language === appLanguages.EN) newLang = appLanguages.RU
    else if (i18n.language === appLanguages.RU) newLang = appLanguages.TJ

    void i18n.changeLanguage(newLang)
  }

  return (
    <Button onClick={changLang} theme={ThemeButton.CLEAR} className={classNames(styles.LangSwitcher, {}, [className])}>
      { i18n.language === appLanguages.EN ? <EnFlag /> : ''}
      { i18n.language === appLanguages.RU ? <RuFlag /> : '' }
      { i18n.language === appLanguages.TJ ? <TjFlag /> : ''}
    </Button>
  )
}
