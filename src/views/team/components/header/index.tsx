import * as React from 'react'
import { FormattedMessage, defineMessages } from 'react-intl'
import {
  Heading,
  Text,
  Flex,
  Avatar,
  Tooltip,
  Link as StyledLink
} from '@primer/components'
import { ViewHeader } from '../../../../components'
import { ITeam } from '../../../../types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

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
      <Flex alignItems="center">
        <Avatar src={team?.logo} size={65} mr={3} />
        <div>
          <Heading fontSize={3} mb={1}>
            {team?.name}
          </Heading>

          <Text>
            <FormattedMessage {...messages.lede} />
          </Text>
        </div>
      </Flex>

      <Tooltip aria-label="Team settings">
        <Link to={`/teams/${team?._id}/settings`}>
          <StyledLink as="p" p={0} m={0} color="gray.4" fontSize={2}>
            <FontAwesomeIcon icon={faCog} />
          </StyledLink>
        </Link>
      </Tooltip>
    </Flex>
  </ViewHeader>
)

export default Header
