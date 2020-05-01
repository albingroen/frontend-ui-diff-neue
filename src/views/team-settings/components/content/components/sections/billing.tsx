import * as React from 'react'
import { defineMessages } from 'react-intl'
import { Section, PricePlans } from '../../../../../../components'
import { ITeam } from '../../../../../../types'

const messages = defineMessages({
  subscriptionHeading: {
    defaultMessage: 'Subscription plan',
    id: 'billing.subscriptions.heading'
  },
  subscriptionLede: {
    defaultMessage: 'Upgrade, downgrade, or pause your subscriptions',
    id: 'billing.subscriptions.heading'
  }
})

interface IBillingProps {
  team: ITeam;
}

const Billing: React.FC<IBillingProps> = () => {
  return (
    <Section
      title={messages.subscriptionHeading}
      lede={messages.subscriptionLede}
    >
      <PricePlans />
    </Section>
  )
}

export default Billing
