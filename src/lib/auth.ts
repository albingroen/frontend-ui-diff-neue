import { request } from '.'

export const login = async () => {
  window.localStorage.setItem('userId', '123')
  window.location.reload()
}

export const logout = async () => {
  window.localStorage.removeItem('userId')
  window.location.reload()
}

export const getGhAuthUrl = async () => {
  const authUrl = await request.get('/login')
  return authUrl?.data?.url || null
}