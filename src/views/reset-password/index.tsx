import * as React from 'react'
import styled from 'styled-components'
import Side from './components/side'
import Right from './components/right'
import { RouteComponentProps } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const ResetPassword: React.FC<RouteComponentProps> = (props) => {
  return (
    <Wrapper>
      <Side {...props} />
      <Right />
    </Wrapper>
  )
}
