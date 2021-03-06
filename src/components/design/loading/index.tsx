import * as React from 'react'
import styled from 'styled-components'

const LoadingBoundary = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props?.theme?.colors?.black};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  zindex: 2;
`

const Spinner = styled.div`
  height: 75px;
  width: 75px;
  border: 5px solid ${(props) => props?.theme?.colors?.green[3]};
  border-right-color: ${(props) => props?.theme?.colors?.black};
  border-radius: 50%;
  animation: rotate 1s infinite;

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

export const Loading: React.FC = () => (
  <LoadingBoundary>
    <Spinner />
  </LoadingBoundary>
)
