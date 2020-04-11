import * as React from 'react'
import {
  BorderBox,
  Text,
  Flex,
  Heading,
  ButtonPrimary
} from '@primer/components'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Time to start a new project?',
    id: 'component.projects.new-project.heading'
  },
  lede: {
    defaultMessage: 'Click the button to start a new project.',
    id: 'component.projects.new-project.lede'
  },
  cta: {
    defaultMessage: 'New project',
    id: 'component.projects.new-project.cta'
  }
})

const NewProject = () => (
  <BorderBox mt={3} p={5} borderStyle="dashed">
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading fontSize={3}>
        <FormattedMessage {...messages.heading} />
      </Heading>
      <Text opacity={0.5} mt={1} mb={3}>
        <FormattedMessage {...messages.lede} />
      </Text>

      <Link to="/new-project">
        <ButtonPrimary variant="medium">
          <FormattedMessage {...messages.cta} />
        </ButtonPrimary>
      </Link>
    </Flex>
  </BorderBox>
)

export default NewProject
