import * as React from 'react'
import Basic from './components/basic'
import Security from './components/security'
import { IProject } from '../../../../types'

interface ISettingsProps {
  project: IProject;
}

const Settings: React.FC<ISettingsProps> = ({ project }) => (
  <>
    <Basic project={project} />
    <Security project={project} />
  </>
)

export default Settings
