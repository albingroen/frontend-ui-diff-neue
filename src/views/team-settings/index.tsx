import * as React from 'react'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { TeamsContext } from '../../context/teamsContext'
import { Loading } from '../../components'
import Header from './components/header'
import Content from './components/content'

export const TeamSettings: React.FC<RouteComponentProps> = (props) => {
  const { id } = props.match.params as any
  const { teamsById } = React.useContext(TeamsContext)

  if (teamsById && Object.keys(teamsById).length) {
    if (!teamsById[id]?._id) {
      return <Redirect to="/teams" />
    }
  }

  const team = teamsById[id]

  return team ? (
    <div>
      <Header team={team} />
      <Content team={team} />
    </div>
  ) : (
    <Loading />
  )
}
