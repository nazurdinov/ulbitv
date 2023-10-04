import { screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import { renderWithTranslations } from 'shared/lib/tests/renderWithTranslations/renderWithTranslations'

describe('Button', () => {
  test('should render', () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId('Sidebar')).toBeInTheDocument()
  })

  test('should add and remove "collapsed" class on main wrapper', () => {
    renderWithTranslations(<Sidebar />)
    const sidebar = screen.getByTestId('Sidebar')
    const toggleBtn = screen.getByRole('button', {
      name: /Toggle/i
    })
    fireEvent.click(toggleBtn)
    expect(sidebar).toHaveClass('collapsed')

    fireEvent.click(toggleBtn)
    expect(sidebar).not.toHaveClass('collapsed')
  })
})
