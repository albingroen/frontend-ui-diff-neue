import * as React from "react";
import { Header } from "../../../header";
import styled from "styled-components";
import { translateAppNavigationLists } from "./lib";
import { useIntl } from "react-intl";
import getNavigationItems from "./navigation-items";

export const NavigationItem = styled.li`
  list-style-type: none;
  color: ${props => props?.theme?.colors?.white};
  padding: ${props =>
    `${props?.theme?.space[3]}px ${props?.theme?.space[2]}px`};
  opacity: ${(props: { active: boolean }) => (props?.active ? 1 : 0.5)};
`;

export const AppNavigation: React.FC = () => {
  const intl = useIntl();

  return (
    <Header lists={translateAppNavigationLists(getNavigationItems(intl))} />
  );
};
