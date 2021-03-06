import * as React from 'react'
import { MessageDescriptor, FormattedMessage } from 'react-intl'
import {
  BorderBox,
  Flex,
  Heading,
  Text,
  ButtonPrimary
} from '@primer/components'

interface IEmptyProps {
  heading: string | MessageDescriptor;
  lede: string | MessageDescriptor;
  cta: string | MessageDescriptor;
  link?: string;
  onClick?: () => void;
}

export const Empty: React.FC<IEmptyProps> = ({
  heading,
  lede,
  cta,
  link,
  onClick
}) => (
  <BorderBox mt={3} p={5} borderStyle="dashed">
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <Heading fontSize={3}>
        {typeof heading === 'string' ? (
          heading
        ) : (
          <FormattedMessage {...heading} />
        )}
      </Heading>
      <Text opacity={0.5} mt={1} mb={3}>
        {typeof lede === 'string' ? lede : <FormattedMessage {...lede} />}
      </Text>

      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          <ButtonPrimary variant="medium">
            {typeof cta === 'string' ? cta : <FormattedMessage {...cta} />}
          </ButtonPrimary>
        </a>
      ) : (
        onClick && (
          <ButtonPrimary onClick={onClick} variant="medium">
            {typeof cta === 'string' ? cta : <FormattedMessage {...cta} />}
          </ButtonPrimary>
        )
      )}
    </Flex>
  </BorderBox>
)
