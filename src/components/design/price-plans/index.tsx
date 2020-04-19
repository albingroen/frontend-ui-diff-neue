import * as React from 'react'
import { Text, Flex } from '@primer/components'
import styled from 'styled-components'
import { IPlan } from '../../../types'
import { PricePlan, Spinner } from '../..'
import { getProductPlans } from '../../../lib/billing'

const PricePlansWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-conten: space-between;
`

interface PricePlansProps {
  currentPlan?: IPlan;
  onSelectPlan?: (plan: IPlan) => void;
}

interface IState {
  plans?: IPlan[];
  loading?: boolean;
  error?: string;
}

interface IAction {
  type: string;
  payload: string | IPlan[];
}

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case 'GET_PLANS':
      return typeof action.payload === 'object'
        ? { ...state, plans: action.payload, loading: false }
        : state
    case 'FAIL':
      return typeof action.payload === 'string'
        ? { ...state, loading: false, error: action.payload }
        : state
    default:
      return state
  }
}

export const PricePlans: React.FC<PricePlansProps> = ({
  currentPlan,
  onSelectPlan
}) => {
  const [state, dispatch] = React.useReducer(reducer, { loading: true })

  React.useEffect(() => {
    getProductPlans()
      .then((res) => {
        dispatch({
          type: 'GET_PLANS',
          payload: res
        })
      })
      .catch((err) => {
        dispatch({
          type: 'FAIL',
          payload: err.message
        })
      })
  }, [])

  return state.loading ? (
    <Flex p={3} alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  ) : state.error ? (
    <Text color="red.5">{state.error}</Text>
  ) : (
    <PricePlansWrapper>
      {state?.plans?.map((plan: IPlan, i: number) => (
        <PricePlan
          onSelectPlan={onSelectPlan}
          isActive={plan.id === currentPlan?.id}
          style={{
            margin: '0 0.5rem',
            marginLeft: i === 0 ? '0' : '0.5rem',
            marginRight: i === state?.plans?.length || 0 - 1 ? '0' : '0.5rem'
          }}
          key={plan.id}
          plan={plan}
        />
      ))}
    </PricePlansWrapper>
  )
}
