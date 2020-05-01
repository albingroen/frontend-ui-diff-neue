import { defineMessage } from 'react-intl'

export default defineMessage({
  labelApiKey: {
    defaultMessage: 'API Key',
    id: 'project.header.label-api-key'
  },
  labelOwner: {
    defaultMessage: 'Owner',
    id: 'project.header.label-owner'
  },
  labelLastUpdated: {
    defaultMessage: 'Last updated',
    id: 'project.header.label-last-updated'
  },
  labelImageAmount: {
    defaultMessage: 'Amount of images',
    id: 'project.header.label-image-amount'
  },
  valueImageAmount: {
    defaultMessage:
      '{count, plural, =0 {No images yet} one {# image} other {# images}}',
    id: 'project.header.value-image-amount'
  }
})
