import * as React from 'react'
import styled from 'styled-components'
import { useIntl } from 'react-intl'
import { Header } from '../../../header'
import { transformAppNavigationLists } from './lib'
import getNavigationItems from './navigation-items'
import { UserContext } from '../../../../../context/userContext'

export const NavigationItem = styled.li`
  list-style-type: none;
  color: ${(props) => props?.theme?.colors?.white};
  opacity: ${(props: { active: boolean }) => (props?.active ? 1 : 0.5)};
`

export const AppNavigation: React.FC = () => {
  const { user } = React.useContext(UserContext)
  const intl = useIntl()

  return (
    <Header
      lists={transformAppNavigationLists(getNavigationItems(intl, user))}
    />
  )
}
