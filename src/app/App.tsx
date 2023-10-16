import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { userActions } from 'entities/User'

function App (): JSX.Element {
  const { theme } = useTheme()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <Suspense fallback=''>
    <div data-testid='app' id='app' className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
    </Suspense>
  )
}

export default App
