import * as React from 'react'
import Header from './components/header'
import { TeamsContext } from '../../context/teamsContext'
import {
  Grid,
  Avatar,
  Heading,
  Flex,
  AvatarStack,
  Box
} from '@primer/components'
import { Card } from '../../components'
import { ITeamMember } from '../../types'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  memberAmount: {
    defaultMessage: '{memberAmount} members',
    id: 'teams.team.member-amount.multiple'
  },
  memberAmountSingle: {
    defaultMessage: '{memberAmount} member',
    id: 'teams.team.member-amount.single'
  }
})

export const Teams = () => {
  const { teams, teamsById } = React.useContext(TeamsContext)

  return (
    <div>
      <Header />

      <Grid mt={3} gridTemplateColumns="repeat(3, auto)" gridGap={3}>
        {teams.map((id: string) => {
          const team = teamsById[id]

          return (
            <Card shadowed key={id} clickable>
              <Flex alignItems="center">
                <Avatar size={80} mr={2} src={team.logo} />
                <Box width="auto" ml={1} style={{ flex: 1 }}>
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Heading fontSize={3}>{team.name}</Heading>
                    <Heading fontSize={1} opacity={0.5}>
                      <strong>Created</strong>: 5 years ago
                    </Heading>
                  </Flex>

                  <div>
                    <Heading mb={1} fontSize={1} fontWeight="normal">
                      <FormattedMessage
                        {...(team.members.length === 1
                          ? messages.memberAmountSingle
                          : messages.memberAmount)}
                        values={{ memberAmount: team.members.length }}
                      />
                    </Heading>
                    <AvatarStack>
                      {team.members.map((member: ITeamMember) => {
                        if (typeof member._user === 'object') {
                          return (
                            <img
                              src={member._user.avatar}
                              alt={member._user.name}
                              key={member._id}
                            />
                          )
                        } else {
                          return null
                        }
                      })}
                    </AvatarStack>
                  </div>
                </Box>
              </Flex>
            </Card>
          )
        })}
      </Grid>
    </div>
  )
}
