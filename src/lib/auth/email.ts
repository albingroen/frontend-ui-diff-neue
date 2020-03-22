import { IEmailFormValues } from '../../views/signup/components/side/components/email-form'
import { request } from '..'
import { login as loginUser } from '.'

export const signup = async ({ name, email, password }: IEmailFormValues) => {
  let data

  try {
    const signupResult = await request.post('/auth/email/signup', { name, email, password })
    data = signupResult.data
  } catch (err) {
    return new Error(err.response.data.error)
  }

  if (data) {
    loginUser()
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

export default {
  signup,
  login
}
