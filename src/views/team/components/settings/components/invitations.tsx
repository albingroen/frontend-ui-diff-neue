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
  RoleLabel,
  Icon
} from '../../../../../components'
import {
  Box,
  Heading,
  ButtonPrimary,
  Flex,
  Avatar,
  Text,
  Relative,
  Popover,
  ButtonDanger
} from '@primer/components'
import gravatar from 'gravatar'
import moment from 'moment'
import messages from './messages'
import { faTrash, faTimes } from '@fortawesome/free-solid-svg-icons'

interface IInvitationsProps {
  team: ITeam;
}

const Invitations: React.FC<IInvitationsProps> = ({ team }) => {
  const [invitations, setInvitations] = React.useState<ITeamInvitation[]>([])
  const { inviteTeamMember, deleteTeamMemberInvitation } = React.useContext(
    TeamsContext
  )

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
        items={invitations?.map((invitation) => ({
          key: invitation._id,
          children: (
            <Invitation
              onDelete={async () => {
                if (await deleteTeamMemberInvitation(invitation._id)) {
                  setInvitations(
                    invitations.filter((i) => i._id !== invitation._id)
                  )
                }
              }}
              invitation={invitation}
            />
          )
        }))}
      />

      <Box mt={invitations?.length ? 4 : 0}>
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
  const [email, setEmail] = React.useState<string>('')
  const [role, setRole] = React.useState<TeamMemberRole | string>(
    teamMemberRoles.USER
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && role) {
      onSubmit({ email, role })
      setEmail('')
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
  onDelete: () => Promise<void>;
}

const Invitation: React.FC<IInvitationProps> = ({ invitation, onDelete }) => {
  const [deleteIsOpen, setDeleteIsOpen] = React.useState<boolean>(false)

  const handleDelete = async () => {
    if (onDelete) {
      setDeleteIsOpen(false)
      await onDelete()
    }
  }

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
      <Flex alignItems="center">
        <RoleLabel role={invitation.role} />

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
                  <FormattedMessage {...messages.deleteMemberPopoverHeading} />
                </Heading>
                <Icon icon={faTimes} onClick={() => setDeleteIsOpen(false)} />
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
    </Flex>
  )
}
