import * as React from 'react'
import queryString from 'query-string'
import { UserContext } from '../../context/userContext'
import auth from '../../lib/auth'
import Loading from '../../components/loading'

export const Auth: React.FC = () => {
  const { code, method } = queryString.parse(window.location.search)

  const { setUser } = React.useContext(UserContext)

  React.useEffect(() => {
    if (method && code && typeof method === 'string' && typeof code === 'string') {
      (async () => {
        await auth.social.signup(method, code)
      })()
    }
  }, [setUser, code, method])

  return (
    <Loading />
  )
}
