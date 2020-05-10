import * as React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Heading, Flex, Link as StyledLink } from '@primer/components'
import { ITeam } from '../../../../types'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { Members } from '../../../../components'

const messages = defineMessages({
  members: {
    defaultMessage: 'Members ({amount})',
    id: 'team.members'
  },
  manageMembers: {
    defaultMessage: 'Manage',
    id: 'team.members.manage'
  }
})

interface ITeamMembersProps {
  team: ITeam;
  isAdmin: boolean;
}

const TeamMembers: React.FC<ITeamMembersProps> = ({ team, isAdmin }) => {
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-between" mb={3}>
        <Heading fontSize={2}>
          <FontAwesomeIcon icon={faUsers} />
          <span style={{ marginLeft: '0.75rem' }}>
            <FormattedMessage
              {...messages.members}
              values={{ amount: team?.members?.length || 0 }}
            />
          </span>
        </Heading>
        {isAdmin && (
          <Link to={`/teams/${team?._id}/settings`}>
            <StyledLink as="p" fontSize={2}>
              <FormattedMessage {...messages.manageMembers} />
            </StyledLink>
          </Link>
        )}
      </Flex>
      <Members members={team?.members} />
    </div>
  )
}

export default TeamMembers
