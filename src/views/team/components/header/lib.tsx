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
  team: ITeam,
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
    label: formatMessage(messages.labelMembersAmount),
    value: (
      <Text fontSize={3}>
        <FormattedMessage
          {...messages.valueMembersAmount}
          values={{ amount: team?.members.length }}
        />
      </Text>
    ),
    key: 1
  },
  {
    label: formatMessage(messages.labelImagesAmount),
    value: (
      <Text fontSize={3}>
        <FormattedMessage
          {...messages.valueImagesAmount}
          values={{ amount: getTotalImageAmount(projects) }}
        />
      </Text>
    ),
    key: 2
  }
]

export const getTabItems = (
  { formatMessage }: IntlShape,
  teamId: string,
  isAdmin: boolean
): ITabItem[] => {
  return [
    {
      value: formatMessage(messages.tabMain),
      link: `/teams/${teamId}`
    },
    ...(isAdmin
      ? [
        {
          value: formatMessage(messages.tabSettings),
          link: `/teams/${teamId}/settings`
        }
      ]
      : [])
  ]
}
