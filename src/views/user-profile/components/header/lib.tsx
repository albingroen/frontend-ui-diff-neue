import * as React from 'react'
import messages from './messages'
import { IntlShape, FormattedMessage } from 'react-intl'
import { ITabItem, ITeam, IProject } from '../../../../types'
import { Text } from '@primer/components'

export const getTotalImageAmount = (projects: IProject[]) => {
  return projects?.reduce(
    (acc: number, project: IProject) => (project?.images?.length || 0) + acc,
    0
  )
}

export const getInformation = (
  teams: ITeam[],
  projects: IProject[],
  { formatMessage }: IntlShape
) => [
  {
    label: formatMessage(messages.labelProjectsAmount),
    value: (
      <Text fontSize={3}>
        <FormattedMessage
          {...messages.valueProjectsAmount}
          values={{ amount: projects.length }}
        />
      </Text>
    ),
    key: 0
  },
  {
    label: formatMessage(messages.labelTeamsAmount),
    value: (
      <Text fontSize={3}>
        <FormattedMessage
          {...messages.valueTeamsAmount}
          values={{ amount: teams?.length }}
        />
      </Text>
    ),
    key: 1
  }
]

export const getTabItems = ({ formatMessage }: IntlShape): ITabItem[] => {
  return [
    {
      value: formatMessage(messages.tabMain),
      link: '/profile'
    },
    {
      value: formatMessage(messages.tabSettings),
      link: '/profile/settings'
    }
  ]
}
