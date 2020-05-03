import * as React from 'react'
import { Link } from 'react-router-dom'
import { NavigationItem } from '.'
import { Header } from '../../../header/types'
import {
  AppNavigation,
  AppNavigationList,
  AppNavigationListItem
} from './types'

export const transformAppNavigationLists = (lists: AppNavigation): Header =>
  lists.map((list: AppNavigationList) => ({
    key: list.key,
    items: list.items.map((listItem: AppNavigationListItem) => ({
      key: listItem.key,
      node: listItem.link ? (
        <Link to={listItem.link} key={listItem.key}>
          <NavigationItem active={listItem.active} style={listItem.style}>
            {listItem.value}
          </NavigationItem>
        </Link>
      ) : (
        <NavigationItem
          key={listItem.key}
          active={listItem.active}
          style={listItem.style}
        >
          {listItem.value}
        </NavigationItem>
      )
    }))
  }))
