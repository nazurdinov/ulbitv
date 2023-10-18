import { fetchProfileData, profileReducer } from 'entities/Profile'
import { useEffect } from 'react'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useDynamicReducerLoader } from 'shared/lib/hooks/useDynamicReducerLoader/useDynamicReducerLoader'

function ProfilePage (): JSX.Element {
  useDynamicReducerLoader({
    reducerKey: 'profile',
    reducer: profileReducer,
    removeAfterUnmount: true
  })

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <div>
      <h1>Profile page</h1>
    </div>
  )
}

export default ProfilePage
