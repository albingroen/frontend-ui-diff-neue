import * as React from 'react'
import Header from './components/header'
import Projects from './components/projects'
import Teams from './components/teams'
import Settings from './components/settings'
import { Grid } from '@primer/components'
import { Helmet } from 'react-helmet'
import { ProjectsContext } from '../../context/projectsContext'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { TeamsContext } from '../../context/teamsContext'
import { UserContext } from '../../context/userContext'
import { useIntl } from 'react-intl'

export const UserProfile: React.FC<RouteComponentProps> = ({ match }) => {
  const intl = useIntl()
  const { tab } = match.params as any
  const { user } = React.useContext(UserContext)
  const { projectsById } = React.useContext(ProjectsContext)
  const { teamsById } = React.useContext(TeamsContext)

  const renderContent = () => {
    switch (tab) {
      case 'settings':
        return <Settings />
      case undefined:
        return (
          <Grid gridTemplateColumns="repeat(2, auto)" gridGap={4}>
            <Projects projects={Object.values(projectsById)} />
            <Teams teams={Object.values(teamsById)} />
          </Grid>
        )
      default:
        return <Redirect to="/profile" />
    }
  }

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: user?.name ? `${user.name} | ui-diff` : 'ui-diff',
            id: 'user-profile.seo.title'
          })}
        </title>
      </Helmet>

      <Header
        user={user}
        teams={Object.values(teamsById)}
        projects={Object.values(projectsById)}
      />

      {renderContent()}
    </div>
  )
}
