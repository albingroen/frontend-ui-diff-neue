import * as React from 'react'
import styled from 'styled-components'
import { AppNavigation } from './components/app-navigation'
import { Loading } from '../loading'
import { Flex } from '@primer/components'
import { Footer } from '../footer'
import { useIntl, IntlShape } from 'react-intl'
import messages from './messages'
import { marketingSiteUrl } from '../../../lib'

const Content = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: ${(props) => props?.theme?.space[4]}px 0px;
  min-height: calc(100vh - 70px);

  &::after {
    height: 100px;
    content: "";
    display: block;
  }
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
          href: `${marketingSiteUrl}/documentation/getting-started`
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
        <Flex flexDirection="column" width="100%">
          <AppNavigation />
          <Content>{children}</Content>
        </Flex>
      </Flex>
      <Footer lists={getFooterLists(intl)} />
    </>
  )
}
