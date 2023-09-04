import { FC, useEffect, useMemo, useState } from "react";
import { ThemeContext, Theme, LS_THEME_KEY } from "./ThemeContext"


const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.LIGTH

type Props = {
  children: React.ReactNode
};

const ThemeProvider = ({children}: Props) =>{
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => ({
      theme,
      setTheme
  }), [theme])

  useEffect(() => {
    console.log(theme);
    
  }, [theme])
  

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider