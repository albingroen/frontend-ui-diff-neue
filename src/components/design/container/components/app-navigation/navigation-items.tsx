import * as React from 'react'
import { ButtonPrimary } from '@primer/components'
import { FormattedMessage, IntlShape } from 'react-intl'
import messages from './messages'

export default (intl: IntlShape) => [
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
        value: intl.formatMessage(messages.members),
        link: '/members',
        key: 2,
        active: window.location.pathname === '/members'
      },
      {
        value: intl.formatMessage(messages.auditLog),
        link: '/audit-log',
        key: 3,
        active: window.location.pathname === '/audit-log'
      },
      {
        value: intl.formatMessage(messages.teamSettings),
        link: '/team-settings',
        key: 4,
        active: window.location.pathname === '/team-settings'
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
          <ButtonPrimary mr={2}>
            <FormattedMessage {...messages.newProject} />
          </ButtonPrimary>
        ),
        link: '/new-project',
        key: 1,
        active: true
      }
    ]
  }
]
