import * as React from "react";
import styled from "styled-components";
import { AppNavigation } from "./components/app-navigation";

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
  return (
    <>
      <AppNavigation />
      <Content>{children}</Content>
    </>
  );
};
