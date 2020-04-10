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
        active: window.location.pathname === '/'
      },
      {
        value: intl.formatMessage(messages.auditLog),
        link: '/audit-log',
        key: 3,
        active: window.location.pathname === '/audit-log'
      },

      {
        value: intl.formatMessage(messages.billing),
        link: '/billing',
        key: 5,
        active: window.location.pathname === '/billing'
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
