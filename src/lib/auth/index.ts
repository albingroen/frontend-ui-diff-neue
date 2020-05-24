import social from './social'
import email from './email'

export const loggedIn = document.cookie.includes('x-token')

const deleteAllCookies = () => {
  var cookies = document.cookie.split(';')

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i]
    var eqPos = cookie.indexOf('=')
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export const login = async (authToken?: string) => {
  if (authToken) {
    document.cookie = `x-token=${authToken};`
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
