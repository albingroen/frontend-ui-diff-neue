import axios from 'axios'
import { getEnv } from '../config/env'

const apiBaseUrl = getEnv()

export const request = {
  get: (path: string) => axios.get(apiBaseUrl + path),
  post: (path: string, body: any) => axios.post(apiBaseUrl + path, body),
  put: (path: string, body: any) => axios.post(apiBaseUrl + path, body),
}