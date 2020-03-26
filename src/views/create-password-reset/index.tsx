import * as React from 'react'
import styled from 'styled-components'
import Side from './components/side'
import Right from './components/right'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`

export const CreatePasswordReset: React.FC = () => {
  return (
    <Wrapper>
      <Side />
      <Right />
    </Wrapper>
  )
}
