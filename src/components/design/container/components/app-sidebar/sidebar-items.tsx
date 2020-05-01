import * as React from 'react'
import { Link } from 'react-router-dom'
import { Tooltip } from '@primer/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTachometerAlt,
  faChartBar,
  faUserFriends,
  faImages
} from '@fortawesome/free-solid-svg-icons'
import styled, { css } from 'styled-components'
import { IntlShape, defineMessages } from 'react-intl'

const messages = defineMessages({
  tooltipDashboard: {
    defaultMessage: 'Dashboard',
    id: 'component.container.component.app-sidebar.tooltips.dashboard'
  },
  tooltipStatistics: {
    defaultMessage: 'Statistics',
    id: 'component.container.component.app-sidebar.tooltips.statistics'
  },
  tooltipTeams: {
    defaultMessage: 'Teams',
    id: 'component.container.component.app-sidebar.tooltips.teams'
  },
  tooltipAllImages: {
    defaultMessage: 'All images',
    id: 'component.container.component.app-sidebar.tooltips.all-images'
  },
  tooltipBilling: {
    defaultMessage: 'Billing',
    id: 'component.container.component.app-sidebar.tooltips.billing'
  }
})

interface IItemProps {
  active?: boolean;
}

const Item = styled.div`
  font-size: 1.35em;
  opacity: 0.6;
  text-align: center;
  height: 100%;
  width: 100%;
  &:hover {
    opacity: 0.75;
  }

  ${(props: IItemProps) =>
    props.active &&
    css`
      opacity: 1;
      color: ${(props) => props?.theme?.colors?.green[4]};
      &:hover {
        opacity: 1;
      }
    `}
`

const tooltipStyle = {
  margin: '0.85rem 1rem',
  padding: '0 0.75rem'
}

const getSidebarItems = (intl: IntlShape, location: { pathname: string }) => {
  const { pathname } = location

  return [
    {
      node: (
        <Tooltip
          style={tooltipStyle}
          aria-label={intl.formatMessage(messages.tooltipDashboard)}
        >
          <Link to="/">
            <Item active={pathname === '/'}>
              <FontAwesomeIcon icon={faTachometerAlt} />
            </Item>
          </Link>
        </Tooltip>
      ),
      key: 1
    },
    {
      node: (
        <Tooltip
          style={tooltipStyle}
          aria-label={intl.formatMessage(messages.tooltipStatistics)}
        >
          <Link to="/statistics">
            <Item active={pathname === '/statistics'}>
              <FontAwesomeIcon icon={faChartBar} />
            </Item>
          </Link>
        </Tooltip>
      ),
      key: 2
    },
    {
      node: (
        <Tooltip
          style={tooltipStyle}
          aria-label={intl.formatMessage(messages.tooltipTeams)}
        >
          <Link to="/teams">
            <Item active={pathname === '/teams'}>
              <FontAwesomeIcon icon={faUserFriends} />
            </Item>
          </Link>
        </Tooltip>
      ),
      key: 3
    },
    {
      node: (
        <Tooltip
          style={tooltipStyle}
          aria-label={intl.formatMessage(messages.tooltipAllImages)}
        >
          <Link to="/images">
            <Item active={pathname === '/images'}>
              <FontAwesomeIcon icon={faImages} />
            </Item>
          </Link>
        </Tooltip>
      ),
      key: 4
    }
  ]
}

export default getSidebarItems
