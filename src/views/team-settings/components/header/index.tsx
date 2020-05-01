import * as React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Heading, Text } from '@primer/components'
import { ViewHeader } from '../../../../components'
import { ITeam } from '../../../../types'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Settings for {team}',
    id: 'team-settings.header.heading'
  },
  lede: {
    defaultMessage: 'Settings regarding team projects, billing and much more',
    id: 'team-settings.header.lede'
  }
})

interface IHeaderProps {
  team: ITeam;
}

const Header: React.FC<IHeaderProps> = ({ team }) => (
  <ViewHeader>
    <Heading mb={2}>
      <FormattedMessage {...messages.heading} values={{ team: team?.name }} />
    </Heading>

    <Text>
      <FormattedMessage {...messages.lede} />
    </Text>
  </ViewHeader>
)

export default Header
