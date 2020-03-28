import * as React from 'react'
import styled from 'styled-components'
import { AppNavigation } from './components/app-navigation'
import { Loading } from '../loading'
import { Footer } from '../footer'
import { useIntl, IntlShape } from 'react-intl'
import messages from './messages'

const Content = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => `${props?.theme?.space[4]}px ${props?.theme?.space[2]}px`};
`

interface IContainerProps {
  children?: React.ReactNode;
  loading?: boolean;
}

const getFooterLists = (intl: IntlShape) => {
  return [
    {
      items: [
        {
          text: intl.formatMessage(messages.footerItemDocs),
          href: '/documentation'
        },
        {
          text: intl.formatMessage(messages.footerItemPricing),
          href: '/pricing'
        },
        {
          text: intl.formatMessage(messages.footerItemSupport),
          href: '/support'
        },
        {
          text: intl.formatMessage(messages.footerItemNews),
          href: '/news'
        },
        {
          text: intl.formatMessage(messages.footerItemTerms),
          href: '/terms'
        }
      ]
    }
  ]
}

export const Container: React.FC<IContainerProps> = ({ children, loading }) => {
  const intl = useIntl()

  const footerLists = getFooterLists(intl)

  return loading ? (
    <Loading />
  ) : (
    <>
      <AppNavigation />
      <Content>{children}</Content>
      <Footer lists={footerLists} />
    </>
  )
}
