import * as React from 'react'
import { IProject } from '../../../types'
import Header from './components/header'
import List from './components/list'
import { TeamsContext } from '../../../context/teamsContext'
import { Empty } from '../empty'
import { defineMessages } from 'react-intl'
import { useHistory } from 'react-router-dom'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Time to start a new project?',
    id: 'component.projects.new-project.heading'
  },
  lede: {
    defaultMessage: 'Click the button to start a new project.',
    id: 'component.projects.new-project.lede'
  },
  cta: {
    defaultMessage: 'New project',
    id: 'component.projects.new-project.cta'
  }
})

interface IProjectsProps {
  projects: IProject[];
  includeFilter?: boolean;
  includeCreateNew?: boolean;
  includeBelonger?: boolean;
}

const Projects: React.FC<IProjectsProps> = ({
  projects,
  includeFilter,
  includeCreateNew,
  includeBelonger
}) => {
  const history = useHistory()
  const { teamsById } = React.useContext(TeamsContext)
  const [search, setSearch] = React.useState<string>('')

  const filterProjects = (project: IProject) =>
    project?.name?.toLowerCase().includes(search?.toLowerCase() || '')

  return (
    <div>
      {projects?.length > 0 && (
        <>
          {includeFilter && <Header onSearch={setSearch} search={search} />}
          <List
            includeBelonger={includeBelonger}
            teamsById={teamsById}
            projects={
              includeFilter ? projects.filter(filterProjects) : projects
            }
          />
        </>
      )}

      {includeCreateNew && (
        <Empty
          heading={messages.heading}
          lede={messages.lede}
          cta={messages.cta}
          onClick={() => history.push('/new-project')}
        />
      )}
    </div>
  )
}

export default Projects
