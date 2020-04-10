import { ViewHeader } from '../../../../components'
import React from 'react'
import { Heading, Text } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Your teams',
    id: 'teams.header.heading'
  },
  lede: {
    defaultMessage: 'Here are your teams you are currently a part of',
    id: 'teams.header.lede'
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
