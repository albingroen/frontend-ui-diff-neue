import * as React from 'react'
import Header from './components/header'
import { TeamsContext } from '../../context/teamsContext'
import List from './components/list'
import { Empty } from '../../components'
import { useHistory } from 'react-router-dom'
import { defineMessages } from 'react-intl'

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

  React.useEffect(() => {
    document.title = 'Your teams'
  }, [])

  return (
    <div>
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
