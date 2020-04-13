import * as React from 'react'
import Header from './components/header'
import { Text, Link as StyledLink, Flex, Box } from '@primer/components'
import { PricePlans, Section } from '../../components'
import { defineMessages, FormattedMessage } from 'react-intl'
import { UserContext } from '../../context/userContext'
import { getSubscriptions, getSubscription } from '../../lib/billing'
import { ISubscription, IPlan } from '../../types'
import { Link } from 'react-router-dom'

const messages = defineMessages({
  subscriptionHeading: {
    defaultMessage: 'Personal subscription plan',
    id: 'billing.subscriptions.heading'
  },
  subscriptionLede: {
    defaultMessage: 'Upgrade, downgrade, or pause your subscriptions',
    id: 'billing.subscriptions.heading'
  },
  teamBilling: {
    defaultMessage:
      '<link>Looking for billing settings for a team? Click here</link>',
    id: 'billing.subscriptions.team-billing'
  }
})

export const Billing: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const [subscription, setSubscription] = React.useState<ISubscription>()

  React.useEffect(() => {
    const runAsync = async () => {
      const res = await getSubscriptions({ user })
      setSubscription(getSubscription(res))
    }

    if (user?._id) {
      runAsync()
    }
  }, [user])

  const onSelectPlan = (plan: IPlan) => {
    console.log(plan)
  }

  return subscription ? (
    <div>
      <Header />
      <Section
        title={messages.subscriptionHeading}
        lede={messages.subscriptionLede}
      >
        <Box mb={3}>
          <Text>
            <Flex>
              <FormattedMessage
                {...messages.teamBilling}
                values={{
                  link: (chunks: string[] | React.ReactElement[]) => (
                    <Link to="/teams">
                      <StyledLink as="p">{chunks}</StyledLink>
                    </Link>
                  )
                }}
              />
            </Flex>
          </Text>
        </Box>

        <PricePlans
          onSelectPlan={onSelectPlan}
          currentPlan={subscription.plan}
        />
      </Section>
    </div>
  ) : null
}
