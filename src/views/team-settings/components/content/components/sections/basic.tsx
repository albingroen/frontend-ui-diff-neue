import * as React from 'react'
import { Section, List } from '../../../../../../components'
import { defineMessages } from 'react-intl'
import { ITeam } from '../../../../../../types'
import { Text, Flex, Avatar } from '@primer/components'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Basic information',
    id: 'team-settings.sections.general.basics.heading'
  }
})

interface INamingProps {
  team: ITeam;
}

const Naming: React.FC<INamingProps> = ({ team }) => {
  return (
    <Section id="basic-information" title={messages.heading}>
      <List
        items={[
          {
            children: (
              <Flex>
                <Text pr={2}>Name:</Text>
                <Text pl={2} fontWeight="bold">
                  {team.name}
                </Text>
              </Flex>
            ),
            key: 1
          },
          {
            children: (
              <Flex alignItems="center">
                <Text pr={2}>Logo:</Text>
                <Avatar ml={2} size={35} src={team.logo} />
              </Flex>
            ),
            key: 2
          }
        ]}
      />
    </Section>
  )
}

export default Naming
