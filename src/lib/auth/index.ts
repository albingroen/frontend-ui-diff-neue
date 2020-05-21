import social from './social'
import email from './email'
import { request } from '..'

export const loggedIn = localStorage.getItem('loggedIn')

export const login = async () => {
  localStorage.setItem('loggedIn', 'true')
  window.location.href = '/'
}

export const logout = async () => {
  await request.post('/auth/logout')
  localStorage.removeItem('loggedIn')
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
