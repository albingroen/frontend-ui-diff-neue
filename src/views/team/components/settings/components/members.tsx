import * as React from 'react'
import messages from './messages'
import { Flex, Text, Avatar, Heading, ButtonPrimary } from '@primer/components'
import { FormattedMessage, IntlShape, useIntl } from 'react-intl'
import { ITeam, ITeamMember } from '../../../../../types'
import { List, Icon, Select, RoleLabel } from '../../../../../components'
import { Section } from '../../../../../components/design/section'
import { TeamsContext } from '../../../../../context/teamsContext'
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons'
import { teamMemberRoles } from '../../../../../lib/teams'

interface IMembersProps {
  team: ITeam;
}

const Members: React.FC<IMembersProps> = ({ team }) => {
  const intl = useIntl()
  const { patchTeamMember } = React.useContext(TeamsContext)

  return (
    <Section title={messages.headingMembers} lede={messages.ledeMembers}>
      <List
        items={team?.members?.map((member, i) => ({
          key: i,
          children: (
            <Member
              onChange={async (role) => {
                await patchTeamMember(
                  team._id,
                  typeof member._user === 'object'
                    ? member._user._id
                    : member._user,
                  { role }
                )
              }}
              intl={intl}
              isEditable
              key={i}
              member={member}
            />
          )
        }))}
      />
    </Section>
  )
}

interface IMemberProps {
  member: ITeamMember;
  intl: IntlShape;
  isEditable?: boolean;
  onChange?: (role: string) => Promise<void>;
}

const Member: React.FC<IMemberProps> = ({
  member,
  isEditable,
  onChange,
  intl
}) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [role, setRole] = React.useState<string>(member.role)

  const handleChange = async () => {
    if (onChange) {
      await onChange(role)
      setIsEditing(false)
    }
  }

  return typeof member._user === 'object' ? (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Avatar src={member._user?.avatar} mr={2} size={34} />
        <div>
          <Heading fontSize={2}>{member._user.name}</Heading>
          <Text fontSize={1}>{member._user.email}</Text>
        </div>
      </Flex>
      <Flex alignItems="center">
        {isEditing && isEditable ? (
          <Flex alignItems="center">
            <Select
              value={role}
              title={role}
              ariaLabel="member-role"
              onChange={(value) => value && setRole(value)}
              options={[
                {
                  title: intl.formatMessage(messages.roleDropdownTitle),
                  key: 0,
                  options: Object.values(teamMemberRoles).map((role) => ({
                    value: role,
                    text: role,
                    key: role
                  }))
                }
              ]}
            />

            {member.role !== role && (
              <ButtonPrimary onClick={handleChange} variant="small" ml={2}>
                <FormattedMessage {...messages.ctaSaveMember} />
              </ButtonPrimary>
            )}
          </Flex>
        ) : (
          <RoleLabel role={member.role} />
        )}

        {isEditable && (
          <Icon
            onClick={() => setIsEditing(!isEditing)}
            icon={isEditing ? faTimes : faEdit}
            ml={3}
          />
        )}
      </Flex>
    </Flex>
  ) : null
}

export default Members
