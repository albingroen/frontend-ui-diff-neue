import * as React from 'react'
import { Box, BorderBox } from '@primer/components'
import { css } from 'glamor'
import styles from '../../../lib/styles'

interface ICardProps {
  children: React.ReactNode;
  clickable?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
}

export const Card: React.FC<ICardProps> = ({
  children,
  clickable,
  bordered,
  shadowed,
  ...rest
}) => {
  const Component = bordered ? BorderBox : Box

  return (
    <Component
      p={3}
      bg="white"
      {...css({
        transition: styles.transition,
        boxShadow: shadowed && styles.boxShadow,
        borderRadius: styles.borderRadius,

        '&:hover': clickable && {
          background: '#f9f9f9',
          transition: styles.transition
        },

        '&:active': clickable && {
          background: '#f5f0f0',
          transition: styles.transition
        }
      })}
      {...rest}
    >
      {children}
    </Component>
  )
}
