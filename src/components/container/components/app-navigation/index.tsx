import * as React from "react";
import { Navigation } from "../../../navigation";
import styled from "styled-components";
import { ButtonPrimary } from "@primer/components";
import { formatLists } from "./lib";

export const NavigationItem = styled.li`
  list-style-type: none;
  color: ${props => props?.theme?.colors?.white};
  padding: ${props =>
    `${props?.theme?.space[3]}px ${props?.theme?.space[2]}px`};
  opacity: ${(props: { active: boolean }) => (props?.active ? 1 : 0.5)};
`;

export const AppNavigation = () => (
  <Navigation
    lists={formatLists([
      {
        key: 1,
        items: [
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
        ]
      },
      {
        key: 2,
        items: [
          {
            value: <ButtonPrimary>New project</ButtonPrimary>,
            link: "/new-project",
            key: 1,
            active: true
          }
        ]
      }
    ])}
  />
);
