import * as React from 'react'
import { Box } from '@primer/components'
import styled, { css } from 'styled-components'

interface ICardProps {
  children: React.ReactNode;
  clickable?: boolean;
  className?: string;
  bordered?: boolean;
  shadowed?: boolean;
  style?: React.CSSProperties;
}

const StyledBox = styled(Box)`
  transition: ${(props) => props?.theme?.transitions?.default};
  border-radius: ${(props) => props?.theme?.radii[2]};

  ${(props: ICardProps) =>
    props?.shadowed &&
    css`
      box-shadow: ${(tprops: any) => tprops?.theme?.shadows?.small};
    `}

  ${(props: ICardProps) =>
    props?.bordered &&
    css`
      border: 1px solid ${(props) => props?.theme?.colors?.border?.grayLight};
    `}

  ${(props: ICardProps) =>
    props?.clickable &&
    css`
      &:hover {
        background: #f9f9f9;
        transition: ${(tprops: any) => tprops?.theme.transitions?.default};
      }

      &:active {
        background: #f5f0f0;
        transition: ${(tprops: any) => tprops?.theme?.transitions?.default};
      }
    `}
`

export const Card: React.FC<ICardProps> = ({
  children,
  clickable,
  className,
  shadowed,
  bordered,
  style
}) => {
  return (
    <StyledBox
      clickable={clickable}
      shadowed={shadowed}
      p={3}
      bg="white"
      style={style}
      className={className}
      bordered={bordered}
    >
      {children}
    </StyledBox>
  )
}
