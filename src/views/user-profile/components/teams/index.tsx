import * as React from 'react'
import Team from '../../../teams/components/team'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Heading, Grid } from '@primer/components'
import { ITeam } from '../../../../types'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

const messages = defineMessages({
  projects: {
    defaultMessage: 'Teams ({amount})',
    id: 'user.teams'
  }
})

interface ITeamsProps {
  teams: ITeam[];
}

const UserProjects: React.FC<ITeamsProps> = ({ teams }) => {
  return (
    <div>
      <Heading fontSize={2} mb={3}>
        <FontAwesomeIcon icon={faUsers} />
        <span style={{ marginLeft: '0.75rem' }}>
          <FormattedMessage
            {...messages.projects}
            values={{ amount: teams?.length || 0 }}
          />
        </span>
      </Heading>
      <Grid gridGap={2} maxHeight="500px" overflowY="auto" pb={2}>
        {teams.map((team) => (
          <Team key={team._id} team={team} />
        ))}
      </Grid>
    </div>
  )
}

export default UserProjects
