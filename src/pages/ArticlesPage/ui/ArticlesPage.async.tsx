import { lazy } from 'react'

const ArticlesPageAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error error
      resolve(import('./ArticlesPage'))
    }, 1000)
  })
})
export {
  ArticlesPageAsync
}
