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

  placeholderName: {
    defaultMessage: 'Name',
    id: 'project.settings.placeholder-name'
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
  }
})
