import { LoadingPage } from 'pages/LoadingPage'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routesConfig } from 'shared/config/routeConfig/routeConfig'

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        {
          routesConfig.map(({ element, path }) => <Route
                                                  path={path}
                                                  element={(<div className="page-wr">{element}</div>)}
                                                  key={path}/>)
        }

      </Routes>
    </Suspense>
  )
}
