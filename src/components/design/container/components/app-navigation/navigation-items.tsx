import * as React from 'react'
import { Avatar, Dropdown } from '@primer/components'
import { IntlShape } from 'react-intl'
import messages from './messages'
import { IUser } from '../../../../../types'
import { logout } from '../../../../../lib/auth'
import { Link } from 'react-router-dom'

export default (intl: IntlShape, user: IUser) => [
  {
    key: 1,
    items: [
      {
        value: intl.formatMessage(messages.projects),
        link: '/',
        key: 1,
        active: window.location.pathname === '/',
        style: {
          paddingRight: '1rem'
        }
      },
      {
        value: intl.formatMessage(messages.auditLog),
        link: '/audit-log',
        key: 2,
        active: window.location.pathname === '/audit-log',
        style: {
          paddingRight: '1rem',
          paddingLeft: '1rem'
        }
      },
      {
        value: intl.formatMessage(messages.newProject),
        link: '/new-project',
        key: 3,
        active: window.location.pathname === '/new-project',
        style: {
          paddingRight: '1rem',
          paddingLeft: '1rem'
        }
      },
      {
        value: intl.formatMessage(messages.teams),
        link: '/teams',
        key: 4,
        active: window.location.pathname === '/teams',
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
                  My profile
                </Dropdown.Item>
              </Link>
              <Link to="/teams">
                <Dropdown.Item
                  sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                  px={2}
                  py={1}
                >
                  My teams
                </Dropdown.Item>
              </Link>
              <Link to="/profile/settings">
                <Dropdown.Item
                  sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                  px={2}
                  py={1}
                >
                  Settings
                </Dropdown.Item>
              </Link>
              <Dropdown.Item
                sx={{ cursor: 'pointer', fontSize: '0.875em' }}
                px={2}
                py={1}
                color="red.5"
                onClick={() => logout()}
              >
                Log out
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
