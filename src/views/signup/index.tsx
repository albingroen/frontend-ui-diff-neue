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

export const Signup: React.FC = () => {
  const { setUser } = React.useContext(UserContext)
  const { code, method, invitationId } = queryString.parse(
    window.location.search
  )

  React.useEffect(() => {
    if (
      method &&
      code &&
      typeof method === 'string' &&
      typeof code === 'string'
    ) {
      (async () => {
        if (typeof invitationId === 'string') {
          await auth.social.signup(method, code, invitationId)
        } else {
          await auth.social.signup(method, code)
        }
      })()
    }
  }, [setUser, code, method, invitationId])

  return (
    <Wrapper>
      <Side
        isEmail={method === 'email'}
        invitationId={
          typeof invitationId === 'string' ? invitationId : undefined
        }
      />
      <Right />
    </Wrapper>
  )
}
