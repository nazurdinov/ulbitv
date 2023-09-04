import React, { useState } from 'react'
import { LangContext, Language } from './LangContext'

type Props ={
  children: React.ReactNode
}

const LangProvider = ({children}: Props) => {
  const [lang, setLang] = useState<Language>(Language.TJ)
  return (
    <LangContext.Provider value={{
      lang,
      setLang
    }}>
      {children}
    </LangContext.Provider>
  )
}

export default LangProvider