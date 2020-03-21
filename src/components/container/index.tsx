import * as React from 'react'
import styled from 'styled-components'
import { AppNavigation } from './components/app-navigation'
import { loggedIn } from '../../lib/auth'
import Loading from '../loading'

const Content = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => `${props?.theme?.space[4]}px ${props?.theme?.space[2]}px`};
`

interface IContainerProps {
  children?: React.ReactNode;
  loading?: boolean;
}

export const Container: React.FC<IContainerProps> = ({ children, loading }) => {
  const isOnSignup = window.location.pathname.includes('/signup')
  const withoutTemplate = isOnSignup || !loggedIn

  return loading ? (
    <Loading />
  ) : withoutTemplate ? (
    <>{children}</>
  ) : (
    <>
      <AppNavigation />
      <Content>{children}</Content>
    </>
  )
}
