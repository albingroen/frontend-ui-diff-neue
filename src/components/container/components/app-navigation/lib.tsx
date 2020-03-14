import React from "react";
import { NavigationItem } from ".";
import { Link } from "react-router-dom";
import { List } from "../../../navigation";

interface CustomNavigationList {
  key: number;
  items: CustomNavigationListItem[];
}

interface CustomNavigationListItem {
  value: React.ReactNode | string;
  link: string;
  key: number;
  active: boolean;
}

export const formatLists = (lists: CustomNavigationList[]): List[] =>
  lists.map((list: CustomNavigationList) => ({
    key: list.key,
    items: list.items.map((listItem: CustomNavigationListItem) => ({
      key: listItem.key,
      node: (
        <Link to={listItem.link} key={listItem.key}>
          <NavigationItem active={listItem.active}>
            {listItem.value}
          </NavigationItem>
        </Link>
      )
    }))
  }));
