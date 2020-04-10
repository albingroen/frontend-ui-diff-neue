import * as React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Heading, Text, Flex, Avatar } from '@primer/components'
import { ViewHeader } from '../../../../components'
import { ITeam } from '../../../../types'

const messages = defineMessages({
  lede: {
    defaultMessage: 'Team projects, members, and settings',
    id: 'team.header.lede'
  }
})

interface IHeaderProps {
  team: ITeam;
}

const Header: React.FC<IHeaderProps> = ({ team }) => (
  <ViewHeader>
    <Flex alignItems="center" justifyContent="space-between">
      <div>
        <Heading mb={2}>{team?.name}</Heading>

        <Text>
          <FormattedMessage {...messages.lede} />
        </Text>
      </div>
      <Avatar src={team?.logo} size={50} />
    </Flex>
  </ViewHeader>
)

export default Header
