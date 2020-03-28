import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ISidebarProps, ISideBarItem } from './types'

const SidebarWrapper = styled.div`
  background-color: #eef0f2;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${props => props?.theme?.space[2]}px;
  max-width: 80px;
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

export const Sidebar: React.FC<ISidebarProps> = ({ items }) => {
  return (
    <SidebarWrapper>
      <Link to="/" style={{
        width: '100%',
        marginBottom: '1rem'
      }}>
        <LogoWrapper>
          <h4>U</h4>
        </LogoWrapper>
      </Link>
      {items.map((item: ISideBarItem) => (
        item.node
      ))}
    </SidebarWrapper>
  )
}
