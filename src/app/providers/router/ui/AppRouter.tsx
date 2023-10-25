import { LoadingPage } from 'pages/LoadingPage'
import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { type AppRouteProps, routesConfig } from 'shared/config/routeConfig/routeConfig'
import { RequireAuth } from './RequireAuth'

export const AppRouter = (): JSX.Element => {
  const routes = useCallback(
    (route: AppRouteProps) => {
      const element = (<div className='page-wr'>
        <Suspense fallback={<LoadingPage />}>{route.element}</Suspense>
      </div>)

      return <Route
                path={route.path}
                element={ route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
                key={route.path}
            />
    }, []
  )

  return (
      <Routes>
        { routesConfig.map(routes) }
      </Routes>
  )
}
