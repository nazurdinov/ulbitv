import { lazy } from 'react'

const ArticleDetailsPageAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error error
      resolve(import('./ArticleDetailsPage'))
    }, 1000)
  })
})

export {
  ArticleDetailsPageAsync
}
