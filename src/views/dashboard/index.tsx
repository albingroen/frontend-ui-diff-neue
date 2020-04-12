import * as React from 'react'
import Header from './components/header'
import Projects from '../../components/design/projects'
import { IUserContext, UserContext } from '../../context/userContext'
import {
  ProjectsContext,
  IProjectsContext
} from '../../context/projectsContext'

export const Dashboard: React.FC = () => {
  const { user } = React.useContext<IUserContext>(UserContext)
  const { projectsById, projects } = React.useContext<IProjectsContext>(
    ProjectsContext
  )

  React.useEffect(() => {
    document.title = 'ui-diff'
  }, [])

  return (
    <div>
      <Header user={user} />
      <Projects
        includeBelonger
        includeCreateNew={!projects}
        includeFilter
        projects={projects?.map((id: string) => projectsById[id])}
      />
    </div>
  )
}
