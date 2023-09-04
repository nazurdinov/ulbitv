import { useContext } from "react";
import { LangContext, Language } from "./LangContext";

interface UseLangReturnProps {
  lang: Language;
  toggleLang: () => void
}

export function useLang(): UseLangReturnProps {
  const { lang, setLang } = useContext(LangContext)
  
  const toggleLanguage = () => {
    const newLang = lang === Language.TJ ? Language.EN : Language.TJ
    setLang(newLang)
  }

  return {
    lang,
    toggleLang: toggleLanguage
  }
}