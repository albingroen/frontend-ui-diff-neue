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
    defaultMessage: 'Ready to start a new team?',
    id: 'teams.new-team.heading'
  },
  lede: {
    defaultMessage: 'Click the button to create a new team.',
    id: 'teams.new-team.lede'
  },
  cta: {
    defaultMessage: 'Create team',
    id: 'teams.new-team.cta'
  }
})

const NewTeam = () => (
  <BorderBox mt={4} p={5} borderStyle="dashed">
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading fontSize={3}>
        <FormattedMessage {...messages.heading} />
      </Heading>
      <Text opacity={0.5} mt={1} mb={3}>
        <FormattedMessage {...messages.lede} />
      </Text>

      <Link to="/new-team">
        <ButtonPrimary variant="medium">
          <FormattedMessage {...messages.cta} />
        </ButtonPrimary>
      </Link>
    </Flex>
  </BorderBox>
)

export default NewTeam
