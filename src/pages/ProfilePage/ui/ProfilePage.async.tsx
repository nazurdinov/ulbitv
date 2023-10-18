import { lazy } from 'react'

const ProfilePageAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error error
      resolve(import('pages/ProfilePage/ui/ProfilePage'))
    }, 2000)
  })
})

export {
  ProfilePageAsync
}
