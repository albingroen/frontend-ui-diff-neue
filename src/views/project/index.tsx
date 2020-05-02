import * as React from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { ProjectsContext } from '../../context/projectsContext'
import Header from './components/header'
import Images from './components/images'
import { useIntl } from 'react-intl'

export const Project: React.FC<RouteComponentProps> = ({ match }) => {
  const intl = useIntl()

  const { projectsById } = React.useContext(ProjectsContext)
  const projectsLength = Object.values(projectsById).length

  // Find project from global projects
  const project = projectsById[(match as any).params.id]

  // Go to start if no projects or project found
  if (projectsLength && !project?._id) {
    return <Redirect to="/" />
  }

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

      <Header project={project} />
      <Images images={project?.images || []} />
    </div>
  )
}
