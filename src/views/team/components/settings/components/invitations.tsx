import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { TeamsContext } from '../../../../../context/teamsContext'
import { teamMemberRoles } from '../../../../../lib/teams'
import { request } from '../../../../../lib'
import { ITeamInvitation, TeamMemberRole, ITeam } from '../../../../../types'
import {
  Section,
  List,
  Input,
  Select,
  RoleLabel
} from '../../../../../components'
import {
  Box,
  Heading,
  ButtonPrimary,
  Flex,
  Avatar,
  Text
} from '@primer/components'
import gravatar from 'gravatar'
import moment from 'moment'
import messages from './messages'

interface IInvitationsProps {
  team: ITeam;
}

const Invitations: React.FC<IInvitationsProps> = ({ team }) => {
  const [invitations, setInvitations] = React.useState<ITeamInvitation[]>([])
  const { inviteTeamMember } = React.useContext(TeamsContext)

  React.useEffect(() => {
    request.get(`/teams/${team?._id}/invitations`).then((res) => {
      setInvitations(res.data.invitations)
    })
  }, [team])

  return (
    <Section
      title={messages.headingInvitations}
      lede={messages.ledeInvitations}
    >
      <List
        items={invitations?.map((inv) => ({
          key: inv._id,
          children: <Invitation invitation={inv} />
        }))}
      />

      <Box mt={4}>
        <Heading mb={3} fontSize={3}>
          <FormattedMessage {...messages.headingInviteMember} />
        </Heading>
        <InviteMember
          onSubmit={async (values) => {
            const invitation = await inviteTeamMember(team._id, values)

            if (invitation !== undefined) {
              setInvitations([...invitations, invitation])
            }
          }}
        />
      </Box>
    </Section>
  )
}

export default Invitations

interface IInviteMemberProps {
  onSubmit: (values: { email: string; role: TeamMemberRole | string }) => void;
}

const InviteMember: React.FC<IInviteMemberProps> = ({ onSubmit }) => {
  const intl = useIntl()
  const [email, setEmail] = React.useState<string>()
  const [role, setRole] = React.useState<TeamMemberRole | string>(
    teamMemberRoles.USER
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && role) {
      onSubmit({ email, role })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={intl.formatMessage(messages.placeholderInviteMemberEmail)}
        description={intl.formatMessage(messages.descriptionInviteMember)}
        label={intl.formatMessage(messages.labelInviteTeamMemberEmail)}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        required
      />
      <Select
        mt={4}
        ariaLabel="role"
        title={intl.formatMessage(messages.roleDropdownTitleWithType, { role })}
        onChange={(role?: string) => role && setRole(role)}
        options={[
          {
            key: 0,
            title: intl.formatMessage(messages.roleDropdownTitle),
            options: Object.values(teamMemberRoles).map((role) => ({
              key: role,
              text: role,
              value: role
            }))
          }
        ]}
      />
      <ButtonPrimary width="100%" mt={4} disabled={!email}>
        <FormattedMessage {...messages.ctaInviteTeamMember} />
      </ButtonPrimary>
    </form>
  )
}

interface IInvitationProps {
  invitation: ITeamInvitation;
}

const Invitation: React.FC<IInvitationProps> = ({ invitation }) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Avatar src={gravatar.url(invitation.email)} mr={2} size={34} />
        <div>
          <Heading fontSize={2}>{invitation.email}</Heading>
          <Text fontSize={1}>
            <FormattedMessage
              {...messages.invitedTeamMemberSince}
              values={{ fromNow: moment(invitation.createdAt).fromNow() }}
            />
          </Text>
        </div>
      </Flex>
      <RoleLabel role={invitation.role} />
    </Flex>
  )
}
