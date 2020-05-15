import { defineMessages } from 'react-intl'

export default defineMessages({
  // Headings
  heading: {
    defaultMessage: 'Basic settings',
    id: 'team-settings.sections.general.basics.heading'
  },
  headingMembers: {
    defaultMessage: 'Members',
    id: 'team-settings.sections.general.members.heading'
  },
  headingDangerous: {
    defaultMessage: 'Dangerous settings',
    id: 'team-settings.sections.general.dangerous.heading'
  },
  headingInvitations: {
    defaultMessage: 'Invitations',
    id: 'team-settings.sections.general.invitations.heading'
  },
  headingInviteMember: {
    defaultMessage: 'Invite member',
    id: 'team-settings.sections.general.invitations.invite-member.heading'
  },

  // Ledes
  lede: {
    defaultMessage: 'The team display name and logotype can be changed here',
    id: 'team-settings.sections.general.basics.lede'
  },
  ledeMembers: {
    defaultMessage: 'Add, update and delete members of this team',
    id: 'team-settings.sections.general.basics.members.lede'
  },
  ledeDangerous: {
    defaultMessage: 'Here you can delete this team if you want to',
    id: 'team-settings.sections.general.basics.dangerous.lede'
  },
  ledeInvitations: {
    defaultMessage:
      'Here you can see all invitations and invite new team members',
    id: 'team-settings.sections.general.basics.invitations.lede'
  },

  // Placeholders
  placeholderName: {
    defaultMessage: 'Team name',
    id: 'team-settings.sections.general.basics.placeholder-name'
  },
  placeholderInviteMemberEmail: {
    defaultMessage: 'Ex. john@doe.com',
    id: 'team-settings.sections.general.basics.placeholder-invite-team-member'
  },

  // Cta's
  ctaSave: {
    defaultMessage: 'Save',
    id: 'team-settings.sections.general.basics.cta'
  },
  ctaLoading: {
    defaultMessage: 'Saving ...',
    id: 'team-settings.sections.general.basics.cta-loading'
  },
  ctaSaveMember: {
    defaultMessage: 'Save member',
    id: 'team-settings.sections.general.members.cta-save-member'
  },
  ctaDeleteTeam: {
    defaultMessage: 'Delete team',
    id: 'team-settings.sections.general.dangerous.cta-delete-team'
  },
  ctaDeleteTeamLoading: {
    defaultMessage: 'Deleting team ...',
    id: 'team-settings.sections.general.dangerous.cta-delete-team-loading'
  },
  ctaInviteTeamMember: {
    defaultMessage: 'Invite member',
    id: 'team-settings.sections.general.invitations.cta-invite-member'
  },

  // Errors
  noEmptyName: {
    defaultMessage: 'Name cannot be empty',
    id: 'team.settings.no-empty-name'
  },

  // Labels
  labelName: {
    defaultMessage: 'Name',
    id: 'team.settings.label-name.basic.label-name'
  },
  labelLogo: {
    defaultMessage: 'Logo',
    id: 'team.settings.label-name.basic.label-logo'
  },
  labelDeleteTeam: {
    defaultMessage: 'Delete team',
    id: 'team.settings.label-name.basic.label-delete-team'
  },
  labelInviteTeamMemberEmail: {
    defaultMessage: 'Email adress',
    id: 'team.settings.label-name.basic.label-invite-team-member'
  },

  // Descriptions
  descriptionName: {
    defaultMessage:
      'This name will only be visible to the members on this team',
    id: 'team.settings.description-name'
  },
  descriptionLogo: {
    defaultMessage: 'The logo will only be visible to the members on the team',
    id: 'team.settings.description-logo'
  },
  descriptionDeleteTeam: {
    defaultMessage: 'Please be aware that this action is final',
    id: 'team.settings.description-delete-team'
  },
  descriptionInviteMember: {
    defaultMessage: 'This is the email the member will get the invitation to',
    id: 'team.settings.description-invite-member'
  },

  // States
  success: {
    defaultMessage: 'Saved team successfully',
    id: 'team.settings.success'
  },
  error: {
    defaultMessage: 'Failed to save team settings',
    id: 'team.settings.error'
  },
  successDeleteTeam: {
    defaultMessage: 'Deleted team successfully',
    id: 'team.settings.success-delete-team'
  },
  errorDeleteTeam: {
    defaultMessage: 'Failed to delete team',
    id: 'team.settings.error-delete-team'
  },

  // Misc.
  roleDropdownTitle: {
    defaultMessage: 'Role',
    id: 'team-settings.sections.general.members.role-dropdown-title'
  },
  deleteMemberPopoverHeading: {
    defaultMessage: 'Are you sure?',
    id: 'team-settings.sections.general.members.delete-member.popover.heading'
  },
  deleteMemberPopoverLede: {
    defaultMessage: 'Please be aware this action is final.',
    id: 'team-settings.sections.general.members.delete-member.popover.lede'
  },
  deleteMemberPopoverCta: {
    defaultMessage: 'Delete member',
    id: 'team-settings.sections.general.members.delete-member.popover.cta'
  },
  roleDropdownTitleWithType: {
    defaultMessage: 'User role: {role}',
    id:
      'team-settings.sections.general.invitations.invite-team-memer.role-dropdown.title'
  },
  invitedTeamMemberSince: {
    defaultMessage: 'Invited {fromNow}',
    id: 'team-settings.sections.general.invitations.invitation.since'
  }
})
