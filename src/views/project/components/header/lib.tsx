import React from 'react'
import messages from './messages'
import moment from 'moment'
import { IProject, TeamsById, IUser, ITabItem } from '../../../../types'
import { IntlShape } from 'react-intl'
import { Link } from 'react-router-dom'
import { Text } from '@primer/components'

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
    value: project?._team ? (
      <Link to={`/teams/${project?._team}`}>
        <Text color="blue.5" fontSize={3}>
          {teamsById[project._team]?.name}
        </Text>
      </Link>
    ) : (
      <Text fontSize={3}>{user.name}</Text>
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

export const getTabItems = (
  { formatMessage }: IntlShape,
  projectId: string,
  isAdmin: boolean
): ITabItem[] => {
  return [
    {
      value: formatMessage(messages.tabMain),
      link: `/projects/${projectId}`
    },
    ...(isAdmin
      ? [
        {
          value: formatMessage(messages.tabSettings),
          link: `/projects/${projectId}/settings`
        }
      ]
      : [])
  ]
}
