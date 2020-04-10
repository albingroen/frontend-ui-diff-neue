import * as React from 'react'
import { Heading, Flex, Text, ButtonPrimary, Label } from '@primer/components'
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
  }
})

interface IPricePlan {
  plan: IPlan;
  style?: React.CSSProperties;
}

export const PricePlan: React.FC<IPricePlan> = ({ plan, style }) => {
  return (
    <Card style={style} bordered>
      <Flex alignItems="flex-start" justifyContent="space-between">
        <Heading lineHeight={0.875} mb={2}>
          {plan?.nickname}
        </Heading>
        <Label variant="large" outline>
          <FormattedMessage
            {...messages.userLimit}
            values={{
              userLimit: plan?.metadata?.userLimit
            }}
          />
        </Label>
      </Flex>

      <Text lineHeight={1.5}>{plan?.metadata?.description}</Text>

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

      <ButtonPrimary variant="large" style={{ width: '100%' }}>
        <FormattedMessage
          {...(plan?.id === 'free' ? messages.ctaFree : messages.cta)}
        />
      </ButtonPrimary>
    </Card>
  )
}
