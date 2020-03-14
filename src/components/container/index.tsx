import * as React from "react";
import styled from "styled-components";
import { Navigation, ListItem } from "../navigation";

const Content = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props =>
    `${props?.theme?.space[4]}px ${props?.theme?.space[2]}px`};
`;

interface IContainerProps {
  children?: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  const listItems: ListItem[] = [
    {
      value: "Projects",
      link: "/",
      key: 1,
      active: window.location.pathname === "/"
    },
    {
      value: "Members",
      link: "/members",
      key: 2,
      active: window.location.pathname === "/members"
    },
    {
      value: "Audit log",
      link: "/audit-log",
      key: 3,
      active: window.location.pathname === "/audit-log"
    },
    {
      value: "Team settings",
      link: "/team-settings",
      key: 4,
      active: window.location.pathname === "/team-settings"
    },
    {
      value: "Billing",
      link: "/billing",
      key: 5,
      active: window.location.pathname === "/billing"
    }
  ];

  return (
    <>
      <Navigation listItems={listItems} />
      <Content>{children}</Content>
    </>
  );
};
