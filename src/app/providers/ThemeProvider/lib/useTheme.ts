import { useContext } from 'react'
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext'

interface UseThemeResult {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH
    setTheme(newTheme)
    localStorage.setItem(LS_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
