import { RoutePaths } from 'shared/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/main-20-20.svg'
import AboutIcon from 'shared/assets/icons/about-20-20.svg'
import ProfileIcon from 'shared/assets/icons/profile_icon.svg'
import ArticlesIcon from 'shared/assets/icons/article-20-20.svg'

export const menuItems = [
  {
    to: RoutePaths.main,
    Icon: HomeIcon,
    authOnly: false,
    label: 'Home'
  },
  {
    to: RoutePaths.about,
    Icon: AboutIcon,
    authOnly: false,
    label: 'About'
  },
  {
    to: RoutePaths.profile,
    Icon: ProfileIcon,
    authOnly: true,
    label: 'Profile'
  },
  {
    to: RoutePaths.articles,
    Icon: ArticlesIcon,
    authOnly: true,
    label: 'Articles'
  }
]
