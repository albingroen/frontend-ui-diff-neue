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
  dangerousHeading: {
    defaultMessage: 'Dangerous settings',
    id: 'project.settings.dangerous-heading'
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
  dangerousLede: {
    defaultMessage: 'Please be aware that this action is absolute',
    id: 'project.settings.dangerous-lede'
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
  ctaDeleteProject: {
    defaultMessage: 'Delete project',
    id: 'project.settings.cta-delete-project'
  },
  ctaDeleteProjectLoading: {
    defaultMessage: 'Deleting project ...',
    id: 'project.settings.cta-delete-project-loading'
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
  successDeleteProject: {
    defaultMessage: 'Deleted project successfully',
    id: 'project.settings.success-delete-project'
  },
  errorDeleteProject: {
    defaultMessage: 'Failed to delete project',
    id: 'project.settings.error-delete-project'
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
  labelApiKey: {
    defaultMessage: 'API key',
    id: 'project.settings.settings.security.label-api-key'
  },
  labelDeleteProject: {
    defaultMessage: 'Delete this project',
    id: 'project.settings.dangerous.label-delete-project'
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
  descriptionDeleteProject: {
    defaultMessage: 'Please be aware that this action is absolute',
    id: 'project.settings.description-dangerous'
  },

  // Placeholders
  placeholderName: {
    defaultMessage: 'Project name',
    id: 'project.settings.placeholder-name'
  }
})
