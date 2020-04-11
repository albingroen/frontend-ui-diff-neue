import * as React from 'react'
import { ITeamMember } from '../../../types'
import Member from './components/member'
import { Grid } from '@primer/components'
import { UserContext } from '../../../context/userContext'

interface IMembersProps {
  members: ITeamMember[];
}

export const Members: React.FC<IMembersProps> = ({ members }) => {
  const { user } = React.useContext(UserContext)

  return (
    <Grid gridGap={2}>
      {members?.map((member: ITeamMember) => (
        <Member
          isYou={
            typeof member._user === 'object' && member._user._id === user._id
          }
          key={member._id}
          member={member}
        />
      ))}
    </Grid>
  )
}
