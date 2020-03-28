import * as React from 'react'
import styled from 'styled-components'
import { AppNavigation } from './components/app-navigation'
import { AppSidebar } from './components/app-sidebar'
import { Loading } from '../loading'
import { Flex } from '@primer/components'

const Content = styled.div`
  flex: 1;
  height: calc(100vh - 70px);
  padding: ${(props) => props?.theme?.space[4]}px;
  overflow-y:scroll;
`

interface IContainerProps {
  children?: React.ReactNode;
  loading?: boolean;
}

// const getFooterLists = (intl: IntlShape) => {
//   return [
//     {
//       items: [
//         {
//           text: intl.formatMessage(messages.footerItemDocs),
//           href: '/documentation'
//         },
//         {
//           text: intl.formatMessage(messages.footerItemPricing),
//           href: '/pricing'
//         },
//         {
//           text: intl.formatMessage(messages.footerItemSupport),
//           href: '/support'
//         },
//         {
//           text: intl.formatMessage(messages.footerItemNews),
//           href: '/news'
//         },
//         {
//           text: intl.formatMessage(messages.footerItemTerms),
//           href: '/terms'
//         }
//       ]
//     }
//   ]
// }

export const Container: React.FC<IContainerProps> = ({ children, loading }) => {
  return loading ? (
    <Loading />
  ) : (
    <Flex style={{ height: '100vh' }}>
      <AppSidebar />
      <Flex flexDirection="column" style={{ width: '100%' }}>

        <AppNavigation />
        <Content>{children}</Content>
      </Flex>
    </Flex>
  )
}
