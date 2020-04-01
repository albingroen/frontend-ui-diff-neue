import { ViewHeader } from '../../../../components'
import React from 'react'
import { Heading, Text } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'
import { IUser } from '../../../../types'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Welcome, {user}',
    id: 'dashboard.header.heading'
  },
  lede: {
    defaultMessage:
      'Welcome back to ui-diff. Start by creating a project to get started.',
    id: 'dashboard.header.lede'
  }
})

interface IHeaderProps {
  user: IUser;
}

const Header: React.FC<IHeaderProps> = ({ user }) => (
  <ViewHeader>
    <Heading mb={2}>
      <FormattedMessage
        {...messages.heading}
        values={{
          user: user?.name
        }}
      />
    </Heading>

    <Text>
      <FormattedMessage {...messages.lede} />
    </Text>
  </ViewHeader>
)

export default Header
