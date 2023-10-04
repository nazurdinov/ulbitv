import { lazy } from 'react'

const AboutPageAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error sdsf
      resolve(import('pages/AboutPage/ui/AboutPage'))
    }, 1000)
  })
})

export {
  AboutPageAsync
}
