import * as React from 'react'
import { Flex, Heading, Text } from '@primer/components'
import { MessageDescriptor, FormattedMessage } from 'react-intl'
import { Card } from '../..'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export const Section = ({
  title,
  lede,
  children,
  id
}: {
  title: MessageDescriptor;
  children: React.ReactNode;
  lede?: MessageDescriptor;
  id?: string;
}) => {
  const [isShowingLink, setIsShowingLink] = React.useState<boolean>(false)

  return (
    <Card shadowed style={{ marginBottom: '2rem', width: '100%' }}>
      <Flex mb={3} flexDirection="column">
        <Flex alignItems="center" mb={2}>
          {id ? (
            <Link
              onMouseLeave={() => setIsShowingLink(false)}
              onMouseOver={() => setIsShowingLink(true)}
              to={window.location.pathname + '#' + id}
            >
              <Heading fontSize={3} mr={2}>
                <FormattedMessage {...title} />
              </Heading>
            </Link>
          ) : (
            <Heading fontSize={3} mr={2}>
              <FormattedMessage {...title} />
            </Heading>
          )}

          {id && isShowingLink && (
            <Link to={window.location.pathname + '#' + id}>
              <Heading fontSize={2} opacity={0.5}>
                <FontAwesomeIcon icon={faLink} />
              </Heading>
            </Link>
          )}
        </Flex>

        <hr />

        {lede && (
          <Text opacity={0.75} my={2}>
            <FormattedMessage {...lede} />
          </Text>
        )}
      </Flex>
      {children}
    </Card>
  )
}
