import * as React from 'react'
import Header from './components/header'
import { TeamsContext } from '../../context/teamsContext'
import List from './components/list'
import NewTeam from './components/new-team'

export const Teams = () => {
  const { teams, teamsById } = React.useContext(TeamsContext)

  return (
    <div>
      <Header />

      <List teams={teams.map((id: string) => teamsById[id])} />
      <NewTeam />
    </div>
  )
}
