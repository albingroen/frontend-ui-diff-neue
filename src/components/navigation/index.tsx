import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Root = styled.nav`
  background-color: ${props => props?.theme?.colors?.black};
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
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

const Item = styled.li`
  list-style-type: none;
  color: ${props => props?.theme?.colors?.white};
  padding: ${props =>
    `${props?.theme?.space[3]}px ${props?.theme?.space[2]}px`};
  opacity: ${(props: { active: boolean }) => (props?.active ? 1 : 0.5)};
`;

export interface ListItem {
  value: string;
  link: string;
  key: number;
  active: boolean;
}

interface INavigationProps {
  listItems?: ListItem[];
}

export const Navigation = ({ listItems }: INavigationProps) => {
  return (
    <Root>
      <Wrapper>
        <List>
          {listItems?.map((listItem: ListItem) => (
            <Link to={listItem.link} key={listItem.key}>
              <Item active={listItem.active}>{listItem.value}</Item>
            </Link>
          ))}
        </List>
      </Wrapper>
    </Root>
  );
};
