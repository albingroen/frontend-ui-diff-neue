import * as React from 'react'
import { Helmet } from 'react-helmet'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import { TeamsContext } from '../../context/teamsContext'
import { Loading } from '../../components'
import Header from './components/header'
import Content from './components/content'
import { useIntl } from 'react-intl'

export const TeamSettings: React.FC<RouteComponentProps> = (props) => {
  const intl = useIntl()
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
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: team.name
              ? `Team settings | ${team.name} | ui-diff`
              : 'Team settings | ui-diff',
            id: 'team-settings.seo.title'
          })}
        </title>
      </Helmet>

      <Header team={team} />
      <Content team={team} />
    </div>
  ) : (
    <Loading />
  )
}
