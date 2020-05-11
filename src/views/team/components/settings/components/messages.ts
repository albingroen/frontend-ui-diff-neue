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

  // Placeholders
  placeholderName: {
    defaultMessage: 'Team name',
    id: 'team-settings.sections.general.basics.placeholder-name'
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

  // Errors
  noEmptyName: {
    defaultMessage: 'Name cannot be empty',
    id: 'project.settings.no-empty-name'
  },

  // Labels
  labelName: {
    defaultMessage: 'Name',
    id: 'project.settings.label-name.basic.label-name'
  },
  labelLogo: {
    defaultMessage: 'Logo',
    id: 'project.settings.label-name.basic.label-logo'
  },
  labelDeleteTeam: {
    defaultMessage: 'Delete team',
    id: 'project.settings.label-name.basic.label-delete-team'
  },

  // Descriptions
  descriptionName: {
    defaultMessage:
      'This name will only be visible to the members on the team or the user that owns this project',
    id: 'project.settings.description-name'
  },
  descriptionLogo: {
    defaultMessage: 'The logo will only be visible to the members on the team',
    id: 'project.settings.description-logo'
  },
  descriptionDeleteTeam: {
    defaultMessage: 'Please be aware that this action is final',
    id: 'project.settings.description-delete-team'
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
  }
})
