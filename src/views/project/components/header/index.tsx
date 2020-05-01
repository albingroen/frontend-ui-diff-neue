import * as React from 'react'
import { Heading, Text, Box } from '@primer/components'
import { FormattedMessage, defineMessages } from 'react-intl'
import { ViewHeader } from '../../../../components'
import { IProject } from '../../../../types'
import Information from './components/information'

const messages = defineMessages({
  lede: {
    defaultMessage: 'Here you will find the images that you publish regularly',
    id: 'project.header.lede'
  }
})

interface IHeaderProps {
  project: IProject;
}

const Header: React.FC<IHeaderProps> = ({ project }) => (
  <ViewHeader>
    <Heading mb={2}>{project?.name}</Heading>

    <Text>
      <FormattedMessage {...messages.lede} />
    </Text>

    <Box mt={4}>
      <Information project={project} />
    </Box>
  </ViewHeader>
)

export default Header
