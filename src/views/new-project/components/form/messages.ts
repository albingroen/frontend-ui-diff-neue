import { defineMessages } from 'react-intl'

export default defineMessages({
  ownerNameTitle: {
    defaultMessage: 'Owner and name',
    id: 'new-project.sections.owner-name-title'
  },
  ownerNameLede: {
    defaultMessage:
      'Choose wether this project belongs to a team, and choose a name.',
    id: 'new-project.sections.owner-name-lede'
  },

  belongsToTitle: {
    defaultMessage: 'Belongs to',
    id: 'new-project.sections.belongs-to.title'
  },

  projectNamePlaceholder: {
    defaultMessage: 'Project name',
    id: 'new-project.sections.project-name.placeholder'
  },

  cta: {
    defaultMessage: 'Create project',
    id: 'new-project.cta'
  },

  ctaLoading: {
    defaultMessage: 'Creating project...',
    id: 'new-project.cta-loading'
  }
})
