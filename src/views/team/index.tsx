import * as React from 'react'
import { Grid, Heading } from '@primer/components'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ProjectsContext } from '../../context/projectsContext'
import { TeamsContext } from '../../context/teamsContext'
import Projects from '../../components/design/projects'
import Header from './components/header'
import { Members } from '../../components'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  projects: {
    defaultMessage: 'Projects ({amount})',
    id: 'team.projects'
  },
  members: {
    defaultMessage: 'Members ({amount})',
    id: 'team.members'
  }
})

export const Team: React.FC<RouteComponentProps> = (props) => {
  const { id } = props.match.params as any
  const { teamsById } = React.useContext(TeamsContext)
  const { projectsById, projects } = React.useContext(ProjectsContext)

  if (teamsById) {
    if (Object.keys(teamsById)?.length) {
      if (!teamsById[id]?._id) {
        return <Redirect to="/teams" />
      }
    }
  }

  const filterTeamProjects = (projectId: string) => {
    return projectsById[projectId]._team === id
  }

  const mapTeamProjects = (projectId: string) => {
    return projectsById[projectId]
  }

  const team = teamsById[id]

  const teamProjects = projects.filter(filterTeamProjects).map(mapTeamProjects)

  return (
    <div>
      <Header team={team} />

      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={4}>
        <div>
          <Heading fontSize={2} mb={3}>
            <FontAwesomeIcon icon={faImages} />
            <span style={{ marginLeft: '0.75rem' }}>
              <FormattedMessage
                {...messages.projects}
                values={{ amount: teamProjects?.length || 0 }}
              />
            </span>
          </Heading>
          <Projects
            projects={teamProjects}
            includeCreateNew={!teamProjects.length}
            includeFilter={teamProjects?.length > 0}
          />
        </div>

        <div>
          <Heading fontSize={2} mb={3}>
            <FontAwesomeIcon icon={faUsers} />
            <span style={{ marginLeft: '0.75rem' }}>
              <FormattedMessage
                {...messages.members}
                values={{ amount: team?.members?.length || 0 }}
              />
            </span>
          </Heading>
          <Members members={team?.members} />
        </div>
      </Grid>
    </div>
  )
}
