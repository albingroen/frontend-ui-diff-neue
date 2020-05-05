import * as React from 'react'
import { useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import Header from './components/header'
import Projects from '../../components/design/projects'
import { IUserContext, UserContext } from '../../context/userContext'
import {
  ProjectsContext,
  IProjectsContext
} from '../../context/projectsContext'

export const Dashboard: React.FC = () => {
  const intl = useIntl()

  const { user } = React.useContext<IUserContext>(UserContext)
  const { projectsById, projects } = React.useContext<IProjectsContext>(
    ProjectsContext
  )

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Dashboard | ui-diff',
            id: 'dashboard.seo.title'
          })}
        </title>
      </Helmet>

      <Header user={user} />
      <Projects
        includeBelonger
        includeCreateNew
        includeFilter
        projects={projects?.map((id: string) => projectsById[id])}
      />
    </div>
  )
}
