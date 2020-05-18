import { defineMessage } from 'react-intl'

export default defineMessage({
  // Labels
  labelProjectsAmount: {
    defaultMessage: 'Projects',
    id: 'user-profile.header.label-projects-amount'
  },
  labelTeamsAmount: {
    defaultMessage: 'Teams',
    id: 'user-profile.header.label-teams-amount'
  },

  // Values
  valueProjectsAmount: {
    defaultMessage: '{amount, plural, one {# project} other {# projects}}',
    id: 'user-profile.header.value-projects-amount'
  },
  valueTeamsAmount: {
    defaultMessage: '{amount, plural, one {# team} other {# teams}}',
    id: 'user-profile.header.value-teams-amount'
  },

  // Tabs
  tabMain: {
    defaultMessage: 'Projects & teams',
    id: 'user-profile.header.projects-and-teams'
  },
  tabSettings: {
    defaultMessage: 'Settings',
    id: 'user-profile.header.settings'
  }
})
