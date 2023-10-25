import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classnames/classNames'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import { Theme } from 'app/providers/ThemeProvider'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className = '' }: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames('', {}, [className])}>
      { theme === Theme.LIGTH ? <DarkIcon /> : <LightIcon /> }
    </Button>
  )
}
