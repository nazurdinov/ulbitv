import { type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from 'app/config/store/store'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children } = props

  const navigation = useNavigate()

  const store = createReduxStore(navigation)

  return (
    <Provider store={store} >
      { children }
    </Provider>
  )
}
