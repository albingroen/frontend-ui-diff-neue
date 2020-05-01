import * as React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Text, Flex, Heading, Label } from '@primer/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { IProject, ITeam } from '../../../../../types'
import { Card } from '../../../..'

const messages = defineMessages({
  lastUpdated: {
    defaultMessage: 'Last updated on {date} ({dateFromNow})',
    id: 'component.projects.project.last-updated'
  },
  imageAmount: {
    defaultMessage: '{amount} images',
    id: 'component.projects.project.image-amount'
  },
  belonger: {
    defaultMessage: 'Belongs to <strong>{belonger}</strong>',
    id: 'component.projects.project.belonger'
  }
})

interface IProjectProps {
  project: IProject;
  teamsById?: { [key: string]: ITeam };
  includeBelonger?: boolean;
}

const Project: React.FC<IProjectProps> = ({
  project,
  teamsById,
  includeBelonger
}) => (
  <Link to={`/projects/${project?._id}`}>
    <Card shadowed clickable>
      <Flex justifyContent="space-between" alignItems="center" mb={1}>
        <Heading fontSize={2}>
          <FontAwesomeIcon icon={faImages} />
          <span style={{ marginLeft: '0.75rem' }}>{project?.name}</span>
        </Heading>
        <Label dropshadow variant="large" outline>
          <FormattedMessage
            {...messages.imageAmount}
            values={{
              amount: project?.images?.length || 0
            }}
          />
        </Label>
      </Flex>
      <Flex alignItems="center" justifyContent="space-between" mt={2}>
        <Text fontSize="14px" opacity={0.75}>
          <FormattedMessage
            {...messages.lastUpdated}
            values={{
              date: moment(project?.updatedAt).format('MMM DD'),
              dateFromNow: moment(project?.updatedAt).fromNow()
            }}
          />
        </Text>

        {includeBelonger && (
          <Text fontSize="14px" opacity={0.75}>
            <FormattedMessage
              {...messages.belonger}
              values={{
                belonger:
                  teamsById && project._team && teamsById[project._team]
                    ? teamsById[project._team]?.name
                    : 'you',
                strong: (chunks: string[] | React.ReactElement[]) => (
                  <strong>{chunks}</strong>
                )
              }}
            />
          </Text>
        )}
      </Flex>
    </Card>
  </Link>
)

export default Project
