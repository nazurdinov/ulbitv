import { screen, fireEvent, render } from '@testing-library/react'
import { ThemeSwitcher } from './ThemeSwitcher'

describe('ThemeSwitcher', () => {
  test('should render', () => {
    render(<ThemeSwitcher />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
