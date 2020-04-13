import styled from 'styled-components'

export const Spinner = styled.div`
  height: 50px;
  width: 50px;
  border: 5px solid ${(props) => props?.theme?.colors?.green[3]};
  border-right-color: ${(props) => props?.theme?.colors?.white};
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
