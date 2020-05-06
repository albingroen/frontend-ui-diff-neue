import * as React from 'react'
import Basic from './components/basic'
import Security from './components/security'
import { IProject } from '../../../../types'
import Dangerous from './components/dangerous'
import { Redirect } from 'react-router-dom'

interface ISettingsProps {
  project: IProject;
  isAdmin: boolean;
}

const Settings: React.FC<ISettingsProps> = ({ project, isAdmin }) => {
  console.log({
    project
  })

  return isAdmin ? (
    <>
      <Basic project={project} />
      <Security project={project} />
      <Dangerous project={project} />
    </>
  ) : project ? (
    <Redirect to={`/projects/${project?._id}`} />
  ) : null
}

export default Settings
