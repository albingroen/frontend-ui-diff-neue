import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Box } from '@primer/components'
import styled, { css } from 'styled-components'

interface IIconWrapperProps {
  isClickable?: boolean;
}

const IconWrapper = styled.i`
  ${({ isClickable }: IIconWrapperProps) =>
    isClickable &&
    css`
      cursor: pointer;
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    `}
`

interface IIconProps {
  icon: IconProp;
  onClick?: () => void;
}

export const Icon: React.FC<IIconProps & any> = ({
  icon,
  onClick,
  ...rest
}) => {
  return (
    <Box {...rest} onClick={onClick}>
      <IconWrapper isClickable={Boolean(onClick)}>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
    </Box>
  )
}
