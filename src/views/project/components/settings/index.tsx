import * as React from 'react'
import Basic from './components/basic'
import Security from './components/security'
import { IProject } from '../../../../types'
import Dangerous from './components/dangerous'

interface ISettingsProps {
  project: IProject;
}

const Settings: React.FC<ISettingsProps> = ({ project }) => (
  <>
    <Basic project={project} />
    <Security project={project} />
    <Dangerous project={project} />
  </>
)

export default Settings
