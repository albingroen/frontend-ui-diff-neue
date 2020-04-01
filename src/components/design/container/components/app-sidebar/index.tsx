import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../../..'
import getSidebarItems from './sidebar-items'
import { useIntl } from 'react-intl'

export const AppSidebar = () => {
  const intl = useIntl()
  const location = useLocation()

  return <Sidebar items={getSidebarItems(intl, location)} />
}
