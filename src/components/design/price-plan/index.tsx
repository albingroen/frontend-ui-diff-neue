import * as React from 'react'
import { Heading, Flex, Text, ButtonPrimary, Box } from '@primer/components'
import { FormattedNumber, defineMessages, FormattedMessage } from 'react-intl'
import { IPlan } from '../../../types'
import { Card } from '../card'

const messages = defineMessages({
  userLimit: {
    defaultMessage: 'Users: {userLimit}',
    id: 'component.design.price-plan.user-limit'
  },
  price: {
    defaultMessage: 'per user/{unit}',
    id: 'component.design.price-plan.price'
  },
  cta: {
    defaultMessage: 'Start free trial',
    id: 'component.design.price-plan.cta'
  },
  ctaFree: {
    defaultMessage: 'Get started now',
    id: 'component.design.price-plan.cta'
  },
  currentPlan: {
    defaultMessage: 'This is your current plan',
    id: 'component.design.price-plan.current-plan'
  }
})

interface IPricePlan {
  plan: IPlan;
  onSelectPlan?: (plan: IPlan) => void;
  isActive?: boolean;
  style?: React.CSSProperties;
}

export const PricePlan: React.FC<IPricePlan> = ({
  isActive,
  plan,
  onSelectPlan,
  style
}) => {
  return (
    <Card bordered isActive={isActive} style={style}>
      <Flex alignItems="flex-start" justifyContent="space-between">
        <Heading fontSize={3} lineHeight={0.875} mb={2}>
          {plan?.nickname}
        </Heading>
      </Flex>

      <Text opacity={0.75} lineHeight={1.5}>
        {plan?.metadata?.description}
      </Text>

      <Flex alignItems="center" my={3}>
        <Heading mr={1}>
          <FormattedNumber
            value={plan?.amount / 100}
            currency={plan?.currency}
            style="currency"
            minimumFractionDigits={0}
            maximumFractionDigits={0}
          />
        </Heading>

        <Heading fontSize={2} fontWeight="normal">
          <FormattedMessage
            {...messages.price}
            values={{ unit: plan?.interval }}
          />
        </Heading>
      </Flex>

      {!isActive ? (
        <ButtonPrimary
          style={{ width: '100%' }}
          onClick={() => {
            if (onSelectPlan) {
              onSelectPlan(plan)
            }
          }}
        >
          <FormattedMessage
            {...(plan?.id === 'free' ? messages.ctaFree : messages.cta)}
          />
        </ButtonPrimary>
      ) : (
        <Box py={1}>
          <Text color="green.5">
            <FormattedMessage {...messages.currentPlan} />
          </Text>
        </Box>
      )}
    </Card>
  )
}
