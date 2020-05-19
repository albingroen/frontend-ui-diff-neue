import * as React from 'react'
import Basic from './components/basic'
import Dangerous from './components/dangerous'
import { IUser } from '../../../../types'

interface ISettingsProps {
  user: IUser;
}

const Settings: React.FC<ISettingsProps> = ({ user }) => {
  return (
    <>
      <Basic user={user} />
      <Dangerous user={user} />
    </>
  )
}

export default Settings
