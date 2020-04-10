import * as React from 'react'
import { Heading, Text } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'
import { ViewHeader } from '../../../../components'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Billing',
    id: 'billing.header.heading'
  },
  lede: {
    defaultMessage: 'Manage your subsciptions and upgrade your plan',
    id: 'billing.header.lede'
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
