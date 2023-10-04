import './styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classnames/classNames'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar/ui'
import { Suspense } from 'react'

function App (): JSX.Element {
  const { theme } = useTheme()

  return (
    <Suspense fallback=''>
    <div data-testid='app' className={classNames('app', {}, [theme])}>
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
