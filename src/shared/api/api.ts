import axios from 'axios'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

export const $api = axios.create({
  baseURL: _BASE_URL_,
  headers: {
    Authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY)
  }
})
