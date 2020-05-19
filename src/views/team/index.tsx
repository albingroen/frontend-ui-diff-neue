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
import { UserContext } from '../../context/userContext'
import { teamMemberRoles } from '../../lib/teams'

export const Team: React.FC<RouteComponentProps> = (props) => {
  const intl = useIntl()
  const { id, tab } = props.match.params as any
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const { projectsById, projects } = React.useContext(ProjectsContext)
  const team = teamsById[id]

  // Return if invalid team
  if (Object.keys(teamsById).length && !team) {
    return <Redirect to="/teams" />
  }

  // Find current user's member role
  const currentUserMemberRole = team?.members.find((member) =>
    typeof member._user === 'object'
      ? member._user._id === user._id
      : member._user === user._id
  )?.role

  const isAdmin = currentUserMemberRole === teamMemberRoles.ADMIN

  // Function for rendering content
  const renderContent = (isAdmin: boolean) => {
    switch (tab) {
      case 'settings':
        return <Settings isAdmin={isAdmin} team={team} />
      case undefined:
        return (
          <Grid gridTemplateColumns="repeat(2, auto)" gridGap={4}>
            <Projects projects={teamProjects} />
            <Members isAdmin={isAdmin} team={team} />
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

  return team ? (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: team?.name ? `${team.name} | ui-diff` : 'ui-diff',
            id: 'team.seo.title'
          })}
        </title>
      </Helmet>

      <Header team={team} isAdmin={isAdmin} />

      {renderContent(isAdmin)}
    </div>
  ) : (
    <Redirect to="/teams" />
  )
}
