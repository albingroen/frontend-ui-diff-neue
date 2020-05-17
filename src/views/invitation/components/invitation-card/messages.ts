import { defineMessages } from 'react-intl'

export default defineMessages({
  heading: {
    defaultMessage: "You've  been invited to team {team}",
    id: 'invitation.heading'
  },
  lede: {
    defaultMessage:
      'You have been invited to this team as a <strong>{role}</strong>. Click the button below to accept the invitation and get started using ui-diff.',
    id: 'invitation.lede'
  },
  cta: {
    defaultMessage: 'Accept invitation',
    id: 'invitation.cta'
  }
})
