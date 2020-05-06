import * as React from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { ProjectsContext } from '../../context/projectsContext'
import Header from './components/header'
import Images from './components/images'
import { useIntl } from 'react-intl'
import Settings from './components/settings'
import { UserContext } from '../../context/userContext'
import { ITeam, ITeamMember } from '../../types'

export const Project: React.FC<RouteComponentProps> = ({ match }) => {
  const intl = useIntl()
  const { id, tab } = (match as any).params
  const { projectsById } = React.useContext(ProjectsContext)
  const { user } = React.useContext(UserContext)
  const { teams } = user

  // Find project from global projects
  const project = projectsById[id]

  // Go to start if no projects or project found
  const projectsLength = Object.values(projectsById).length
  if (projectsLength && !project?._id) {
    return <Redirect to="/" />
  }

  // Function for rendering content
  const renderContent = (isAdmin: boolean) => {
    switch (tab) {
      case 'settings':
        return <Settings isAdmin={isAdmin} project={project} />
      case undefined:
        return <Images images={project?.images || []} />
      default:
        if (project) {
          return <Redirect to={`/projects/${project?._id}`} />
        }
    }
  }

  // Find current user member role
  const team = teams?.find((team: ITeam) => team._id === project._team)
  const currentUserMember = team?.members.find((member: ITeamMember) => {
    return typeof member._user === 'object'
      ? member._user._id === user._id
      : member._user === user._id
  })

  const isAdmin = teams ? !team || currentUserMember?.role === 'admin' : false

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: project?.name
              ? `${project.name} | ui-diff`
              : 'ui-diff',
            id: 'project.seo.title'
          })}
        </title>
      </Helmet>

      <Header project={project} isAdmin={isAdmin} />

      {renderContent(isAdmin)}
    </div>
  )
}
