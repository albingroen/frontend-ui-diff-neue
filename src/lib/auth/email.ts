import { IEmailFormValues } from '../../views/signup/components/side/components/email-form'
import { request } from '..'
import { login } from '.'

export const signup = async ({ name, email, password }: IEmailFormValues) => {
  let data

  try {
    const signupResult = await request.post('/auth/email/signup', { name, email, password })
    data = signupResult.data
  } catch (err) {
    return new Error(err.response.data.error)
  }

  if (data) {
    login()
  }
}

export default {
  signup
}
