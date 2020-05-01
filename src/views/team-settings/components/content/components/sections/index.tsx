import * as React from 'react'
import { SectionGroup } from '../../../../../../components'
import { defineMessages } from 'react-intl'
import { ITeam } from '../../../../../../types'
import Billing from './billing'
import Basic from './basic'
import { Flex } from '@primer/components'

const messages = defineMessages({
  generalHeading: {
    defaultMessage: 'General',
    id: 'team-settings.sections.general.heading'
  },
  generalLede: {
    defaultMessage: 'General settings preferences for your team',
    id: 'team-settings.sections.general.lede'
  },
  billingHeading: {
    defaultMessage: 'Billing',
    id: 'team-settings.sections.billing.heading'
  },
  billingLede: {
    defaultMessage: 'Billing, plans and subscriptions',
    id: 'team-settings.sections.billing.lede'
  }
})

interface ISectionsProps {
  team: ITeam;
}

const renderSection = (path: string, team: ITeam) => {
  switch (path) {
    case 'general':
      return (
        <SectionGroup
          heading={messages.generalHeading}
          lede={messages.generalLede}
        >
          <Basic team={team} />
        </SectionGroup>
      )
    case 'billing':
      return (
        <SectionGroup
          heading={messages.billingHeading}
          lede={messages.billingLede}
        >
          <Billing team={team} />
        </SectionGroup>
      )
  }
}

const Sections: React.FC<ISectionsProps> = ({ team }) => {
  return (
    <Flex pl={4} flex={1}>
      {renderSection(
        window.location.pathname.split('/')[
          window.location.pathname.split('/').length - 1
        ],
        team
      )}
    </Flex>
  )
}

export default Sections