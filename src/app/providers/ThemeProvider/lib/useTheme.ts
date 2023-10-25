import { useContext } from 'react'
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme

    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGTH
        break
      case Theme.LIGTH:
        newTheme = Theme.ORANGE
        break
      case Theme.ORANGE:
        newTheme = Theme.DARK
        break
      default:
        newTheme = Theme.LIGTH
        break
    }

    setTheme(newTheme)
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
