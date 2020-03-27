import axios, { AxiosRequestConfig } from 'axios'
import { getEnv } from '../config/env'

const apiBaseUrl = getEnv()

export const request = {
  get: (path: string, config?: AxiosRequestConfig) => axios.get(apiBaseUrl + path, {
    ...config,
    withCredentials: true
  }),
  post: (path: string, body?: any, config?: AxiosRequestConfig) => axios.post(apiBaseUrl + path, body, {
    ...config,
    withCredentials: true
  }),
  put: (path: string, body?: any, config?: AxiosRequestConfig) => axios.post(apiBaseUrl + path, body, {
    ...config,
    withCredentials: true
  })
}

export const errorMessages: {[key: string]: string} = {
  'email-mismatch': 'This email already exists',
  'lacking-password': 'Password is not secure enough',
  'missing-credentials': 'Please fill in the required fields',
  'invalid-credentials': 'Email or password is incorrect',
  'email-not-confirmed': 'Email is not verified yet',
  'email-already-confirmed': 'Email is already verified',
  'passwords-not-matching': 'Passwords do not match',
  'link-expired': 'This link has unfortunately expired',
  'reset-password-link-expired': 'The possibility to reset your password has expired. Please request a new link and try again.',
  unavailable: 'This is not longer available',
  network: 'Something went wrong. Try again later'
}
