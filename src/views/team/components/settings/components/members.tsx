import * as React from 'react'
import messages from './messages'
import {
  Flex,
  Text,
  Avatar,
  Heading,
  ButtonPrimary,
  Popover,
  Relative,
  ButtonDanger
} from '@primer/components'
import { FormattedMessage, IntlShape, useIntl } from 'react-intl'
import { ITeam, ITeamMember } from '../../../../../types'
import { List, Icon, Select, RoleLabel } from '../../../../../components'
import { Section } from '../../../../../components/design/section'
import { TeamsContext } from '../../../../../context/teamsContext'
import { faEdit, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import { teamMemberRoles } from '../../../../../lib/teams'

interface IMembersProps {
  team: ITeam;
}

const Members: React.FC<IMembersProps> = ({ team }) => {
  const intl = useIntl()
  const { patchTeamMember, deleteTeamMember } = React.useContext(TeamsContext)

  return (
    <Section title={messages.headingMembers} lede={messages.ledeMembers}>
      <List
        items={team?.members?.map((member, i) => ({
          key: i,
          children: (
            <Member
              onDelete={async () => {
                await deleteTeamMember(
                  team._id,
                  typeof member._user === 'object'
                    ? member._user._id
                    : member._user
                )
              }}
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
  onDelete?: () => Promise<void>;
}

const Member: React.FC<IMemberProps> = ({
  member,
  isEditable,
  onChange,
  onDelete,
  intl
}) => {
  const [isEditing, setIsEditing] = React.useState<boolean>(false)
  const [role, setRole] = React.useState<string>(member.role)
  const [deleteIsOpen, setDeleteIsOpen] = React.useState<boolean>(false)

  const handleChange = async () => {
    if (onChange) {
      await onChange(role)
      setIsEditing(false)
    }
  }

  const handleDelete = async () => {
    if (onDelete) {
      await onDelete()
      setDeleteIsOpen(false)
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
              onChange={(value?: string) => value && setRole(value)}
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
          <Flex ml={3}>
            <Icon
              onClick={() => setIsEditing(!isEditing)}
              icon={isEditing ? faTimes : faEdit}
            />
            <Relative alignItems="center" justifyContent="center" ml={2}>
              <Icon
                onClick={() => setDeleteIsOpen(!deleteIsOpen)}
                icon={faTrash}
                color="red.5"
              />

              <Popover open={deleteIsOpen} sx={{ left: -115 }}>
                <Popover.Content mt={2} p={3}>
                  <Flex alignItems="center" justifyContent="space-between">
                    <Heading fontSize={2} color="red.5">
                      <FormattedMessage
                        {...messages.deleteMemberPopoverHeading}
                      />
                    </Heading>
                    <Icon
                      icon={faTimes}
                      onClick={() => setDeleteIsOpen(false)}
                    />
                  </Flex>
                  <Text lineHeight={1.5} opacity={0.75} mt={1} as="p">
                    <FormattedMessage {...messages.deleteMemberPopoverLede} />
                  </Text>
                  <ButtonDanger onClick={handleDelete} mt={2} width="100%">
                    <FormattedMessage {...messages.deleteMemberPopoverCta} />
                  </ButtonDanger>
                </Popover.Content>
              </Popover>
            </Relative>
          </Flex>
        )}
      </Flex>
    </Flex>
  ) : null
}

export default Members
