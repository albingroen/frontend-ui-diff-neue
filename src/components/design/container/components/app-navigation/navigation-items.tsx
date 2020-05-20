import * as React from 'react'
import messages from './messages'
import { Avatar, Dropdown } from '@primer/components'
import { IUser } from '../../../../../types'
import { IntlShape, FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'
import { logout } from '../../../../../lib/auth'

export default (intl: IntlShape, user: IUser) => [
  {
    key: 1,
    items: [
      {
        value: intl.formatMessage(messages.start),
        link: '/',
        key: 1,
        active: window.location.pathname === '/',
        style: {
          paddingRight: '1rem'
        }
      },
      {
        value: intl.formatMessage(messages.teams),
        link: '/teams',
        key: 2,
        active: window.location.pathname === '/teams',
        style: {
          padding: '0 1rem'
        }
      },
      {
        value: intl.formatMessage(messages.newProject),
        link: '/new-project',
        key: 3,
        active: window.location.pathname === '/new-project',
        style: {
          paddingLeft: '1rem'
        }
      }
    ]
  },
  {
    key: 2,
    items: [
      {
        value: (
          <Dropdown overlay>
            <summary>
              <Avatar
                size={35}
                alt="profile"
                sx={{ borderRadius: 3, cursor: 'pointer' }}
                src={user.avatar}
              />
            </summary>
            <Dropdown.Menu p={0} sx={{ border: 'none' }}>
              <Link to="/profile">
                <Dropdown.Item
                  sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                  px={2}
                  py={1}
                >
                  <FormattedMessage {...messages.dropdownProfile} />
                </Dropdown.Item>
              </Link>
              <Link to="/teams">
                <Dropdown.Item
                  sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                  px={2}
                  py={1}
                >
                  <FormattedMessage {...messages.dropdownTeams} />
                </Dropdown.Item>
              </Link>
              <Link to="/profile/settings">
                <Dropdown.Item
                  sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                  px={2}
                  py={1}
                >
                  <FormattedMessage {...messages.dropdownSettings} />
                </Dropdown.Item>
              </Link>
              <Dropdown.Item
                sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                px={2}
                py={1}
                color="red.5"
                onClick={() => logout()}
              >
                <FormattedMessage {...messages.dropdownLogOut} />
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        ),
        key: 1,
        active: true
      }
    ]
  }
]
