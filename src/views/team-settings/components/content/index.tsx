import * as React from 'react'
import { VerticalMenu } from '../../../../components'
import { ITeam } from '../../../../types'
import Sections from './components/sections'
import { Flex } from '@primer/components'
import { useIntl, defineMessages } from 'react-intl'

const messages = defineMessages({
  general: {
    defaultMessage: 'General',
    id: 'team-settings.menu.general'
  },
  basicInformation: {
    defaultMessage: 'Basic information',
    id: 'team-settings.menu.general.basic-information'
  },

  billing: {
    defaultMessage: 'Billing',
    id: 'team-settings.menu.billing'
  }
})

interface IContentProps {
  team: ITeam;
}

const Content: React.FC<IContentProps> = ({ team }) => {
  const intl = useIntl()

  return (
    <Flex alignItems="flex-start" flexDirection="row">
      <VerticalMenu
        items={[
          {
            link: `/teams/${team._id}/settings/general`,
            text: intl.formatMessage(messages.general),
            subItems: [
              {
                link: window.location.pathname + '#basic-information',
                text: intl.formatMessage(messages.basicInformation)
              }
            ]
          },
          {
            link: `/teams/${team._id}/settings/billing`,
            text: intl.formatMessage(messages.billing)
          }
        ]}
      />

      <Sections team={team} />
    </Flex>
  )
}

export default Content
