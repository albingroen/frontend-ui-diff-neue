import * as React from "react";
import queryString from "query-string";
import styled from "styled-components";
import Side from "./components/side";
import Right from "./components/right";
import { UserContext } from "../../context/userContext";
import auth from "../../lib/auth";
import Loading from "../../components/loading";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

export const Signup: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { setUser } = React.useContext(UserContext);

  React.useEffect(() => {
    const { code, method } = queryString.parse(window.location.search);

    if (code && typeof code === "string" && typeof method === "string") {
      setIsLoading(true);
      auth.social.signup(method, code).catch(() => {
        setIsLoading(false)
      })
    }
  }, [setUser]);

  return isLoading ? (
    <Loading />
  ) : (
    <Wrapper>
      <Side />
      <Right />
    </Wrapper>
  );
};
