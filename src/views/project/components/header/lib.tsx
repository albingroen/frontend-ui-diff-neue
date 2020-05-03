import React from 'react'
import moment from 'moment'
import { IntlShape } from 'react-intl'
import { Text } from '@primer/components'
import { IProject, TeamsById, IUser } from '../../../../types'
import messages from './messages'

export const getInformation = (
  project: IProject,
  teamsById: TeamsById,
  user: IUser,
  { formatMessage }: IntlShape
) => [
  {
    label: formatMessage(messages.labelApiKey),
    value: <code style={{ display: 'block' }}>{project?.apiKey}</code>,
    key: 0
  },
  {
    label: formatMessage(messages.labelOwner),
    value: (
      <Text fontSize={3}>
        {project?._team ? teamsById[project._team]?.name : user.name}
      </Text>
    ),
    key: 1
  },
  {
    label: formatMessage(messages.labelLastUpdated),
    value: <Text fontSize={3}>{moment(project?.updatedAt).fromNow()}</Text>,
    key: 2
  },
  {
    label: formatMessage(messages.labelImageAmount),
    value: (
      <Text fontSize={3}>
        {formatMessage(messages.valueImageAmount, {
          count: project?.images?.length
        })}
      </Text>
    ),
    key: 3
  }
]

export interface ITabItem {
  value: string;
  link: string;
}

export const getTabItems = (
  { formatMessage }: IntlShape,
  projectId: string
): ITabItem[] => [
  {
    value: formatMessage(messages.tabMain),
    link: `/projects/${projectId}`
  },
  {
    value: formatMessage(messages.tabSettings),
    link: `/projects/${projectId}/settings`
  }
]
