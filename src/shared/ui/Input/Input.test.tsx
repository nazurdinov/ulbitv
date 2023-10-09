import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  test('should render', () => {
    render(<Input />)
    const input = screen.getByTestId('input')
    expect(input).toBeInTheDocument()
  })

  test('should change data', () => {
    render(<Input />)
    const input: HTMLInputElement = screen.getByTestId('input')

    fireEvent.change(input, { target: { value: '123' } })
    expect(input.value).toBe('123')
  })
})
