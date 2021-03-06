import axios, { AxiosRequestConfig } from 'axios'
import { getEnv } from '../config/env'

axios.defaults.withCredentials = true

const apiBaseUrl = getEnv()

export const request = {
  get: (path: string, config?: AxiosRequestConfig) =>
    axios.get(apiBaseUrl + path, {
      ...config,
      headers: {
        ...getTokens()
      }
    }),
  post: (path: string, body?: any, config?: AxiosRequestConfig) =>
    axios.post(apiBaseUrl + path, body, {
      ...config,
      headers: {
        ...getTokens()
      }
    }),
  put: (path: string, body?: any, config?: AxiosRequestConfig) =>
    axios.post(apiBaseUrl + path, body, {
      ...config,
      headers: {
        ...getTokens()
      }
    }),
  patch: (path: string, body?: any, config?: AxiosRequestConfig) =>
    axios.patch(apiBaseUrl + path, body, {
      ...config,
      headers: {
        ...getTokens()
      }
    }),
  delete: (path: string, config?: AxiosRequestConfig) =>
    axios.delete(apiBaseUrl + path, {
      ...config,
      headers: {
        ...getTokens()
      }
    })
}

const getCookie = (name: string) => {
  const cookie = document.cookie
    .split(';')
    .find((c: string) => c.includes(name))
    ?.split('=')[1]

  return cookie
}

export const getTokens = () => {
  const authToken = getCookie('x-token')

  return {
    'x-token': authToken
  }
}

export const marketingSiteUrl = 'https://ui-diff.com'

export const errorMessages: { [key: string]: string } = {
  'email-mismatch': 'This email already exists',
  'lacking-password': 'Password is not secure enough',
  'missing-credentials': 'Please fill in the required fields',
  'invalid-credentials': 'Email or password is incorrect',
  'email-not-confirmed': 'Email is not verified yet',
  'email-already-confirmed': 'Email is already verified',
  'passwords-not-matching': 'Passwords do not match',
  'link-expired': 'This link has unfortunately expired',
  'reset-password-link-expired':
    'The possibility to reset your password has expired. Please request a new link and try again.',
  unavailable: 'This is not longer available',
  network: 'Something went wrong. Try again later'
}
