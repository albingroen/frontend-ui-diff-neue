import * as React from 'react'
import { IUserContext, UserContext } from '../../context/userContext'
import Header from './components/header'
import Projects from './components/projects'
import fakeProjects from '../../fakeProjects'

export const Dashboard: React.FC = () => {
  const { user } = React.useContext<IUserContext>(UserContext)

  return (
    <div>
      <Header user={user} />
      <Projects projects={fakeProjects} />
    </div>
  )
}
