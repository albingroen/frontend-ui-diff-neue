import * as React from 'react'
import styled from 'styled-components'
import { AppNavigation } from './components/app-navigation'
import { AppSidebar } from './components/app-sidebar'
import { Loading } from '../loading'
import { Flex } from '@primer/components'
import { Footer } from '../footer'
import { useIntl, IntlShape } from 'react-intl'
import messages from './messages'

const Content = styled.div`
  height: calc(100vh - 70px);
  padding: ${(props) => props?.theme?.space[4]}px;
  overflow-y:scroll;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
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

  return loading ? (
    <Loading />
  ) : (
    <>
      <Flex>
        <AppSidebar />
        <Flex flexDirection="column" style={{ width: '100%' }} >
          <AppNavigation />
          <Content>{children}</Content>
        </Flex>
      </Flex>
      <Footer lists={getFooterLists(intl)} />
    </>
  )
}
