import * as React from 'react'
import styled from 'styled-components'
import { IPlan } from '../../../types'
import { request } from '../../../lib'
import { PricePlan } from '../..'

const PricePlansWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-conten: space-between;
`

interface PricePlansProps {
  currentPlan?: IPlan;
}

export const PricePlans: React.FC<PricePlansProps> = ({ currentPlan }) => {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [plans, setPlans] = React.useState<IPlan[]>([])

  React.useEffect(() => {
    (async () => {
      setLoading(true)
      const plansRes = await request.get('/billing/plans')
      setPlans(plansRes?.data?.plans?.data)
      setLoading(false)
    })()
  }, [])

  return loading ? (
    <p>Loading...</p>
  ) : (
    <PricePlansWrapper>
      {plans.map((plan: IPlan, i: number) => (
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
