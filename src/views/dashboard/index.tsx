import * as React from 'react'
import { Heading } from '@primer/components'
import { IUserContext, UserContext } from '../../context/userContext'

export const Dashboard: React.FC = () => {
  const { user } = React.useContext<IUserContext>(UserContext)

  return (
    <div>
      <Heading>Welcome, {user?.name}</Heading>
    </div>
  )
}
