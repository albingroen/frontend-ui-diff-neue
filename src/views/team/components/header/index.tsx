import * as React from 'react'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import {
  Heading,
  Text,
  Flex,
  Avatar,
  UnderlineNav,
  Box
} from '@primer/components'
import { ViewHeader, Statistics } from '../../../../components'
import { ITeam, ITabItem, IProject } from '../../../../types'
import { useHistory } from 'react-router-dom'
import { getTabItems, getInformation } from './lib'
import { ProjectsContext } from '../../../../context/projectsContext'

const messages = defineMessages({
  lede: {
    defaultMessage: 'Team projects, members, and settings',
    id: 'team.header.lede'
  }
})

interface IHeaderProps {
  team: ITeam;
  isAdmin: boolean;
}

const Header: React.FC<IHeaderProps> = ({ team, isAdmin }) => {
  const intl = useIntl()
  const history = useHistory()
  const { projectsById } = React.useContext(ProjectsContext)
  const projects = Object.values(projectsById).filter(
    (project: IProject) => project._team === team?._id
  )
  const information = getInformation(team, projects, intl)

  return (
    <ViewHeader withoutDivider>
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

      <Box mt={4}>
        <Statistics statistics={information} />
      </Box>

      <UnderlineNav mb={3} mt={2} aria-label="Main">
        {getTabItems(intl, team?._id, isAdmin).map((tabItem: ITabItem) => (
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
