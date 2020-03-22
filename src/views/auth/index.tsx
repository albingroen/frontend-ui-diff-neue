import * as React from 'react'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'
import auth from '../../lib/auth'
import Loading from '../../components/loading'
import Error from '../../components/error'

export const Auth: React.FC = () => {
  const { code, method } = queryString.parse(window.location.search)

  const history = useHistory()
  const [error, setError] = React.useState<Error | null>()

  React.useEffect(() => {
    if (method && code && typeof method === 'string' && typeof code === 'string') {
      (async () => {
        const res = await auth.social.signup(method, code)

        if (res) {
          setError(res)
          setTimeout(() => {
            setError(null)
            history.push('/login')
          }, 5000)
        }
      })()
    }
  }, [history, code, method])

  return (
    <>
      <Loading />
      {error && (
        <Error error={error.message} />
      )}
    </>
  )
}
