import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from './Button'

describe('Button', () => {
  test('should render', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })

  test('should have clear class', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('clear')
  })

  test('should render all attributes', () => {
    render(<Button theme={ThemeButton.CLEAR} id='testId'>Test</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveAttribute('id', 'testId')
  })
})
