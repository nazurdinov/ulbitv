import styles from './Navbar.module.scss'
import { classNames } from 'shared/lib/classnames/classNames'
interface NavbarProps {
  className?: string
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>

    </div>
  )
}
