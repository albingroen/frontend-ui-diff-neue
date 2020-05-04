import { defineMessages } from 'react-intl'

export default defineMessages({
  heading: {
    defaultMessage: 'Basic settings',
    id: 'project.settings.heading'
  },
  lede: {
    defaultMessage: 'Project name, billing, and contributors',
    id: 'project.settings.lede'
  },
  ctaSave: {
    defaultMessage: 'Save',
    id: 'project.settings.cta-save'
  },
  ctaLoading: {
    defaultMessage: 'Saving...',
    id: 'project.settings.cta-loading'
  },

  success: {
    defaultMessage: 'Saved project successfully',
    id: 'project.settings.success'
  },
  error: {
    defaultMessage: 'Failed to save project settings',
    id: 'project.settings.error'
  },

  noEmptyName: {
    defaultMessage: 'Name cannot be empty',
    id: 'project.settings.no-empty-name'
  },
  labelName: {
    defaultMessage: 'Name',
    id: 'project.settings.label-name'
  },
  descriptionName: {
    defaultMessage:
      'This name will only be visible to the members on the team or the user that owns this project',
    id: 'project.settings.description-name'
  },
  placeholderName: {
    defaultMessage: 'Project name',
    id: 'project.settings.placeholder-name'
  }
})
