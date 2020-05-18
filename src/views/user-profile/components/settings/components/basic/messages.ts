import { defineMessage } from 'react-intl'

export default defineMessage({
  heading: {
    defaultMessage: 'Basic settings',
    id: 'user-profile.settings.basic.heading'
  },
  lede: {
    defaultMessage: 'Basic settings like your name, email and avatar',
    id: 'user-profile.settings.basic.lede'
  },

  nameLabel: {
    defaultMessage: 'Name',
    id: 'user-profile.settings.basic.name.label'
  },
  namePlaceholder: {
    defaultMessage: 'Name',
    id: 'user-profile.settings.basic.name.placeholder'
  },
  nameDescription: {
    defaultMessage: 'The name every team you are a part of will see',
    id: 'user-profile.settings.basic.name.description'
  },
  nameCannotBeEmpty: {
    defaultMessage: 'Name cannot be empty',
    id: 'user-profile.settings.basic.name.errors.no-empty'
  },
  emailLabel: {
    defaultMessage: 'Email',
    id: 'user-profile.settings.basic.email.label'
  },
  emailPlaceholder: {
    defaultMessage: 'Ex. john@doe.com',
    id: 'user-profile.settings.basic.email.placeholder'
  },
  emailDescription: {
    defaultMessage: 'The email you will get all notifications to',
    id: 'user-profile.settings.basic.email.placeholder'
  },
  emailCannotBeEmpty: {
    defaultMessage: 'Email cannot be empty',
    id: 'user-profile.settings.basic.email.errors.no-empty'
  },

  ctaSave: {
    defaultMessage: 'Save',
    id: 'user-profile.settings.basic.cta-save'
  },
  ctaSaveLoading: {
    defaultMessage: 'Saving...',
    id: 'user-profile.settings.basic.cta-save-loading'
  },

  success: {
    defaultMessage: 'Successfully saved user!',
    id: 'user-profile.settings.basic.states.success'
  },
  error: {
    defaultMessage: 'Failed to save user',
    id: 'user-profile.settings.basic.states.fail'
  }
})
