import * as React from 'react'
import styled from 'styled-components'

const ErrorWrapper = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: 300px;
  animation: fadeIn 0.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 3rem, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`
const ErrorContainer = styled.div`
  background-color: ${(props) => props?.theme?.colors?.red[6]};
  color: ${(props) => props?.theme?.colors.white};
  border-radius: 5px;
  padding: ${(props) => props?.theme?.space[3]}px;
`

interface IErrorProps {
  error: string
}

export const Error: React.FC<IErrorProps> = ({ error }) => (
  <ErrorWrapper>
    <ErrorContainer>{error}</ErrorContainer>
  </ErrorWrapper>
)
