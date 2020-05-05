import { defineMessages } from 'react-intl'

export default defineMessages({
  // Headings
  basicHeading: {
    defaultMessage: 'Basic settings',
    id: 'project.settings.basic-heading'
  },
  securityHeading: {
    defaultMessage: 'Security settings',
    id: 'project.settings.security-heading'
  },

  // Ledes
  basicLede: {
    defaultMessage: 'Project name, billing, and contributors',
    id: 'project.settings.lede'
  },
  securityLede: {
    defaultMessage: 'Project api key, accessibility, and existence',
    id: 'project.settings.security-lede'
  },

  // Cta
  ctaSave: {
    defaultMessage: 'Save',
    id: 'project.settings.cta-save'
  },
  ctaLoading: {
    defaultMessage: 'Saving...',
    id: 'project.settings.cta-loading'
  },
  ctaApiKey: {
    defaultMessage: 'Update API key',
    id: 'project.settings.cta-api-key'
  },
  ctaApiKeyLoading: {
    defaultMessage: 'Updating API key...',
    id: 'project.settings.cta-api-key-loading'
  },

  // States
  success: {
    defaultMessage: 'Saved project successfully',
    id: 'project.settings.success'
  },
  error: {
    defaultMessage: 'Failed to save project settings',
    id: 'project.settings.error'
  },

  // Errors
  noEmptyName: {
    defaultMessage: 'Name cannot be empty',
    id: 'project.settings.no-empty-name'
  },

  // Labels
  labelName: {
    defaultMessage: 'Name',
    id: 'project.settings.label-name'
  },
  labelApiKey: {
    defaultMessage: 'API key',
    id: 'project.settings.api-key'
  },

  // Descriptions
  descriptionName: {
    defaultMessage:
      'This name will only be visible to the members on the team or the user that owns this project',
    id: 'project.settings.description-name'
  },
  descriptionApiKey: {
    defaultMessage:
      'Please remember to not commit this token. Only store this on your local machine',
    id: 'project.settings.description-api-key'
  },

  // Placeholders
  placeholderName: {
    defaultMessage: 'Project name',
    id: 'project.settings.placeholder-name'
  }
})
