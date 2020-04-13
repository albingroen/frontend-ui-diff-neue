import * as React from 'react'
import Header from './components/header'
import { PricePlans, Section } from '../../components'
import { defineMessages } from 'react-intl'
import { UserContext } from '../../context/userContext'
import { getSubscriptions, getSubscription } from '../../lib/billing'
import { ISubscription } from '../../types'

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
  const { user } = React.useContext(UserContext)
  const [subscription, setSubscription] = React.useState<ISubscription>()

  React.useEffect(() => {
    (async () => {
      const subscriptions = await getSubscriptions({ user })
      setSubscription(getSubscription(subscriptions))
    })()
  }, [user])

  return (
    <div>
      <Header />
      <Section
        title={messages.subscriptionHeading}
        lede={messages.subscriptionLede}
      >
        <PricePlans currentPlan={subscription?.plan} />
      </Section>
    </div>
  )
}
