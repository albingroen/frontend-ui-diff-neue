import * as React from 'react'
import { ITeam } from '../../../../types'
import Basic from './components/basic'
import Members from './components/members'
import { Redirect } from 'react-router-dom'
import Dangerous from './components/dangerous'
import Invitations from './components/invitations'

interface IContentProps {
  team: ITeam;
  isAdmin: boolean;
}

const Content: React.FC<IContentProps> = ({ team, isAdmin }) => {
  return isAdmin ? (
    <>
      <Basic team={team} />
      <Members team={team} />
      <Invitations team={team} />
      <Dangerous team={team} />
    </>
  ) : team ? (
    <Redirect to={`/teams/${team?._id}`} />
  ) : null
}

export default Content
