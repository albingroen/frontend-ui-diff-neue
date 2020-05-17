import * as React from 'react'
import { Heading, Text } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'
import { ViewHeader } from '../../../../components'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Create a new team',
    id: 'new-team.header.heading'
  },
  lede: {
    defaultMessage:
      'To create a new team just fill out and submit the form below',
    id: 'new-team.header.lede'
  }
})

const Header: React.FC = () => (
  <ViewHeader>
    <Heading mb={2}>
      <FormattedMessage {...messages.heading} />
    </Heading>

    <Text>
      <FormattedMessage {...messages.lede} />
    </Text>
  </ViewHeader>
)

export default Header
