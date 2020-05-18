import * as React from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import {
  Heading,
  Text,
  Flex,
  Avatar,
  Box,
  UnderlineNav
} from '@primer/components'
import { IUser, ITabItem, IProject, ITeam } from '../../../../types'
import { ViewHeader, Statistics } from '../../../../components'
import { getTabItems, getInformation } from './lib'
import { useHistory } from 'react-router-dom'

const messages = defineMessages({
  lede: {
    defaultMessage:
      "Here you'll find your teams, projects and personal settings",
    id: 'user-profile.header.lede'
  }
})

interface IHeaderProps {
  user: IUser;
  projects: IProject[];
  teams: ITeam[];
}

const Header: React.FC<IHeaderProps> = ({ user, projects, teams }) => {
  const intl = useIntl()
  const history = useHistory()

  const information = getInformation(teams, projects, intl)

  return (
    <ViewHeader withoutDivider>
      <Flex alignItems="center">
        <Avatar src={user.avatar} size={65} mr={3} sx={{ borderRadius: 3 }} />
        <div>
          <Heading mb={1}>{user.name}</Heading>

          <Text>
            <FormattedMessage {...messages.lede} />
          </Text>
        </div>
      </Flex>

      <Box mt={4}>
        <Statistics statistics={information} />
      </Box>

      <UnderlineNav mb={3} mt={2} aria-label="Main">
        {getTabItems(intl).map((tabItem: ITabItem) => (
          <UnderlineNav.Link
            key={tabItem.value}
            onClick={() => history.push(tabItem.link)}
            selected={tabItem.link === history.location.pathname}
            px={2}
            py={1}
          >
            {tabItem.value}
          </UnderlineNav.Link>
        ))}
      </UnderlineNav>
    </ViewHeader>
  )
}

export default Header
