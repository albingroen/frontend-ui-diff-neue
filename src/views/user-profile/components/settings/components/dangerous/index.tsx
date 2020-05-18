import * as React from 'react'
import { defineMessage } from 'react-intl'
import { Section } from '../../../../../../components'
import { IUser } from '../../../../../../types'
import { ButtonDanger } from '@primer/components'

const messages = defineMessage({
  heading: {
    defaultMessage: 'Dangerous settings',
    id: 'user-profile.settings.dangerous.heading'
  },
  lede: {
    defaultMessage: 'Here you can delete your account if you want to',
    id: 'user-profile.settings.dangerous.lede'
  }
})

interface IDangerousProps {
  user: IUser;
}

const Dangerous: React.FC<IDangerousProps> = ({ user }) => {
  return (
    <Section title={messages.heading} lede={messages.lede}>
      <ButtonDanger>Delete account ({user.name})</ButtonDanger>
    </Section>
  )
}

export default Dangerous
