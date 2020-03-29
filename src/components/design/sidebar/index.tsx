import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ISidebarProps, ISideBarItem } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { logout } from '../../../lib/auth'
import styles from '../../../lib/styles'

const SidebarWrapper = styled.div`
  background-color: #eef0f2;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${(props) => props?.theme?.space[2]}px;
  max-width: 80px;
  position: relative;
  height: 100vh;
`

const LogoWrapper = styled.div`
  background: #111;
  width: 100%;
  color: white;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2em;
  text-align: center;
  cursor: pointer;
`

const LogoutButton = styled.div`
  position: absolute;
  color: black;
  font-size: 1.35em;
  bottom: 1.5rem;
  opacity: 0.6;
  text-align: center;
  cursor: pointer;
  transition: ${styles.transition};
  &:hover {
    color: ${(props) => props?.theme?.colors?.red[6]};
    transition: ${styles.transition};
  }
`

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {
  return (
    <SidebarWrapper>
      <Link
        to="/"
        style={{
          width: '100%',
          marginBottom: '1rem'
        }}
      >
        <LogoWrapper>
          <h4>U</h4>
        </LogoWrapper>
      </Link>
      {items.map((item: ISideBarItem) => (
        <React.Fragment key={item.key}>{item.node}</React.Fragment>
      ))}

      <LogoutButton onClick={() => logout()}>
        <FontAwesomeIcon icon={faPowerOff} />
      </LogoutButton>
    </SidebarWrapper>
  )
}
