import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense, useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getIsUserInited, userActions } from 'entities/User'
import { useSelector } from 'react-redux'

function App (): JSX.Element {
  const { theme } = useTheme()

  const dispatch = useAppDispatch()
  const isUserInited = useSelector(getIsUserInited)

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <Suspense fallback=''>
      <div data-testid='app' id='app' className={classNames('app', {}, [theme])}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          { isUserInited && <AppRouter /> }
        </div>
      </div>
    </Suspense>
  )
}

export default App
