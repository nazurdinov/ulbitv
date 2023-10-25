import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const userAuth = localStorage.getItem(USER_LOCALSTORAGE_KEY) || ''

export const $api = () => {
  return axios.create({
    baseURL: _BASE_URL_,
    headers: {
      Authorization: userAuth
    }
  })
}
