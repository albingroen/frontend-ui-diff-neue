import * as React from 'react'
import { Heading, Flex, Text } from '@primer/components'
import { FormattedMessage } from 'react-intl'
import styled from 'styled-components'
import { Logo } from '../../../../components/logo'
import messages from '../../messages'
import EmailForm from './components/email-form'

const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background: ${(props) => props?.theme?.colors?.white};
  padding: ${(props) => props?.theme?.space[5]}px;
  border-right: 1px solid ${(props) => props?.theme?.colors?.border.gray};
`

const Side: React.FC = () => {
  return (
    <Sidebar>
      <Logo withLink width="35px" />
      <Heading my={3}>
        <FormattedMessage {...messages.heading} />
      </Heading>
      <hr />
      <Text py={3} as="p" lineHeight={1.5}>
        <FormattedMessage {...messages.lede} />
      </Text>
      <Heading mt={2} fontSize={3}>
        <FormattedMessage {...messages.subHeading} />
      </Heading>

      <Flex my={2} flexDirection="column">
        <EmailForm />
      </Flex>
    </Sidebar>
  )
}

export default Side
