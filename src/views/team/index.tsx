import * as React from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { ProjectsContext } from '../../context/projectsContext'
import { TeamsContext } from '../../context/teamsContext'
import Projects from '../../components/design/projects'
import Header from './components/header'

export const Team: React.FC<RouteComponentProps> = (props) => {
  const { id } = props.match.params as any
  const { teamsById } = React.useContext(TeamsContext)
  const { projectsById, projects } = React.useContext(ProjectsContext)

  if (!teamsById[id]) {
    return <Redirect to="/teams" />
  }

  const filterTeamProjects = (projectId: string) => {
    return projectsById[projectId]._team === id
  }

  const mapTeamProjects = (projectId: string) => {
    return projectsById[projectId]
  }

  return (
    <div>
      <Header team={teamsById[id]} />
      <Projects
        projects={projects.filter(filterTeamProjects).map(mapTeamProjects)}
      />
    </div>
  )
}
