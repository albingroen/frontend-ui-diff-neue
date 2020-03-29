import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Sidebar } from '../../../..'
import getSidebarItems from './sidebar-items'

export const AppSidebar = () => {
  const location = useLocation()

  return <Sidebar items={getSidebarItems(location)} />
}
