import * as React from 'react'
import { Text, Heading, Box } from '@primer/components'
import { MessageDescriptor, FormattedMessage } from 'react-intl'

interface ISectionGroupProps {
  heading: MessageDescriptor;
  lede: MessageDescriptor;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const SectionGroup: React.FC<ISectionGroupProps> = ({
  heading,
  lede,
  children,
  style
}) => {
  return (
    <div style={{ width: '100%', ...style }}>
      <Box mb={4}>
        <Heading mb={1}>
          <FormattedMessage {...heading} />
        </Heading>
        <Text opacity={0.75}>
          <FormattedMessage {...lede} />
        </Text>
      </Box>

      {children}
    </div>
  )
}
