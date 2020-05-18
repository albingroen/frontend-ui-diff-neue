import * as React from 'react'
import Projects from '../../../../components/design/projects'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage, defineMessages } from 'react-intl'
import { Heading } from '@primer/components'
import { IProject } from '../../../../types'
import { faImages } from '@fortawesome/free-solid-svg-icons'

const messages = defineMessages({
  projects: {
    defaultMessage: 'Projects ({amount})',
    id: 'user.projects'
  }
})

interface IProjectsProps {
  projects: IProject[];
}

const UserProjects: React.FC<IProjectsProps> = ({ projects }) => {
  return (
    <div>
      <Heading fontSize={2} mb={3}>
        <FontAwesomeIcon icon={faImages} />
        <span style={{ marginLeft: '0.75rem' }}>
          <FormattedMessage
            {...messages.projects}
            values={{ amount: projects?.length || 0 }}
          />
        </span>
      </Heading>
      <Projects
        projects={projects}
        includeCreateNew={!projects.length}
        includeFilter={projects?.length > 0}
      />
    </div>
  )
}

export default UserProjects
