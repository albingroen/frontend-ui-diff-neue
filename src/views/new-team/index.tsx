import * as React from 'react'
import { useIntl } from 'react-intl'
import { Helmet } from 'react-helmet'
import Header from './components/header'
import Form from './components/form'

export const NewTeam = () => {
  const intl = useIntl()

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'New team | ui-diff',
            id: 'new-team.seo.title'
          })}
        </title>
      </Helmet>

      <Header />
      <Form />
    </div>
  )
}
