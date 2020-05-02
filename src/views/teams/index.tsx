import * as React from 'react'
import { defineMessages, useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import { TeamsContext } from '../../context/teamsContext'
import { Empty } from '../../components'
import { useHistory } from 'react-router-dom'
import List from './components/list'
import Header from './components/header'

const messages = defineMessages({
  heading: {
    defaultMessage: 'Ready to start a new team?',
    id: 'teams.new-team.heading'
  },
  lede: {
    defaultMessage: 'Click the button to create a new team.',
    id: 'teams.new-team.lede'
  },
  cta: {
    defaultMessage: 'Create team',
    id: 'teams.new-team.cta'
  }
})

export const Teams = () => {
  const { teams, teamsById } = React.useContext(TeamsContext)
  const history = useHistory()
  const intl = useIntl()

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Teams | ui-diff',
            id: 'teams.seo.title'
          })}
        </title>
      </Helmet>

      <Header />
      <List teams={teams.map((id: string) => teamsById[id])} />
      <Empty
        heading={messages.heading}
        lede={messages.lede}
        cta={messages.cta}
        onClick={() => history.push('/new-team')}
      />
    </div>
  )
}
