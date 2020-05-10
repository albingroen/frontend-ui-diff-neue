import * as React from 'react'
import { Card } from '../../../card'
import { ITeamMember } from '../../../../../types'
import { Text, Heading, Flex, Avatar } from '@primer/components'
import { RoleLabel } from '../../../role-label'

interface IMemberProps {
  member: ITeamMember;
  isYou?: boolean;
  bordered?: boolean;
  shadowed?: boolean;
}

const Member: React.FC<IMemberProps> = ({
  member,
  isYou,
  bordered,
  shadowed
}) => {
  const user = member._user

  return typeof user === 'object' ? (
    <Card bordered={bordered} shadowed={shadowed}>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Avatar size={35} mr={2} src={user.avatar} />

          <div>
            <Heading fontSize={2}>
              {user.name}
              {isYou ? ' (you)' : null}
            </Heading>
            <Text fontSize={1}>{user.email}</Text>
          </div>
        </Flex>

        <RoleLabel role={member.role} />
      </Flex>
    </Card>
  ) : null
}

export default Member
