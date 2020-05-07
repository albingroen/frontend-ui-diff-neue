import { defineMessage } from 'react-intl'

export default defineMessage({
  // Labels
  labelProjectsAmount: {
    defaultMessage: 'Projects',
    id: 'team.header.label-projects-amount'
  },
  labelMembersAmount: {
    defaultMessage: 'Members',
    id: 'team.header.label-members-amount'
  },
  labelImagesAmount: {
    defaultMessage: 'Images',
    id: 'team.header.label-images-amount'
  },

  // Values
  valueProjectsAmount: {
    defaultMessage: '{amount, plural, one {# project} other {# projects}}',
    id: 'team.header.value-projects-amount'
  },
  valueMembersAmount: {
    defaultMessage: '{amount, plural, one {# member} other {# members}}',
    id: 'team.header.value-members-amount'
  },
  valueImagesAmount: {
    defaultMessage: '{amount, plural, one {# image} other {# images}}',
    id: 'team.header.value-images-amount'
  },

  // Tabs
  tabMain: {
    defaultMessage: 'Projects & members',
    id: 'team.header.projects-and-members'
  },
  tabSettings: {
    defaultMessage: 'Settings',
    id: 'team.header.settings'
  }
})
