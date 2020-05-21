import social from './social'
import email from './email'
import { request } from '..'

export const loggedIn = sessionStorage.getItem('loggedIn')

export const login = async () => {
  sessionStorage.setItem('loggedIn', 'true')
  window.location.href = '/'
}

export const logout = async () => {
  await request.post('/auth/logout')
  sessionStorage.setItem('loggedIn', '')
  window.location.href = '/'
}

const auth = {
  login,
  logout,
  loggedIn,
  social,
  email
}

export default auth
