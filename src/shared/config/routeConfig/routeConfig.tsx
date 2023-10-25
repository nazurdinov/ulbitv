import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { HomePage } from 'pages/HomePage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { type RouteProps } from 'react-router-dom'

export enum AppRouteName {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details'
}

export const RoutePaths: Record<AppRouteName, string> = {
  [AppRouteName.MAIN]: '/',
  [AppRouteName.ABOUT]: '/about',
  [AppRouteName.PROFILE]: '/profile',
  [AppRouteName.ARTICLES]: '/articles',
  [AppRouteName.ARTICLE_DETAILS]: '/article_details/', // + article_id

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
  {
    id: AppRouteName.ARTICLES,
    path: RoutePaths.articles,
    element: <ArticlesPage />,
    authOnly: true

  },
  {
    id: AppRouteName.ARTICLE_DETAILS,
    path: `${RoutePaths.article_details}:id`,
    element: <ArticleDetailsPage />,
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
