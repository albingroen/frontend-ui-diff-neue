import * as React from 'react'
import queryString from 'query-string'
import styled from 'styled-components'
import Side from './components/side'
import Right from './components/right'
import { UserContext } from '../../context/userContext'
import auth from '../../lib/auth'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const Login: React.FC = () => {
  const { code, method } = queryString.parse(window.location.search)

  const { setUser } = React.useContext(UserContext)

  React.useEffect(() => {
    if (
      method &&
      code &&
      typeof method === 'string' &&
      typeof code === 'string'
    ) {
      (async () => {
        await auth.social.signup(method, code)
      })()
    }
  }, [setUser, code, method])

  return (
    <Wrapper>
      <Side isEmail={method === 'email'} />
      <Right />
    </Wrapper>
  )
}
