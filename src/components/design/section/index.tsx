import * as React from 'react'
import { Flex, Heading, Text } from '@primer/components'
import { MessageDescriptor, FormattedMessage } from 'react-intl'
import { Card } from '../..'

export const Section = ({
  title,
  lede,
  children
}: {
  title: MessageDescriptor;
  lede: MessageDescriptor;
  children: React.ReactNode;
}) => (
  <Card shadowed style={{ marginBottom: '2rem' }}>
    <Flex mb={3} flexDirection="column">
      <Heading mb={2} fontSize={3}>
        <FormattedMessage {...title} />
      </Heading>

      <hr />

      <Text mt={2}>
        <FormattedMessage {...lede} />
      </Text>
    </Flex>
    {children}
  </Card>
)
