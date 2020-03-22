import { IEmailFormValues } from '../../views/signup/components/side/components/email-form'
import { request } from '..'
import { login as loginUser } from '.'
import { AxiosResponse } from 'axios'

export const signup = async ({ name, email, password }: IEmailFormValues) => {
  let data

  try {
    const signupResult = await request.post('/auth/email/signup', { name, email, password })
    data = signupResult.data
  } catch (err) {
    return new Error(err.response.data.error)
  }

  if (data) {
    return true
  }
}

export const login = async ({ email, password }: { email: string, password: string }) => {
  let data

  try {
    const loginResult = await request.post('/auth/email/login', { email, password })
    data = loginResult.data
  } catch (err) {
    return new Error(err.response.data.error)
  }

  if (data) {
    loginUser()
  }
}

export const confirm = (userId: string): boolean => {
  request.post(`/users/${userId}/confirm`)
    .then((confirmRes: AxiosResponse) => {
      if (confirmRes?.data?.user) {
        return true
      } else {
        return false
      }
    }).catch(() => {
      return false
    })

  return false
}

export default {
  signup,
  login
}
