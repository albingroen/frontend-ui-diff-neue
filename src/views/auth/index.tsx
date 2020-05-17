import * as React from 'react'
import queryString from 'query-string'
import { useHistory } from 'react-router-dom'
import { Loading } from '../../components/design/loading'
import { Snackbar } from '../../components'
import auth from '../../lib/auth'

export const Auth: React.FC = () => {
  const { code, method, invitationId, state } = queryString.parse(
    window.location.search
  )
  const invitationIdFromState =
    typeof state === 'string' && state.split('invitationId')[1]

  const history = useHistory()
  const [error, setError] = React.useState<Error | null>()

  React.useEffect(() => {
    if (
      method &&
      code &&
      typeof method === 'string' &&
      typeof code === 'string'
    ) {
      (async () => {
        let res

        if (typeof invitationId === 'string') {
          res = await auth.social.signup(method, code, invitationId)
        } else if (invitationIdFromState) {
          res = await auth.social.signup(method, code, invitationIdFromState)
        } else {
          res = await auth.social.signup(method, code)
        }

        if (res) {
          setError(res)
          setTimeout(() => {
            setError(null)
            history.push('/login')
          }, 5000)
        }
      })()
    }
  }, [history, code, method, invitationId, invitationIdFromState])

  return (
    <>
      <Loading />
      {error && <Snackbar variant="error" value={error.message} />}
    </>
  )
}
