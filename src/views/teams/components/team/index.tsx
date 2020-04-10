import * as React from 'react'
import { ITeam, ITeamMember } from '../../../../types'
import { Card } from '../../../../components'
import { Flex, Avatar, Box, Heading, AvatarStack } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'
import moment from 'moment'
import { Link } from 'react-router-dom'

const messages = defineMessages({
  memberAmount: {
    defaultMessage: '{memberAmount} members',
    id: 'teams.list.team.member-amount.multiple'
  },
  memberAmountSingle: {
    defaultMessage: '{memberAmount} member',
    id: 'teams.list.team.member-amount.single'
  },
  createdAt: {
    defaultMessage: 'Created {ago}',
    id: 'teams.list.team.created-ago'
  }
})

interface ITeamProps {
  team: ITeam;
}

const Team: React.FC<ITeamProps> = ({ team }) => (
  <Link to={`/teams/${team._id}`} key={team._id}>
    <Card shadowed clickable>
      <Flex alignItems="center">
        <Avatar size={70} mr={2} src={team.logo} />
        <Flex flexDirection="column" width="auto" flex={1} ml={1}>
          <Flex justifyContent="space-between" alignItems="center" mb={1}>
            <Heading fontSize={2}>{team.name}</Heading>
            <Heading fontSize={1} opacity={0.5}>
              <FormattedMessage
                {...messages.createdAt}
                values={{ ago: moment(team.createdAt).fromNow() }}
              />
            </Heading>
          </Flex>

          <Box>
            <Heading mb={1} fontSize={1} fontWeight="normal">
              <FormattedMessage
                {...(team.members.length === 1
                  ? messages.memberAmountSingle
                  : messages.memberAmount)}
                values={{ memberAmount: team.members.length }}
              />
            </Heading>
            <AvatarStack>
              {team.members.map((member: ITeamMember) =>
                typeof member._user === 'object' ? (
                  <img
                    src={member._user.avatar}
                    alt={member._user.name}
                    key={member._id}
                  />
                ) : null
              )}
            </AvatarStack>
          </Box>
        </Flex>
      </Flex>
    </Card>
  </Link>
)

export default Team
