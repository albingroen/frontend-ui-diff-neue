import * as React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { Text, Flex, Heading, Label } from '@primer/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages } from '@fortawesome/free-solid-svg-icons'
import { IProject } from '../../../../../../types'
import { defineMessages, FormattedMessage } from 'react-intl'
import { Card } from '../../../../../../components'

const messages = defineMessages({
  lastUpdated: {
    defaultMessage: 'Last updated on {date} ({dateFromNow})',
    id: 'dashboard.projects.project.last-updated'
  },
  imageAmount: {
    defaultMessage: '{amount} images',
    id: 'dashboard.projects.project.image-amount'
  }
})

const Project: React.FC<IProject> = (project) => (
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
      <Text fontSize="14px" opacity={0.75}>
        <FormattedMessage
          {...messages.lastUpdated}
          values={{
            date: moment(project?.updatedAt).format('MMM DD'),
            dateFromNow: moment(project?.updatedAt).fromNow()
          }}
        />
      </Text>
    </Card>
  </Link>
)

export default Project
