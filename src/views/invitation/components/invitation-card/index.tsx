import * as React from 'react'
import messages from './messages'
import {
  Box,
  Flex,
  Avatar,
  Heading,
  ButtonPrimary,
  Text
} from '@primer/components'
import { Card } from '../../../../components'
import { FormattedMessage } from 'react-intl'
import { ITeamInvitation } from '../../../../types'

interface IInvitationCardProps {
  invitation: ITeamInvitation;
}

const InvitationCard: React.FC<IInvitationCardProps> = ({ invitation }) => {
  const team =
    typeof invitation?._team === 'object' ? invitation._team : undefined

  return (
    <Box width="600px" mt={4}>
      <Card shadowed>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          py={3}
        >
          <Avatar src={team?.logo} size={75} mb={2} />

          <Heading mb={1}>
            <FormattedMessage
              {...messages.heading}
              values={{ team: team?.name }}
            />
          </Heading>
          <Text opacity={0.75} lineHeight={1.5} textAlign="center">
            <FormattedMessage
              {...messages.lede}
              values={{
                strong: (...chunks: string[] | React.ReactElement[]) => (
                  <strong>{chunks}</strong>
                ),
                role: invitation?.role
              }}
            />
          </Text>

          <ButtonPrimary mt={4} variant="large">
            <FormattedMessage {...messages.cta} />
          </ButtonPrimary>
        </Flex>
      </Card>
    </Box>
  )
}

export default InvitationCard
