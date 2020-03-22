import * as React from 'react'
import queryString from 'query-string'
import styled from 'styled-components'
import Side from './components/side'
import Right from './components/right'
import { UserContext } from '../../context/userContext'
import auth from '../../lib/auth'
import Loading from '../../components/loading'
import Error from '../../components/error'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const Login: React.FC = () => {
  const { code, method } = queryString.parse(window.location.search)

  const [isLoading, setIsLoading] = React.useState<boolean>()
  const [error, setError] = React.useState<Error | null>()
  const { setUser } = React.useContext(UserContext)

  React.useEffect(() => {
    if (method && code && typeof method === 'string' && typeof code === 'string') {
      (async () => {
        setIsLoading(true)
        const res = await auth.social.signup(method, code)

        if (res) {
          setIsLoading(false)
          setError(res)
          setTimeout(() => {
            setError(null)
          }, 5000)
        }
      })()
    }
  }, [setUser, code, method])

  return isLoading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Side isEmail={method === 'email'} />
      <Right />
      {error && <Error error={error.message} />}
    </Wrapper>
  )
}
