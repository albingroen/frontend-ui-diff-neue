import * as React from 'react'
import styled from 'styled-components'
import { PrimerTheme } from '../../../types'

interface ISnackbarWrapperProps {
  duration: number;
  theme: PrimerTheme;
}

const SnackbarWrapper = styled.div`
  position: fixed;
  bottom: 4rem;
  right: 4rem;
  width: 300px;
  animation: fadeInOut ${(props: ISnackbarWrapperProps) => props.duration}ms
    ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
      transform: translate3d(0, 3rem, 0);
    }
    20% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    80% {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
    100% {
      opacity: 0;
      transform: translate3d(0, -3rem, 0);
    }
  }
`

type SnackbarVariant = 'success' | 'error';

interface ISnackbarContainerProps {
  variant: SnackbarVariant;
  theme: PrimerTheme;
}

const SnackbarContainer = styled.div`
  border-radius: 5px;
  line-height: 150%;
  color: ${(props: ISnackbarContainerProps) => props?.theme?.colors.white};
  padding: ${(props: ISnackbarContainerProps) => props?.theme?.space[3]}px;
  background-color: ${(props: ISnackbarContainerProps) => {
    switch (props.variant) {
      case 'success':
        return props?.theme?.colors.green[5]
      case 'error':
        return props?.theme?.colors.red[6]
    }
  }};
`

interface ISnackbarProp {
  value: string;
  variant: SnackbarVariant;
  duration?: number;
}

export const DEFAULT_SNACKBAR_DURATION = 3000

export const Snackbar: React.FC<ISnackbarProp> = ({
  value,
  variant,
  duration = DEFAULT_SNACKBAR_DURATION
}) => (
  <SnackbarWrapper duration={duration}>
    <SnackbarContainer variant={variant}>{value}</SnackbarContainer>
  </SnackbarWrapper>
)
