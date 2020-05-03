import * as React from 'react'
import { Avatar } from '@primer/components'
import { IntlShape } from 'react-intl'
import messages from './messages'
import { IUser } from '../../../../../types'

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
          <Avatar
            size={35}
            alt="profile"
            style={{ borderRadius: '50%' }}
            src={user.avatar}
          />
        ),
        key: 1,
        active: true
      }
    ]
  }
]
