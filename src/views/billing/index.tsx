import * as React from 'react'
import Header from './components/header'
import { PricePlans, Section } from '../../components'
import { defineMessages } from 'react-intl'

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

export const Billing: React.FC = () => {
  return (
    <div>
      <Header />
      <Section
        title={messages.subscriptionHeading}
        lede={messages.subscriptionLede}
      >
        <PricePlans />
      </Section>
    </div>
  )
}
