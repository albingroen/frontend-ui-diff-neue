import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from './components/header'
import Form from './components/form'
import { useIntl } from 'react-intl'

export const NewProject = () => {
  const intl = useIntl()

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: 'New project | ui-diff',
            id: 'new-project.seo.title'
          })}
        </title>
      </Helmet>

      <Header />
      <Form />
    </div>
  )
}
