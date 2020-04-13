import * as React from 'react'
import styled from 'styled-components'
import { IPlan } from '../../../types'
import { PricePlan } from '../..'
import { getProductPlans } from '../../../lib/billing'

const PricePlansWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-conten: space-between;
`

interface PricePlansProps {
  currentPlan?: IPlan;
}

export const PricePlans: React.FC<PricePlansProps> = ({ currentPlan }) => {
  const [plans, setPlans] = React.useState<IPlan[]>([])

  React.useEffect(() => {
    (async () => {
      setPlans(await getProductPlans())
    })()
  }, [])

  return (
    <PricePlansWrapper>
      {plans?.map((plan: IPlan, i: number) => (
        <PricePlan
          isActive={plan.id === currentPlan?.id}
          style={{
            margin: '0 0.5rem',
            marginLeft: i === 0 ? '0' : '0.5rem',
            marginRight: i === plans.length - 1 ? '0' : '0.5rem'
          }}
          key={plan.id}
          plan={plan}
        />
      ))}
    </PricePlansWrapper>
  )
}
