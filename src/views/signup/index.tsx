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

export const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<Error | null>()
  const { setUser } = React.useContext(UserContext)

  React.useEffect(() => {
    const { code, method } = queryString.parse(window.location.search)

    if (code && typeof code === 'string' && typeof method === 'string') {
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
  }, [setUser])

  return isLoading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Side />
      <Right />
      {error && <Error error={error.message} />}
    </Wrapper>
  )
}
