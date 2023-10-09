import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { StoreProvider } from 'app/providers/StoreProvider'

describe('Counter', () => {
  test('should render', () => {
    render(<StoreProvider><Counter /></StoreProvider>)

    expect(screen.findByTestId(''))
  })
})
