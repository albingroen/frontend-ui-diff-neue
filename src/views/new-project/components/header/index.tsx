import { ViewHeader } from '../../../../components'
import React from 'react'
import { Heading, Text } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Create a new project',
    id: 'new-project.header.heading'
  },
  lede: {
    defaultMessage:
      'To create a new project just fill out and submit the form below',
    id: 'new-project.header.lede'
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
