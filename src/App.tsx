import { lazy, Suspense, useContext, useState } from "react";
import { Route, Routes  } from "react-router-dom"
import { Link } from "react-router-dom"
import './styles/index.scss'
import { useTheme } from "./theme/useTheme";
import { useLang } from "./lang/useLang";
import { classNames } from "./helpers/classnames/classNames";
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));


export enum Language {
  TJ = 'Tajiki',
  EN = 'English'
}

function App() {
  const {theme, toggleTheme} = useTheme()
  const {lang, toggleLang} = useLang()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={toggleLang}>{lang}</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={<HomePage />}/>
      </Routes>
      </Suspense>
    </div>
  )
}

export default App