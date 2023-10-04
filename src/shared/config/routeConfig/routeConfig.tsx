import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRouteName {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRouteName, string> = {
  [AppRouteName.MAIN]: '/',
  [AppRouteName.ABOUT]: '/about',
  [AppRouteName.NOT_FOUND]: '*'
}

export const routesConfig: RouteProps[] = [
  {
    id: AppRouteName.MAIN,
    path: RoutePaths.main,
    element: <HomePage />
  },
  {
    id: AppRouteName.ABOUT,
    path: RoutePaths.about,
    element: <AboutPage />
  },
  {
    id: AppRouteName.NOT_FOUND,
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
]
