import * as React from 'react'
import { Heading, Text, Box, UnderlineNav } from '@primer/components'
import { FormattedMessage, useIntl } from 'react-intl'
import { ViewHeader, Statistics } from '../../../../components'
import { IProject, ITabItem } from '../../../../types'
import { UserContext } from '../../../../context/userContext'
import { TeamsContext } from '../../../../context/teamsContext'
import { getInformation, getTabItems } from './lib'
import { useHistory } from 'react-router-dom'
import messages from './messages'

interface IHeaderProps {
  project: IProject;
  isAdmin: boolean;
}

const Header: React.FC<IHeaderProps> = ({ project, isAdmin }) => {
  const intl = useIntl()
  const history = useHistory()
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const information = getInformation(project, teamsById, user, intl)

  return (
    <ViewHeader withoutDivider>
      <Heading mb={2}>{project?.name}</Heading>

      <Text>
        <FormattedMessage {...messages.lede} />
      </Text>

      <Box mt={4}>
        <Statistics statistics={information} />
      </Box>

      <UnderlineNav mb={3} mt={2} aria-label="Main">
        {getTabItems(intl, project?._id, isAdmin).map((tabItem: ITabItem) => (
          <UnderlineNav.Link
            key={tabItem.value}
            style={{ padding: '0.75rem 1rem' }}
            onClick={() => history.push(tabItem.link)}
            selected={tabItem.link === history.location.pathname}
          >
            {tabItem.value}
          </UnderlineNav.Link>
        ))}
      </UnderlineNav>
    </ViewHeader>
  )
}

export default Header
