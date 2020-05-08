import { defineMessages } from 'react-intl'

export default defineMessages({
  // Headings
  heading: {
    defaultMessage: 'Basic settings',
    id: 'team-settings.sections.general.basics.heading'
  },

  // Ledes
  lede: {
    defaultMessage: 'Team name, billing, and members',
    id: 'team-settings.sections.general.basics.lede'
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

  // States
  success: {
    defaultMessage: 'Saved team successfully',
    id: 'team.settings.success'
  },
  error: {
    defaultMessage: 'Failed to save team settings',
    id: 'team.settings.error'
  }
})