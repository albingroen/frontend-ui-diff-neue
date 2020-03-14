import * as React from "react";
import styled from "styled-components";

const NavigationRoot = styled.nav`
  background-color: ${props => props?.theme?.colors?.black};
  width: 100%;
`;

const NavigationListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 ${props => props?.theme?.space[2]}px;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }
`;

export interface List {
  key: number;
  items: ListItem[];
}

export interface ListItem {
  node: React.ReactNode | string;
  key: number;
}

interface INavigationProps {
  lists?: List[];
}

export const Navigation = ({ lists }: INavigationProps) => {
  return (
    <NavigationRoot>
      <NavigationListWrapper>
        {lists &&
          lists.map((list: List) => (
            <NavigationList key={list.key}>
              {list.items?.map((listItem: ListItem) => listItem.node)}
            </NavigationList>
          ))}
      </NavigationListWrapper>
    </NavigationRoot>
  );
};
