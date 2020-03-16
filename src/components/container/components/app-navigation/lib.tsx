import React from "react";
import { NavigationItem } from ".";
import { Link } from "react-router-dom";
import { Header } from "../../../header/types";
import {
  AppNavigation,
  AppNavigationList,
  AppNavigationListItem
} from "./types";

export const translateAppNavigationLists = (lists: AppNavigation): Header =>
  lists.map((list: AppNavigationList) => ({
    key: list.key,
    items: list.items.map((listItem: AppNavigationListItem) => ({
      key: listItem.key,
      node: listItem.link ? (
        <Link to={listItem.link} key={listItem.key}>
          <NavigationItem active={listItem.active}>
            {listItem.value}
          </NavigationItem>
        </Link>
      ) : (
        <NavigationItem active={listItem.active}>
          {listItem.value}
        </NavigationItem>
      )
    }))
  }));
