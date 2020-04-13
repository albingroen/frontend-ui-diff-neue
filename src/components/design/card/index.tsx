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
  withoutPadding?: boolean;
  borderColor?: string;
  isActive?: boolean;
}

const StyledBox = styled(Box)`
  transition: ${(props) => props?.theme?.transitions?.default};
  border-radius: ${(props) => props?.theme?.radii[2]};

  ${(props: ICardProps) =>
    props?.shadowed &&
    css`
      box-shadow: 0 2px 4px 0 rgba(14, 30, 37, 0.12);
    `}

  ${(props: ICardProps) =>
    props?.bordered &&
    css`
      border: 1px solid ${(props) => props?.theme?.colors?.border?.grayLight};
    `}

  ${(props: ICardProps) =>
    props?.withoutPadding &&
    css`
      padding: 0;
    `}

  ${(props: ICardProps) =>
    props.isActive &&
    css`
      border-color: ${(themeProps) => themeProps?.theme?.colors?.green[5]};
    `}

  ${(props: ICardProps) =>
    props?.clickable &&
    css`
      cursor: pointer;

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
  style,
  withoutPadding,
  isActive
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
      withoutPadding={withoutPadding}
      isActive={isActive}
    >
      {children}
    </StyledBox>
  )
}
