import { request } from '..'
import { login as loginUser } from '.'
import { IEmailFormValues } from '../../views/signup/components/side/components/email-form'

export const signup = async ({ name, email, password }: IEmailFormValues) => {
  let data

  try {
    const signupResult = await request.post('/auth/email/signup', { name, email, password })
    data = signupResult.data
  } catch (err) {
    return new Error(err?.response?.data?.error)
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
    return new Error(err?.response?.data?.error)
  }

  if (data) {
    loginUser()
  }
}

export const resetPassword = async (
  { newPassword, confirmedPassword, passwordResetId }:
  { newPassword: string, confirmedPassword: string, passwordResetId: string }
) => {
  let data

  try {
    const resetResult = await request.post('/auth/email/reset/confirm', { newPassword, confirmedPassword, passwordResetId })
    data = resetResult.data
  } catch (err) {
    return new Error(err?.response?.data?.error)
  }

  if (data) {
    return true
  }
}

export const createPasswordReset = async ({ email }: { email: string }) => {
  let data

  try {
    const resetResult = await request.post('/auth/email/reset/create', { email })
    data = resetResult.data
  } catch (err) {
    return new Error(err?.response?.data?.error)
  }

  if (data) {
    return true
  }
}

export const confirm = async (userId: string) => {
  const res = await request.post(`/users/${userId}/confirm`)

  if (res?.data?.user) {
    return true
  } else {
    return false
  }
}

export default {
  signup,
  login,
  resetPassword,
  createPasswordReset
}
