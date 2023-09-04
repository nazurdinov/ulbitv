import React from 'react'
import { useLang } from '../../lang/useLang'

function AboutPage() {
  const {lang, toggleLang} = useLang()

  return (
    <div>AboutPage {lang}</div>
  )
}

export default AboutPage