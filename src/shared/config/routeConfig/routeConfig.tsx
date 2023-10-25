import { type } from 'os'
import { AboutPage } from 'pages/AboutPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouterProps, type RouteProps } from 'react-router-dom'

export enum AppRouteName {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRouteName, string> = {
  [AppRouteName.MAIN]: '/',
  [AppRouteName.ABOUT]: '/about',
  [AppRouteName.PROFILE]: '/profile',

  // FALLBACK ROUTE
  [AppRouteName.NOT_FOUND]: '*'
}

export const routesConfig: AppRouteProps[] = [
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
    id: AppRouteName.PROFILE,
    path: RoutePaths.profile,
    element: <ProfilePage />,
    authOnly: true

  },

  // Fallback page
  {
    id: AppRouteName.NOT_FOUND,
    path: RoutePaths.not_found,
    element: <NotFoundPage />
  }
]

export type AppRouteProps = RouteProps & {
  authOnly?: boolean
}
