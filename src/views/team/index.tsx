import * as React from 'react'
import Header from './components/header'
import Members from './components/members'
import Projects from './components/projects'
import Settings from './components/settings'
import { Grid } from '@primer/components'
import { Helmet } from 'react-helmet'
import { ProjectsContext } from '../../context/projectsContext'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { TeamsContext } from '../../context/teamsContext'
import { useIntl } from 'react-intl'

export const Team: React.FC<RouteComponentProps> = (props) => {
  const intl = useIntl()
  const { id, tab } = props.match.params as any
  const { teamsById } = React.useContext(TeamsContext)
  const { projectsById, projects } = React.useContext(ProjectsContext)
  const team = teamsById[id]

  // Return if invalid team
  if (teamsById) {
    if (Object.keys(teamsById)?.length) {
      if (!teamsById[id]?._id) {
        return <Redirect to="/teams" />
      }
    }
  }

  // Function for rendering content
  const renderContent = () => {
    switch (tab) {
      case 'settings':
        return <Settings team={team} />
      case undefined:
        return (
          <Grid gridTemplateColumns="repeat(2, auto)" gridGap={4}>
            <Projects projects={teamProjects} />
            <Members team={team} />
          </Grid>
        )
      default:
        if (team) {
          return <Redirect to={`/teams/${team?._id}`} />
        }
    }
  }

  // Find team projects
  const teamProjects = projects
    .filter((pId: string) => projectsById[pId]._team === id)
    .map((pId: string) => projectsById[pId])

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: team?.name ? `${team.name} | ui-diff` : 'ui-diff',
            id: 'team.seo.title'
          })}
        </title>
      </Helmet>

      <Header team={team} />

      {renderContent()}
    </div>
  )
}
