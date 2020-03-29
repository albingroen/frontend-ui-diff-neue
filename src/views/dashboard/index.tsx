import * as React from 'react'
import { IUserContext, UserContext } from '../../context/userContext'
import {
  ProjectsContext,
  IProjectsContext
} from '../../context/projectsContext'
import Header from './components/header'
import Projects from './components/projects'

export const Dashboard: React.FC = () => {
  const { user } = React.useContext<IUserContext>(UserContext)
  const { projectsById, projects } = React.useContext<IProjectsContext>(
    ProjectsContext
  )

  return (
    <div>
      <Header user={user} />
      <Projects projects={projects?.map((id: string) => projectsById[id])} />
    </div>
  )
}
