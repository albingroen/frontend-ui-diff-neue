import * as React from 'react'
import { Grid } from '@primer/components'
import { ITeamMember } from '../../../types'
import { UserContext } from '../../../context/userContext'
import Member from './components/member'

interface IMembersProps {
  members: ITeamMember[];
}

export const Members: React.FC<IMembersProps> = ({ members }) => {
  const { user } = React.useContext(UserContext)

  return (
    <Grid gridGap={2} maxHeight="500px" overflowY="auto" pb={2}>
      {members?.map((member: ITeamMember) => (
        <Member
          isYou={
            typeof member._user === 'object' && member._user._id === user._id
          }
          key={
            typeof member._user === 'object' ? member._user._id : member._user
          }
          member={member}
        />
      ))}
    </Grid>
  )
}
