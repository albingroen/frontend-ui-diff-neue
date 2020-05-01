import * as React from 'react'
import { Heading, Text, Box } from '@primer/components'
import { FormattedMessage, defineMessages, useIntl } from 'react-intl'
import { ViewHeader, Statistics } from '../../../../components'
import { IProject } from '../../../../types'
import { UserContext } from '../../../../context/userContext'
import { TeamsContext } from '../../../../context/teamsContext'
import { getInformation } from './lib'

const messages = defineMessages({
  lede: {
    defaultMessage: 'Here you will find the images that you publish regularly',
    id: 'project.header.lede'
  }
})

interface IHeaderProps {
  project: IProject;
}

const Header: React.FC<IHeaderProps> = ({ project }) => {
  const intl = useIntl()
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const information = getInformation(project, teamsById, user, intl)

  return (
    <ViewHeader>
      <Heading mb={2}>{project?.name}</Heading>

      <Text>
        <FormattedMessage {...messages.lede} />
      </Text>

      <Box mt={4}>
        <Statistics statistics={information} />
      </Box>
    </ViewHeader>
  )
}

export default Header
