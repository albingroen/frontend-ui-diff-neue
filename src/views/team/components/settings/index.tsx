import * as React from 'react'
import { ITeam } from '../../../../types'
import Basic from './components/basic'
import Members from './components/members'

interface IContentProps {
  team: ITeam;
}

const Content: React.FC<IContentProps> = ({ team }) => {
  return team ? (
    <>
      <Basic team={team} />
      <Members team={team} />
    </>
  ) : null
}

export default Content
