import * as React from 'react'
import { Flex, Text, Avatar, Label, Heading } from '@primer/components'
import { Section } from '../../../../../components/design/section'
import { teamMemberRoles } from '../../../../../lib/teams'
import { List } from '../../../../../components'
import { ITeam } from '../../../../../types'
import messages from './messages'

interface IMembersProps {
  team: ITeam;
}

const Members: React.FC<IMembersProps> = ({ team }) => {
  return (
    <Section title={messages.headingMembers} lede={messages.ledeMembers}>
      <List
        items={team?.members?.map(({ _user: user, role }, i) => ({
          key: i,
          children: typeof user === 'object' && (
            <Flex alignItems="center" justifyContent="space-between">
              <Flex alignItems="center">
                <Avatar src={user?.avatar} mr={2} size={34} />
                <div>
                  <Heading fontSize={2}>{user.name}</Heading>
                  <Text fontSize={1}>{user.email}</Text>
                </div>
              </Flex>
              <Label bg={role === teamMemberRoles.ADMIN ? 'blue.4' : 'gray.3'}>
                {role}
              </Label>
            </Flex>
          )
        }))}
      />
    </Section>
  )
}

export default Members
