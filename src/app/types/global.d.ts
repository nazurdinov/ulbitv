declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  const svg: string
  export default svg
}

declare const _IS_DEV_: boolean
declare const _BASE_URL_: string
