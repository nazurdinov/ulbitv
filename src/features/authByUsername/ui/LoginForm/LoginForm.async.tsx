import { lazy } from 'react'

const LoginFormAsync = lazy(async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      // @ts-expect-error sdsf
      resolve(import('./LoginForm'))
    }, 1000)
  })
})

export {
  LoginFormAsync
}
