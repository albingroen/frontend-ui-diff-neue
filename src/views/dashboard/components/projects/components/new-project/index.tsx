import * as React from 'react'
import { BorderBox, Text, Flex, Heading, ButtonPrimary } from '@primer/components'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Time to start a new project?',
    id: 'dashboard.projects.new-project.heading'
  },
  lede: {
    defaultMessage: 'Click the button to start a new project.',
    id: 'dashboard.projects.new-project.lede'
  },
  cta: {
    defaultMessage: 'New project',
    id: 'dashboard.projects.new-project.cta'
  }
})

const NewProject = () => (
  <BorderBox mt={4} style={{ borderStyle: 'dashed' }} p={5}>
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading fontSize={3}>
        <FormattedMessage {...messages.heading} />
      </Heading>
      <Text opacity={0.5} mt={1} mb={3}>
        <FormattedMessage {...messages.lede} />
      </Text>
      <ButtonPrimary variant="medium">
        <FormattedMessage {...messages.cta} />
      </ButtonPrimary>
    </Flex>
  </BorderBox>
)

export default NewProject
