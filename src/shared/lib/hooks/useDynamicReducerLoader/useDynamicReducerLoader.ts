import { type Reducer } from '@reduxjs/toolkit'
import { type ReduxStoreWithManager, type StateSchemaKey } from 'app/config/store/StateSchema'
import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'

interface Props {
  reducerKey: StateSchemaKey
  reducer: Reducer
  removeAfterUnmount?: boolean
}

export function useDynamicReducerLoader (props: Props) {
  const { reducerKey, reducer, removeAfterUnmount = false } = props

  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    store.reducerManager?.add(reducerKey, reducer)
    dispatch({ type: `@INIT ${reducerKey} reducer` })

    return () => {
      if (removeAfterUnmount) {
        store.reducerManager?.remove('loginForm')
        dispatch({ type: `@DESTROY ${reducerKey}` })
      }
    }
  }, [])
}
