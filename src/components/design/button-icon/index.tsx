import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled from 'styled-components'

const Icon = styled.div`
  position: absolute;
  left: ${(props) => props?.theme?.space[2]}px;
  top: 50%;
  transform: translateY(-50%);
`

interface IButtonIconProps {
  icon: IconProp;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ icon }) => {
  return (
    <Icon>
      <FontAwesomeIcon icon={icon} />
    </Icon>
  )
}
