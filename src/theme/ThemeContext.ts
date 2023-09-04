import { createContext } from "react";

export enum Theme {
  LIGTH = 'light',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

export const LS_THEME_KEY = 'theme'


export const ThemeContext = createContext<ThemeContextProps>({});

