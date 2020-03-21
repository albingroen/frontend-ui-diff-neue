import * as React from 'react'
import styled from 'styled-components'
import {
  Flex, Heading, Text, Box
} from '@primer/components'
import { MessageDescriptor, FormattedMessage } from 'react-intl'
import { Chunk } from '../../../../types'
import features from './features'

const Other = styled.div`
  width: 100%;
  height: 100vh;
  background: ${(props) => props?.theme?.colors?.black};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const Right = () => (
  <Other>
    <Flex maxWidth="400px" flexDirection="column">
      <Heading>Screenshot testing the way it is supposed to be</Heading>
      <Box my={3} maxWidth="300px">
        {features.map((feature: MessageDescriptor) => (
          <Text lineHeight={1.5} as="p" my={2} key={feature.id}>
            <FormattedMessage
              {...feature}
              values={{
                strong: (...chunks: Chunk) => <strong>{chunks}</strong>
              }}
            />
          </Text>
        ))}
      </Box>
    </Flex>
  </Other>
)

export default Right
