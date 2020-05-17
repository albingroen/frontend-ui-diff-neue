import * as React from 'react'
import InvitationCard from './components/invitation-card'
import { Flex } from '@primer/components'
import { ITeamInvitation } from '../../types'
import { Loading, Logo } from '../../components'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { getInvitation } from '../../lib/invitation'

export const Invitation: React.FC<RouteComponentProps> = ({ match }) => {
  const { id } = match.params as any
  const [loading, setLoading] = React.useState<boolean>(true)
  const [invitation, setInvitation] = React.useState<ITeamInvitation>()

  React.useEffect(() => {
    (async () => {
      const result = await getInvitation(id)
      setInvitation(result)
      setLoading(false)
    })()
  }, [id])

  return loading ? (
    <Loading />
  ) : invitation ? (
    <Flex
      justifyContent="center"
      alignItems="center"
      height="80vh"
      flexDirection="column"
    >
      <Logo width="50px" style={{ opacity: 0.1 }} />
      <InvitationCard invitation={invitation} />
    </Flex>
  ) : (
    <Redirect to="/" />
  )
}
