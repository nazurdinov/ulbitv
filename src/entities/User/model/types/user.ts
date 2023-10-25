export interface User {
  id: string
  username: string
}

export interface UserSchema {
  authData?: User

  readonly _inited: boolean
}
