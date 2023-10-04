import { lazy } from 'react'

const HomePageAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error sdsf
      resolve(import('pages/HomePage/ui/HomePage'))
    }, 1000)
  })
})
export {
  HomePageAsync
}
