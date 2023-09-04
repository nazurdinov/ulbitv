import { createContext } from "react";

export enum Language {
  TJ = 'Tajiki',
  EN = 'English'
}

export interface LangContextProps {
  lang?: Language,
  setLang?: (lang: Language) => void
}

export const LangContext = createContext<LangContextProps>({});