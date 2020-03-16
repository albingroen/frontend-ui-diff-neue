import * as React from "react";
import styled from "styled-components";
import { AppNavigation } from "./components/app-navigation";
import { loggedIn } from "../../lib/auth";

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

export const Container: React.FC<IContainerProps> = ({ children }) => {
  const isOnSignup = window.location.pathname.includes("/signup");
  const withoutTemplate = isOnSignup || !loggedIn;

  return withoutTemplate ? (
    <>{children}</>
  ) : (
    <>
      <AppNavigation />
      <Content>{children}</Content>
    </>
  );
};
