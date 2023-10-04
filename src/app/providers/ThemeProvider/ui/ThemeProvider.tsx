import { useMemo, useState } from 'react'
import { ThemeContext, Theme, LS_THEME_KEY } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGTH

interface Props {
  children: React.ReactNode
}

const ThemeProvider = ({ children }: Props): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
