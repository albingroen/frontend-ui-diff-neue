import { IUser, ITeam, ISubscription, IPaymentMethod } from '../types'
import { request } from '.'

export const stripeProducts = {
  default: 'prod_H3ntkTvqvQPyoA'
}

export const getProductPlans = async () => {
  const plansRes = await request.get('/billing/plans')

  return plansRes?.data?.plans?.data
}

export const getSubscriptions = async ({
  user,
  team
}: {
  user?: IUser;
  team?: ITeam;
}) => {
  if (!(user?.stripeCustomerId || team?.stripeCustomerId)) {
    return
  }

  const userOrTeam = (user?.stripeCustomerId && user) ||
    (team?.stripeCustomerId && team) || { stripeCustomerId: '' }

  const subscriptionsRes = await request.get(
    `/billing/${userOrTeam.stripeCustomerId}/subscriptions`
  )

  return subscriptionsRes?.data?.subscriptions?.data
}

export const getSubscription = (subscriptions: ISubscription[]) => {
  if (!subscriptions?.length) {
    return
  }

  return subscriptions.find(
    (sub: ISubscription) => sub.plan.product === stripeProducts.default
  )
}

export const getPaymentMethods = async ({
  user,
  type
}: {
  user: IUser;
  type: string;
}) => {
  if (!user?.stripeCustomerId) {
    return
  }

  const paymentMethodsRes = await request.get(
    `/billing/${user.stripeCustomerId}/payment-methods/${type}`
  )

  return paymentMethodsRes?.data?.paymentMethods?.data
}

export const getPaymentMethod = (paymentMethods: IPaymentMethod[]) => {
  if (!paymentMethods?.length) {
    return
  }

  return paymentMethods[0]
}
