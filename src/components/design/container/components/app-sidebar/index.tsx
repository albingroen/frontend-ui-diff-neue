import * as React from 'react'
import { Sidebar } from '../../../..'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faUserFriends, faChartBar, faImages } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from '@primer/components'

const Item = styled.div`
  font-size: 1.35em;
  opacity: 0.6;
  text-align: center;
  height: 100%;
  width: 100%;

  &:hover {
    opacity: 0.75;
  }
`

const tooltipStyle = {
  margin: '0.85rem 1rem',
  padding: '0 0.75rem'
}

export const AppSidebar = () => {
  return (
    <Sidebar items={[
      {
        node: (
          <Tooltip style={tooltipStyle} aria-label="Dashboard">
            <Link to="/">
              <Item>
                <FontAwesomeIcon icon={faTachometerAlt} />
              </Item>
            </Link>
          </Tooltip>
        ),
        key: 1
      },
      {
        node: (
          <Tooltip style={tooltipStyle} aria-label="Statistics">
            <Link to="/">
              <Item>
                <FontAwesomeIcon icon={faChartBar} />
              </Item>
            </Link>
          </Tooltip>
        ),
        key: 2
      },
      {
        node: (
          <Tooltip style={tooltipStyle} aria-label="Teams">
            <Link to="/">
              <Item>
                <FontAwesomeIcon icon={faUserFriends} />
              </Item>
            </Link>
          </Tooltip>
        ),
        key: 3
      },
      {
        node: (
          <Tooltip style={tooltipStyle} aria-label="All images">
            <Link to="/">
              <Item>
                <FontAwesomeIcon icon={faImages} />
              </Item>
            </Link>
          </Tooltip>
        ),
        key: 2
      }

    ]} />
  )
}
