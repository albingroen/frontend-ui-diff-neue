import social from './social'
import email from './email'

export const loggedIn =
  document.cookie.includes('x-token') &&
  document.cookie.includes('x-refresh-token')

const deleteAllCookies = () => {
  var cookies = document.cookie.split(';')

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export const login = async (authToken?: string, refreshToken?: string) => {
  if (authToken && refreshToken) {
    document.cookie = `x-token=${authToken};`
    document.cookie = `x-refresh-token=${refreshToken};`
  }
  window.location.href = '/'
}

export const logout = async () => {
  deleteAllCookies()
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
